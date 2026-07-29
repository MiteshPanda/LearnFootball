interface Position {
  x: number; // 0-100 (% of width)
  y: number; // 0-100 (% of height)
  label: string;
  role?: string;
}

interface FormationDiagramProps {
  formation: string;
  positions?: Position[];
  teamColor?: string;
  showLabels?: boolean;
}

const formations: Record<string, Position[]> = {
  "4-4-2": [
    { x: 50, y: 92, label: "GK" },
    { x: 15, y: 72, label: "LB", role: "Left Back" },
    { x: 35, y: 75, label: "CB", role: "Centre Back" },
    { x: 65, y: 75, label: "CB", role: "Centre Back" },
    { x: 85, y: 72, label: "RB", role: "Right Back" },
    { x: 15, y: 48, label: "LM", role: "Left Mid" },
    { x: 35, y: 50, label: "CM", role: "Centre Mid" },
    { x: 65, y: 50, label: "CM", role: "Centre Mid" },
    { x: 85, y: 48, label: "RM", role: "Right Mid" },
    { x: 35, y: 22, label: "ST", role: "Striker" },
    { x: 65, y: 22, label: "ST", role: "Striker" },
  ],
  "4-3-3": [
    { x: 50, y: 92, label: "GK" },
    { x: 15, y: 72, label: "LB", role: "Left Back" },
    { x: 35, y: 75, label: "CB", role: "Centre Back" },
    { x: 65, y: 75, label: "CB", role: "Centre Back" },
    { x: 85, y: 72, label: "RB", role: "Right Back" },
    { x: 25, y: 50, label: "LCM", role: "Left Central Mid" },
    { x: 50, y: 56, label: "DM", role: "Defensive Mid" },
    { x: 75, y: 50, label: "RCM", role: "Right Central Mid" },
    { x: 18, y: 20, label: "LW", role: "Left Winger" },
    { x: 50, y: 15, label: "ST", role: "Striker" },
    { x: 82, y: 20, label: "RW", role: "Right Winger" },
  ],
  "4-3-2-1": [
    { x: 50, y: 92, label: "GK" },
    { x: 15, y: 75, label: "LB", role: "Left Back" },
    { x: 35, y: 78, label: "LCB", role: "Left Centre Back" },
    { x: 65, y: 78, label: "RCB", role: "Right Centre Back" },
    { x: 85, y: 75, label: "RB", role: "Right Back" },
    { x: 25, y: 55, label: "LCM", role: "Left Central Mid" },
    { x: 50, y: 57, label: "CM", role: "Centre Mid" },
    { x: 75, y: 55, label: "RCM", role: "Right Central Mid" },
    { x: 35, y: 36, label: "LAM", role: "Left Attacking Mid" },
    { x: 65, y: 36, label: "RAM", role: "Right Attacking Mid" },
    { x: 50, y: 18, label: "ST", role: "Striker" },
  ],
  "4-3-1-2": [
    { x: 50, y: 92, label: "GK" },
    { x: 15, y: 75, label: "LB", role: "Left Back" },
    { x: 35, y: 78, label: "LCB", role: "Left Centre Back" },
    { x: 65, y: 78, label: "RCB", role: "Right Centre Back" },
    { x: 85, y: 75, label: "RB", role: "Right Back" },
    { x: 25, y: 55, label: "LCM", role: "Left Central Mid" },
    { x: 50, y: 58, label: "DM", role: "Defensive Mid" },
    { x: 75, y: 55, label: "RCM", role: "Right Central Mid" },
    { x: 50, y: 36, label: "AM", role: "Attacking Mid" },
    { x: 35, y: 20, label: "LST", role: "Left Striker" },
    { x: 65, y: 20, label: "RST", role: "Right Striker" },
  ],
  "4-2-3-1": [
    { x: 50, y: 92, label: "GK" },
    { x: 15, y: 73, label: "LB", role: "Left Back" },
    { x: 35, y: 76, label: "LCB", role: "Left Centre Back" },
    { x: 65, y: 76, label: "RCB", role: "Right Centre Back" },
    { x: 85, y: 73, label: "RB", role: "Right Back" },
    { x: 35, y: 57, label: "LDM", role: "Left Defensive Mid" },
    { x: 65, y: 57, label: "RDM", role: "Right Defensive Mid" },
    { x: 18, y: 35, label: "LAM", role: "Left Attacking Mid" },
    { x: 50, y: 33, label: "AM", role: "Central Attacking Mid" },
    { x: 82, y: 35, label: "RAM", role: "Right Attacking Mid" },
    { x: 50, y: 14, label: "ST", role: "Striker" },
  ],
  "4-2-1-3": [
    { x: 50, y: 92, label: "GK" },
    { x: 15, y: 75, label: "LB", role: "Left Back" },
    { x: 35, y: 78, label: "LCB", role: "Left Centre Back" },
    { x: 65, y: 78, label: "RCB", role: "Right Centre Back" },
    { x: 85, y: 75, label: "RB", role: "Right Back" },
    { x: 35, y: 60, label: "LDM", role: "Left Defensive Mid" },
    { x: 65, y: 60, label: "RDM", role: "Right Defensive Mid" },
    { x: 50, y: 42, label: "AM", role: "Attacking Playmaker" },
    { x: 18, y: 22, label: "LW", role: "Left Winger" },
    { x: 50, y: 16, label: "ST", role: "Striker" },
    { x: 82, y: 22, label: "RW", role: "Right Winger" },
  ],
  "4-1-4-1": [
    { x: 50, y: 92, label: "GK" },
    { x: 15, y: 75, label: "LB", role: "Left Back" },
    { x: 35, y: 78, label: "LCB", role: "Left Centre Back" },
    { x: 65, y: 78, label: "RCB", role: "Right Centre Back" },
    { x: 85, y: 75, label: "RB", role: "Right Back" },
    { x: 50, y: 62, label: "DM", role: "Holding Midfielder" },
    { x: 15, y: 45, label: "LM", role: "Left Mid" },
    { x: 35, y: 47, label: "LCM", role: "Left Central Mid" },
    { x: 65, y: 47, label: "RCM", role: "Right Central Mid" },
    { x: 85, y: 45, label: "RM", role: "Right Mid" },
    { x: 50, y: 20, label: "ST", role: "Striker" },
  ],
  "4-1-2-3": [
    { x: 50, y: 92, label: "GK" },
    { x: 15, y: 75, label: "LB", role: "Left Back" },
    { x: 35, y: 78, label: "LCB", role: "Left Centre Back" },
    { x: 65, y: 78, label: "RCB", role: "Right Centre Back" },
    { x: 85, y: 75, label: "RB", role: "Right Back" },
    { x: 50, y: 62, label: "DM", role: "Defensive Anchor" },
    { x: 35, y: 46, label: "LCM", role: "Left Attacking Mid" },
    { x: 65, y: 46, label: "RCM", role: "Right Attacking Mid" },
    { x: 18, y: 22, label: "LW", role: "Left Winger" },
    { x: 50, y: 16, label: "ST", role: "Striker" },
    { x: 82, y: 22, label: "RW", role: "Right Winger" },
  ],
  "3-4-3": [
    { x: 50, y: 92, label: "GK" },
    { x: 25, y: 76, label: "LCB", role: "Left Centre Back" },
    { x: 50, y: 78, label: "CB", role: "Centre Back" },
    { x: 75, y: 76, label: "RCB", role: "Right Centre Back" },
    { x: 12, y: 50, label: "LWB", role: "Left Wing-Back" },
    { x: 35, y: 52, label: "LCM", role: "Left Midfielder" },
    { x: 65, y: 52, label: "RCM", role: "Right Midfielder" },
    { x: 88, y: 50, label: "RWB", role: "Right Wing-Back" },
    { x: 22, y: 24, label: "LW", role: "Left Winger" },
    { x: 50, y: 18, label: "ST", role: "Striker" },
    { x: 78, y: 24, label: "RW", role: "Right Winger" },
  ],
  "3-2-4-1": [
    { x: 50, y: 92, label: "GK" },
    { x: 25, y: 76, label: "LCB", role: "Left Centre Back" },
    { x: 50, y: 78, label: "CB", role: "Centre Back" },
    { x: 75, y: 76, label: "RCB", role: "Right Centre Back" },
    { x: 35, y: 60, label: "LDM", role: "Left Holding Mid" },
    { x: 65, y: 60, label: "RDM", role: "Right Holding Mid" },
    { x: 15, y: 38, label: "LM", role: "Left Winger" },
    { x: 38, y: 38, label: "LAM", role: "Left Attacking Mid" },
    { x: 62, y: 38, label: "RAM", role: "Right Attacking Mid" },
    { x: 85, y: 38, label: "RM", role: "Right Winger" },
    { x: 50, y: 16, label: "ST", role: "Striker" },
  ],
  "3-2-3-2": [
    { x: 50, y: 92, label: "GK" },
    { x: 25, y: 76, label: "LCB", role: "Left Centre Back" },
    { x: 50, y: 78, label: "CB", role: "Centre Back" },
    { x: 75, y: 76, label: "RCB", role: "Right Centre Back" },
    { x: 35, y: 60, label: "LDM", role: "Left Defensive Mid" },
    { x: 65, y: 60, label: "RDM", role: "Right Defensive Mid" },
    { x: 18, y: 38, label: "LM", role: "Left Mid" },
    { x: 50, y: 36, label: "AM", role: "Attacking Mid" },
    { x: 82, y: 38, label: "RM", role: "Right Mid" },
    { x: 35, y: 20, label: "LST", role: "Left Striker" },
    { x: 65, y: 20, label: "RST", role: "Right Striker" },
  ],
  "3-1-4-2": [
    { x: 50, y: 92, label: "GK" },
    { x: 25, y: 76, label: "LCB", role: "Left Centre Back" },
    { x: 50, y: 78, label: "CB", role: "Centre Back" },
    { x: 75, y: 76, label: "RCB", role: "Right Centre Back" },
    { x: 50, y: 62, label: "DM", role: "Defensive Anchor" },
    { x: 15, y: 44, label: "LM", role: "Left Wing-Back" },
    { x: 35, y: 46, label: "LCM", role: "Left Central Mid" },
    { x: 65, y: 46, label: "RCM", role: "Right Central Mid" },
    { x: 85, y: 44, label: "RM", role: "Right Wing-Back" },
    { x: 35, y: 20, label: "LST", role: "Left Striker" },
    { x: 65, y: 20, label: "RST", role: "Right Striker" },
  ],
  "5-3-2": [
    { x: 50, y: 92, label: "GK" },
    { x: 12, y: 70, label: "LWB", role: "Left Wing-Back" },
    { x: 30, y: 76, label: "LCB", role: "Left Centre Back" },
    { x: 50, y: 78, label: "CB", role: "Centre Back" },
    { x: 70, y: 76, label: "RCB", role: "Right Centre Back" },
    { x: 88, y: 70, label: "RWB", role: "Right Wing-Back" },
    { x: 25, y: 48, label: "LCM", role: "Left Central Mid" },
    { x: 50, y: 50, label: "CM", role: "Centre Mid" },
    { x: 75, y: 48, label: "RCM", role: "Right Central Mid" },
    { x: 35, y: 22, label: "LST", role: "Left Striker" },
    { x: 65, y: 22, label: "RST", role: "Right Striker" },
  ],
  "5-2-2-1": [
    { x: 50, y: 92, label: "GK" },
    { x: 12, y: 70, label: "LWB", role: "Left Wing-Back" },
    { x: 30, y: 76, label: "LCB", role: "Left Centre Back" },
    { x: 50, y: 78, label: "CB", role: "Centre Back" },
    { x: 70, y: 76, label: "RCB", role: "Right Centre Back" },
    { x: 88, y: 70, label: "RWB", role: "Right Wing-Back" },
    { x: 35, y: 52, label: "LCM", role: "Left Midfielder" },
    { x: 65, y: 52, label: "RCM", role: "Right Midfielder" },
    { x: 35, y: 34, label: "LAM", role: "Left Attacking Mid" },
    { x: 65, y: 34, label: "RAM", role: "Right Attacking Mid" },
    { x: 50, y: 16, label: "ST", role: "Striker" },
  ],
  "5-2-1-2": [
    { x: 50, y: 92, label: "GK" },
    { x: 12, y: 70, label: "LWB", role: "Left Wing-Back" },
    { x: 30, y: 76, label: "LCB", role: "Left Centre Back" },
    { x: 50, y: 78, label: "CB", role: "Centre Back" },
    { x: 70, y: 76, label: "RCB", role: "Right Centre Back" },
    { x: 88, y: 70, label: "RWB", role: "Right Wing-Back" },
    { x: 35, y: 54, label: "LCM", role: "Left Central Mid" },
    { x: 65, y: 54, label: "RCM", role: "Right Central Mid" },
    { x: 50, y: 36, label: "AM", role: "Attacking Playmaker" },
    { x: 35, y: 20, label: "LST", role: "Left Striker" },
    { x: 65, y: 20, label: "RST", role: "Right Striker" },
  ],
};

export default function FormationDiagram({
  formation,
  positions: customPositions,
  teamColor = "#52B788",
  showLabels = true,
}: FormationDiagramProps) {
  const positions = customPositions ?? formations[formation] ?? formations["4-3-3"];

  return (
    <div className="not-prose overflow-hidden rounded-2xl border border-border-light bg-background-card">
      <div className="border-b border-border-light px-4 py-3">
        <p className="text-sm font-bold text-foreground">
          📐 Formation: <span className="text-accent">{formation}</span>
        </p>
      </div>
      <div className="relative w-full" style={{ paddingBottom: "62%" }}>
        <svg
          viewBox="0 0 400 250"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Pitch background */}
          <rect x="0" y="0" width="400" height="250" fill="#1a4a2e" rx="8" />

          {/* Pitch markings */}
          {/* Outer boundary */}
          <rect x="20" y="15" width="360" height="220" fill="none" stroke="#2d6a4f" strokeWidth="1.5" />
          {/* Center line */}
          <line x1="20" y1="125" x2="380" y2="125" stroke="#2d6a4f" strokeWidth="1" />
          {/* Center circle */}
          <circle cx="200" cy="125" r="30" fill="none" stroke="#2d6a4f" strokeWidth="1" />
          <circle cx="200" cy="125" r="2" fill="#2d6a4f" />
          {/* Top penalty area */}
          <rect x="110" y="15" width="180" height="55" fill="none" stroke="#2d6a4f" strokeWidth="1" />
          <rect x="150" y="15" width="100" height="25" fill="none" stroke="#2d6a4f" strokeWidth="1" />
          <circle cx="200" cy="45" r="16" fill="none" stroke="#2d6a4f" strokeWidth="1" strokeDasharray="4 3" />
          <circle cx="200" cy="30" r="2" fill="#2d6a4f" />
          {/* Bottom penalty area */}
          <rect x="110" y="180" width="180" height="55" fill="none" stroke="#2d6a4f" strokeWidth="1" />
          <rect x="150" y="210" width="100" height="25" fill="none" stroke="#2d6a4f" strokeWidth="1" />
          <circle cx="200" cy="205" r="16" fill="none" stroke="#2d6a4f" strokeWidth="1" strokeDasharray="4 3" />
          <circle cx="200" cy="220" r="2" fill="#2d6a4f" />
          {/* Corner arcs */}
          {[[20, 15], [380, 15], [20, 235], [380, 235]].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="5" fill="none" stroke="#2d6a4f" strokeWidth="1" />
          ))}

          {/* Players — rendering from bottom (GK) to top (attackers) */}
          {positions.map((pos, i) => {
            const svgX = 20 + (pos.x / 100) * 360;
            const svgY = 15 + (pos.y / 100) * 220;
            const isGK = pos.label === "GK";

            return (
              <g key={i}>
                {/* Player dot */}
                <circle
                  cx={svgX}
                  cy={svgY}
                  r="10"
                  fill={isGK ? "#FFB703" : teamColor}
                  stroke="white"
                  strokeWidth="1.5"
                />
                {/* Position label */}
                {showLabels && (
                  <>
                    <text
                      x={svgX}
                      y={svgY + 1}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="6"
                      fontWeight="700"
                      fill="white"
                      fontFamily="system-ui, sans-serif"
                    >
                      {pos.label}
                    </text>
                    {pos.role && (
                      <text
                        x={svgX}
                        y={svgY + 16}
                        textAnchor="middle"
                        fontSize="5"
                        fill="rgba(255,255,255,0.6)"
                        fontFamily="system-ui, sans-serif"
                      >
                        {pos.role}
                      </text>
                    )}
                  </>
                )}
              </g>
            );
          })}

          {/* Direction indicator */}
          <text x="200" y="8" textAnchor="middle" fontSize="5" fill="rgba(255,255,255,0.4)" fontFamily="system-ui">
            OPPONENT
          </text>
          <text x="200" y="244" textAnchor="middle" fontSize="5" fill="rgba(255,255,255,0.4)" fontFamily="system-ui">
            YOUR TEAM
          </text>
        </svg>
      </div>
      <div className="flex items-center gap-4 border-t border-border-light px-4 py-3 text-xs text-foreground-muted">
        <div className="flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded-full bg-yellow-400" />
          Goalkeeper
        </div>
        <div className="flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded-full bg-accent" />
          Outfield Player
        </div>
      </div>
    </div>
  );
}
