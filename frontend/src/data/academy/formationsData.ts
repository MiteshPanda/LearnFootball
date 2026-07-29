import { QuizQuestion } from "@/components/academy/LessonQuiz";

export interface FormationData {
  slug: string;
  title: string;
  description: string;
  introduction: string;
  image: string; // Image path reference
  pros: string[];
  cons: string[];
  keyAttributes: string[];
  historicalContext: string;
  sections: { heading: string; content: string }[];
  quizQuestions: QuizQuestion[];
}

export const formationsData: Record<string, FormationData> = {
  "4-4-2": {
    slug: "4-4-2",
    title: "The 4-4-2 Formation",
    description: "The most iconic formation in football history — balanced, structured, and highly effective.",
    introduction: "The 4-4-2 is the classic benchmark of football tactics. It features four defenders, four midfielders, and two strikers, offering a balanced, flat defensive block and simple attacking partnerships.",
    image: "/images/formations/4-4-2.png",
    pros: ["Very structured and easy to learn", "Strong defensive coverage across the width", "Excellent strike partnership up front"],
    cons: ["Can be easily outnumbered in central midfield (2 vs 3)", "Predominantly rigid and predictable", "Requires high-stamina wide midfielders"],
    keyAttributes: ["Midfield stamina", "Strike partnership synchronization", "Compact defensive block"],
    historicalContext: "Popularized in England during the 1970s and 1980s, the 4-4-2 was the core of Milan's legendary European Cup-winning squads under Arrigo Sacchi, who used it as a strict pressing tool.",
    sections: [
      { heading: "Defensive Organization", content: "In defense, the two blocks of four defend close together, creating a low or mid block that is difficult to break down. Wide midfielders tuck in to crowd the center, forcing opponents to play wide." },
      { heading: "Attacking Mechanics", content: "Attacks are usually built around partnerships: one striker drops deep to hold the ball (target man) while the other runs into space. Wide midfielders and fullbacks double up on the wings to deliver crosses." }
    ],
    quizQuestions: [
      { question: "What is a main weakness of the flat 4-4-2?", options: ["Lack of wingers", "Being outnumbered in central midfield", "Having too many defenders", "No strike options"], correctIndex: 1, explanation: "Since it only features two central midfielders, a 4-4-2 can be overrun by systems using three central midfielders (like 4-3-3)." },
      { question: "Which legendary manager used the 4-4-2 to dominate Europe with AC Milan?", options: ["Pep Guardiola", "Arrigo Sacchi", "Jose Mourinho", "Jurgen Klopp"], correctIndex: 1, explanation: "Arrigo Sacchi utilized a highly compact, pressing 4-4-2 to win back-to-back European Cups with Milan in 1989 and 1990." },
      { question: "How do fullbacks and wide midfielders interact in a 4-4-2?", options: ["They ignore each other", "They double up on the wings to cross", "They play in the center", "One always acts as GK"], correctIndex: 1, explanation: "They overlap and combine in wide areas to stretch the opponent block and cross." },
      { question: "What describes the strikers' roles in a classic 4-4-2?", options: ["Both drop into defense", "One target man links up with a runner", "Both stay on wings", "They play as center backs"], correctIndex: 1, explanation: "Usually, one striker acts as the target man holding up play while the second striker plays off their shoulder." },
      { question: "How many lines of players are there in a standard 4-4-2?", options: ["Two lines", "Three lines", "Four lines", "One line"], correctIndex: 1, explanation: "A standard 4-4-2 sets up in three clear banks (4 defenders, 4 midfielders, 2 strikers) excluding the keeper." }
    ]
  },
  "4-3-3": {
    slug: "4-3-3",
    title: "The 4-3-3 Formation",
    description: "The attacking system beloved by Barcelona, Ajax, and modern possession-based coaches.",
    introduction: "The 4-3-3 offers numerical superiority in midfield and absolute width in attack. It utilizes a single defensive midfielder, two advanced central midfielders, and two wide wingers flanking a central striker.",
    image: "/images/formations/4-3-3.png",
    pros: ["Dominant midfield control (3 players)", "High attacking flexibility with wingers", "Excellent for possession and high pressing"],
    cons: ["Fullbacks can be left isolated on counter-attacks", "Requires a highly intelligent defensive midfielder (No. 6)", "Striker can become isolated without support"],
    keyAttributes: ["Deep playmaker vision", "Winger pace and dribbling", "High-line coordinate press"],
    historicalContext: "Born from the Dutch 'Total Football' era in the 1970s under Rinus Michels and Johan Cruyff, it was later modernized by Pep Guardiola to create Barcelona's legendary tiki-taka era.",
    sections: [
      { heading: "Midfield Control", content: "The midfield triangle is the engine. The defensive midfielder (No. 6) acts as the anchor, while the other two (No. 8s) push up into the half-spaces to create triangles and dominate possession." },
      { heading: "Attacking Width", content: "Wingers stay wide initially to drag defenders apart, creating space for central midfielders to run into. Alternatively, wingers can cut inside, allowing fullbacks to overlap." }
    ],
    quizQuestions: [
      { question: "Who usually plays at the base of the midfield triangle in a 4-3-3?", options: ["A target man", "A defensive midfielder (No. 6)", "An attacking midfielder", "A sweeper"], correctIndex: 1, explanation: "The base of the triangle is occupied by the holding/defensive midfielder who shields the defense and starts buildup." },
      { question: "What is the primary role of wingers in a wide 4-3-3?", options: ["Stay inside defense", "Hug the touchlines to stretch the opponent block", "Act as defensive shields", "Take goal kicks"], correctIndex: 1, explanation: "Wingers hug the touchlines to stretch the defense horizontally, creating passing lanes." },
      { question: "Which football philosophy is most closely tied to the 4-3-3?", options: ["Catenaccio", "Total Football", "Route One", "Long Ball"], correctIndex: 1, explanation: "Rinus Michels and Johan Cruyff utilized the 4-3-3 as the tactical framework for Total Football." },
      { question: "Why is the 4-3-3 excellent for possession?", options: ["It has fewer players", "It naturally creates passing triangles", "It bypasses the midfield", "The keeper plays as striker"], correctIndex: 1, explanation: "The staggered positioning of the defenders, midfielders, and forwards naturally creates triangles all over the pitch." },
      { question: "What is a main risk when using a 4-3-3?", options: ["Lack of width", "Too many strikers", "Fullbacks getting caught out on counters", "Midfield congestion"], correctIndex: 2, explanation: "Because fullbacks are expected to push forward to support the attack, the spaces behind them are vulnerable to fast counter-attacks." }
    ]
  },
  "4-3-2-1": {
    slug: "4-3-2-1",
    title: "The 4-3-2-1 Formation",
    description: "The famous 'Christmas Tree' formation, offering narrow attacking mastery and solid central control.",
    introduction: "The 4-3-2-1 is nicknamed the 'Christmas Tree' because of its shape: 4 defenders, 3 central midfielders, 2 attacking midfielders, and 1 striker. It prioritizes central compactness and creative link play.",
    image: "/images/formations/4-3-2-1.png",
    pros: ["Extremely compact and hard to play through", "Gives creative freedom to two playmakers", "Provides a robust midfield screen"],
    cons: ["Complete lack of natural width in attack", "Demands immense physical output from fullbacks", "Can get congested in the final third"],
    keyAttributes: ["Fullback stamina", "Playmaker creativity", "Central defensive screen"],
    historicalContext: "Famously used by Carlo Ancelotti at AC Milan to accommodate playmakers like Kaká, Rui Costa, and Andrea Pirlo, leading them to Champions League glory in 2003 and 2007.",
    sections: [
      { heading: "The Central Core", content: "With three central midfielders and two attacking midfielders, this system completely blocks the center of the pitch. It forces opponents to play wide, where they are pressed against the touchline." },
      { heading: "Attacking Width", content: "Since there are no wingers, the team relies on the fullbacks to run the entire length of the pitch to provide width. The two playmakers play in the pockets of space behind the opponent's midfield." }
    ],
    quizQuestions: [
      { question: "Why is the 4-3-2-1 called the 'Christmas Tree'?", options: ["It was only played in December", "Because of its tapering shape from back to front", "It was invented by Santa Claus", "It uses green shirts"], correctIndex: 1, explanation: "The 4-3-2-1 narrows at each line (4-3-2-1), creating a visual outline that resembles a pine tree." },
      { question: "Which coach famously used the Christmas Tree to win the Champions League with AC Milan?", options: ["Pep Guardiola", "Carlo Ancelotti", "Alex Ferguson", "Jose Mourinho"], correctIndex: 1, explanation: "Carlo Ancelotti used the 4-3-2-1 to accommodate creative talents like Pirlo, Seedorf, Rui Costa, and Kaká." },
      { question: "Who provides the attacking width in a 4-3-2-1?", options: ["The wingers", "The fullbacks", "The central striker", "The center backs"], correctIndex: 1, explanation: "With no wingers on the pitch, the fullbacks must push high and wide to provide the necessary width." },
      { question: "What is a main advantage of having two attacking midfielders (No. 10s)?", options: ["They defend the goal", "They create confusion in half-spaces", "They take throw-ins", "They stay in their own box"], correctIndex: 1, explanation: "Having two No.10s makes it difficult for defensive midfielders to mark them, as they constantly exchange spaces." },
      { question: "How many defensive midfielders are typically in the midfield line?", options: ["None", "One to three central midfielders protecting the core", "All five", "Four"], correctIndex: 1, explanation: "The midfield three consists of central/defensive midfielders who form a compact wall in front of the defense." }
    ]
  },
  "4-3-1-2": {
    slug: "4-3-1-2",
    title: "The 4-3-1-2 Formation",
    description: "A narrow diamond midfield system that maximizes central link-up play and dual striker threats.",
    introduction: "The 4-3-1-2 is a variation of the diamond midfield. It features a solid back four, a flat midfield three, a single attacking playmaker (No. 10), and two central strikers who split the center-backs.",
    image: "/images/formations/4-3-1-2.png",
    pros: ["Exceptional central link-up play", "Two strikers keep center-backs fully occupied", "Strong central midfield control"],
    cons: ["Highly vulnerable to wide counter-attacks", "No natural wingers to deliver wide crosses", "Midfielders must cover vast lateral distances"],
    keyAttributes: ["Playmaker vision", "Striker chemistry", "Lateral midfield engine"],
    historicalContext: "Frequently utilized in Italian football, it was famously implemented by Massimiliano Allegri at Juventus and by Jose Mourinho at Porto during their Champions League winning run in 2004.",
    sections: [
      { heading: "The Role of the Playmaker", content: "The attacking midfielder (the '1' in the 4-3-1-2) is the key link. They drift between the opposition midfield and defense, receiving passes from the deep three and feeding the two strikers." },
      { heading: "Striker Movement", content: "The two strikers play closely together. One typically runs in behind while the other drops slightly wide or deep to pull defenders out of position, creating spaces for late runs." }
    ],
    quizQuestions: [
      { question: "What is the primary role of the '1' in 4-3-1-2?", options: ["Holding midfielder", "Attacking playmaker (No. 10)", "Sweeper", "Winger"], correctIndex: 1, explanation: "The single midfielder sits behind the two strikers as the central attacking playmaker." },
      { question: "Which region of the pitch does the 4-3-1-2 prioritize?", options: ["The wings", "The center", "The defensive box only", "None"], correctIndex: 1, explanation: "The 4-3-1-2 is a narrow formation that packs the central areas with midfielders and strikers." },
      { question: "How do teams create width in a 4-3-1-2?", options: ["Using traditional wingers", "Fullbacks pushing high and strikers drifting wide", "They do not need width", "The goalkeeper runs wide"], correctIndex: 1, explanation: "Fullbacks are the main source of width, occasionally assisted by strikers drifting into wide channels." },
      { question: "Which team did Jose Mourinho lead to a Champions League title in 2004 using a diamond/4-3-1-2 setup?", options: ["Chelsea", "Porto", "Inter Milan", "Real Madrid"], correctIndex: 1, explanation: "Mourinho used a compact diamond midfield system with FC Porto to win the Champions League in 2004." },
      { question: "What is the defensive risk of the 4-3-1-2?", options: ["Too few midfielders", "Getting exposed in wide areas", "Strikers defending too deep", "Having no goalkeeper"], correctIndex: 1, explanation: "Because the midfield is narrow, opponents can easily overload the wings on counter-attacks." }
    ]
  },
  "4-2-3-1": {
    slug: "4-2-3-1",
    title: "The 4-2-3-1 Formation",
    description: "The most popular modern system — offering flexibility, double-pivot security, and attacking punch.",
    introduction: "The 4-2-3-1 is the dominant formation of the 21st century. It relies on a double pivot (two defensive midfielders) for solid protection, three attacking midfielders, and a lone striker.",
    image: "/images/formations/4-2-3-1.png",
    pros: ["Extremely flexible and balanced", "Double pivot offers great defensive cover", "Creates natural passing lines for playmakers"],
    cons: ["The lone striker can be easily isolated", "Requires high-workrate attacking midfielders", "Can become defensive if midfielders drop too deep"],
    keyAttributes: ["Double pivot chemistry", "Wing-play transitions", "Creative attacking midfielder"],
    historicalContext: "Popularized in Spain and Germany during the late 2000s, it was the tactical foundation for Spain's 2010 World Cup victory and Bayern Munich's treble-winning campaigns.",
    sections: [
      { heading: "The Double Pivot", content: "The two midfielders in front of the defense are crucial. Typically, one is a destroyer (ball-winner) and the other is a deep playmaker. They control the tempo and protect the back four." },
      { heading: "Attacking Versatility", content: "The three attacking midfielders (left, center, right) can interchange positions. The wide attackers often cut inside to shoot, while fullbacks overlap to provide wide options." }
    ],
    quizQuestions: [
      { question: "What does the '2' represent in the 4-2-3-1 formation?", options: ["Two strikers", "Two center-backs", "A double pivot (two holding midfielders)", "Two wingers"], correctIndex: 2, explanation: "The '2' represents two defensive/holding midfielders sitting in front of the defense." },
      { question: "Why is the 4-2-3-1 considered highly balanced?", options: ["It uses 12 players", "It combines central defensive cover with a wide attack", "It has no wingers", "Every player has the same role"], correctIndex: 1, explanation: "The double pivot secures the defense, allowing four attacking players to combine with creative freedom." },
      { question: "What is a common role for the lone striker in this system?", options: ["Defend in their own box", "Hold up the ball and link with the attacking mids", "Play only on the wing", "Take throw-ins"], correctIndex: 1, explanation: "The striker must hold up the ball to allow the three attacking midfielders time to join the attack." },
      { question: "Which national team won the 2010 World Cup using a 4-2-3-1 system?", options: ["Brazil", "Spain", "Germany", "Netherlands"], correctIndex: 1, explanation: "Spain utilized a fluid 4-2-3-1 system with Xabi Alonso and Sergio Busquets in the double pivot to win in 2010." },
      { question: "What happens if the double pivot drops too deep defensively?", options: ["The team scores more goals", "A gap opens up between midfield and the striker", "The referee stops the game", "The wingers become defenders"], correctIndex: 1, explanation: "If the double pivot plays too deep, the lone striker becomes isolated and lacks support in transition." }
    ]
  },
  "4-2-1-3": {
    slug: "4-2-1-3",
    title: "The 4-2-1-3 Formation",
    description: "An aggressive variation of the 4-2-3-1 that transitions into a lethal front three.",
    introduction: "The 4-2-1-3 features a solid double-pivot foundation, a single attacking midfielder (No. 10), and a dedicated front three. It is designed for fast, direct, and devastating attacks.",
    image: "/images/formations/4-2-1-3.png",
    pros: ["Devastating front-three attacking power", "Strong central protection from double pivot", "Excellent counter-attacking potential"],
    cons: ["Midfield can be overrun if the No. 10 doesn't track back", "High defensive demands on wide forwards", "Vulnerable in central areas on turnover"],
    keyAttributes: ["Front-three speed", "Double-pivot mobility", "Playmaker creativity"],
    historicalContext: "Famously utilized by Jose Mourinho at Inter Milan during their 2010 treble season, particularly in Champions League ties to lock down defense and hit teams on rapid counters.",
    sections: [
      { heading: "Attacking Line Dynamics", content: "The front three stay higher up the pitch than in a 4-2-3-1. The two wide forwards act as direct wingers who attack the box, while the attacking midfielder connects the pivot to the front line." },
      { heading: "Defensive Transition", content: "With three forward players staying high, the double pivot must cover lateral spaces. The team often drops into a compact 4-5-1 shape when defending deep." }
    ],
    quizQuestions: [
      { question: "How does the 4-2-1-3 differ from the 4-2-3-1?", options: ["It has three center-backs", "The wide players stay higher and act as forwards", "It uses no playmakers", "It has no goalkeeper"], correctIndex: 1, explanation: "In a 4-2-1-3, the wide midfielders are pushed higher to join the striker, creating a distinct front three." },
      { question: "Which club team famously used a 4-2-1-3 to win the treble in 2010?", options: ["Barcelona", "Inter Milan", "Bayern Munich", "Chelsea"], correctIndex: 1, explanation: "Jose Mourinho deployed a 4-2-1-3 / 4-3-3 hybrid with Samuel Eto'o, Goran Pandev, and Diego Milito to win the treble." },
      { question: "What is the main task of the '1' in this formation?", options: ["Stop opposing striker", "Link the double pivot to the front three", "Protect the wide channels", "Take corners only"], correctIndex: 1, explanation: "The central attacking midfielder connects defensive transitions to the high attacking line." },
      { question: "What is a defensive risk of the front three staying high?", options: ["Fewer corner kicks", "The midfield can get overloaded", "Defenders cannot pass forward", "Too many offside calls"], correctIndex: 1, explanation: "If the front three stay high and don't defend, the remaining three midfielders can be easily bypassed by the opponent." },
      { question: "What is the typical shape when defending deep in a 4-2-1-3?", options: ["5-4-1", "4-5-1", "3-4-3", "2-5-3"], correctIndex: 1, explanation: "The wide forwards drop back into midfield, transforming the shape into a solid 4-5-1 block." }
    ]
  },
  "4-1-4-1": {
    slug: "4-1-4-1",
    title: "The 4-1-4-1 Formation",
    description: "A highly defensive and structured system with a dedicated holding anchor and flat midfield lines.",
    introduction: "The 4-1-4-1 is a defensive variation of the 4-3-3. It places a single defensive midfielder (anchor) in the pocket between defense and midfield, creating two distinct banks of protection.",
    image: "/images/formations/4-1-4-1.png",
    pros: ["Incredibly solid defensively", "No space between midfield and defense lines", "Easy to transition into a possession shape"],
    cons: ["Lone striker can be completely isolated", "Requires high-workrate central midfielders", "Lacks immediate counter-attacking options"],
    keyAttributes: ["Anchor discipline", "Midfield block cohesiveness", "Striker patience"],
    historicalContext: "Often used by managers like Pep Guardiola and Jupp Heynckes to shut down creative playmakers who operate in the pockets between defensive lines.",
    sections: [
      { heading: "The Defensive Pocket", content: "The holding midfielder is the star of this system. Their sole job is to sit in the pocket and intercept passes, ensuring opposing attacking midfielders find no space." },
      { heading: "Transition to Attack", content: "When winning the ball, the two central midfielders push forward to support the striker, while the wide players stretch the pitch, effectively transforming the shape into a 4-3-3." }
    ],
    quizQuestions: [
      { question: "Where does the '1' sit in a 4-1-4-1 formation?", options: ["Behind the center-backs", "Between the defense and the midfield lines", "Ahead of the striker", "On the left wing"], correctIndex: 1, explanation: "The holding midfielder (1) sits in the space between the defensive backline and the midfield bank of four." },
      { question: "Why is the 4-1-4-1 highly effective against teams with a strong No. 10?", options: ["It uses no defenders", "The defensive anchor occupies the space the No. 10 wants to use", "It has two goalkeepers", "It forces the No. 10 to play keeper"], correctIndex: 1, explanation: "The holding midfielder guards the exact zone (the pocket) where creative playmakers operate." },
      { question: "What shape does the 4-1-4-1 easily transition to in possession?", options: ["4-4-2", "4-3-3", "3-5-2", "5-4-1"], correctIndex: 1, explanation: "The two central midfielders push up to join the attack, turning the shape into a 4-3-3." },
      { question: "What is the primary risk for the lone striker in a 4-1-4-1?", options: ["Having too many chances", "Isolation from the rest of the team", "Offside traps by teammates", "Playing as a center back"], correctIndex: 1, explanation: "Because the midfield line of four sits flat and deep, the striker can easily become isolated." },
      { question: "How does the midfield line typically defend?", options: ["Man-marking the keeper", "As a flat compact bank of four", "They stay in the opponent's box", "They do not participate in defense"], correctIndex: 1, explanation: "The four midfielders defend as a flat, organized line to prevent entry passes through central lanes." }
    ]
  },
  "4-1-2-3": {
    slug: "4-1-2-3",
    title: "The 4-1-2-3 Formation",
    description: "An offensive variation of the 4-3-3 that features a holding anchor and two advanced central midfielders.",
    introduction: "The 4-1-2-3 uses a single pivot anchor to guard the defense, allowing the two other central midfielders to play as highly advanced playmakers who support the front three.",
    image: "/images/formations/4-1-2-3.png",
    pros: ["Very high attacking threat in half-spaces", "Strong counter-pressing potential", "Excellent passing angles in midfield"],
    cons: ["Holding midfielder can be easily overloaded", "Vulnerable to direct central counter-attacks", "High physical demands on central mids"],
    keyAttributes: ["Anchor interception rate", "Advanced playmaker creativity", "High-line defensive recovery"],
    historicalContext: "Pep Guardiola utilized this system at Barcelona and Manchester City, utilizing 'free eights' (like De Bruyne and Silva) to attack half-spaces and overwhelm low defensive blocks.",
    sections: [
      { heading: "Advanced Midfielders (Free 8s)", content: "The two central midfielders act as creative engines. They push high into the channels between the opponent's fullbacks and center-backs, combining with the wide wingers." },
      { heading: "Defensive Anchor", content: "With the central midfielders pushed high, the single holding midfielder must cover massive spaces. They must be highly disciplined, possess excellent positional sense, and break up counters." }
    ],
    quizQuestions: [
      { question: "What role do the two central midfielders play in a 4-1-2-3?", options: ["Defensive double-pivot", "Advanced playmakers ('Free Eights')", "Wide wing-backs", "Strikers"], correctIndex: 1, explanation: "They play as advanced central midfielders, often drifting into half-spaces to create scoring chances." },
      { question: "What is a major risk for the defensive midfielder in this system?", options: ["Getting lonely", "Being overloaded on counter-attacks", "Scoring too many goals", "Getting caught offside"], correctIndex: 1, explanation: "Since both central midfielders play high, the holding midfielder is left alone to defend counters." },
      { question: "Who famously modernized the use of 'Free 8s' in a 4-1-2-3 system?", options: ["Jose Mourinho", "Pep Guardiola", "Diego Simeone", "Sean Dyche"], correctIndex: 1, explanation: "Pep Guardiola deployed David Silva and Kevin De Bruyne as twin advanced 'free eights' at Manchester City." },
      { question: "What does the front three consist of in this formation?", options: ["Three central strikers", "Two wingers and one central striker", "Three attacking midfielders", "Two strikers and a playmaker"], correctIndex: 1, explanation: "It consists of a traditional front three: a left winger, a central striker, and a right winger." },
      { question: "What defensive strategy fits the 4-1-2-3 best?", options: ["Parking the bus", "High-intensity counter-pressing", "Deep low block", "Zonal retreat"], correctIndex: 1, explanation: "Because players are positioned high up the pitch, they are perfectly placed to press immediately upon losing the ball." }
    ]
  },
  "3-4-3": {
    slug: "3-4-3",
    title: "The 3-4-3 Formation",
    description: "An aggressive, wingback-driven structure that balances wide attacking options and central cover.",
    introduction: "The 3-4-3 is a modern tactician's favorite. It uses three center-backs, two wide wing-backs who run the entire flanks, two central midfielders, and a dynamic front three.",
    image: "/images/formations/3-4-3.png",
    pros: ["Lethal wide attacks using wing-backs", "Solid central defensive block of three", "Excellent wing spacing in possession"],
    cons: ["Midfield can be outnumbered (2 vs 3)", "Wing-backs can get fatigued quickly", "Center-backs can get dragged into wide areas"],
    keyAttributes: ["Wing-back stamina", "Center-back mobility", "Tactical flexibility"],
    historicalContext: "Antonio Conte used this system to dominate the Premier League with Chelsea in 2016-17, capitalizing on wing-backs to unlock defensive blocks.",
    sections: [
      { heading: "The Wing-Back Engine", content: "The wing-backs are the key. In attack, they act as wingers, creating a 5-man forward line. In defense, they drop back beside the three center-backs, forming a compact 5-man defense." },
      { heading: "Front Three Dynamics", content: "The two wide forwards can tuck inside to play in the channels, creating space for the wing-backs to overlap and cross. The striker acts as the central pivot." }
    ],
    quizQuestions: [
      { question: "How does the 3-4-3 shape change when defending deep?", options: ["Turns into a 3-5-2", "Turns into a compact 5-4-1 block", "Turns into a 4-4-2", "No change"], correctIndex: 1, explanation: "The two wing-backs drop deep beside the center-backs, and wide forwards drop, forming a 5-4-1." },
      { question: "Which manager famously won the Premier League with Chelsea using a 3-4-3?", options: ["Arsene Wenger", "Antonio Conte", "Jose Mourinho", "Jurgen Klopp"], correctIndex: 1, explanation: "Antonio Conte switched Chelsea to a 3-4-3 in 2016, embarking on a massive winning run to lift the title." },
      { question: "What is a main physical requirement for wing-backs in this system?", options: ["Only height", "Immense stamina to cover the entire flank", "Shot power", "Slow acceleration"], correctIndex: 1, explanation: "Wing-backs must cover the entire flank, contributing to both defense and attack, requiring elite stamina." },
      { question: "What is the central midfield configuration in a standard 3-4-3?", options: ["A diamond", "A flat double pivot of two midfielders", "Three central midfielders", "A box"], correctIndex: 1, explanation: "It uses two central midfielders who must balance holding their positions and screening the defense." },
      { question: "What is a danger for the three center-backs in a 3-4-3?", options: ["Scoring own goals", "Getting dragged out wide to defend wing spaces", "No goalkeeper communication", "Offsides"], correctIndex: 1, explanation: "If the wing-backs are caught high up the pitch, the outer center-backs are forced to slide wide, opening gaps in the center." }
    ]
  },
  "3-2-4-1": {
    slug: "3-2-4-1",
    title: "The 3-2-4-1 Formation",
    description: "Pep Guardiola's revolutionary buildup shape featuring an overload-heavy box midfield.",
    introduction: "The 3-2-4-1 is a highly fluid modern structure. It uses three center-backs, two holding midfielders (double pivot), two attacking midfielders, two wide wingers, and a lone striker.",
    image: "/images/formations/3-2-4-1.png",
    pros: ["Complete dominance in central midfield", "Excellent passing triangles for possession", "Creates a massive central box block"],
    cons: ["Very vulnerable in wide areas on turnovers", "Requires extremely mobile outer center-backs", "Extremely complex to implement"],
    keyAttributes: ["Center-back recovery pace", "Double-pivot pressing resistance", "Tactical positioning"],
    historicalContext: "Pep Guardiola introduced this system at Manchester City during the 2022-23 season, pushing center-back John Stones into midfield to win the historic treble.",
    sections: [
      { heading: "The Box Midfield", content: "The two holding midfielders and two attacking midfielders form a box shape. This box creates numerical superiority over standard midfields, making it easy to play through the center." },
      { heading: "Wide Defensive Risks", content: "Since there are no traditional fullbacks, the outer center-backs must defend wide channels when possession is lost, requiring elite recovery speed and defensive reading." }
    ],
    quizQuestions: [
      { question: "Which team famously used the 3-2-4-1 to win the treble in 2023?", options: ["Real Madrid", "Manchester City", "Bayern Munich", "Paris Saint-Germain"], correctIndex: 1, explanation: "Manchester City utilized Pep Guardiola's 3-2-4-1 system to win the Premier League, FA Cup, and Champions League." },
      { question: "Which shape do the midfielders form in a 3-2-4-1?", options: ["A diamond", "A box shape (two holding, two attacking)", "A flat line of four", "A straight line"], correctIndex: 1, explanation: "The midfielders set up in a box shape, giving them passing triangles and central superiority." },
      { question: "Who provides the defensive width in this formation?", options: ["The wingers", "The outer center-backs", "The goalkeeper", "The holding midfielders"], correctIndex: 1, explanation: "With no fullbacks, the left and right center-backs must defend wide areas during transitions." },
      { question: "Which player role was famously pushed into the double pivot in this system at Man City?", options: ["A winger", "A center-back (John Stones)", "A striker", "A target man"], correctIndex: 1, explanation: "Pep Guardiola pushed center-back John Stones into central midfield to create the double pivot." },
      { question: "What is a main weakness of the 3-2-4-1?", options: ["Lack of passing options", "Vulnerability in wide spaces on turnovers", "No central striker", "Too many defenders"], correctIndex: 1, explanation: "Because the shape lacks fullbacks, teams can exploit the wide channels on fast counter-attacks." }
    ]
  },
  "3-2-3-2": {
    slug: "3-2-3-2",
    title: "The 3-2-3-2 Formation",
    description: "A balanced three-back system combining double-pivot stability, wide support, and dual strikers.",
    introduction: "The 3-2-3-2 sets up with three center-backs, a double pivot, three attacking midfielders, and two strikers. It provides an efficient bridge between defense and attack.",
    image: "/images/formations/3-2-3-2.png",
    pros: ["Lethal two-striker system", "Solid defensive shielding", "Strong central and half-space options"],
    cons: ["Very high workrate required from wide midfielders", "Outer center-backs must defend wide spaces", "Can become defensive if double pivot drops too deep"],
    keyAttributes: ["Striker coordination", "Wide midfielder stamina", "Midfield transition speed"],
    historicalContext: "Historically adapted from the WM system, it has been used by Italian teams to maintain a two-striker front line while securing the central midfield.",
    sections: [
      { heading: "Midfield Structure", content: "The double pivot secures the defensive third, allowing the three attacking midfielders (LM, AM, RM) to focus on creating chances. The central AM acts as a classic playmaker." },
      { heading: "Striker Partnerships", content: "With two strikers, the team can press central defenders high up the pitch. The strikers stay close to link up with the central attacking midfielder." }
    ],
    quizQuestions: [
      { question: "How many strikers are fielded in a 3-2-3-2?", options: ["One", "Two", "Three", "Four"], correctIndex: 1, explanation: "The formation features a classic front two strikers (the last '2' in 3-2-3-2)." },
      { question: "What is the role of the double pivot in the 3-2-3-2?", options: ["Provide defensive cover in front of the three CBs", "Play as wingers", "Act as strikers", "Take throw-ins"], correctIndex: 0, explanation: "The double pivot sits in front of the three center-backs, screening passes and starting build-ups." },
      { question: "Who provides the width in a 3-2-3-2?", options: ["The strikers", "The wide midfielders (LM and RM)", "The center-backs", "The goalkeeper"], correctIndex: 1, explanation: "The wide attacking midfielders/midfielders (LM and RM) are responsible for stretching the play." },
      { question: "What is a main defensive challenge in a three-back system like 3-2-3-2?", options: ["Too many goals scored", "Defending the wide channels on turnovers", "Congested penalty box", "No goalkeeper"], correctIndex: 1, explanation: "The channels behind the wide midfielders are open for opponents to exploit if the team loses possession." },
      { question: "How does the 3-2-3-2 differ from the 3-5-2?", options: ["It uses four center-backs", "It splits the midfield five into a double pivot and an attacking three", "It has no striker", "It uses two goalkeepers"], correctIndex: 1, explanation: "Instead of a flat or single-pivot midfield of five, it explicitly structures the midfield with a 2-3 layout." }
    ]
  },
  "3-1-4-2": {
    slug: "3-1-4-2",
    title: "The 3-1-4-2 Formation",
    description: "A single-pivot three-back system optimized for central overload and direct strike support.",
    introduction: "The 3-1-4-2 features a three-man defense, a single holding midfielder (anchor), a flat line of four midfielders, and two strikers. It is designed to crowd the midfield and feed two forwards.",
    image: "/images/formations/3-1-4-2.png",
    pros: ["Excellent central midfield congestion", "Dual strikers challenge opponent center-backs", "Flexible attacking rotations"],
    cons: ["Very vulnerable on the wings", "Defensive midfielder has a massive workload", "Complex passing rotations required"],
    keyAttributes: ["Anchor discipline", "Wide midfielder tracking speed", "Striker link play"],
    historicalContext: "Antonio Conte used this system at Juventus and Inter Milan to create central overloads, utilize Andrea Pirlo's long passing, and play with two physical strikers.",
    sections: [
      { heading: "The Midfield Anchor", content: "The single holding midfielder sits in front of the three center-backs. They act as the primary distributor, sweeping up play and feeding the two advanced central midfielders." },
      { heading: "Wide Coverage", content: "The wing-backs/midfielders must drop deep to help the three center-backs when defending, turning the team shape into a 5-3-2 block." }
    ],
    quizQuestions: [
      { question: "What is the midfield structure of a 3-1-4-2?", options: ["A diamond", "A single pivot behind a flat line of four", "A double pivot", "Five flat midfielders"], correctIndex: 1, explanation: "It features one holding midfielder (pivot) with four midfielders positioned ahead of them." },
      { question: "Which coach famously used this system at Juventus?", options: ["Pep Guardiola", "Antonio Conte", "Jose Mourinho", "Jurgen Klopp"], correctIndex: 1, explanation: "Antonio Conte used the 3-1-4-2 at Juventus to combine a three-man defense with two strikers." },
      { question: "What is the defensive transition shape of a 3-1-4-2?", options: ["4-4-2", "5-3-2", "3-4-3", "4-3-3"], correctIndex: 1, explanation: "When defending, the wide midfielders drop back to form a five-man defense, creating a 5-3-2 block." },
      { question: "Why is the single pivot role difficult in a 3-1-4-2?", options: ["They must score goals", "They must cover a massive central area alone", "They play as center-back", "They cannot pass forward"], correctIndex: 1, explanation: "With the other four midfielders pushed forward, the single pivot has to cover the entire width of the central pitch alone." },
      { question: "What is a main attacking advantage of the 3-1-4-2?", options: ["No wing play", "Having two central strikers supported by four midfielders", "Fewer offsides", "No goalkeeper buildup"], correctIndex: 1, explanation: "It matches two central strikers directly against opposing center-backs, with plenty of support from midfield." }
    ]
  },
  "5-3-2": {
    slug: "5-3-2",
    title: "The 5-3-2 Formation",
    description: "A highly secure defensive system with flying wing-backs and a compact midfield block.",
    introduction: "The 5-3-2 is a classic defensive formation. It uses three center-backs, two wing-backs, three central midfielders, and two strikers. It is excellent for absorbing pressure and counter-attacking.",
    image: "/images/formations/5-3-2.png",
    pros: ["Superb defensive security (5-man line)", "Wing-backs provide natural width in attack", "Strong central midfield presence"],
    cons: ["Can be overly defensive if wing-backs don't push up", "Lacks natural wide wingers", "Striker service can be poor"],
    keyAttributes: ["Wing-back stamina", "Center-back distribution", "Counter-attack efficiency"],
    historicalContext: "Used by defensive teams to lock down matches, it was famously modernized by Louis van Gaal with the Netherlands during the 2014 World Cup to reach the semi-finals.",
    sections: [
      { heading: "Defensive Solidity", content: "With three center-backs and two deep wing-backs, the defense completely blocks central spaces and wide crosses. The three central midfielders form a screen in front of them." },
      { heading: "Counter-Attacking Flow", content: "When possession is won, the wing-backs fly forward, and the three midfielders look to feed the two strikers immediately, catching opponents out of position." }
    ],
    quizQuestions: [
      { question: "How many central defenders are fielded in a 5-3-2?", options: ["Two", "Three", "Four", "Five"], correctIndex: 1, explanation: "A 5-3-2 utilizes three central defenders (center-backs) plus two wide wing-backs." },
      { question: "What is the main task of wing-backs in a 5-3-2?", options: ["Only stay in the defensive box", "Provide the entire width of the team in both defense and attack", "Play as playmakers", "Cross and score only"], correctIndex: 1, explanation: "Wing-backs are the sole wide players, responsible for defending the flanks and joining attacks." },
      { question: "Which national team coach used the 5-3-2 to reach the 2014 World Cup semi-finals?", options: ["Louis van Gaal", "Vicente del Bosque", "Joachim Low", "Roy Hodgson"], correctIndex: 0, explanation: "Louis van Gaal switched the Netherlands to a counter-attacking 5-3-2 to unlock the squad's strengths." },
      { question: "What is a major risk of playing a 5-3-2?", options: ["Too attacking", "Becoming too defensive and pinned back", "Midfield gets congested", "Too many wingers"], correctIndex: 1, explanation: "If the wing-backs are afraid to push forward, the team can become pinned back in their own half." },
      { question: "How does the midfield three support the strikers?", options: ["They do not help", "By winning the ball and launching rapid counters", "They play as center-backs", "They stay wide"], correctIndex: 1, explanation: "The central midfield trio recovers possession and immediately transitions the ball to the front two." }
    ]
  },
  "5-2-2-1": {
    slug: "5-2-2-1",
    title: "The 5-2-2-1 Formation",
    description: "A compact low-block layout with five defenders, a double pivot, and a single striker.",
    introduction: "The 5-2-2-1 features a highly secure defensive foundation, a double-pivot midfield, two attacking midfielders, and a lone striker. It is designed to choke off spaces and hit on the counter.",
    image: "/images/formations/5-2-2-1.png",
    pros: ["Maximum defensive security", "Creates a double-layered wall in the center", "Excellent for low-block counter-attacking"],
    cons: ["Lone striker can be completely isolated", "Requires high-pace wing-backs to build width", "Hard to sustain possession in opponent's half"],
    keyAttributes: ["Compact defensive block", "Striker speed", "Double pivot tracking"],
    historicalContext: "Often used by underdog teams in major tournaments to frustrate possession-heavy giants, securing defensive lines while keeping attacking mids ready to break.",
    sections: [
      { heading: "Central Stacks", content: "The five defenders and two holding midfielders form a highly compact defensive block. The two attacking midfielders sit in front of the pivot, ready to launch counters." },
      { heading: "Attacking Structure", content: "Attacks are carried out by the lone striker, the two attacking midfielders, and the high-flying wing-backs who provide the wide outlets." }
    ],
    quizQuestions: [
      { question: "What is the defensive priority of the 5-2-2-1?", options: ["Possession dominance", "Choking off spaces and counter-attacking", "High pressing", "None"], correctIndex: 1, explanation: "The 5-2-2-1 is built for maximum defensive compactness, closing down central channels and attacking on counters." },
      { question: "How many attacking midfielders (No. 10s) are used in a 5-2-2-1?", options: ["One", "Two", "Three", "None"], correctIndex: 1, explanation: "The formation uses two attacking midfielders who sit behind the lone striker (the middle '2' in 5-2-2-1)." },
      { question: "Who provides the attacking outlets in wide areas in this system?", options: ["The wingers", "The wing-backs", "The center-backs", "The double pivot"], correctIndex: 1, explanation: "The wing-backs are responsible for running the flanks and providing wide crossing options." },
      { question: "What is the danger for the lone striker in this defensive setup?", options: ["Fouling the keeper", "Being isolated without close support", "Offside trap by teammates", "Playing center-back"], correctIndex: 1, explanation: "Since the team defends deep, the striker has a long distance to cover and can be isolated from midfield." },
      { question: "What is the midfield setup in this formation?", options: ["A diamond", "A double pivot (two holding midfielders)", "Three central midfielders", "A flat line of four"], correctIndex: 1, explanation: "It uses a double pivot to shield the five-man defense." }
    ]
  },
  "5-2-1-2": {
    slug: "5-2-1-2",
    title: "The 5-2-1-2 Formation",
    description: "Features a five-man defense, a double pivot, a central playmaker, and two strikers.",
    introduction: "The 5-2-1-2 is a secure three-back variant. It shields the defense with a double pivot, fields a classic playmaker (No. 10), and utilizes two strikers up front.",
    image: "/images/formations/5-2-1-2.png",
    pros: ["Incredibly secure defensively", "Central playmaker has freedom to create", "Two strikers challenge central defenders"],
    cons: ["Flanks are vulnerable if wing-backs get caught high", "Midfield can be overrun without playmaker's help", "Lacks natural wide forwards"],
    keyAttributes: ["Playmaker vision", "Wing-back recovery speed", "Striker chemistry"],
    historicalContext: "Popularized in South American and Italian football, it allows teams to play with two strikers and a classic creative playmaker while maintaining a secure defensive structure.",
    sections: [
      { heading: "The Playmaker's Freedom", content: "The attacking midfielder (No. 10) sits in a pocket of space behind the two strikers. Backed by the double pivot, they have the freedom to orchestrate the entire attack." },
      { heading: "Wing-Back Responsibilities", content: "The wing-backs must cover the entire flank. They provide wide support for the playmaker and deliver crosses to the two strikers." }
    ],
    quizQuestions: [
      { question: "What is the role of the '1' in a 5-2-1-2?", options: ["Defensive anchor", "Central attacking playmaker (No. 10)", "Sweeper", "Target man"], correctIndex: 1, explanation: "The single '1' represents the central playmaker sitting behind the two strikers." },
      { question: "How many central defenders play in a 5-2-1-2?", options: ["Two", "Three", "Four", "Five"], correctIndex: 1, explanation: "It uses three center-backs (central defenders) and two wing-backs." },
      { question: "What is a main weakness of the 5-2-1-2?", options: ["No playmaker", "Flank vulnerability if wing-backs are caught high", "Too many strikers", "No goalkeeper"], correctIndex: 1, explanation: "Since wing-backs are the only wide players, if they push too high, the wings are exposed to counter-attacks." },
      { question: "How does this formation support a two-striker system?", options: ["It isolates them", "By placing a playmaker behind them to deliver final passes", "By having no midfielders", "They play as fullbacks"], correctIndex: 1, explanation: "The playmaker (No. 10) acts as the bridge, feeding the two strikers in the final third." },
      { question: "What is the typical defensive shape when sitting deep?", options: ["A 5-3-2 block", "A 4-4-2 block", "A 3-4-3 block", "A 4-5-1 block"], correctIndex: 0, explanation: "The playmaker drops slightly, converting the midfield shape to create a compact 5-3-2 defensive block." }
    ]
  }
};
