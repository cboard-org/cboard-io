---
title: Cboard podržava standard otvorene table
date: 2018/06/30
description: Uvod u openboard na Cboardu
categories:
  - cboard
  - openboard
  - otvoreni kod
image:
author_staff_member: trka
---

Nedavno smo u Cboard-u objavili i novu postojeću odliku: podršku za openboard. Ovo će biti ključni deo kako bi se korisnicima Cboard-a omogućila fleksibilna platforma koja podržava lako deljenje i migraciju.

## Šta je Open Board Format?

Otvoreni format table, ili skraćeno OBF, je specifikacija za AAK komunikacijske table, opisuje podatke i strukturu potrebnu za predstavljanje table, od broja redova rešetke do tipki, slika i sl. Kreirana je kako bi table mogle biti prenosive između aplikacija i razmenjive među ljudima.

## Zašto podržati Open Board Format?

Kad smo saznali za Open Board Format, nismo trebali mnogo da razmišljamo, prednosti su bile očigledne, svi pobeđuju, korisnik, Cboard i AAK eko-sistem (nadamo se). Korisnik može migrirati svoje table u druge aplikacije i deliti table sa drugim ljudima. Cboard može da sadrži javno dostupne table trećih strana, a korisnici mogu preći na Cboard sa drugih aplikacija. Ako će više OBF kompatibilnih tabli biti objavljeno na mreži, table više neće biti ključni faktor u odlučivanju između AAK aplikacija, što će naterati kompanije da se više usredsrede na poboljšanje kvaliteta softvera, a ne na sadržaj, kako bi postigli konkurentski napredak.

## Promene softvera

Za implementaciju OBF uvoza u Cboard kreirali smo funkciju adaptera koji uzima OBF objekt i ispisuje objekt koji Cboard može razumeti i prikazati. Specifikacija takođe definiše način povezivanja tabli kao .OBZ datoteka koje su u osnovi jedna ili više .OBF datoteka komprimovanih putem gzipa. Da bismo podržali gzip, trebali smo da dodamo dva nova paketa `npm` `jszip` i `jszip-utils`.

![Cboard](/images/app/import.png)

## Šta to znači za korisnike Cboard-a?

Kada izvozite tablu u Cboard `/ izvoz` ekran, sada ćete imati mogućnost izvoza u Open Board Format. Kliknite dugme `izvoz` i odaberite stavku `OpenBoard` i sačuvajte datoteku. Funkcija uvoza se nije promenila.

![Cboard](/images/app/export.png)

## Šta budućnost donosi?

Nadamo se da će jednog dana postojati glavno spremište koje će nuditi kompatibilne table Open Board Formata, tržnice ako hoćete, od tabli koje su kreirali profesionalci, razvrstanih po kategorijama koje su ocenili ljudi i koje se nude besplatno.