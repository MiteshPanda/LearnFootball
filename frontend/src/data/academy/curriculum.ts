// Curriculum data — used by all lesson pages for navigation, metadata, and module structure.

export type Difficulty = "beginner" | "intermediate" | "advanced";

export interface Lesson {
  slug: string;
  title: string;
  description: string;
  readingTime: number; // minutes
  difficulty: Difficulty;
  emoji: string;
  category?: string; // e.g. "attacking", "defensive", "pressing", "buildup", "modern", "philosophies", "roles"
}

export interface Module {
  slug: string;
  title: string;
  icon: string;
  color: string; // Tailwind gradient classes
  borderColor: string;
  description: string;
  level: number;
  lessons: Lesson[];
}

export const curriculum: Module[] = [
  {
    slug: "rules",
    title: "Rules of the Game",
    icon: "📏",
    color: "from-emerald-500/15 to-green-600/15",
    borderColor: "border-emerald-500/30",
    description: "Understand how football is played — from kick-off to final whistle.",
    level: 1,
    lessons: [
      { slug: "how-a-match-works", title: "How a Match Works", description: "Structure of a football match, from kick-off to final whistle.", readingTime: 4, difficulty: "beginner", emoji: "⏱️" },
      { slug: "offside", title: "The Offside Rule", description: "One of football's most misunderstood rules, explained clearly.", readingTime: 5, difficulty: "beginner", emoji: "🚩" },
      { slug: "fouls", title: "Fouls & Misconduct", description: "What counts as a foul and how referees apply the rules.", readingTime: 4, difficulty: "beginner", emoji: "🦵" },
      { slug: "cards", title: "Yellow & Red Cards", description: "The card system, its consequences, and famous moments.", readingTime: 3, difficulty: "beginner", emoji: "🟨" },
      { slug: "free-kicks", title: "Free Kicks", description: "Direct and indirect free kicks — rules and tactics.", readingTime: 4, difficulty: "beginner", emoji: "⚽" },
      { slug: "penalties", title: "Penalty Kicks", description: "When penalties are awarded, how they work, and penalty shootouts.", readingTime: 5, difficulty: "beginner", emoji: "🎯" },
      { slug: "var", title: "VAR Explained", description: "How Video Assistant Referee technology works in modern football.", readingTime: 5, difficulty: "intermediate", emoji: "📺" },
    ],
  },
  {
    slug: "positions",
    title: "Player Positions",
    icon: "👥",
    color: "from-blue-500/15 to-cyan-600/15",
    borderColor: "border-blue-500/30",
    description: "Learn every position on the pitch and the role each player plays.",
    level: 2,
    lessons: [
      { slug: "goalkeeper", title: "Goalkeeper (GK)", description: "The last line of defence — what makes a great goalkeeper.", readingTime: 4, difficulty: "beginner", emoji: "🧤" },
      { slug: "defender", title: "Defenders (CB, FB, WB)", description: "Centre-backs, full-backs, and wing-backs — roles and responsibilities.", readingTime: 5, difficulty: "beginner", emoji: "🛡️" },
      { slug: "midfielder", title: "Midfielders", description: "The engine room of any team — different types of midfielders.", readingTime: 5, difficulty: "beginner", emoji: "⚙️" },
      { slug: "attacker", title: "Attackers", description: "Strikers, wingers, and forwards — how they score goals.", readingTime: 4, difficulty: "beginner", emoji: "⚡" },
      { slug: "number-6", title: "The Number 6 (Defensive Mid)", description: "The shield in front of the defence — the anchor midfielder.", readingTime: 5, difficulty: "intermediate", emoji: "6️⃣" },
      { slug: "number-8", title: "The Number 8 (Box-to-Box)", description: "The complete midfielder who does everything across the pitch.", readingTime: 5, difficulty: "intermediate", emoji: "8️⃣" },
      { slug: "number-10", title: "The Number 10 (Playmaker)", description: "Football's most creative role — the classic attacking playmaker.", readingTime: 5, difficulty: "intermediate", emoji: "🔟" },
      { slug: "false-9", title: "The False 9", description: "The striker who isn't really a striker — a revolutionary concept.", readingTime: 6, difficulty: "intermediate", emoji: "🔀" },
    ],
  },
  {
    slug: "formations",
    title: "Formations",
    icon: "📐",
    color: "from-violet-500/15 to-purple-600/15",
    borderColor: "border-violet-500/30",
    description: "Discover how teams line up — from classic 4-4-2 to modern asymmetric shapes.",
    level: 3,
    lessons: [
      { slug: "4-4-2", title: "The 4-4-2 Formation", description: "The most iconic formation in football history — balanced and effective.", readingTime: 6, difficulty: "intermediate", emoji: "⬜" },
      { slug: "4-3-3", title: "The 4-3-3 Formation", description: "The attacking system beloved by Barcelona and Ajax.", readingTime: 6, difficulty: "intermediate", emoji: "🔺" },
      { slug: "4-3-2-1", title: "The 4-3-2-1 Formation", description: "The 'Christmas Tree' formation, featuring dual narrow attacking midfielders.", readingTime: 5, difficulty: "intermediate", emoji: "🎄" },
      { slug: "4-3-1-2", title: "The 4-3-1-2 Formation", description: "A narrow diamond midfield setup supporting two strikers.", readingTime: 5, difficulty: "intermediate", emoji: "💎" },
      { slug: "4-2-3-1", title: "The 4-2-3-1 Formation", description: "One of the most popular modern systems — structured and versatile.", readingTime: 6, difficulty: "intermediate", emoji: "🔷" },
      { slug: "4-2-1-3", title: "The 4-2-1-3 Formation", description: "Features a double pivot, a single playmaker, and a dynamic front three.", readingTime: 5, difficulty: "intermediate", emoji: "🔱" },
      { slug: "4-1-4-1", title: "The 4-1-4-1 Formation", description: "A highly disciplined system with a defensive anchor and flat midfield line.", readingTime: 5, difficulty: "intermediate", emoji: "🛡️" },
      { slug: "4-1-2-3", title: "The 4-1-2-3 Formation", description: "An aggressive layout with a defensive anchor and two creative central mids.", readingTime: 5, difficulty: "intermediate", emoji: "⚡" },
      { slug: "3-4-3", title: "The 3-4-3 Formation", description: "An wingback-driven structure that transitions into five defenders.", readingTime: 6, difficulty: "advanced", emoji: "📐" },
      { slug: "3-2-4-1", title: "The 3-2-4-1 Formation", description: "Pep Guardiola's signature buildup structure with a box midfield.", readingTime: 6, difficulty: "advanced", emoji: "📦" },
      { slug: "3-2-3-2", title: "The 3-2-3-2 Formation", description: "A complex formation with three center backs, a double pivot, and dual strikers.", readingTime: 6, difficulty: "advanced", emoji: "⚙️" },
      { slug: "3-1-4-2", title: "The 3-1-4-2 Formation", description: "A single-pivot three-back system optimized for wing play and twin strikers.", readingTime: 6, difficulty: "advanced", emoji: "🧭" },
      { slug: "5-3-2", title: "The 5-3-2 Formation", description: "A defensively secure system with flying wing-backs and a midfield trio.", readingTime: 5, difficulty: "intermediate", emoji: "🧱" },
      { slug: "5-2-2-1", title: "The 5-2-2-1 Formation", description: "A compact low-block layout with five defenders, a double pivot, and a lone striker.", readingTime: 5, difficulty: "intermediate", emoji: "🎯" },
      { slug: "5-2-1-2", title: "The 5-2-1-2 Formation", description: "Features three center backs, two wingbacks, a playmaker, and two strikers.", readingTime: 5, difficulty: "intermediate", emoji: "🎪" },
    ],
  },
  {
    slug: "tactics",
    title: "Tactical Concepts",
    icon: "🧠",
    color: "from-amber-500/15 to-orange-600/15",
    borderColor: "border-amber-500/30",
    description: "Go deeper into the ideas that separate good teams from great ones.",
    level: 4,
    lessons: [
      // Attacking Tactics
      { slug: "tiki-taka", title: "Tiki-Taka", description: "Pep Guardiola's Barcelona and how they dominated football with passing.", readingTime: 6, difficulty: "intermediate", emoji: "🎨", category: "attacking" },
      { slug: "positional-play", title: "Positional Play", description: "The Guardiola philosophy of controlling space and creating numerical superiority.", readingTime: 7, difficulty: "advanced", emoji: "🗺️", category: "attacking" },
      { slug: "total-football", title: "Total Football", description: "The revolutionary Dutch system where any outfield player can take any role.", readingTime: 6, difficulty: "advanced", emoji: "🌟", category: "attacking" },
      { slug: "gegenpressing-attack", title: "Gegenpressing (Attacking)", description: "How teams press immediately after losing the ball to generate quick transitions.", readingTime: 7, difficulty: "advanced", emoji: "🔥", category: "attacking" },
      { slug: "vertical-tiki-taka", title: "Vertical Tiki-Taka", description: "A high-tempo, possession-based style focused on direct vertical penetration.", readingTime: 6, difficulty: "advanced", emoji: "⚡", category: "attacking" },
      { slug: "direct-football", title: "Direct Football", description: "Bypassing the midfield to transition the ball rapidly to the attacking line.", readingTime: 5, difficulty: "beginner", emoji: "🚀", category: "attacking" },
      { slug: "wing-play", title: "Wing Play", description: "Stretching the opponent horizontally using wide midfielders and wingers.", readingTime: 5, difficulty: "beginner", emoji: "🦅", category: "attacking" },
      { slug: "overlapping-fullbacks", title: "Overlapping Fullbacks", description: "Fullbacks making outside runs past wingers to create crossing opportunities.", readingTime: 5, difficulty: "intermediate", emoji: "🏃", category: "attacking" },
      { slug: "underlapping-fullbacks", title: "Underlapping Fullbacks", description: "Fullbacks making inside runs through the half-spaces to support attacks.", readingTime: 5, difficulty: "intermediate", emoji: "🏃‍♂️", category: "attacking" },
      { slug: "counter-attacking", title: "Counter-Attacking", description: "Exploding forward in devastating transitions after winning the ball deep.", readingTime: 6, difficulty: "intermediate", emoji: "⚡", category: "attacking" },
      { slug: "fast-transitions", title: "Fast Transition Attacks", description: "Moving the ball from defense to attack in under 10 seconds to catch defenses open.", readingTime: 5, difficulty: "intermediate", emoji: "⏳", category: "attacking" },
      { slug: "false-9-system", title: "False 9 System", description: "A striker who drops deep into midfield to draw defenders out of line.", readingTime: 6, difficulty: "advanced", emoji: "🔀", category: "attacking" },
      { slug: "target-man-system", title: "Target Man System", description: "Utilizing a physically dominant striker to hold up the ball and link up play.", readingTime: 5, difficulty: "intermediate", emoji: "🎯", category: "attacking" },
      { slug: "crossing-aerial", title: "Crossing & Aerial Attack", description: "Delivering aerial crosses from wide areas to feed tall target strikers.", readingTime: 5, difficulty: "beginner", emoji: "✈️", category: "attacking" },
      { slug: "third-man-runs", title: "Third-Man Runs", description: "A classic pattern where player A passes to B to attract pressure, while C runs in behind.", readingTime: 6, difficulty: "advanced", emoji: "🏃‍♀️", category: "attacking" },
      { slug: "half-space-exploitation", title: "Half-Space Exploitation", description: "Attacking the corridors between the wings and the center of the pitch.", readingTime: 6, difficulty: "advanced", emoji: "📐", category: "attacking" },
      { slug: "inverted-wingers-attack", title: "Inverted Wingers", description: "Wingers playing on their opposite foot who cut inside to shoot or assist.", readingTime: 5, difficulty: "intermediate", emoji: "↪️", category: "attacking" },
      { slug: "wide-wingers-attack", title: "Wide Wingers", description: "Traditional wingers who hug the touchline to stretch defensive blocks.", readingTime: 5, difficulty: "beginner", emoji: "↔️", category: "attacking" },
      { slug: "fluid-front-three", title: "Fluid Front Three", description: "Constant interchanging of positions between the front three attackers.", readingTime: 6, difficulty: "advanced", emoji: "🌊", category: "attacking" },
      { slug: "two-striker-partnership", title: "Two-Striker Partnership", description: "Classic strike duos collaborating to break down central defenses.", readingTime: 5, difficulty: "intermediate", emoji: "👥", category: "attacking" },
      { slug: "route-one", title: "Route One Football", description: "Punting long balls directly from goalkeeper or defenders to forwards.", readingTime: 5, difficulty: "beginner", emoji: "🧱", category: "attacking" },

      // Defensive Tactics
      { slug: "low-block", title: "The Low Block", description: "Defending deep — when, why, and how teams use a deep defensive block.", readingTime: 6, difficulty: "intermediate", emoji: "🧱", category: "defensive" },
      { slug: "mid-block", title: "The Mid Block", description: "Positioning the defensive block in the center third to maintain stability.", readingTime: 5, difficulty: "intermediate", emoji: "🛡️", category: "defensive" },
      { slug: "high-block", title: "The High Block", description: "Holding a high defensive line to compress the pitch and support pressing.", readingTime: 5, difficulty: "advanced", emoji: "⚠️", category: "defensive" },
      { slug: "high-press-defense", title: "High Press", description: "Defending high up the pitch to force mistakes near the opponent's goal.", readingTime: 6, difficulty: "advanced", emoji: "📈", category: "defensive" },
      { slug: "mid-press-defense", title: "Mid Press", description: "Delaying press until the opponent crosses into the middle third.", readingTime: 5, difficulty: "intermediate", emoji: "⚙️", category: "defensive" },
      { slug: "low-press-defense", title: "Low Press", description: "Sitting deep and allowing the opponent's defenders to keep the ball.", readingTime: 5, difficulty: "beginner", emoji: "⬇️", category: "defensive" },
      { slug: "man-marking", title: "Man Marking", description: "Assigning defenders to track specific opposing players across the field.", readingTime: 5, difficulty: "beginner", emoji: "👤", category: "defensive" },
      { slug: "zonal-marking", title: "Zonal Marking", description: "Defenders covering specific zones on the pitch rather than tracking players.", readingTime: 5, difficulty: "intermediate", emoji: "🌐", category: "defensive" },
      { slug: "hybrid-marking", title: "Hybrid Marking", description: "Combining man-marking and zonal marking to defend complex sets.", readingTime: 6, difficulty: "advanced", emoji: "🧬", category: "defensive" },
      { slug: "park-the-bus", title: "Parking the Bus", description: "An extreme low block prioritizing defensive numbers over any attack.", readingTime: 5, difficulty: "beginner", emoji: "🚌", category: "defensive" },
      { slug: "compact-defense", title: "Compact Defense", description: "Maintaining tight horizontal and vertical spacing to block passing lanes.", readingTime: 5, difficulty: "intermediate", emoji: "🔒", category: "defensive" },
      { slug: "offside-trap", title: "The Offside Trap", description: "Stepping up in unison to catch opposing runs behind the defense.", readingTime: 5, difficulty: "intermediate", emoji: "🚩", category: "defensive" },
      { slug: "sweeper-system", title: "The Sweeper System", description: "Using a dedicated free defender behind the main backline.", readingTime: 6, difficulty: "advanced", emoji: "🧹", category: "defensive" },
      { slug: "cover-shadow", title: "Cover Shadow Defending", description: "Blocking passing routes behind oneself while closing down the ball carrier.", readingTime: 5, difficulty: "advanced", emoji: "👥", category: "defensive" },

      // Pressing Systems
      { slug: "gegenpress", title: "Gegenpress", description: "The German philosophy of pressing immediately upon turnover.", readingTime: 6, difficulty: "advanced", emoji: "🔥", category: "pressing" },
      { slug: "counter-press", title: "Counter-Press", description: "Short-term aggressive pressing immediately after possession loss.", readingTime: 5, difficulty: "advanced", emoji: "⚡", category: "pressing" },
      { slug: "high-press", title: "High Pressing", description: "Engaging opponents high in their half to choke off passing lines.", readingTime: 5, difficulty: "intermediate", emoji: "📈", category: "pressing" },
      { slug: "midfield-press", title: "Midfield Pressing", description: "Waiting to activate pressure until the ball enters the central zone.", readingTime: 5, difficulty: "intermediate", emoji: "⚙️", category: "pressing" },
      { slug: "trigger-press", title: "Trigger Pressing", description: "Pressing when specific indicators occur (backpass, bad touch).", readingTime: 6, difficulty: "advanced", emoji: "🎯", category: "pressing" },
      { slug: "trap-press", title: "Pressing Traps", description: "Funneling the ball to specific areas to double-team the player.", readingTime: 6, difficulty: "advanced", emoji: "🕸️", category: "pressing" },
      { slug: "man-oriented-press", title: "Man-Oriented Pressing", description: "Pressing setup where players match up 1v1 with nearby options.", readingTime: 6, difficulty: "advanced", emoji: "👤", category: "pressing" },
      { slug: "zonal-press", title: "Zonal Pressing", description: "Pressing as a unit to cut off passing options in a target zone.", readingTime: 5, difficulty: "intermediate", emoji: "🌐", category: "pressing" },
      { slug: "ball-oriented-press", title: "Ball-Oriented Pressing", description: "Compressing space immediately surrounding the position of the ball.", readingTime: 6, difficulty: "advanced", emoji: "⚽", category: "pressing" },

      // Build Up Play
      { slug: "gk-buildup", title: "Goalkeeper Build-Up", description: "Using the goalkeeper as an extra outfield player during early buildup.", readingTime: 5, difficulty: "intermediate", emoji: "🧤", category: "buildup" },
      { slug: "short-passing-buildup", title: "Short Passing Build-Up", description: "Constructing attacks from the back using high-frequency short passes.", readingTime: 5, difficulty: "beginner", emoji: "🤝", category: "buildup" },
      { slug: "long-ball-buildup", title: "Long Ball Build-Up", description: "Bypassing high-pressure setups using accurate long-distance passes.", readingTime: 5, difficulty: "beginner", emoji: "🚀", category: "buildup" },
      { slug: "split-cb", title: "Split Center-Backs", description: "Spreading central defenders wide to make pressing distances longer.", readingTime: 5, difficulty: "intermediate", emoji: "↔️", category: "buildup" },
      { slug: "double-pivot", title: "Double Pivot Build-Up", description: "Using two holding midfielders to build a clean connection to attack.", readingTime: 6, difficulty: "intermediate", emoji: "👥", category: "buildup" },
      { slug: "single-pivot", title: "Single Pivot Build-Up", description: "Relying on a lone, elite anchor midfielder to guide the buildup phase.", readingTime: 6, difficulty: "advanced", emoji: "👤", category: "buildup" },
      { slug: "box-midfield-buildup", title: "Box Midfield Buildup", description: "Setting up a 3-2-4-1 box in central areas to bypass presses.", readingTime: 6, difficulty: "advanced", emoji: "📦", category: "buildup" },
      { slug: "buildup-thirds", title: "Build-Up Through Thirds", description: "Systematically moving the ball from defense to midfield to attack.", readingTime: 6, difficulty: "intermediate", emoji: "🧱", category: "buildup" },
      { slug: "inverted-fullback-buildup", title: "Inverted Fullback Build-Up", description: "Moving a fullback into central midfield to build a numerical edge.", readingTime: 6, difficulty: "advanced", emoji: "🔄", category: "buildup" },
      { slug: "la-volpe-exit", title: "La Volpe Exit", description: "Dropping a defensive midfielder between center-backs to construct a 3-man backline.", readingTime: 6, difficulty: "advanced", emoji: "🦊", category: "buildup" },

      // Modern Tactical Concepts
      { slug: "inverted-fullbacks", title: "Inverted Fullbacks", description: "Fullbacks shifting inside to act as defensive midfielders in possession.", readingTime: 6, difficulty: "advanced", emoji: "🔄", category: "modern" },
      { slug: "inverted-wingers", title: "Inverted Wingers", description: "Wingers who deploy on opposite wings to cut inside onto their dominant foot.", readingTime: 5, difficulty: "intermediate", emoji: "↪️", category: "modern" },
      { slug: "false-9", title: "False 9", description: "Strikers who pull defenders out of position by dropping deep into midfield.", readingTime: 6, difficulty: "advanced", emoji: "🔀", category: "modern" },
      { slug: "false-fullback", title: "False Fullback", description: "Fullbacks who move high and inside, functioning like attacking playmakers.", readingTime: 6, difficulty: "advanced", emoji: "🔀", category: "modern" },
      { slug: "free-role", title: "Free Role", description: "Allowing a highly creative player freedom to roam across zones.", readingTime: 5, difficulty: "intermediate", emoji: "🕊️", category: "modern" },
      { slug: "mezzala", title: "Mezzala", description: "An central midfielder who drifts wide to attack half-spaces.", readingTime: 6, difficulty: "advanced", emoji: "🏃", category: "modern" },
      { slug: "regista", title: "Regista", description: "A deep-lying playmaker directing operations from in front of defense.", readingTime: 6, difficulty: "advanced", emoji: "👑", category: "modern" },
      { slug: "trequartista", title: "Trequartista", description: "A creative attacking midfielder exempt from major defensive duties.", readingTime: 6, difficulty: "advanced", emoji: "🎩", category: "modern" },
      { slug: "deep-playmaker", title: "Deep-Lying Playmaker", description: "A playmaker stationed deep in midfield who orchestrates long passing.", readingTime: 5, difficulty: "intermediate", emoji: "🧭", category: "modern" },
      { slug: "enganche", title: "Enganche", description: "A classic Argentinian playmaker who sits stationary as a link man.", readingTime: 6, difficulty: "advanced", emoji: "⚓", category: "modern" },
      { slug: "carrilero", title: "Carrilero", description: "A shuttle midfielder covering lateral spaces between lines.", readingTime: 5, difficulty: "intermediate", emoji: "🚀", category: "modern" },
      { slug: "libero", title: "Libero", description: "A sweeping defender with the freedom to carry the ball into midfield.", readingTime: 6, difficulty: "advanced", emoji: "🛡️", category: "modern" },
      { slug: "shadow-striker", title: "Shadow Striker", description: "An attacking midfielder who bursts forward to score behind a target striker.", readingTime: 5, difficulty: "intermediate", emoji: "👥", category: "modern" },
      { slug: "raumdeuter", title: "Raumdeuter", description: "A 'space interpreter' who exploits tiny holes in defenses from wide.", readingTime: 7, difficulty: "advanced", emoji: "🗺️", category: "modern" },
      { slug: "box-midfield", title: "Box Midfield", description: "A central structure using four midfielders to dominate central play.", readingTime: 6, difficulty: "advanced", emoji: "📦", category: "modern" },
      { slug: "wm-structure", title: "WM Structure", description: "The classic Herbert Chapman setup forming a W and an M shape.", readingTime: 5, difficulty: "intermediate", emoji: "🔠", category: "modern" },
      { slug: "pyramid-structure", title: "Pyramid Structure", description: "The historic 2-3-5 alignment that dominated early football.", readingTime: 5, difficulty: "beginner", emoji: "🔺", category: "modern" },

      // Tactical Philosophies
      { slug: "michels-total-football", title: "Total Football (Michels)", description: "The foundational Ajax and Dutch philosophy of space and fluid rotation.", readingTime: 6, difficulty: "advanced", emoji: "🌟", category: "philosophies" },
      { slug: "cruyff-positional-football", title: "Cruyff's Positional Football", description: "Johan Cruyff's style based on triangles, diamond midfields, and style.", readingTime: 7, difficulty: "advanced", emoji: "🇳🇱", category: "philosophies" },
      { slug: "guardiola-juego-posicion", title: "Guardiola's Juego de Posición", description: "Pep's rigid space structures that create free men on the pitch.", readingTime: 7, difficulty: "advanced", emoji: "🧠", category: "philosophies" },
      { slug: "klopp-gegenpressing", title: "Klopp's Gegenpressing", description: "Heavy-metal football focused on winning the ball in high transitions.", readingTime: 6, difficulty: "advanced", emoji: "🔥", category: "philosophies" },
      { slug: "mourinho-pragmatism", title: "Mourinho's Pragmatic Defense", description: "Defending deep, denying spaces, and using counter-attacks.", readingTime: 6, difficulty: "intermediate", emoji: "🛡️", category: "philosophies" },
      { slug: "ancelotti-flexibility", title: "Ancelotti's Flexible Mastery", description: "Adapting system to fits players' qualities to keep them happy.", readingTime: 5, difficulty: "intermediate", emoji: "👔", category: "philosophies" },
      { slug: "bielsa-man-pressing", title: "Bielsa's Man-Oriented Press", description: "Marcelo Bielsa's high-intensity system of tracking runners.", readingTime: 7, difficulty: "advanced", emoji: "🇦🇷", category: "philosophies" },
      { slug: "sacchi-zonal-pressing", title: "Sacchi's Zonal Pressing", description: "The AC Milan system of high-line defensive zones and press.", readingTime: 6, difficulty: "advanced", emoji: "🇮🇹", category: "philosophies" },

      // Tactical Roles
      { slug: "role-goalkeeper", title: "Goalkeeper", description: "Traditional shot-stopping, positioning, and goal defense.", readingTime: 5, difficulty: "beginner", emoji: "🧤", category: "roles" },
      { slug: "role-sweeper-keeper", title: "Sweeper Keeper", description: "Defending outside the box and launching attacks from deep.", readingTime: 5, difficulty: "intermediate", emoji: "🧹", category: "roles" },
      { slug: "role-libero", title: "Libero", description: "Sweeper who advances into midfield to launch attacks.", readingTime: 6, difficulty: "advanced", emoji: "🛡️", category: "roles" },
      { slug: "role-ball-playing-defender", title: "Ball Playing Defender", description: "Center-backs possessing excellent passing range to launch moves.", readingTime: 5, difficulty: "intermediate", emoji: "⚽", category: "roles" },
      { slug: "role-stopper", title: "Stopper", description: "An aggressive center-back who steps up to challenge attackers.", readingTime: 5, difficulty: "beginner", emoji: "🧱", category: "roles" },
      { slug: "role-wing-back", title: "Wing Back", description: "Wide defenders covering the entire wing in three-back systems.", readingTime: 5, difficulty: "intermediate", emoji: "🏃", category: "roles" },
      { slug: "role-inverted-wing-back", title: "Inverted Wing Back", description: "Wing-backs who shift into central midfield during possession.", readingTime: 6, difficulty: "advanced", emoji: "🔄", category: "roles" },
      { slug: "role-full-back", title: "Full Back", description: "Traditional outside defender focused on wing defense.", readingTime: 5, difficulty: "beginner", emoji: "🛡️", category: "roles" },
      { slug: "role-defensive-midfielder", title: "Defensive Midfielder", description: "Shielding central defense and sweeping up loose balls.", readingTime: 5, difficulty: "beginner", emoji: "⚓", category: "roles" },
      { slug: "role-anchor", title: "Anchor", description: "A pure holding midfielder who rarely moves from in front of defense.", readingTime: 5, difficulty: "intermediate", emoji: "⚓", category: "roles" },
      { slug: "role-regista", title: "Regista", description: "A deep playmaker orchestrating patterns from holding midfield.", readingTime: 6, difficulty: "advanced", emoji: "👑", category: "roles" },
      { slug: "role-deep-lying-playmaker", title: "Deep-Lying Playmaker", description: "Orchestrating play from deep with dynamic passing range.", readingTime: 5, difficulty: "intermediate", emoji: "🧭", category: "roles" },
      { slug: "role-box-to-box", title: "Box-to-Box Midfielder", description: "Running box-to-box to contribute to both defense and attack.", readingTime: 5, difficulty: "intermediate", emoji: "🏃‍♂️", category: "roles" },
      { slug: "role-mezzala", title: "Mezzala", description: "A central midfielder who attacks the half-spaces and wings.", readingTime: 6, difficulty: "advanced", emoji: "🏃", category: "roles" },
      { slug: "role-carrilero", title: "Carrilero", description: "A midfielder who slides laterally to cover spaces left by fullbacks.", readingTime: 5, difficulty: "intermediate", emoji: "🧭", category: "roles" },
      { slug: "role-attacking-midfielder", title: "Attacking Midfielder", description: "The creative link playing behind strikers to generate chances.", readingTime: 5, difficulty: "beginner", emoji: "🧠", category: "roles" },
      { slug: "role-trequartista", title: "Trequartista", description: "Playmaker in the final third free of defensive duties.", readingTime: 6, difficulty: "advanced", emoji: "🎩", category: "roles" },
      { slug: "role-enganche", title: "Enganche", description: "Stationary central link playmaker who distributes quickly.", readingTime: 6, difficulty: "advanced", emoji: "⚓", category: "roles" },
      { slug: "role-winger", title: "Winger", description: "Fast wide attacker who crosses the ball from near touchlines.", readingTime: 5, difficulty: "beginner", emoji: "↔️", category: "roles" },
      { slug: "role-inverted-winger", title: "Inverted Winger", description: "Wide attacker cutting inside on opposite foot to shoot.", readingTime: 5, difficulty: "intermediate", emoji: "↪️", category: "roles" },
      { slug: "role-inside-forward", title: "Inside Forward", description: "Wingers who play very high and act like second strikers.", readingTime: 5, difficulty: "intermediate", emoji: "⚡", category: "roles" },
      { slug: "role-shadow-striker", title: "Shadow Striker", description: "Second striker arriving late in the box to convert flick-ons.", readingTime: 5, difficulty: "intermediate", emoji: "👤", category: "roles" },
      { slug: "role-false-9", title: "False 9", description: "A forward dropping into midfield to confuse center-backs.", readingTime: 6, difficulty: "advanced", emoji: "🔀", category: "roles" },
      { slug: "role-target-man", title: "Target Man", description: "A tall striker who holds up play and wins aerial battles.", readingTime: 5, difficulty: "beginner", emoji: "🎯", category: "roles" },
      { slug: "role-poacher", title: "Poacher", description: "A clinical box striker who scores from close range.", readingTime: 5, difficulty: "beginner", emoji: "🥅", category: "roles" },
      { slug: "role-pressing-forward", title: "Pressing Forward", description: "Striker whose main job is to trigger the high press.", readingTime: 5, difficulty: "intermediate", emoji: "🏃‍♂️", category: "roles" },
      { slug: "role-complete-forward", title: "Complete Forward", description: "Possessing stats to hold up, create, score, and press.", readingTime: 6, difficulty: "advanced", emoji: "👑", category: "roles" },
    ],
  },
  {
    slug: "history",
    title: "Football History",
    icon: "📜",
    color: "from-rose-500/15 to-red-600/15",
    borderColor: "border-rose-500/30",
    description: "Where football came from and the legends who shaped it.",
    level: 5,
    lessons: [
      { slug: "origins", title: "Origins of Football", description: "How the beautiful game was born in England and spread around the world.", readingTime: 5, difficulty: "beginner", emoji: "🌍" },
      { slug: "world-cup-history", title: "World Cup History", description: "The greatest tournament on Earth — its origins, winners, and iconic moments.", readingTime: 7, difficulty: "beginner", emoji: "🏆" },
      { slug: "greatest-teams", title: "Greatest Teams Ever", description: "The legendary sides that defined eras — from Cruyff's Ajax to Guardiola's Barca.", readingTime: 7, difficulty: "intermediate", emoji: "👑" },
      { slug: "tactical-evolution", title: "How Tactics Evolved", description: "From WM formation to Total Football to Gegenpressing — how ideas changed the game.", readingTime: 8, difficulty: "intermediate", emoji: "🔄" },
    ],
  },
  {
    slug: "competitions",
    title: "Competitions",
    icon: "🏆",
    color: "from-yellow-500/15 to-amber-600/15",
    borderColor: "border-yellow-500/30",
    description: "Understand the major tournaments and leagues that define world football.",
    level: 6,
    lessons: [
      { slug: "world-cup", title: "FIFA World Cup", description: "The most watched sporting event on the planet — how it works and why it matters.", readingTime: 5, difficulty: "beginner", emoji: "🌍" },
      { slug: "champions-league", title: "UEFA Champions League", description: "Europe's elite club competition — the greatest nights in football.", readingTime: 5, difficulty: "beginner", emoji: "⭐" },
      { slug: "premier-league", title: "The Premier League", description: "The world's most-watched domestic league — history, format, and rivalries.", readingTime: 5, difficulty: "beginner", emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
      { slug: "la-liga", title: "La Liga", description: "Spain's top division — the home of Barcelona and Real Madrid.", readingTime: 5, difficulty: "beginner", emoji: "🇪🇸" },
    ],
  },
];

// Helper: Get a module by slug
export function getModule(moduleSlug: string): Module | undefined {
  return curriculum.find((m) => m.slug === moduleSlug);
}

// Helper: Get a lesson by module + lesson slug
export function getLesson(moduleSlug: string, lessonSlug: string): Lesson | undefined {
  return getModule(moduleSlug)?.lessons.find((l) => l.slug === lessonSlug);
}

// Helper: Get prev/next lessons
export function getLessonNeighbors(moduleSlug: string, lessonSlug: string) {
  const mod = getModule(moduleSlug);
  if (!mod) return { prev: null, next: null };
  const idx = mod.lessons.findIndex((l) => l.slug === lessonSlug);
  return {
    prev: idx > 0 ? mod.lessons[idx - 1] : null,
    next: idx < mod.lessons.length - 1 ? mod.lessons[idx + 1] : null,
  };
}

// Helper: Get total lesson count
export const totalLessons = curriculum.reduce((sum, m) => sum + m.lessons.length, 0);
