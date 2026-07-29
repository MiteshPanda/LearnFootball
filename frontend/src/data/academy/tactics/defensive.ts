import { QuizQuestion } from "@/components/academy/LessonQuiz";
import { TacticLesson } from "./attacking";

export const defensiveTactics: Record<string, TacticLesson> = {
  "low-block": {
    slug: "low-block",
    title: "The Low Block",
    description: "Defending very deep in your own half to deny space behind the defense.",
    introduction: "A Low Block is a defensive strategy where a team defends very deep in their own territory, prioritizing compactness. The goal is to deny any space behind the defensive line and frustrate the opponent.",
    image: "/images/tactics/low-block.png",
    keyElements: ["Deep defensive line", "Central compactness", "No space behind", "Counter-attacking focus"],
    sections: [
      { heading: "Defensive Shape", content: "The entire team drops deep, often sitting 18 to 25 yards from their own goal. The horizontal and vertical distances between players are kept tiny, making it impossible to pass through the center." },
      { heading: "Frustrating the Opponent", content: "By inviting the opponent forward and closing all gaps, the team forces them to play low-risk, horizontal passes or deliver crosses that center-backs can clear." }
    ],
    quizQuestions: [
      { question: "Where does a team set up its defense in a Low Block?", options: ["Near the halfway line", "Deep in their own defensive third", "In the opponent's box", "Across the entire pitch"], correctIndex: 1, explanation: "A low block sits deep in its own half, close to its own penalty box." },
      { question: "What is the primary objective of a Low Block?", options: ["Keep high possession", "Deny space behind the defensive line", "Press the goalkeeper", "Score from corner kicks"], correctIndex: 1, explanation: "Sitting deep ensures the opponent has no space to run or pass behind the defense." },
      { question: "What is a major risk when using a Low Block?", options: ["Getting caught offside", "Inviting constant pressure and shots from distance", "Fullbacks running too high", "Lack of defenders"], correctIndex: 1, explanation: "Defending deep allows the opponent to dominate possession and shoot from outside the box." },
      { question: "Which manager famously used the low block to win trophies?", options: ["Pep Guardiola", "Jose Mourinho", "Arsene Wenger", "Marcelo Bielsa"], correctIndex: 1, explanation: "Mourinho has used disciplined low blocks to shut down attacking giants in major matches." },
      { question: "How does a low block transition to attack?", options: ["Through slow horizontal passes", "Using rapid, direct counter-attacks", "By keeping the ball in their own box", "They do not attack"], correctIndex: 1, explanation: "Once they win possession, they exploit the open space behind the opponent using fast counters." }
    ]
  },
  "mid-block": {
    slug: "mid-block",
    title: "The Mid Block",
    description: "Positioning the defensive block in the center third to maintain stability.",
    introduction: "A Mid Block positions the defensive and midfield lines in the middle third of the pitch. It balances defensive compactness with the ability to press without dropping too deep.",
    image: "/images/tactics/mid-block.png",
    keyElements: ["Halfway line defense", "Vertical compression", "Midfield press triggers", "Balanced structure"],
    sections: [
      { heading: "Positioning", content: "The defensive line sits around 10-15 yards in front of their penalty area, and the forward line sits near the halfway line. This compresses the space in the center third where most buildups occur." },
      { heading: "Balanced Protection", content: "Unlike a low block, the mid block doesn't invite opponents right up to the box, and unlike a high block, it doesn't leave massive spaces behind center-backs." }
    ],
    quizQuestions: [
      { question: "Where is the defensive line positioned in a Mid Block?", options: ["On the goal line", "In the middle third of the pitch", "In the opponent's box", "Inside the center circle only"], correctIndex: 1, explanation: "A mid block positions the lines in the middle third of the pitch to control the center." },
      { question: "What is an advantage of a Mid Block over a Low Block?", options: ["It uses fewer players", "It keeps the opponent further away from your goal", "It has no offside rule", "It guarantees 100% possession"], correctIndex: 1, explanation: "It engages the opponent in midfield, preventing them from easily circulating the ball near your penalty box." },
      { question: "How does the mid block react when the opponent passes backward?", options: ["They drop deeper", "They step up to compress space", "They stand still", "They commit fouls"], correctIndex: 1, explanation: "Opponent backpasses are triggers to step up and push the block higher." },
      { question: "What is a risk of a Mid Block?", options: ["No central cover", "Spaces can open between lines if the block isn't compact", "Striker is too close to goal", "Too many corners"], correctIndex: 1, explanation: "If the vertical distance between defenders and midfielders is too wide, opponents can receive passes in between." },
      { question: "Which defensive block is considered the most common baseline in football?", options: ["High block", "Mid block", "Low block", "Parking the bus"], correctIndex: 1, explanation: "The mid block is the standard tactical baseline for most teams before adjusting to high pressing or deep defending." }
    ]
  },
  "high-block": {
    slug: "high-block",
    title: "The High Block",
    description: "Holding a high defensive line to compress the pitch and support pressing.",
    introduction: "A High Block squeezes the pitch by holding a defensive line near the halfway line. This compresses the vertical space, supporting high pressing and suffocating the opponent's buildup.",
    image: "/images/tactics/high-block.png",
    keyElements: ["Halfway line backline", "Squeezing pitch space", "Offside trap reliance", "Sweeper keeper cover"],
    sections: [
      { heading: "Squeezing the Pitch", content: "By holding the center-backs near the halfway line, the distance between the defense and forwards is compressed to 20-30 yards. This denies opponents any room to play in midfield." },
      { heading: "The Space Behind", content: "The major risk is the massive open space behind the high defense. If an opponent beats the press, they can easily pass into space for fast runners." }
    ],
    quizQuestions: [
      { question: "Where does the defensive line sit in a High Block?", options: ["In their own box", "Close to the halfway line", "Inside the opponent's box", "Nowhere"], correctIndex: 1, explanation: "A high block holds the defensive backline near the halfway line to compress play." },
      { question: "What is a main benefit of a High Block?", options: ["It helps protect the keeper", "It compresses vertical space, supporting high press", "It reduces running", "It guarantees no offsides"], correctIndex: 1, explanation: "Squeezing the pitch makes it easy for midfielders and forwards to press and win the ball back." },
      { question: "What is the biggest risk of a High Block?", options: ["Opponent shooting from distance", "The huge open space behind the defensive line", "Fewer throw-ins", "Getting corner kicks"], correctIndex: 1, explanation: "If the opponent breaks the press, they have a massive grass runway to run directly at goal." },
      { question: "Which player role is crucial to cover the space behind a high block?", options: ["A target man", "A sweeper keeper", "A traditional fullback", "A stationary anchor"], correctIndex: 1, explanation: "A sweeper keeper must be ready to rush out of their box to clear long balls played over the high line." },
      { question: "What tactic do defenders use in a high block to stop runners?", options: ["The offside trap", "Man-to-man marking in their box", "Parking the bus", "Sliding tackles only"], correctIndex: 0, explanation: "Defenders step up in unison to catch running opponents offside when long balls are played." }
    ]
  },
  "high-press-defense": {
    slug: "high-press-defense",
    title: "High Press",
    description: "Defending high up the pitch to force mistakes near the opponent's goal.",
    introduction: "A High Press is an aggressive defensive style where players challenge the opponent's buildup phase deep in their own half, forcing turnovers and long clearances near their goal.",
    image: "/images/tactics/high-press.png",
    keyElements: ["Attacking third pressure", "Press triggers", "Passing lane closure", "Forcing long balls"],
    sections: [
      { heading: "Closing Down the Backline", content: "Forwards and midfielders close down center-backs and the goalkeeper, denying them short passing options. This forces them to play risky passes or clear the ball long." },
      { heading: "Press Triggers", content: "Pressing is not random. It is activated by 'triggers' such as a player receiving a pass facing their own goal, a slow pass, or a bad touch." }
    ],
    quizQuestions: [
      { question: "Where does a High Press begin?", options: ["In the team's own box", "In the opponent's defensive third", "Near the halfway line", "Only during corners"], correctIndex: 1, explanation: "A high press targets the opponent's defenders and goalkeeper during their buildup phase." },
      { question: "What is a 'pressing trigger'?", options: ["A whistle from the referee", "An event (like a backpass or bad touch) that signals players to press", "A signal from the coach", "A yellow card"], correctIndex: 1, explanation: "A trigger is a specific opponent action that signals the team to initiate intense pressure." },
      { question: "What do opponents usually do under a successful high press?", options: ["Pass slowly sideways", "Force a risky pass or clear the ball long under pressure", "Score easily", "Stop playing"], correctIndex: 1, explanation: "Denying short options forces the opponent to hit long, low-accuracy clearances." },
      { question: "What attribute is required from players in a high-press system?", options: ["Standing height", "High physical stamina and coordination", "Patience only", "Long throws"], correctIndex: 1, explanation: "High pressing is physically exhausting and requires collective synchronization." },
      { question: "Which coach famously uses high pressing as their core identity?", options: ["Jose Mourinho", "Jurgen Klopp / Pep Guardiola", "Sam Allardyce", "Sean Dyche"], correctIndex: 1, explanation: "Both Guardiola and Klopp rely on high pressing to win possession near the opponent's goal." }
    ]
  },
  "mid-press-defense": {
    slug: "mid-press-defense",
    title: "Mid Press",
    description: "Delaying press until the opponent crosses into the middle third.",
    introduction: "A Mid Press is a defensive tactic where the team allows opponent center-backs to keep the ball, only triggering intense pressure when the ball enters the middle third.",
    image: "/images/tactics/mid-press.png",
    keyElements: ["Midfield press triggers", "Preserving energy", "Center block trap", "Compact lines"],
    sections: [
      { heading: "Midfield Engagement", content: "The forwards do not press the goalkeeper or center-backs. Instead, they stand near the halfway line, blocking central passing lanes. The team waits until a pass is played into midfield." },
      { heading: "Energy Conservation", content: "A mid press is less physically demanding than a high press, making it easier to sustain across 90 minutes while maintaining defensive organization." }
    ],
    quizQuestions: [
      { question: "When does a Mid Press initiate active pressure?", options: ["When the goalkeeper has the ball", "When the ball enters the middle third of the pitch", "Inside their own penalty box", "Only during throw-ins"], correctIndex: 1, explanation: "A mid press engages the opponent as they attempt to pass into central midfield." },
      { question: "What do the forwards do initially in a mid-press system?", options: ["Chase the goalkeeper", "Block central passing lanes near the halfway line without rushing", "Defend in their own box", "Stay offside"], correctIndex: 1, explanation: "Forwards stand off and block access to midfielders, letting center-backs have the ball." },
      { question: "What is an advantage of a Mid Press?", options: ["It uses no midfielders", "It saves player energy compared to a high press", "It scores more headers", "It has no offside risk"], correctIndex: 1, explanation: "Waiting in midfield means players run less than when chasing defenders near the opponent's goal." },
      { question: "What happens when the ball is won in a mid press?", options: ["The team counter-attacks from midfield", "They pass back to their goalie", "The match ends", "They clear it out of play"], correctIndex: 0, explanation: "Winning the ball in midfield allows for fast, dangerous transitions as the opponent was moving forward." },
      { question: "Which opponent tactic is countered well by a mid press?", options: ["Deep low blocks", "Teams that struggle to build through midfield", "Long-ball systems", "None"], correctIndex: 1, explanation: "Teams that rely on short midfield passes will struggle as the mid press congests that exact zone." }
    ]
  },
  "low-press-defense": {
    slug: "low-press-defense",
    title: "Low Press",
    description: "Sitting deep and allowing the opponent's defenders to keep the ball.",
    introduction: "A Low Press is a defensive style where a team drops deep and refuses to press. They allow the opponent's defenders to circulate the ball, focus on blocking the box, and defend space.",
    image: "/images/tactics/low-press.png",
    keyElements: ["Passive defense", "Box protection", "Space denial", "Low energy expenditure"],
    sections: [
      { heading: "Passive Organization", content: "Players do not press the ball carrier unless they enter the defensive third. The team remains organized in a tight defensive shape, shifting side-to-side to block lanes." },
      { heading: "Denying Space", content: "By sitting deep, the team closes all space behind them, forcing the opponent to circulate the ball harmlessly in front of the defensive block." }
    ],
    quizQuestions: [
      { question: "What characterizes the pressure in a Low Press?", options: ["Chasing the goalkeeper", "Very passive, only engaging in the defensive third", "Pressing high in groups", "No defending at all"], correctIndex: 1, explanation: "A low press is highly passive, sitting deep and only challenging passes near their own box." },
      { question: "Why would a team choose a Low Press?", options: ["They want to lose", "To conserve energy and deny any space behind them", "To get more corner kicks", "To play without a goalie"], correctIndex: 1, explanation: "Conserving energy and closing spaces behind the defense are key benefits of deep, passive setups." },
      { question: "What do opponents do when facing a low press?", options: ["Suffer from turnovers", "Circulate the ball easily in front of the block", "Get caught offside constantly", "Shoot on their own goal"], correctIndex: 1, explanation: "Since there is no press, opponent defenders can easily pass the ball sideways in their own half." },
      { question: "Where do midfielders position themselves in a low press?", options: ["In the opponent's box", "Directly in front of their own defenders, forming a screen", "On the touchline", "In the center circle"], correctIndex: 1, explanation: "Midfielders sit tight in front of the defense to block entry passes into the box." },
      { question: "What is a disadvantage of a low press?", options: ["It uses too much energy", "You concede control of the game and invite shots", "Too many fast counters", "Attackers get too tired"], correctIndex: 1, explanation: "Conceding possession means you invite pressure and allow opponents to shoot from outside the box." }
    ]
  },
  "man-marking": {
    slug: "man-marking",
    title: "Man Marking",
    description: "Assigning defenders to track specific opposing players across the field.",
    introduction: "Man Marking is a defensive system where each defender is assigned to mark a specific opponent. Wherever that opponent goes, the defender follows to prevent them from receiving passes.",
    image: "/images/tactics/man-marking.png",
    keyElements: ["1v1 responsibility", "Player tracking", "Physical duels", "Defensive tracking discipline"],
    sections: [
      { heading: "1v1 Responsibility", content: "Defenders are personally responsible for their assigned player. If their player cuts inside, drops deep, or drifts wide, the defender follows closely, denying them time to turn." },
      { heading: "Tactical Vulnerability", content: "The main weakness is that a clever opponent can drag defenders out of position, opening massive gaps in the defensive line for other runners." }
    ],
    quizQuestions: [
      { question: "What is the core rule of Man Marking?", options: ["Defenders cover zones on the pitch", "Each defender tracks a specific opponent", "Only mark the ball", "Everyone defends the goal line"], correctIndex: 1, explanation: "Man marking assigns defenders directly to individual opposing players." },
      { question: "What is a major risk of strict Man Marking?", options: ["Defenders get bored", "Clever attackers can drag defenders out of position, opening gaps", "No throw-ins allowed", "The keeper cannot play"], correctIndex: 1, explanation: "Attackers can run into wide or deep spaces, pulling their defenders away and breaking the team's defensive shape." },
      { question: "What type of matchups does man-marking create?", options: ["Zonal coverage", "Direct 1v1 physical and speed duels", "No matchups", "A pile-up in the center"], correctIndex: 1, explanation: "It relies on defenders winning their individual 1v1 battles against their assigned opponents." },
      { question: "Which coach famously used strict man-marking to win matches?", options: ["Pep Guardiola", "Marcelo Bielsa", "Arrigo Sacchi", "Carlo Ancelotti"], correctIndex: 1, explanation: "Marcelo Bielsa is famous for his intense, high-energy man-marking systems." },
      { question: "When is man-marking most commonly used today?", options: ["All the time by every team", "During set pieces (corners and free kicks)", "Only by goalkeepers", "None"], correctIndex: 1, explanation: "Most modern teams use man-marking during corners and free-kicks, even if they play zones during open play." }
    ]
  },
  "zonal-marking": {
    slug: "zonal-marking",
    title: "Zonal Marking",
    description: "Defenders covering specific zones on the pitch rather than tracking players.",
    introduction: "Zonal Marking is a defensive system where players are responsible for defending specific areas of the pitch. Instead of following players, they cover zones and mark opponents who enter them.",
    image: "/images/tactics/zonal-marking.png",
    keyElements: ["Zone responsibilities", "Defensive line coordination", "Defending the ball and space", "Positional shifts"],
    sections: [
      { heading: "Defending Space", content: "The pitch is divided into defensive zones. When an opponent enters a zone, the player covering that zone marks them. If the opponent leaves, the player hands them over to a teammate." },
      { heading: "Cohesion", content: "Success depends on the entire team moving together. The lines must shift side-to-side and up-and-down relative to the ball, keeping defensive shapes intact." }
    ],
    quizQuestions: [
      { question: "What does a player mark in a Zonal Marking system?", options: ["A specific opposing player", "A specific zone of the pitch", "The referee", "The goalpost"], correctIndex: 1, explanation: "Players are responsible for defending their assigned area of the pitch." },
      { question: "How do defenders behave when an opponent leaves their zone?", options: ["They follow them across the pitch", "They let them go and alert their teammate in the next zone", "They commit a tactical foul", "They stop defending"], correctIndex: 1, explanation: "They hand the opponent over to the teammate responsible for the next zone, maintaining their shape." },
      { question: "Who famously revolutionized zonal defending with AC Milan?", options: ["Diego Maradona", "Arrigo Sacchi", "Jose Mourinho", "Marcelo Bielsa"], correctIndex: 1, explanation: "Arrigo Sacchi's compact zonal-marking system at Milan revolutionized modern defensive tactics." },
      { question: "What is a main advantage of Zonal Marking?", options: ["It uses fewer defenders", "It preserves defensive shape and covers central spaces", "It is very easy to learn", "It doesn't require running"], correctIndex: 1, explanation: "Since defenders stay in their zones, the defensive block remains compact and organized." },
      { question: "What is a risk of Zonal Marking?", options: ["No wing play", "Opponents can create overloads (2v1) in a single zone", "Defenders run too much", "Strikers get isolated"], correctIndex: 1, explanation: "If two attackers enter one zone and the defenders don't communicate, a 2v1 overload is created." }
    ]
  },
  "hybrid-marking": {
    slug: "hybrid-marking",
    title: "Hybrid Marking",
    description: "Combining man-marking and zonal marking to defend complex sets.",
    introduction: "Hybrid Marking blends man-marking and zonal marking. Typically, some players cover key zones (like the posts), while others man-mark the opponent's best headers.",
    image: "/images/tactics/hybrid.png",
    keyElements: ["Zonal blocks", "Man-marking blockers", "Set piece utility", "Coordinated coverage"],
    sections: [
      { heading: "Set Piece Defense", content: "During corners, a team might place three players in zonal positions (near post, center, far post) to clear any balls in those areas, while five other players man-mark runners." },
      { heading: "Open Play Application", content: "In open play, midfielders might zonal-press, while a defender is assigned to strictly man-mark the opponent's main playmaker." }
    ],
    quizQuestions: [
      { question: "What is Hybrid Marking?", options: ["Defenders marking the referee", "Combining man-marking and zonal marking principles", "Only marking with fullbacks", "None"], correctIndex: 1, explanation: "Hybrid marking combines zonal space coverage with strict man-marking duties." },
      { question: "Where is hybrid marking most commonly seen?", options: ["During goal kicks", "Defending set pieces (like corners)", "In the opponent's half", "Only in youth leagues"], correctIndex: 1, explanation: "Set-piece defense is where hybrid setups are most frequently used to protect key zones and mark runners." },
      { question: "What do the zonal players do during a corner in a hybrid system?", options: ["Chaser runners", "Stand in key areas (like the near post) to clear incoming balls", "Mark the kicker", "Sit on the line"], correctIndex: 1, explanation: "Zonal blockers stand in high-danger zones to clear any aerial deliveries." },
      { question: "What is a benefit of hybrid marking?", options: ["It confuses your own goalkeeper", "It combines the space-cover of zones with the 1v1 protection of man-marking", "It requires no training", "It uses more players"], correctIndex: 1, explanation: "It offers the strengths of both systems: blocking dangerous zones while tracking dangerous runners." },
      { question: "What is a failure point of hybrid marking?", options: ["Lack of communication leading to unmarked runners", "Having too many players in goal", "Getting caught offside", "Fouling the kicker"], correctIndex: 0, explanation: "If players confuse their duties (marking zone vs tracking player), opponents can run free." }
    ]
  },
  "park-the-bus": {
    slug: "park-the-bus",
    title: "Parking the Bus",
    description: "An extreme low block prioritizing defensive numbers over any attack.",
    introduction: "Parking the Bus is a colloquial term for an ultra-defensive low block. The team places all 10 outfield players in or around their own penalty box, completely giving up possession to prevent conceding.",
    image: "/images/tactics/park-the-bus.png",
    keyElements: ["10-man defensive wall", "Box congestion", "Zero attacking intent", "Time wasting"],
    sections: [
      { heading: "Maximum Congestion", content: "The objective is to pack the penalty area with bodies. This leaves no room for opponents to pass, dribble, or shoot cleanly, forcing them to take low-probability long-range shots." },
      { heading: "Attacking Sacrifice", content: "The team completely sacrifices possession and attack. The striker defends in their own half, and won balls are simply cleared long to clear lines." }
    ],
    quizQuestions: [
      { question: "What does 'Parking the Bus' mean?", options: ["Driving a team bus onto the pitch", "Defending with all players packed deep inside your own box", "Attacking in numbers", "A training drill"], correctIndex: 1, explanation: "It is an informal term for a highly defensive block focused entirely on protecting the goal." },
      { question: "Who famously coined the phrase 'Park the bus'?", options: ["Alex Ferguson", "Jose Mourinho", "Pep Guardiola", "Arsene Wenger"], correctIndex: 1, explanation: "Mourinho famously used the phrase to describe Tottenham's defensive style against Chelsea in 2004." },
      { question: "What is the primary goal of parking the bus?", options: ["To win 5-0", "To secure a clean sheet / draw by blocking all scoring routes", "To keep possession", "To entertain fans"], correctIndex: 1, explanation: "It is used to hold onto a lead or secure a draw by blocking every path to goal." },
      { question: "What type of shots are opponents forced to take?", options: ["Clean 1v1s", "Low-probability shots from outside a crowded box", "Penalties", "None"], correctIndex: 1, explanation: "A crowded penalty area blocks clear sights of goal, forcing opponents to shoot from distance through bodies." },
      { question: "What is a risk of this extreme tactic?", options: ["Too many offside calls", "Conceding a late goal due to relentless pressure", "Getting yellow cards for possession", "Conserving too much energy"], correctIndex: 1, explanation: "Defending deep for 90 minutes invites constant pressure, making a mistake or deflection highly likely." }
    ]
  },
  "compact-defense": {
    slug: "compact-defense",
    title: "Compact Defense",
    description: "Maintaining tight horizontal and vertical spacing to block passing lanes.",
    introduction: "A Compact Defense focuses on spacing. The team keeps the distances between lines (defense, midfield, attack) and players extremely tight, denying opponents any room to play in between.",
    image: "/images/tactics/compact-defense.png",
    keyElements: ["Tight vertical lines (10-15m)", "Tight horizontal width", "Coordinated shifting", "Central restriction"],
    sections: [
      { heading: "Vertical Spacing", content: "The distance between the defensive line and the forward line is kept between 15 to 25 yards. This makes it impossible for opposing midfielders to find space between the lines." },
      { heading: "Shifting as a Unit", content: "When the ball moves, the entire defensive block shifts together like a pendulum. If the ball is on the right, the left-winger tucks inside to maintain compactness." }
    ],
    quizQuestions: [
      { question: "What is the key to a Compact Defense?", options: ["Spreading players across the entire pitch", "Keeping tight distances between players and lines", "Playing without center-backs", "Man-marking the goalkeeper"], correctIndex: 1, explanation: "Compactness is keeping vertical and horizontal lines close together to block passing channels." },
      { question: "What distance is typically maintained between lines in a compact block?", options: ["15-25 yards", "50 yards", "100 yards", "None"], correctIndex: 0, explanation: "Lines are kept very close (15-25 yards) to prevent opponents from receiving passes in between." },
      { question: "How does a compact defense react when the ball moves wide?", options: ["They stay in the center", "The entire block shifts collectively toward the ball side", "They drop to the goal line", "They split up"], correctIndex: 1, explanation: "The team shifts as a unit toward the ball side to crowd the active space." },
      { question: "What space is intentionally conceded in a compact defense?", options: ["The penalty box", "The far flank (wings)", "The central midfield", "The goal mouth"], correctIndex: 1, explanation: "Compact defenses crowd the center and allow opponents to have the ball on the opposite wing, where they are less dangerous." },
      { question: "Which term describes a team's vertical and horizontal contraction?", options: ["Stretching", "Compactness", "Overlap", "Gegenpress"], correctIndex: 1, explanation: "Compactness refers to how tightly compressed the team block is." }
    ]
  },
  "offside-trap": {
    slug: "offside-trap",
    title: "The Offside Trap",
    description: "Stepping up in unison to catch opposing runs behind the defense.",
    introduction: "The Offside Trap is a coordinated defensive movement. Just before an opponent plays a forward pass, the entire backline steps forward in unison, leaving the running attacker in an offside position.",
    image: "/images/tactics/offside-trap.png",
    keyElements: ["Defensive synchronization", "Step-up trigger", "Defense line leadership", "High risk-reward"],
    sections: [
      { heading: "Coordinated Stepping", content: "The defensive line must act as a single unit. A single defender stepping late ruins the trap and plays the opponent onside, creating a clean 1v1." },
      { heading: "The Trigger", content: "The trap is triggered when an opposing passer is under pressure and about to hit a direct long ball. Defenders step up just as the passer makes contact." }
    ],
    quizQuestions: [
      { question: "How does the Offside Trap work?", options: ["Defenders run back to protect the goal", "The backline steps forward in unison to leave attackers offside", "The keeper catches the ball outside the box", "Defenders tackle from behind"], correctIndex: 1, explanation: "Stepping up just before the pass leaves the attacker ahead of the second-last defender." },
      { question: "What happens if one defender steps up late?", options: ["The referee gives a card", "The offside trap fails, playing the attacker onside", "The keeper gets a free kick", "Nothing"], correctIndex: 1, explanation: "All defenders must step in sync; one late player keeps the attacker onside, creating a dangerous 1v1." },
      { question: "Who typically directs the offside trap?", options: ["The goalkeeper", "The defensive leader (usually a center-back)", "The coach", "The striker"], correctIndex: 1, explanation: "The defensive leader coordinates the line, calling when to step up." },
      { question: "When is the best time to trigger the offside trap?", options: ["When the passer is free with no pressure", "When the passer is pressed and forced to play a direct ball", "During a throw-in", "After a goal"], correctIndex: 1, explanation: "Pressuring the passer prevents them from timing the pass to beat the step-up." },
      { question: "Which manager famously perfected the offside trap in the 1990s?", options: ["Arrigo Sacchi (Milan) / George Graham (Arsenal)", "Pep Guardiola", "Jose Mourinho", "Carlo Ancelotti"], correctIndex: 0, explanation: "George Graham's Arsenal and Arrigo Sacchi's Milan were legendary for their highly synchronized offside traps." }
    ]
  },
  "sweeper-system": {
    slug: "sweeper-system",
    title: "The Sweeper System",
    description: "Using a dedicated free defender behind the main backline.",
    introduction: "The Sweeper System uses a free defender (the Libero) who sits behind the defensive line. Their job is to 'sweep up' any passes or attackers that break through the main defense.",
    image: "/images/tactics/sweeper.png",
    keyElements: ["Free defender positioning", "Intercepting through balls", "Defensive leadership", "Buildup from deep"],
    sections: [
      { heading: "The Sweeper's Role", content: "Unlike man-marking defenders, the sweeper has no marking duties. They read the game from deep, covering spaces behind teammates and clearing loose balls." },
      { heading: "Evolution", content: "While common in Catenaccio systems, the modern sweeper keeper has largely replaced the traditional outfield sweeper by covering space behind high defensive lines." }
    ],
    quizQuestions: [
      { question: "What is the primary role of a Sweeper?", options: ["Mark the opposing striker", "Sweep up loose balls and cover spaces behind the defensive line", "Play as attacking midfielder", "Take penalties"], correctIndex: 1, explanation: "The sweeper is a free defender who tidies up any breakthroughs behind the backline." },
      { question: "What is the Italian term for a sweeper who also joins the attack?", options: ["Regista", "Libero", "Trequartista", "Mezzala"], correctIndex: 1, explanation: "Libero means 'free' — a sweeper allowed to carry the ball forward into midfield." },
      { question: "Why has the outfield sweeper disappeared in modern football?", options: ["It is illegal", "The offside trap and modern systems make it obsolete", "Sweepers are too slow", "No one wants to play it"], correctIndex: 1, explanation: "Holding a flat backline is better for the offside trap. A sweeper sitting deep would play everyone onside." },
      { question: "Who has taken over the sweeper's duties in modern teams?", options: ["The striker", "The sweeper keeper", "The referee", "The wide midfielders"], correctIndex: 1, explanation: "Modern goalkeepers play high out of their box, acting as the sweeper to clear deep balls." },
      { question: "Which legendary German player is considered the greatest Libero/Sweeper?", options: ["Oliver Kahn", "Franz Beckenbauer", "Thomas Muller", "Bastian Schweinsteiger"], correctIndex: 1, explanation: "Franz 'Der Kaiser' Beckenbauer perfected the Libero role, winning World Cups as a sweeper who dominated play." }
    ]
  },
  "cover-shadow": {
    slug: "cover-shadow",
    title: "Cover Shadow Defending",
    description: "Blocking passing routes behind oneself while closing down the ball carrier.",
    introduction: "Cover Shadow is a defensive positioning technique. A player presses the ball carrier while positioning their body to block the passing lane to an opponent sitting behind them.",
    image: "/images/tactics/cover-shadow.png",
    keyElements: ["Passing lane blocking", "Body orientation", "Interception positioning", "Pressing efficiency"],
    sections: [
      { heading: "The Shadow Concept", content: "Think of the pressing player as casting a 'shadow' behind them. Any opponent sitting in this shadow cannot receive a pass, allowing the defender to mark two players at once." },
      { heading: "Body Positioning", content: "The defender must orient their body correctly, keeping the ball carrier in front of them and the passing target directly behind their back." }
    ],
    quizQuestions: [
      { question: "What is a 'Cover Shadow' in defending?", options: ["Tackling from behind", "Positioning your body to block a passing lane to an opponent behind you while pressing", "Marking the referee", "Blocking the keeper's view"], correctIndex: 1, explanation: "It uses the defender's body position as an obstacle to block passes to players behind them." },
      { question: "How does cover shadow defending save team energy?", options: ["Players do not need to run", "One defender can cut off two players (the ball carrier and the receiver)", "It stops the match clock", "None"], correctIndex: 1, explanation: "By blocking passing lanes with positioning, you don't need a second defender to mark the receiver." },
      { question: "What must a defender watch when using a cover shadow?", options: ["Only the ball", "The ball carrier and the position of the player behind them", "The coach", "The stands"], correctIndex: 1, explanation: "Defenders must maintain awareness of what is behind them to adjust their shadow." },
      { question: "Which position relies heavily on cover shadows?", options: ["Goalkeepers", "Midfielders and forwards when pressing from the front", "Strikers in the box", "Wingers crossing"], correctIndex: 1, explanation: "Forwards and central midfielders use cover shadows to block passes into the opponent's midfield during buildup." },
      { question: "What happens if the defender's body angle is incorrect?", options: ["The opponent scores", "The passing lane opens, and the cover shadow is broken", "A penalty is awarded", "Nothing"], correctIndex: 1, explanation: "Correct body orientation is critical; a slight shift opens the passing lane to the target behind." }
    ]
  }
};
