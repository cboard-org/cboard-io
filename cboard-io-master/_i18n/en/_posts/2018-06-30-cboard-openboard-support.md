---
title: Cboard supports openboard standard
date: 2018-06-30
description: Introduction to openboard on Cboard
categories:
  - cboard
  - openboard
  - open-source
image: 
author_staff_member: shay
---
## Intro
We at Cboard recently released a new and exiting feature: openboard support.
This is going to be as key piece in order to allow Cboard users a flexible platform that supports easy sharing and migration.

## What is Open Board Format?
Open Board Format, or OBF in short, is a specification for AAC communication boards, it describes the data and structure needed to represent a board, from the number of grid rows to buttons, images and more. It was created to allow boards to be portable between apps and shareable between people.

## Why support Open Board Format?
When we learned about Open Board Format, we didn’t need to think much, the benefits were obvious, everyone wins, the user, Cboard and the AAC eco-system (hopefully).
The user can migrate his boards to other applications and share boards with other people.
Cboard can incorporate publicly available third party boards, users can migrate to Cboard from other apps.
If more OBF compatible boards will be published online, boards will no longer be a key factor in deciding between AAC apps, it will force companies to focus more on improving software quality rather than content to gain a competitive edge.
 
## Software changes
To implement OBF import in Cboard we created an adapter function that takes an OBF object and outputs an object that Cboard can understand and render. The spec also defines a way to bundle boards as an .OBZ file which is essentially one or more .OBF files compressed via gzip. To support gzip we needed to add two new `npm` packages `jszip` and `jszip-utils`.

![Cboard](/images/app/import.png)

## What does it mean for Cboard users?
When exporting your board in Cboard `settings/export` screen, you will now have the option to export to Open Board Format. Click the `export` button and choose the `OpenBoard` menu item and save the file. Import functionality hasn’t changed.

![Cboard](/images/app/export.png)

## What the future holds?
We’re hoping that one day there will be a main repository that will offer Open Board Format compatible boards, a marketplace if you will, of boards that were created by professionals, sorted by categories rated by people and offered for free.
