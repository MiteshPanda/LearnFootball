import { QuizQuestion } from "@/components/academy/LessonQuiz";

export interface TacticLesson {
  slug: string;
  title: string;
  description: string;
  introduction: string;
  image: string;
  emoji?: string;
  keyElements: string[];
  sections: { heading: string; content: string }[];
  quizQuestions: QuizQuestion[];
}

export const attackingTactics: Record<string, TacticLesson> = {
  "tiki-taka": {
    slug: "tiki-taka",
    title: "Tiki-Taka",
    description: "Possession-based play focused on constant short passing and movement.",
    introduction: "Tiki-Taka is a style of play characterized by short passing, fluid movement, and maintaining possession. The goal is to wear down opponents, control the tempo of the game, and slowly open up spaces in their defense.",
    image: "/images/tactics/tiki-taka.png",
    keyElements: ["One-touch short passing", "Staggered triangles", "Continuous movement", "Choking opponent possession"],
    sections: [
      { heading: "Tactical Setup", content: "Players position themselves to form passing triangles everywhere on the pitch. When player A gets the ball, players B and C must immediately make themselves available to create two passing options." },
      { heading: "Patience & Penetration", content: "Tiki-taka is not about possession for its own sake. It is about circulating the ball horizontally and vertically until a defender is drawn out of position, allowing a quick penetrative pass." }
    ],
    quizQuestions: [
      { question: "What is the core passing style of Tiki-Taka?", options: ["Long direct balls", "Rapid short passes and movement", "High crosses", "Goal kicks"], correctIndex: 1, explanation: "Tiki-Taka is famous for short, quick, low-risk passing and constant player rotation." },
      { question: "Which shape is fundamental to creating passing options in Tiki-Taka?", options: ["Straight lines", "Triangles", "Boxes", "Circles"], correctIndex: 1, explanation: "Passing triangles ensure that the ball carrier always has at least two close passing outlets." },
      { question: "Which club famously perfected Tiki-Taka between 2008 and 2012?", options: ["Real Madrid", "FC Barcelona", "AC Milan", "Manchester United"], correctIndex: 1, explanation: "Pep Guardiola's FC Barcelona dominated European football using this style." },
      { question: "What is the main defensive benefit of Tiki-Taka?", options: ["It uses 6 center-backs", "Opponents cannot score if they do not have the ball", "It plays without a keeper", "All of the above"], correctIndex: 1, explanation: "By keeping the ball, the team minimizes the opponent's chances of attacking." },
      { question: "What is required from players in a Tiki-Taka system?", options: ["Only physical strength", "Elite technical skill, vision, and movement", "Just speed", "Long throw-ins"], correctIndex: 1, explanation: "It demands players with high technical skill, composure, spatial awareness, and quick decision-making." }
    ]
  },
  "positional-play": {
    slug: "positional-play",
    title: "Positional Play (Juego de Posición)",
    description: "A philosophy of controlling space and generating numerical and qualitative advantages.",
    introduction: "Juego de Posición (Positional Play) is a structured tactical philosophy where the pitch is divided into zones. Players must occupy specific spaces relative to the ball, teammates, and opponents to create overloads.",
    image: "/images/tactics/positional-play.png",
    keyElements: ["Grid-based pitch division", "Creating the 'Free Man'", "Dynamic rotations", "Qualitative advantages"],
    sections: [
      { heading: "The Pitch Grid", content: "Coaches divide the pitch into a grid (typically 20 zones). The rule is that no more than three players can occupy the same horizontal line, and no more than two on the same vertical line, preventing spacing congestion." },
      { heading: "Finding the Free Man", content: "The objective is to draw opponents towards the ball, then quickly shift play to the 'Free Man' who has time and space in another zone." }
    ],
    quizQuestions: [
      { question: "What is the main goal of Juego de Posición?", options: ["Direct route-one ball", "Creating and exploiting overloads using structure", "Man-marking the keeper", "Running without a shape"], correctIndex: 1, explanation: "It aims to generate numerical, positional, and qualitative advantages through structured positioning." },
      { question: "How is the pitch typically divided in this philosophy?", options: ["Into two halves only", "Into a grid of zones", "Into circular sections", "It is not divided"], correctIndex: 1, explanation: "The pitch is divided into a grid of zones (often including half-spaces) to guide player positioning." },
      { question: "What spacing rule is common in Positional Play?", options: ["No more than three players on the same horizontal line", "Everyone stands in the center circle", "All players stay in their own box", "Wingers must stay on the bench"], correctIndex: 0, explanation: "To maintain optimal width and depth, strict rules limit player accumulation on the same horizontal and vertical lines." },
      { question: "What is a 'qualitative advantage'?", options: ["Having more players", "Matching your best player against their weakest defender", "Scoring from outside the box", "Using two keepers"], correctIndex: 1, explanation: "A qualitative advantage is creating a 1v1 matchup where your player possesses superior skill over the opponent." },
      { question: "Which coach is the most famous modern proponent of Positional Play?", options: ["Sean Dyche", "Pep Guardiola", "Diego Simeone", "Jose Mourinho"], correctIndex: 1, explanation: "Pep Guardiola has built his entire managerial career on the principles of Juego de Posición." }
    ]
  },
  "total-football": {
    slug: "total-football",
    title: "Total Football",
    description: "A system where any outfield player can take over the role of any other teammate.",
    introduction: "Total Football is a fluid tactical theory where no outfield player is fixed in their role. If a defender moves forward, a midfielder or attacker immediately drops back to occupy their space, maintaining team shape dynamically.",
    image: "/images/tactics/total-football.png",
    keyElements: ["Fluid positional rotation", "Creating and exploiting space", "High-line offside traps", "Universal player utility"],
    sections: [
      { heading: "Positional Interchange", content: "When a player leaves their position, another teammate must immediately cover it. This requires all outfield players to be highly versatile, comfortable defending, distributing, and attacking." },
      { heading: "Exploiting Space", content: "The system is obsessed with space: making the pitch as large as possible when in possession, and as small as possible when defending." }
    ],
    quizQuestions: [
      { question: "What is the core concept of Total Football?", options: ["Defenders never cross the halfway line", "Players can fluidly swap positions as needed", "Only play long balls", "No goalkeeper is used"], correctIndex: 1, explanation: "Total Football allows players to rotate positions dynamically, keeping the team's tactical structure intact." },
      { question: "Which country is famous for developing Total Football?", options: ["Italy", "Brazil", "The Netherlands", "England"], correctIndex: 2, explanation: "The Netherlands, specifically through Ajax and the national team in the 1970s, popularized the system." },
      { question: "Who was the legendary player that served as the pitch conductor of Total Football?", options: ["Pele", "Diego Maradona", "Johan Cruyff", "Franz Beckenbauer"], correctIndex: 2, explanation: "Johan Cruyff was the tactical mastermind on the pitch for Rinus Michels' Total Football sides." },
      { question: "What physical and technical attributes does Total Football require?", options: ["Only running speed", "Complete players comfortable in defense, midfield, and attack", "Only size", "Strong headers"], correctIndex: 1, explanation: "Since positions interchange, every player must understand all defensive and offensive responsibilities." },
      { question: "How does the team behave defensively in Total Football?", options: ["They park the bus", "They press high and use an aggressive offside trap", "They stay in their box", "They do not defend"], correctIndex: 1, explanation: "They aggressively press high up the pitch and squeeze space using a high defensive line and offside traps." }
    ]
  },
  "gegenpressing-attack": {
    slug: "gegenpressing-attack",
    title: "Gegenpressing (Attacking)",
    description: "Pressing immediately upon losing possession to catch the opponent in transition.",
    introduction: "Gegenpressing (counter-pressing) is an offensive tactic. Instead of retreating after losing the ball, the team instantly swarms the ball carrier, exploiting the opponent's temporary disorganization.",
    image: "/images/tactics/gegenpressing.png",
    keyElements: ["5-second rule", "Instant pressure swarm", "Transition disruption", "Attacking from turnovers"],
    sections: [
      { heading: "The Golden Window", content: "When a team wins the ball, they are vulnerable because they are changing their shape from defending to attacking. Gegenpressing strikes in this 3-to-5 second window of disorganization." },
      { heading: "Attacking Utility", content: "Klopp famously stated that a successful counter-press is the best playmaker, as it wins the ball high up the pitch close to the opponent's goal." }
    ],
    quizQuestions: [
      { question: "What does 'Gegenpressing' mean?", options: ["Parking the bus", "Counter-pressing", "Long ball attack", "Zonal marking"], correctIndex: 1, explanation: "Gegenpressing is German for 'counter-pressing' — pressing immediately after losing the ball." },
      { question: "Why is Gegenpressing considered an attacking tactic?", options: ["It uses five strikers", "It wins the ball high up, close to the opponent's goal", "It ignores defense", "It allows hands"], correctIndex: 1, explanation: "Winning the ball high up allows the team to attack an disorganized opponent block immediately." },
      { question: "What is the critical window of time to win the ball back?", options: ["Within 5 seconds of possession loss", "After 2 minutes", "Only in extra time", "When the ref whistles"], correctIndex: 0, explanation: "The immediate 3-5 seconds after losing the ball is when the opponent is most disorganized and vulnerable." },
      { question: "Which manager famously coined the phrase 'Gegenpressing is the best playmaker'?", options: ["Pep Guardiola", "Jurgen Klopp", "Jose Mourinho", "Carlo Ancelotti"], correctIndex: 1, explanation: "Jurgen Klopp popularized this heavy-metal counter-pressing style at Dortmund and Liverpool." },
      { question: "What happens if the counter-press fails?", options: ["The team scores", "The team is vulnerable to a counter-attack due to high lines", "The match ends", "Nothing"], correctIndex: 1, explanation: "If the initial swarm fails, the team's high defensive line is exposed to direct counter-attacks." }
    ]
  },
  "vertical-tiki-taka": {
    slug: "vertical-tiki-taka",
    title: "Vertical Tiki-Taka",
    description: "Possession passing combined with sudden, rapid vertical penetration.",
    introduction: "Vertical Tiki-Taka blends possession dominance with direct vertical passing. Instead of circulating the ball sideways, players look for forward passes that break defensive lines quickly.",
    image: "/images/tactics/vertical-tiki-taka.png",
    keyElements: ["Forward passing focus", "Rapid link play", "Interchanging positions", "Third-man releases"],
    sections: [
      { heading: "Verticality", content: "While traditional tiki-taka is horizontal to control play, vertical tiki-taka seeks to break lines at the earliest opportunity, using short, fast combinations to pierce the center." },
      { heading: "Player Requirements", content: "Requires vertical passing vision from midfielders and quick, creative movement from attackers who can receive between lines." }
    ],
    quizQuestions: [
      { question: "How does Vertical Tiki-Taka differ from traditional Tiki-Taka?", options: ["It uses long balls", "It focuses on quick forward passes that break lines", "It doesn't use midfielders", "It is extremely defensive"], correctIndex: 1, explanation: "Vertical Tiki-Taka is much more aggressive, looking to pass forward and break lines rather than sideways." },
      { question: "What is the main objective of this style?", options: ["Keep possession forever", "Penetrate the center quickly using short passing combinations", "Deliver high crosses", "Play for draw"], correctIndex: 1, explanation: "It aims to break lines and score quickly while maintaining a possession base." },
      { question: "Which manager popularized a vertical possession style at Napoli and Chelsea?", options: ["Maurizio Sarri", "Sam Allardyce", "Tony Pulis", "Jose Mourinho"], correctIndex: 0, explanation: "Maurizio Sarri's 'Sarriball' is a prime example of high-tempo, vertical tiki-taka." },
      { question: "What type of movement is essential for this tactic?", options: ["No movement", "Drifting wide only", "Constant vertical runs and dropping between lines", "Staying in defensive lines"], correctIndex: 2, explanation: "Players must constantly move vertically to receive passes between the opponent's midfield and defense." },
      { question: "What is the risk of vertical passing?", options: ["Higher turnover rate", "No throw-ins", "Too many corners", "Defenders get tired"], correctIndex: 0, explanation: "Because vertical passes are riskier, the team is more prone to turnovers than in horizontal possession." }
    ]
  },
  "direct-football": {
    slug: "direct-football",
    title: "Direct Football",
    description: "Moving the ball from defense to attack with minimal intermediate passing.",
    introduction: "Direct Football focuses on transition speed. Rather than building slowly through midfield, the team uses direct passes to forwards, aiming to attack before the opponent's defense can organize.",
    image: "/images/tactics/direct-football.png",
    keyElements: ["Fast transitions", "Midfield bypass", "Vertical target passes", "Second ball recovery"],
    sections: [
      { heading: "Bypassing the Midfield", content: "Passes are made directly from the defenders or goalkeeper to the attackers. The midfielders focus on running forward to win 'second balls' (knockdowns)." },
      { heading: "Target Selection", content: "Teams look for target strikers who can hold the ball, or fast wingers running into wide channels behind the opposing fullback." }
    ],
    quizQuestions: [
      { question: "What is the key characteristic of Direct Football?", options: ["Slow horizontal buildup", "Bypassing the midfield with direct passes to attackers", "Keeping 80% possession", "Using no forwards"], correctIndex: 1, explanation: "Direct football seeks to get the ball into the attacking third with as few passes as possible." },
      { question: "What are midfielders expected to do in a direct system?", options: ["Keep passing sideways", "Run forward to win second balls (knockdowns)", "Stand still", "Defend in goal"], correctIndex: 1, explanation: "Midfielders must be ready to win the loose balls that result from aerial duels or clearances." },
      { question: "What type of striker is highly valued in direct systems?", options: ["A false 9", "A target man who can win headers and hold play", "A slow playmaker", "No striker is used"], correctIndex: 1, explanation: "A physical target man is crucial to win aerial passes and hold up play for runners." },
      { question: "What is an advantage of direct football?", options: ["It minimizes turnovers in your own half", "It wears out your goalkeeper", "It always gets 90% possession", "It is very slow"], correctIndex: 0, explanation: "By playing long balls forward, you avoid losing possession near your own penalty area." },
      { question: "Direct football is most useful against which opponent setup?", options: ["Deep low blocks", "High-pressing teams with high defensive lines", "Teams playing with 10 defenders", "None"], correctIndex: 1, explanation: "A high-pressing team leaves space behind their defense, which direct long balls can easily exploit." }
    ]
  },
  "wing-play": {
    slug: "wing-play",
    title: "Wing Play",
    description: "Attacking wide areas to stretch defenses and deliver crosses.",
    introduction: "Wing Play utilizes the flanks. By positioning wingers and fullbacks wide, the team stretches the opponent's defense horizontally, creating gaps in the middle and crossing opportunities.",
    image: "/images/tactics/wing-play.png",
    keyElements: ["Touchline hugging", "Overlapping runs", "Crossing variations", "1v1 isolation"],
    sections: [
      { heading: "Stretching the Block", content: "Defensive blocks are naturally compact. By keeping players right on the touchlines, you force the opponent's fullbacks to drift wide, creating massive gaps between the center-back and fullback." },
      { heading: "Crossing Angles", content: "Wingers look to reach the byline to cut balls back, or deliver early crosses behind the defensive line for strikers to run onto." }
    ],
    quizQuestions: [
      { question: "How does Wing Play stretch an opponent's defense?", options: ["By playing through the center", "By keeping players wide on the touchlines", "By defending deep", "By using three goalkeepers"], correctIndex: 1, explanation: "Wide players force the opponent's defense to expand horizontally, creating central gaps." },
      { question: "What is the primary delivery method in Wing Play?", options: ["Short central passes", "Crosses into the penalty area", "Backpasses to defense", "Through balls to keeper"], correctIndex: 1, explanation: "Crossing from wide positions is the main way to feed strikers in a wing-play system." },
      { question: "What run is commonly made by fullbacks to assist wingers?", options: ["An overlap (running around the outside of the winger)", "An underlap only", "Running into their own goal", "Sitting on the center circle"], correctIndex: 0, explanation: "An overlapping run around the outside of the winger creates a 2v1 advantage against the opposing fullback." },
      { question: "What is the benefit of a winger reaching the byline?", options: ["It is a throw-in", "It allows a cutback pass, which is very hard to defend", "The ball goes out of play", "They get a free kick"], correctIndex: 1, explanation: "A cutback pass from the byline travels away from the opponent's goal, catching retreating defenders out of position." },
      { question: "What winger type is suited for crossing?", options: ["Traditional winger playing on their natural foot side", "Inverted winger", "Holding winger", "Sweeper"], correctIndex: 0, explanation: "A right-footed winger on the right side can cross the ball quickly without having to cut inside." }
    ]
  },
  "overlapping-fullbacks": {
    slug: "overlapping-fullbacks",
    title: "Overlapping Fullbacks",
    description: "Fullbacks running on the outside of wingers to provide width and crossing options.",
    introduction: "Overlapping is an attacking movement where a fullback runs past the winger on the outside (near the touchline). This creates a 2v1 situation against the opponent's fullback and provides a crossing outlet.",
    image: "/images/tactics/overlapping-fullbacks.png",
    keyElements: ["Decoy winger runs", "Outside fullback sprints", "2v1 wide overloads", "Touchline crossing"],
    sections: [
      { heading: "The Mechanism", content: "The winger cuts inside with the ball, dragging the opposing fullback with them. This opens up the wide corridor on the outside, which the fullback sprints into to receive a pass." },
      { heading: "Defensive Coverage", content: "Since the fullback is high up the pitch, a holding midfielder must drop deep to cover the open space behind them." }
    ],
    quizQuestions: [
      { question: "What is an 'overlapping run'?", options: ["A run made on the inside of the winger", "A run made on the outside of the winger near the touchline", "A defender running back to goal", "A goalkeeper run"], correctIndex: 1, explanation: "An overlap involves a player running around the outside of the ball-carrier to receive a pass." },
      { question: "Which player typically makes the overlap run in modern systems?", options: ["The striker", "The fullback", "The center-back", "The defensive midfielder"], correctIndex: 1, explanation: "Fullbacks (or wing-backs) commonly overlap wide wingers to provide crossing options." },
      { question: "What defensive issue can overlapping cause?", options: ["Too many defenders in the box", "Leaving space open behind the attacking fullback", "Opponent gets free throws", "None"], correctIndex: 1, explanation: "If possession is lost, the space behind the advanced fullback is open for counter-attacks." },
      { question: "How does the winger help create space for the overlap?", options: ["By running out of play", "By carrying the ball inside to draw the defender", "By standing still", "By passing back to the goalkeeper"], correctIndex: 1, explanation: "Cutting inside draws the fullback, opening up the wing lane for the overlapping fullback." },
      { question: "Who should cover the space left by an overlapping fullback?", options: ["The striker", "A defensive midfielder or covering center-back", "The referee", "No one"], correctIndex: 1, explanation: "A defensive midfielder or a center-back must shift wide to cover the vacant space." }
    ]
  },
  "underlapping-fullbacks": {
    slug: "underlapping-fullbacks",
    title: "Underlapping Fullbacks",
    description: "Fullbacks running through central half-spaces on the inside of wingers.",
    introduction: "An underlap is the opposite of an overlap. The fullback runs on the inside of the winger, charging directly through the half-space into the penalty area to overload central zones.",
    image: "/images/tactics/underlapping-fullbacks.png",
    keyElements: ["Inside channel runs", "Half-space attack", "Midfield congestion bypass", "Winger wide spacing"],
    sections: [
      { heading: "The Run Path", content: "The winger stays wide on the touchline, keeping the opposing fullback occupied. The attacking fullback then charges through the inside channel (half-space) between the center-back and fullback." },
      { heading: "Surprise Element", content: "Defenders are trained to expect overlaps. An underlap catches defenses off guard, allowing the fullback to shoot directly or cut the ball back from inside the box." }
    ],
    quizQuestions: [
      { question: "What is an 'underlapping run'?", options: ["A run made on the outside of the winger", "A run made through the inside channel (half-space)", "A run back to one's own goal", "A sliding tackle"], correctIndex: 1, explanation: "An underlap is an inside run made between the winger and the central midfielders." },
      { question: "How does the winger position themselves during an underlap?", options: ["Wide on the touchline", "In the center circle", "Inside the box", "Beside the center-back"], correctIndex: 0, explanation: "The winger stays wide to drag the defender away, opening the inside lane." },
      { question: "What zone of the pitch does an underlap exploit?", options: ["The touchline", "The half-space", "The penalty spot", "Their own half"], correctIndex: 1, explanation: "Underlaps take place in the half-spaces, the corridors between the center and the wings." },
      { question: "Why is the underlap difficult to defend?", options: ["It uses two balls", "Defenders are positioned to block wide runs, not central penetrations", "Fullbacks are too slow", "It is illegal"], correctIndex: 1, explanation: "Defenders usually look wide to cover overlaps; central runs from deep fullbacks catch them by surprise." },
      { question: "Which coach famously uses underlapping fullbacks in possession?", options: ["Diego Simeone", "Pep Guardiola", "Sean Dyche", "Sam Allardyce"], correctIndex: 1, explanation: "Pep Guardiola has utilized inverted fullbacks (like Walker or Cancelo) to make underlapping runs into the half-spaces." }
    ]
  },
  "counter-attacking": {
    slug: "counter-attacking",
    title: "Counter-Attacking",
    description: "Transitioning from defense to attack rapidly to strike disorganized opponents.",
    introduction: "Counter-attacking is a reactive tactic. The team sits in a compact defensive shape, wins possession, and immediately plays the ball forward to exploit the open spaces left by the advancing opponent.",
    image: "/images/tactics/counter-attacking.png",
    keyElements: ["Deep defensive block", "Direct vertical passing", "High-speed sprints", "Exploiting open space"],
    sections: [
      { heading: "Absorbing Pressure", content: "The team defends deep (often in a low block) to invite the opponent forward. As the opponent pushes up, they leave massive spaces behind their defensive line." },
      { heading: "The Exploding Break", content: "The second the ball is won, the team transitions at maximum speed. Creative midfielders play direct, long passes into space for fast forwards." }
    ],
    quizQuestions: [
      { question: "What is the primary condition needed for a counter-attack?", options: ["Slow passing", "Open space behind the opponent's defensive line", "Lots of defenders in the box", "A corner kick"], correctIndex: 1, explanation: "Counter-attacks rely on the opponent having pushed high up, leaving space behind them." },
      { question: "Where does a counter-attacking team typically win the ball?", options: ["In the opponent's box", "Deep in their own defensive half", "In the center circle", "Out of play"], correctIndex: 1, explanation: "Counter-attacks usually start from deep defensive positions where the opponent has committed players forward." },
      { question: "What is the key requirement for players in transition?", options: ["Patience", "Maximum speed and direct forward runs", "Sideways passing", "Defensive tracking"], correctIndex: 1, explanation: "The break must be executed at pace before the opponent can track back and organize." },
      { question: "Which manager famously won titles using lethal counter-attacks?", options: ["Pep Guardiola", "Jose Mourinho", "Arsene Wenger", "Marcelo Bielsa"], correctIndex: 1, explanation: "Mourinho's Chelsea and Real Madrid sides were legendary for their clinical, high-speed counter-attacks." },
      { question: "Why is a deep block useful for counter-attacking?", options: ["It scores goals", "It draws the opponent forward, opening space behind them", "It plays without a keeper", "It makes the pitch smaller"], correctIndex: 1, explanation: "By defending deep, you force the opponent to commit players forward, opening space to attack." }
    ]
  },
  "fast-transitions": {
    slug: "fast-transitions",
    title: "Fast Transition Attacks",
    description: "Moving from defense to attack in under 10 seconds to catch defenses open.",
    introduction: "Fast Transition Attacks focus on the critical transition phase. When the ball is won, players immediately sprint forward, aiming to get a shot off within seconds before the defense can set up.",
    image: "/images/tactics/fast-transitions.png",
    keyElements: ["High verticality", "Instant forward sprints", "Shot-in-10-seconds goal", "Transition coordination"],
    sections: [
      { heading: "The Transition Phase", content: "Matches are won and lost in the moments when possession changes hands. This tactic focuses entirely on executing direct, high-speed combinations during this phase." },
      { heading: "Attacking Overloads", content: "By breaking forward in numbers, the attacking team often creates a 3v2 or 4v3 advantage against the backpedaling defenders." }
    ],
    quizQuestions: [
      { question: "What is the main focus of Fast Transition Attacks?", options: ["Keeping 90% possession", "Moving the ball to a shot immediately upon winning possession", "Defending in a low block", "Slow buildup"], correctIndex: 1, explanation: "It focuses on maximizing the transition phase to score before the defense can organize." },
      { question: "How long does a typical transition attack take?", options: ["Under 10 seconds", "Over 2 minutes", "Exactly 45 minutes", "None"], correctIndex: 0, explanation: "Transition attacks are designed to be completed in under 10 seconds to maintain the surprise element." },
      { question: "What is the biggest challenge for the defending team during a transition?", options: ["They are out of defensive shape", "They have too many players", "The referee is slow", "They cannot run"], correctIndex: 0, explanation: "Because they were in attacking shape, defenders are scattered and cannot easily form a compact block." },
      { question: "What is required from attackers during a fast transition?", options: ["Patience", "High-speed vertical runs into space", "Holding possession", "Backpassing"], correctIndex: 1, explanation: "Attackers must make immediate runs to stretch the backpedaling defense." },
      { question: "What advantage is commonly created during a fast transition?", options: ["Numerical overloads (e.g., 3v2 or 4v3)", "Corner kicks", "Yellow cards", "Fouls"], correctIndex: 0, explanation: "Advancing rapidly before the opponent recovers allows you to outnumber their remaining defenders." }
    ]
  },
  "false-9-system": {
    slug: "false-9-system",
    title: "False 9 System",
    description: "A striker dropping deep to create midfield overloads and opening space for wingers.",
    introduction: "The False 9 is an attacking system where the central striker drops deep into midfield. This movement pulls the opposing center-backs out of position and opens space for wide forwards to run into.",
    image: "/images/tactics/false-9.png",
    keyElements: ["Striker dropping deep", "Midfield numerical overload", "Diagonal winger runs", "Center-back disruption"],
    sections: [
      { heading: "Center-Back Dilemma", content: "When the striker drops deep, the opponent's center-backs face a choice: follow the striker (which opens space behind them) or let them go free (which gives them space to turn and pass)." },
      { heading: "Winger Movements", content: "As the False 9 drops, the two wingers make diagonal runs inside into the space the striker vacated, acting as the main goal-scorers." }
    ],
    quizQuestions: [
      { question: "What does the striker do in a False 9 system?", options: ["Stays high in the box", "Drops deep into midfield to draw defenders", "Plays as center-back", "Stays on the bench"], correctIndex: 1, explanation: "The False 9 drops deep to act as a playmaker and pull center-backs out of line." },
      { question: "How does the False 9 system help the midfield?", options: ["It bypasses them", "It creates a numerical overload (extra passing option)", "It defends the box", "It reduces running"], correctIndex: 1, explanation: "By dropping deep, the striker acts as an extra midfielder, making it easy to dominate possession." },
      { question: "Who makes runs into the space vacated by the False 9?", options: ["The fullbacks", "The wide wingers making diagonal inside runs", "The center-backs", "The goalkeeper"], correctIndex: 1, explanation: "The wingers cut inside into the empty central space to receive passes and score." },
      { question: "Which player famously perfected this role under Pep Guardiola at Barcelona?", options: ["Cristiano Ronaldo", "Lionel Messi", "Erling Haaland", "Harry Kane"], correctIndex: 1, explanation: "Guardiola deployed Lionel Messi as a False 9, which revolutionized Barcelona's attacking play." },
      { question: "What is the primary defender dilemma in this system?", options: ["Whether to follow the dropping striker or stay in position", "How to take a throw-in", "How to press the goalkeeper", "None"], correctIndex: 0, explanation: "Center-backs are torn between following the striker deep (leaving space behind) or staying back (giving the striker time to play)." }
    ]
  },
  "target-man-system": {
    slug: "target-man-system",
    title: "Target Man System",
    description: "Utilizing a physically dominant striker to hold up the ball and link up play.",
    introduction: "The Target Man system uses a tall, physically strong striker. Long balls are played directly to them; they protect the ball from defenders, allowing teammates to join the attack.",
    image: "/images/tactics/target-man.png",
    keyElements: ["Physical hold-up play", "Aerial dominance", "Flick-ons to runners", "Direct crossing target"],
    sections: [
      { heading: "Hold-Up Play", content: "The target man uses their body to shield the ball from center-backs. They receive direct passes, control them under pressure, and lay them off to oncoming midfielders." },
      { heading: "Flick-Ons", content: "On long clearances, the target man contests aerial duels, looking to flick the ball with their head into the path of fast runners moving behind the defense." }
    ],
    quizQuestions: [
      { question: "What is the main role of a Target Man?", options: ["Dribbling past 5 players", "Holding up the ball and linking up play", "Playing as a sweeper keeper", "Defending wide areas"], correctIndex: 1, explanation: "The target man uses their physical strength to control long passes and lay them off to teammates." },
      { question: "What physical attribute is most important for a target man?", options: ["Dribbling agility", "Height and physical strength", "Speed", "Diving ability"], correctIndex: 1, explanation: "Height and strength are critical to shield the ball and win aerial duels against physical center-backs." },
      { question: "What is a 'flick-on'?", options: ["A foul", "Header passing the ball into space behind the defender", "A penalty kick", "A trick shot"], correctIndex: 1, explanation: "A flick-on is an aerial pass using the head to guide the ball to runners behind the defense." },
      { question: "Which system works best alongside a target man?", options: ["No midfielders", "A fast second striker or running midfielders to receive lay-offs", "Parking the bus", "Tiki-taka"], correctIndex: 1, explanation: "A target man needs runners nearby to collect their headers and short link passes." },
      { question: "Give an example of a classic Target Man striker.", options: ["Lionel Messi", "Zlatan Ibrahimović", "Neymar", "Mohamed Salah"], correctIndex: 1, explanation: "Zlatan Ibrahimović, Didier Drogba, and Olivier Giroud are classic examples of physical target men." }
    ]
  },
  "crossing-aerial": {
    slug: "crossing-aerial",
    title: "Crossing & Aerial Attack",
    description: "Delivering wide crosses into the box to exploit aerial weaknesses.",
    introduction: "This tactic relies on wide delivery. Wingers and fullbacks cross the ball into the penalty area, where attackers use their height and heading ability to score.",
    image: "/images/tactics/crossing.png",
    keyElements: ["Wide wing positioning", "Inswinging/Outswinging crosses", "Near-post/Far-post runs", "Aerial heading accuracy"],
    sections: [
      { heading: "Crossing Areas", content: "Crosses can be delivered from deep (early crosses) or from near the byline. Byline crosses are harder to defend because defenders are backpedaling toward their own goal." },
      { heading: "Box Runs", content: "Attackers make coordinated runs to disrupt defenders: one attacker runs to the near post, another to the far post, and a midfielder waits at the edge of the box." }
    ],
    quizQuestions: [
      { question: "What is the primary attacking goal of this tactic?", options: ["Short central passing", "Delivering crosses into the box for aerial headers", "Dribbling past the keeper", "Bypassing the penalty box"], correctIndex: 1, explanation: "It focuses on crossing from wide areas to exploit heading advantages in the box." },
      { question: "What is an 'inswinging' cross?", options: ["A cross that curves toward the goal", "A cross that curves away from the goal", "A pass on the ground", "A throw-in"], correctIndex: 0, explanation: "An inswinging cross curves toward the goal, making it dangerous for defenders and goalkeepers to judge." },
      { question: "Why are cutbacks from the byline highly effective?", options: ["They are out of play", "They go against the defenders' running momentum", "They go to the referee", "They are easy to head"], correctIndex: 1, explanation: "Defenders are running toward their own goal, so a pass cut back away from the goal is very hard to clear." },
      { question: "Which run helps drag defenders away from the center?", options: ["A near-post run", "Staying in midfield", "Standing near the referee", "Drifting to the corner flag"], correctIndex: 0, explanation: "A near-post run forces a defender to follow, opening up space in the center of the box." },
      { question: "What player type is most dangerous in an aerial attack?", options: ["A small dribbling playmaker", "A tall striker with excellent heading timing", "A sweeper", "A holding midfielder"], correctIndex: 1, explanation: "Tall, physically dominant players with great heading timing excel in aerial systems." }
    ]
  },
  "third-man-runs": {
    slug: "third-man-runs",
    title: "Third-Man Runs",
    description: "A passing combination designed to release an unmarked runner in behind.",
    introduction: "A Third-Man Run is a tactical passing combination. Player A passes to Player B to attract the defense's attention, while Player C (the third man) makes a run into space to receive a pass from B.",
    image: "/images/tactics/third-man-runs.png",
    keyElements: ["Up-back-through combo", "Defensive distraction", "Blind-side runs", "Passing coordination"],
    sections: [
      { heading: "The Combination", content: "The classic sequence is 'up, back, and through'. Player A passes forward to Player B (up). Player B quickly passes back to a nearby midfielder (back). Meanwhile, Player C has run into space, and receives the through ball from B or the midfielder (through)." },
      { heading: "Why It Works", content: "Defenders naturally watch the ball. When Player A passes to B, defenders focus on B. Player C runs from their 'blind side' (behind them) and is completely unmarked." }
    ],
    quizQuestions: [
      { question: "What is the classic sequence of a third-man run?", options: ["Clearance, header, shot", "Up, back, and through", "Throw-in, pass, cross", "Dribble, step-over, tackle"], correctIndex: 1, explanation: "The 'up, back, through' sequence is the fundamental pattern of third-man combinations." },
      { question: "Why do defenders often fail to track the third man?", options: ["They are too slow", "They focus on the ball and the first receiver", "They are offside", "They are looking at the coach"], correctIndex: 1, explanation: "Defenders' attention is drawn to the active ball receivers, allowing the third runner to slip past them unnoticed." },
      { question: "Who is the 'third man' in this combination?", options: ["The referee", "The player who runs into space to receive the final pass", "The goalkeeper", "The player who starts the move"], correctIndex: 1, explanation: "The third man is the runner who makes the deep run to receive the penetrative pass." },
      { question: "What pass type releases the third man?", options: ["A backward pass", "A through ball into space", "A high clearance", "A throw-in"], correctIndex: 1, explanation: "A through ball is played into the space where the third man is running." },
      { question: "Which team style relies heavily on third-man runs?", options: ["Direct route-one", "Possession-based quick combination styles (like Guardiola's teams)", "Deep low blocks", "None"], correctIndex: 1, explanation: "High-tempo possession teams use third-man combinations constantly to unlock compact defenses." }
    ]
  },
  "half-space-exploitation": {
    slug: "half-space-exploitation",
    title: "Half-Space Exploitation",
    description: "Attacking the corridors between the wings and the center of the pitch.",
    introduction: "The pitch can be split into vertical channels: the two wings, the center, and the two 'half-spaces' in between. Attacking half-spaces is highly effective because it confuses defenders' marking duties.",
    image: "/images/tactics/half-spaces.png",
    keyElements: ["Vertical channel mapping", "Diagonal crossing angles", "Defensive split", "Mezzala runs"],
    sections: [
      { heading: "What is the Half-Space?", content: "The half-spaces are the vertical corridors between the center circle and the touchlines. They offer the perfect balance: they are closer to the goal than the wings, but have less congestion than the center." },
      { heading: "Attacking Benefits", content: "An attacker in the half-space forces the opposing fullback and center-back to decide who should step out to press, often opening up a gap between them." }
    ],
    quizQuestions: [
      { question: "What are the 'half-spaces' on a pitch?", options: ["The penalty boxes", "The vertical channels between the center and the wings", "The center circle", "The goal lines"], correctIndex: 1, explanation: "They are the intermediate vertical zones located between the central corridor and the touchlines." },
      { question: "Why is attacking the half-space highly effective?", options: ["It is illegal to defend there", "It splits the defensive marking duties between fullback and center-back", "It is always empty", "You can score with hands"], correctIndex: 1, explanation: "Since it sits between zones, defenders are often unsure who should step out to mark the attacker." },
      { question: "What type of cross is dangerous from the half-space?", options: ["A high long cross", "A diagonal cross behind the defensive line", "A backward cross", "A corner kick"], correctIndex: 1, explanation: "A diagonal cross from the half-space cuts across the defense, making it difficult for the keeper to reach." },
      { question: "Which midfielder role is famous for running into the half-spaces?", options: ["The anchor", "The Mezzala", "The sweeper", "The target man"], correctIndex: 1, explanation: "The Mezzala is an Italian term for a central midfielder who drifts wide to attack the half-spaces." },
      { question: "Exploiting half-spaces helps unlock which defensive setup?", options: ["High press", "A compact low block", "Route one", "No defense"], correctIndex: 1, explanation: "By moving into half-spaces, you pull compact central defenders out of their block, creating openings." }
    ]
  },
  "inverted-wingers-attack": {
    slug: "inverted-wingers-attack",
    title: "Inverted Wingers",
    description: "Wingers playing on their opposite foot who cut inside to shoot or create.",
    introduction: "Inverted Wingers play on the flank opposite to their dominant foot (e.g., a right-footed player on the left wing). Instead of crossing from wide, they cut inside onto their strong foot to shoot or play through balls.",
    image: "/images/tactics/inverted-wingers.png",
    keyElements: ["Opposite-foot positioning", "Cutting-inside dribbles", "Inside shooting angles", "Overlapping fullback space"],
    sections: [
      { heading: "Attacking Angles", content: "By cutting inside, the winger moves toward the center of the pitch, opening up direct shooting angles and through-ball routes into the box." },
      { heading: "Creating Fullback Space", content: "As the winger cuts inside, they drag the opposing fullback with them, opening up wide touchline space for their own fullback to overlap." }
    ],
    quizQuestions: [
      { question: "What defines an 'inverted winger'?", options: ["They play on their natural foot side", "They play on the wing opposite to their dominant foot", "They only play in defense", "They are not allowed to cross"], correctIndex: 1, explanation: "An inverted winger is positioned on the opposite flank of their strong foot (e.g., left-footed on the right wing)." },
      { question: "What is the primary movement of an inverted winger?", options: ["Running straight down the touchline", "Cutting inside toward the center", "Backpassing to the goalie", "Staying in their own box"], correctIndex: 1, explanation: "They cut inside onto their dominant foot to create shooting or passing opportunities." },
      { question: "Who benefit from the wide space opened by an inverted winger?", options: ["The center-backs", "The overlapping fullbacks", "The opposing striker", "The referee"], correctIndex: 1, explanation: "As the winger cuts inside, they clear the flank corridor for the fullback to sprint forward." },
      { question: "Give an example of a legendary inverted winger.", options: ["Arjen Robben", "Peter Crouch", "Andrea Pirlo", "Diego Simeone"], correctIndex: 0, explanation: "Arjen Robben was world-famous for playing on the right wing, cutting inside, and shooting with his left foot." },
      { question: "What is an advantage of inverted wingers?", options: ["They get more headers", "They provide direct goal threats and shooting angles", "They make the pitch smaller", "They do not need to run"], correctIndex: 1, explanation: "Cutting inside allows them to shoot directly, effectively acting as extra forwards." }
    ]
  },
  "wide-wingers-attack": {
    slug: "wide-wingers-attack",
    title: "Wide Wingers",
    description: "Traditional wingers who hug the touchlines to stretch defensive blocks.",
    introduction: "Wide Wingers play on their natural foot side (e.g., a right-footed player on the right wing). They stay wide, hug the touchline, and beat defenders to deliver crosses into the box.",
    image: "/images/tactics/wide-wingers.png",
    keyElements: ["Touchline hugging", "Dribbling past fullbacks", "Byline crossing", "Natural-foot crosses"],
    sections: [
      { heading: "Linear Attacking", content: "Wide wingers play vertically. They receive the ball near the touchline, use speed and dribbling to beat their fullback, and cross immediately without cutting inside." },
      { heading: "Stretching the Line", content: "Their presence forces the opposition backline to spread out, creating space in the center for strikers and attacking midfielders." }
    ],
    quizQuestions: [
      { question: "What is the main task of a traditional wide winger?", options: ["Cut inside to shoot", "Stay wide, beat defenders, and cross the ball", "Defend in central midfield", "Take goal kicks"], correctIndex: 1, explanation: "Traditional wingers hug the touchline to beat fullbacks and deliver crosses into the box." },
      { question: "Which flank does a right-footed wide winger play on?", options: ["The left flank", "The right flank", "The center", "Nowhere"], correctIndex: 1, explanation: "A right-footed wide winger plays on the right flank so they can cross with their natural foot." },
      { question: "What is the benefit of touchline hugging?", options: ["It stretches the opponent's defensive line horizontally", "It gets closer to the coach", "It is easier to defend", "The ball goes out less"], correctIndex: 0, explanation: "Staying wide forces the fullback to move away from the center, opening central gaps." },
      { question: "How does a wide winger beat a fullback?", options: ["By passing backward", "Using speed, acceleration, and direct dribbling down the line", "Standing still", "Fouling them"], correctIndex: 1, explanation: "Wide wingers use explosive pace and dribbling to run past fullbacks on the outside." },
      { question: "Who is a classic example of a traditional wide winger?", options: ["David Beckham / Ryan Giggs", "Lionel Messi", "Arjen Robben", "Roberto Firmino"], correctIndex: 0, explanation: "David Beckham (right wing) and Ryan Giggs (left wing) are classic examples of touchline-hugging crossers." }
    ]
  },
  "fluid-front-three": {
    slug: "fluid-front-three",
    title: "Fluid Front Three",
    description: "Constant interchanging of positions between the front three attackers.",
    introduction: "A Fluid Front Three consists of three attackers (strikers and wingers) who constantly swap positions. This rotation makes them highly unpredictable and difficult for defenders to mark.",
    image: "/images/tactics/fluid-front-three.png",
    keyElements: ["Position rotation", "Unpredictable runs", "Defensive tracking confusion", "Universal forward skill"],
    sections: [
      { heading: "Rotational Dynamics", content: "The central striker drifts wide, while the winger cuts inside to occupy the center. This constant movement prevents defenders from settling into marking duties." },
      { heading: "Tactical Chemistry", content: "Requires high tactical intelligence and chemistry, as players must immediately recognize when a teammate has vacated a space and fill it." }
    ],
    quizQuestions: [
      { question: "What is the core concept of a fluid front three?", options: ["Staying in fixed positions", "Interchanging positions constantly to confuse defenders", "Playing with no midfielders", "Defending in their own half"], correctIndex: 1, explanation: "Constant position rotation makes it difficult for center-backs and fullbacks to track them." },
      { question: "What does this system require from the three attackers?", options: ["Only height", "High chemistry and tactical intelligence", "No defensive duties", "Long throws"], correctIndex: 1, explanation: "Attackers must read each other's runs and cover the spaces left by their partners." },
      { question: "Which famous trio utilized a highly fluid front three?", options: ["Messi, Suarez, Neymar (MSN)", "Salah, Mane, Firmino", "Both MSN and Salah-Mane-Firmino", "None"], correctIndex: 2, explanation: "Both Barca's MSN and Klopp's Liverpool front three (Salah, Mané, Firmino) were famous for fluid positional rotations." },
      { question: "What problem does a fluid front three cause for man-marking systems?", options: ["Defenders get pulled out of their positions", "It has no effect", "It makes marking easier", "Attackers get offside"], correctIndex: 0, explanation: "If defenders try to follow their assigned player, they get dragged far out of position, leaving holes." },
      { question: "What is a key skill needed by all three forwards?", options: ["Only tackle capability", "Versatility to play as winger, second striker, or central forward", "Goalkeeping", "None"], correctIndex: 1, explanation: "Since they swap roles, all three must be comfortable playing both wide and central attacking roles." }
    ]
  },
  "two-striker-partnership": {
    slug: "two-striker-partnership",
    title: "Two-Striker Partnership",
    description: "Classic strike duos collaborating to break down central defenses.",
    introduction: "A Two-Striker Partnership pairs two forwards who complement each other's styles (e.g., Big Man/Small Man). They occupy both center-backs, combine closely, and create scoring channels.",
    image: "/images/tactics/two-strikers.png",
    keyElements: ["Complementary roles", "Big-man small-man combo", "Central defender occupation", "Combine play"],
    sections: [
      { heading: "Big Man, Small Man", content: "One striker is tall and physical (target man), who wins headers and holds up play. The second striker is fast and agile, who collects knockdowns and runs in behind." },
      { heading: "Occupying Center-Backs", content: "By playing two central strikers, you force both opposition center-backs into 1v1 situations, preventing them from covering each other." }
    ],
    quizQuestions: [
      { question: "What is the 'Big Man, Small Man' partnership?", options: ["A tall striker who holds play, paired with a fast striker who runs in behind", "Playing a defender as striker", "Using two goalkeepers", "None"], correctIndex: 0, explanation: "This classic strike duo combines physical presence (holding up the ball) with speed (running onto knockdowns)." },
      { question: "How does a two-striker system affect opponent center-backs?", options: ["It lets them rest", "It forces both into 1v1 situations without coverage", "It makes them play wide", "It forces them offside"], correctIndex: 1, explanation: "With two strikers to mark, center-backs cannot easily sweep or cover for each other." },
      { question: "Which famous duo formed a lethal partnership for Manchester United in 1999?", options: ["Messi and Neymar", "Dwight Yorke and Andy Cole", "Ronaldo and Bale", "Henry and Bergkamp"], correctIndex: 1, explanation: "Dwight Yorke and Andy Cole shared an almost telepathic strike partnership during United's treble-winning season." },
      { question: "What is a 'second striker'?", options: ["A defender", "A forward who plays slightly behind the main striker to link play", "The goalkeeper", "A backup option"], correctIndex: 1, explanation: "A second striker (No. 9.5) drifts between lines to create links between midfield and the main striker." },
      { question: "What is a main challenge for two-striker systems in modern football?", options: ["Too many goals", "Getting outnumbered in central midfield", "Lack of defenders", "No wingers"], correctIndex: 1, explanation: "Playing two strikers often means sacrificing a midfielder, which can lead to losing control of possession." }
    ]
  },
  "route-one": {
    slug: "route-one",
    title: "Route One Football",
    description: "Punting long balls directly from the back to the attacking line.",
    introduction: "Route One is a direct, long-ball tactic. The goal is to clear the ball from defense directly to a tall striker near the opponent's box, bypassing the midfield entirely to create immediate goal threats.",
    image: "/images/tactics/route-one.png",
    keyElements: ["Deep clearances", "Long-ball accuracy", "Target-man headers", "Second-ball collection"],
    sections: [
      { heading: "Tactical Concept", content: "Route One bypasses the midfield buildup entirely. Defenders or the goalkeeper launch the ball 50-60 yards forward to a tall striker who contests the header." },
      { heading: "Winning Second Balls", content: "Success depends on midfielders sprinting forward to win the 'second ball' (the knockdown or loose ball) near the opponent's penalty box." }
    ],
    quizQuestions: [
      { question: "What is the primary action in Route One football?", options: ["Short passing in defense", "Launching long balls directly to the forward line", "Dribbling past midfielders", "Parking the bus"], correctIndex: 1, explanation: "Route One is the most direct style, hitting long aerial passes to bypass buildup entirely." },
      { question: "What is a 'second ball' in this system?", options: ["An extra ball on the pitch", "The loose ball or knockdown resulting from a long pass", "A goal kick", "A penalty"], correctIndex: 1, explanation: "When the long ball is headed down, midfielders must win the resulting loose ball to sustain the attack." },
      { question: "Which player is central to a Route One attack?", options: ["A small playmaker", "A tall, physical target striker", "A sweeper keeper", "A wide fullback"], correctIndex: 1, explanation: "A tall target man is essential to win headers against opposing center-backs." },
      { question: "What is a key benefit of Route One?", options: ["It keeps 90% possession", "It moves play quickly away from your own goal", "It is very quiet", "It uses fewer players"], correctIndex: 1, explanation: "It minimizes the risk of losing the ball in your own half and gets the ball near the opponent's box quickly." },
      { question: "In which league was Route One historically prominent?", options: ["Spanish La Liga", "English Football Leagues", "Italian Serie A", "Dutch Eredivisie"], correctIndex: 1, explanation: "Route One long-ball football was historically associated with traditional English football styles." }
    ]
  }
};
