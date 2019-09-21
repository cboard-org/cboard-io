---
title: La funzione di scansione è libera per la comunità
date: 2018/09/14
description: Fornire un nuovo modo di interagire tra utenti e app
categories:
  - cboard
  - usabilità
  - accessibilità
  - reagire
  - reagire-scannable
image: /images/scanning.png
author_staff_member: tinchodipalma
---
## Intro

Siamo orgogliosi di dire che abbiamo sviluppato uno strumento di scansione aperto alla comunità e gratuito da usare. Abbiamo chiamato questo come `reattivo-scansionabile` ed è disponibile per essere scaricato da npm come pacchetto.

## Cosa è reattivo-scansionabile?

React-scannable fornisce uno scanner, ovvero un componente React che esplora i loro figli analizzabili (pulsanti, div, altri componenti) e consente all'app di interagire con loro in un modo nuovo.

React-scannable è un pacchetto npm creato sulla parte superiore di React e JavaScript. Gli sviluppatori possono utilizzare questo pacchetto per includere uno scanner nei loro progetti React.

## Cosa fa la reattività scansionabile?

Una volta che uno scanner è attivo, scorre su quegli elementi che sono stati identificati come scansionabili e consente loro di eseguire azioni quando si concentrano sullo schermo.

![reattivo-scansionabile in azione](/images/scanning.gif)

L'obiettivo è estendere il rapporto tra l'utente e l'applicazione, consentendo un altro modo di interazione.

Al momento in cui questo post è stato scritto, `Reagibile per la scansione` ha due metodi di interazione: automatico e manuale.

Il metodo automatico scorre periodicamente su elementi scansionabili. Quando si preme un tasto qualsiasi (o si fa clic sullo schermo) viene selezionato l'elemento scansionabile focalizzato e lo scanner eseguirà l'iterazione su elementi scansionabili al suo interno o delegherà l'evento all'elemento se non ha figli scansionabili.

Il comportamento del metodo manuale è piuttosto diverso. Passa in rassegna gli elementi scansionabili quando l'utente preme i tasti spazio / scheda e li seleziona se l'utente preme i tasti invio / backspace.

Anche se si utilizza il metodo automatico o manuale, l'utente può disattivare lo scanner premendo Esc quattro volte.

## Lavagna e reattiva scansionabile

Cboard utilizza la reattività scansionabile per implementare la funzione scanner solo per scansionare l'intera scheda.

Gli utenti che utilizzano un interruttore per interagire con le applicazioni possono comunicare come qualsiasi altro utente.

![interruttore](/images/switch.jpg)

Questo è molto importante perché consente alle persone con handicap di interagire con il consiglio come al solito.

## Perché un pacchetto npm?

L'idea alla base di reagire alla scansione è quella di essere aperti alla comunità, di provenienza aperta e liberi da usare. Puoi scaricare il codice sorgente da [Github](https://github.com/cboard-org/react-scannable) o il pacchetto dal registro [npm](https://www.npmjs.com/package/react-scannable).

Vogliamo che le persone siano coinvolte in questo, usando la reattività scansionabile nelle loro app, estendendo il modo in cui le loro applicazioni interagiscono con gli utenti.

Incoraggiamo anche le persone a segnalare i problemi che hanno (e promuoviamo correzioni per loro, se possibile) e, naturalmente, a sviluppare nuove funzionalità (perché non una nuova strategia / metodo).