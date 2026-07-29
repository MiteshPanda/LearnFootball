import { QuizQuestion } from "@/components/academy/LessonQuiz";
import { TacticLesson } from "./attacking";

export const modernTactics: Record<string, TacticLesson> = {
  "inverted-fullbacks": {
    slug: "inverted-fullbacks",
    title: "Inverted Fullbacks",
    description: "Fullbacks shifting inside to act as defensive midfielders in possession.",
    introduction: "Inverted Fullbacks are a defining feature of modern tactics. Instead of staying wide, they move inside to create a double pivot during possession, overloading midfield areas.",
    image: "/images/tactics/inv-fb.png",
    keyElements: ["Central transition", "Midfield support", "Flank exposure", "Positional rotation"],
    sections: [
      { heading: "Midfield Overload", content: "By stepping inside, the fullback creates a numerical advantage in midfield, allowing the team to dictate tempo and control possession easily." },
      { heading: "Defensive Cover", content: "The inverted fullback provides a screen against counter-attacks down the center, though the flank they left remains vulnerable." }
    ],
    quizQuestions: [
      { question: "What is the primary movement of an inverted fullback?", options: ["Running down the touchline", "Moving inside to join the central midfield", "Overlapping the winger", "None"], correctIndex: 1, explanation: "Inverted fullbacks move from wide defense into central midfield during possession." },
      { question: "Why do managers use inverted fullbacks?", options: ["To score goals", "To create numerical overloads in midfield", "To play without a goalie", "To save energy"], correctIndex: 1, explanation: "Adding a fullback to midfield helps control possession and bypass opposition presses." },
      { question: "Which coach famously popularized this in England with Man City?", options: ["Jose Mourinho", "Pep Guardiola", "Sean Dyche", "Roy Hodgson"], correctIndex: 1, explanation: "Guardiola used players like Joao Cancelo and John Stones to invert into midfield." },
      { question: "What space is left exposed when a fullback inverts?", options: ["The central box", "The wide flank they vacated", "The penalty area", "None"], correctIndex: 1, explanation: "Leaving the wing open makes the team vulnerable to wide counter-attacks." },
      { question: "What shape does a back four usually form when one fullback inverts?", options: ["Flat back four", "A back three", "A back five", "No defenders remain"], correctIndex: 1, explanation: "The remaining three defenders slide over to form a temporary back three." }
    ]
  },
  "inverted-wingers": {
    slug: "inverted-wingers",
    title: "Inverted Wingers",
    description: "Wingers who deploy on opposite wings to cut inside onto their dominant foot.",
    introduction: "Inverted Wingers play on the wing opposite to their dominant foot. They cut inside onto their strong foot to shoot, create, or link play with central teammates.",
    image: "/images/tactics/inv-wingers.png",
    keyElements: ["Opposite-foot play", "Cutting inside", "Shooting angles", "Space creation"],
    sections: [
      { heading: "The Cut Inside", content: "The winger cuts diagonally toward the box, opening up shooting angles on their strong foot and forcing opposing defenders to backtrack." },
      { heading: "Combinations", content: "This movement opens up wide channels for fullbacks to overlap and cross from the touchline." }
    ],
    quizQuestions: [
      { question: "What defines an inverted winger?", options: ["They play on their strong foot side", "They play on the wing opposite to their dominant foot", "They only defend", "They cannot pass"], correctIndex: 1, explanation: "An inverted winger plays on the opposite flank of their dominant foot." },
      { question: "What is their signature move?", options: ["Sprinting down the line to cross", "Cutting inside to shoot or assist", "Passing back to the keeper", "Throw-ins"], correctIndex: 1, explanation: "Cutting inside allows them to use their strong foot to create or score." },
      { question: "Who is a legendary example of this role?", options: ["Arjen Robben", "Peter Crouch", "Andrea Pirlo", "Diego Simeone"], correctIndex: 0, explanation: "Robben was famous for cutting inside from the right onto his left foot." },
      { question: "Which player type benefits from the space left wide?", options: ["The goalkeeper", "The overlapping fullback", "The central defender", "The referee"], correctIndex: 1, explanation: "Fullbacks overlap the space vacated by the winger cutting inside." },
      { question: "What is a main benefit of inverted wingers?", options: ["More headers", "Direct shooting threats from central angles", "Wasting time", "None"], correctIndex: 1, explanation: "They act as extra goalscorers by driving into shooting positions." }
    ]
  },
  "false-9": {
    slug: "false-9",
    title: "False 9",
    description: "Strikers who pull defenders out of position by dropping deep into midfield.",
    introduction: "The False 9 drops deep into midfield, acting as a playmaker. This movement creates a numerical overload in midfield and opens central spaces for wingers to run into.",
    image: "/images/tactics/false-9-concept.png",
    keyElements: ["Striker dropping deep", "Midfield overload", "Diagonal winger runs", "Center-back disruption"],
    sections: [
      { heading: "Defensive Disruption", content: "Center-backs are torn between following the striker deep (leaving space behind) or staying back (giving the striker time to turn and pass)." },
      { heading: "Attacking Runs", content: "As the False 9 drops, wide wingers make diagonal runs inside to act as the primary goal threats." }
    ],
    quizQuestions: [
      { question: "What does the striker do in a False 9 system?", options: ["Stays high in the box", "Drops deep into midfield", "Plays as center-back", "Stays on the bench"], correctIndex: 1, explanation: "The False 9 drops deep to playmake and pull defenders out of position." },
      { question: "Who famously perfected this role under Pep Guardiola at Barcelona?", options: ["Lionel Messi", "Cristiano Ronaldo", "Erling Haaland", "Harry Kane"], correctIndex: 0, explanation: "Guardiola used Lionel Messi as a False 9 to dominate European football." },
      { question: "Who runs into the space vacated by the False 9?", options: ["The center-backs", "The wide wingers making diagonal runs inside", "The goalkeeper", "The fullbacks"], correctIndex: 1, explanation: "Wingers cut inside into the empty central space to receive passes." },
      { question: "What is the primary benefit of the False 9?", options: ["More headers", "Midfield numerical dominance and central space exploitation", "Defending corners", "None"], correctIndex: 1, explanation: "It creates overloads in midfield and breaks the opponent's defensive structure." },
      { question: "What is the center-back dilemma?", options: ["Who to pass to", "Whether to follow the dropping striker or stay in line", "How to track the keeper", "None"], correctIndex: 1, explanation: "Following the striker opens space behind; letting them go gives them space to play." }
    ]
  },
  "false-fullback": {
    slug: "false-fullback",
    title: "False Fullback",
    description: "Fullbacks who move high and inside, functioning like attacking playmakers.",
    introduction: "The False Fullback is an aggressive variation. Instead of just forming a double pivot, they push high into advanced central channels, acting as attacking midfielders to create chances.",
    image: "/images/tactics/false-fb.png",
    keyElements: ["High central positioning", "Playmaker transition", "Wide winger spacing", "Attacking overloads"],
    sections: [
      { heading: "Central Overloads", content: "The fullback pushes into the pockets of space behind the opponent's midfield, functioning as a second attacking playmaker alongside the No. 10." },
      { heading: "Risk Management", content: "Requires highly mobile center-backs and holding midfielders to cover the massive wide spaces left open on turnovers." }
    ],
    quizQuestions: [
      { question: "What is a False Fullback?", options: ["A striker playing defense", "A fullback who pushes high into advanced central channels as a playmaker", "A goalkeeper", "None"], correctIndex: 1, explanation: "They act as playmakers, pushing high and inside into advanced channels." },
      { question: "How do they differ from inverted fullbacks?", options: ["Inverted fullbacks sit deep; false fullbacks push high into attacking spaces", "They do not differ", "False fullbacks play on the wings", "None"], correctIndex: 0, explanation: "Inverted fullbacks form a defensive double pivot; false fullbacks act as attacking midfielders." },
      { question: "Who provides the width in a false fullback system?", options: ["The fullback", "The wide wingers", "The center-backs", "The keeper"], correctIndex: 1, explanation: "Wingers hug the touchline to provide the width." },
      { question: "Which coach has experimented with this style?", options: ["Pep Guardiola", "Diego Simeone", "Sean Dyche", "Roy Hodgson"], correctIndex: 0, explanation: "Guardiola has used players like Joao Cancelo to play as advanced central creators." },
      { question: "What is the main danger of this system?", options: ["Vulnerability to fast wide counters", "Too many offside calls", "Midfield gets too crowded", "None"], correctIndex: 0, explanation: "Leaving the entire flank empty exposes the team to counter-attacks." }
    ]
  },
  "free-role": {
    slug: "free-role",
    title: "Free Role",
    description: "Allowing a highly creative player freedom to roam across zones.",
    introduction: "A Free Role exempts a team's most creative player from strict positional duties, allowing them to drift across the pitch to find space and orchestrate attacks.",
    image: "/images/tactics/free-role.png",
    keyElements: ["Positional freedom", "Roaming creator", "Tactical compensation", "Spatial awareness"],
    sections: [
      { heading: "Drifting for Space", content: "The player (often a No. 10 or winger) roams from left to right, dropping deep or pushing high depending on where they can exploit weaknesses in the opponent's block." },
      { heading: "Defensive Balance", content: "To compensate, teammates must adjust their positions to cover the defensive gaps left by the roaming player." }
    ],
    quizQuestions: [
      { question: "What is a Free Role?", options: ["A player who gets paid more", "Allowing a creative player freedom to roam across zones", "Playing without a keeper", "All of the above"], correctIndex: 1, explanation: "It gives a key creator freedom to wander and find space." },
      { question: "What is required from teammates of a player in a free role?", options: ["They do nothing", "They must defensively cover the spaces left open by the roaming player", "They must follow him", "None"], correctIndex: 1, explanation: "Teammates must adjust to cover the space left vacant by the roamer." },
      { question: "Which type of player is usually given a free role?", options: ["A physical center-back", "A highly creative playmaker or star forward", "The goalkeeper", "A stopper"], correctIndex: 1, explanation: "Highly creative players (like Messi or Hazard) are given free roles to maximize their threat." },
      { question: "What is a benefit of the free role?", options: ["It confuses opponent markers who do not know who should track him", "It saves running", "It gives free kicks", "None"], correctIndex: 0, explanation: "Roaming prevents opponents from assigning a single defender to mark them." },
      { question: "What is a risk of the free role?", options: ["The team can lose defensive structure if not coordinated", "The player gets bored", "Fewer goals", "None"], correctIndex: 0, explanation: "Without coordination, the team can become disorganized and vulnerable on turnovers." }
    ]
  },
  "mezzala": {
    slug: "mezzala",
    title: "Mezzala",
    description: "An central midfielder who drifts wide to attack half-spaces.",
    introduction: "The Mezzala (half-winger) is a central midfielder who drifts wide during attacks to exploit the half-spaces and combine with the winger and fullback.",
    image: "/images/tactics/mezzala.png",
    keyElements: ["Drifting wide", "Half-space runs", "Winger combination", "Attacking midfield overlap"],
    sections: [
      { heading: "The Half-Winger", content: "In a midfield three, the Mezzala plays on the left or right. When attacking, they push wide into the channel between the center and the wing, acting as a winger/midfielder hybrid." },
      { heading: "Attacking Overloads", content: "They combine with the winger and overlapping fullback to create a 3v2 overload on the flank." }
    ],
    quizQuestions: [
      { question: "What does the Italian word 'Mezzala' translate to?", options: ["Center midfielder", "Half-winger", "Anchor man", "Sweeper"], correctIndex: 1, explanation: "Mezzala means 'half-winger' in Italian." },
      { question: "What is the primary movement of a Mezzala?", options: ["Staying in front of the center-backs", "Drifting wide into the half-spaces to attack", "Playing as a target striker", "Goal defense"], correctIndex: 1, explanation: "A Mezzala moves laterally and vertically into wide half-spaces." },
      { question: "Which formation is perfect for a Mezzala?", options: ["4-4-2", "4-3-3 / 3-5-2", "4-2-3-1", "5-4-1"], correctIndex: 1, explanation: "Formations with a midfield three allow the Mezzala to drift wide while others cover the center." },
      { question: "What does the Mezzala create in wide areas?", options: ["Congestion", "Overloads (combining with wingers and fullbacks)", "Offsides", "None"], correctIndex: 1, explanation: "Their wide runs create passing overloads to break down defenses." },
      { question: "Name a modern player known for playing like a Mezzala.", options: ["Sergio Busquets", "Kevin De Bruyne / Angel Di Maria", "Peter Crouch", "Diego Godin"], correctIndex: 1, explanation: "De Bruyne famously drifts wide into the right half-space to deliver crosses." }
    ]
  },
  "regista": {
    slug: "regista",
    title: "Regista",
    description: "A deep-lying playmaker directing operations from holding midfield.",
    introduction: "The Regista (director) is a deep-lying playmaker who sits in front of the defense. They dictate the tempo, orchestrate possession, and start attacks with accurate long passing.",
    image: "/images/tactics/regista.png",
    keyElements: ["Deep playmaker", "Dictating play", "Long passing range", "Composure"],
    sections: [
      { heading: "The Director", content: "The Regista is not a traditional defensive destroyer. Instead of focusing on physical tackles, they use positioning to intercept passes, and use their vision to direct the team's attack from deep." },
      { heading: "Midfield Protection", content: "Since the Regista is not a physical destroyer, they are usually paired with a box-to-box midfielder (Gattuso-type) who provides the defensive muscle." }
    ],
    quizQuestions: [
      { question: "What does 'Regista' mean in Italian?", options: ["Destroyer", "Director (Playmaker)", "Sweeper", "Striker"], correctIndex: 1, explanation: "Regista translates to director or conductor." },
      { question: "Where is the Regista positioned on the pitch?", options: ["Behind the center-backs", "Deep in central midfield, in front of the defense", "Behind the striker", "On the wings"], correctIndex: 1, explanation: "The Regista dictates play from holding midfield positions." },
      { question: "How does a Regista differ from a traditional defensive midfielder?", options: ["They do not defend", "They focus on playmaker vision and passing rather than physical tackling", "They only take throw-ins", "None"], correctIndex: 1, explanation: "They act as playmakers rather than pure defensive destroyers." },
      { question: "Who is the most famous example of a Regista?", options: ["Andrea Pirlo", "Gennaro Gattuso", "Roy Keane", "Diego Maradona"], correctIndex: 0, explanation: "Andrea Pirlo is the ultimate modern example of a Regista." },
      { question: "Which midfielder type is usually paired with a Regista to protect them?", options: ["An attacking playmaker", "A physical defensive midfielder (destroyer)", "A second striker", "None"], correctIndex: 1, explanation: "A physical player (like Gattuso for Pirlo) protects the Regista from pressure." }
    ]
  },
  "trequartista": {
    slug: "trequartista",
    title: "Trequartista",
    description: "A creative attacking playmaker exempt from major defensive duties.",
    introduction: "The Trequartista (three-quarters) is a creative playmaker who operates in the space between the opponent's midfield and defense. They focus entirely on scoring and creating, free from defensive tracking.",
    image: "/images/tactics/trequartista.png",
    keyElements: ["Final third playmaker", "Positional freedom", "Exemption from defending", "Vision and skill"],
    sections: [
      { heading: "Between the Lines", content: "They operate in the final third. They have elite technical skill, close control, and vision to unlock tight defenses with through balls or individual magic." },
      { heading: "Defensive Exemption", content: "The coach frees them from tracking back, preserving their energy so they are fresh and lethal on transitions." }
    ],
    quizQuestions: [
      { question: "What does 'Trequartista' refer to?", options: ["A defender", "A playmaker who operates in the 'three-quarter' zone (final third)", "The goalkeeper", "A sub option"], correctIndex: 1, explanation: "Trequartista refers to the zone of the pitch they occupy (between midfield and attack)." },
      { question: "What is a key benefit of freeing the Trequartista from defensive duties?", options: ["They do not get tired", "They are always available and fresh for counter-attacks", "They don't get yellow cards", "None"], correctIndex: 1, explanation: "Preserving their energy ensures they are sharp when the team wins the ball." },
      { question: "What attributes are vital for a Trequartista?", options: ["Tackle power and size", "Elite passing, vision, and close control", "Running speed only", "Heading ability"], correctIndex: 1, explanation: "Operating in congested spaces requires elite technical skill and quick vision." },
      { question: "Who is a famous example of a Trequartista?", options: ["Francesco Totti", "Gennaro Gattuso", "John Terry", "Sergio Busquets"], correctIndex: 0, explanation: "Francesco Totti at Roma was the classic Italian Trequartista." },
      { question: "How does the team balance the Trequartista's lack of defending?", options: ["They do not balance it", "The remaining midfielders work harder to cover defensive spaces", "They play with more defenders", "None"], correctIndex: 1, explanation: "Hard-working midfielders must cover the space the playmaker neglects." }
    ]
  },
  "deep-playmaker": {
    slug: "deep-playmaker",
    title: "Deep-Lying Playmaker",
    description: "Orchestrating play from deep with dynamic passing range.",
    introduction: "The Deep-Lying Playmaker sits deep in midfield, directing play with long passes. They use their vision to bypass the opponent's press and switch play to attackers.",
    image: "/images/tactics/deep-playmaker.png",
    keyElements: ["Deep distribution", "Long passing range", "Tempo control", "Press resistance"],
    sections: [
      { heading: "Tempo Control", content: "They act as the team's quarterback. They collect the ball from defenders, assess options, and use long diagonal passes to release wingers or strikers." },
      { heading: "Press Resistance", content: "They must be calm under pressure, shielding the ball and using simple passes to retain possession when pressed." }
    ],
    quizQuestions: [
      { question: "What is a Deep-Lying Playmaker?", options: ["A striker", "A playmaker who sits deep to direct play with long passes", "A defender", "None"], correctIndex: 1, explanation: "They orchestrate the attack from deep midfield positions." },
      { question: "How do they start attacks?", options: ["By dribbling past defenders", "Using accurate long passing to switch play or feed forwards", "With long throw-ins", "None"], correctIndex: 1, explanation: "Long diagonal switches and through balls from deep are their primary weapons." },
      { question: "Who is a classic Deep-Lying Playmaker?", options: ["Xabi Alonso", "Diego Costa", "Neymar", "Gary Neville"], correctIndex: 0, explanation: "Xabi Alonso was world-famous for his incredible long-range passing from deep." },
      { question: "What is a risk of a deep-lying playmaker?", options: ["They get too many assists", "If pressed intensely, they can turn the ball over near their box", "They play too fast", "None"], correctIndex: 1, explanation: "Opponents often press them to disrupt the team's passing engine." },
      { question: "What is the key to their defensive protection?", options: ["They play in goal", "Being paired with a ball-winning midfielder", "They do not need cover", "None"], correctIndex: 1, explanation: "A defensive partner shields them from physical pressure." }
    ]
  },
  "enganche": {
    slug: "enganche",
    title: "Enganche",
    description: "A classic Argentinian playmaker who sits stationary as a link man.",
    introduction: "The Enganche (hook) is a traditional South American playmaker. Unlike modern running playmakers, they sit stationary in the hole, acting as the pivot that links midfield to attack.",
    image: "/images/tactics/enganche.png",
    keyElements: ["Stationary playmaker", "Link man", "No lateral runs", "Pure creativity"],
    sections: [
      { heading: "The Hook", content: "The Enganche is the 'hook' that connects midfield to attack. They do not run into the channels or track back. They stay central, receive the ball, and use passing to unlock defenses." },
      { heading: "Declining Role", content: "In high-tempo modern football, the lack of mobility makes the traditional Enganche rare, as teams demand high workrates from all players." }
    ],
    quizQuestions: [
      { question: "What does the Spanish word 'Enganche' mean?", options: ["Director", "Hook", "Striker", "Sweeper"], correctIndex: 1, explanation: "Enganche translates to hook." },
      { question: "What is the movement style of a classic Enganche?", options: ["Running all over the pitch", "Relatively stationary, staying in the central hole", "Sprinting down the wings", "Defending in their box"], correctIndex: 1, explanation: "A classic Enganche is stationary, letting the ball do the running." },
      { question: "Who is the most famous example of a classic Enganche?", options: ["Juan Roman Riquelme", "Lionel Messi", "Cristiano Ronaldo", "Steven Gerrard"], correctIndex: 0, explanation: "Riquelme is the ultimate example of the slow, stationary, yet genius Enganche." },
      { question: "Why is the Enganche rare in modern football?", options: ["It is banned", "Modern high-tempo pressing requires all players to run and defend", "They do not score", "None"], correctIndex: 1, explanation: "Modern tactics demand high mobility and defensive contributions from playmakers." },
      { question: "What is the primary role of the Enganche?", options: ["Defending the keeper", "Linking midfield to attack with creative passing", "Winning headers", "Running past fullbacks"], correctIndex: 1, explanation: "They act as the central hook, distributing balls to forwards." }
    ]
  },
  "carrilero": {
    slug: "carrilero",
    title: "Carrilero",
    description: "A shuttle midfielder covering lateral spaces between lines.",
    introduction: "The Carrilero (shuttler) is a central midfielder who moves laterally. Instead of running box-to-box, they cover the wide spaces left open when fullbacks or playmakers push forward.",
    image: "/images/tactics/carrilero.png",
    keyElements: ["Lateral movement", "Flank coverage", "Tactical balance", "Midfield screen"],
    sections: [
      { heading: "The Shuttler", content: "They play in a midfield three. Their primary job is defensive balance: they slide laterally to the left or right to secure wide areas when fullbacks overlap." },
      { heading: "Positioning", content: "They rarely enter the opponent's box. They focus on maintaining possession and screening the wide channels." }
    ],
    quizQuestions: [
      { question: "What is the primary movement of a Carrilero?", options: ["Running box-to-box vertically", "Shuttling laterally to cover wide spaces", "Attacking as striker", "Defending in goal"], correctIndex: 1, explanation: "A Carrilero moves sideways (laterally) to cover wide midfield gaps." },
      { question: "Where is the Carrilero most useful?", options: ["In formations with attacking fullbacks (like diamond midfields)", "In route-one systems", "In low blocks only", "None"], correctIndex: 0, explanation: "They cover the wings when fullbacks push high to attack." },
      { question: "What is the English translation of Carrilero?", options: ["Striker", "Shuttler / Lane-player", "Anchor", "Playmaker"], correctIndex: 1, explanation: "Carrilero translates to shuttler or lane-player." },
      { question: "Do Carrileros score many goals?", options: ["Yes, they are main scorers", "No, they focus on defensive cover and possession", "They only score headers", "None"], correctIndex: 1, explanation: "Their role is defensive balance and possession link-up, not scoring." },
      { question: "How do they assist the defense?", options: ["By playing as center-back", "By covering the wings when fullbacks overlap", "By clearing off the line", "None"], correctIndex: 1, explanation: "They slide wide to block counters down the flanks." }
    ]
  },
  "libero": {
    slug: "libero",
    title: "Libero",
    description: "A sweeping defender with the freedom to carry the ball into midfield.",
    introduction: "The Libero (free defender) sits behind the defensive line. In possession, they have the freedom to carry the ball forward into midfield, acting as an extra playmaker.",
    image: "/images/tactics/libero.png",
    keyElements: ["Free defender", "Sweeping and creating", "Midfield penetration", "Tactical leadership"],
    sections: [
      { heading: "The Free Man", content: "Defensively, they sweep up loose balls. In possession, they step out of defense and dribble into midfield, creating a numerical overload and starting attacks." },
      { heading: "Modern Equivalent", content: "While rare as a central defender today, ball-playing center-backs (like John Stones) who push into midfield play a similar role." }
    ],
    quizQuestions: [
      { question: "What does 'Libero' mean in Italian?", options: ["Defender", "Free", "Director", "Keeper"], correctIndex: 1, explanation: "Libero translates to free." },
      { question: "What does the Libero do in possession?", options: ["Stays on the goal line", "Carries the ball forward into midfield to playmake", "Sprints to the wing", "None"], correctIndex: 1, explanation: "The Libero is free to step out of defense and join the midfield buildup." },
      { question: "Who is the greatest example of a Libero?", options: ["Franz Beckenbauer", "Diego Maradona", "Paolo Maldini", "Roy Keane"], correctIndex: 0, explanation: "Franz Beckenbauer perfected the Libero role, dominating from defense." },
      { question: "Why is the traditional Libero rare today?", options: ["It is banned", "Flat defensive lines and offside traps are preferred", "Defenders cannot pass", "None"], correctIndex: 1, explanation: "A deep Libero would play opposing strikers onside, ruining modern offside traps." },
      { question: "What modern player has played a role similar to the Libero?", options: ["John Stones", "Erling Haaland", "Cristiano Ronaldo", "Mohamed Salah"], correctIndex: 0, explanation: "Stones has stepped out of defense into central midfield for Manchester City." }
    ]
  },
  "shadow-striker": {
    slug: "shadow-striker",
    title: "Shadow Striker",
    description: "An attacking midfielder who bursts forward to score behind a target striker.",
    introduction: "A Shadow Striker operates behind a target striker. As the target man challenges defenders, the shadow striker bursts forward from midfield to score from loose balls or passes.",
    image: "/images/tactics/shadow-striker.png",
    keyElements: ["Late box runs", "Exploiting knockdowns", "Second-striker hybrid", "Goal threat"],
    sections: [
      { heading: "Attacking Mechanics", content: "They play as a No. 10 but focus on goalscoring. They wait for the target striker to win headers or hold up the ball, then sprint past them into the box to shoot." },
      { heading: "Defensive Duties", content: "They must press the opponent's holding midfielder when defending, acting as a bridge." }
    ],
    quizQuestions: [
      { question: "What is the primary focus of a Shadow Striker?", options: ["Defending deep", "Late runs into the box to score goals", "Crossing from wide", "None"], correctIndex: 1, explanation: "They act as goalscoring playmakers, arriving late in the box to finish chances." },
      { question: "Who does the shadow striker play behind?", options: ["The goalkeeper", "A target striker who holds up play", "The winger", "The referee"], correctIndex: 1, explanation: "They play behind a physical forward who creates space and knockdowns for them." },
      { question: "What makes them hard to mark?", options: ["They are too fast", "They start deep in midfield, making their runs late and unexpected", "They play on the wing", "None"], correctIndex: 1, explanation: "Center-backs are busy with the striker, and midfielders fail to track their late runs." },
      { question: "Which role is similar to the Shadow Striker?", options: ["Second striker", "Anchor", "Regista", "Sweeper"], correctIndex: 0, explanation: "The second striker also plays off the shoulder of the main forward." },
      { question: "Name a player known for this goalscoring playmaker style.", options: ["Thomas Müller / Dele Alli", "Sergio Busquets", "John Terry", "Andrea Pirlo"], correctIndex: 0, explanation: "Müller and Alli (at his peak) were famous for late, unmarked runs into the box." }
    ]
  },
  "raumdeuter": {
    slug: "raumdeuter",
    title: "Raumdeuter",
    description: "A 'space interpreter' who exploits tiny holes in defenses from wide.",
    introduction: "The Raumdeuter (space interpreter) is a unique wide role. They do not dribble or cross; they use elite positioning and movement to appear in the box at the perfect second to score.",
    image: "/images/tactics/raumdeuter.png",
    keyElements: ["Space interpretation", "Elite anticipation", "Ghosting runs", "Clinical finishing"],
    sections: [
      { heading: "Finding the Gap", content: "The Raumdeuter drifts across the final third, looking for lapses in the opponent's defensive line. They 'ghost' into the box unmarked to tap in crosses." },
      { heading: "Style", content: "They have average speed and dribbling but elite anticipation, making them highly effective goalscorers." }
    ],
    quizQuestions: [
      { question: "What does the German word 'Raumdeuter' translate to?", options: ["Ball winner", "Space interpreter", "Wide crosser", "Anchor man"], correctIndex: 1, explanation: "Raumdeuter means 'space interpreter' or 'space investigator'." },
      { question: "Which player famously coined this term to describe himself?", options: ["Thomas Müller", "Bastian Schweinsteiger", "Mesut Ozil", "Philipp Lahm"], correctIndex: 0, explanation: "Thomas Müller coined the term to describe his unique positioning style." },
      { question: "What is the primary strength of a Raumdeuter?", options: ["Elite dribbling skill", "Positional anticipation and finding empty spaces", "Sprinting speed", "Tackling"], correctIndex: 1, explanation: "They rely on reading play to arrive unmarked in dangerous scoring zones." },
      { question: "Where does a Raumdeuter typically start on the pitch?", options: ["In goal", "On the wing, drifting inside", "As center-back", "In the center circle"], correctIndex: 1, explanation: "They start wide but constantly wander inside to find gaps." },
      { question: "Do Raumdeuters focus on crosses and dribbles?", options: ["Yes, constantly", "No, they focus on off-the-ball runs and tap-ins", "They only take free kicks", "None"], correctIndex: 1, explanation: "They prefer off-the-ball movement, arriving late to finish chances created by others." }
    ]
  },
  "box-midfield": {
    slug: "box-midfield",
    title: "Box Midfield",
    description: "A central structure using four midfielders to dominate central play.",
    introduction: "The Box Midfield uses four central midfielders (two holding, two attacking) to form a box. This shape provides passing triangles and central dominance.",
    image: "/images/tactics/box-midfield-concept.png",
    keyElements: ["Four-player central box", "Numerical overloads", "Passing triangles", "Central dominance"],
    sections: [
      { heading: "Tactical Concept", content: "The box midfield completely overloads standard midfields (which use 3 players). It gives the team a 4v3 advantage, making central progression easy." },
      { heading: "Width Sacrifice", content: "Because midfielders are central, the team relies on fullbacks to provide the attacking width." }
    ],
    quizQuestions: [
      { question: "How many players form a Box Midfield?", options: ["Two", "Three", "Four", "Five"], correctIndex: 2, explanation: "A box midfield utilizes four players (two deep, two advanced)." },
      { question: "What is an advantage of the box midfield?", options: ["It stretches the wings", "It overloads the center, giving passing superiority", "It is very defensive", "None"], correctIndex: 1, explanation: "Having four central players outnumbers standard three-man midfields." },
      { question: "Who provides the width in a box midfield system?", options: ["The center-backs", "The fullbacks", "The central playmakers", "The goalkeeper"], correctIndex: 1, explanation: "Fullbacks must push high and wide to provide attacking width." },
      { question: "Which system uses a box midfield?", options: ["3-2-4-1 / 4-2-2-2", "Flat 4-4-2", "Traditional 4-3-3", "None"], correctIndex: 0, explanation: "Both the 3-2-4-1 and the 4-2-2-2 naturally form box midfields." },
      { question: "What is a danger of the box midfield?", options: ["Lack of wing cover on counters", "No central passing", "Too many strikers", "None"], correctIndex: 0, explanation: "If the fullbacks are high, the wide channels are vulnerable on turnovers." }
    ]
  },
  "wm-structure": {
    slug: "wm-structure",
    title: "WM Structure",
    description: "The classic Herbert Chapman setup forming a W and an M shape.",
    introduction: "The WM structure is a historic tactic forming a W (in attack) and an M (in defense). It revolutionized football in the 1920s by introducing a third defender.",
    image: "/images/tactics/wm.png",
    keyElements: ["3-2-2-3 shape", "Chapman revolution", "Attacking W shape", "Defensive M shape"],
    sections: [
      { heading: "Historical Context", content: "Invented by Arsenal manager Herbert Chapman in 1925 to counter the new offside rule. It changed the game from a 2-3-5 layout to a structured 3-2-2-3." },
      { heading: "The W and M", content: "The defensive line (3) and holding mids (2) form the M. The attacking mids (2) and forward line (3) form the W." }
    ],
    quizQuestions: [
      { question: "Who invented the WM structure?", options: ["Pep Guardiola", "Herbert Chapman", "Johan Cruyff", "Rinus Michels"], correctIndex: 1, explanation: "Herbert Chapman developed the WM at Arsenal in the 1920s." },
      { question: "What numerical shape represents the WM?", options: ["4-4-2", "3-2-2-3", "4-3-3", "5-3-2"], correctIndex: 1, explanation: "The WM is a 3-2-2-3 system (3 defenders, 2 holding mids, 2 attacking mids, 3 forwards)." },
      { question: "Why was the WM invented?", options: ["To use more goalkeepers", "To counter the 1925 offside rule change", "To slow the game down", "None"], correctIndex: 1, explanation: "The offside rule change made attacking easier, requiring a third defender to stay secure." },
      { question: "Which part of the WM forms the 'M'?", options: ["The forward line", "The defense and holding midfielders", "The wingers", "None"], correctIndex: 1, explanation: "The three defenders and two holding midfielders form the M shape." },
      { question: "What was the attacking shape of the WM?", options: ["A straight line", "A 'W' shape formed by attacking midfielders and forwards", "A circle", "A diamond"], correctIndex: 1, explanation: "The two attacking midfielders and three forwards form the W shape." }
    ]
  },
  "pyramid-structure": {
    slug: "pyramid-structure",
    title: "Pyramid Structure",
    description: "The historic 2-3-5 alignment that dominated early football.",
    introduction: "The Pyramid (2-3-5) is the oldest tactical structure. It used two defenders, three midfielders, and five forwards, dominating football from the 1880s to the 1925 offside rule change.",
    image: "/images/tactics/pyramid.png",
    keyElements: ["2-3-5 historic shape", "Five forward line", "Early tactical baseline", "No offside trap"],
    sections: [
      { heading: "Five Forwards", content: "Football was highly attacking in the Victorian era. The front five consisted of a left winger, inside left, center forward, inside right, and right winger." },
      { heading: "Defensive Setup", content: "With only two fullbacks and three half-backs, defending relied on physical tackles and long clearances." }
    ],
    quizQuestions: [
      { question: "What is the numerical setup of the Pyramid?", options: ["4-4-2", "2-3-5", "3-2-2-3", "4-3-3"], correctIndex: 1, explanation: "The Pyramid is the classic 2-3-5 formation." },
      { question: "When was the Pyramid structure dominant?", options: ["1990s", "Late 1880s to 1925", "2010s", "During World War II"], correctIndex: 1, explanation: "It was the standard tactical baseline for early football." },
      { question: "How many forwards were fielded in the Pyramid?", options: ["Two", "Three", "Four", "Five"], correctIndex: 3, explanation: "The front line featured five forwards (the '5' in 2-3-5)." },
      { question: "Why was it called the 'Pyramid'?", options: ["It was invented in Egypt", "The shape tapered from the 5 forwards down to the 2 defenders, forming an inverted pyramid", "It used triangular goals", "None"], correctIndex: 1, explanation: "The layout looks like an inverted pyramid (wide at the front, narrow at the back)." },
      { question: "What rule change ended the dominance of the 2-3-5?", options: ["The introduction of red cards", "The 1925 offside rule modification", "Banning the goalkeeper from using hands", "None"], correctIndex: 1, explanation: "The offside change forced teams to drop a midfielder into defense, leading to the WM." }
    ]
  }
};
