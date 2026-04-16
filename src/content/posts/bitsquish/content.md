---
title: Bitsquish
published: 2023-09-25
description: A sketch management plugin made for an audience of me, and myself alone.
image: "./bitsquish_closeup.webp"
tags: ["krita", "python", "code"]
category: 3D
draft: false
---

# Thresholded

I first learned about the idea of "1 bit" drawing through [Medibang](https://medibangpaint.com/en/); not my favourite app, but this particular feature, I haven't seen anywhere else and it immediately struck a chord with me. The idea is simple: you take a regular, everyday raster paint layer. When you put down a brush stroke, it lays out some sort of a brush in shades of grey - some parts of the stroke will be black, some parts will be darker grey, some parts lighter grey. You can layer one stroke over another to get a darker stroke, etc. Just a standard painting app. But you take that layer, in shades of grey, and you apply a threshold filter on it- every pixel that's above some level of grey will get shifted up to pure black. Every pixel that's below that level of grey is cut out.

What you end up with is a layer with aliasing and jagged edges for a pixel-y look, but which was painted with regular paint strokes. Underneath the threshold filter, the full paint strokes are still there - you can gradually build up strokes in an organic way. Each pixel in the layer is either on or off, black or white - and you can overlay a color on top of each black pixel to shift the entire layer to a new color.

What you end up with is something that looks a bit like pixel art, except with unique advantages and limitations of its own. Each layer is stuck as one color, which forces good layer management - no issues with accidentally drawing the wrong thing to the wrong layer. It will be immediately obvious if you're drawing to the wrong layer. It also allows the flexibility of using a wide variety of complex, organic paint brushes in pixel art - something that's pretty uncommon. Usually, pixel art apps are pretty basic, often only offering either a square or a circle as a brush.

### Pros

* A cool retro-ish blocky pixelly appearance
* Non destructive - there is a more detailed image still underneath the threshold filter. This allows you to do things like rotate the image - normally this doesn't really work with pixel art because there is not enough detail in the layer to know how to rotate it, but here it works just fine, because it retains the greater detail underneath. You can also easily tweak the colors of each layer and radically swap the entire color scheme of an image.
* More flexibility for using regular paint brushes in pixel art, allowing for interesting and unique effects.
* Enforced layer management - you really can't get away with not making sure your layers are separated, which makes it easy to make retroactive changes.

### Cons

* A chunky retro-ish blocky pixelly appearance
* You cannot mix colors while painting. Since "mixing colors" is the entire essence of painting, this makes it an immediate no-go for anyone with a background in painting.
* Pixel artists usually do not care much about large expanded brush sets- they typically want precision, and they want to click and place every pixel individually and precisely. They want to work in small images where complex, organic brushes would be too chaotic to be useful.
* "One color per layer" quickly leads to a huge and somewhat unwieldly layer count. Although forcing the layers to stay separate helps for retroactive changes, in the moment it can make it confusing to pick through dozens of layers if you're not keeping on top of grouping and sorting them.


Overall, I can certainly see why this drawing style is niche to say the least. But it really clicks for me. The ability to keep drawing somewhat non-destructive, where it is always simple and trivial to go back and change some features or the colors or anything else I may want, makes it invaluable.

# Implementing in Krita

Unfortunately, trying to make the plugin in Krita presented some difficulties. Theoretically, I can make it work alright - Krita includes a convinient Threshold filter, and from there it's a matter of managing a few overlays and groups. I can then create my own alternate 'Layers' docker and manage groups of layers and filters as if they were single layers.

Unfortunately, Krita really is not designed for accomodating this. There are countless issues regarding attempting to make it work through the API - the short version is, it is buggy and glitchy and easily broken. There are several kludgy solutions to get around unexpected krita oddities, which simply lead to more issues, until the whole thing is quite unstable. File sizes and performance are also pretty terrible, which is a shame because a big advantage of this method should be that file sizes and performance ought to be exceptionally good due to the undemanding nature of it.

The correct solution is to fork a full painting app and implement this thing properly - but for now, Bitsquish works and it does the job, which makes re-engineering it a low priority. Maybe in the future I'll get around to it. Until then though, I am not releasing this to the public- I'm keeping it for myself. I doubt many would jive with this strange workflow anyway. But you can see the results of my strange little plugin scattered throughout my portfolio.