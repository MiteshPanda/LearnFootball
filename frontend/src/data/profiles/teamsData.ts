export interface TeamSquadPlayer {
  name: string;
  position: string;
  role: 'Legendary' | 'Modern' | 'Star';
}

export interface TeamStats {
  label: string;
  value: string;
}

export interface TeamTimeline {
  year: string;
  title: string;
  description: string;
}

export interface TeamTrophy {
  title: string;
  count: number;
}

export interface WorldCupPlayer {
  number: number;
  name: string;
  position: string;
}

export interface TeamProfile {
  name: string;
  slug: string;
  flag: string;
  titles: string;
  style: string;
  bio: string;
  tacticalIdentity: string;
  squad: TeamSquadPlayer[];
  stats: TeamStats[];
  timeline: TeamTimeline[];
  trophies: TeamTrophy[];
  worldCupSquad: WorldCupPlayer[];
}

export const teamsData: TeamProfile[] = [
  {
    name: "Argentina",
    slug: "argentina",
    flag: "🇦🇷",
    titles: "3× World Cup",
    style: "La Nuestra / Flair & Passion",
    bio: "Argentina has a rich footballing history defined by passion, supreme individual talent, and tactical innovation. The home of Diego Maradona and Lionel Messi, La Albiceleste has captured the world's imagination for generations.",
    tacticalIdentity: "Historically, Argentine football revolves around 'La Nuestra'—a style emphasizing high technical skill, dribbling, and creativity. Modern systems blend this traditional flair with aggressive counter-pressing and structured defensive support to liberate their creative playmakers.",
    squad: [
      { name: "Lionel Messi", position: "Forward", role: "Star" },
      { name: "Diego Maradona", position: "Attacking Mid", role: "Legendary" },
      { name: "Mario Kempes", position: "Striker", role: "Legendary" },
      { name: "Angel Di Maria", position: "Winger", role: "Modern" },
      { name: "Emiliano Martínez", position: "Goalkeeper", role: "Modern" },
      { name: "Javier Zanetti", position: "Full-Back", role: "Legendary" }
    ],
    stats: [
      { label: "World Cups", value: "3" },
      { label: "Copa Américas", value: "15" },
      { label: "FIFA Rank", value: "1st" },
      { label: "Matches", value: "1000+" }
    ],
    timeline: [
      { year: "1978", title: "First World Cup Title", description: "Won the tournament on home soil, led by top scorer Mario Kempes." },
      { year: "1986", title: "Maradona's Masterpiece", description: "Diego Maradona captained Argentina to a second World Cup in Mexico with legendary performances." },
      { year: "2021", title: "Copa América Triumph", description: "Defeated Brazil in Rio to end a 28-year senior international trophy drought." },
      { year: "2022", title: "Third Star in Qatar", description: "Lionel Messi led La Albiceleste to World Cup glory in one of the greatest finals ever played." }
    ],
    trophies: [
      { title: "FIFA World Cup", count: 3 },
      { title: "Copa América", count: 15 },
      { title: "FIFA Confederations Cup", count: 1 },
      { title: "CONMEBOL-UEFA Cup of Champions", count: 2 }
    ],
    worldCupSquad: [
      { number: 23, name: "Emiliano Martínez", position: "Goalkeeper" },
      { number: 4, name: "Gonzalo Montiel", position: "Right Back" },
      { number: 13, name: "Cristian Romero", position: "Right Central Defender" },
      { number: 6, name: "Lisandro Martinez", position: "Left Central Defender" },
      { number: 25, name: "Facundo Medina", position: "Left Back" },
      { number: 7, name: "Rodrigo De Paul", position: "Right Midfielder" },
      { number: 20, name: "Alexis Mac Allister", position: "Central Midfielder" },
      { number: 24, name: "Enzo Fernandez", position: "Central Midfielder" },
      { number: 16, name: "Thiago Almada", position: "Left Midfielder" },
      { number: 22, name: "Lautaro Martinez", position: "Forward" },
      { number: 10, name: "Lionel Messi", position: "Forward" }
    ]
  },
  {
    name: "Brazil",
    slug: "brazil",
    flag: "🇧🇷",
    titles: "5× World Cup",
    style: "Jogo Bonito / Creative Expression",
    bio: "The most successful national team in World Cup history, Brazil is synonymous with 'Jogo Bonito' (The Beautiful Game). A factory of footballing wizards from Pelé to Ronaldinho, Brazil represents the absolute peak of footballing joy.",
    tacticalIdentity: "Brazil's footballing identity is built on samba-like rhythm, individual expression, fluid wingplay, and attacking fullbacks. It focuses on numerical overloads, high technical skills, and encouraging players to take creative risks in 1v1 situations.",
    squad: [
      { name: "Pelé", position: "Forward", role: "Legendary" },
      { name: "Ronaldo Nazário", position: "Striker", role: "Legendary" },
      { name: "Ronaldinho", position: "Attacking Mid", role: "Legendary" },
      { name: "Neymar Jr", position: "Forward", role: "Star" },
      { name: "Vinícius Júnior", position: "Winger", role: "Modern" },
      { name: "Cafu", position: "Right-Back", role: "Legendary" }
    ],
    stats: [
      { label: "World Cups", value: "5" },
      { label: "Copa Américas", value: "9" },
      { label: "All-Time Goals", value: "2200+" },
      { label: "FIFA Rank", value: "6th" }
    ],
    timeline: [
      { year: "1958", title: "Pelé Emerges in Sweden", description: "A 17-year-old Pelé led Brazil to their first World Cup, introducing Jogo Bonito to the world." },
      { year: "1970", title: "The Perfect Team", description: "Brazil won their third World Cup with what is widely considered the greatest football team ever assembled." },
      { year: "1994", title: "Tetra in USA", description: "Defeated Italy on penalties after a defensive, structured tournament led by Romário." },
      { year: "2002", title: "Pentacampeão in Asia", description: "The 'R' trio of Ronaldo, Rivaldo, and Ronaldinho swept the tournament to win Brazil's fifth star." }
    ],
    trophies: [
      { title: "FIFA World Cup", count: 5 },
      { title: "Copa América", count: 9 },
      { title: "FIFA Confederations Cup", count: 4 },
      { title: "Olympic Gold Medal", count: 2 }
    ],
    worldCupSquad: [
      { number: 1, name: "Allison", position: "Goalkeeper" },
      { number: 13, name: "Danilo", position: "Right Back" },
      { number: 4, name: "Marquinhos", position: "Right Central Defender" },
      { number: 3, name: "Gabriel Magalhaes", position: "Left Central Defender" },
      { number: 16, name: "Douglas Santos", position: "Left Back" },
      { number: 8, name: "Bruno Guimaraes", position: "Central Midfielder" },
      { number: 5, name: "Casemiro", position: "Central Midfielder" },
      { number: 20, name: "Lucas Paqueta", position: "Central Midfielder" },
      { number: 11, name: "Raphinha", position: "Right Winger" },
      { number: 7, name: "Vinicius Junior", position: "Left Winger" },
      { number: 9, name: "Matheus Cunha", position: "Forward" }
    ]
  },
  {
    name: "France",
    slug: "france",
    flag: "🇫🇷",
    titles: "2× World Cup",
    style: "Pragmatism & Lightning Transitions",
    bio: "France (Les Bleus) has risen to become a dominant powerhouse of modern football. Blessed with incredible multi-cultural diversity and world-class academies, France blends physical dominance with supreme technical elegance.",
    tacticalIdentity: "Under Didier Deschamps, France focuses on a highly organized defensive shape, minimizing risk in possession, and utilizing lightning-fast counter-attacks through explosive wingers like Kylian Mbappé.",
    squad: [
      { name: "Zinedine Zidane", position: "Attacking Mid", role: "Legendary" },
      { name: "Kylian Mbappé", position: "Forward", role: "Star" },
      { name: "Thierry Henry", position: "Striker", role: "Legendary" },
      { name: "Antoine Griezmann", position: "Midfielder / Forward", role: "Modern" },
      { name: "Michel Platini", position: "Playmaker", role: "Legendary" },
      { name: "N'Golo Kanté", position: "Defensive Mid", role: "Modern" }
    ],
    stats: [
      { label: "World Cups", value: "2" },
      { label: "Euros", value: "2" },
      { label: "FIFA Rank", value: "3rd" },
      { label: "UCL Winners", value: "Many" }
    ],
    timeline: [
      { year: "1984", title: "Platini's Euro Domination", description: "Michel Platini scored a record 9 goals in 5 games to secure France's first European Championship." },
      { year: "1998", title: "First World Cup Star", description: "Zidane scored twice in Paris as the host nation defeated Brazil 3-0 in the final." },
      { year: "2000", title: "Double Champions", description: "Won Euro 2000 with a golden goal from David Trezeguet, completing a rare double." },
      { year: "2018", title: "Glory in Russia", description: "A young, explosive French team defeated Croatia 4-2 in Moscow to claim their second World Cup." }
    ],
    trophies: [
      { title: "FIFA World Cup", count: 2 },
      { title: "UEFA European Championship", count: 2 },
      { title: "FIFA Confederations Cup", count: 2 },
      { title: "UEFA Nations League", count: 1 }
    ],
    worldCupSquad: [
      { number: 16, name: "Mike Maignan", position: "Goalkeeper" },
      { number: 5, name: "Jules Kounde", position: "Right Back" },
      { number: 4, name: "Dayot Upamecano", position: "Right Central Defender" },
      { number: 17, name: "William Saliba", position: "Left Central Defender" },
      { number: 19, name: "Theo Hernandez", position: "Left Back" },
      { number: 8, name: "Aurelien Tchouameni", position: "Defensive Midfielder" },
      { number: 14, name: "Adrien Rabiot", position: "Defensive Midfielder" },
      { number: 11, name: "Michael Olise", position: "Attacking Midfielder" },
      { number: 7, name: "Ousmane Dembele", position: "Attacking Midfielder" },
      { number: 20, name: "Desire Doue", position: "Attacking Midfielder" },
      { number: 10, name: "Kylian Mbaape", position: "Forward" }
    ]
  },
  {
    name: "Germany",
    slug: "germany",
    flag: "🇩🇪",
    titles: "4× World Cup",
    style: "Raumdeuter / Positional Efficiency",
    bio: "Germany (Die Mannschaft) is the epitome of tournament resilience, tactical intelligence, and collective strength. Always competing at the business end of tournaments, German football blends robust physical structure with modern positional play.",
    tacticalIdentity: "German football has transitioned from powerful physical efficiency to dynamic positional play. Their style emphasizes occupying half-spaces, high pressing, and intelligent player movement (like the 'Raumdeuter' or space investigator).",
    squad: [
      { name: "Franz Beckenbauer", position: "Defender / Sweeper", role: "Legendary" },
      { name: "Gerd Müller", position: "Striker", role: "Legendary" },
      { name: "Lothar Matthäus", position: "Midfielder", role: "Legendary" },
      { name: "Thomas Müller", position: "Raumdeuter", role: "Modern" },
      { name: "Manuel Neuer", position: "Sweeper-Keeper", role: "Star" },
      { name: "Toni Kroos", position: "Midfielder", role: "Modern" }
    ],
    stats: [
      { label: "World Cups", value: "4" },
      { label: "Euros", value: "3" },
      { label: "FIFA Rank", value: "10th" },
      { label: "WC Finals", value: "8" }
    ],
    timeline: [
      { year: "1954", title: "The Miracle of Bern", description: "Dealt the legendary Hungarian 'Golden Team' their first defeat in 4 years to win their 1st World Cup." },
      { year: "1974", title: "Beckenbauer's Triumph", description: "Der Kaiser captained Germany to victory on home soil, defeating Cruyff's Total Football." },
      { year: "1990", title: "Matthäus Captains Unified Germany", description: "Defeated Maradona's Argentina in Rome just before the formal reunification of Germany." },
      { year: "2014", title: "Historic 7-1 & Fourth Star", description: "Swept past hosts Brazil 7-1 in the semi-final before Mario Götze's extra-time goal won the final." }
    ],
    trophies: [
      { title: "FIFA World Cup", count: 4 },
      { title: "UEFA European Championship", count: 3 },
      { title: "FIFA Confederations Cup", count: 1 }
    ],
    worldCupSquad: [
      { number: 1, name: "Manuel Neuer", position: "Goalkeeper" },
      { number: 6, name: "Joshua Kimmich", position: "Right Back" },
      { number: 4, name: "Jonathan Tah", position: "Right Central Defender" },
      { number: 15, name: "Nico Schlotterbeck", position: "Left Central Defender" },
      { number: 18, name: "Nathaniel Brown", position: "Left Back" },
      { number: 23, name: "Felix Nmecha", position: "Defensive Midfielder" },
      { number: 5, name: "Aleksandar Pavlovic", position: "Defensive Midfielder" },
      { number: 19, name: "Leroy Sane", position: "Attacking Midfielder" },
      { number: 10, name: "Jamal Musiala", position: "Attacking Midfielder" },
      { number: 17, name: "Florian Wirtz", position: "Attacking Midfielder" },
      { number: 7, name: "Kai Havertz", position: "Forward" }
    ]
  },
  {
    name: "Spain",
    slug: "spain",
    flag: "🇪🇸",
    titles: "1× World Cup",
    style: "Tiki-Taka / Absolute Possession",
    bio: "Spain (La Roja) defined an entire era of modern football with 'Tiki-Taka'. Built upon the technical superiority of small, creative midfielders and a commitment to possession, Spain dominated international football from 2008 to 2012.",
    tacticalIdentity: "Tiki-Taka focuses on absolute possession, short rapid passing, triangular movements, and constant rotation of midfielders. The philosophy believes that if the opponent doesn't have the ball, they cannot score.",
    squad: [
      { name: "Andrés Iniesta", position: "Midfielder", role: "Legendary" },
      { name: "Xavi Hernández", position: "Midfielder", role: "Legendary" },
      { name: "Sergio Ramos", position: "Defender", role: "Legendary" },
      { name: "Iker Casillas", position: "Goalkeeper", role: "Legendary" },
      { name: "Rodri", position: "Defensive Mid", role: "Star" },
      { name: "Lamine Yamal", position: "Winger", role: "Modern" }
    ],
    stats: [
      { label: "World Cups", value: "1" },
      { label: "Euros", value: "4" },
      { label: "FIFA Rank", value: "2nd" },
      { label: "Euro 2024", value: "Winners" }
    ],
    timeline: [
      { year: "2008", title: "Euro 2008 Triumph", description: "Broke decades of underachievement by defeating Germany in Vienna under Luis Aragonés." },
      { year: "2010", title: "World Cup Glory", description: "Andrés Iniesta scored the extra-time winner against the Netherlands to claim Spain's first World Cup." },
      { year: "2012", title: "Historic Treble", description: "Defeated Italy 4-0 in the Euro 2012 final, completing an unprecedented consecutive three major title run." },
      { year: "2024", title: "Euro 2024 Champions", description: "Won every single game in Germany to win their record-breaking 4th European Championship." }
    ],
    trophies: [
      { title: "FIFA World Cup", count: 1 },
      { title: "UEFA European Championship", count: 4 },
      { title: "UEFA Nations League", count: 1 }
    ],
    worldCupSquad: [
      { number: 23, name: "Unai Simon", position: "Goalkeeper" },
      { number: 5, name: "Marcos Llorente", position: "Right Back" },
      { number: 22, name: "Pau Cubarsi", position: "Right Central Defender" },
      { number: 14, name: "Aymeric Laporte", position: "Left Central Defender" },
      { number: 24, name: "Marc Cucurella", position: "Left Back" },
      { number: 20, name: "Pedri", position: "Central Midfielder" },
      { number: 10, name: "Dani Olmo", position: "Central Midfielder" },
      { number: 16, name: "Rodri", position: "Central Midfielder" },
      { number: 19, name: "Lamine Yamal", position: "Right Winger" },
      { number: 17, name: "Nico Williams", position: "Left Winger" },
      { number: 21, name: "Mikel Oyarzabal", position: "Forward" }
    ]
  },
  {
    name: "Portugal",
    slug: "portugal",
    flag: "🇵🇹",
    titles: "1× Euro Championship",
    style: "Dynamic Attack & Countering Structure",
    bio: "Portugal (Seleção das Quinas) has consistently punched above its weight, developing some of the most gifted wingers and forwards in history, including Eusébio, Luís Figo, and Cristiano Ronaldo.",
    tacticalIdentity: "Portuguese football combines solid tactical discipline and defensive blocks with highly explosive, creative attacking transitions. Players focus on technical dribbling, tactical intelligence, and exploiting spaces via quick wing attacks.",
    squad: [
      { name: "Cristiano Ronaldo", position: "Forward", role: "Star" },
      { name: "Eusébio", position: "Striker", role: "Legendary" },
      { name: "Luís Figo", position: "Winger", role: "Legendary" },
      { name: "Bernardo Silva", position: "Midfielder / Winger", role: "Modern" },
      { name: "Bruno Fernandes", position: "Attacking Mid", role: "Modern" },
      { name: "Rui Costa", position: "Playmaker", role: "Legendary" }
    ],
    stats: [
      { label: "Euros", value: "1" },
      { label: "Nations League", value: "2" },
      { label: "FIFA Rank", value: "5th" },
      { label: "Goals (CR7)", value: "130+" }
    ],
    timeline: [
      { year: "1966", title: "Eusébio's Bronze Campaign", description: "Eusébio led Portugal to a third-place finish in their debut World Cup, scoring 9 goals." },
      { year: "2004", title: "Euro 2004 Heartbreak", description: "Reached the final on home soil but suffered a shock 1-0 defeat to underdogs Greece." },
      { year: "2016", title: "First Major Trophy", description: "Eder's extra-time goal defeated hosts France in Paris to secure Euro 2016 glory." },
      { year: "2019", title: "Nations League Winners", description: "Won the inaugural UEFA Nations League tournament on home soil, defeating the Netherlands." }
    ],
    trophies: [
      { title: "UEFA European Championship", count: 1 },
      { title: "UEFA Nations League", count: 1 }
    ],
    worldCupSquad: [
      { number: 1, name: "Diego Costa", position: "Goalkeeper" },
      { number: 20, name: "Joao Cancelo", position: "Right Back" },
      { number: 14, name: "Goncalo Inacio", position: "Right Central Defender" },
      { number: 3, name: "Ruben Dias", position: "Left Central Defender" },
      { number: 25, name: "Nuno Mendes", position: "Left Back" },
      { number: 23, name: "Vitinha", position: "Defensive Midfielder" },
      { number: 15, name: "Joao Neves", position: "Defensive Midfielder" },
      { number: 18, name: "Pedro Neto", position: "Attacking Midfielder" },
      { number: 10, name: "Bernardo Silva", position: "Attacking Midfielder" },
      { number: 8, name: "Bruno Fernandes", position: "Attacking Midfielder" },
      { number: 7, name: "Cristiano Ronaldo", position: "Forward" }
    ]
  }
];
