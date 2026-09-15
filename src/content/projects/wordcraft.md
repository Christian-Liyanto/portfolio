---
title: WordCraft
tagline: Combine Fire and Water into Steam, then chase a target word — a Unity WebGL game that runs inside Reddit.
year: "2025"
role: Unity gameplay I was responsible for
kind: game
featured: true
order: 3
orientation: landscape
stack:
  - Unity
  - WebGL
  - React
  - Devvit
  - Reddit
  - OpenAI
poster: images/wordcraft.jpg
videos:
  - src: videos/wordcraft.mp4
    poster: images/wordcraft.jpg
    caption: Reddit post launch, loading, and combining words toward Humidity
links:
  - label: Devpost
    href: https://devpost.com/software/word-craft
  - label: Reddit demo
    href: https://www.reddit.com/r/nb_wordcraft/comments/1jihjp6/wordcraft_difficulty_normal/
---

WordCraft was built for Hack Reddit 2025. Players fuse two words to discover a third, grow a dictionary, and race a timer toward a target — in the demo, **Humidity**.

The playable loop:

1. Open a Reddit post in `r/nb_wordcraft`.
2. Unity WebGL loads inside the post (“Preparing elements…”).
3. Drag and combine starter elements (Fire, Water, Earth, Wind) into Steam, Fog, Moving Fog, Lava, Stone.
4. The word pool fills. Beat the clock.

I was responsible for the Unity gameplay that had to survive Reddit’s webview: a compressed WebGL build, message bridging to Devvit for post state, and a UI that still reads when it is a panel inside a thread rather than a fullscreen game.
