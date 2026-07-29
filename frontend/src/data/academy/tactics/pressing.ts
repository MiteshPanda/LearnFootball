import { QuizQuestion } from "@/components/academy/LessonQuiz";
import { TacticLesson } from "./attacking";

export const pressingTactics: Record<string, TacticLesson> = {
  "gegenpress": {
    slug: "gegenpress",
    title: "Gegenpress",
    description: "The German philosophy of pressing immediately upon turnover.",
    introduction: "Gegenpress is the systematic German philosophy of counter-pressing. The moment possession is lost, the entire team hunts the ball collectively to win it back in the opponent's transition phase.",
    image: "/images/tactics/gegenpress-sys.png",
    keyElements: ["Collective hunting", "Squeezing recovery zones", "Exploiting transition shock", "High physical intensity"],
    sections: [
      { heading: "The Philosophy", content: "Coined in Germany, Gegenpressing is based on the idea that the opponent is most vulnerable when they have just won the ball, as they are spreading out to attack." },
      { heading: "Execution", content: "It requires all players to react within a split second. If even one player hesitates, the opponent can escape the pressure and exploit the high line." }
    ],
    quizQuestions: [
      { question: "What is the translation of 'Gegenpress'?", options: ["Deep defense", "Counter-press", "Wing play", "Goal protection"], correctIndex: 1, explanation: "Gegenpress is German for counter-pressing." },
      { question: "Which German team popularized Gegenpress in the early 2010s?", options: ["Bayern Munich", "Borussia Dortmund", "Schalke 04", "Werder Bremen"], correctIndex: 1, explanation: "Jurgen Klopp's Borussia Dortmund used the Gegenpress to win back-to-back Bundesliga titles." },
      { question: "Why is the opponent vulnerable during a turnover?", options: ["They are out of defensive shape", "They are celebrating", "They are looking at the referee", "None"], correctIndex: 0, explanation: "Winning the ball means players are spreading out to attack, leaving their defensive structure open." },
      { question: "What physical attribute is most vital for Gegenpress?", options: ["Heading ability", "Elite stamina and sprint speed", "Height", "Strength only"], correctIndex: 1, explanation: "Constant sprinting and pressing require elite stamina and physical conditioning." },
      { question: "What is the key to a successful Gegenpress?", options: ["Individual sprints", "Collective, synchronized team movement", "Waiting for backpasses", "Staying in your box"], correctIndex: 1, explanation: "Gegenpressing must be done as a synchronized unit, or the opponent will easily pass through the gaps." }
    ]
  },
  "counter-press": {
    slug: "counter-press",
    title: "Counter-Press",
    description: "Short-term aggressive pressing immediately after possession loss.",
    introduction: "Counter-pressing is the tactical action of putting immediate pressure on the ball after a turnover. It is a short, sharp burst of intensity designed to recover the ball or stop a counter-attack.",
    image: "/images/tactics/counter-press.png",
    keyElements: ["Immediate pressure", "Tactical fouling alternative", "Squeezing ball space", "Preventing long balls"],
    sections: [
      { heading: "The Action", content: "When a pass is intercepted, the closest 2-3 players sprint to close down the receiver, while others cut off nearby short passing options." },
      { heading: "Stopping the Break", content: "Even if you don't win the ball, counter-pressing forces the opponent to play backward or kick it out, successfully halting their counter-attack." }
    ],
    quizQuestions: [
      { question: "What is the main goal of counter-pressing?", options: ["Drop back to defend", "Win the ball back immediately or stop the opponent's counter-attack", "Allow the goalie to play", "Get yellow cards"], correctIndex: 1, explanation: "It aims to stop the break at the source, either recovering the ball or forcing a safe halt." },
      { question: "How does counter-pressing prevent counter-attacks?", options: ["By delaying the opponent's forward pass", "By committing red card fouls", "By running to your own goal", "By letting them score"], correctIndex: 0, explanation: "Putting pressure on the ball carrier prevents them from playing a clean through-ball to their forwards." },
      { question: "Who initiates the counter-press?", options: ["The center-backs", "The players closest to the ball at the moment of turnover", "The goalkeeper", "The captain only"], correctIndex: 1, explanation: "The players nearest to the turnover must react instantly to pressure the ball." },
      { question: "What is a 'tactical foul' in this context?", options: ["A clean tackle", "Fouling the opponent deliberately to stop a dangerous transition", "An offside call", "A diving header"], correctIndex: 1, explanation: "If the counter-press is beaten, players sometimes commit a minor foul to stop the break." },
      { question: "How long does a team sustain a counter-press before dropping back?", options: ["1 minute", "5-8 seconds", "30 seconds", "Until the ball goes out"], correctIndex: 1, explanation: "If the ball isn't won within 5-8 seconds, the team must drop back into their defensive block." }
    ]
  },
  "high-press": {
    slug: "high-press",
    title: "High Pressing",
    description: "Engaging opponents high in their half to choke off passing lines.",
    introduction: "High Pressing focuses on disrupting the opponent's buildup deep in their territory. Players mark passing options and pressure defenders to win the ball close to the opponent's goal.",
    image: "/images/tactics/high-press-sys.png",
    keyElements: ["High defensive line", "Forwards leading pressure", "Man-to-man coverage", "Keeper pressure"],
    sections: [
      { heading: "Squeezing Buildup", content: "Attackers press center-backs and the goalkeeper. Midfielders push up to mark opposing midfielders, leaving no short passing routes." },
      { heading: "Forcing Long Balls", content: "By blocking all short passes, the opponent is forced to hit long aerial clearances, which the pressing team's center-backs can easily win." }
    ],
    quizQuestions: [
      { question: "Which players initiate a high press?", options: ["The center-backs", "The forwards and attacking midfielders", "The goalkeeper", "The fullbacks only"], correctIndex: 1, explanation: "Forwards lead the line, pressing center-backs and forcing play." },
      { question: "What passing option is deliberately closed in high pressing?", options: ["Long clearances", "Short passes to nearby teammates", "Goal kicks", "Throw-ins"], correctIndex: 1, explanation: "By closing short options, you force the opponent to take risky passes or kick long." },
      { question: "Who wins the long clearances forced by a high press?", options: ["The strikers", "The center-backs sitting near the halfway line", "The opposing keeper", "No one"], correctIndex: 1, explanation: "Center-backs easily collect long, unstructured clearances forced by the pressure." },
      { question: "What is a requirement of high pressing?", options: ["A low defensive line", "A high defensive line to compress the pitch", "Parking the bus", "Zonal marking only"], correctIndex: 1, explanation: "The defensive line must sit high to keep the team compact and prevent space in midfield." },
      { question: "Which manager famously uses high pressing to win possession?", options: ["Diego Simeone", "Pep Guardiola", "Sean Dyche", "Sam Allardyce"], correctIndex: 1, explanation: "Guardiola's Barca and Man City sides use high pressing as a primary tool to dominate games." }
    ]
  },
  "midfield-press": {
    slug: "midfield-press",
    title: "Midfield Pressing",
    description: "Waiting to activate pressure until the ball enters the central zone.",
    introduction: "Midfield Pressing is a structured defensive trigger. The team allows opponent defenders to pass sideways, but triggers intense double-teams the moment the ball enters the midfield zone.",
    image: "/images/tactics/midfield-press.png",
    keyElements: ["Midfield zone traps", "Blocking center lanes", "Letting defenders pass", "Coordinated midfield shifts"],
    sections: [
      { heading: "Midfield Block", content: "The team sets up in a compact mid-block. The forwards stay passive, but central midfielders are ready to snap into tackles once a pass is attempted to opposing midfielders." },
      { heading: "Interception Focus", content: "Focuses on intercepting central passes, allowing for immediate counter-attacks through the center of the pitch." }
    ],
    quizQuestions: [
      { question: "What is the trigger for a Midfield Press?", options: ["The goalie touching the ball", "A pass entering the middle third of the pitch", "The referee checking VAR", "An offside call"], correctIndex: 1, explanation: "The press is activated when the opponent tries to build through the midfield." },
      { question: "How do forwards behave in a midfield press?", options: ["They sprint at center-backs", "They block passing lanes to the midfield while standing off", "They drop to the goal line", "They stay wide"], correctIndex: 1, explanation: "They act as shields, preventing passes into midfield while letting defenders pass to each other." },
      { question: "What is a main advantage of midfield pressing?", options: ["It uses no energy", "It creates central turnovers with space to attack", "It has no defenders", "It allows hands"], correctIndex: 1, explanation: "Winning the ball in midfield catches the opponent's fullbacks pushed wide, creating counter lanes." },
      { question: "What zone is heavily protected in this system?", options: ["The wings", "The center of the pitch", "The penalty spot", "Their own box"], correctIndex: 1, explanation: "Midfield presses focus on closing down central passing channels." },
      { question: "How does the team shift in a midfield press?", options: ["They do not shift", "As a compact unit toward the ball side", "They run back", "They spread wide"], correctIndex: 1, explanation: "They shift as a block to choke space around the ball receiver in midfield." }
    ]
  },
  "trigger-press": {
    slug: "trigger-press",
    title: "Trigger Pressing",
    description: "Pressing when specific indicators occur (backpass, bad touch).",
    introduction: "Trigger Pressing uses specific visual cues ('triggers') to start the press. Instead of pressing constantly, the team waits for an opponent to make a mistake or get into a vulnerable position before swarming.",
    image: "/images/tactics/trigger-press.png",
    keyElements: ["Bad touch trigger", "Backpass to keeper trigger", "Touchline trap trigger", "Synchronized acceleration"],
    sections: [
      { heading: "The Pressing Triggers", content: "Common triggers include: a pass to a weak technical defender, a player receiving the ball facing their own goal, a slow pass, or a bad touch. The second this happens, the closest player sprints to press." },
      { heading: "Coordinated Response", content: "When one player presses the trigger, teammates must immediately mark the nearby passing options, closing all escape routes." }
    ],
    quizQuestions: [
      { question: "What is a 'pressing trigger'?", options: ["A card from the ref", "A specific opponent action that signals the start of the press", "A whistle from the coach", "A tactical foul"], correctIndex: 1, explanation: "A trigger is a visual cue (like a bad touch) that tells the team to start pressing." },
      { question: "Which of the following is a common pressing trigger?", options: ["A perfect cross", "A player receiving the ball facing their own goal", "A goal celebration", "A throw-in out of play"], correctIndex: 1, explanation: "A player facing their own goal cannot see what is behind them, making them easy to dispossess." },
      { question: "Why is a pass to the opponent's goalkeeper a trigger?", options: ["The goalie is not allowed to kick", "Goalkeepers are often less skilled with the ball under pressure", "The goalie will run out of play", "None"], correctIndex: 1, explanation: "Pressing the goalkeeper forces them to make a quick decision, often leading to a long, inaccurate clearance." },
      { question: "What must teammates do when a trigger is pressed?", options: ["Drop back", "Immediately mark nearby passing options", "Celebrate", "Watch the presser"], correctIndex: 1, explanation: "Teammates must shut down passing options to trap the ball carrier." },
      { question: "What is the benefit of trigger pressing?", options: ["It saves energy compared to constant pressing", "It guarantees goals", "It is very slow", "It has no rules"], correctIndex: 0, explanation: "By only pressing during vulnerable moments, players conserve energy for key transitions." }
    ]
  },
  "trap-press": {
    slug: "trap-press",
    title: "Pressing Traps",
    description: "Funneling the ball to specific areas to double-team the player.",
    introduction: "A Pressing Trap is a trap set by the defending team. They intentionally leave a passing lane open to a specific opponent, then immediately double-team them the second the ball is passed.",
    image: "/images/tactics/pressing-trap.png",
    keyElements: ["Baiting passes", "Touchline isolation", "Double-team timing", "Interception traps"],
    sections: [
      { heading: "The Bait", content: "The defending team leaves a midfielder slightly open, baiting the opponent into passing to them. As the ball travels, two defenders close in from different angles." },
      { heading: "The Touchline Trap", content: "Teams often use the touchline as an extra defender. They funnel play wide, block backward passes, and trap the fullback against the sideline." }
    ],
    quizQuestions: [
      { question: "What is a Pressing Trap?", options: ["An offside call", "Intentionally baiting a pass to a player, then swarming them", "A sliding tackle", "Parking the bus"], correctIndex: 1, explanation: "Pressing traps lure the opponent into playing a pass into a pre-arranged trap zone." },
      { question: "Which boundary is commonly used as an extra defender in traps?", options: ["The goal line", "The touchline (sideline)", "The center line", "The penalty box line"], correctIndex: 1, explanation: "The touchline limits the player's movement, making it easy to trap them." },
      { question: "How do defenders behave before a trap is sprung?", options: ["They press immediately", "They position themselves to look passive, leaving the passing lane open", "They stand offside", "They drop to the goal line"], correctIndex: 1, explanation: "They leave the target player slightly open to invite the pass." },
      { question: "What is required from defenders to make a trap work?", options: ["Only speed", "Excellent timing, communication, and synchronization", "Height", "Strong tackles"], correctIndex: 1, explanation: "Defenders must close down in sync as the ball travels to prevent the receiver from turning." },
      { question: "Where are pressing traps usually set?", options: ["Deep in own box", "On the wings or in central midfield", "In the opponent's net", "Nowhere"], correctIndex: 1, explanation: "Wing channels and central midfield are key areas to trap ball carriers." }
    ]
  },
  "man-oriented-press": {
    slug: "man-oriented-press",
    title: "Man-Oriented Pressing",
    description: "Pressing setup where players match up 1v1 with nearby options.",
    introduction: "Man-Oriented Pressing applies 1v1 marking during the press. Each pressing player tightly covers a nearby passing option, forcing the ball carrier to make a risky pass or go long.",
    image: "/images/tactics/man-press.png",
    keyElements: ["1v1 pressing markers", "Buildup disruption", "Physical pressing duels", "Tight space tracking"],
    sections: [
      { heading: "Defending Options", content: "When the opponent builds from the back, each attacker and midfielder matches up directly with a defender or midfielder. This leaves no short passing outlets." },
      { heading: "Disadvantages", content: "If an opponent beats their marker in a 1v1, the entire press is broken, leaving the defense exposed." }
    ],
    quizQuestions: [
      { question: "What is Man-Oriented Pressing?", options: ["Marking zones", "Matching up 1v1 with passing options during the press", "Chasing the goalie only", "None"], correctIndex: 1, explanation: "It marks passing outlets 1v1 to prevent short buildup options." },
      { question: "What does this press force the goalkeeper to do?", options: ["Pass short", "Kick the ball long under pressure", "Throw the ball out", "Run forward"], correctIndex: 1, explanation: "With all close options marked 1v1, the goalkeeper is forced to kick long." },
      { question: "What is a main risk of man-oriented pressing?", options: ["No strikers", "If one player is beaten in a 1v1, the press is broken", "Getting caught offside", "Conserving too much energy"], correctIndex: 1, explanation: "Losing a 1v1 duel leaves the remaining defenders outnumbered." },
      { question: "Which coach famously uses high-energy man-oriented pressing?", options: ["Carlo Ancelotti", "Marcelo Bielsa", "Jose Mourinho", "Roy Hodgson"], correctIndex: 1, explanation: "Marcelo Bielsa's teams are legendary for their intense man-to-man pressing systems." },
      { question: "What is required from players in this system?", options: ["Patience", "Elite physical fitness and 1v1 defensive capability", "Only size", "Strong headers"], correctIndex: 1, explanation: "Tracking players 1v1 requires incredible stamina and defensive workrate." }
    ]
  },
  "zonal-press": {
    slug: "zonal-press",
    title: "Zonal Pressing",
    description: "Pressing as a unit to cut off passing options in a target zone.",
    introduction: "Zonal Pressing focuses on space. Instead of marking individual players, the team shifts as a compact unit to close down spaces and block passing lanes around the ball.",
    image: "/images/tactics/zonal-press.png",
    keyElements: ["Zonal compact shifting", "Block coordination", "Cutting off lanes", "Collective movement"],
    sections: [
      { heading: "Shifting to the Ball", content: "The team maintains their compact shape and moves toward the ball. The objective is to surround the ball zone, cutting off all passing lanes." },
      { heading: "Space Denial", content: "By defending zones, the team ensures that even if opponents rotate positions, the defensive shape remains solid and protected." }
    ],
    quizQuestions: [
      { question: "What is Zonal Pressing?", options: ["Tracking players 1v1", "Pressing the space and passing lanes around the ball as a unit", "Staying in your own box", "Only pressing on corners"], correctIndex: 1, explanation: "It prioritizes closing passing lanes and space over tracking individual players." },
      { question: "How does the team move in a zonal press?", options: ["They split up", "They shift collectively as a compact block toward the ball side", "They stay in their positions", "They run backward"], correctIndex: 1, explanation: "Collective shifting ensures that spaces surrounding the ball are always closed." },
      { question: "Who popularized zonal pressing in Italy?", options: ["Arrigo Sacchi", "Jose Mourinho", "Marcelo Bielsa", "Antonio Conte"], correctIndex: 0, explanation: "Arrigo Sacchi used zonal pressing to dominate with his legendary AC Milan team." },
      { question: "What is a key benefit of zonal pressing?", options: ["It uses no energy", "It keeps the team's defensive structure organized and hard to penetrate", "It has no rules", "It uses more players"], correctIndex: 1, explanation: "Maintaining zonal structure prevents defenders from being dragged out of position." },
      { question: "What is a risk of zonal pressing?", options: ["Opponent overloads on the weak side", "Getting caught offside", "Conceding corner kicks", "None"], correctIndex: 0, explanation: "Since the block shifts toward the ball, the opposite wing is left open to long diagonal switches." }
    ]
  },
  "ball-oriented-press": {
    slug: "ball-oriented-press",
    title: "Ball-Oriented Pressing",
    description: "Compressing space immediately surrounding the position of the ball.",
    introduction: "Ball-Oriented Pressing ignores opponent positions and focuses purely on the ball. The team converges on the ball's location, crowding the carrier and intercepting any escape passes.",
    image: "/images/tactics/ball-press.png",
    keyElements: ["Ball convergence", "Squeezing ball zone", "Ignoring distant opponents", "High density press"],
    sections: [
      { heading: "Squeezing the ball", content: "Wherever the ball is, players close in. The objective is to create a high-density circle of pressure around the ball carrier, leaving them no room to breathe." },
      { heading: "Ignoring the Far Side", content: "Opponents on the opposite side of the pitch are completely ignored. The team bets that the ball carrier cannot make a long pass under such intense pressure." }
    ],
    quizQuestions: [
      { question: "What is the focus of Ball-Oriented Pressing?", options: ["Tracking players 1v1", "The location of the ball, compressing space around it", "Defending the goalposts", "Set pieces"], correctIndex: 1, explanation: "It targets the ball's location, crowding the carrier and cutting off close escapes." },
      { question: "What happens to opponents on the opposite side of the pitch?", options: ["They are man-marked", "They are ignored to focus numbers around the ball", "They are fouled", "They are offside"], correctIndex: 1, explanation: "The team concedes the far side of the pitch, banking on the ball carrier being unable to switch play." },
      { question: "What does this press require from the ball carrier's teammates?", options: ["Nothing", "To make short support runs", "To stand still", "To run out of play"], correctIndex: 1, explanation: "Teammates must try to make themselves available, but the press aims to cut off those close passing lanes." },
      { question: "What is a major risk of ball-oriented pressing?", options: ["A long switch of play to an unmarked player on the far side", "Too many throw-ins", "Defenders running into each other", "None"], correctIndex: 0, explanation: "If the ball carrier manages to switch play to the opposite wing, the opponent has acres of empty space." },
      { question: "What does this pressing style look like visually?", options: ["A flat line", "A swarm of players surrounding the ball", "A circle around the center circle", "A triangle"], correctIndex: 1, explanation: "It looks like a swarm of players converging on the ball carrier from all angles." }
    ]
  }
};
