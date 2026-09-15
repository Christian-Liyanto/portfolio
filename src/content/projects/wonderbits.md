---
title: WonderBits
tagline: An idle pet that lives inside X — a browser extension overlay for raising Bits and farming islands.
year: "2024–2025"
role: Gameplay and extension overlay I was responsible for
kind: game
featured: true
order: 3
orientation: landscape
stack:
  - Browser extension
  - X / Twitter overlay
  - Idle
  - Unity / Web
poster: images/wonderbits.jpg
videos:
  - src: videos/wonderbits.mp4
    poster: images/wonderbits.jpg
    caption: X OAuth, Bit reveal, island shop, and placing a Bit to farm
links:
  - label: WonderBits on X
    href: https://x.com/wonderbitsio
---

WonderBits is a social idle game that does not open as a separate app. It sits on X as a Chrome extension: log in with your X account, then a game panel docks over the feed.

The capture shows the loop I was responsible for on the client:

- **X login** — OAuth against `x.com`, then the overlay mounts on the home timeline.
- **Bit reveal** — a creature card (the pink rabbit Bit) as the player's companion.
- **Island shop** — “Buy Island and Start Farming,” with orbs, capsules, and berry prices.
- **Isle placement** — an empty island with “No Bits placed,” waiting for the player to drop a Bit and start idle farming.

The interesting constraint is not the idle math. It is keeping a full shop, tutorial, and creature UI readable as a sidebar on a live social site, without breaking the host page.
