---
title: Die Scanfunktion ist für die Community freigegeben
date: 2018-09-14
description: Bereitstellung einer neuen Art der Interaktion zwischen Benutzern und Apps
categories:
  - cboard
  - Benutzerfreundlichkeit
  - Barrierefreiheit
  - reagieren
  - reaktionsscannbar
image: /images/scanning.png
author_staff_member: tinchodipalma
---
## Intro

Wir sind stolz darauf, ein Scan-Tool entwickelt zu haben, das für die Community offen und kostenlos ist. Wir haben dies als `React-Scannable` und können es als Paket von npm herunterladen.

## Was ist reaktionsscannbar?

React-Scannable bietet einen Scanner, dh eine React-Komponente, die ihre scannbaren untergeordneten Elemente (Schaltflächen, Divs, andere Komponenten) untersucht und der App ermöglicht, auf neue Weise mit ihnen zu interagieren.

React-scannable ist ein npm-Paket, das auf React und JavaScript basiert. Entwickler können dieses Paket verwenden, um einen Scanner in ihre React-Projekte aufzunehmen.

## Was macht reaktionsscannbar?

Sobald ein Scanner aktiv ist, durchläuft er die als durchsuchbar identifizierten Elemente und lässt sie Aktionen ausführen, wenn sie auf den Bildschirm fokussiert werden.

![reaktionsscannbar in Aktion](/images/scanning.gif)

Ziel ist es, die Beziehung zwischen dem Benutzer und der Anwendung zu erweitern und eine andere Art der Interaktion zu ermöglichen.

Zu dem Zeitpunkt, an dem dieser Beitrag verfasst wurde, hat `reaktionsüberprüfbare` zwei Interaktionsmethoden: automatisch und manuell.

Die automatische Methode iteriert regelmäßig nacheinander über durchsuchbare Elemente. Sobald Sie eine beliebige Taste drücken (oder auf den Bildschirm klicken), wird das fokussierte durchsuchbare Element ausgewählt und der Scanner durchläuft die darin enthaltenen durchsuchbaren Elemente oder delegiert das Ereignis an das Element, wenn es keine durchsuchbaren untergeordneten Elemente enthält.

Das Verhalten der manuellen Methode ist ganz anders. Es durchläuft durchsuchbare Elemente, wenn der Benutzer die Leertaste / Tabulatortaste drückt, und wählt sie aus, wenn der Benutzer die Eingabetaste / Rücktaste drückt.

Selbst wenn Sie sich in der automatischen oder manuellen Methode befinden, kann der Benutzer den Scanner durch viermaliges Drücken von Escape deaktivieren.

## Cboard und reaktionsscannbar

Cboard verwendet eine reaktionssuchbare Scanfunktion, um die gesamte Platine zu scannen.

Benutzer, die einen Switch für die Interaktion mit Anwendungen verwenden, können wie alle anderen Benutzer kommunizieren.

![Schalter](/images/switch.jpg)

Dies ist sehr wichtig, da behinderte Menschen wie gewohnt mit dem Board interagieren können.

## Warum ein npm-Paket?

Die Idee hinter "React-Scannable" ist, offen für die Community zu sein, Open Sourcing zu betreiben und frei zu nutzen. Sie können den Quellcode von [Github](https://github.com/cboard-org/react-scannable) oder das Paket von [npm Registry](https://www.npmjs.com/package/react-scannable)herunterladen.

Wir möchten, dass die Menschen daran beteiligt werden, indem sie reaktionsüberprüfbare Funktionen in ihren Apps verwenden und die Interaktion ihrer Anwendungen mit den Benutzern erweitern.

Wir ermutigen die Mitarbeiter außerdem, die aufgetretenen Probleme zu melden (und, falls möglich, Korrekturen vorzunehmen) und natürlich neue Funktionen zu entwickeln (warum nicht eine neue Strategie / Methode).