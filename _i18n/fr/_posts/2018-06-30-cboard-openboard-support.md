---
title: Cboard supporte le standard ouvert
date: 2018-06-30
description: Introduction à l'openboard sur Cboard
categories:
  - cboard
  - openboard
  - Open source
image:
author_staff_member: shay
---
## Intro

Chez Cboard, nous avons récemment publié une nouvelle fonctionnalité intéressante: le support Openboard. Cela constituera un élément clé pour permettre aux utilisateurs de Cboard de disposer d'une plate-forme flexible prenant en charge le partage et la migration faciles.

## Qu'est-ce que le format Open Board?

Open Board Format, ou OBF en bref, est une spécification pour les cartes de communication AAC. Il décrit les données et la structure nécessaires pour représenter une carte, du nombre de lignes de la grille aux boutons, en passant par les images. Il a été créé pour permettre aux panneaux d'être portables entre les applications et partageables entre les utilisateurs.

## Pourquoi soutenir le format Open Board?

Lorsque nous avons appris le format Open Board, nous n’avions pas besoin de trop réfléchir, les avantages étaient évidents, tout le monde y gagne, l’utilisateur, Cboard et l’éco-système AAC (espérons-le). L'utilisateur peut migrer ses cartes vers d'autres applications et partager des cartes avec d'autres personnes. Cboard peut intégrer des cartes tierces disponibles au public, les utilisateurs peuvent migrer vers Cboard à partir d'autres applications. Si davantage de cartes compatibles OBF sont publiées en ligne, elles ne seront plus un facteur déterminant dans le choix d'une application AAC, mais obligeront les entreprises à se concentrer davantage sur l'amélioration de la qualité des logiciels plutôt que sur le contenu afin de gagner en compétitivité.

## Changements de logiciel

Pour implémenter l'importation OBF dans Cboard, nous avons créé une fonction d'adaptateur qui prend un objet OBF et génère un objet que Cboard peut comprendre et afficher. La spécification définit également un moyen de regrouper les cartes en tant que fichier .OBZ, qui est essentiellement un ou plusieurs fichiers .OBF compressés via gzip. Pour supporter gzip, nous devions ajouter deux nouveaux paquets `npm` , `jszip` et `jszip-utils`.

![Cboard](/images/app/import.png)

## Qu'est-ce que cela signifie pour les utilisateurs de Cboard?

Lorsque vous exportez votre carte dans l’écran Paramètres / Export</code> Cboard `, vous avez désormais la possibilité d’exporter au format Open Board. Cliquez sur le bouton <code>exportation` , choisissez l’option de menu `OpenBoard` et enregistrez le fichier. La fonctionnalité d'importation n'a pas changé.

![Cboard](/images/app/export.png)

## Que réserve l'avenir?

Nous espérons qu'un jour, il y aura un référentiel principal qui proposera des conseils compatibles avec le format Open Board, un marché si vous préférez, des conseils créés par des professionnels, triés par catégories et proposés gratuitement.