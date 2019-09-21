---
title: Scheda di comunicazione open source
date: 2017/12/05
description: L'inizio di Cboard
categories:
  - cboard
  - open-source
? imageauthor_staff_member
: Shay
---

**Cboard** è una scheda di comunicazione per bambini e adulti che non possono comunicare usando la propria voce. Una scheda di comunicazione è essenzialmente una griglia con immagini o simboli che gli utenti possono indicare per esprimere i loro bisogni e pensieri. Esistono [soluzioni a bassa tecnologia](https://www.youtube.com/watch?v=mnyv8h6J4rc) che non richiedono elettricità e soluzioni ad alta tecnologia che possono generare discorsi.

[![Cboard](/images/app/water-ipad-english.png)](https://github.com/cboard-org/cboard)

Cboard è un'applicazione web AAC gratuita e open source con supporto per la sintesi vocale. È stato creato per una vasta gamma di disturbi del linguaggio e del linguaggio come paralisi cerebrale, compromissione della capacità intellettuale e autismo. Supporta 33 lingue e funziona su più dispositivi. Viene fornito con oltre 3400 simboli del [Mulberry Symbol Set](https://mulberrysymbols.org/) per la creazione di schede personalizzate.

## Chi ne ha bisogno?

Le soluzioni commerciali possono essere costose o avere un supporto linguistico limitato, questo le rende inaccessibili a molte persone nei paesi a basso reddito.

> Secondo l'Organizzazione mondiale della sanità, in molti paesi a basso reddito solo il 5-15 percento delle persone che necessitano di tecnologie assistive sono in grado di ottenerlo

Il nostro obiettivo era rendere Cboard una soluzione che funzioni per tutti, *ovunque*. A tale scopo, abbiamo utilizzato il Web come piattaforma, che ci ha consentito di fornire Cboard su desktop, tablet e telefoni cellulari con un browser moderno. Non esiste un processo di installazione, nessun acquisto, basta seguire [un collegamento](https://app.cboard.io) e sei a posto.

## Perché open-source?

Cboard è iniziato come un progetto open source senza budget, facendo affidamento (e ancora conta) su volontari di tutto il mondo. Contributi e feedback di programmatori, logopedisti e traduttori di lingua hanno contribuito a modellare il progetto allo stato attuale. Il vantaggio principale di essere un progetto open-source è che tutti i soggetti coinvolti si interessano effettivamente, le persone contribuiscono nel loro tempo libero e senza compenso, alcuni si identificano con la missione del progetto, alcuni si preoccupano dello stack tecnologico, ma **tutti importa** e questo dimostra .

## Come è iniziato

Quando mi sono reso conto che alcune persone potrebbero non essere in grado di accedere a tali strumenti di comunicazione, ho iniziato a studiare la fattibilità dello sviluppo di un'alternativa web multilingue multilingue. Fortunatamente il web si è evoluto abbastanza bene negli ultimi due anni e ora fornisce tutti i pezzi mancanti per realizzare tale adattamento, da [Speech Synthesis API](https://www.smashingmagazine.com/2017/02/experimenting-with-speechsynthesis/) a Service Workers, ciò che è rimasto è ricucire i pezzi insieme.

## Con un piccolo aiuto dai miei amici

Volevo trovare sviluppatori che vorrebbero unirsi all'avventura, ma da dove comincio? L'app è stata sviluppata in React JS, quindi mi sono unito a [Reactiflux](https://www.reactiflux.com/), una vasta comunità di sviluppatori di React JS. Lì ho trovato Akshat Gupta, che si è unito e ha aiutato con il sollevamento pesante iniziale. Ho inviato un'email agli sviluppatori chiedendo aiuto con il progetto, le risposte sono state belle! Alcuni hanno dato consigli, altri hanno twittato, [Aaron Gustafson](https://www.aaron-gustafson.com/about/) mi ha fatto conoscere [Amberley Romo](https://www.aaron-gustafson.com/notebook/my-2017-mentees/), uno sviluppatore avido che si è unito al team. Martin Bedouret semplicemente si presentò sul nostro [Discordia Server](https://discord.gg/TEH8uxh) dopo che aveva imparato a conoscere il progetto online e offerto di aiutare. Martin ha collegato il progetto con il centro di riabilitazione [Cireha](http://www.cireha.com.ar/index.asp) in Argentina, che ci fornisce consulenza e requisiti di prodotto.

Tutte queste persone e [più](https://github.com/cboard-org/cboard/graphs/contributors) hanno un impatto diretto sul successo del progetto, per questo io sono sempre grato.

![Cireha](/images/cireha-group-outside.jpg)

## UNICEF FTW!

In questa fase avevamo tutti gli elementi essenziali per un buon progetto, ma per accelerare lo sviluppo avevamo bisogno di finanziamenti. È qui che è entrato in gioco [UNICEF Innovation Fund](https://unicefinnovationfund.org/) , dopo alcuni mesi di sviluppo, siamo venuti a conoscenza della chiamata dell'UNICEF a finanziare applicazioni AAC open source, abbiamo compilato i moduli e inviato Cboard. Qualche mese dopo e tra una demo ci è stato detto [siamo stati selezionati](http://unicefstories.org/2017/12/08/unicef-announces-addition-of-six-start-up-companies-to-2018-investment-portfolio/) per il finanziamento. Questo è enorme per il progetto! e inciderà sul ritmo di sviluppo e sulla qualità generale del nostro prodotto. Abbiamo in programma di assumere freelance che aiuteranno a correggere le traduzioni, i programmatori che aiuteranno con le funzioni mancanti. L'applicazione continuerà ad essere offerta gratuitamente e continuerà ad essere open-source.