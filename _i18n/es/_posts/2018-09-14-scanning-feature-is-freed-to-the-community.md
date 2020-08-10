---
title: La función de escaneo se libera a la comunidad
date: 2018-09-14
description: Proporcionar una nueva forma de interactuar entre usuarios y aplicaciones.
categories:
  - tablero
  - usabilidad
  - accesibilidad
  - reaccionar
  - reaccionable escaneable
image: /images/scanning.png
author_staff_member: tinchodipalma
---

Estamos orgullosos de decir que hemos desarrollado una herramienta de escaneo abierta a la comunidad y de uso gratuito. Llamamos a esto como `react-scannable` y está disponible para descargarse desde npm como un paquete.

## ¿Qué es react-scannable?

React-scannable proporciona un escáner, es decir, un componente React que explora sus elementos secundarios escaneables (botones, divs, otros componentes) y permite que la aplicación interactúe con ellos de una manera nueva.

React-scannable es un paquete npm creado en la parte superior de React y JavaScript. Los desarrolladores pueden usar este paquete para incluir un escáner en sus proyectos React.

## ¿Qué hace react-scannable?

Una vez que un escáner está activo, itera sobre los elementos que se han identificado como escaneables y les permite ejecutar acciones cuando se enfocan en la pantalla.

![react-scannable en acción](/images/scanning.gif)

El objetivo es extender la relación entre el usuario y la aplicación, permitiendo otra forma de interacción.

En el momento en que se escribió esta publicación, `react-scannable` tiene dos métodos de interacción: automático y manual.

El método automático itera sobre elementos escaneables en secuencia periódicamente. Una vez que presiona cualquier tecla (o hace clic en la pantalla), se selecciona el elemento escaneable enfocado y el escáner iterará sobre los elementos escaneables dentro de él o delegará el evento al elemento si no tiene hijos escaneables.

El comportamiento del método manual es bastante diferente. Se itera sobre elementos escaneables cuando el usuario presiona las teclas de espacio / tabulación y los selecciona si el usuario presiona las teclas Intro / Retroceso.

Incluso si está en método automático o manual, el usuario puede desactivar el escáner presionando Escape cuatro veces.

## Tablero y react-scannable

Cboard utiliza react-scannable para implementar la función de escáner solo para escanear toda la placa.

Los usuarios que usan un interruptor para interactuar con las aplicaciones pueden comunicarse como lo hace cualquier otro usuario.

![cambiar](/images/switch.jpg)

Esto es muy importante porque permite que las personas con discapacidad interactúen con el tablero como de costumbre.

## ¿Por qué un paquete npm?

La idea detrás de react-scannable es estar abierto a la comunidad, de código abierto y de uso gratuito. Puede descargar el código fuente de [Github](https://github.com/cboard-org/react-scannable) o el paquete del registro</a>de npm.</p> 

Queremos que la gente se involucre en esto, usando react-scannable en sus aplicaciones, extendiendo la forma en que sus aplicaciones interactúan con los usuarios.

También alentamos a las personas a informar los problemas que tienen (y promovemos soluciones si es posible) y, por supuesto, a desarrollar nuevas funciones (¿por qué no una nueva estrategia / método?).