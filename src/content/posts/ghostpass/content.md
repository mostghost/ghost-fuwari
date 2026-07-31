---
title: Ghostpass
published: 2023-05-23
description: On-the-fly password hashing system
image: "./ghostpass3.webp"
tags: ["python", "code"]
category: Code
draft: True

---

# Security

I got the idea of this from a website; a password generator static page. It would not keep or send any data - it would just take a master password, and then hash out a new password for every website you put in. The advantage for this, compared to password storage, is: you can't lose your storage or vault or otherwise lose access to the passwords. Because the passwords are hashed out on the spot, nothing needs to be stored. There are some major disadvantages too: both for this entire concept, but also specifically for that website. The website used a very old, primitive hashing function that popped out pretty shoddy, insecure passwords. This app was an attempt to fix at least *that* problem.

Ghostpass uses a much better and more secure hashing algorithm, while keeping the same basic idea: it does not store a vault of passwords. Instead, it stores almost nothing, just a list of websites. You need to generate all of the passwords each time you open the app, by entering in your master password - it uses that master password to find all of the other passwords. You could then install ghostpass on any computer, anywhere, and instantly get all of your passwords again. You can never lose access to them.

When we're talking about security in terms of passwords, there are a few major concerns.

### Hacking into your account by cracking the password

This is the kind of security that people are usually thinking of, and to be honest, it's not really the big concern. If your password is above a certain number of characters and uses letters and numbers and special characters, it would take an astronomical number of tries to crack through a password, assuming the website/app/whatever doesn't automatically crack down and start blocking all attempts past the first ten or so. And if it's an automatically generated password that is managed through any sort of storage or vault or etc, then you'll have unique passwords on every site, so for all that effort the attacker will only be able to hack into one account.

### Getting your password indirectly

99.9% of the time, this is the actual way that someone might get at your password. Whether through coming up with a scheme to manipulate you into giving them your password outright, or hacking the website itself and getting an unsecured list of all passwords, this is a much larger danger. A lot of big corporate websites, which really should know better, have absolutely awful security practices and you really have no idea how secure your data actually is on their servers.

However, using any sort of password manager means that even if someone gets your password like this, they only get the password for one single site, and you can just generate another one to stay secure. When you're using a password manager, the real risk then becomes...

### Using your password to find the master password

For Ghostpass specifically, this is the only real risk.

We use a master password to generate each new password. The user only needs to remember one single master password - then, they can download the app at any time, install it on any machine, and generate all of their passwords right there on the spot. The problem is, if the attacker found out about your master password, they could also generate the password for every one of your accounts.

A hashing algorithm is a one way algorithm - ghostpass takes your master password, plus the name of the website, and feeds it through an algorithm that spits out a random jumble of letters and numbers. That random jumble of letters and numbers can't be reversed - that's the whole point of the hashing.

However, what an attacker *could* do is what's called a 'rainbow table'. They can simply start using random inputs to generate hashes. They can do this on their own machine, in their own time, which means that it can be extremely efficient - they could hash millions or billions of passwords within a few minutes, or even a few seconds. They would need to chew through an astronomical number of combinations to find the master password, but at that rate, they could manage it. Once they find an input that outputs the same hash as the password they have, they now have your master password, and can use that to crack all of your other passwords.

# Real Limitations of Ghostpass


### Salts

So from a security standpoint, this is the major issue with ghostpass: it is *theoretically* vulnerable to a rainbow table attacker. To try and combat this, hashing algorithms will "salt" the input string - as well as the master password, it will also mix in an extra random password. The problem with that is, it means the hashing function can only work once - every new generation uses a new salt. That's the entire point - so that you cannot reverse the true master password from any given password, since a given password is generated with (master password + salt).

That defeats the purpose of ghostpass, so I sort of half implemented it - instead, ghostpass asks you for two passwords, and uses the second password as the salt. This does at least mean that, given the much much much longer input string, it would take a ludicrously long time to generate a rainbow table. So insanely long that it is basically impossible through modern technology - but it could be possible through future technology, so it is still vulnerable.

### Variations

Every website has different rules in terms of:
* What kind of characters can be used in a password (numbers and letters only, no numbers, must have special characters, no special characters)
* How long the password can be (must be over 32 characters, must be 8-20 characters, etc)
* Time before you must regenerate a password - sometimes you need to keep putting a new password in every 30-60 days
* User names - maybe you have multiple users and thus multiple passwords attached to a single website

All of these are solved problems in a regular password manager, but make things difficult for ghostpass. Each new extra wrinkle and complication defeat the main purpose of ghostpass (to be able to simply pop the app on, type in "amazon.com", and instantly get your password, no matter where you are - now you must also remember, "amazon.com, 20 characters, no numbers, username exampleUser, etc"), while also making things less secure (all of these extra settings that explain details about your password and user name must be saved somewhere on your system, defeating the purpose of "nothing compromising is saved, only the name of the website")

### Just not a lot of point

To be totally honest with you, I just use keepass myself. It generates ridiculously secure passwords for every site and I can keep the heavily encrypted vault backed up on the cloud and sync'd in multiple locations to ensure that I can't lose it.

# Download

Still, this was an interesting and instructive first major python programming project, and it was pretty useful for a little while before I sold out and just made use of a real manager. [KeepassXC](https://keepassxc.org/) is an open source, cross platform, well vetted, free, very robust solution that is pretty widely used. If you aren't already using a proper, secure password manager, you should probably go for that.

Still, if you want to poke around at ghostpass for some reason, keeping in mind that it was only ever really meant for an audience of myself...

::github{repo="mostghost/ghostpass"}

