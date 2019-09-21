---
title: Značajka skeniranja pušta se u zajednicu
date: 2018/09/14
description: Pružanje novog načina interakcije između korisnika i aplikacija
categories:
  - cboard
  - iskoristivost
  - pristupačnost
  - reagirati
  - reagiraju-scannable
image: /images/scanning.png
author_staff_member: tinchodipalma
---
## Uvod

S ponosom možemo reći da smo razvili alat za skeniranje koji je otvoren za zajednicu i jednostavan za upotrebu. Nazvali smo to kao `skenirati` i dostupan je za preuzimanje s npm-a kao paket.

## Što se može pretraživati na reakcije?

React-scanni osigurava skener, a to znači React Component koji istražuje njihovu skeniranu djecu (gumbe, divs, druge komponente) i omogućuje aplikaciji interakciju s njima na novi način.

React-skanable je npm paket izgrađen na vrhu React-a i JavaScript-a. Programeri mogu koristiti ovaj paket kako bi uključili skener u svoje React projekte.

## Što radi skeniranje reakcija?

Jednom kada je skener aktivan, nadoknađuje one elemente koji su identificirani kao skenirani i omogućuje im izvršavanje akcija kad se usredotoče na ekran.

![u akciji je moguće skenirati](/images/scanning.gif)

Cilj je proširiti odnos između korisnika i aplikacije, omogućujući još jedan način interakcije.

Do trenutka kada je ovaj post napisan, `skenirati` ima dvije metode interakcije: automatsku i ručnu.

Automatska metoda povremeno ponavlja itekane elemente koji se mogu skenirati. Jednom kada pritisnete bilo koju tipku (ili kliknete na zaslon) odabran je fokusiran element za skeniranje i skener će ponoviti elemente koji se mogu skenirati unutar njega ili će delegirati događaj elementu ako nema djece koja se mogu skenirati.

Ponašanje ručne metode sasvim je drugačije. Ponavlja elemente za skeniranje kada korisnik pritisne tipke za razmak / jezičak i odabire ih ako korisnik pritisne tipke za unos / povratni prostor.

Čak i ako ste u automatskoj ili ručnoj metodi, korisnik može deaktivirati skener pritiskom na tipku Escape četiri puta.

## Karton se može skenirati i reagirati

Cboard koristi mogućnost skeniranja reakcijama za implementaciju značajke skenera samo za skeniranje cijele ploče.

Korisnici koji koriste prekidač za interakciju s aplikacijama mogu komunicirati kao i bilo koji drugi korisnik.

![prekidač](/images/switch.jpg)

Ovo je vrlo važno jer ljudima s invaliditetom omogućuje interakciju s pločom kao i obično.

## Zašto npm paket?

Ideja iza koje se može pretraživati reagiranje je biti otvorena zajednici, otvorena i slobodna za upotrebu. Možete preuzeti izvorni kod iz [GitHub](https://github.com/cboard-org/react-scannable) ili paket od [NPM registra](https://www.npmjs.com/package/react-scannable).

Želimo da ljudi budu uključeni u to, koristeći mogućnost skeniranja reakcija u svojim aplikacijama, proširujući način interakcije njihovih aplikacija s korisnicima.

Također potičemo ljude da izvještavaju o problemima koji imaju (i promoviraju ispravke na njima ako je to moguće), i naravno da razviju nove značajke (zašto ne i novu strategiju / metodu).