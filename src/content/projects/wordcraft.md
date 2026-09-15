---
title: WordCraft
tagline: A word-combination game built with Unity WebGL and adapted to run directly inside Reddit.
year: "Feb 27 – Mar 28, 2025"
role: Unity Developer
kind: game
featured: true
order: 4
orientation: landscape
stack:
  - Unity
  - WebGL
  - React
  - Devvit
  - Reddit
poster: images/wordcraft.jpg
videos:
  - src: videos/wordcraft.mp4
    poster: images/wordcraft.jpg
    caption: Reddit post launch, WebGL loading, and combining words toward Humidity
links:
  - label: Devpost
    href: https://devpost.com/software/word-craft
  - label: Reddit Demo
    href: https://www.reddit.com/r/nb_wordcraft/comments/1jihjp6/wordcraft_difficulty_normal/
---

**WordCraft** was developed for **Hack Reddit 2025**, combining a Unity WebGL game with Reddit's **Devvit** platform. Players combine words to discover new creations, build their vocabulary, and race against a target word within a timed gameplay loop.

My primary responsibility was **refactoring the existing Unity/WebGL build to work within Reddit's Devvit environment**. This involved adapting the game for browser-based embedding and establishing communication between the Unity WebGL client and the surrounding Devvit application.

Key areas of my work included:

- **WebGL Refactoring** — adapted the existing Unity project and build to meet the requirements of the Reddit environment.
- **Devvit Integration** — integrated the Unity WebGL game into the Devvit-powered Reddit experience.
- **Unity ↔ Web Communication** — implemented the communication layer between the WebGL game and its surrounding web application.
- **Reddit Deployment** — configured the game to launch and run directly within a Reddit post.

The result was a Unity game that could be played directly inside Reddit, transforming an existing standalone WebGL build into an embedded Reddit gaming experience.