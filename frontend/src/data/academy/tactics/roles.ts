import { QuizQuestion } from "@/components/academy/LessonQuiz";
import { TacticLesson } from "./attacking";

export const rolesTactics: Record<string, TacticLesson> = {
  "role-goalkeeper": {
    slug: "role-goalkeeper",
    title: "Goalkeeper",
    description: "Traditional shot-stopping, positioning, and goal defense.",
    introduction: "The Goalkeeper is the ultimate defender. Their main job is to prevent the ball from crossing the goal line, utilizing hands inside their box, shot-stopping reflex, and positioning.",
    image: "/images/roles/goalkeeper.png",
    keyElements: ["Shot stopping", "Handling", "Goal positioning", "Reflexes"],
    sections: [
      { heading: "Shot-Stopping", content: "The core duty. Using reflexes, diving capability, and positioning to block shots and keep clean sheets." },
      { heading: "Commanding the Box", content: "Catching or punching crosses, communicating with defenders, and organizing the defensive wall during free kicks." }
    ],
    quizQuestions: [
      { question: "What is the primary role of a traditional Goalkeeper?", options: ["Score goals", "Stop the opponent from scoring", "Dribble in midfield", "Take corners"], correctIndex: 1, explanation: "The goalkeeper's main job is goal defense." },
      { question: "Where is the goalkeeper allowed to use their hands?", options: ["Anywhere on the pitch", "Only inside their own penalty box", "Only in the center circle", "Nowhere"], correctIndex: 1, explanation: "Goalkeepers can only use their hands inside their own penalty box." },
      { question: "What does 'clean sheet' mean?", options: ["A new shirt", "Conceding zero goals in a match", "Winning a trophy", "None"], correctIndex: 1, explanation: "A clean sheet is a match where the team concedes no goals." },
      { question: "How does the goalkeeper organize defenders on free-kicks?", options: ["By shouting", "By building a wall of players to block the goal angle", "By standing on the post", "None"], correctIndex: 1, explanation: "Organizing a wall blocks the most dangerous angle of the shot." },
      { question: "Which keeper is famous for traditional shot-stopping?", options: ["Manuel Neuer", "Gianluigi Buffon", "Andrea Pirlo", "Diego Maradona"], correctIndex: 1, explanation: "Buffon is legendary for his shot-stopping and positioning." }
    ]
  },
  "role-sweeper-keeper": {
    slug: "role-sweeper-keeper",
    title: "Sweeper Keeper",
    description: "Defending outside the box and launching attacks from deep.",
    introduction: "A Sweeper Keeper plays high up, outside their penalty area. They clear long passes behind the high line and participate actively in team passing.",
    image: "/images/roles/sweeper-keeper.png",
    keyElements: ["High positioning", "Sweeping clearances", "Buildup passing", "Rushing out"],
    sections: [
      { heading: "Sweeping Space", content: "They sweep the space behind center-backs. If the opponent plays a long ball, the keeper rushes out to clear it before the striker can reach it." },
      { heading: "Buildup Link", content: "They act as an extra outfield player, comfortable passing under pressure to help beat the press." }
    ],
    quizQuestions: [
      { question: "What does a Sweeper Keeper do differently?", options: ["Never uses hands", "Positions high outside the box to clear long balls", "Only plays as striker", "None"], correctIndex: 1, explanation: "They actively sweep the space behind the defense outside their box." },
      { question: "Why is a sweeper keeper vital for high-line systems?", options: ["They score headers", "They cover the open space behind the high defense", "They do not run", "None"], correctIndex: 1, explanation: "A high line leaves space behind, which the keeper must guard by rushing out." },
      { question: "Who is the most famous modern Sweeper Keeper?", options: ["Manuel Neuer", "Gianluigi Buffon", "Peter Schmeichel", "Diego Costa"], correctIndex: 0, explanation: "Manuel Neuer at Bayern and Germany popularized the modern sweeper keeper role." },
      { question: "What skill is highly required for a sweeper keeper?", options: ["Dribbling past strikers", "Excellent passing, positioning, and timing when rushing out", "Long throws only", "None"], correctIndex: 1, explanation: "Composure and timing are critical to avoid cards or open-goal mistakes." },
      { question: "What happens if a sweeper keeper misjudges a ball outside the box?", options: ["A penalty is given", "They risk getting bypassed or red-carded for handball", "The match restarts", "None"], correctIndex: 1, explanation: "Rushing out is high-risk; mistakes lead to open nets or red cards." }
    ]
  },
  "role-libero": {
    slug: "role-libero",
    title: "Libero (Tactical Role)",
    description: "A free central defender who steps out to launch attacks.",
    introduction: "The Libero is a free defender who sits behind the backline. In possession, they carry the ball forward into midfield to playmake.",
    image: "/images/roles/libero.png",
    keyElements: ["Free positioning", "Sweeping coverage", "Midfield dribbling", "Dictating buildup"],
    sections: [
      { heading: "The Free Man", content: "No man-marking duties. The Libero sweeps up loose balls in defense, and acts as an extra midfielder in possession." },
      { heading: "Beckenbauer Style", content: "Franz Beckenbauer famously defined this role by carrying the ball from deep to orchestrate attacks." }
    ],
    quizQuestions: [
      { question: "What is the key characteristic of a Libero?", options: ["They play in goal", "They have no man-marking duties and can join the midfield", "They stay on the wing", "None"], correctIndex: 1, explanation: "The Libero is a free defender who steps into midfield to playmake." },
      { question: "What is the German term for the Libero?", options: ["Regista", "Libero", "Freier", "None"], correctIndex: 1, explanation: "Libero (or Free Defender) is the standard term." },
      { question: "Who is the greatest Libero in football history?", options: ["Franz Beckenbauer", "Lionel Messi", "Diego Maradona", "Roy Keane"], correctIndex: 0, explanation: "Franz 'Der Kaiser' Beckenbauer perfected the Libero role." },
      { question: "Why is the Libero rare in a flat back four?", options: ["It plays everyone onside, ruining offside traps", "It is banned", "Defenders cannot run", "None"], correctIndex: 0, explanation: "A deep-lying defender plays attackers onside, so modern lines are kept flat." },
      { question: "How does a modern center-back play like a Libero?", options: ["By staying in the box", "By stepping forward into midfield to build play (like John Stones)", "By scoring corners", "None"], correctIndex: 1, explanation: "Ball-playing center-backs stepping into midfield mimics the Libero role." }
    ]
  },
  "role-ball-playing-defender": {
    slug: "role-ball-playing-defender",
    title: "Ball Playing Defender",
    description: "Center-backs possessing excellent passing range to launch moves.",
    introduction: "A Ball Playing Defender is a center-back who is highly comfortable on the ball. They don't just clear it; they play accurate passes to start attacks.",
    image: "/images/roles/ball-playing-defender.png",
    keyElements: ["Passing under pressure", "Long switches", "Dribbling out of defense", "Calmness"],
    sections: [
      { heading: "Deep Buildup", content: "They act as deep playmakers, picking out line-breaking passes to midfielders or long diagonal switches to wingers." },
      { heading: "Press Resistance", content: "They remain calm when pressed by opposing strikers, using skill to pass out safely." }
    ],
    quizQuestions: [
      { question: "What is the primary skill of a Ball Playing Defender?", options: ["Only long clearances", "Calmness and accurate passing from the back", "Taking penalties", "Sprinting past wingers"], correctIndex: 1, explanation: "They are valued for their passing range and composure during buildup." },
      { question: "How do they assist the attack?", options: ["By playing as striker", "By delivering line-breaking passes to midfielders", "By taking corners", "None"], correctIndex: 1, explanation: "They start the attack by passing directly through the opponent's front press." },
      { question: "Name a famous Ball Playing Defender.", options: ["Virgil van Dijk", "Neymar", "Peter Crouch", "Gattuso"], correctIndex: 0, explanation: "Van Dijk is famous for his calm defense and incredible long diagonal passes." },
      { question: "What is a risk for a ball-playing defender?", options: ["Overconfidence leading to turnovers near their own goal", "No headers", "Too many assists", "None"], correctIndex: 0, explanation: "Trying risky passes at the back can lead to dangerous turnovers." },
      { question: "Why do possession teams value them?", options: ["They do not need midfielders", "They allow the team to build play with control from the goalkeeper", "They score more", "None"], correctIndex: 1, explanation: "Buildup from the back requires defenders comfortable with passing under pressure." }
    ]
  },
  "role-stopper": {
    slug: "role-stopper",
    title: "Stopper",
    description: "An aggressive center-back who steps up to challenge attackers.",
    introduction: "A Stopper is a physical center-back. They play aggressively, stepping out of the defensive line to challenge forwards and intercept passes before they reach the box.",
    image: "/images/roles/stopper.png",
    keyElements: ["Aggressive tackling", "Heading dominance", "Stepping out to press", "Physical strength"],
    sections: [
      { heading: "Interception Focus", content: "The Stopper does not wait for the striker to turn. They step up immediately, using strength to win the ball or force the forward backward." },
      { heading: "Partnership", content: "Often paired with a 'Cover' defender who sits deeper to cover the space left open when the stopper steps up." }
    ],
    quizQuestions: [
      { question: "What is the main style of a Stopper?", options: ["Sitting deep", "Aggressive, stepping out to challenge attackers", "Dribbling forward", "Playmaking"], correctIndex: 1, explanation: "Stoppers play aggressively to stop attacks before they reach the box." },
      { question: "Who is a Stopper usually paired with?", options: ["A winger", "A 'Cover' defender who sits deep to protect the space", "Another stopper", "None"], correctIndex: 1, explanation: "A cover defender protects the space left open when the stopper steps up." },
      { question: "What physical attribute is key for a Stopper?", options: ["Agility only", "Physical strength and aerial power", "Running speed only", "None"], correctIndex: 1, explanation: "Winning headers and physical duels requires strength and height." },
      { question: "Name a classic Stopper center-back.", options: ["Andrea Pirlo", "Nemanja Vidić", "Lionel Messi", "Joao Cancelo"], correctIndex: 1, explanation: "Vidić at Man United was a classic aggressive stopper." },
      { question: "What is a risk of a stopper stepping up?", options: ["Leaving space open behind them if they miss the tackle", "Conceding throw-ins", "Getting caught offside", "None"], correctIndex: 0, explanation: "If the stopper is beaten, the striker has a clear run at the goal." }
    ]
  },
  "role-wing-back": {
    slug: "role-wing-back",
    title: "Wing Back",
    description: "Wide defenders covering the entire wing in three-back systems.",
    introduction: "A Wing-Back plays in three-back systems (like 3-5-2). They are responsible for the entire flank, acting as defenders in defense and wingers in attack.",
    image: "/images/roles/wing-back.png",
    keyElements: ["Touchline running", "Elite stamina", "Crossing and defending", "Flank coverage"],
    sections: [
      { heading: "Flank Running", content: "They cover the entire wing. In attack, they provide width and cross the ball; in defense, they drop to form a five-man backline." },
      { heading: "Stamina Demands", content: "The most physically demanding role on the pitch, requiring constant sprinting across 90 minutes." }
    ],
    quizQuestions: [
      { question: "In which system does a Wing-Back typically play?", options: ["Flat 4-4-2", "Three-back systems (like 3-5-2 or 3-4-3)", "4-3-3 with flat fullbacks", "None"], correctIndex: 1, explanation: "Wing-backs are the wide outlets in three-back configurations." },
      { question: "What is the main physical requirement for a Wing-Back?", options: ["Only height", "Elite cardiovascular stamina", "Slow speed", "None"], correctIndex: 1, explanation: "Covering the entire flank requires incredible running capacity." },
      { question: "How does the wing-back support the attack?", options: ["By playing in central midfield", "By providing width and crossing from flanks", "By staying near their own keeper", "None"], correctIndex: 1, explanation: "They act as wingers, crossing and stretching play." },
      { question: "How does the wing-back support the defense?", options: ["By dropping deep to form a 5-man defense line", "By standing in the center circle", "They do not defend", "None"], correctIndex: 0, explanation: "They drop back to form a temporary five-man backline." },
      { question: "Name a famous attacking Wing-Back.", options: ["Sergio Busquets", "Achraf Hakimi / Trent Alexander-Arnold", "John Terry", "Gattuso"], correctIndex: 1, explanation: "Hakimi and Alexander-Arnold excel at flying wingback runs." }
    ]
  },
  "role-inverted-wing-back": {
    slug: "role-inverted-wing-back",
    title: "Inverted Wing Back",
    description: "Wing-backs who shift into central midfield during possession.",
    introduction: "An Inverted Wing-Back shifts inside to central midfield during possession, acting as a holding midfielder to help control the game and overload the center.",
    image: "/images/roles/inv-wing-back.png",
    keyElements: ["Central transition", "Midfield overload", "Defensive cover", "Passing links"],
    sections: [
      { heading: "Midfield Shift", content: "In possession, they step inside beside the No. 6. This creates a double pivot and frees up advanced midfielders to attack." },
      { heading: "Wide Protection", content: "When possession is lost, they must rapidly slide back to their defensive fullback position." }
    ],
    quizQuestions: [
      { question: "Where does an Inverted Wing-Back move in possession?", options: ["High up the touchline", "Inside to join the central midfield pivot", "Inside the opposing box", "None"], correctIndex: 1, explanation: "They step inside to act as midfielders when their team has the ball." },
      { question: "Why do managers use inverted wing-backs?", options: ["To score headers", "To create central numerical overloads and control possession", "To play without midfielders", "To waste time"], correctIndex: 1, explanation: "Adding an extra player to midfield makes it easy to bypass presses." },
      { question: "Which coach famously uses inverted wing-backs?", options: ["Jose Mourinho", "Pep Guardiola", "Sean Dyche", "Roy Hodgson"], correctIndex: 1, explanation: "Guardiola has used Lahm, Alaba, Cancelo, and Stones in inverted roles." },
      { question: "What is a main risk of this role?", options: ["No wing play", "Flanks are exposed to counter-attacks on turnovers", "Midfield is empty", "None"], correctIndex: 1, explanation: "Leaving the wing open leaves the team vulnerable to wide counters." },
      { question: "What skill is vital for an inverted wing-back?", options: ["Only slide tackling", "Composure, passing, and positional awareness under pressure", "Long throw-ins", "None"], correctIndex: 1, explanation: "Playing in midfield requires 360-degree awareness and passing skills." }
    ]
  },
  "role-full-back": {
    slug: "role-full-back",
    title: "Full Back",
    description: "Traditional outside defender focused on wing defense.",
    introduction: "The Fullback is a traditional wide defender. Their primary job is to defend the wings, block crosses, and mark opponent wingers.",
    image: "/images/roles/full-back.png",
    keyElements: ["Wing defense", "Blocking crosses", "1v1 marking", "Wide cover"],
    sections: [
      { heading: "Flank Defense", content: "Fullbacks sit on the left and right sides of the back four. They must prevent opposing wingers from dribbling past or crossing." },
      { heading: "Attacking Support", content: "While focused on defense, modern fullbacks are expected to occasionally join attacks, overlapping to cross." }
    ],
    quizQuestions: [
      { question: "What is the primary job of a traditional Fullback?", options: ["Score goals", "Defend the flanks and mark wingers", "Play in central midfield", "Take penalties"], correctIndex: 1, explanation: "They are wide defenders focused on protecting the flanks." },
      { question: "Where do fullbacks position themselves in a back four?", options: ["In the center of defense", "On the left and right edges of the defensive line", "In midfield", "Ahead of the strikers"], correctIndex: 1, explanation: "They sit on the outer edges of the back four." },
      { question: "What is the fullback's duty when the winger cuts inside?", options: ["Track them and block the path to the box", "Run out of play", "Stand still", "None"], correctIndex: 0, explanation: "They must contain the winger's entry toward the center of the pitch." },
      { question: "How does a fullback support the attack?", options: ["By taking throw-ins only", "By making overlapping runs to cross", "By playing as striker", "None"], correctIndex: 1, explanation: "They overlap wide areas to provide extra crossing options." },
      { question: "Who is a classic legendary Fullback?", options: ["Paolo Maldini / Gary Neville", "Lionel Messi", "Andrea Pirlo", "Diego Maradona"], correctIndex: 0, explanation: "Maldini and Neville were legendary defensive fullbacks." }
    ]
  },
  "role-defensive-midfielder": {
    slug: "role-defensive-midfielder",
    title: "Defensive Midfielder",
    description: "Shielding central defense and sweeping up loose balls.",
    introduction: "A Defensive Midfielder (No. 6) sits in front of the defense. They intercept passes, make tackles, and protect the center-backs from direct attacks.",
    image: "/images/roles/defensive-midfielder.png",
    keyElements: ["Defensive shield", "Interceptions", "Tactical fouls", "Simple passing"],
    sections: [
      { heading: "The Shield", content: "They block passing lanes to the opponent's strikers, win physical duels in midfield, and recover second balls." },
      { heading: "Buildup Role", content: "Once they win possession, they play simple, safe passes to the creative playmakers." }
    ],
    quizQuestions: [
      { question: "What is the main task of a Defensive Midfielder?", options: ["Score goals", "Shield the defense and disrupt opponent attacks", "Play on the touchline", "Take goal kicks"], correctIndex: 1, explanation: "They protect the backline by breaking up play in central areas." },
      { question: "Which shirt number is traditionally associated with this role?", options: ["No. 9", "No. 10", "No. 6", "No. 1"], correctIndex: 2, explanation: "The No. 6 is the traditional anchor/defensive midfielder." },
      { question: "What is an interception?", options: ["A foul", "Cutting off an opponent's pass to win possession", "A penalty", "A clearance"], correctIndex: 1, explanation: "An interception is reading play to block and recover a pass." },
      { question: "Name a famous defensive midfielder.", options: ["N'Golo Kante / Claude Makelele", "Lionel Messi", "Arjen Robben", "Peter Crouch"], correctIndex: 0, explanation: "Kante and Makelele are legendary for their workrate and interceptions." },
      { question: "What is the 'Makelele Role' named after?", options: ["A type of shot", "A holding midfielder who protects the defense and plays simple passes", "A diving header", "None"], correctIndex: 1, explanation: "Claude Makelele defined the modern holding midfielder role." }
    ]
  },
  "role-anchor": {
    slug: "role-anchor",
    title: "Anchor",
    description: "A pure holding midfielder who rarely moves from in front of defense.",
    introduction: "An Anchor is a disciplined holding midfielder. They do not join the attack; they stay central, screen the defense, and prioritize positional security.",
    image: "/images/roles/anchor.png",
    keyElements: ["Strict discipline", "Central screening", "Safe distribution", "Tackle strength"],
    sections: [
      { heading: "Stay Home", content: "The Anchor's motto is 'stay home'. While other midfielders push forward, the anchor stays in front of the center-backs to block counter-attacks." },
      { heading: "Simple Play", content: "They win the ball and pass it immediately to nearby playmakers, taking zero risks." }
    ],
    quizQuestions: [
      { question: "What describes the movement of an Anchor midfielder?", options: ["Runs box-to-box", "Remains stationary in front of the defense to screen passes", "Runs down the wings", "None"], correctIndex: 1, explanation: "The anchor sits disciplined in central defense channels." },
      { question: "Does the anchor join the attack?", options: ["Yes, constantly", "No, they prioritize defensive positioning and security", "They play as striker", "None"], correctIndex: 1, explanation: "They stay back to protect the defense against transitions." },
      { question: "What is a key quality for an Anchor?", options: ["Dribbling agility", "Positional discipline and ball-winning ability", "Sprinting speed", "None"], correctIndex: 1, explanation: "Discipline is vital to avoid leaving central spaces unprotected." },
      { question: "Which midfielder type is opposite to the Anchor?", options: ["Box-to-box midfielder", "Regista", "Stopper", "None"], correctIndex: 0, explanation: "A box-to-box midfielder runs the entire pitch, whereas the anchor stays deep." },
      { question: "Give an example of an Anchor player.", options: ["Javier Mascherano / Casemiro", "Kevin De Bruyne", "Lionel Messi", "Arjen Robben"], correctIndex: 0, explanation: "Mascherano and Casemiro sit deep to block central counters." }
    ]
  },
  "role-regista": {
    slug: "role-regista",
    title: "Regista",
    description: "A deep playmaker orchestrating patterns from holding midfield.",
    introduction: "The Regista is a deep-lying playmaker. Instead of physical defending, they use their vision and long passing range to direct play from holding midfield.",
    image: "/images/roles/regista-role.png",
    keyElements: ["Deep playmaker", "Tempo direction", "Long passing", "Vision"],
    sections: [
      { heading: "The Conductor", content: "They collect the ball from defense and orchestrate the team's attack, switching play with long diagonals." },
      { heading: "Defensive Protection", content: "They need a physical partner (destroyer) to do the dirty work, leaving them free to create." }
    ],
    quizQuestions: [
      { question: "What is the main task of a Regista?", options: ["Mark strikers", "Dictate play and orchestrate attacks from deep", "Play as wide winger", "None"], correctIndex: 1, explanation: "A Regista is a deep-lying conductor of play." },
      { question: "Who is the most famous Regista?", options: ["Andrea Pirlo", "Gennaro Gattuso", "John Terry", "Roy Keane"], correctIndex: 0, explanation: "Pirlo is the defining modern Regista." },
      { question: "What passing range is expected from a Regista?", options: ["Only short passes", "Excellent short and long-distance passing", "Throw-ins only", "None"], correctIndex: 1, explanation: "They must switch play with long, accurate diagonal passes." },
      { question: "Why do they need a defensive partner?", options: ["To help them score", "To protect them and win back ball possession", "To take goal kicks", "None"], correctIndex: 1, explanation: "A physical player (like Gattuso) handles defensive duels, letting the Regista focus on playmaking." },
      { question: "Where is the Regista positioned?", options: ["Behind the center-backs", "Sitting in holding midfield", "Behind the striker", "None"], correctIndex: 1, explanation: "They sit deep in midfield to have the best view of the pitch." }
    ]
  },
  "role-deep-lying-playmaker": {
    slug: "role-deep-lying-playmaker",
    title: "Deep-Lying Playmaker",
    description: "Orchestrating play from deep with dynamic passing range.",
    introduction: "The Deep-Lying Playmaker sits deep, directing attacks. They use vision and passing to bypass the press and feed forwards.",
    image: "/images/roles/deep-playmaker-role.png",
    keyElements: ["Deep distribution", "Line-breaking passes", "Tempo control", "Vision"],
    sections: [
      { heading: " quarterbacking", content: "They act as a deep quarterback, receiving the ball from defenders and passing forward through lines." },
      { heading: "Press Resistance", content: "They must remain calm under pressure, shielding the ball to find outlets." }
    ],
    quizQuestions: [
      { question: "What is a Deep-Lying Playmaker?", options: ["A striker", "A midfielder sitting deep who orchestrates attacks with long passing", "A defender", "None"], correctIndex: 1, explanation: "They direct attacks from holding midfield zones." },
      { question: "How do they start attacks?", options: ["By dribbling", "By playing accurate long diagonal passes or line-breakers", "With headers", "None"], correctIndex: 1, explanation: "Vision and long passing are their key tools." },
      { question: "Name a classic Deep-Lying Playmaker.", options: ["Xabi Alonso", "Diego Costa", "Neymar", "Gary Neville"], correctIndex: 0, explanation: "Xabi Alonso was legendary for his long-range deep passing." },
      { question: "What is a risk of this role?", options: ["They get too many assists", "Turnovers near their own box if pressed intensely", "None", "Too slow"], correctIndex: 1, explanation: "Opponents target them to shut down the team's passing engine." },
      { question: "How do they defend?", options: ["They play in goal", "Using positioning to intercept passes and shield the back four", "They do not defend", "None"], correctIndex: 1, explanation: "They protect the defense with positioning and interceptions." }
    ]
  },
  "role-box-to-box": {
    slug: "role-box-to-box",
    title: "Box-to-Box Midfielder",
    description: "Running box-to-box to contribute to both defense and attack.",
    introduction: "A Box-to-Box Midfielder (No. 8) is a complete player. They run the entire length of the pitch, defending their own box and arriving in the opponent's box to score.",
    image: "/images/roles/box-to-box.png",
    keyElements: ["All-action running", "Defensive tracking", "Late box arrivals", "High stamina"],
    sections: [
      { heading: "The Engine", content: "They must possess elite stamina. They make tackles near their own box, carry the ball forward, and arrive late to finish chances." },
      { heading: "Versatility", content: "They must be skilled at both winning the ball (tackling) and creating (passing/shooting)." }
    ],
    quizQuestions: [
      { question: "What is the main characteristic of a Box-to-Box midfielder?", options: ["They stay in one position", "They run the entire pitch, defending and attacking", "They play in goal", "They only cross"], correctIndex: 1, explanation: "They cover the entire pitch, from their own box to the opponent's box." },
      { question: "Which shirt number is traditionally associated with this role?", options: ["No. 6", "No. 8", "No. 10", "No. 9"], correctIndex: 1, explanation: "The No. 8 is the classic box-to-box midfielder." },
      { question: "What physical attribute is most critical for a box-to-box player?", options: ["Height", "Elite stamina and workrate", "Shot power only", "Agility only"], correctIndex: 1, explanation: "Running the entire pitch for 90 minutes requires incredible cardiovascular stamina." },
      { question: "Name a legendary Box-to-Box midfielder.", options: ["Steven Gerrard / Roy Keane", "Andrea Pirlo", "Lionel Messi", "Eden Hazard"], correctIndex: 0, explanation: "Gerrard, Keane, Lampard, and Vieira are classic box-to-box giants." },
      { question: "How do they contribute to the attack?", options: ["By staying in defense", "Making late runs into the box to score from loose balls", "They do not attack", "None"], correctIndex: 1, explanation: "Arriving late makes them hard for defenders to mark." }
    ]
  },
  "role-mezzala": {
    slug: "role-mezzala",
    title: "Mezzala",
    description: "Drifting wide to attack the half-spaces and flanks.",
    introduction: "The Mezzala is an attacking central midfielder who drifts wide to combine with wingers and exploit the half-spaces.",
    image: "/images/roles/mezzala-role.png",
    keyElements: ["Drifting wide", "Half-space runs", "Flank overloads", "Drifting creations"],
    sections: [
      { heading: "The Half-Winger", content: "They drift from central midfield to the wings, creating passing triangles with the winger and fullback." },
      { heading: "Half-Space Attack", content: "They run into the gap between the center-back and fullback, creating scoring chances." }
    ],
    quizQuestions: [
      { question: "What does the Italian word 'Mezzala' mean?", options: ["Defensive anchor", "Half-winger", "Target man", "Sweeper"], correctIndex: 1, explanation: "Mezzala translates to half-winger." },
      { question: "Where does the Mezzala run?", options: ["Inside the goal mouth", "Wide into the half-spaces", "Back to his own box", "None"], correctIndex: 1, explanation: "They drift wide into the half-spaces between center and wing." },
      { question: "Which formation suits a Mezzala?", options: ["4-4-2", "4-3-3", "4-2-3-1", "5-4-1"], correctIndex: 1, explanation: "Midfield threes (like in 4-3-3) allow the Mezzala to drift wide safely." },
      { question: "How do they help the wingers?", options: ["By crossing", "Drifting wide to overload the flank (creating 2v1 or 3v2)", "They don't help", "None"], correctIndex: 1, explanation: "Their wide runs create numerical overloads on the wing." },
      { question: "Name a modern player with Mezzala qualities.", options: ["Sergio Busquets", "Kevin De Bruyne", "John Terry", "Gattuso"], correctIndex: 1, explanation: "De Bruyne famously drifts wide to cross from the half-spaces." }
    ]
  },
  "role-carrilero": {
    slug: "role-carrilero",
    title: "Carrilero",
    description: "A lateral midfielder who covers the wings when fullbacks push forward.",
    introduction: "The Carrilero is a shuttler. They move laterally across the pitch to cover the flanks when fullbacks push forward to attack.",
    image: "/images/roles/carrilero-role.png",
    keyElements: ["Lateral movement", "Flank cover", "Simple passing", "Defensive balance"],
    sections: [
      { heading: "Flank Cover", content: "They slide sideways to cover the space left vacant by overlapping fullbacks, keeping the defense secure." },
      { heading: "Possession Link", content: "They focus on clean, low-risk passing to retain possession." }
    ],
    quizQuestions: [
      { question: "What is the primary movement of a Carrilero?", options: ["Box-to-box vertical sprints", "Lateral (sideways) shuttling to cover wings", "Attacking as striker", "Defending in goal"], correctIndex: 1, explanation: "They shuttle laterally to protect wide spaces." },
      { question: "Why are they useful in diamond formations?", options: ["They score headers", "They cover the empty flanks when fullbacks overlap", "They play as goalie", "None"], correctIndex: 1, explanation: "Diamond formations lack wingers, so Carrileros cover the flanks." },
      { question: "Do Carrileros focus on scoring?", options: ["Yes, they are main scorers", "No, they prioritize defensive cover and possession", "They only score headers", "None"], correctIndex: 1, explanation: "Their role is defensive balance and possession, not scoring." },
      { question: "What is the English term for Carrilero?", options: ["Striker", "Shuttler", "Anchor", "Playmaker"], correctIndex: 1, explanation: "Carrilero translates to shuttler." },
      { question: "How do they assist the buildup?", options: ["By dribbling", "Providing safe passing outlets on the sides of midfield", "They do not participate", "None"], correctIndex: 1, explanation: "They offer simple lateral passing options to maintain possession." }
    ]
  },
  "role-attacking-midfielder": {
    slug: "role-attacking-midfielder",
    title: "Attacking Midfielder",
    description: "The creative link playing behind strikers to generate chances.",
    introduction: "The Attacking Midfielder (No. 10) sits behind the strikers. They use vision, passing, and dribbling to create scoring chances and score goals.",
    image: "/images/roles/attacking-midfielder.png",
    keyElements: ["Final third creation", "Through balls", "Shooting from distance", "Pocket positioning"],
    sections: [
      { heading: "The Playmaker", content: "They play in the pocket between the opponent's midfield and defense, unlocking lines with through balls." },
      { heading: "Goal Threat", content: "They also score goals, shooting from the edge of the box or making late runs." }
    ],
    quizQuestions: [
      { question: "What is the main task of an Attacking Midfielder?", options: ["Mark strikers", "Create scoring chances and link midfield to attack", "Play as center-back", "None"], correctIndex: 1, explanation: "They are the team's main creative link in the final third." },
      { question: "Which shirt number is traditionally associated with this role?", options: ["No. 6", "No. 9", "No. 10", "No. 1"], correctIndex: 2, explanation: "The No. 10 is the traditional attacking playmaker." },
      { question: "Where do they position themselves?", options: ["Behind the center-backs", "In the pocket between the opponent's midfield and defense", "On the goal line", "None"], correctIndex: 1, explanation: "They sit 'in the hole' to have space to create." },
      { question: "What pass is their signature weapon?", options: ["A high clearance", "A line-breaking through ball into the box", "A backpass", "A throw-in"], correctIndex: 1, explanation: "Through balls split defenders, releasing strikers." },
      { question: "Name a famous modern Attacking Midfielder.", options: ["Kevin De Bruyne / Bruno Fernandes", "Sergio Busquets", "N'Golo Kante", "Peter Crouch"], correctIndex: 0, explanation: "De Bruyne and Fernandes are elite attacking creators." }
    ]
  },
  "role-trequartista": {
    slug: "role-trequartista",
    title: "Trequartista",
    description: "A final third playmaker free of defensive duties.",
    introduction: "The Trequartista is a creative genius who operates in the final third. They focus entirely on creativity, exempted from defensive work.",
    image: "/images/roles/trequartista-role.png",
    keyElements: ["Final third creation", "Exemption from defense", "Elite technical skill", "Triangulations"],
    sections: [
      { heading: "Pure Creativity", content: "They drift between midfield and attack, using skills and through balls to feed forwards." },
      { heading: "Defensive Exemption", content: "Preserving their energy ensures they are sharp and lethal on counter-attacks." }
    ],
    quizQuestions: [
      { question: "What does 'Trequartista' mean?", options: ["Defender", "Three-quarters playmaker", "Goal scorer", "None"], correctIndex: 1, explanation: "It refers to their positioning in the three-quarter zone of the pitch." },
      { question: "What is a key benefit of freeing them from defense?", options: ["They do not run", "They are fresh and available on transitions", "They don't get carded", "None"], correctIndex: 1, explanation: "Preserving energy keeps them sharp to launch counters." },
      { question: "Name a famous Italian Trequartista.", options: ["Francesco Totti", "Gattuso", "Maldini", "Buffon"], correctIndex: 0, explanation: "Totti was the ultimate Roma Trequartista." },
      { question: "Where does the Trequartista play?", options: ["In their own box", "In the pocket behind the strikers", "On the wing", "None"], correctIndex: 1, explanation: "They drift in the hole behind the forwards." },
      { question: "What happens if they are marked closely?", options: ["They stop playing", "They drift wide or drop deep to pull markers out of position", "They get subbed", "None"], correctIndex: 1, explanation: "Roaming helps them escape close markers." }
    ]
  },
  "role-enganche": {
    slug: "role-enganche",
    title: "Enganche",
    description: "A stationary central playmaker linking midfield to attack.",
    introduction: "The Enganche is a traditional stationary playmaker. They stay in the center, acting as the pivot hook to distribute passes.",
    image: "/images/roles/enganche-role.png",
    keyElements: ["Stationary playmaking", "Central hook", "Minimal running", "Elite passing"],
    sections: [
      { heading: "The Hook", content: "They stay central, acting as the link. They do not run the channels, using passing to move the team." },
      { heading: "Modern Scarcity", content: "High-tempo modern pressing has made the slow, stationary Enganche rare." }
    ],
    quizQuestions: [
      { question: "What does 'Enganche' mean in Spanish?", options: ["Director", "Hook", "Striker", "Sweeper"], correctIndex: 1, explanation: "Enganche translates to hook." },
      { question: "What is the movement of a classic Enganche?", options: ["Constant sprints", "Stationary, staying central to distribute", "Wide touchline runs", "None"], correctIndex: 1, explanation: "They stand in the center, letting their passing do the work." },
      { question: "Who is a famous example of this role?", options: ["Juan Roman Riquelme", "Lionel Messi", "Cristiano Ronaldo", "Steven Gerrard"], correctIndex: 0, explanation: "Riquelme is the classic South American Enganche." },
      { question: "Why is the Enganche rare today?", options: ["It is banned", "Modern pressing requires all players to defend and run", "They do not score", "None"], correctIndex: 1, explanation: "Modern teams cannot afford a passenger who does not defend." },
      { question: "What is their primary skill?", options: ["Tackling", "Elite creative passing and vision", "Heading", "Running speed"], correctIndex: 1, explanation: "They excel at unlocking defenses with passes." }
    ]
  },
  "role-winger": {
    slug: "role-winger",
    title: "Winger",
    description: "Traditional wide attacker crossing the ball from near touchlines.",
    introduction: "A Winger plays on the flanks. They hug the touchline, beat fullbacks with speed and dribbling, and cross the ball into the box.",
    image: "/images/roles/winger.png",
    keyElements: ["Touchline hugging", "Dribbling fullbacks", "Flank speed", "Byline crosses"],
    sections: [
      { heading: "Hugging the Touchline", content: "They stay wide, stretching the defense and creating 1v1 duels against the fullback." },
      { heading: "Crossing", content: "They run down the flank to cross with their natural foot into the box." }
    ],
    quizQuestions: [
      { question: "What is the primary job of a traditional Winger?", options: ["Cut inside to shoot", "Stay wide, beat fullbacks, and cross", "Defend the goal", "None"], correctIndex: 1, explanation: "Traditional wingers hug the line to cross." },
      { question: "What foot does a right-winger use to cross?", options: ["Left foot", "Right foot", "Both", "None"], correctIndex: 1, explanation: "A right-winger uses their right foot for direct crosses." },
      { question: "What is the benefit of staying wide?", options: ["Stretches the defense, opening gaps in the center", "Close to coach", "Easy to clear", "None"], correctIndex: 0, explanation: "Stretching the backline creates central spaces." },
      { question: "Who is a classic traditional Winger?", options: ["David Beckham / Ryan Giggs", "Lionel Messi", "Arjen Robben", "Roberto Firmino"], correctIndex: 0, explanation: "Beckham and Giggs are classic touchline crossers." },
      { question: "What is a winger's main duel?", options: ["Against the keeper", "1v1 against the opposing fullback", "Against the referee", "None"], correctIndex: 1, explanation: "They battle the fullback to reach the crossing zone." }
    ]
  },
  "role-inverted-winger": {
    slug: "role-inverted-winger",
    title: "Inverted Winger",
    description: "Wide attacker cutting inside on opposite foot to shoot.",
    introduction: "An Inverted Winger plays on the opposite wing of their dominant foot. They cut inside onto their strong foot to shoot or create.",
    image: "/images/roles/inv-winger-role.png",
    keyElements: ["Opposite-foot play", "Cutting inside", "Shooting angles", "Overlapping space"],
    sections: [
      { heading: "Cutting Inside", content: "They cut diagonally from wide, opening up direct shooting angles on their strong foot." },
      { heading: "Fullback Space", content: "Drifting inside clears the wing corridor for overlapping fullbacks to cross." }
    ],
    quizQuestions: [
      { question: "What is an Inverted Winger?", options: ["Winger playing on opposite side of their strong foot", "A defender", "A keeper in midfield", "None"], correctIndex: 0, explanation: "They play on the opposite flank of their strong foot." },
      { question: "What is their primary attacking move?", options: ["Running wide to cross", "Cutting inside to shoot or pass", "Backpassing to defense", "None"], correctIndex: 1, explanation: "They cut inside to shoot or create." },
      { question: "Who is a famous Inverted Winger?", options: ["Arjen Robben", "Peter Crouch", "Andrea Pirlo", "Diego Simeone"], correctIndex: 0, explanation: "Robben cutting inside from the right was his signature move." },
      { question: "What space is opened when they cut inside?", options: ["The center", "The wing corridor for overlapping fullbacks", "The box", "None"], correctIndex: 1, explanation: "Their inside movement clears the flank for the fullback." },
      { question: "What threat do they offer?", options: ["More headers", "Direct goal scoring threats from central angles", "Wasting time", "None"], correctIndex: 1, explanation: "They act as extra forwards by shooting from central areas." }
    ]
  },
  "role-inside-forward": {
    slug: "role-inside-forward",
    title: "Inside Forward",
    description: "Wingers who play very high and act like second strikers.",
    introduction: "An Inside Forward starts wide but plays very high, cutting inside to act as a second striker in the box rather than a playmaker.",
    image: "/images/roles/inside-forward.png",
    keyElements: ["High positioning", "Diagonal runs to box", "Goalscoring winger", "Inside finishes"],
    sections: [
      { heading: "Goalscoring Focus", content: "They starting wide but their main target is the goal. They cut inside to finish chances, leaving width to fullbacks." },
      { heading: "Salah Style", content: "Mohamed Salah at Liverpool is a classic example, starting wide but scoring like a central forward." }
    ],
    quizQuestions: [
      { question: "What is the primary goal of an Inside Forward?", options: ["Cross the ball from touchline", "Cut inside and enter the box to act as a scorer", "Defend in midfield", "None"], correctIndex: 1, explanation: "They cut inside to act as second strikers in the box." },
      { question: "How do they differ from inverted wingers?", options: ["They play higher, focusing on scoring inside the box", "They do not differ", "They stay wide", "None"], correctIndex: 0, explanation: "Inside forwards are high goal-scorers who act like strikers, whereas inverted wingers can be creators." },
      { question: "Name a modern player who plays as an Inside Forward.", options: ["Mohamed Salah / Sadio Mane", "Sergio Busquets", "John Terry", "Peter Crouch"], correctIndex: 0, explanation: "Salah starts wide but cuts inside to score high numbers of goals." },
      { question: "Who provides the width in an inside forward system?", options: ["The inside forward", "The attacking fullback", "The center-backs", "The goalie"], correctIndex: 1, explanation: "Fullbacks overlap to provide width as forwards cut inside." },
      { question: "What is their run path?", options: ["Straight down the line", "Diagonal runs from wide into the penalty area", "Back to defense", "None"], correctIndex: 1, explanation: "They make diagonal runs from the wings directly into the box." }
    ]
  },
  "role-shadow-striker": {
    slug: "role-shadow-striker",
    title: "Shadow Striker",
    description: "Second striker arriving late in the box to convert flick-ons.",
    introduction: "A Shadow Striker plays behind the forward. They use the forward's physical battles as a screen, arriving late in the box to finish loose balls.",
    image: "/images/roles/shadow-striker-role.png",
    keyElements: ["Late box runs", "Screened arrivals", "Anticipation", "Clinical finishes"],
    sections: [
      { heading: "Late Runs", content: "They wait for the main striker to engage center-backs, then sprint past them to finish." },
      { heading: "Anticipation", content: "They excel at reading where knockdowns will land, arriving unmarked." }
    ],
    quizQuestions: [
      { question: "Where does the Shadow Striker start their run?", options: ["In their own box", "Deep in midfield, arriving late in the box", "Ahead of the striker", "None"], correctIndex: 1, explanation: "They start deep, making late runs into the box." },
      { question: "Who do they play off of?", options: ["The keeper", "A physical target striker who screens center-backs", "The referee", "None"], correctIndex: 1, explanation: "They exploit spaces created by a physical central forward." },
      { question: "Why are they hard to mark?", options: ["They are too fast", "Their runs are late and start from deep midfield", "They stay wide", "None"], correctIndex: 1, explanation: "Defenders are busy with the striker, failing to track the late run." },
      { question: "Name a player famous for this style.", options: ["Thomas Müller / Dele Alli", "Sergio Busquets", "John Terry", "Andrea Pirlo"], correctIndex: 0, explanation: "Müller is famous for late, ghosting box runs." },
      { question: "What is their primary duty?", options: ["Defending", "Scoring goals from late arrivals", "Crossing", "None"], correctIndex: 1, explanation: "They are goalscoring playmakers who finish box chances." }
    ]
  },
  "role-false-9": {
    slug: "role-false-9",
    title: "False 9",
    description: "A forward dropping into midfield to confuse center-backs.",
    introduction: "The False 9 is a striker who drops deep. This movement pulls defenders out of shape and opens space for wide runs.",
    image: "/images/roles/false-9-role.png",
    keyElements: ["Dropping deep", "Midfield overload", "Center-back disruption", "Diagonal runs"],
    sections: [
      { heading: "The Trap", content: "By dropping deep, they force center-backs to make a decision: follow them or stay back." },
      { heading: "Wide Cuts", content: "Wingers cut inside to attack the space the False 9 vacated." }
    ],
    quizQuestions: [
      { question: "What is the main movement of a False 9?", options: ["Stay high in box", "Drop deep into midfield to draw defenders", "Play on the wing", "None"], correctIndex: 1, explanation: "The False 9 drops deep to playmake and disrupt center-backs." },
      { question: "Who famously played this under Pep at Barca?", options: ["Lionel Messi", "Cristiano Ronaldo", "Erling Haaland", "Harry Kane"], correctIndex: 0, explanation: "Messi revolutionized the False 9 role under Guardiola." },
      { question: "Who runs into the empty space?", options: ["Fullbacks", "Wide wingers cutting inside", "Center-backs", "None"], correctIndex: 1, explanation: "Wingers exploit the space behind the defense." },
      { question: "What does this create in midfield?", options: ["Clearance", "Numerical overload (extra passing option)", "Congestion", "None"], correctIndex: 1, explanation: "Dropping deep gives the team an extra midfielder." },
      { question: "What is the center-back dilemma?", options: ["Mark the goalie or not", "Follow the dropping striker or stay in position", "Clear or pass", "None"], correctIndex: 1, explanation: "Following opens space; staying back gives the playmaker time." }
    ]
  },
  "role-target-man": {
    slug: "role-target-man",
    title: "Target Man",
    description: "A tall striker who holds up play and wins aerial battles.",
    introduction: "A Target Man is a physical striker. They receive direct long passes, shield the ball, and link up with runners.",
    image: "/images/roles/target-man-role.png",
    keyElements: ["Physical shield", "Aerial duels", "Flick-ons", "Link-up play"],
    sections: [
      { heading: "Hold Up Play", content: "They use their body to keep defenders away, allowing midfielders time to join the attack." },
      { heading: "Aerial Target", content: "They win long balls, flicking them on to fast wingers." }
    ],
    quizQuestions: [
      { question: "What is the main skill of a Target Man?", options: ["Agile dribbling", "Physical hold-up play and aerial dominance", "Sweeper clearances", "None"], correctIndex: 1, explanation: "They use strength to hold the ball and win headers." },
      { question: "What physical attribute is vital?", options: ["Dribbling", "Height and physical strength", "Speed", "None"], correctIndex: 1, explanation: "Strength and height are needed to battle center-backs." },
      { question: "What is a flick-on?", options: ["A trick shot", "A header guiding the ball to runners behind defense", "A foul", "None"], correctIndex: 1, explanation: "Flick-ons guide long balls directly to fast teammates." },
      { question: "Give an example of a Target Man.", options: ["Lionel Messi", "Zlatan Ibrahimović / Didier Drogba", "Neymar", "Mohamed Salah"], correctIndex: 1, explanation: "Ibrahimović and Drogba are classic physical target strikers." },
      { question: "Who should play close to the target man?", options: ["The goalkeeper", "Fast wingers or a running midfielder", "No one", "None"], correctIndex: 1, explanation: "They need runners nearby to collect their knockdowns." }
    ]
  },
  "role-poacher": {
    slug: "role-poacher",
    title: "Poacher",
    description: "A clinical box striker who scores from close range.",
    introduction: "A Poacher is a penalty-box striker. They do not participate in buildup or defend; they focus entirely on finding space in the box to finish chances.",
    image: "/images/roles/poacher.png",
    keyElements: ["Box positioning", "One-touch finishes", "Off-the-ball runs", "Clinical instinct"],
    sections: [
      { heading: "Penalty Box Mastery", content: "They live in the penalty box. They have elite anticipation, reacting first to deflections or low crosses to tap the ball in." },
      { heading: "Off-the-ball Sprints", content: "They make short, sharp sprints to beat their marker to the ball in high-danger zones." }
    ],
    quizQuestions: [
      { question: "Where does a Poacher spend most of the match?", options: ["In midfield", "Inside the opponent's penalty box", "On the wings", "In their own half"], correctIndex: 1, explanation: "Poachers operate almost exclusively inside the penalty box." },
      { question: "Do poachers participate heavily in buildup play?", options: ["Yes, they drop to midfield", "No, they focus entirely on positioning and finishing in the box", "They play as playmakers", "None"], correctIndex: 1, explanation: "Poachers stay high, letting others create so they can focus on scoring." },
      { question: "What is their key strength?", options: ["Long passing", "Clinical finishing and reaction speed in the box", "Slide tackling", "Long throw-ins"], correctIndex: 1, explanation: "Anticipation and one-touch finishing are their main weapons." },
      { question: "Which legendary player is a classic Poacher?", options: ["Filippo Inzaghi", "Andrea Pirlo", "Ronaldinho", "Zinedine Zidane"], correctIndex: 0, explanation: "Inzaghi was famous for living on the offside line and scoring tap-ins." },
      { question: "How do they score most of their goals?", options: ["From long-range shots", "Tap-ins, rebounds, and close-range finishes", "Free kicks", "None"], correctIndex: 1, explanation: "They specialize in close-range finishes and rebounds." }
    ]
  },
  "role-pressing-forward": {
    slug: "role-pressing-forward",
    title: "Pressing Forward",
    description: "Striker whose main job is to trigger the high press.",
    introduction: "A Pressing Forward leads the defense from the front. They sprint to close down opponent center-backs and the goalkeeper, forcing errors and blocking passing lanes.",
    image: "/images/roles/pressing-forward.png",
    keyElements: ["High pressure sprints", "Press triggers", "Chasing goalkeeper", "Defensive workrate"],
    sections: [
      { heading: "Defending from the Front", content: "Their main job is to disrupt the opponent's buildup. They sprint to pressure center-backs, forcing them to make quick decisions or clear the ball long." },
      { heading: "Stamina Demands", content: "Requires immense stamina and tactical intelligence to know when to press and how to block passing channels." }
    ],
    quizQuestions: [
      { question: "What is the main task of a Pressing Forward?", options: ["Stay in the box and wait for crosses", "Sprint to press opponent defenders and goalkeeper", "Play as defensive midfielder", "None"], correctIndex: 1, explanation: "They lead the high press, closing down the opponent's backline." },
      { question: "What physical attribute is most vital for this role?", options: ["Height", "Elite stamina and sprint workrate", "Only shot power", "None"], correctIndex: 1, explanation: "Chasing defenders all game requires incredible physical workrate." },
      { question: "Who is a famous modern Pressing Forward?", options: ["Roberto Firmino", "Peter Crouch", "Lionel Messi", "Andrea Pirlo"], correctIndex: 0, explanation: "Firmino at Liverpool was the key defensive forward who triggered Klopp's press." },
      { question: "What does their press force center-backs to do?", options: ["Pass short easily", "Make mistakes or clear the ball long under pressure", "Score on their own goal", "None"], correctIndex: 1, explanation: "Pressure forces errors and rushed clearances." },
      { question: "Do pressing forwards also score?", options: ["No, never", "Yes, they score from winning the ball high up in transition", "Only from penalties", "None"], correctIndex: 1, explanation: "Winning turnovers near the box leads to easy goals." }
    ]
  },
  "role-complete-forward": {
    slug: "role-complete-forward",
    title: "Complete Forward",
    description: "Possessing stats to hold up, create, score, and press.",
    introduction: "The Complete Forward possesses all attacking qualities. They can hold up play, run in behind, create chances, score headers, and press defenders — a universal striker.",
    image: "/images/roles/complete-forward.png",
    keyElements: ["Universal skill", "Hold-up and speed", "Clinical scoring", "Pressing capability"],
    sections: [
      { heading: "The Universal Striker", content: "They have no weaknesses. They can play as a target man, a poacher, or drop deep like a False 9, adapting to what the match requires." },
      { heading: "Tactical Value", content: "Extremely rare and valuable, as they allow the coach to change styles mid-match without making substitutions." }
    ],
    quizQuestions: [
      { question: "What defines a Complete Forward?", options: ["They only head the ball", "They possess all attacking skills — hold-up, speed, creation, and finishing", "They also play goalkeeper", "None"], correctIndex: 1, explanation: "A complete forward has no weaknesses, combining all forward roles." },
      { question: "Why are complete forwards highly valued?", options: ["They cost less", "They allow the team to adapt to any style of play", "They don't need midfielders", "None"], correctIndex: 1, explanation: "They can hold play, run behind, or drop deep, adjusting to matches." },
      { question: "Name a modern Complete Forward.", options: ["Harry Kane / Robert Lewandowski", "N'Golo Kante", "John Terry", "Lionel Messi"], correctIndex: 0, explanation: "Kane and Lewandowski are elite at scoring, holding up play, and linking with midfield." },
      { question: "What is their goal threat level?", options: ["Low", "Elite, scoring from headers, long shots, and box tap-ins", "Only from corners", "None"], correctIndex: 1, explanation: "They can finish from any angle and with any technique." },
      { question: "What is their defensive contribution?", options: ["None", "Active, pressing defenders and winning headers on corners", "They stay in goal", "None"], correctIndex: 1, explanation: "They contribute to defense by pressing from the front and helping on set pieces." }
    ]
  }
};
