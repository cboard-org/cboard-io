---
title: Cboard supporta standard openboard
date: 2018/06/30
description: Introduzione a openboard su Cboard
categories:
  - cboard
  - openboard
  - open-source
image:
author_staff_member: Shay
---

Alla Cboard abbiamo recentemente rilasciato una nuova ed eccitante funzionalità: il supporto openboard. Questo sarà un elemento chiave per consentire agli utenti di Cboard una piattaforma flessibile che supporti la condivisione e la migrazione facili.

## Che cos'è Open Board Format?

Open Board Format, o OBF in breve, è una specifica per le schede di comunicazione AAC, descrive i dati e la struttura necessari per rappresentare una scheda, dal numero di righe della griglia a pulsanti, immagini e altro. È stato creato per consentire alle schede di essere portatili tra le app e condivisibili tra le persone.

## Perché supportare il formato Open Board?

Quando abbiamo saputo di Open Board Format, non abbiamo avuto bisogno di pensare molto, i vantaggi erano evidenti, tutti hanno vinto, l'utente, Cboard e l'ecosistema AAC (si spera). L'utente può migrare le sue schede su altre applicazioni e condividerle con altre persone. Cboard può incorporare schede di terze parti disponibili pubblicamente, gli utenti possono migrare su Cboard da altre app. Se verranno pubblicate online più schede compatibili OBF, le schede non saranno più un fattore chiave nel decidere tra le app AAC, costringeranno le aziende a concentrarsi maggiormente sul miglioramento della qualità del software piuttosto che sui contenuti per ottenere un vantaggio competitivo.

## Modifiche al software

Per implementare l'importazione OBF in Cboard abbiamo creato una funzione adattatore che accetta un oggetto OBF e genera un oggetto che Cboard può comprendere e renderizzare. La specifica definisce anche un modo per raggruppare le schede come un file .OBZ che è essenzialmente uno o più file .OBF compressi tramite gzip. Per supportare gzip abbiamo dovuto aggiungere due nuovi pacchetti `npm` `jszip` e `jszip-utils`.

![Cboard](/images/app/import.png)

## Cosa significa per gli utenti di Cboard?

Quando esporti la scheda nella schermata Cboard `impostazioni / esporta` , ora avrai la possibilità di esportare in formato scheda aperta. Fare clic sul pulsante `esporta` e selezionare la voce di menu `OpenBoard` e salvare il file. La funzionalità di importazione non è cambiata.

![Cboard](/images/app/export.png)

## Cosa riserva il futuro?

Speriamo che un giorno ci sarà un repository principale che offrirà schede compatibili con Open Board Format, un marketplace, se lo desideri, di schede create da professionisti, ordinate per categorie classificate dalle persone e offerte gratuitamente.