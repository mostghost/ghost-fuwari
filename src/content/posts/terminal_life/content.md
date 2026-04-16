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

When you start up any coding project, the first step is usually to grab a framework, or a dozen frameworks. Somebody else has already created some sort of engine for putting a GUI on the screen, or pumping sound through the speakers, or interpreting your controller button presses to maneouver whatever is going on on-screen. In the past I've usually used PyQt for all of my python projects to provide the GUI. And, coincidentally, about 90% of any given project is wrestling and fighting with PyQt to try and force it to do seemingly basic and unimpressive things, such as "Please do not lose the keyboard focus from the text window just because I clicked a button" or "Please stop resizing this button, this button really should stay the same size and I have no idea why you are overriding me when I'm asking you very politely not to do that".

I thought it would be interesting to do a simple small project where I manage everything myself. I'll manage the timing myself, I'll manage what's on screen myself (or, well, I'll just print stuff to the terminal), I'll interpret the keypresses myself. This isn't really all that impressive- this is a very small project, and besides, this is how *all* programming used to be done (albeit before I was even born) and python is a much easier language to work with than, say, assembly - you could argue that python itself is practically a framework. Still, I wanted to play around a bit.

# Game of Life

[Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) is a simple little well defined 'game'. The rules are simple - each block is a 'cell', and each cell can either be alive or dead. On every frame, each cell is checked - if it is alive, but there are too many living cells around it, then it will die from overcrowding. If it is dead, but there are several living cells nearby, they will "reproduce" and switch the cell to alive. If a cell is alive and there aren't too many cells around it to overcrowd it, then it will just stay alive.

Through these rules, there can be a lot of interesting patterns.

# Demo

<video width="1920" height="1080" muted controls>
  <source src="/videos/life_block_placement.webm" type="video/mp4">
</video>

The simulation has two modes, "live" and "place"/pause; while paused, you can flip cells.

<video width="1920" height="1080" muted controls>
  <source src="/videos/life_presets.webm" type="video/mp4">
</video>

There are a handful of presets to pick from, just to demonstrate how it works without having to manually toggle every cell yourself.

# Download

::github{repo="mostghost/terminal-life"}

If, for some reason, you want to give it a try for yourself, you can grab a copy of it here. It works best on linux or mac, since I'm assuming you have a terminal with which to run it from. You may need to hunt down a terminal emulator to run it through windows, but if you already are using python on windows, you probably have something figured out. Otherwise, just run 'init.py' with python.

One quick note - the default terminal on many linux distros is the GNOME terminal, which as it turns out, is a tiny bit terrible and slow. It really does not handle screen clearing well at all, which may make the game seem to chug. That's the reason 'screen clearing on/off' is an option at all. Pretty much any other terminal app will handle this better.