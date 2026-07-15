export interface PlayerTelemetry {
  id: string;
  name: string;
  number: string;
  role: string;
  speed: number;
  heartRate: number;
  flex: number;
  color: string;
  glowColor: string;
  path: [number, number][];
}

export const PLAYERS_DATA: PlayerTelemetry[] = [
  {
    id: "p1",
    name: "Connor McDavid",
    number: "97",
    role: "Center / Carry Command",
    speed: 38.6,
    heartRate: 174,
    flex: 85,
    color: "#22d3ee", // cyan-400
    glowColor: "rgba(34, 211, 238, 0.4)",
    path: [
      [50, 125],
      [150, 50],
      [300, 70],
      [450, 125],
      [380, 200],
      [200, 180],
      [50, 125],
    ],
  },
  {
    id: "p2",
    name: "Nathan MacKinnon",
    number: "29",
    role: "Right Wing / Shot Vector",
    speed: 40.2,
    heartRate: 182,
    flex: 92,
    color: "#f59e0b", // amber-500
    glowColor: "rgba(245, 158, 11, 0.4)",
    path: [
      [80, 200],
      [220, 210],
      [380, 140],
      [420, 60],
      [260, 40],
      [120, 100],
      [80, 200],
    ],
  },
  {
    id: "p3",
    name: "Cale Makar",
    number: "8",
    role: "Defense / Pivot Telemetry",
    speed: 32.4,
    heartRate: 161,
    flex: 78,
    color: "#10b981", // emerald-500
    glowColor: "rgba(16, 185, 129, 0.4)",
    path: [
      [120, 70],
      [220, 60],
      [280, 190],
      [160, 210],
      [100, 150],
      [120, 70],
    ],
  },
];
