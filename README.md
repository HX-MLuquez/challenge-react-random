# Star Wars Battle App

## Steps 

01. El title de la app debe ser: Star Wars Battle App
02. Debe contener un componente Home
03. El componente Home debe contener un NavBar, un Cards y un List
04. El componente Cards debe estar dividido en dos y contiene en cada división el componente Card 
05. El componente Card es un slide que muestra y oculta una card que contiene al menos 6 atributos del character, entre estos deben estar si o sí: image, name e id
06. El componente List se debe encontrar por debajo del componente cards

## Tareas

01. Crear Random que es un botón selector random de un personaje de star wars
02. Crear Search que es un buscador y selector por nombre de un personaje de star wars
03. Crear AllCharacters que es un botón que nos trae y muestra en el componente List el nombre de todos los personajes de nuestra API

## Importante
Recuerda de reutilizar componentes de ser necesario (no repetir código)


### Material
-   React con: npx create-react-app <nameapp>
-   Estilos con CSS, Material IU, Bootstrap, o cualquier librería a fin. Este trabajo pretende centralizarse en la implementación de React, la aplicación y manipulación de datos desde una api externa y el sentido lógico para desarrollar nuestras funciones.
-   API https://github.com/akabab/starwars-api 
Siendo el único endpoint el siguiente: https://akabab.github.io/starwars-api/api/all.json



### Time aprox. 
```
25´  -> Armar estructura de árbol de componentes sin diseño 
20´  -> Diseño básico
15´  -> codeo, investigar data y conectar la data api a nuestra app usando axios 
30´  -> en lógica del search
30´  -> mejorando diseño
30´  -> lógica de random 
10´  -> llevando todas las cards a la list 
30´  -> re-factorizando

3 horas aprox.
```


### Extras

-   Conseguir que nunca coincidan las cards de la derecha con la izquierda en un mismo momento