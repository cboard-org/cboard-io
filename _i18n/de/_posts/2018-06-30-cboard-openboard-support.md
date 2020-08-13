---
title: Cboard unterstützt den Openboard-Standard
date: 2018-06-30
description: Einführung in Openboard auf Cboard
categories:
  - cboard
  - openboard
  - Open Source
image:
author_staff_member: shay
---

Wir bei Cboard haben kürzlich eine neue und aufregende Funktion veröffentlicht: Openboard-Unterstützung. Dies wird ein Schlüsselelement sein, um Cboard-Benutzern eine flexible Plattform zu ermöglichen, die einfaches Teilen und Migrieren unterstützt.

## Was ist das Open Board-Format?

Open Board Format, kurz OBF, ist eine Spezifikation für AAC-Kommunikationskarten. Sie beschreibt die Daten und die Struktur, die für die Darstellung einer Karte erforderlich sind, von der Anzahl der Rasterzeilen bis hin zu Schaltflächen, Bildern und mehr. Es wurde entwickelt, damit Boards zwischen Apps portiert und von Personen gemeinsam genutzt werden können.

## Warum Open Board Format unterstützen?

Als wir von Open Board Format erfuhren, mussten wir nicht viel nachdenken, die Vorteile lagen auf der Hand, jeder gewinnt, der Benutzer, Cboard und das AAC-Ökosystem (hoffentlich). Der Benutzer kann seine Boards in andere Anwendungen migrieren und Boards für andere Personen freigeben. Cboard kann öffentlich zugängliche Boards von Drittanbietern einbinden, Benutzer können von anderen Apps zu Cboard migrieren. Wenn mehr OBF-kompatible Boards online veröffentlicht werden, werden Boards nicht länger ein Schlüsselfaktor für die Entscheidung zwischen AAC-Apps sein, und Unternehmen müssen sich mehr auf die Verbesserung der Softwarequalität als auf Inhalte konzentrieren, um einen Wettbewerbsvorteil zu erzielen.

## Softwareänderungen

Um den OBF-Import in Cboard zu implementieren, haben wir eine Adapterfunktion erstellt, die ein OBF-Objekt verwendet und ein Objekt ausgibt, das Cboard verstehen und rendern kann. Die Spezifikation definiert auch eine Möglichkeit, Boards als .OBZ-Datei zu bündeln, bei der es sich im Wesentlichen um eine oder mehrere .OBF-Dateien handelt, die über gzip komprimiert wurden. Um gzip zu unterstützen, mussten wir zwei neue `npm` Pakete `jszip` und `jszip-utils`hinzufügen.

![Cboard](/images/app/import.png)

## Was bedeutet das für Cboard-Benutzer?

Wenn Sie Ihr Board in den Cboard `Einstellungen exportieren /` exportieren, haben Sie jetzt die Möglichkeit, es in das Open Board-Format zu exportieren. Klicken Sie auf die Schaltfläche `Export` , wählen Sie den Menüpunkt `OpenBoard` und speichern Sie die Datei. Die Importfunktion hat sich nicht geändert.

![Cboard](/images/app/export.png)

## Was die Zukunft bringt?

Wir hoffen, dass es eines Tages ein Haupt-Repository geben wird, das Open Board Format-kompatible Boards anbietet, einen Marktplatz, der Boards enthält, die von Profis erstellt, nach Kategorien sortiert, nach Personen bewertet und kostenlos angeboten wurden.