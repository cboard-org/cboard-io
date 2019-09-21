---
title: La fonction de numérisation est disponible dans la communauté
date: 2018-09-14
description: Fournir une nouvelle façon d'interagir entre les utilisateurs et les applications
categories:
  - cboard
  - facilité d'utilisation
  - accessibilité
  - réagir
  - réagit-scannable
image: /images/scanning.png
author_staff_member: tinchodipalma
---
## Intro

Nous sommes fiers de dire que nous avons développé un outil d'analyse ouvert à la communauté et libre d'utilisation. Nous l'avons appelé `react-scannable` et peut être téléchargé à partir de npm sous forme de package.

## Qu'est-ce que react-scannable?

React-scannable fournit un scanner, c'est-à-dire un composant React qui explore leurs enfants numérisables (boutons, divs, autres composants) et permet à l'application d'interagir avec eux d'une nouvelle manière.

React-scannable est un paquet npm construit à la base de React et de JavaScript. Les développeurs peuvent utiliser ce package pour inclure un scanner dans leurs projets React.

## Que fait React-scannable?

Une fois le scanner actif, il effectue une itération sur les éléments identifiés comme numérisables et leur permet d'exécuter des actions lorsqu'ils se focalisent sur l'écran.

![réagit-scannable en action](/images/scanning.gif)

L'objectif est d'étendre la relation entre l'utilisateur et l'application, en permettant une autre façon d'interagir.

Au moment où cet article a été écrit, `react-scannable` dispose de deux méthodes d'interaction: automatique et manuelle.

La méthode automatique effectue une itération périodique sur les éléments numérisables. Une fois que vous avez appuyé sur une touche (ou que vous avez cliqué sur l'écran), l'élément analysable ciblé est sélectionné et l'analyseur itérera sur les éléments analysables qu'il contient ou déléguera l'événement à l'élément s'il ne possède aucun enfant analysable.

Le comportement de la méthode manuelle est assez différent. Il parcourt les éléments pouvant être analysés lorsque l'utilisateur appuie sur les touches espace / tabulation et les sélectionne s'il appuie sur les touches Entrée / Retour arrière.

Même si vous utilisez une méthode automatique ou manuelle, l'utilisateur peut désactiver le scanner en appuyant quatre fois sur Echap.

## Cboard et React Scannable

Cboard utilise react-scannable pour implémenter la fonction scanner, uniquement pour analyser le tableau en entier.

Les utilisateurs qui utilisent un commutateur pour interagir avec des applications peuvent communiquer comme tout autre utilisateur.

![commutateur](/images/switch.jpg)

C'est très important car cela permet aux personnes handicapées d'interagir avec le tableau comme d'habitude.

## Pourquoi un paquet npm?

L'idée derrière react-scannable est d'être ouvert à la communauté, open source et libre d'utilisation. Vous pouvez télécharger le code source depuis [Github](https://github.com/cboard-org/react-scannable) ou le paquet depuis le registre [npm](https://www.npmjs.com/package/react-scannable).

Nous souhaitons que les gens soient impliqués dans ce processus, en utilisant ré-analysable dans leurs applications, en étendant la façon dont leurs applications interagissent avec les utilisateurs.

Nous encourageons également les utilisateurs à signaler les problèmes qu’ils rencontrent (et à y apporter des correctifs, si possible) et, bien entendu, à développer de nouvelles fonctionnalités (pourquoi pas une nouvelle stratégie / méthode).