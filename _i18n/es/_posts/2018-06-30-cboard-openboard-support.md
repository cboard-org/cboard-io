---
title: Cboard soporta estándar de tablero abierto
date: 2018-06-30
description: Introducción a openboard en Cboard
categories:
  - tablero
  - Openboard
  - fuente abierta
image:
author_staff_member: shay
---

Nosotros en Cboard lanzamos recientemente una nueva y emocionante función: soporte de tablero abierto. Será una pieza clave para permitir a los usuarios de Cboard una plataforma flexible que permita compartir y migrar fácilmente.

## ¿Qué es el formato de tablero abierto?

Open Board Format, o OBF en resumen, es una especificación para las placas de comunicación AAC, describe los datos y la estructura necesarios para representar una placa, desde el número de filas de la cuadrícula hasta botones, imágenes y más. Fue creado para permitir que los tableros sean portátiles entre aplicaciones y compartibles entre personas.

## ¿Por qué admitir Open Board Format?

Cuando nos enteramos del formato Open Board, no tuvimos que pensar mucho, los beneficios fueron obvios, todos ganan, el usuario, Cboard y el ecosistema AAC (con suerte). El usuario puede migrar sus tableros a otras aplicaciones y compartir tableros con otras personas. Cboard puede incorporar tableros de terceros disponibles al público, los usuarios pueden migrar a Cboard desde otras aplicaciones. Si se publicarán más tableros compatibles con OBF en línea, los tableros ya no serán un factor clave para decidir entre las aplicaciones AAC, obligará a las empresas a centrarse más en mejorar la calidad del software en lugar del contenido para obtener una ventaja competitiva.

## Cambios de software

Para implementar la importación OBF en Cboard, creamos una función de adaptador que toma un objeto OBF y genera un objeto que Cboard puede entender y representar. La especificación también define una forma de agrupar tableros como un archivo .OBZ que es esencialmente uno o más archivos .OBF comprimidos a través de gzip. Para admitir gzip, necesitábamos agregar dos paquetes nuevos de `npm` `jszip` y `jszip-utils`.

![Tablero](/images/app/import.png)

## ¿Qué significa para los usuarios de Cboard?

Al exportar su tablero en la configuración de Cboard `/ pantalla de exportación` , ahora tendrá la opción de exportar a Open Board Format. Haga clic en el botón `exportar` y elija el elemento</code> menú `OpenBoard ` y guarde el archivo. La funcionalidad de importación no ha cambiado.

![Tablero](/images/app/export.png)

## ¿Qué depara el futuro?

Esperamos que algún día haya un repositorio principal que ofrezca tableros compatibles con Open Board Format, un mercado si lo desea, de tableros que fueron creados por profesionales, ordenados por categorías clasificadas por personas y ofrecidas de forma gratuita.