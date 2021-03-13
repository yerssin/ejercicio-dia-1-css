---
tutorial: "https://www.youtube.com/watch?v=rbtHLA813pU"
---

# `01` Hello World en CSS

CSS trata sobre estilos (styles). Para aplicar estilos, siempre debes seguir estos pasos:

1. Lee el HTML y elije en tu mente a qué elemento deseas decorar o aplicar estilos.
1. Programáticamente selecciona el elemento que deseas decorar con los selectores de CSS.
2. Escribe el estilo que quieras usando las reglas CSS.

¡Eso es todo! El resto es solo semántica. 😁

Mira este ejemplo:

```HTML
<style>
    a {
        /* cambia este estilo a yellow */
        color: pink;
    }
</style>
<a href="https://google.com" target="_blank">Click me to open google.com</a>
```

Tenemos un enlace de HTML `<a>` que lleva a las personas a google.com cuando se hace clic.
Usamos CSS para selectionar todas las etiquetas `<a>` y luego hacerlas `pink`.

## 📝 Instrucciones

Pega este código en tu sitio web para ver los resultados.

## 💻 Preview

Debería verse así:

![01 Hello World Exercise Preview](https://ucarecdn.com/7e9496c0-549a-4767-b771-13b9bfc5d9c2/)