---
title: Terminal Life
published: 2025-08-20
description: An adaptation of Conway's Game of Life.
image: "./life1.webp"
tags: ["python", "code"]
category: Code
draft: false
---

# No Framework

In the past I've usually used PyQt for all of my python projects to provide the GUI. And, coincidentally, about 90% of any given project is wrestling and fighting with PyQt to try and force it to do seemingly basic and unimpressive things.

I thought it would be interesting to do a simple small project where I manage everything myself. Qt has a timing loop - I'll handle that instead. Qt draws graphics to screen - I'll handle that. I'll interpret the keypresses, etc. It was an interesting weekend project for me, at least.

# Game of Life

[Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) is a well defined little simulation. The rules are simple.
* Each block is a 'cell', and each cell can either be alive or dead.
* If a cell is alive, but there are too many living cells around it, then it will die from overcrowding. 
* If a cell is dead, but there are a few living cells nearby, they will "reproduce" and switch the cell to alive. 
* If a cell is alive and there aren't too many cells around it to overcrowd it, then it will just stay alive.

Through these rules, there can be a lot of interesting 'living' patterns.

# Demo

<video width="1920" height="1080" muted controls>
  <source src="/videos/life_block_placement.webm" type="video/mp4">
</video>

The simulation has two modes, "live" and "place"/pause; while paused, you can flip cells.

<video width="1920" height="1080" muted controls>
  <source src="/videos/life_presets.webm" type="video/mp4">
</video>

# Download

::github{repo="mostghost/terminal-life"}

If, for some reason, you want to give it a try for yourself, you can grab a copy of it here. Since it runs in the terminal, you'll need a terminal to run it. You may need to hunt down a terminal emulator to run it through windows. Just run 'init.py' with python.

One quick note - the default terminal on many linux distros is the GNOME terminal, which as it turns out, is a tiny bit terrible and slow. It really does not handle screen clearing well at all, which may make the game seem to chug. That's the reason 'screen clearing on/off' is an option- it will skip screen clearing and simply keep rendering each new frame to the terminal in an endless stream. Pretty much any other terminal app will handle screen clearing better.