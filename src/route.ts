export type EnemyType = "drone" | "dart" | "turret" | "lancer";

export type FormationType = "line" | "vee" | "column" | "pincer";

export interface WaveSetup {
  tick: number;
  enemy: EnemyType;
  count: number;
  enemyPosition: number;
  enemyFormation: FormationType;
}
export interface SectorSetup {
  name: string;
  subtitle: string;
  length: number;
  waves: WaveSetup[];
}
export const routeTable: SectorSetup[] = [
  {
    name: "Outer Drift",
    subtitle: "Scouts ahead",
    length: 1560,
    waves: [
      {
        tick: 60,
        enemy: "drone",
        count: 4,
        enemyPosition: 240,
        enemyFormation: "line",
      },
      {
        tick: 360,
        enemy: "drone",
        count: 5,
        enemyPosition: 168,
        enemyFormation: "vee",
      },
      {
        tick: 660,
        enemy: "drone",
        count: 5,
        enemyPosition: 312,
        enemyFormation: "vee",
      },
      {
        tick: 960,
        enemy: "drone",
        count: 6,
        enemyPosition: 240,
        enemyFormation: "line",
      },
      {
        tick: 1200,
        enemy: "drone",
        count: 4,
        enemyPosition: 120,
        enemyFormation: "column",
      },
      {
        tick: 1260,
        enemy: "drone",
        count: 4,
        enemyPosition: 360,
        enemyFormation: "column",
      },
    ],
  },
  {
    name: "Shatter Belt",
    subtitle: "Divers incoming",
    length: 1800,
    waves: [
      {
        tick: 60,
        enemy: "drone",
        count: 6,
        enemyPosition: 240,
        enemyFormation: "vee",
      },
      {
        tick: 300,
        enemy: "dart",
        count: 4,
        enemyPosition: 240,
        enemyFormation: "line",
      },
      {
        tick: 600,
        enemy: "dart",
        count: 5,
        enemyPosition: 144,
        enemyFormation: "column",
      },
      {
        tick: 720,
        enemy: "dart",
        count: 5,
        enemyPosition: 336,
        enemyFormation: "column",
      },
      {
        tick: 1020,
        enemy: "drone",
        count: 7,
        enemyPosition: 240,
        enemyFormation: "line",
      },
      {
        tick: 1140,
        enemy: "dart",
        count: 5,
        enemyPosition: 240,
        enemyFormation: "vee",
      },
      {
        tick: 1440,
        enemy: "dart",
        count: 6,
        enemyPosition: 240,
        enemyFormation: "line",
      },
    ],
  },
  {
    name: "Gun Lanes",
    subtitle: "Turrets online",
    length: 1920,
    waves: [
      {
        tick: 60,
        enemy: "turret",
        count: 1,
        enemyPosition: 240,
        enemyFormation: "line",
      },
      {
        tick: 240,
        enemy: "drone",
        count: 6,
        enemyPosition: 240,
        enemyFormation: "vee",
      },
      {
        tick: 540,
        enemy: "turret",
        count: 2,
        enemyPosition: 240,
        enemyFormation: "line",
      },
      {
        tick: 840,
        enemy: "dart",
        count: 6,
        enemyPosition: 240,
        enemyFormation: "column",
      },
      {
        tick: 1080,
        enemy: "turret",
        count: 2,
        enemyPosition: 240,
        enemyFormation: "line",
      },
      {
        tick: 1140,
        enemy: "drone",
        count: 6,
        enemyPosition: 240,
        enemyFormation: "line",
      },
      {
        tick: 1500,
        enemy: "turret",
        count: 3,
        enemyPosition: 240,
        enemyFormation: "line",
      },
    ],
  },
  {
    name: "Lancer Gate",
    subtitle: "Crossfire",
    length: 1920,
    waves: [
      {
        tick: 60,
        enemy: "lancer",
        count: 4,
        enemyPosition: 510,
        enemyFormation: "pincer",
      },
      {
        tick: 360,
        enemy: "dart",
        count: 6,
        enemyPosition: 240,
        enemyFormation: "vee",
      },
      {
        tick: 600,
        enemy: "lancer",
        count: 6,
        enemyPosition: 510,
        enemyFormation: "pincer",
      },
      {
        tick: 780,
        enemy: "turret",
        count: 2,
        enemyPosition: 240,
        enemyFormation: "line",
      },
      {
        tick: 1140,
        enemy: "lancer",
        count: 6,
        enemyPosition: 510,
        enemyFormation: "pincer",
      },
      {
        tick: 1260,
        enemy: "drone",
        count: 8,
        enemyPosition: 240,
        enemyFormation: "vee",
      },
      {
        tick: 1560,
        enemy: "dart",
        count: 8,
        enemyPosition: 240,
        enemyFormation: "line",
      },
    ],
  },
  {
    name: "Last Approach",
    subtitle: "Everything they have",
    length: 2040,
    waves: [
      {
        tick: 60,
        enemy: "turret",
        count: 3,
        enemyPosition: 240,
        enemyFormation: "line",
      },
      {
        tick: 180,
        enemy: "lancer",
        count: 6,
        enemyPosition: 510,
        enemyFormation: "pincer",
      },
      {
        tick: 540,
        enemy: "dart",
        count: 6,
        enemyPosition: 120,
        enemyFormation: "column",
      },
      {
        tick: 540,
        enemy: "dart",
        count: 6,
        enemyPosition: 360,
        enemyFormation: "column",
      },
      {
        tick: 900,
        enemy: "drone",
        count: 9,
        enemyPosition: 240,
        enemyFormation: "vee",
      },
      {
        tick: 1020,
        enemy: "turret",
        count: 2,
        enemyPosition: 240,
        enemyFormation: "line",
      },
      {
        tick: 1320,
        enemy: "lancer",
        count: 8,
        enemyPosition: 510,
        enemyFormation: "pincer",
      },
      {
        tick: 1560,
        enemy: "dart",
        count: 8,
        enemyPosition: 240,
        enemyFormation: "vee",
      },
    ],
  },
  {
    name: "The Warden",
    subtitle: "The Warden approaches",
    length: 0,
    waves: [],
  },
];
