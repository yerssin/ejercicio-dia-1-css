# `05` Especificidad

Al crear un documento CSS, debe comenzar desde el selector más genérico y terminar con el más específico, esa es la forma en que funciona CSS.

Se trata del nivel de especificidad. Si especificas que tu div con id="thirditem" tiene un fondo (background) azul, y más adelante en el documento especificas que todos los divs tendrán un fondo amarillo, #thirditem mantendrá su fondo azul. ¡y punto!

Porque cuanto más específico, más prioridad tiene.

## 📝 Instrucciones:

```Plain/Text
1. Anula el color de fondo (background-color) de #thirditem sin eliminar ningún código CSS, simplemente agrega al CSS una regla más específica al final del documento para anular el color de fondo a verde.
```

Tip:

Puedes usar la anotación **!important** :
https://css-tricks.com/when-using-important-is-the-right-choice/


