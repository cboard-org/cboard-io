---
title: Open-source communication board
date: 2017-12-05
description: The beginning of Cboard
categories:
  - cboard
  - open-source
? imageauthor_staff_member
: shay
---

**Cboard** is a communication board for children and adults who cannot communicate using their voice. A communication board is essentially a grid with pictures or symbols that users can point at to express their needs and thoughts. There are [low-tech solutions](https://www.youtube.com/watch?v=mnyv8h6J4rc) which do not need electricity and high-tech ones which can generate speech.

[![Cboard](/images/app/water-ipad-english.png)](https://github.com/cboard-org/cboard)

Cboard is a free and open-source AAC web application with support for text-to-speech. It was made for a wide range of speech and language impairments such as cerebral palsy, intellectual impairment and autism. It supports 33 languages and works on multiple devices. It comes with more than 3400 symbols from the [Mulberry Symbol Set](https://mulberrysymbols.org/) for creating personalized boards.

## Who needs it?

Commercial solutions can be expensive or have limited language support, this makes them inaccessible to many people in low-income countries.

> According to the World Health Organization, in many low-income countries only 5-15 percent of the people who need assistive technology are able to obtain it

Our goal was to make Cboard a solution that works for everyone, *everywhere*. To accomplish this we used the web as our platform, it enabled us to provide Cboard on desktops, tablets and mobile phones running a modern browser. There is no installation process, no purchase, just follow [a link](https://app.cboard.io) and you’re good to go.

## Why open-source?

Cboard started as an open-source project with no budget, it relied (and still relies) on volunteers from around the world. Contributions and feedback from programmers, speech therapists and language translators, helped shape the project to its current state. The main advantage of being an open-source project is that everyone involved actually care, people contribute in their spare time and for no compensation, some identify with the project’s mission, some care about the technology stack, but **everyone care** and it shows.

## How it started

When I realised that some people may not be able to access such communication aids, I started investigating the feasibility of developing a free, multi-language web alternative. Luckily the web has evolved quite nicely over the last couple of years and now provides all the missing pieces to accomplish such fit, from [Speech Synthesis API](https://www.smashingmagazine.com/2017/02/experimenting-with-speechsynthesis/) to Service Workers, what was left is stitching the pieces together.

## With a little help from my friends

I wanted to find developers who would like to join the adventure, but where do I start? The app is being developed in React JS so I joined [Reactiflux](https://www.reactiflux.com/), a large community of React JS developers. There I found Akshat Gupta, who joined and helped with the initial heavy lifting. I emailed developers asking for help with the project, responses were nice! Some gave tips, some tweeted, [Aaron Gustafson](https://www.aaron-gustafson.com/about/) introduced me to [Amberley Romo](https://www.aaron-gustafson.com/notebook/my-2017-mentees/), an avid developer who joined the team. Martin Bedouret simply showed up on our [Discord Server](https://discord.gg/TEH8uxh) after he had learned about the project online and offered to help. Martin connected the project with [Cireha rehab center](http://www.cireha.com.ar/index.asp) in Argentine, which provides us with counseling and product requirements.

All of these people and [more](https://github.com/cboard-org/cboard/graphs/contributors) have a direct impact on the project’s success, for that I am ever thankful.

![Cireha](/images/cireha-group-outside.jpg)

## UNICEF FTW!

At this stage we had all the essentials for a good project, but to accelerate development we needed funding. This is where [UNICEF Innovation Fund](https://unicefinnovationfund.org/) came to play, after some months of development, we came to know about UNICEF call to fund for open-source AAC applications, we filled the forms and submitted Cboard. A few months later and a demo in between we’ve been told [we have been selected](http://unicefstories.org/2017/12/08/unicef-announces-addition-of-six-start-up-companies-to-2018-investment-portfolio/) for funding. This is huge for the project! and will impact the pace of development and overall quality of our product. We plan on hiring freelancers who will help with proofreading translations and programmers who will help with missing features. The application will continue to be offered for free and continue to be open-source.