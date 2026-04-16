---
title: Oughtasave
published: 2023-01-01
description: Autosave replacement for krita.
image: "./oughtasave2.webp"
tags: ["python", "krita"]
category: Code
draft: false
---

# Autosave

A trivially simple bit of code, but probably my most useful. There is one big, glaring issue with Krita, my preferred painting app. Mostly, I like it, but the autosave system is wildly misnamed. What they've implemented is more of a crash recovery system, not an autosave. It will periodically take a save of your current file, and put it in a temporary folder. Then, should Krita ever crash, it will have a save ready to restore your file. The critical thing is, any time you close Krita, *it will delete the autosave*. This is by design, and Krita's maintainers are not responsive to bug requests asking to change this behavior. I find this absolutely jaw droppingly bizarre, but it is what it is.

So this is just a quick plugin and workaround for krita that will automatically save your file for you every 5 minutes. (Or more or less- settings are available in the plugin).

If you happen to use Krita, I would highly recommend you use this.

::github{repo="mostghost/oughtasave"}
