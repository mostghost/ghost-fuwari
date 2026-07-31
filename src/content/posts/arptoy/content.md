---
title: Arptoy
published: 2024-07-11
description: An arpeggiator from scratch. It comes with a (very shoddy) keyboard for free.
image: "./arptoy2.webp"
tags: ["python", "music", "code"]
category: Code
draft: True
---

# What is this?

An '*arpeggio*' is a music term for when you play the notes of a chord in a repetitive sequence, and an arpeggiat*or* is a mode standard on modern keyboards which will play through those notes automatically. Basically, you hold down some keys, and it will auto-play them in some sort of pleasing pattern. I wanted to make one of my own - it seemed a simple little project that I could put together in a few hours.

# BTS

As with my other python projects, I built it on a base of PyQt to provide the GUI. Before I can create an arpeggiator, I first needed to create a simple keyboard. The keyboard I've got here is pretty basic and bare bones - for one thing, I am allowing Qt to handle the sound, which is not the most robust solution. Qt is capable of it, but it's not really made for high end, precision sound playback. The best solution would have been to create a full and complete synth sound engine, but that would have been an entire project in itself. So I settled for grabbing three sound banks - a classical piano, a wurlitzer, and a clavinet. Janky as this keyboard is, it cannot be hooked up to a proper MIDI keyboard, but there is the option to click notes, slide your mouse over them, or use keybinds mapped to your regular PC keyboard, mapped to roughly the correct shape- ZXC for C, D, E, and SD for C# and D#, for example. You can set an autochord, so that you only need to play a single root note, and the rest of the chord is automatically snagged for you.

The arpeggiator figures out the timing, based on BPM, note type and note length, then cycles through them in the pre-determined patterns. In this case, just 'Up', 'Down', 'Up/Down' and 'Up/Down x2' (where it repeats the highest and lowest notes twice). The number of steps can be adjusted, and each step can have its pitch tuned up or down by up to a full octave - you can potentially make much more complex and organic patterns/polyrhythms by messing around with this.

Unfortunately, I ran out of time, so a few simple functions are missing. Mainly, BPM should ideally have a way to tap out the tempo - ideally you could just keep hitting the 'Tap Tempo' button a few times to the beat you're thinking of, and it will find the tempo for you. This isn't too hard of a function to put in- neither is adding a gate to each step of the arpeggiator, or a "humanize" function on keys - when playing multiple keys together, you can add a tiny little offset to each note to force them to play at slightly different times, which sounds far less synthetic and unnatural. None of these would really be difficult to add, but as usually seems to be the case for me, the hardest and most time consuming part of this project was just trying to wrangle the GUI into compliance, which cut away from time for the rest.

# Gallery

<video width="1280" height="1080" controls>
  <source src="/videos/arptoy_demo.webm" type="video/mp4">
</video>

A quick demo of auto chording, different arp patterns, and evolving patterns you can make by playing around with the arpeggiator.

# Download link
::github{repo="mostghost/arptoy"}

If, for some reason, you want to try it out. I wasn't anticipating anyone else actually using this, so I didn't release any sort of binary or executable; if you really do want to play with it, you'll need to load it up in python yourself. PyQt5 should be the only dependency.