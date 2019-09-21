---
title: Carte de communication open-source
date: 2017-12-05
description: Le début de Cboard
categories:
  - cboard
  - Open source
? imageauthor_staff_member
: shay
---

**Cboard** est un tableau de communication pour enfants et adultes qui ne peuvent pas communiquer avec leur voix. Un tableau de communication est essentiellement une grille avec des images ou des symboles que les utilisateurs peuvent pointer pour exprimer leurs besoins et leurs pensées. Il existe [solution low-tech](https://www.youtube.com/watch?v=mnyv8h6J4rc) ne nécessitant pas d'électricité et celle high-tech pouvant générer de la parole.

[![Cboard](/images/app/water-ipad-english.png)](https://github.com/cboard-org/cboard)

Cboard est une application Web AAC gratuite et à code source ouvert prenant en charge la synthèse vocale. Il a été conçu pour un large éventail de troubles de la parole et du langage, tels que la paralysie cérébrale, la déficience intellectuelle et l'autisme. Il prend en charge 33 langues et fonctionne sur plusieurs appareils. Il contient plus de 3 400 symboles du groupe de symboles [Mulberry](https://mulberrysymbols.org/) pour la création de tableaux personnalisés.

## Qui en a besoin?

Les solutions commerciales peuvent être coûteuses ou avoir un support linguistique limité, ce qui les rend inaccessibles à de nombreuses personnes dans les pays à faible revenu.

> Selon l'Organisation mondiale de la santé, dans de nombreux pays à faible revenu, seuls 5 à 15% des personnes ayant besoin d'une technologie d'assistance sont en mesure de l'obtenir.

Notre objectif était de faire de Cboard une solution qui fonctionne pour tout le monde, *partout*. Pour ce faire, nous avons utilisé le Web comme plate-forme, ce qui nous a permis de fournir Cboard sur les ordinateurs de bureau, les tablettes et les téléphones mobiles utilisant un navigateur moderne. Il n'y a pas de processus d'installation, pas d'achat, il suffit de suivre [un lien](https://app.cboard.io) et vous voilà prêt à partir.

## Pourquoi open-source?

Cboard a commencé comme un projet open source sans budget, il s'appuyait (et repose toujours) sur des volontaires du monde entier. Les contributions et les commentaires des programmeurs, des orthophonistes et des traducteurs de langue ont contribué à façonner le projet à son état actuel. Le principal avantage d'un projet open-source est que toutes les personnes impliquées apportent des soins, que les personnes contribuent dans leurs temps libres et sans aucune compensation, certaines s'identifient à la mission du projet, d'autres se soucient de la pile de technologies, mais **tout le monde se soucie** et cela se voit .

## Comment ça a commencé

Lorsque j'ai réalisé que certaines personnes pourraient ne pas être en mesure d'accéder à de telles aides à la communication, j'ai commencé à étudier la faisabilité de développer une alternative Web multilingue gratuite. Heureusement, le Web a très bien évolué au cours des deux dernières années et fournit désormais toutes les pièces manquantes nécessaires à cet ajustement, de [Synthèse vocale API](https://www.smashingmagazine.com/2017/02/experimenting-with-speechsynthesis/) à Service Workers, il ne reste plus qu'à assembler les pièces.

## Avec un peu d'aide de mes amis

Je voulais trouver des développeurs qui voudraient se joindre à l'aventure, mais par où commencer? L'application est en cours de développement dans React JS. J'ai donc rejoint [Reactiflux](https://www.reactiflux.com/), une grande communauté de développeurs de React JS. Là-bas, j'ai trouvé Akshat Gupta, qui a rejoint le groupe et a aidé à soulager les charges lourdes. J'ai envoyé un mail aux développeurs pour leur demander de l'aide pour le projet, les réponses ont été sympas! Certains ont donné des conseils, certains tweeté, [Aaron Gustafson](https://www.aaron-gustafson.com/about/) m'a présenté à [Amberley Romo](https://www.aaron-gustafson.com/notebook/my-2017-mentees/), un développeur passionné qui a rejoint l'équipe. Martin Bedouret s'est tout simplement présenté sur notre serveur [Discord](https://discord.gg/TEH8uxh) après avoir eu connaissance du projet en ligne et proposé de l'aider. Martin a associé le projet au centre de réadaptation [Cireha](http://www.cireha.com.ar/index.asp) en Argentine, ce qui nous a permis de définir des conseils et des besoins en produits.

Toutes ces personnes et [autres](https://github.com/cboard-org/cboard/graphs/contributors) ont un impact direct sur le succès du projet, pour cela je suis toujours reconnaissant.

![Cireha](/images/cireha-group-outside.jpg)

## UNICEF FTW!

À ce stade, nous avions tous les éléments essentiels pour mener à bien un bon projet, mais pour accélérer le développement, nous avions besoin de fonds. [Fonds d'innovation de l'UNICEF](https://unicefinnovationfund.org/) est venu jouer. Après quelques mois de développement, nous avons appris à connaître l'appel de l'UNICEF à financer des applications de CAA à code source ouvert, nous avons rempli les formulaires et soumis Cboard. Quelques mois plus tard et une démo entre nous, on nous a dit [nous avons été sélectionnés](http://unicefstories.org/2017/12/08/unicef-announces-addition-of-six-start-up-companies-to-2018-investment-portfolio/) pour financement. C'est énorme pour le projet! et aura un impact sur le rythme de développement et la qualité globale de notre produit. Nous prévoyons d'embaucher des pigistes qui aideront à la correction des traductions, des programmeurs qui aideront à résoudre les problèmes manquants. L'application continuera d'être offerte gratuitement et continuera d'être open-source.