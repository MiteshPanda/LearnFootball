import { QuizQuestion } from "@/components/academy/LessonQuiz";
import { TacticLesson } from "./attacking";

export const buildupTactics: Record<string, TacticLesson> = {
  "gk-buildup": {
    slug: "gk-buildup",
    title: "Goalkeeper Build-Up",
    description: "Using the goalkeeper as an extra outfield player during early buildup.",
    introduction: "Modern football utilizes the goalkeeper as an active passer during buildup. By playing out from the back, the goalkeeper acts as an extra player, helping to bypass the opponent's press.",
    image: "/images/tactics/gk-buildup.png",
    keyElements: ["11v10 advantage", "Goalkeeper distribution", "Passing under pressure", "Sweeper keeper positioning"],
    sections: [
      { heading: "Creating the Overload", content: "Since opponents rarely press with all 11 players, using the goalkeeper in possession creates an 11v10 numerical advantage, allowing the team to pass around the press." },
      { heading: "Skills Required", content: "Modern goalkeepers must have excellent footwork, composure under pressure, and a wide passing range to find midfielders or fullbacks." }
    ],
    quizQuestions: [
      { question: "What is the primary advantage of using the goalkeeper in buildup?", options: ["The keeper can score goals", "It creates an 11v10 numerical advantage in possession", "It saves defender energy", "It is safer than clearing"], correctIndex: 1, explanation: "Using the keeper as a passer provides an extra player to bypass the opponent's press." },
      { question: "What is a key skill required for a goalkeeper in a buildup system?", options: ["Only shot-stopping", "Composure and passing ability with both feet", "Long throw-ins", "Running speed"], correctIndex: 1, explanation: "Goalkeepers must be comfortable receiving and passing the ball under pressure." },
      { question: "Which coach famously insisted on goalkeepers playing out from the back?", options: ["Pep Guardiola", "Sean Dyche", "Diego Simeone", "Jose Mourinho"], correctIndex: 0, explanation: "Guardiola revolutionized goalkeeping by demanding that keepers act as deep playmakers." },
      { question: "What is a major risk of goalkeeper buildup?", options: ["Conceding corner kicks", "A mistake or bad pass can lead to an open-goal concession", "It gets boring", "No throw-ins"], correctIndex: 1, explanation: "Losing possession near your own goal is highly dangerous, as it often results in an open net." },
      { question: "What is the goalkeeper's positioning during early buildup?", options: ["On the goal line", "Stepping out between split center-backs", "Sitting in midfield", "On the touchline"], correctIndex: 1, explanation: "The keeper steps out of the goal mouth to create better passing angles for the center-backs." }
    ]
  },
  "short-passing-buildup": {
    slug: "short-passing-buildup",
    title: "Short Passing Build-Up",
    description: "Constructing attacks from the back using high-frequency short passes.",
    introduction: "Short Passing Build-Up constructs attacks systematically from the back. The team uses low-risk short passes to move the ball from defenders to midfielders and finally to forwards.",
    image: "/images/tactics/short-buildup.png",
    keyElements: ["Low-risk passing", "Midfield triangles", "Patience in possession", "Draw-and-release"],
    sections: [
      { heading: "Buildup Structure", content: "Center-backs split wide, holding midfielders drop deep, and fullbacks push high. The team circulates the ball quickly, waiting for the opponent to press and leave spaces." },
      { heading: "Attracting Pressure", content: "By passing short, you draw the opponent's defensive block forward. This opens up spaces in midfield and defense to exploit." }
    ],
    quizQuestions: [
      { question: "What is the core method of Short Passing Build-Up?", options: ["Long clearances to the striker", "Quick, short passes between defenders and midfielders", "Crossing from deep", "Throw-ins only"], correctIndex: 1, explanation: "It relies on short, low-risk passes to move the ball out of the defensive third." },
      { question: "Why do teams use short passing to draw the opponent press?", options: ["To waste time", "To open up spaces behind the pressing lines", "To commit fouls", "To entertain fans"], correctIndex: 1, explanation: "Drawing the opponent forward leaves open spaces in their midfield and defensive lines." },
      { question: "What positioning is common for center-backs in this system?", options: ["Standing in the center circle", "Splitting wide to the edges of the box", "Sitting on the goal line", "Overlapping the wingers"], correctIndex: 1, explanation: "Splitting center-backs wide increases the distance opponents must cover to press the ball." },
      { question: "Which style of play is built on short passing buildup?", options: ["Catenaccio", "Tiki-Taka", "Route One", "Long Ball"], correctIndex: 1, explanation: "Tiki-taka is a possession style that relies heavily on short passing from the back." },
      { question: "What is a risk of this style?", options: ["No strikers", "Losing possession close to your own goal under intense press", "Too many corner kicks", "None"], correctIndex: 1, explanation: "If the opponent presses successfully and intercepts a short pass, they are immediately in scoring position." }
    ]
  },
  "long-ball-buildup": {
    slug: "long-ball-buildup",
    title: "Long Ball Build-Up",
    description: "Bypassing high-pressure setups using accurate long-distance passes.",
    introduction: "Long Ball Build-Up is a direct method. Instead of risking short passes near their own goal, the team launches long aerial passes to target strikers or wide runners in the opponent's half.",
    image: "/images/tactics/long-buildup.png",
    keyElements: ["Direct aerial passes", "Press bypass", "Target man utilization", "Second ball duels"],
    sections: [
      { heading: "Tactical Execution", content: "When facing a high-pressing team, the defense plays long balls to bypass the press. This eliminates the risk of losing the ball in the defensive third." },
      { heading: "Target Selection", content: "The target is usually a tall center-forward (target man) who can contest the header, or a fast winger running behind the defense." }
    ],
    quizQuestions: [
      { question: "Why do teams use Long Ball Build-Up against high-pressing teams?", options: ["They are afraid to play", "It bypasses the high press entirely, removing own-half risk", "It is faster than running", "It guarantees goals"], correctIndex: 1, explanation: "Long balls fly over the pressing lines, preventing turnovers near your own goal." },
      { question: "What is a 'second ball' in a long-ball system?", options: ["An extra ball", "The loose ball that drops from an aerial duel", "A corner kick", "A penalty"], correctIndex: 1, explanation: "Winning the loose knockdown is critical to securing possession in the attacking third." },
      { question: "Who is the key player to target in this system?", options: ["A small playmaker", "A tall target striker", "A sweeper keeper", "A fullback"], correctIndex: 1, explanation: "A physical striker is needed to win the aerial challenge against center-backs." },
      { question: "What is a disadvantage of long-ball buildup?", options: ["It uses too much energy", "It is lower accuracy and yields less possession control", "Too many offside calls", "None"], correctIndex: 1, explanation: "Long aerial passes are harder to control, resulting in more turnovers." },
      { question: "Which position typically launches the long ball?", options: ["The strikers", "The goalkeeper or center-backs", "The playmakers", "The wingers"], correctIndex: 1, explanation: "The keeper or deep defenders have the space and time to launch long passes." }
    ]
  },
  "split-cb": {
    slug: "split-cb",
    title: "Split Center-Backs",
    description: "Spreading central defenders wide to make pressing distances longer.",
    introduction: "Splitting Center-Backs is a positioning tactic during goal kicks. The two center-backs position themselves wide on the edges of the penalty box, forcing opponent pressers to cover more ground.",
    image: "/images/tactics/split-cb.png",
    keyElements: ["Wide center-backs", "Squeezing press distance", "Central channel opening", "Goalkeeper integration"],
    sections: [
      { heading: "Spacing", content: "By standing wide, the center-backs drag opposing forwards apart. This opens up central passing lanes directly into the holding midfielders." },
      { heading: "GK Role", content: "The goalkeeper acts as the central pivot, passing to the left or right center-back, or launching the ball forward if the press commits." }
    ],
    quizQuestions: [
      { question: "Where do center-backs stand when they 'split' during buildup?", options: ["Close together in the center", "Wide on the edges of the penalty area", "Near the halfway line", "In the opponent's box"], correctIndex: 1, explanation: "They stand wide on the left and right edges of the box to stretch the opponent press." },
      { question: "What is the main purpose of splitting center-backs?", options: ["To score goals", "To make the opponent press cover more distance", "To play without a goalie", "To waste time"], correctIndex: 1, explanation: "Wide positions force opposing forwards to run longer distances to press, creating passing time." },
      { question: "What space is opened up when center-backs split?", options: ["The wings", "The central channel for midfielders to receive passes", "The goal mouth only", "None"], correctIndex: 1, explanation: "Spreading the defense opens central passing lanes into the holding midfielders." },
      { question: "Who sits between the split center-backs to start play?", options: ["The striker", "The goalkeeper", "The referee", "The left-back"], correctIndex: 1, explanation: "The goalkeeper sits centrally, acting as the distributor to the split defenders." },
      { question: "What is a risk of split center-backs?", options: ["Fewer corner kicks", "A bad pass leaves the central goal completely unprotected", "Strikers get isolated", "None"], correctIndex: 1, explanation: "Because defenders are wide, an interception in the center gives the opponent a direct shot at goal." }
    ]
  },
  "double-pivot": {
    slug: "double-pivot",
    title: "Double Pivot Build-Up",
    description: "Using two holding midfielders to build a clean connection to attack.",
    introduction: "Double Pivot Build-Up uses two holding midfielders (No. 6s) in front of the defense. They share buildup duties, screen the backline, and make it difficult for opponents to block central passing lanes.",
    image: "/images/tactics/double-pivot-buildup.png",
    keyElements: ["Two holding midfielders", "Passing rotations", "Central defensive screen", "Press resistance"],
    sections: [
      { heading: "Buildup Options", content: "Having two pivots means one can drop between defenders to receive passes, while the other sits higher to offer a vertical passing option. This makes the press easy to beat." },
      { heading: "Defensive Stability", content: "The double pivot forms a robust wall, protecting center-backs from counter-attacks on turnovers." }
    ],
    quizQuestions: [
      { question: "What is a 'Double Pivot'?", options: ["Two strikers upfront", "Two holding midfielders sitting in front of the defense", "Two goalkeepers", "Two right-backs"], correctIndex: 1, explanation: "A double pivot consists of two defensive/holding midfielders working together." },
      { question: "How does the double pivot help the buildup phase?", options: ["It bypasses the defense", "It provides two passing options and makes central press hard", "It scores headers", "It slows play down"], correctIndex: 1, explanation: "Having two outlets gives defenders more options and makes marking them difficult for opponents." },
      { question: "What is a common movement for one of the pivots?", options: ["Drop deep between center-backs", "Run to the corner flag", "Stay offside", "Clear the ball"], correctIndex: 0, explanation: "One pivot often drops deep to collect the ball, while the other stays higher to receive." },
      { question: "Which formation is famous for using a double pivot?", options: ["4-3-3", "4-2-3-1", "4-4-2", "3-5-2"], correctIndex: 1, explanation: "The 4-2-3-1 is the classic double-pivot formation." },
      { question: "What is the defensive benefit of the double pivot?", options: ["It scores goals", "It screens the center-backs and intercepts counters", "It gets more corner kicks", "None"], correctIndex: 1, explanation: "Having two defensive midfielders protects the central defense on turnovers." }
    ]
  },
  "single-pivot": {
    slug: "single-pivot",
    title: "Single Pivot Build-Up",
    description: "Relying on a lone, elite anchor midfielder to guide the buildup phase.",
    introduction: "Single Pivot Build-Up relies on a lone defensive midfielder (No. 6) to connect defense to attack. This player must be highly press-resistant, possess excellent vision, and dictate the team's tempo.",
    image: "/images/tactics/single-pivot.png",
    keyElements: ["Lone holding midfielder", "Dictating tempo", "Press resistance", "360-degree vision"],
    sections: [
      { heading: "The Anchor's Role", content: "The single pivot sits alone in front of the defense. They must constantly scan the pitch, receive the ball under pressure, turn, and play forward passes to the advanced midfielders." },
      { heading: "Midfield Spacing", content: "Because there is only one pivot, the other two central midfielders can play much higher, overloading the opponent's defense." }
    ],
    quizQuestions: [
      { question: "What is the role of a Single Pivot?", options: ["To play as lone striker", "To act as the sole defensive midfielder connecting defense to attack", "To play as fullback", "To take goal kicks"], correctIndex: 1, explanation: "The single pivot (No. 6) is the lone link midfielder in front of the defense." },
      { question: "What is a key attribute needed for a single pivot?", options: ["Only shot power", "Press resistance and 360-degree vision", "Speed", "Heading height"], correctIndex: 1, explanation: "Sitting alone in midfield means they are pressed from all sides, requiring elite composure and vision." },
      { question: "Which legendary player is a classic example of a single pivot?", options: ["Sergio Busquets", "Peter Crouch", "Neymar", "Diego Simeone"], correctIndex: 0, explanation: "Sergio Busquets at Barcelona perfected the single-pivot role with his composure and intelligence." },
      { question: "What is an advantage of a single pivot over a double pivot?", options: ["It is more defensive", "It frees up an extra player to attack higher up the pitch", "It uses fewer players", "None"], correctIndex: 1, explanation: "Using only one holding midfielder allows you to play with two advanced central midfielders (No. 8s)." },
      { question: "What is the defensive risk of a single pivot?", options: ["No wing play", "The pivot can be isolated and overwhelmed on counters", "Too many strikers", "None"], correctIndex: 1, explanation: "If the single pivot is bypassed on a transition, the defense is immediately exposed." }
    ]
  },
  "box-midfield-buildup": {
    slug: "box-midfield-buildup",
    title: "Box Midfield",
    description: "Setting up a 3-2-4-1 box in central areas to bypass presses.",
    introduction: "The Box Midfield is a modern buildup shape. Typically formed by inverting a fullback or dropping a midfielder, it sets up two holding and two attacking midfielders in a box to dominate the center.",
    image: "/images/tactics/box-midfield.png",
    keyElements: ["Four-player central box", "Inverted fullbacks", "Numerical superiority", "Passing triangles"],
    sections: [
      { heading: "Creating the Box", content: "During buildup, the team shifts into a 3-2-4-1. A fullback drops inside beside the defensive midfielder, forming the bottom two of the box, while two advanced playmakers form the top." },
      { heading: "Bypassing the Press", content: "This box creates a 4v3 or 4v2 advantage against standard midfields, providing endless central passing options." }
    ],
    quizQuestions: [
      { question: "What is a Box Midfield?", options: ["Midfielders standing in the corner flags", "A four-player central midfield shape (2 holding, 2 attacking)", "Playing with no playmakers", "A defensive block"], correctIndex: 1, explanation: "A box midfield features a double pivot and two advanced central midfielders." },
      { question: "How is a box midfield commonly created in possession?", options: ["By inverting a fullback into central midfield", "By playing the keeper as midfielder", "By using three strikers", "None"], correctIndex: 0, explanation: "Fullbacks (like Stones or Zinchenko) shift inside to join the holding midfielder, creating the box." },
      { question: "What is the main benefit of a box midfield?", options: ["It crosses the ball", "It creates central numerical superiority to dominate possession", "It is very defensive", "It uses fewer players"], correctIndex: 1, explanation: "Four central midfielders easily overload and outpass standard opponent midfields." },
      { question: "Which coach famously used the box midfield to win a treble?", options: ["Jose Mourinho", "Pep Guardiola", "Jurgen Klopp", "Carlo Ancelotti"], correctIndex: 1, explanation: "Pep Guardiola used a 3-2-4-1 box midfield to dominate Europe with Man City." },
      { question: "What is a risk of the box midfield system?", options: ["Vulnerability on the flanks due to fullbacks being inside", "No strikers", "Too many goals scored", "None"], correctIndex: 0, explanation: "Since fullbacks play inside, the wings are exposed to fast counter-attacks." }
    ]
  },
  "buildup-thirds": {
    slug: "buildup-thirds",
    title: "Build-Up Through Thirds",
    description: "Systematically moving the ball from defense to midfield to attack.",
    introduction: "Buildup Through Thirds is a structured philosophy. The pitch is split into the defensive, midfield, and attacking thirds. The team moves the ball systematically through each zone, maintaining control.",
    image: "/images/tactics/thirds.png",
    keyElements: ["Three pitch thirds", "Controlled transitions", "Position discipline", "Structured progression"],
    sections: [
      { heading: "The Process", content: "The goalkeeper starts play in the defensive third. The ball is passed to defenders, who look to play entry passes to midfielders in the middle third. Midfielders then find attackers in the final third." },
      { heading: "Patience", content: "Players must maintain their positions. If a defender rushes the ball forward into the final third, it is considered a breakdown of the system." }
    ],
    quizQuestions: [
      { question: "What are the 'thirds' of a football pitch?", options: ["Wings, center, goal", "Defensive, midfield, and attacking thirds", "First half, second half, extra time", "None"], correctIndex: 1, explanation: "The pitch is divided into three equal horizontal zones from back to front." },
      { question: "What is the goal of building through thirds?", options: ["To play long clearances", "To systematically move the ball forward with control", "To score from distance", "To get corner kicks"], correctIndex: 1, explanation: "It focuses on controlled, low-risk progression through the zones." },
      { question: "What is required from players in this system?", options: ["Position discipline and patience", "Sprinting forward constantly", "Only long throws", "No defending"], correctIndex: 0, explanation: "Players must hold their positions in each third to receive passes and maintain structure." },
      { question: "What is a risk of this systematic buildup?", options: ["It is too fast", "It can become slow and predictable if the team lacks creativity", "No strikers are used", "Too many offside calls"], correctIndex: 1, explanation: "Slow passing can allow the defensive block to shift, stalling progress." },
      { question: "Which style of play uses buildup through thirds?", options: ["Route One", "Possession/Tiki-Taka styles", "Pragmatic defense", "Long ball"], correctIndex: 1, explanation: "Possession teams systematically build through the thirds to maintain control." }
    ]
  },
  "inverted-fullback-buildup": {
    slug: "inverted-fullback-buildup",
    title: "Inverted Fullback Build-Up",
    description: "Moving a fullback into central midfield to build a numerical edge.",
    introduction: "Inverted Fullback Build-Up is a modern tactical trend. When building from the back, a fullback leaves the flank and moves into central midfield, creating an extra passing option.",
    image: "/images/tactics/inverted-fb.png",
    keyElements: ["Fullback shifting central", "Midfield overload", "Three-man backline transition", "Wide winger spacing"],
    sections: [
      { heading: "The Shift", content: "As the team builds, the fullback (e.g. left-back) steps inside beside the holding midfielder. The remaining three defenders slide over to form a three-man backline, creating a 3-2 buildup shape." },
      { heading: "Tactical Benefits", content: "It creates a midfield overload (3v2 or 4v3) and allows the team's creative midfielders to push higher up the pitch." }
    ],
    quizQuestions: [
      { question: "What does an 'inverted fullback' do in possession?", options: ["Runs down the touchline", "Steps inside to play as a midfielder", "Plays as central striker", "Stays on the goal line"], correctIndex: 1, explanation: "They move into central midfield to act as a deep distributor." },
      { question: "What buildup shape is created when a fullback inverts?", options: ["4-4-2", "3-2 shape (three defenders, two holding midfielders)", "5-3-2", "None"], correctIndex: 1, explanation: "The other three defenders form a back three, with the fullback joining the pivot to make a 3-2 setup." },
      { question: "Who provides the width when the fullback plays inside?", options: ["The center-backs", "The wide wingers", "The goalkeeper", "No one"], correctIndex: 1, explanation: "The wingers must hug the touchline to provide the width." },
      { question: "Which manager famously used Philipp Lahm as an inverted fullback?", options: ["Jose Mourinho", "Pep Guardiola", "Alex Ferguson", "Arsene Wenger"], correctIndex: 1, explanation: "Guardiola inverted Philipp Lahm at Bayern Munich, turning him into a central playmaker." },
      { question: "What is a defensive risk of this system?", options: ["Flank spaces are exposed if possession is lost", "No central cover", "Strikers get isolated", "None"], correctIndex: 0, explanation: "Leaving the wing exposes that side of the pitch to counter-attacks." }
    ]
  },
  "la-volpe-exit": {
    slug: "la-volpe-exit",
    title: "La Volpe Exit",
    description: "Dropping a defensive midfielder between center-backs to construct a 3-man backline.",
    introduction: "The La Volpe Exit (Salida Lavolpiana) is a buildup tactic. The defensive midfielder drops deep between the two center-backs, who split wide, creating a clean three-man backline to pass around the press.",
    image: "/images/tactics/la-volpe.png",
    keyElements: ["DM dropping between CBs", "Split center-backs", "Three-man deep buildup", "Fullbacks pushing high"],
    sections: [
      { heading: "The Mechanism", content: "Named after Ricardo La Volpe, the tactic involves the holding midfielder dropping right between the center-backs. The center-backs split wide to the touchlines, and fullbacks push high into midfield." },
      { heading: "Beating Two-Man Press", content: "If the opponent presses with two strikers, the three-man backline creates a 3v2 numerical advantage, allowing a clean pass forward." }
    ],
    quizQuestions: [
      { question: "What is the key action in the La Volpe Exit?", options: ["The striker drops to midfield", "The defensive midfielder drops between the split center-backs", "The goalkeeper runs out of the box", "The wingers swap sides"], correctIndex: 1, explanation: "The holding midfielder drops deep between the center-backs to form a temporary back three." },
      { question: "Who is this tactic named after?", options: ["Pep Guardiola", "Ricardo La Volpe", "Johan Cruyff", "Diego Maradona"], correctIndex: 1, explanation: "It is named after Argentinian coach Ricardo La Volpe, who popularized it in Mexico." },
      { question: "What defensive press is the La Volpe Exit designed to beat?", options: ["A low block", "A two-striker high press", "Zonal marking", "Man-marking"], correctIndex: 1, explanation: "It creates a 3v2 overload against teams that press with two forwards." },
      { question: "Where do the fullbacks position themselves in this system?", options: ["Close to the center-backs", "High up the pitch, acting as wide midfielders", "In their own box", "On the bench"], correctIndex: 1, explanation: "With the center-backs wide, fullbacks push high to act as midfielders." },
      { question: "What is a requirement for the dropping midfielder?", options: ["Only height", "Excellent passing and calmness on the ball", "Running speed", "Tackle strength"], correctIndex: 1, explanation: "They must be comfortable receiving the ball from the goalkeeper and distributing under pressure." }
    ]
  }
};
