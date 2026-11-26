import type { ReactNode } from "react";

export type ProjectVideo = {
  src?: string;
  youtube?: string;
  poster: string;
  caption: string;
};

export type ProjectLink = {
  label: string;
  href: string;
  priority: "primary" | "secondary";
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  kind: "game" | "tool";
  featured: boolean;
  order: number;
  orientation: "portrait" | "landscape";
  stack: string[];
  poster: string;
  videos: ProjectVideo[];
  links: ProjectLink[];
  content: ReactNode;
};

export const projects: Project[] = [
  {
    slug: "realm-hunter",
    title: "Realm Hunter",
    tagline:
      "A semi-open-world RPG focused on exploration, quests, and creature collection.",
    year: "2022–2023",
    role: "Unity Engineer (Intern)",
    kind: "game",
    featured: true,
    order: 1,
    orientation: "landscape",
    stack: ["Unity", "C#", "Windows", "A* Pathfinding", "Behavior trees"],
    poster: "images/realm-hunter.jpg",
    videos: [
      {
        youtube: "J65hDxrdObc",
        poster: "images/realm-hunter.jpg",
        caption: "Realm Hunter Demo",
      },
    ],
    links: [
      {
        label: "Internship Report",
        href: "https://kc.umn.ac.id/id/eprint/24664/",
        priority: "primary",
      },
    ],
    content: (
      <>
        <p>
          Realm Hunter was a Unity-based RPG project developed at Not Boring,
          where I worked as a Unity Engineer Intern. The game features
          exploration, quests, creature collection, and a semi-open-world
          structure.
        </p>
        <p>
          During my internship, I was responsible for implementing several
          core gameplay and navigation systems:
        </p>
        <ul>
          <li>
            <strong>Mini Map</strong> — developed the in-game navigation and
            player/world representation.
          </li>
          <li>
            <strong>World Map</strong> — implemented the broader world
            navigation system.
          </li>
          <li>
            <strong>A* Pathfinding</strong> — integrated pathfinding for
            character navigation and movement.
          </li>
          <li>
            <strong>Behavior Tree</strong> — implemented AI behavior using
            behavior-tree logic.
          </li>
        </ul>
        <p>
          These systems supported the game's exploration and AI gameplay while
          being integrated into the broader Unity project developed by the
          team.
        </p>
      </>
    ),
  },
  {
    slug: "wonder-tales",
    title: "Wonder Tales",
    tagline:
      "A hybrid-casual idle adventure about gathering, exploration, and rebuilding a storybook island.",
    year: "2023–2024",
    role: "Unity Engineer",
    kind: "game",
    featured: true,
    order: 2,
    orientation: "landscape",
    stack: [
      "Unity",
      "C#",
      "Mobile",
      "Idle",
      "Hybrid Casual",
      "Behavior Trees",
      "Pathfinding",
    ],
    poster: "images/wonder-tales.jpg",
    videos: [
      {
        youtube: "j_gL3LsFI7M",
        poster: "images/wonder-tales.jpg",
        caption:
          "Dec 8 playtest — island exploration, resource gathering, and the Repair Beacon loop",
      },
    ],
    links: [
      {
        label: "Playtest on YouTube",
        href: "https://www.youtube.com/watch?v=j_gL3LsFI7M",
        priority: "primary",
      },
    ],
    content: (
      <>
        <p>
          <strong>Wonder Tales</strong> is a hybrid-casual idle adventure
          developed at <strong>Not Boring</strong>, combining exploration,
          resource gathering, quests, and village progression on a
          storybook-inspired island.
        </p>
        <p>
          I worked as a <strong>Unity Engineer</strong>, primarily
          responsible for implementing the core gameplay systems and
          integrating UI/UX designs into the game in Unity Engine.
        </p>
        <h2>Gameplay</h2>
        <ul>
          <li>
            <strong>Character Controller</strong> — implemented player
            movement and core character interactions.
          </li>
          <li>
            <strong>Behavior Tree</strong> — implemented behavior logic for
            gameplay entities.
          </li>
          <li>
            <strong>Pathfinding</strong> — implemented navigation and movement
            systems.
          </li>
          <li>
            <strong>Hybrid-Casual Core Loop</strong> — contributed to the core
            gameplay systems supporting the gather, interact, progress, and
            restoration loop.
          </li>
        </ul>
        <h2>UI / UX</h2>
        <p>
          I also implemented the UI/UX designs into the gameplay experience
          across both <strong>World Space</strong> and <strong>Screen Space</strong>
          canvases, integrating gameplay information and interactions into the
          Unity project.
        </p>
      </>
    ),
  },
  {
    slug: "wonderbits",
    title: "WonderBits",
    tagline:
      "A SocialFi idle game built with React and delivered across X, browser extension, PWA, and LINE.",
    year: "2024–2025",
    role: "Frontend Engineer",
    kind: "game",
    featured: true,
    order: 3,
    orientation: "landscape",
    stack: [
      "React",
      "Browser Extension",
      "PWA",
      "Web",
      "X / Twitter",
      "LINE Mini Dapp",
      "Kaia",
      "Idle",
    ],
    poster: "images/wonderbits.jpg",
    videos: [
      {
        src: "videos/wonderbits.mp4",
        poster: "images/wonderbits.jpg",
        caption: "X OAuth, Bit reveal, island shop, and Bit placement",
      },
    ],
    links: [
      {
        label: "WonderBits on X",
        href: "https://x.com/wonderbitsio",
        priority: "primary",
      },
    ],
    content: (
      <>
        <p>
          <strong>WonderBits</strong> is a SocialFi idle game built with{" "}
          <strong>React</strong> framework in TypeScript and JavaScript language, combining virtual pets, island farming, and
          social interaction. The project was delivered across multiple web
          platforms, including a browser extension, PWA, and <strong>LINE Mini
          Dapp</strong> powered by the <strong>Kaia</strong> ecosystem.
        </p>
        <p>
          I worked as a <strong>Frontend Engineer</strong>, handling most of
          the project's frontend implementation such as:
        </p>
        <ul>
          <li>
            <strong>UI/UX Implementation</strong> — translated gameplay and
            interface designs into functional frontend experiences.
          </li>
          <li>
            <strong>Platform Adaptation</strong> — adapted the frontend for the
            browser extension, PWA, and LINE Mini Dapp.
          </li>
          <li>
            <strong>Localization</strong> — implemented localization support
            for the game's user-facing content.
          </li>
        </ul>
      </>
    ),
  },
  {
    slug: "wordcraft",
    title: "WordCraft",
    tagline:
      "A word-combination game built with Unity WebGL and adapted to run directly inside Reddit.",
    year: "Feb 27 – Mar 28, 2025",
    role: "Unity Engineer",
    kind: "game",
    featured: true,
    order: 4,
    orientation: "landscape",
    stack: ["Unity", "WebGL", "React", "Devvit", "Reddit"],
    poster: "images/wordcraft.jpg",
    videos: [
      {
        src: "videos/wordcraft.mp4",
        poster: "images/wordcraft.jpg",
        caption:
          "Reddit post launch, WebGL loading, and combining words toward Humidity",
      },
    ],
    links: [
      {
        label: "Devpost",
        href: "https://devpost.com/software/word-craft",
        priority: "primary",
      },
      {
        label: "Reddit Demo",
        href: "https://www.reddit.com/r/nb_wordcraft/comments/1jihjp6/wordcraft_difficulty_normal/",
        priority: "secondary",
      },
    ],
    content: (
      <>
        <p>
          <strong>WordCraft</strong> was developed for <strong>Hack Reddit
          2025</strong>, combining a Unity WebGL game with Reddit's{" "}
          <strong>Devvit</strong> platform. Players combine words to discover
          new creations, build their vocabulary, and race against a target word
          within a timed gameplay loop.
        </p>
        <p>
          My primary responsibility was adapting the existing Unity/WebGL build
          for Reddit's Devvit environment.
        </p>
        <ul>
          <li>
            <strong>Devvit Integration</strong> — embedded the Unity WebGL game
            in the Reddit experience.
          </li>
          <li>
            <strong>Unity ↔ Web Communication</strong> — implemented the
            communication layer between the WebGL game and its surrounding web
            application.
          </li>
        </ul>
      </>
    ),
  },
  {
    slug: "meowquest",
    title: "MeowQuest",
    tagline:
      "A cute idle RPG where a round cat embarks on a 30-day adventure filled with combat, minigames, and exploration.",
    year: "2025–2026",
    role: "Unity Engineer",
    kind: "game",
    featured: true,
    order: 5,
    orientation: "portrait",
    stack: [
      "Unity",
      "C#",
      "Mobile",
      "Idle RPG",
      "Gameplay UI",
      "Localization",
      "Combat",
    ],
    poster: "images/meowquest.jpg",
    videos: [
      {
        src: "videos/meowquest-1.mp4",
        poster: "images/meowquest-combat.jpg",
        caption: "Core Gameplay Loop",
      },
      {
        src: "videos/meowquest-2.mp4",
        poster: "images/meowquest.jpg",
        caption: "New Player Experience",
      },
    ],
    links: [
      {
        label: "MeowQuest on X",
        href: "https://x.com/MeowQuestGame",
        priority: "primary",
      },
    ],
    content: (
      <>
        <p>
          <strong>MeowQuest</strong> is a mobile idle RPG where players guide a
          cat through a 30-day adventure, combining automated progression with
          combat, exploration, quests, and interactive minigames.
        </p>
        <p>
          I worked as a <strong>Unity Engineer</strong>, focusing primarily on
          gameplay systems, gameplay UI, and supporting systems for the game's
          player experience.
        </p>
        <p>Key areas of my work included:</p>
        <ul>
          <li>
            <strong>Gameplay UI</strong> — implemented gameplay interfaces and
            integrated UI/UX designs into the Unity gameplay experience.
          </li>
          <li>
            <strong>Adventure Minigames</strong> — implemented QTE-style
            minigames used during adventures, including <strong>Rock Paper
            Scissors, Hi-Lo, and Dice</strong>.
          </li>
          <li>
            <strong>Power-Up System</strong> — implemented power-ups that
            provide advantages and modify the player's capabilities during
            adventures.
          </li>
          <li>
            <strong>Equipment System</strong> — implemented equipment-related
            gameplay and progression systems.
          </li>
          <li>
            <strong>Localization</strong> — implemented localization support
            for the game's UI and user-facing content.
          </li>
        </ul>
      </>
    ),
  },
];

export const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

export function getProject(slug: string | undefined): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
