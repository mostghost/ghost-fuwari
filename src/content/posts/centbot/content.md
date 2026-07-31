---
title: Centbot
published: 2024-07-08
description:  Modelled with the cutting edge technology of 2001. 
image: "./centbot.webp"
tags: ["blender", "model", "sci-fi", "animation", "tech"]
category: 3D
draft: false
---

# Old Techniques

The primary goal was to try and make an old PS1-esq retro-looking asset with a limited polygon count. The restraint you need to make a 700 polygon robot turned out to be more difficult than I expected, and I blew past my polygon budget by about 15x.

## Inverse Hull

The outlines were all made with a simple but effective and performance-cheap method. The idea is to abuse backface culling- when rendering the image, you can choose to ignore any polygon "facing" the wrong way from the camera. So, you take your object, and you create a copy of it as a shell that is slightly larger than the real object - but you flip it inside out, so that the shell surfaces all point inward. When rendering, you'll ignore the parts of the shell that are facing the camera, because those are the 'back'. But the parts of the shell on the opposite side are pointed inwards towards the camera, and those are included.

The background uses the same technique as the robot. The width of the lines is determined by how thick the shell is - you can make cleaner, neater lines just by making the shell smaller.

# Gallery

![concept](038b.webp)
Concept art. I ended up not changing much from my first pass, except for the arm weapons. The centaur legs did not actually require any change. While modelling, I just realized I could just repeat his legs 3 times for an interesting effect.

![concept](centbot12.webp)
Only a portion of him actually had to be textured. The rest is just flipped to the other side. I was trying to be somewhat authentic to the era, and maximize and pack in texture space as much as I could.

![concept](turtsoldier.webp)
I made him some friends to play with as well. The original intent was to put a few dozen of these guys in the scene along with him. Maybe I'll return to this guy in the future.