---
title: Scanning feature is freed to the community
date: 2018-09-14
description: Providing a new way of interacting between users and apps
categories:
  - cboard
  - usability
  - accessibility
  - react
  - react-scannable
image: /images/scanning.png
author_staff_member: tinchodipalma
---

We are proud to say we have developed a scanning tool that is open to the community and free to use. We called this as `react-scannable` and is available to be downloaded from npm as a package.

## What is react-scannable?

React-scannable provides a scanner, that means a React Component that explores their scannable children (buttons, divs, other components), and allows the app to interact with them in a new way.

React-scannable is a npm package built on the top of React and JavaScript. Developers can use this package to include a scanner into their React projects.

## What does react-scannable do?

Once a scanner is active, it iterates over those elements that have been identified as scannable and lets them execute actions when they get focused on the screen.

![react-scannable in action](/images/scanning.gif)

The objective is to extend the relationship between the user and the application, allowing another way of interaction.

By the moment this post was written, `react-scannable` has two interaction methods: automatic and manual.

Automatic method iterates over scannable elements in sequence periodically. Once you press any key (or click on the screen) the focused scannable element is selected and scanner will iterate over scannable elements within it or delegate the event to the element if it doesn’t have any scannable children.

Manual method behavior is quite different. It iterates over scannable elements when the user presses space/tab keys and selects them if the user presses enter/backspace keys.

Even if you are in automatic or manual method, the user can deactivate scanner by pressing Escape four times.

## Cboard and react-scannable

Cboard uses react-scannable to implement scanner feature just to scan the entire board.

Users that use a switch to interact with applications can communicate as any other user does.

![switch](/images/switch.jpg)

This is very important because it allows handicapped people to interact with the board as usual.

## Zašto npm paket?

The idea behind react-scannable is to be open to the community, open sourced and free to use. You can download the source code from [Github](https://github.com/cboard-org/react-scannable) or the package from [npm registry](https://www.npmjs.com/package/react-scannable).

We want people to be involved in this, using react-scannable in their apps, extending the way their applications interacts with users.

We also encourage people to report the issues they have (and promote fixes to them if its possible), and of course, to develop new features (why not a new strategy/method).