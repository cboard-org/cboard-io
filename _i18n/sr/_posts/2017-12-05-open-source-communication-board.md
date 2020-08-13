---
title: Komunikacijska tabla otvoreng koda
date: 12.05.2017.
description: Početak Cboard-a
categories:
  - Cboard
  - otvoreni kod
? imageauthor_staff_member
: trka
---

**Cboard** je komunikacijska tabla za decu i odrasle koji ne mogu da komuniciraju svojim glasom. Komunikacijska tabla je u osnovi mreža sa slikama ili simbolima na koje korisnici mogu ukazivati kako bi izrazili svoje potrebe i razmišljanja. Postoje [niskotehnološka rešenja](https://www.youtube.com/watch?v=mnyv8h6J4rc) kojima ne treba električna energija i visoko tehnološka rešenja koja mogu generisati govor.

[![Cboard](/images/app/water-ipad-english.png)](https://github.com/cboard-org/cboard)

Cboard je besplatna aplikacija otvorenog koda sa podrškom za prenos teksta u govor. Napravljena je za širok spektar govorno-jezičkih teškoća koje se javljaju kod cerebralne paralize, smetnji u intelektualnom funkcionisanju i u spektru autizma. Podržava 33 jezika i radi na različitim uređajima. Dolazi sa više od 3400 simbola iz skupa simbola [Mulberry Set](https://mulberrysymbols.org/) za stvaranje personalizovanih tabli.

## Kome je potreban?

Komercijalna rešenja mogu biti skupa ili imaju ograničenu podršku jezika, što ih čini nepristupačnim za mnoge ljude u zemljama sa niskim prihodima.

> Prema Svetskoj zdravstvenoj organizaciji, u mnogim zemljama sa niskim prihodima samo 5-15 posto ljudi kojima je potrebna asistivna tehnologija sposobno je da je dobije

Cilj nam je bio da napravimo Cboard rešenje koje deluje za sve, *svuda*. Da bismo to postigli koristili smo web kao svoju platformu, a ona nam je omogućila Cboard na ekranima, tabletima i mobilnim telefonima sa modernim pretraživačima. Nema procesa instalacije, nema kupovine, samo sledite [vezu](https://app.cboard.io) i dobro idete.

## Zašto open-source?

Cboard je započeo kao projekt otvorenog koda bez budžeta, oslanjao se (i još uvek se oslanja) na volontere iz celog sveta. Doprinosi i povratne informacije programera, logopeda i prevodilaca pomogli su u oblikovanju projekta u njegovo trenutno stanje. Glavna prednost projekta otvorenog koda je ta što svi koji su stvarno uključeni brinu, ljudi doprinose u svoje slobodno vrijeme i bez ikakve naknade, neki se poistovećuju sa misijom projekta, neki se brinu o tehnološkom paketu, ali **svima je stalo** i to je vidljivo.

## Kako je počelo

Kad sam shvatio da neki ljudi možda neće moći da pristupe takvim komunikacijskim pomagalima, počeo sam da istražujem izvodljivost razvoja besplatne, višejezične veb alternative. Srećom se veb razvijao vrlo lepo tokom poslednjih nekoliko godina, a sada pruža sve nedostajuće delove za kompletiranje od [Govor Synthesis API](https://www.smashingmagazine.com/2017/02/experimenting-with-speechsynthesis/) do toga da je ostalo da se svi komadi spoje zajedno.

## Uz malu pomoć mojih prijatelja

Želeo sam da pronađem programere koji bi hteli da se uključe u avanturu, ali gde započeti? Aplikacija se razvija u React JS pa sam se pridružio [Reactiflux](https://www.reactiflux.com/), velikoj zajednici programera React JS. Tamo sam našao Akshata Gupta koji se pridružio i pomogao mi u početnom teškom dizanju. Poslao sam imejlove programerima moleći za pomoć u projektu, odgovori su bili lepi! Neki su davali savete, neki su tvitovali, [Aaron Gustafson](https://www.aaron-gustafson.com/about/) upoznao me sa [Amberley Romo](https://www.aaron-gustafson.com/notebook/my-2017-mentees/), upornim programerom koji se pridružio timu. Martin Bedouret se jednostavno pojavio na našem [nesloge Server](https://discord.gg/TEH8uxh) nakon što je saznao o projektu na internetu i ponudio pomoć. Martin je projekat povezao sa [Cireha centra za odvikavanje](http://www.cireha.com.ar/index.asp) u Argentini, koji nam pruža savetovanje i zahteve proizvoda.

Svi ovi ljude i [više](https://github.com/cboard-org/cboard/graphs/contributors) imaju direktan uticaj na uspeh projekta, za koji sam veoma zahvalan.

![Cireha](/images/cireha-group-outside.jpg)

## UNICEF FTW!

U ovoj fazi smo imali sve što je potrebno za dobar projekat, ali za ubrzanje razvoja potrebna su nam sredstva. Ovde je [UNICEF Innovation Fund](https://unicefinnovationfund.org/) odigrao, nakon višemesečnog razvoja saznali smo za UNICEF-ov poziv za financiranje otvorenih AAC aplikacija, ispunili smo obrasce i predali Cboard. Nakon nekoliko meseci i demo verzije, rečeno nam je [da smo izabrani](http://unicefstories.org/2017/12/08/unicef-announces-addition-of-six-start-up-companies-to-2018-investment-portfolio/) za financiranje. To je veoma važno za projekat! uticaće na tempo razvoja i opšti kvalitet našeg proizvoda. Planiramo da angažujemo slobodnjake koji će pomoći u lektorisanju prevoda, programere koji će pomoći oko nedostajućih funkcija. Aplikacija će se i dalje nuditi besplatno i dalje će biti otvorenog koda.