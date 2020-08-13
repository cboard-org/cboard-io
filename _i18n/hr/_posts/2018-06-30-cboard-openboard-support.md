---
title: Cboard podržava standardne openboard standarde
date: 2018/06/30
description: Uvod u openboard na Cboardu
categories:
  - cboard
  - openboard
  - otvoreni izvor
image:
author_staff_member: trka
---

Nedavno smo u Cboard-u objavili novu i značajku koja se izlazi: podrška za openboard. Ovo će biti ključni dio kako bi se korisnicima CSB-a omogućila fleksibilna platforma koja podržava lako dijeljenje i migraciju.

## Što je Open Board Format?

Otvoreni format ploče, ili ukratko OBF, specifikacija je za AAC komunikacijske ploče, opisuje podatke i strukturu potrebne za predstavljanje ploče, od broja redova rešetki do tipki, slika i više. Stvorena je kako bi ploče mogle biti prenosive između aplikacija i razmjenjive među ljudima.

## Zašto podržati Open Board Format?

Kad smo saznali za Open Board Format, nismo trebali puno razmišljati, prednosti su bile očite, svi pobjeđuju, korisnik, Cboard i AAC eko-sustav (nadamo se). Korisnik može migrirati svoje ploče u druge aplikacije i dijeliti ploče s drugim ljudima. Cboard može sadržavati javno dostupne ploče trećih strana, a korisnici se mogu premjestiti na Cboard s drugih aplikacija. Ako će više OBF kompatibilnih ploča biti objavljeno na mreži, ploče više neće biti ključni faktor u odlučivanju između AAC aplikacija, to će natjerati kompanije da se više usredotoče na poboljšanje kvalitete softvera, a ne na sadržaj, kako bi postigli konkurentski napredak.

## Promjene softvera

Za implementaciju OBF uvoza u Cboard kreirali smo funkciju adaptera koja uzima OBF objekt i ispisuje objekt koji Cboard može razumjeti i prikazati. Specifikacija također definira način povezivanja ploča kao .OBZ datoteka koja je u osnovi jedna ili više .OBF datoteka komprimiranih putem gzipa. Da bismo podržali gzip, trebali smo dodati dva nova paketa `npm` `jszip` i `jszip-utils`.

![Cboard](/images/app/import.png)

## Što to znači za korisnike kartice?

Kada izvozite ploču u zaslon postavki Cboard `/ izvoz` , sada ćete imati mogućnost izvoza u Open Board Format. Kliknite gumb `izvoza` i odaberite stavku `OpenBoard` i spremite datoteku. Funkcija uvoza nije se promijenila.

![Cboard](/images/app/export.png)

## Što budućnost donosi?

Nadamo se da će jednog dana postojati glavno spremište koje će nuditi kompatibilne ploče Open Board Format, tržnice ako hoćete, od ploča koje su kreirali profesionalci, razvrstanih po kategorijama koje su ocijenili ljudi i koje se nude besplatno.