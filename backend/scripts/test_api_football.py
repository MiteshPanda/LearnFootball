import asyncio
import sys
import os

# Adjust path to import from app
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.services.profiles import profiles_service

async def run_tests():
    print("=== STARTING BACKEND PROFILES TEST ===")
    
    # 1. Test Listing Players
    print("\n--- Testing Players List ---")
    players = await profiles_service.get_players_list()
    print(f"Total players: {len(players)}")
    for p in players[:3]:
        print(f"- {p['name']} ({p['slug']}) [Active: {p['active']}]")
        
    # 2. Test Listing Coaches
    print("\n--- Testing Coaches List ---")
    coaches = await profiles_service.get_coaches_list()
    print(f"Total coaches: {len(coaches)}")
    for c in coaches[:3]:
        print(f"- {c['name']} ({c['slug']}) [Active: {c['active']}]")
        
    # 3. Test Listing Teams
    print("\n--- Testing Teams List ---")
    teams = await profiles_service.get_teams_list()
    print(f"Total teams: {len(teams)}")
    for t in teams[:3]:
        print(f"- {t['name']} ({t['slug']}) [Active: {t['active']}]")

    # 4. Test Inactive Player (Pelé) - Should bypass API
    print("\n--- Testing Inactive Player (Pelé) ---")
    pele = await profiles_service.get_player_profile("pele")
    if pele:
        print(f"Pele profile retrieved successfully.")
        print(f"Bio preview: {pele['bio'][:80]}...")
        print(f"Goals: {next(s['value'] for s in pele['stats'] if s['label'] == 'Goals')}")
    else:
        print("ERROR: Pele profile not found.")

    # 5. Test Active Player (Lionel Messi) - Should attempt API / cache fallback
    print("\n--- Testing Active Player (Lionel Messi) ---")
    messi = await profiles_service.get_player_profile("lionel-messi")
    if messi:
        print(f"Messi profile retrieved successfully.")
        print(f"Bio preview: {messi['bio'][:80]}...")
        print(f"Stats:")
        for s in messi['stats']:
            print(f"  {s['label']}: {s['value']}")
    else:
        print("ERROR: Messi profile not found.")

    # 6. Test Active Coach (Pep Guardiola)
    print("\n--- Testing Active Coach (Pep Guardiola) ---")
    pep = await profiles_service.get_coach_profile("pep-guardiola")
    if pep:
        print(f"Pep profile retrieved: {pep['name']}")
        print(f"Philosophy: {pep['philosophy']}")
        print(f"Managed clubs count: {len(pep['clubsManaged'])}")
    else:
        print("ERROR: Pep Guardiola profile not found.")

    # 7. Test Active Team (Argentina)
    print("\n--- Testing Active Team (Argentina) ---")
    arg = await profiles_service.get_team_profile("argentina")
    if arg:
        print(f"Argentina profile retrieved: {arg['name']}")
        print(f"Titles: {arg['titles']}")
        print(f"World Cup Squad count: {len(arg.get('worldCupSquad', []))}")
    else:
        print("ERROR: Argentina profile not found.")

    print("\n=== TEST RUN COMPLETED ===")

if __name__ == "__main__":
    asyncio.run(run_tests())
