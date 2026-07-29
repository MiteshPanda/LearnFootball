import { QuizQuestion } from "@/components/academy/LessonQuiz";
import { TacticLesson } from "./attacking";

export const philosophiesTactics: Record<string, TacticLesson> = {
  "michels-total-football": {
    slug: "michels-total-football",
    title: "Rinus Michels' Total Football",
    description: "The space-centric Ajax and Dutch philosophy of fluid positional rotations.",
    introduction: "Rinus Michels developed 'Total Football' in the 1970s. The core idea was that players could swap positions fluidly during a match, creating space and confusing opponent marking.",
    image: "/images/tactics/michels.png",
    keyElements: ["Fluid rotations", "Space creation", "High offside line", "Aggressive pressing"],
    sections: [
      { heading: "Space Management", content: "Michels believed that space was the most important element. When attacking, you make the pitch as large as possible; when defending, you squeeze it." },
      { heading: "Positional Interchange", content: "Outfield players had to be comfortable in defense, midfield, and attack, as they rotated constantly." }
    ],
    quizQuestions: [
      { question: "Which coach is credited with inventing Total Football?", options: ["Pep Guardiola", "Rinus Michels", "Johan Cruyff", "Arrigo Sacchi"], correctIndex: 1, explanation: "Rinus Michels developed the system with Ajax and the Dutch national team." },
      { question: "What is the key positional rule in Total Football?", options: ["Defenders never attack", "Players can rotate fluidly if the shape is maintained", "No midfielders", "None"], correctIndex: 1, explanation: "Outfield players rotate positions dynamically, covering for teammates." },
      { question: "What was Michels' focus regarding space?", options: ["Ignore it", "Make the pitch large in attack, and compress it in defense", "Only play in the center", "None"], correctIndex: 1, explanation: "Manipulating space was the core defensive and offensive tool." },
      { question: "Which team reached the World Cup Final in 1974 using this style?", options: ["Brazil", "West Germany", "The Netherlands", "Italy"], correctIndex: 2, explanation: "The Dutch 'Clockwork Orange' side wowed the world in 1974." },
      { question: "What does Total Football require from players?", options: ["Only running speed", "Complete technical and defensive versatility", "Height", "None"], correctIndex: 1, explanation: "Since players swap, everyone must know how to defend and attack." }
    ]
  },
  "cruyff-positional-football": {
    slug: "cruyff-positional-football",
    title: "Johan Cruyff's Positional Football",
    description: "Cruyff's style based on triangles, diamond midfields, and style.",
    introduction: "Johan Cruyff modernized Total Football at Barcelona. He introduced the diamond midfield, focused on passing triangles, and believed that winning was nothing without style.",
    image: "/images/tactics/cruyff.png",
    keyElements: ["Passing triangles", "Diamond midfield", "Style first", "Keeper participation"],
    sections: [
      { heading: "The Diamond Midfield", content: "Cruyff used a 3-4-3 diamond. This shape created passing triangles across the pitch, making it easy to retain possession." },
      { heading: "Style over Results", content: "Cruyff famously stated: 'Winning is an important thing, but to have your own style, to have people copy you... that is the greatest gift.'" }
    ],
    quizQuestions: [
      { question: "What midfield shape did Cruyff favor in his 3-4-3?", options: ["Flat line", "A diamond shape", "A box shape", "Double pivot"], correctIndex: 1, explanation: "Cruyff's 3-4-3 used a diamond midfield to maximize passing lanes." },
      { question: "Which club did Cruyff manage to create the 'Dream Team' in the 1990s?", options: ["Ajax", "FC Barcelona", "Real Madrid", "AC Milan"], correctIndex: 1, explanation: "Cruyff led Barcelona's 'Dream Team' to their first European Cup in 1992." },
      { question: "What was Cruyff's view on possession?", options: ["It is not important", "If you have the ball, the opponent cannot score", "It is only for defense", "None"], correctIndex: 1, explanation: "Keeping the ball was both the main attacking and defensive strategy." },
      { question: "What is a passing triangle?", options: ["Passing to the corner flags", "Positioning players to always have two passing outlets", "A clearance", "None"], correctIndex: 1, explanation: "Triangles ensure the ball carrier has two direct pass options." },
      { question: "Cruyff believed that football should be...?", options: ["Defensive and boring", "An entertaining spectacle", "Physical and direct", "None"], correctIndex: 1, explanation: "Cruyff believed that football should be beautiful and entertaining for fans." }
    ]
  },
  "guardiola-juego-posicion": {
    slug: "guardiola-juego-posicion",
    title: "Pep Guardiola's Juego de Posición",
    description: "Pep's rigid space structures that create free men on the pitch.",
    introduction: "Pep Guardiola took Cruyff's ideas and created 'Juego de Posición'. It is a highly structured space-possession system designed to create the 'Free Man' through positional discipline.",
    image: "/images/tactics/pep.png",
    keyElements: ["Pitch grids", "Positional discipline", "Creating the 'Free Man'", "The 3rd-man link"],
    sections: [
      { heading: "Positional Discipline", content: "Players must hold their zones. If a winger drifts inside, the fullback must stay wide. This keeps the pitch stretched and creates passing options." },
      { heading: "The 3-Second Rule", content: "Guardiola demands immediate counter-pressing within 3 seconds of losing the ball to stop counters at the source." }
    ],
    quizQuestions: [
      { question: "What is the English translation of 'Juego de Posición'?", options: ["Direct play", "Positional Play", "Man marking", "None"], correctIndex: 1, explanation: "Juego de Posición translates to Positional Play." },
      { question: "What is Pep's view on player movement?", options: ["Players should roam anywhere they want", "Players must stay in their designated zones to keep the shape", "No running allowed", "None"], correctIndex: 1, explanation: "Positional Play relies on strict discipline to maintain passing structures." },
      { question: "Who is the 'Free Man' in Pep's system?", options: ["The goalie", "An unmarked player in space who can receive the ball", "A player on a free transfer", "The referee"], correctIndex: 1, explanation: "The system is designed to pass the ball until an opponent commits, leaving one player completely free." },
      { question: "What is the 3-second rule?", options: ["Sprinting in goal", "Instant counter-pressing to win the ball within 3 seconds of losing it", "Wasting time", "None"], correctIndex: 1, explanation: "Pep's teams must press immediately upon turnover to recover the ball quickly." },
      { question: "Which clubs has Pep Guardiola managed?", options: ["Barcelona, Real Madrid, Milan", "Barcelona, Bayern Munich, Manchester City", "Arsenal, Chelsea, Liverpool", "None"], correctIndex: 1, explanation: "Pep has had historic success at Barca, Bayern, and Man City." }
    ]
  },
  "klopp-gegenpressing": {
    slug: "klopp-gegenpressing",
    title: "Jürgen Klopp's Gegenpressing",
    description: "Heavy-metal football focused on winning the ball in high transitions.",
    introduction: "Jürgen Klopp popularized Gegenpressing, describing it as 'Heavy Metal Football'. The team presses intensely the second possession is lost, using turnovers as their main playmaker.",
    image: "/images/tactics/klopp.png",
    keyElements: ["Heavy metal football", "Playmaking press", "Sprint transitions", "High-speed duels"],
    sections: [
      { heading: "The Playmaker Press", content: "Klopp believes that winning the ball back near the opponent's box is more effective than any playmaker, as the opponent is open and disorganized." },
      { heading: "Intensity", content: "Demands incredible physical fitness. Players must sprint in groups to trap the ball carrier the second possession is lost." }
    ],
    quizQuestions: [
      { question: "What term did Klopp use to describe his style?", options: ["Classical orchestra", "Heavy Metal Football", "Slow waltz", "None"], correctIndex: 1, explanation: "Klopp described his intense, fast-tempo style as Heavy Metal Football." },
      { question: "What does Klopp consider the 'best playmaker'?", options: ["A classic No. 10", "A successful counter-press (Gegenpressing)", "A long throw-in", "The goalie"], correctIndex: 1, explanation: "Winning the ball high creates instant, dangerous chances without needing a playmaker." },
      { question: "Which teams did Klopp lead to major finals using Gegenpressing?", options: ["Arsenal and Chelsea", "Borussia Dortmund and Liverpool", "Bayern Munich and Milan", "None"], correctIndex: 1, explanation: "Klopp built historic Dortmund and Liverpool teams using this style." },
      { question: "What is required from Klopp's players?", options: ["Standing still", "Exceptional stamina, sprint speed, and workrate", "Only size", "None"], correctIndex: 1, explanation: "High-intensity pressing requires elite physical fitness." },
      { question: "How does Klopp's press react when the ball is won?", options: ["They slow down play", "They attack forward at maximum speed", "They clear it", "None"], correctIndex: 1, explanation: "The team exploits the transition, charging forward immediately to score." }
    ]
  },
  "mourinho-pragmatism": {
    slug: "mourinho-pragmatism",
    title: "José Mourinho's Pragmatic Counter-Attacking",
    description: "Defending deep, denying spaces, and using counter-attacks.",
    introduction: "José Mourinho is the master of tactical pragmatism. He focuses on defensive organization, invites opponent pressure, closes all spaces, and strikes on lethal counters.",
    image: "/images/tactics/mourinho.png",
    keyElements: ["Pragmatic defense", "Low block control", "Transition speed", "Mental discipline"],
    sections: [
      { heading: "Pragmatic Focus", content: "Mourinho believes that the team that makes fewer mistakes wins. He is comfortable giving up possession, sitting in a low block, and waiting for the opponent to make a mistake." },
      { heading: "Transition Lethality", content: "His teams are trained to transition from defense to attack in 3-4 passes, utilizing fast wingers and clinical strikers." }
    ],
    quizQuestions: [
      { question: "What is the core of Mourinho's philosophy?", options: ["Possession at all costs", "Tactical pragmatism, defensive stability, and counter-attacks", "Always playing 2-3-5", "No defending"], correctIndex: 1, explanation: "Mourinho focuses on winning through defensive organization and minimizing mistakes." },
      { question: "What is Mourinho's view on ball possession?", options: ["You must keep 80% possession", "The team with the ball is more likely to make a mistake", "Only keepers should have the ball", "None"], correctIndex: 1, explanation: "Mourinho believes keeping the ball increases the risk of making an error in transition." },
      { question: "Which team did Mourinho lead to a treble in 2010?", options: ["Real Madrid", "Inter Milan", "Chelsea", "Porto"], correctIndex: 1, explanation: "Mourinho won the treble with Inter Milan in 2010, beating Barca and Bayern." },
      { question: "What defensive block is most associated with Mourinho?", options: ["High block", "Low block / Parking the bus", "Mid block only", "None"], correctIndex: 1, explanation: "Mourinho is famous for his organized, compact low blocks." },
      { question: "How do Mourinho's teams play on transition?", options: ["Slowly build through defense", "Fast, direct vertical passes to attackers", "Clear out of play", "None"], correctIndex: 1, explanation: "His teams break with speed, striking before the opponent can track back." }
    ]
  },
  "ancelotti-flexibility": {
    slug: "ancelotti-flexibility",
    title: "Carlo Ancelotti's Flexible System",
    description: "Adapting system to fits players' qualities to keep them happy.",
    introduction: "Carlo Ancelotti is famous for his tactical flexibility and man-management. Instead of forcing players into a rigid system, he adapts his formation to suit his squad's strengths.",
    image: "/images/tactics/carlo.png",
    keyElements: ["Tactical adaptability", "Man-management", "Player comfort", "Hybrid shapes"],
    sections: [
      { heading: "The Quiet Leader", content: "Ancelotti's 'quiet leadership' focuses on player relationships. He believes happy players perform best, so he tailors systems to keep his stars in their favorite roles." },
      { heading: "Hybrid Formations", content: "His teams often defend in one shape (e.g. 4-4-2) and attack in another (e.g. 4-3-3) to balance the squad." }
    ],
    quizQuestions: [
      { question: "What is Carlo Ancelotti's main tactical identity?", options: ["Rigid Positional Play", "Adaptability and tailoring systems to fit his players", "High-pressing Gegenpress", "Strict man-marking"], correctIndex: 1, explanation: "Ancelotti is famous for being flexible, adapting his systems to match player strengths." },
      { question: "What managerial quality is Ancelotti most famous for?", options: ["Screaming at players", "Elite man-management and player relationships", "Strict physical drills", "None"], correctIndex: 1, explanation: "Ancelotti is beloved by players for his calm, supportive man-management." },
      { question: "Ancelotti is the first manager to win which trophy five times?", options: ["The World Cup", "The UEFA Champions League", "The Premier League", "The Copa America"], correctIndex: 1, explanation: "Ancelotti has won a record five Champions League titles (with Milan and Real Madrid)." },
      { question: "What is a 'hybrid formation' Ancelotti uses?", options: ["Playing with a goalie in midfield", "Defending in a 4-4-2 but attacking in a 4-3-3", "Playing without defenders", "None"], correctIndex: 1, explanation: "He often uses different shapes for defensive and offensive phases to maximize player output." },
      { question: "How does Ancelotti handle star players?", options: ["Frees them to express their qualities within a balanced structure", "Benches them", "Forces them to play defense only", "None"], correctIndex: 0, explanation: "He adapts the team structure to allow star players creative freedom." }
    ]
  },
  "bielsa-man-pressing": {
    slug: "bielsa-man-pressing",
    title: "Marcelo Bielsa's Man-Oriented Pressing",
    description: "Marcelo Bielsa's high-intensity system of tracking runners.",
    introduction: "Marcelo Bielsa (El Loco) is a tactical purist. He uses a high-intensity, man-oriented pressing system where defenders track their assigned runners across the entire pitch.",
    image: "/images/tactics/bielsa.png",
    keyElements: ["Man-marking press", "Extreme physical output", "Third-man movements", "Overload rotations"],
    sections: [
      { heading: "Man-to-Man Marking", content: "Bielsa's teams defend 1v1 across the pitch. Every player marks their opponent tightly, tracking them even if they swap sides." },
      { heading: "Vertical Attack", content: "In possession, Bielsa demands rapid, vertical passing and constant off-the-ball sprints to overwhelm the defense." }
    ],
    quizQuestions: [
      { question: "What nickname is Marcelo Bielsa known by?", options: ["The Special One", "El Loco (The Crazy One)", "The Conductor", "The Professor"], correctIndex: 1, explanation: "Bielsa is affectionately known as 'El Loco' due to his obsessive tactical focus." },
      { question: "What is the core defensive method of Bielsa's teams?", options: ["Compact zonal low block", "Intense, man-to-man pressing across the entire pitch", "Parking the bus", "Offside traps only"], correctIndex: 1, explanation: "Bielsa's teams track opponents 1v1 all over the pitch." },
      { question: "What is a main requirement for Bielsa's players?", options: ["Only height", "Incredible physical stamina and workrate", "Patience only", "None"], correctIndex: 1, explanation: "Strict man-to-man pressing requires elite stamina and running output." },
      { question: "How do Bielsa's teams progress the ball?", options: ["Slow possession sideways", "Rapid, vertical passing and off-the-ball sprints", "Long punts only", "None"], correctIndex: 1, explanation: "His teams attack with speed and high player rotation." },
      { question: "What is a risk of Bielsa's strict man-marking?", options: ["Defenders get pulled out of shape, leaving huge gaps if beaten", "No goals scored", "Wasting too much time", "None"], correctIndex: 0, explanation: "If an opponent beats their marker, the entire defensive structure is compromised." }
    ]
  },
  "sacchi-zonal-pressing": {
    slug: "sacchi-zonal-pressing",
    title: "Arrigo Sacchi's Zonal Pressing",
    description: "The AC Milan system of high-line defensive zones and press.",
    introduction: "Arrigo Sacchi revolutionized football in the late 1980s with AC Milan. He discarded man-marking, introducing a highly coordinated zonal pressing system with a compact high line.",
    image: "/images/tactics/sacchi.png",
    keyElements: ["Zonal marking", "25-meter compact block", "Coordinated offside trap", "Squeezing space"],
    sections: [
      { heading: "Compactness", content: "Sacchi demanded that the distance between defense and attack be no more than 25 meters. This compressed the pitch, leaving opponents no room to play." },
      { heading: "Moving as One", content: "The team moved relative to the ball, teammates, space, and opponents. Defenders moved in sync, catching strikers offside easily." }
    ],
    quizQuestions: [
      { question: "Which legendary club team did Arrigo Sacchi manage in the late 1980s?", options: ["Real Madrid", "AC Milan", "Juventus", "FC Barcelona"], correctIndex: 1, explanation: "Sacchi led AC Milan to back-to-back European Cups in 1989 and 1990." },
      { question: "What defensive system did Sacchi replace man-marking with?", options: ["Parking the bus", "Coordinated zonal marking and high press", "Sweeper keeper cover", "None"], correctIndex: 1, explanation: "Sacchi introduced zonal marking, where players cover spaces rather than tracking individuals." },
      { question: "What was Sacchi's rule regarding team compactness?", options: ["Distance between defense and forwards should be under 25 meters", "Spread players across the entire pitch", "No vertical lines", "None"], correctIndex: 0, explanation: "Sacchi demanded a highly compact 25-meter block to choke off passing lanes." },
      { question: "What trap did Sacchi's Milan use to perfection?", options: ["The pressing trap on wingers", "The offside trap", "The midfield trap", "None"], correctIndex: 1, explanation: "A highly synchronized backline stepped up in unison to catch attackers offside." },
      { question: "Why was Sacchi's Milan considered revolutionary?", options: ["They did not use a striker", "They dominated with zone-pressing and compactness in an era of man-marking", "They only played long balls", "None"], correctIndex: 1, explanation: "They proved that organized zones could easily defeat individual man-markers." }
    ]
  }
};
