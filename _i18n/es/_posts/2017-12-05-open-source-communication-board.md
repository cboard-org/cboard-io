---
title: Tablero de comunicación de código abierto
date: 2017-12-05
description: El comienzo de Cboard
categories:
  - tablero
  - fuente abierta
? imageauthor_staff_member
: shay
---

**Cboard** es un tablero de comunicación para niños y adultos que no pueden comunicarse usando su voz. Un tablero de comunicación es esencialmente una cuadrícula con imágenes o símbolos que los usuarios pueden señalar para expresar sus necesidades y pensamientos. Hay [soluciones de baja tecnología](https://www.youtube.com/watch?v=mnyv8h6J4rc) que no necesitan electricidad y soluciones </a> alta tecnología que pueden generar habla.

[![Tablero](/images/app/water-ipad-english.png)](https://github.com/cboard-org/cboard)

Cboard es una aplicación web AAC gratuita y de código abierto con soporte para texto a voz. Fue hecho para una amplia gama de impedimentos del habla y lenguaje tales como parálisis cerebral, impedimento intelectual y autismo. Es compatible con 33 idiomas y funciona en múltiples dispositivos. Viene con más de 3400 símbolos del [Mulberry Symbol Set](https://mulberrysymbols.org/) para crear tableros personalizados.

## Quien lo necesita

Las soluciones comerciales pueden ser costosas o tener un soporte de idiomas limitado, esto las hace inaccesibles para muchas personas en países de bajos ingresos.

> Según la Organización Mundial de la Salud, en muchos países de bajos ingresos solo el 5-15 por ciento de las personas que necesitan tecnología de asistencia pueden obtenerla.

Nuestro objetivo era hacer de Cboard una solución que funcione para todos, *en todas partes*. Para lograr esto, utilizamos la web como nuestra plataforma. Eso nos permite llevar Cboard a computadoras de escritorio, tabletas y teléfonos móviles con un navegador moderno. No hay proceso de instalación, no hay compra, solo sigue [un enlace](https://app.cboard.io) y listo.

## ¿Por qué código abierto?

Cboard comenzó como un proyecto de código abierto sin presupuesto, dependía (y aún depende) de voluntarios de todo el mundo. Las contribuciones y comentarios de programadores, fonoaudioólogos y traductores del lenguaje ayudaron a dar forma al proyecto hasta su estado actual. La principal ventaja de ser un proyecto de código abierto es que todos los involucrados realmente se preocupan, las personas contribuyen en su tiempo libre y sin compensación, algunos se identifican con la misión del proyecto, algunos se preocupan por la pila de tecnología, pero **a todos les importa** y se nota.

## Cómo empezó

Cuando me di cuenta de que algunas personas podrían no tener acceso a ciertas ayudas de comunicación, comencé a investigar la viabilidad de desarrollar una alternativa web gratuita y en varios idiomas. Afortunadamente, la web ha evolucionado bastante bien en los últimos años y ahora proporciona todas las piezas que faltan para lograr ese ajuste, desde [Speech Synthesis API](https://www.smashingmagazine.com/2017/02/experimenting-with-speechsynthesis/) hasta Service Workers, lo que queda es unir las piezas.

## Con una pequeña ayuda de mis amigos

Quería encontrar desarrolladores que quisieran unirse a la aventura, pero ¿por dónde empiezo? La aplicación se está desarrollando en React JS, así que me uní a [Reactiflux](https://www.reactiflux.com/), una gran comunidad de desarrolladores de React JS. Allí encontré a Akshat Gupta, quien se unió y ayudó con el trabajo pesado inicial. Envié un correo electrónico a los desarrolladores pidiendo ayuda con el proyecto y ¡Las respuestas fueron muy buenas! Algunos dieron consejos, algunos tuitearon, [Aaron Gustafson](https://www.aaron-gustafson.com/about/) me presentó a [Amberley Romo](https://www.aaron-gustafson.com/notebook/my-2017-mentees/), un desarrollador ávido que se unió al equipo. Martín Bedouret simplemente apareció en nuestro [servidor de Discord](https://discord.gg/TEH8uxh) después de que se enteró del proyecto en línea y se ofreció a ayudar. Martín conectó el proyecto con [Cireha Rehab Center](http://www.cireha.com.ar/index.asp) en Argentina, que nos brinda asesoramiento y requisitos de producto.

Todas estas personas y [más](https://github.com/cboard-org/cboard/graphs/contributors) tienen un impacto directo en el éxito del proyecto, por eso estoy siempre agradecido.

![Cireha](/images/cireha-group-outside.jpg)

## UNICEF FTW!

En esta etapa teníamos todos los elementos esenciales para un buen proyecto, pero para acelerar el desarrollo necesitábamos financiación. Aquí es donde entró en juego [UNICEF Innovation Fund](https://unicefinnovationfund.org/) . Después de algunos meses de desarrollo, nos enteramos del llamado de UNICEF para financiar solicitudes de AAC de código abierto, llenamos los formularios y presentamos Cboard. Unos meses más tarde y una demostración en el medio nos han dicho [que hemos sido seleccionados](http://unicefstories.org/2017/12/08/unicef-announces-addition-of-six-start-up-companies-to-2018-investment-portfolio/) para su financiación. ¡Esto es enorme para el proyecto!, e impactará el ritmo de desarrollo y la calidad general de nuestro producto. Planeamos contratar trabajadores independientes que ayudarán con la corrección de traducciones, y programadores que ayudarán con las funciones faltantes. La aplicación continuará ofreciéndose de forma gratuita y seguirá siendo de código abierto.