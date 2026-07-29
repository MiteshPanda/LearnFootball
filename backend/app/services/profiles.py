import json
import os
import time
import logging
from typing import Dict, List, Any, Optional
import httpx

from app.core.config import get_settings
from app.core.database import SessionLocal
from app.models.models import CoachProfile, PlayerProfile, TeamProfile

logger = logging.getLogger("profiles_service")
settings = get_settings()

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(BASE_DIR, "data")
CACHE_DIR = os.path.join(DATA_DIR, "cache")
STATIC_DB_PATH = os.path.join(DATA_DIR, "profiles_static.json")

# Ensure cache directory exists
os.makedirs(CACHE_DIR, exist_ok=True)

class ProfileService:
    def __init__(self):
        self._static_data = {}
        self._load_static_data()

    def _load_static_data(self):
        """Loads static biography and config data from profiles_static.json."""
        if not os.path.exists(STATIC_DB_PATH):
            logger.error(f"Static profiles DB not found at {STATIC_DB_PATH}")
            self._static_data = {"players": [], "coaches": [], "teams": []}
            return
        
        try:
            with open(STATIC_DB_PATH, "r", encoding="utf-8") as f:
                self._static_data = json.load(f)
            logger.info("Successfully loaded static profiles data.")
        except Exception as e:
            logger.error(f"Error loading static profiles data: {e}")
            self._static_data = {"players": [], "coaches": [], "teams": []}

    def _get_cache_path(self, category: str, slug: str) -> str:
        return os.path.join(CACHE_DIR, f"{category}_{slug}.json")

    def _is_cache_valid(self, cache_path: str) -> bool:
        """Check if cache file exists and is less than 24 hours old."""
        if not os.path.exists(cache_path):
            return False
        
        file_age = time.time() - os.path.getmtime(cache_path)
        return file_age < 86400  # 24 hours in seconds

    def _get_headers(self) -> Dict[str, str]:
        """Generate headers for api-sports.io direct endpoint."""
        return {
            "x-apisports-key": settings.API_FOOTBALL_KEY,
            "Accept": "application/json"
        }

    async def get_players_list(self) -> List[Dict[str, Any]]:
        """Returns simplified list of all players — DB first, JSON fallback."""
        try:
            with SessionLocal() as db:
                rows = db.query(PlayerProfile).order_by(PlayerProfile.name).all()
            if rows:
                return [
                    {
                        "name": p.name,
                        "slug": p.slug,
                        "position": p.position,
                        "country": p.country,
                        "countryName": p.country_name,
                        "active": p.active,
                    }
                    for p in rows
                ]
        except Exception as e:
            logger.warning(f"DB query failed for players list, falling back to static: {e}")

        # Fallback
        return [
            {
                "name": p["name"],
                "slug": p["slug"],
                "position": p["position"],
                "country": p["country"],
                "countryName": p["countryName"],
                "active": p["active"],
            }
            for p in self._static_data.get("players", [])
        ]

    async def get_coaches_list(self) -> List[Dict[str, Any]]:
        """Returns simplified list of all coaches — DB first, JSON fallback."""
        try:
            with SessionLocal() as db:
                rows = db.query(CoachProfile).order_by(CoachProfile.name).all()
            if rows:
                return [
                    {
                        "name": c.name,
                        "slug": c.slug,
                        "philosophy": c.philosophy,
                        "club": c.club,
                        "emoji": c.emoji,
                        "country": c.country,
                        "countryName": c.country_name,
                        "active": c.active,
                    }
                    for c in rows
                ]
        except Exception as e:
            logger.warning(f"DB query failed for coaches list, falling back to static: {e}")

        # Fallback
        return [
            {
                "name": c["name"],
                "slug": c["slug"],
                "philosophy": c["philosophy"],
                "club": c["club"],
                "emoji": c["emoji"],
                "country": c["country"],
                "countryName": c["countryName"],
                "active": c["active"],
            }
            for c in self._static_data.get("coaches", [])
        ]

    async def get_teams_list(self) -> List[Dict[str, Any]]:
        """Returns simplified list of all teams — DB first, JSON fallback."""
        try:
            with SessionLocal() as db:
                rows = db.query(TeamProfile).order_by(TeamProfile.name).all()
            if rows:
                return [
                    {
                        "name": t.name,
                        "slug": t.slug,
                        "flag": t.flag,
                        "titles": t.titles,
                        "style": t.style,
                        "active": t.active,
                    }
                    for t in rows
                ]
        except Exception as e:
            logger.warning(f"DB query failed for teams list, falling back to static: {e}")

        # Fallback
        return [
            {
                "name": t["name"],
                "slug": t["slug"],
                "flag": t["flag"],
                "titles": t["titles"],
                "style": t["style"],
                "active": t["active"],
            }
            for t in self._static_data.get("teams", [])
        ]

    async def get_player_profile(self, slug: str) -> Optional[Dict[str, Any]]:
        """Retrieve player details by slug, merging live stats if active."""
        player = next((p for p in self._static_data.get("players", []) if p["slug"] == slug), None)
        if not player:
            return None

        # Return static profile immediately if inactive/retired
        if not player.get("active") or not player.get("api_id"):
            return player

        cache_path = self._get_cache_path("player", slug)
        
        # Check cache
        if self._is_cache_valid(cache_path):
            try:
                with open(cache_path, "r", encoding="utf-8") as f:
                    return json.load(f)
            except Exception as e:
                logger.error(f"Error reading cache for player {slug}: {e}")

        # Check if API key is present
        if not settings.API_FOOTBALL_KEY:
            logger.warning(f"No API_FOOTBALL_KEY configured, falling back to static player profile: {slug}")
            return player

        # Call api-football
        try:
            async with httpx.AsyncClient() as client:
                # Query players stats for current season (e.g. 2024)
                url = f"https://v3.football.api-sports.io/players?id={player['api_id']}&season=2024"
                response = await client.get(url, headers=self._get_headers(), timeout=10.0)
                
                if response.status_code == 200:
                    data = response.json()
                    results = data.get("response", [])
                    
                    if results:
                        api_player_data = results[0]
                        stats_list = api_player_data.get("statistics", [])
                        
                        # Sum stats across competitions
                        total_apps = 0
                        total_goals = 0
                        total_assists = 0
                        
                        for item in stats_list:
                            games = item.get("games", {}) or {}
                            goals = item.get("goals", {}) or {}
                            
                            total_apps += int(games.get("appearences") or 0)
                            total_goals += int(goals.get("total") or 0)
                            total_assists += int(goals.get("assists") or 0)

                        # Append 2024 season stats to existing career stats (so we don't overwrite career stats)
                        merged_stats = list(player.get("stats", []))
                        merged_stats.extend([
                            {"label": "2024 Apps", "value": f"{total_apps}"},
                            {"label": "2024 Goals", "value": f"{total_goals}"},
                            {"label": "2024 Assists", "value": f"{total_assists}"}
                        ])

                        # Create a merged profile dictionary
                        merged_profile = {**player, "stats": merged_stats}
                        
                        # Write to cache
                        with open(cache_path, "w", encoding="utf-8") as f:
                            json.dump(merged_profile, f, ensure_ascii=False, indent=2)
                        
                        logger.info(f"Successfully fetched and cached player profile: {slug}")
                        return merged_profile
                    else:
                        logger.warning(f"No player response data found from API for ID {player['api_id']}")
                else:
                    logger.error(f"API Football request failed with status {response.status_code}")
        except Exception as e:
            logger.error(f"Exception during fetching player API data for {slug}: {e}")

        # Fallback to static or stale cache on failure
        if os.path.exists(cache_path):
            try:
                with open(cache_path, "r", encoding="utf-8") as f:
                    return json.load(f)
            except:
                pass
        return player

    async def get_coach_profile(self, slug: str) -> Optional[Dict[str, Any]]:
        """Retrieve coach details by slug, merging live stats/timeline if active."""
        coach = next((c for c in self._static_data.get("coaches", []) if c["slug"] == slug), None)
        if not coach:
            return None

        if not coach.get("active") or not coach.get("api_id"):
            return coach

        cache_path = self._get_cache_path("coach", slug)
        
        if self._is_cache_valid(cache_path):
            try:
                with open(cache_path, "r", encoding="utf-8") as f:
                    return json.load(f)
            except Exception as e:
                logger.error(f"Error reading cache for coach {slug}: {e}")

        if not settings.API_FOOTBALL_KEY:
            logger.warning(f"No API_FOOTBALL_KEY configured, falling back to static coach profile: {slug}")
            return coach

        try:
            async with httpx.AsyncClient() as client:
                url = f"https://v3.football.api-sports.io/coachs?id={coach['api_id']}"
                response = await client.get(url, headers=self._get_headers(), timeout=10.0)
                
                if response.status_code == 200:
                    data = response.json()
                    results = data.get("response", [])
                    
                    if results:
                        api_coach_data = results[0]
                        current_team = api_coach_data.get("team", {}).get("name")
                        
                        merged_profile = {**coach}
                        if current_team:
                            merged_profile["club"] = current_team

                        # Write to cache
                        with open(cache_path, "w", encoding="utf-8") as f:
                            json.dump(merged_profile, f, ensure_ascii=False, indent=2)
                        
                        logger.info(f"Successfully fetched and cached coach profile: {slug}")
                        return merged_profile
                    else:
                        logger.warning(f"No coach response data found from API for ID {coach['api_id']}")
                else:
                    logger.error(f"API Football request failed with status {response.status_code}")
        except Exception as e:
            logger.error(f"Exception during fetching coach API data for {slug}: {e}")

        # Fallback
        if os.path.exists(cache_path):
            try:
                with open(cache_path, "r", encoding="utf-8") as f:
                    return json.load(f)
            except:
                pass
        return coach

    async def get_team_profile(self, slug: str) -> Optional[Dict[str, Any]]:
        """Retrieve team details by slug, merging live squads & trophies if active."""
        team = next((t for t in self._static_data.get("teams", []) if t["slug"] == slug), None)
        if not team:
            return None

        if not team.get("active") or not team.get("api_id"):
            return team

        cache_path = self._get_cache_path("team", slug)
        
        if self._is_cache_valid(cache_path):
            try:
                with open(cache_path, "r", encoding="utf-8") as f:
                    return json.load(f)
            except Exception as e:
                logger.error(f"Error reading cache for team {slug}: {e}")

        if not settings.API_FOOTBALL_KEY:
            logger.warning(f"No API_FOOTBALL_KEY configured, falling back to static team profile: {slug}")
            return team

        try:
            async with httpx.AsyncClient() as client:
                headers = self._get_headers()
                
                # 1. Fetch current squad
                squad_url = f"https://v3.football.api-sports.io/players/squads?team={team['api_id']}"
                squad_response = await client.get(squad_url, headers=headers, timeout=10.0)
                
                # 2. Fetch trophies
                trophies_url = f"https://v3.football.api-sports.io/trophies?team={team['api_id']}"
                trophies_response = await client.get(trophies_url, headers=headers, timeout=10.0)
                
                squad_list = []
                if squad_response.status_code == 200:
                    squad_data = squad_response.json().get("response", [])
                    if squad_data:
                        players = squad_data[0].get("players", [])
                        
                        goalkeepers = []
                        defenders = []
                        midfielders = []
                        forwards = []
                        
                        for p in players:
                            num = p.get("number")
                            name = p.get("name") or "Unknown"
                            pos = p.get("position") or "Player"
                            
                            # Clean position names slightly
                            if pos == "Goalkeeper":
                                pos_clean = "Goalkeeper"
                            elif pos == "Defender":
                                pos_clean = "Defender"
                            elif pos == "Midfielder":
                                pos_clean = "Midfielder"
                            else:
                                pos_clean = "Forward"

                            player_item = {
                                "number": int(num) if num is not None else 99,
                                "name": name,
                                "position": pos_clean
                            }
                            
                            if pos_clean == "Goalkeeper":
                                goalkeepers.append(player_item)
                            elif pos_clean == "Defender":
                                defenders.append(player_item)
                            elif pos_clean == "Midfielder":
                                midfielders.append(player_item)
                            else:
                                forwards.append(player_item)
                                
                        # Sort by jersey number, putting 99 last
                        for lst in [goalkeepers, defenders, midfielders, forwards]:
                            lst.sort(key=lambda x: (x["number"] == 99, x["number"]))
                            
                        # Select balanced 11: 1 GK, 4 DEF, 4 MID, 2 FWD
                        selected_players = []
                        if goalkeepers:
                            selected_players.extend(goalkeepers[:1])
                        if defenders:
                            selected_players.extend(defenders[:4])
                        if midfielders:
                            selected_players.extend(midfielders[:4])
                        if forwards:
                            selected_players.extend(forwards[:2])
                            
                        # Fill to 11 if needed from remaining players
                        all_remaining = (
                            goalkeepers[1:] + defenders[4:] + midfielders[4:] + forwards[2:]
                        )
                        all_remaining.sort(key=lambda x: (x["number"] == 99, x["number"]))
                        
                        while len(selected_players) < 11 and all_remaining:
                            selected_players.append(all_remaining.pop(0))
                            
                        # Sort final squad by number
                        selected_players.sort(key=lambda x: (x["number"] == 99, x["number"]))
                        squad_list = selected_players

                trophies_list = []
                if trophies_response.status_code == 200:
                    trophies_data = trophies_response.json().get("response", [])
                    
                    # Count occurrences of main tournament victories
                    counts = {}
                    for item in trophies_data:
                        league = item.get("league") or ""
                        place = item.get("place") or ""
                        if "Winner" in place:
                            counts[league] = counts.get(league, 0) + 1
                    
                    # Merge or update
                    for league_name, count in counts.items():
                        trophies_list.append({
                            "title": league_name,
                            "count": count
                        })
                
                # Construct merged profile
                merged_profile = {**team}
                if squad_list:
                    # Sort squad list by number
                    squad_list.sort(key=lambda x: x["number"])
                    merged_profile["worldCupSquad"] = squad_list
                
                if trophies_list:
                    # Filter major ones or limit to top 4
                    merged_profile["trophies"] = trophies_list[:5]

                # Write to cache
                with open(cache_path, "w", encoding="utf-8") as f:
                    json.dump(merged_profile, f, ensure_ascii=False, indent=2)
                
                logger.info(f"Successfully fetched and cached team profile: {slug}")
                return merged_profile

        except Exception as e:
            logger.error(f"Exception during fetching team API data for {slug}: {e}")

        # Fallback
        if os.path.exists(cache_path):
            try:
                with open(cache_path, "r", encoding="utf-8") as f:
                    return json.load(f)
            except:
                pass
        return team

# Singleton instance
profiles_service = ProfileService()
