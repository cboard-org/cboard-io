---
title: Ploča za komunikaciju s otvorenim kodom
date: 2017/12/05
description: Početak kartona
categories:
  - cboard
  - otvoreni izvor
? imageauthor_staff_member
: trka
---

**Ploča** je komunikacijska ploča za djecu i odrasle koji ne mogu komunicirati svojim glasom. Komunikacijska ploča u osnovi je mreža sa slikama ili simbolima na koje korisnici mogu ukazivati kako bi izrazili svoje potrebe i razmišljanja. Postoji [niskotehnoloških rješenja](https://www.youtube.com/watch?v=mnyv8h6J4rc) kojima ne treba električna energija i visoko tehnološka rješenja koja mogu generirati govor.

[![Cboard](/images/app/water-ipad-english.png)](https://github.com/cboard-org/cboard)

Cboard je besplatna i open-source AAC web aplikacija s podrškom za tekst u govor. Izrađena je za široki spektar govornih i jezičnih oštećenja kao što su cerebralna paraliza, intelektualno oštećenje i autizam. Podržava 33 jezika i radi na više uređaja. Dolazi s više od 3400 simbola iz skupa simbola [Mulberry Set](https://mulberrysymbols.org/) za stvaranje personaliziranih ploča.

## Kome treba?

Komercijalna rješenja mogu biti skupa ili imaju ograničenu podršku jezika, što ih čini nepristupačnim za mnoge ljude u zemljama s niskim prihodima.

> Prema Svjetskoj zdravstvenoj organizaciji, u mnogim zemljama s niskim prihodima samo 5-15 posto ljudi kojima je potrebna pomoćna tehnologija sposobno je dobiti

Cilj nam je bio napraviti Cboard rješenje koje djeluje za sve, *svugdje*. Da bismo to postigli koristili smo web kao svoju platformu, a ona nam je omogućila pružanje kartice na radnim površinama, tabletima i mobilnim telefonima s modernim preglednikom. Nema procesa instalacije, nema kupnje, samo slijedite [vezu](https://app.cboard.io) i dobro idete.

## Zašto open-source?

Cboard je započeo kao projekt otvorenog koda bez budžeta, oslanjao se (i još uvijek se oslanja) na volontere iz cijelog svijeta. Doprinosi i povratne informacije programera, logopeda i prevoditelja jezika pomogli su u oblikovanju projekta u njegovo trenutno stanje. Glavna prednost projekta otvorenog koda je ta što svi koji su stvarno uključeni brinu, ljudi doprinose u svoje slobodno vrijeme i bez ikakve naknade, neki se poistovjećuju s misijom projekta, neki se brinu o tehnološkom paketu, ali **svima je stalo** i to pokazuje ,

## Kako je počelo

Kad sam shvatio da neki ljudi možda neće moći pristupiti takvim komunikacijskim pomagalima, počeo sam istraživati izvodljivost razvoja besplatne, višejezične web alternative. Srećom se web razvijao vrlo lijepo tijekom posljednjih nekoliko godina, a sada pruža sve nedostajuće dijelove je ostvariti takav napadaj od [Govor Synthesis API](https://www.smashingmagazine.com/2017/02/experimenting-with-speechsynthesis/) do uslužnim djelatnostima, ono što je ostalo je šivanje komada zajedno.

## Uz malu pomoć mojih prijatelja

Željela sam pronaći programere koji bi se željeli uključiti u avanturu, ali gdje započeti? Aplikacija se razvija u React JS pa sam se pridružio [Reactiflux](https://www.reactiflux.com/), velikoj zajednici programera React JS. Tamo sam našao Akshata Gupta koji se pridružio i pomogao mu u početnom teškom dizanju. Poslao sam e-poštu programerima moleći za pomoć u projektu, odgovori su bili lijepi! Neki su davali savjete, neki tweetali, [Aaron Gustafson](https://www.aaron-gustafson.com/about/) upoznao me sa [Amberley Romo](https://www.aaron-gustafson.com/notebook/my-2017-mentees/), upornim programerom koji se pridružio timu. Martin Bedouret jednostavno pojavio na našem [nesloge Server](https://discord.gg/TEH8uxh) nakon što je saznao o projektu na internetu i ponudio pomoć. Martin je projekt povezao sa [Cireha centra za odvikavanje](http://www.cireha.com.ar/index.asp) u Argentini, koji nam pruža savjetovanje i potrebe za proizvodima.

Sve ove ljude i [više](https://github.com/cboard-org/cboard/graphs/contributors) imati izravan utjecaj na uspjeh projekta, za koji sam ikad zahvalan.

![Cireha](/images/cireha-group-outside.jpg)

## UNICEF FTW!

U ovoj smo fazi imali sve što je potrebno za dobar projekt, ali za ubrzanje razvoja potrebna su nam sredstva. Tu se počeo igrati [UNICEF Innovation Fund](https://unicefinnovationfund.org/) , nakon višemjesečnog razvoja saznali smo za UNICEF-ov poziv za financiranje otvorenih AAC aplikacija, ispunili smo obrasce i predali Cboard. Nekoliko mjeseci kasnije i demonstracija između, rečeno nam je [da smo izabrani](http://unicefstories.org/2017/12/08/unicef-announces-addition-of-six-start-up-companies-to-2018-investment-portfolio/) za financiranje. To je ogromno za projekt! te će utjecati na tempo razvoja i opću kvalitetu našeg proizvoda. Planiramo angažirati slobodnjake koji će pomoći u lektoriranju prijevoda, programere koji će pomoći u nedostatku značajki. Aplikacija će se i dalje nuditi besplatno i dalje će biti otvorenog koda.