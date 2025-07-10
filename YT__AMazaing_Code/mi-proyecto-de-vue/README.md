# Curso completo desde cero - Vue | AMazaing Code - YouTube

<hr />
<br />

## 01. Empezar con Vue.js
- Asegurarse de tener nodejs instalado (Con ello viene npm).
- Crear un nuevo proyecto en la ruta deseada.
    - Hacerlo con **vue-cli**
        - `sudo npm install -g @vue/cli`.
        - `vue create nombre-proyecto`.
            - Debe estar todo en minúsculas sin espacios.
        - `cd nombre-proyecto && npm run serve`.
        - Ejecutar en `http://localhost:8080`.
    - Hacerlo con **vite**
        - `npm create vite@latest`.
            - Poner: Nombre del proyecto, tecnología a usar (JS, TS).
        - `cd nombre-proyecto && npm i && npm run dev`.
        -Ejecutar en `http://localhost:5173`.

<br />

## 02. Esquema de Carpetas y Ficheros
- Contiene archivos de configuración, dependencias, archivo de documentación `README.md`, almacenamiento general de archivos compartidos y el `src` que es la carpeta principal de todo el proyecto.
- La carpeta `src` es la principal y más importante de todo el proyecto.
- Solo cuenta con un único archivo *HTML* para todo el desarrollo del sitio web.
- Estructura similar a un proyecto de *ReactJS*.

<br />

## 03. Extensión Vue Oficial (VSCode)
- La extensión **Vue (Official)** es un complemento de *Visual Studio Code* disponible en su tienda de extensiones para facilitar el trabajo con archivos y proyectos desarrollados en **Vue** en cuanto a resaltado de sintaxis y otras herramientas propias del framework.

<br />

## 04. Componentes
- **Estructura**
    - Etiqueta `<script setup></script>`
        - Contiene la lógica visual.
        - Todo lo referente a código *JavaScript*.
    - Etiqueta `<template></template>`
        - Contiene la estructura visual que será mostrado en la página web correspondiente.
        - Todo lo referente a código *HTML*.
    - Etiqueta `<style scoped></style>`
        - Contiene los estilos que serán aplicados a la estructura visual definida anteriormente.
        - Todo lo referente a código *CSS*.
    - Se pueden usar distintos métodos para organizar los ficheros dentro de un proyecto con Vue. Se recomienda el uso de **Composition API**. Esto solo hace que la organización cambie pero la funcionalidad permanece igual.
- Permite delegar el renderizado de partes del sitio web a un archivo dedicado y su posterior reutilización múltiples veces en un mismo u otros archivos.

<br />

## 05. Variables
- **Tipos de variables**
    - *Variables estáticas*
        - Se definen en la sección donde va el JavaScript pero no afectan al contenido que se muestra en tiempo real.
        - Solo es dinámico dentro de la ejecución de JavaScript entre las etiquetas `<script setup></script>`.
    - *Variables dinámicas*
        - Su valor es dinámico tanto en el código JavaScript (`<script setup></script>`) como en el contenido del sitio web `<template></template>`.
        - Permite un cambio de valor en tiempo real en el renderizado de un sitio web.
        - Requiere de la función `ref` que se exporta con `import {ref} from 'vue';` y se usa para la definición del valor inicial.
            - Ejemplo: `let number: ref(0)`
        - Para acceder al valor de la referencia (`ref()`) se usa el método `value` sobre el nombre de la variable que lo contiene.
            -Ejemplo: `console.log(number.value)`

<br />

## 06. Eventos
- Se agregan directamente en la sección del `<template></template>`.
- Su sintaxis es la siguiente a modo de atributo en el elemento *HTML* objetivo:
    - `@event="function(args)"`
- **Detalles a tener en cuenta**
    - Si la función a usar no requiere de pasarle argumentos, se puede escribir sin los paréntesis para un uso más simplificado y declarativo.
    - Reemplaza a los `object.addEventListener()` de JavaScript.
    - Tiene múltiples opciones de eventos que pueden ser seleccionados según la necesidad.

<br />

## 07. V-Bind
- Permite darle dinamismo a los atributos HTML mediante JS.
- Su sintaxis es la siguiente: `v-bind:attribute="variable/function(args)"`
- **Detalles a tener en cuenta**
    - No es necesario escribir `v-bind` al querer un atributo dinámico, también puede ser así: `:attribute="variable/function(args)"`
    - Permite dos tipos de elementos JS, una variable estática o dinámica y una función contenida en una variable o definida con el método tradicional.
        - Si es una función, debe de ponerse los paréntesis para cerrar la declaración de la función sin importar si se le pasa información o no.
        - Puede pasarse argumentos que recibirá la función para trabajar y producir un resultado a partir de esa información.
    - La información que se modifique, por ejemplo, en un "input" a partir de un "value" dinámico, no se verá modificado en su declaración original dentro del código JavaScript.

<br />

## 08. V-Model
- Comportamiento similar a `V-Bind`.
- No tiene forma de abreviarse, debe de escribirse completo y sustituye al atributo *"value"* de los "input".
- Su sintaxis es la siguiente: `v-model="variable/function(args)`
- Su valor es dinámico por lo que cambia al instante de ser modificado en todos los lugares en el que ha sido usado.

<br />

## 09. Clases dinámicas
- Mezcla conceptos de **variables** y **V-Bind** (Con opción de implementar clases dinámicas basadas en **Eventos**).
- Puede ser cuan complejo se requiera, pero el punto importante es enfocarse en obtener un valor *booleano* que permita la asignación de clases de manera condicionada.

<br />

## 10. V-If
- Es muy parecido a `If-else` de JS.
- Permite para mostrar contenido HTML dinámicamente dependiendo de una condición.
- También funciona con valores "Truefy" o "Falsy"
- **Tipos de V-If**
    - Atributo **v-if**
        - Es el elemento principal con el cuál se mostrará el elemento al cuál se le designó este atributo si una condición se cumple.
        - Es la primera opción de visualización.
    - Atributo **v-else-if**
        - Es el elemento secundario a modo de una segunda oportunidad en caso de que lo anterior no se cumpla.
        - No suele usarse mucho.
    - Atributo **v-else**
        - Si todo lo anterior falla, se muestra el elemento que lleve este atributo.
- Su funcionamiento se basa en una estructura **If - Else if - Else** de manera simplificada a un único atributo dentro de una etiqueta HTML según corresponda.

<br />

## 11. V-For (Listas)
- Cumple con la función de un elemento iterador `for(name in list) {}`.
- Lo principal se realiza en atributos dentro de las etiquetas de apertura de *HTML*.
- Entre la etiqueta se puede definir el contenido tanto estático como dinámico usando la variable declarada en el `v-for`.
- Su sintaxis es: `v-for="variable in listItems"`.
    - Ahora `variable` es accesible dentro de la etiqueta que lo contiene.
    - Si `variable` tiene un objeto, puede seguirse destructurando sin problemas.
- Se hace uso de la anotación `{{ }}` para poder mostrar la respectiva información.

<br />

## 12. V-For index
- Funcionamiento igual al `v-for`.
- Se le agrega otra variable más a la definición en la extracción de la información durante el recorrido de la lista elegida
- Su sintaxis es: `v-for="(variable1, variable2) in listItems"`.
    - **Variable1** es el que recibe la información destructurada.
    - **Variable2** es el que recibe el índice, usualmente llamada bajo el nombre de `index`.
Su acceso sigue consistiendo entre la anotación `{{ }}` para mostrar la respectiva información.

<br />

## 13. V-For object
- Similar a como se renderiza una lista de valores pero con otra manera de recorrer para objetos.
- Se usa una lista desordenada para representar toda la información recorrida por el `for`.
    - El elemento `li` es el que representará la información, por lo que sobre ese elemento se iterará.
- Se puede hacer con otros elementos *HTML*.

<br />

## 14. Props
- Son datos que viajan entre un **Componente Padre** a un **Componente Hijo**.
- Transferencia de datos entre componentes siguiendo la jerarquía de componentes (Padre --> Hijo).
- **¿Qué se puede pasar?**
    - Cualquier tipo de datos posible.
    - Usualmente se pasan objetos o listas.
    - También pueden pasarse variables y funciones.
- El valor a pasar del padre al hijo se pasa dentro de un **atributo** HTML bajo el nombre identificador que espera el hijo.
- En el componente hijo, se le debe especificar el nombre identificador junto con su tipo de dato, muy similar a como se realiza en **ReactJS**.
    - La sintaxis es: `defineProps({ propName: type ... })`
        - Su uso es con la anotación `{{ }}` como con cualquier otro parámetro externo a *HTML*.

<br />

## 15. Component Events (Emits)
- Permite la comunicación de un **Componente hijo** a un **Componente padre** (Al revés que un prop).
- Viaja todo tipo de información al igual que en un **Prop**.
- **Pasos para definir y usar un evento personalizado**
    - Se crea una variable usualmente llamada `emit` con `defineEmits(["nombreEvento"])` para definir el *evento personalizado*.
    - Luego se crea una función que contenga la llamada a la variable "emit" con la siguiente sintaxis:
        - Sintaxis: `emit("nombreEvento", data)`
    - Luego se usa un evento predefinido (Usualmente "click") para poder usar la función declarada anteriormente que define el uso del evento personalizado.
        - Ejemplo: `@click="nombreEvento"`
    - Luego, en el **componente padre**, especificarle en el **componente hijo** que cuando se dispare el evento personalizado, haga algo en una función.
        - Esa función especificada en el **componente padre** recibirá un argumento que puede o no recibirse agregando su respectivo parámetro.
        - Realizará las acciones especificadas.
        - Ejemplo: `@nombreEvento="nombreFuncion"`.
- Siempre se usará una función para procesar la información que llega del **Componente Hijo** al **Componente Padre**.

<br />

## 16. Slots
- Mantiene el conceptos de los **props** anteriores definidos.
- Se enfoca en transferir bloques de código HTML en vez de variables o similar.
- Su sintaxis es: `<slot></slot>`
- Muy útil para hacer ventanas modales o construcción de elementos hijo complejos.
- Permite definir un contenido por defecto por si el elemento padre no manda nada.

<br />

## 17. Named Slots
- Son como los **Slots** pero personalizados.
- **Funcionamiento**
    - Se declara los slots personalizados en el elemento hijo.
    - Desde el elemento padre, se define el contenido a pasar dentro de las etiquetas del elemento hijo.
        - Se define etiquetas `<template></template>` por cada slot personalizado que se le desee pasar.
        - se usa el atributo `v-slot:slotName` para hacer referencia al slot personalizado al cuál se le quiere pasar información.
            - Este atributo se usa en el `<template></template>`.
        - Se pueden definir cuantos "custom slots" se requieran.
- **Sintaxis**
    - En el componente hijo: `<slot name="nombreSlot"></slot>`.
    - En el componente padre: `<nombreComponenteHijo> <template v-slot:nombreSlot> <contenidoHTMLaquí /> </template> </nombreComponenteHijo>`

<br />

## 18. Computed
- Funciona como un **useEffect** de **ReactJS**.
- Permite almacenar valores (variables) que dependen de una variable externa a sí mismo para actualizar su información en cuestión.
- Requiere importación en JS: `import { computed } from "vue";`.
- Su sintaxis es `computed(callback())` donde el "callback" será una función (Usualmente función flecha) que almacenará el valor variable que dependerá de otra variable.
- Un ejemplo de uso es en un contador de caracteres en un formulario.
- Más eficiente de usar y al ejecutar.

<br />

## 19. Watch
- Es un método especial que permite vigilar una variable.
    - Si la variable vigilada cambia, se puede ejecutar el código que se requiera.
- **Parámetros**
    - Primer parámetro: Representa la variable que se desea vigilar
    - Segundo parámetro: Recibe un callback que es la función a ejecutar cuando la variable cambie.
    - Tercer parámetro (Opcional): Recibe un objeto que tiene opciones de uso y configuración.
- **Características**
    - Permite recuperar el nuevo valor y el antíguo valor a modo de parámetros en el callback de "Watch".
    - También acepta valores de tipo objeto.
        - Se pierde el valor anterior al nuevo valor escrito en el momento del cambio de estado de variable.
        con la opción **"deep"** permite revisar la referencia del objeto a fondo con su información almacenado.
- **Sintaxis**
    - Inicializador principal: `watch(variable, callback, options)`
    - Ejemplo: 
        ```javascript
            import { ref, watch } from "vue";

            const userName = ref({ name: "Nombre principal" });
            const setName = () => {
                userName.value.name = "Un nombre";
            }

            watch(
                userName,
                (newValue, oldValue) => {
                    console.log("User Name modified", newValue, oldValue);
                },
                {
                    immediate: true,
                    deep: true
                }
            );
        ```

<br />

## 20. watchEffect
- Este método parte de la misma base del método **Watch**.
- Solo requiere de un parámetro obligatorio, que es el **"Callback"**.
    - El **"watchEffect"** sabe que variable se quiere vigilar según la variable que se use dentro del *"callback"*.
    - Acepta los mismos tipos de datos que **"watch"**.
- Se ejecuta automáticamente al cargar la página, igual a la opción `immediate: true` de las opciones de `watch`.
- **Sintaxis**
    - Inicializador principal: `watchEffect(callback)`.
    - Ejemplo:
        ```javascript
            import { ref, watchEffect } from "vue";

            const userName = ref({ name: "Nombre principal" });
            const setName = () => {
                userName.value.name = "Otro nombre";
            }

            watchEffect(
                () => {
                    console.log("User Name modified to: ", userName);
                }
            );
        ```

<br />

## 21. Formularios
- La definición de formularios en *Vue* es muy similar a como se define un formulario en tecnologías FrontEnd *Vanilla*.
- Si bien no hay algo que haga directamente un formulario completo con pocas líneas de código, la reactividad y manejo de eventos de propagación son fáciles de manipular.
- **Elementos Básicos**
    - Definición de las etiquetas básicas de un formulario
        - Se define la base `<form></form>` que llevará el evento de escucha de envío de información y su prevención de propagación si así se requiere.
        - Definición de `<input />` para la captura de información, el cuál llevará el atributo `v-model=""` para la modificación instantánea de datos en el objeto que almacena la información del formulario.
        - Opcional declaración de `<label for=""></label>` para los títulos del input y su vinculación con los elementos "input".
    - El uso de elementos *HTML* según las necesidades.
    - Declaración de una función que defina que hacer con la información ingresada en el formulario.
    - Definición de un objeto que contenga los campos a capturar del formulario.
- **Ejemplo**
    - Un ejemplo de formulario construido es el siguiente:
    ```javascript
        import { reactive } from "vue";

        // Objeto que almacena la información ingresada en el formulario por el usuario.
        const movie = reactive({
            title: "",
            duration: 0,
            director: ""
        });

        // Maneja la información enviada desde el formulario.
        const handleSubmit = () => {
            if(!movie.title || !movie.duration || !movie.director) {
                alert("Rellena todos los campos, por favor");
                return;  //Se sale de la función para que no haga más nada en caso de faltar algún campo por rellenar
            }
            console.log(movie);  //Se ejecuta si todos los campos fueron rellenados.
        }
    ```

    ```html
        <h1>Formularios</h1>

        <!-- Definición del formulario con el evento de envío de información previniendo que este evento de recarga se propague por toda la página. -->
        <form @submit.prevent="handleSubmit" class="form">
            <label for="title">Título</label>
            <!-- El atributo "v-model" permite que la información ingresada en el "input" sea modificada en su respectivo objeto. Se vincula con la etiqueta "label" -->
            <input v-model="movie.title" type="text" id="title" />

            <!-- 
                Poner tantos campos como se quieran capturar siguiendo la estructura de arriba para su definición, respetando los tipos de datos
                esperados para una mejor validación de información directamente por parte de HTML.
            -->
        </form>
    ```

    ```css
        /* Definición de los estilos para el formulario declarado */
        .form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    ```
- El uso de `reactive` es lo mismo que usar `ref` con la diferencia de que el primero permite objetos.

<br />

## 22. Router
- Permite crear rutas según la cantidad de páginas que deseemos tener dentro del sitio web.
- Las rutas se alimentan de los componentes que renderizan la información de un sitio web dividida por páginas.
    - Estos componentes suelen ser grandes.
    - Son distintos que los componentes pequeños que se encargan de la renderización de partes pequeñas de una página web.
- Requiere de un nuevo paquete *"npm"* llamado `vue-router`.
    - Su instalación se realiza con `npm install vue-router`.
- **Preparación**
    - Creación de la carpeta *"Pages"*
        - También puede llamarse *"views"*.
        - Aquí se almacenará los componentes que conformen una página web completa.
    - Creación de la carpeta *"router"*
        - Se almacenará el código necesario para establecer las rutas usando la dependencia `vue-router`.
        - El archivo suele llamarse `index.js`.
- **Configuración**
    - La configuración consta del siguiente código *JavaScript* en la carpeta "router":
        ```javascript
            // La función "createRouter" define la creación del enrutamiento
            // La función "createWebHistory" define la posibilidad de ver en la barra de búsqueda toda la ruta de acceso a una página web
            import { createRouter, createWebHistory } from "vue-router";  //Responsable de la definición de las rutas
            import Home from "../pages/Home.vue";  //Página web a ser enrutada
            import Movies from "../pages/Movies.vue";  //Página web a ser enrutada
            import CreateMovie from "../pages/CreateMovie.vue";  //Página web a ser enrutada

            // Definición de la constante que le dirá a Vue como debe manejar el enrutamiento
            const router = createRouter({
                // Requiere dos parámetros, el historial de rutas accedidas (Barra de búsqueda) y la lista de objetos que son las rutas
                history: createWebHistory(),
                routes: [
                    {
                        path: '/'  //Define la ruta en la que está el archivo, en este caso es la ruta principal
                        name: 'home'  //Es el nombre identificador de la ruta, no se muestra en la URL y sirve para hacer un "route-link" dinámico
                        component: Home  //Se le pasa el componente el cuál debe ser renderizado en esa ruta establecida
                    }
                    // Establecer tantas rutas como se requieran
                ]
            });

            // Exportar la constante para que sea accesible en el proyecto
            export default router;
        ```
    - En el archivo `App.vue` no se le define todo el componente ahí por más pequeño que sea, solo contendrá lo estándar y su contenido principal enrutado: `<RouterView />`
    - Para que todo esto funcione, en el archivo `main.js` debe de especificarse que se quiere usar un enrutamiento, el archivo quedaría algo tal que así:
        ```javascript
            import { createApp } from 'vue'
            import './style.css'
            import App from './App.vue'
            import router from './router'

            createApp(App).use(router).mount('#app')
        ```
    - Por último, se crean los archivos necesarios para el enrutamiento definido con su contenido.
- Con el enrutamiento, los componentes se dividen en dos grupos:
    - *Componentes regulares*
        - Contienen partes pequeñas de una *página web* y se alojan en una carpeta llamada *"components"*.
        - Dividen la delegación por cada fragmento que compone la página web en construcción.
    - *Componentes grandes o componentes web*
        - Manejan todo el renderizado de una *página web*.
        - Son los que van en el enrutamiento y se definen en la carpeta *"pages"*.

<br />

## 23. Router Links
- Permite la navegación interna entre páginas web enrutadas sin necesidad de recargar o anexar una nueva pestaña en el navegador.
- Se realiza con el elemento `<router-link></router-link>`
- Se puede poner en cualquier lugar, pero es importante mantener la gestión de un *HTML semántico*.
- Sintaxis: `<router-link class="link" to="/ruta">Nombre</router-link>`. También puede usarse rutas dinámicas: `:to="{ name: 'routesName' }"`.

<br />

## 24. Pinia
- Es un gestor de estados para trabajar con variables y funciones de manera global.
- Es una dependencia aparte, así que deberá instalarse mediante npm: `npm i pinia`.
- Facilita el proceso de compartir datos entre componentes que son hermanos y no tienen un ancestro común directo como en el caso de un elemento *Padre-Hijo*.
- **Configuración**
    - Con la instalación de *pinia* realizada, se deberá configurar `main.js`.
        ```javascript
            import { createApp } from 'vue'
            import './style.css'
            import App from './App.vue'
            import router from './router'
            import { createPinia } from 'pinia'  //Importación de pinia

            const pinia = createPinia();  //Creación de la instancia de pinia

            // Uso de pinia en el proyecto de vue
            createApp(App).use(router).use(pinia).mount('#app')
        ```
    - Creación de la carpeta dedicada para *pinia*
        - Se llama **stores** en plural porque ahí se guardará tantos archivos con funciones y variables globales como se requieran.
        - Esa carpeta va en la ruta **/src** del proyecto.
        - Contiene únicamente archivos *JavaScript*.
    - Creación de un nuevo *"store"* en la carpeta *stores*.
        - El archivo puede llamarse como el desarrollador lo prefiera.
        - Una buena práctica es llamar el archivo con el contenido a guardar o con el nombre de la misma función/constante que se pondrá global.
- **Implementación del valor a establecer de manera global**
    - El archivo contendrá una función que manejará toda la información global y sus datos de entrada/salida en caso de necesitarlo.
    - La definición del nombre puede ser establecida arbitrariamente o siguiendo unos parámetros establecidos entre la comunidad
        - Empieza usándose el nombre **use**.
        - Luego se escribe el nombre que identificará la funcionalidad de la función.
            - Este nombre puede ser elegido libremente.
            - En el caso de querer almacenar películas, podría llamarse **Movie**.
        - Para terminar, se usará el texto **Store** que es el indicativo de que se está haciendo uso de un archivo *store*.
    - El nombre de la función debe de ser en formato camelCase.
    - Lo ideal es que en la segunda parte no tenga más de una palabra de longitud para mantener la definición entre *use* y *Store*.
    - Un ejemplo de como luciría un archivo de esta naturaleza es la siguiente:
        ```javascript
            import { defineStore } from "pinia";
            import { ref } from "vue"

            // El nombre de la constante que guardará el valor global tiene un estándar para definirse: use{nombreFuncion}Store
            export const useMovieStore = defineStore("movie", () => {
                // Se define la variable que se desea compartir en todo el proyecto
                const movies = ref([
                    {
                        title: "Inception",
                        duration: "148min",
                        director: "Christopher Nolan"
                    },
                    // Agregar más películas...
                ]);

                // Se define la función que controlará la modificación de la información de la variable "movies"
                const addMovie = (movie) => movies.value.push(movie);  //Se inserta una nueva película proveniente de un formulario

                // Agregar otras más funciones y/o variables tantas como se requieran de cualquier tipo de funcionalidad y lógica...

                // Se retorna las variables y funciones que se deseen exponer al proyecto, tantas como se requieran
                return {
                    movies,  //Constante con la lista de objetos de películas
                    addMovie  //Función flecha encargada de agregar nuevas películas a la constante "movies"
                    // Puede agregarse más variables/funciones...
                }
            });
        ```
- **Consumo del Store**
    - Para consumir ese valor global solo hace falta importar el *store* específico.
    - Una vez definido en el archivo donde se quiere usar, solo es acceder a sus variables/funciones como métodos de una función.
    - Ejemplo:
        ```javascript
            import { reactive } from "vue";
            import { useMovieStore } from "../stores/movie";

            // Definición de la variable con acceso global
            const movieStore = useMovieStore();

            // Creando la estructura de datos que recibirá por parte del formulario
            const movie = reactive({
                title: "",
                duration: 0,
                director: ""
            });

            // Creando el manejador de envío de información del formulario con las entradas de usuario
            const handleSubmit = () => {
                // Valida que todos los campos estén con información y sean correctos
                if(!movie.title || !movie.duration || !movie.director) {
                    // Avisa al usuario que debe de llenar toda la información para continuar
                    alert("Rellena todos los campos, por favor");
                    return;  // Evita que la función siga en una petición errada
                }
                
                // Agrega la nueva película si todo está correcto haciendo uso del "store" con la función "addMovie()"
                movieStore.addMovie(movie);

                // Muestra la información por consola almacenada en el "store"
                console.log(movieStore.movies);
            };
        ```
- **Aspectos a tener en cuenta**
    - Se puede lograr lo mismo pasándole *props* entre padre e hijo, así que es útil cuando esta relación es inexistente o compleja.
    - La información almacenada en la variable global no tiene un almacenamiento permanente, al recargar la página se eliminará.
    - Para guardar la información de manera permanente se debe recurir a otros métodos que van de la mano con *state* de *pinia*.

<br />

## 25. Pinia Persisted State
- Plugin extero que permite agregar la persistencia de información mediante el uso de LocalStorage del navegador.
- **Instalación**
    - Instalarlo desde *npm*: `npm install pinia-plugin-persistedstate`.
    - No viene con la instalación de *vue*, así que si se requiere su uso, deberá instalarse.
- **Configuración**
    - Su configuración es muy sencilla, debe de especificarse su uso dentro de *pinia*.
    - En el archivo *main.js* especificar su uso en la instancia de *pinia* (Importar la dependencia previamente): `pinia.use(piniaPluginPersistedState);`.
        - La importación puede no realizarse automáticamente y deberá hacerse manualmente.
        - La importación es la siguiente: `import piniaPluginPersistedState from "pinia-plugin-persistedstate"`
- **Funcionamiento**
    - En los *store* debe de definirse la permanencia de datos
        - Esto se realiza en la función donde se instancia `defineStore()`.
        - Al final de su definición se debe poner `persist: true`
            ```javascript
                import { defineStore } from "pinia";
                import { ref } from "vue";

                export const useMovieStore = defineStore("movie", () => {
                    const movies = ref([
                        {
                            title: "Inception",
                            duration: "148 min",
                            director: "Christopher Nolan"
                        },
                        {
                            title: "The Lord of the Rings",
                            duration: "201 min",
                            director: "Peter Jackson"
                        },
                        {
                            title: "Interstellar",
                            duration: "169 min",
                            director: "Christopher Nolan"
                        }
                    ]);

                    const addMovie = (movie) => movies.value.push(movie);

                    return {
                        movies,
                        addMovie
                    }
                }, {
                    persist: true,
                });
            ```
        En el ejemplo se puede ver un tercer parámetro en la función `defineStore("name", callback, options)` la cuál va la definición de persistencia de `pinia-plugin-persistedstate` y la posibilidad de agregar otras opciones más.

## 26. Navegación Programática
- Permite navegar entre páginas web cuando un proceso o acción culmina sin que el usuario presione o haga clic en algún botón.
- Su redireccionamiento es automático y es el que "finaliza" una acción según deseemos.
- Su configuración es poner la siguiente línea de código en el archivo objetivo: `router.push({ name: "nameRoute" });`
    - Dentro de las llaves `{}` va la clave `name` junto al nombre identificador especificado en el *router* de la página a la cuál queremos redirigir al usuario.
    - El nombre de la ruta identificadora debe ser un *string*.

## 27. Rutas Paramétricas
- Son iguales a la *Navegación Programática* pero con la diferencia de que se le pasan parámetros a modo de rutas dinámicas.
- No requiere de la creación de múltiples páginas web.
    - Solo requiere el uso de una página web para su uso.
    - La página web debe de encerrar la temática principal de la ruta dinámica.
    - Ejemplos de uso es los perfiles de usuarios en las redes sociales.
        - Requiere una sola web, pero maneja múltiple información.
        - Más eficiente e interactivo al usuario.
    - Suele encontrarse en sitios web medianamente complejos.
- Su definición interna diverge en su representación final.
    - Se basa en un identificador.
    - Es como tener una variable en la ruta web.
- **Configuración**
    - Su definición se realiza en el archivo `index.js` presente en la carpeta `router`.
    - Ejemplo de su configuración:
        ```javascript
            import { createRouter, createWebHistory } from "vue-router";
            import MovieDetails from "../pages/MovieDetails.vue";

            const router = createRouter({
                history: createWebHistory(),
                routes: [
                    {
                        path: '/movies/:movieTitle',
                        name: 'movieDetails',
                        component: MovieDetails
                    }
                    // Otras rutas van aquí...
                ]
            });

            export default router;
        ```
    - Se define con dos puntos (:) seguidos del nombre que identificará ese parámetro.
    - El orden en el que se defina no importa, y va junto con las rutas normales.
- **Preparación de uso**
    - Para lograr el uso de la ruta paramétrica, es necesario la definición de una función adicional de obtención de información que está almacenado en el *store*.
    - Usualmente es una función encargada de devolver la información relacionada a un valor almacenado según la interacción del usuario.
    - Se mezcla con el uso de `<router-link></router-link>`.
    - Ejemplo de función:
        ```javascript
            import { defineStore } from "pinia";
            import { ref } from "vue";

            export const useMovieStore = defineStore("movie", () => {
                const movies = ref([
                    // Aquí va la definición de la información en una lista de objetos "[{}]"
                ]);

                // Creando la función que obtendrá la información necesaria para la ruta dinámica
                const getMovie = (movieTitle) => {
                    // Por cada elemento presente en el array de objetos de "movies", buscará un valor que coincida con "movieTitle" pero antes, se convertirán sus valores a minúsculas
                    // La razón de convertir sus valores a minúsculas es para evitar errores al recibir la información. Los parámetros siempre serán en minúsculas.
                    return movies.value.find((movie) => movie.title.toLoweCase() === movieTitle.toLowerCase());
                }

                // Aquí va la definición de otras funciones más si es necesario...

                // Retornar las variables y funciones necesarias
                return {
                    movies,
                    addMovie,
                    getMovie
                }
            }, {
                // Esta configuración es para que persista la nueva información almacenada en la variable "movies"
                persist: vue
            });
        ```
    - La función deberá adaptarse según la situación de implementación.
- **Uso final**
    - Si bien ya está en funcionamiento hasta este punto, el usuario debería escribir la ruta manualmente y eso es poco práctico en experiencia de usuario.
    - Con el elemento `<router-link></router-link>` se puede realizar la redirección a rutas parametrizadas con el uso de enlaces web.
    - Ejemplo de uso HTML:
        ```html
            <template>
                <ul>
                    <!--
                        Acá se toma por hecho que se ha realizado la importación del store "useMovieStore" en la
                        variable llamada "movieStore". Estos valores no tienen que ser exactamente llamados así, pero
                        siguen las correctas prácticas de desarrollo con un enfoque claro de lo que consiste dichos
                        archivos y datos.
                    -->
                    <li v-for="movie in movieStore.movies" :key="movie.title" class="movie">
                        <h2>
                            <!-- Este elemento permite agregar enlaces con rutas para moverse dentro del sitio web -->
                            <router-link
                                :to="{
                                    // Nombre escrito en el objeto de las rutas definidas en el sistema
                                    name: 'movieDetails',
                                    // "params" es una opción que permite pasarle valores dinámicos a la ruta paramétrica
                                    // Requiere del nombre del parámetro dinámico con su valor a formar parte de la ruta
                                    params: {
                                        movieTitle: movie.title.toLowerCase()
                                    }
                                }"
                            >
                                <!-- Aquí van los valores dinámicos a renderizarse en la interfaz web -->
                                {{ movie.title }}
                            </router-link>
                        </h2>
                        <!-- Agregar otros elementos si es necesario... -->
                    </li>
                </ul>

                <!-- Resto del código... -->
            </template>
        ```
    - Esta acción crea enlaces a la información deseada que luego será mostrada en un endpoint aparte sin importar si la información es distinta o no.
- **Aspectos a tener en cuenta**
    - Muy útil en la generación de enlaces para proyectos de mediana complejidad que requiera o haga uso de este tipo de enrutamiento.
    - Al momento de navegar ente páginas web, estas cambiarán sus URL pero no se re-renderizará todo el contenido de nuevo.
    - Para su correcto funcionamiento, deberá agregarse otra pequeña lógica más como la siguiente:
        ```javascript
            import { useRoute } from 'vue-router';
            import { useMovieStore } from '../stores/movie';
            import { watch } from 'vue';  //Aquí está la clave para el re-renderizado al cambiar de ruta

            // Esta instancia devuelve la información del enrutamiento, accediendo a valores como la ruta actual.
            // Para los parámetros, tiene "params" que menciona sobre que parámetro se está actualmente
            const route = useRoute();
            // Almacena la información de todas las funciones y variables que exporta el "store" de "movies"
            const movieStore = useMovieStore();

            // Definición de las variables a manejar los parámetros y la información actualizada de películas
            let movieTitle = route.params.movieTitle;
            let movie = movieStore.getMovie(movieTitle);

            // Agrega una vigilacia sobre algún valor, útil cuando se desea registrar cambios para actualizar el rendedizado de una página
            watch(
                // Está observando si el parámetro de la ruta cambia
                () => route.params.movieTitle,
                // Cuando la ruta paramétrica cambie, se ejecutará la acción de regresar la ruta de "movieTitle" a su valor actual y traer la nueva información relacionada a esa nueva ruta dinámica
                () => {
                    movieTitle = route.params.movieTitle;  //Apunta a la ruta paramétrica actual
                    movie = movieStore.getMovie(movieTitle);  //Obtiene al información actualizada según la ruta
                }
            );
        ```
    - Esto corrige errores en la visualización de información
        - Sin el fragmento de código anterior, al cambiar de ruta de manera dinámica la información que se está mostrando no se actualizará.
        - Esto provoca una actualización en la ruta mostrada en el navegador pero no del contenido
            - Vue trabaja mediante cambios.
            - Si un cambio no se efectúa en el contenido de la página directamente, no se re-renderizará la información.
        - Agregar una vigilancia al cambio de ruta fuerza a la página actualizarse
            - Se aprovecha este nuevo renderizado para traer la nueva información vinculada a esa nueva ruta.
        - `watch` pertenece a *vue*, por lo que deberá importarse al proyecto.
    - El renderizado de información sigue permaneciendo igual como lo mostrado en el ejemplo de código *HTML* más arriba.

<br />

## 28. Fetch a una API
- El funcionamiento de realizar una petición a una API es prácticamente idéntica a como se haría con *JavaScript Vanilla*.
- Se usa `fetch` para la obtención de datos con su función *asíncrona*, pues toda petición a un servicio externo requerirá de un tiempo de espera.
- **Preparación**
    - Consiste principalmente en la información que se espera obtener y como se va a procesar dicha información.
    - Al ser información que se trae de un servicio externo, es como si se tuviera una lista de objetos "hardcodeada".
        - Se almacenará la lógica de obtención de información y manejo de la misma en un *store* dentro de la carpeta *stores*.
        - El funcionamiento sigue siendo exactamente igual, solo que la información se trae de un servicio externo al sitio web.
    - Un ejemplo es el siguiente:
        ```javascript
            import { defineStore } from "pinia";  //Importa la instancia para crear un nuevo "store"
            import { ref } from "vue";  //Importa "ref" para el almacenamiento de información dinámico.

            // Se define la función que permitirá acceder al "store" desde otros componentes
            // Se sigue el estándar de definición de "stores": use{nombreStore}Store
            export const useUserStore = defineStore("user" () => {
                // Creando la variable que contendrá la información de usuarios desde el servicio de API
                const user = ref();

                // Se guarda en una variable la URL a usar para la API deseada. Esta variable suele llamarse "API_URL"
                const API_URL = "https://jsonplaceholder.typicode.com/users/1";

                // Función asíncrona
                const getUser = async () => {
                    // Se guarda la respuesta que devuelve el servicio externo en una variable que suele llamarse "response"
                    const response = await fetch(API_URL);  //Se hace uso de "await" para esperar a que se complete la operación
                    // Se transforma la respuesta recibida por algo que se pueda leer y usar en el código en una variable usualmente llamada "data"
                    const data = await response.json();  //Se hace uso de "await" para esperar a que se complete la operación y se transforme a formato json
                    // Se le asigna la información traida del exterior del sitio web a la variable contenedora de información "user"
                    user.value = data;
                }

                // Retornar las variables y funciones necesarias
                return {
                    user,
                    getUser
                }
            });
        ```
    - Su uso ya consistirá de lo que se requiera en su implementación en otros archivos.
- El uso de un *fetchAPI* dentro de un *store* no cambia su definición ni forma de uso.

<br />

## 29. Ciclos de vida de los componentes
- Cada componente de *Vue* tiene su inicio y su final, como si se tratara de un ser vivo que cuenta con su inicio y final de vida.
- Durante cada fase de vida del componente, desde antes de su visibilidad en el *DOM* hasta su destrucción en el mismo, hay eventos que pueden ser capturados
    - Cada evento dice en que fase de vida se encuentra el componente.
    - Por cada fase de vida del componente, este emite una función en su "aviso" que puede ser capturada y manipular el componente en cuestión
        - Cada función recibe un *callback* que será la función que contendrá el código que deseamos ejecutar cuando un componente alcanza un determinado ciclo de vida.
        - No hay restricción en las acciones que se puede realizar dentro de esas funciones emitidas por cada ciclo de vida.
- **Ciclos de vida**
    - *Creación (Created)*
        - Es su fase de creación, donde empieza a construirse todo su contenido según almacene el componente.
        - Aún no se muestra en el *DOM*.
        - Su preparación apenas se inicializa y no acepta cambios en su estructura.
        - No tiene funciones por las cuales se pueda realizar acciones en su inicialización.
    - *Montaje (Mounted)*
        - Es su segunda fase en la cuál, termina su proceso de creación y es montado a la interfaz web dentro del *DOM*.
        - Es su primera aparición en la interfaz web del sitio web.
        - Emite una función que puede ser capturada para ejecutar acciones al momento de su montaje
            - La función se llama `onMounted`.
            - Su sintaxis es la siguiente: `onMounted(callback: () => void, target?: ComponentInternalInstance | null): void`
                - El callback es una función flecha con las acciones a realizar.
                - Su definición es prácticamente en código *JavaScript* normal.
            - Tiene un hermano menor que se llama `onBeforeMount(callback)` que ejecuta acciones antes de ser montado al *DOM*.
        - Es muy útil si se requiere de cargar información de una API o preparar información al momento de su renderizado.
    - *Actualización (Updated)*
        - En su tercera fase, actualiza la información que tiene renderizado en función de algún cambio producido en la interfaz directa del componente o por un observador.
        - Emite una "alerta", diciendo que se encuentra en la fase de *actualización* y junto viene una función lista para usarse
            - La función se llama `onUpdated`.
            - Su sintaxis es la siguiente: `onUpdated(callback: () => void, target?: ComponentInternalInstance | null): void`
                - El callback es una función flecha con las acciones a realizar.
                - Su definición es prácticamente en código *JavaScript* normal.
            - Tiene un hermano menor que se llama `onBeforeUpdate(callback)` que ejecuta acciones antes de realizarse la recarga completa del componente.
        - Es muy útil cuando cada recarga va ligado a una modificación en algún valor o función.
    - *Destrucción (Unmounted)*
        - En su última fase, como cuando llega la hora de muerte de un ser vivo, deja de existir en el *DOM* de la interfaz web y por ende, ya no será visible en el sitio web.
        - Emite una "alerta", diciendo que se encuentra en la fase de *eliminación* y junto viene una función lista para usarse
            - La función se llama `onUnmounted`.
            - Su sintaxis es la siguiente: `onUnmounted(callback: () => void, target?: ComponentInternalInstance | null): void`
                - El callback es una función flecha con las acciones a realizar.
                - Su definición es prácticamente en código *JavaScript* normal.
            - Tiene un hermano menos que se llama `onBeforeUnmount(callback)` que ejecuta acciones antes de que el componente sea eliminado de la interfaz web.
        - Es muy útil cuando se está ejecutando acciones que deben ser detenidas al cambiar de componente.
- **Ejemplo de uso**
    ```javascript
        import { onMounted } from 'vue';
        import { useUserStore } from '../stores/user';

        const userStore = useUserStore();

        // Es lo mismo con las demás definiciones de funciones relacionados a sus ciclos de vida
        onMounted(() => {
            userStore.getUser();
        });
    ```
- **Aspectos a tener en cuenta**
    - El funcionamiento únicamente está limitado al componente en cuestión.
    - Debe de importarse la función a usar de cada ciclo de vida, esas funciones le pertenecen a *"Vue"*.
    - Hay otras funciones más, sin embargo, las mencionadas anteriormente junto con sus funciones hermanas son las más comunes.
- **Otras funciones**
    - En el momento que sucede un error en la página: `onErrorCaptured(callback: ErrorCapturedHook): void`.
    - Registra un gancho de depuración que se llamará cuando una dependencia reactiva ha sido rastreada por el efecto renderizado del componente: `onRenderTracked(callback: DebuggerHook): void`.
        - Uso exlusivo solo para desarrolladores.
    - Registra un gancho de depuración para llamarse cuando una dependencia reactiva desencadena el efecto de renderizado del componente para ser re-corrido: `onRenderTriggered(callback: DebuggerHook): void`.
        - Uso exclusivo solo para desarrolladores.
    - Se lanza una función luego de que el componente se haya insertado al *DOM*, referente a su estado actual en el árbol *HTML*: `onActivated(callback: () => void, target?: ComponentInternalInstance | null): void`.
    - Realiza algo similar a la función de `onActivated` pero se realiza al momento de que el componente ha sido eliminado del *DOM*: `onDeactivated(callback: () => void, target?: ComponentInternalInstance | null): void`.
    - Menciona que hay una función *asíncrona* que debe ser resulta para poder renderizar contenido o continuar con la ejecución: `onServerPrefetch(callback: () => Promise<any>): void`.
        - Uso exclusivo para aplicaciones con relación de **SSR** (*Server-Side Rendering*).

<br />

## 30. Test unitarios con Vitest
- Permite realizar una serie de pruebas que comprueban el correcto funcionamiento del sitio web.
- Detecta errores que no se muestran de manera inmediata en el código.
- Hay varias formas de realizar **pruebas unitarias**, entre esas, la que viene integrada con *Vite* es la más sencilla y eficiente de realizar
    - Requiere poca configuración.
    - Amigable con principiantes.
    - Pruebas más rápidas, con pocas líneas de código.
- **Preparación**
    - Se requiere de la instalación de tres plugins
        - El plugin `vitest` es el núcleo que contiene todo lo necesario para realizar **pruebas unitarias** sin problemas.
        - El plugin `@vue/test-utils` es un complemento para *Vue* que agrega herramientas útiles a modo de intermediario entre la prueba unitaria y el código de *Vue*
            - Por ejemplo, ayuda a montar componentes en una sola línea de código.
        - El plugin `jsdom` permite emular el árbol *DOM* del sitio web como si se estuviera ejecutando en un entorno real.
    - Su instalación se realiza de la siguiente manera con *npm*: `npm install vitest @vue/test-utils jsdom -D`.
        - La razón del `-D` en el comando de instalación es debido a que estas dependencias no se desean instalar en el resultado final
            - Significa "Instalación para entornos de desarrollo".
            - No se agrega al "package.json" por lo que mantiene el código más limpio.
            - Los paquetes que son de "testing" suelen evitar su presencia en entornos de producción, pues ocupará más espacio en disco.
- **Configuración**
    - Se deberá realizar cambios en dos archivos principales de configuración para poder arrancar con las **pruebas unitarias**.
    - *Modificación archivo* `package.json`
        - No es obligatorio este cambio, pero es lo recomendado para centrarse en las **pruebas unitarias**.
        - Permite acortar el comando necesario para realizar las pruebas, lo cuál ahorra tiempo y se integra de mejor forma con el proyecto.
        - Agregar lo siguiente en la sección de *scripts*: `"test": vitest`
            - Ahora, con *npm* podrá ejecutarse la **prueba unitaria**.
            - Ejecutar el comando `npm run test` para iniciar la **prueba unitaria**.
    - *Modificación archivo* `vite.config.js`
        - Este cambio es obligatorio y es clave para implementar las **pruebas unitarias** en el proyecto.
        - Agregar lo siguiente en la función *defineConfig*, después de *plugins*: `test: { globals: true, environment: 'jsdom' }`
            - Define que el "test" está permitido para todo el proyecto.
            - Establece el entorno de ejecución de la prueba en la dependencia "jsdom" para el árbol *DOM* del componente.
- **Conceptos importantes**
    - Se debe de crear un archivo por componente a probar
        - Estos archivos pueden guardarsen en la misma carpeta en que se encuentra el archivo o crear una carpeta dedicada a los "test" bajo el nombre de *"test"* y almacenarlos allí.
        - Hay un estándar en la creación de los archivos que es recomendable seguir para *buenas prácticas*
            - El nombre está compuesto por: *Nombre del componente* a probar, el texto *test* en minúsculas y finalmente la extensión del archivo.
            - Algo así sería su convención: *NombreComponente.test.js*
                - Por ejemplo: `Home.test.js`.
                - Visual Studio Code lo reconocerá inmediatamente como archivo de pruebas.
    - Por cada archivo, hay una estructura que debe respetarse
        - Solo cuenta con una función principal llamada **"suite"**
            - Dentro contiene todas las **pruebas unitarias** llamadas **"it"** (**"Individual Testing"**).
                - Son pruebas de caracter único que se comportan de manera individual ante el resto de demás pruebas unitarias dentro de todo el proyecto.
                - Por cada prueba se puede verificar un aspecto en específico con gran precisión.
                - Su sintaxis es la siguiente: `it("descripción concisa y breve de la prueba unitaria", callback())`
                    - Un ejemplo de esto es lo siguiente:
                        ```javascript
                            // Definición de la prueba unitaria para un caso en específico
                            it("Correcto renderizado del componente", () => {
                                import { mount } from "@vue/test-utils";
                                import { expect } from "vitest";
                                import Home from "./Home.vue";

                                // Montando el componente al que se le realizará la prueba unitaria
                                const wrapper = mount(Home);  //Usualmente se le llama "wrapper" pero puede llamarse de cualquier manera

                                // Lo que dice es: Se espera que en "wrapper" se encuentre un elemento HTML de tipo "h1" encabezado con texto
                                // el cuál debe de ser el siguiente texto: "¡Bienvenido a la Página Principal!". Si esto es correcto, la 
                                // prueba unitaria pasa, de lo contrario, será una prueba fallida.
                                expect(wrapper.find("h1").text()).toBe("¡Bienvenido a la Página Principal!");
                            });
                        ```
                - Puede almacenar tantas pruebas unitarias como se requieran.
            - Puede almacenar **"mocks"**
                - Son simulaciones de componentes o dependencias que pueden causar conflictos al momento de probar componentes por la falta de argumentos a instancias externas declaradas.
                - Su sintaxis es la siguiente: `vi.mock("ruta/al/archivo.js", callback())`
                    - Un ejemplo de esto es lo siguiente:
                        ```javascript
                           import { vi } from "vitest";

                            // Definición del "mock" para emular el funcionamiento de un "store"
                            vi.mock("../stores/user.js", () => ({
                                // Aquí se le define los argumentos que espera la instancia o función en cuestión
                                useUserStore: () => ({          // Se establece el nombre del "store" que se desea simular su funcionamiento
                                    user: "valor cualquiera"    // "user" es uno de los valores del "store". Si no se requiere precisión, pasar cualquier cosa
                                    getUser: () => {}           // El último valor es una función. Si no se requiere precisión, pasar una función flecha vacía
                                })
                            }));
                        ```
                - Puede almacenar tantos "mockups" como se requieran.
            - Solo se puede realizar una definición de "suite" por archivo (`describe("description", callback())`).
        - Se pueden crear tantos archivos como se necesiten, siguiendo la preferencia de almacenamiento de archivos para **pruebas unitarias**.
    - A la hora de definir un "wrapper" que es el que almacena el montaje de un componente, debe de ser único entre cada "test"
        - Por cada "test" unitario en una "suite" debe de haber la misma cantidad de variables "wrapper" para realizar las respectivas pruebas.
        - Esto asegura una mayor independencia entre los valores que otros "test" pudieron haber modificado.
        - Evita interferencias que afecten el resultado final de la **prueba unitaria**.
    - Si se desea probar funciones o eventos, lo mejor es realizarlo mediante un "callback" asíncrono
        - Cada acción puede tomar tiempo en ser registrado por el "test".
        - El uso de "async await" es obligatorio en estos casos.
    - Hay muchas otras funcionalidades más en la realización de "tests" unitarios, leer documentación oficial.
- **Ejemplo**
    - Se creará un archivo en la misma carpeta donde se encuentre el componente `Home.vue` bajo el nombre de `Home.test.js`
        ```javascript
            import { mount } from "@vue/test-utils";
            import { describe, expect, vi } from "vitest";
            import Home from "./Home.vue";

            // Definiendo la "suite" que contendrá todos los "tests" unitarios
            describe("Home", () => {
                // Simula el funcionamiento de la "store" de "useUserStore" por "pinia"
                vi.mock("../stores/user.js", () => ({
                    useUserStore: () => ({
                        user: "cualquier valor",
                        getUser: () => {}  // Dejarlo vacío, no se requiere información en esta simulación
                    })
                }));

                // Creando los "tests" individuales
                it("Correcto renderizado del componente", () => {
                    const wrapper = mount(Home);
                    expect(wrapper.find("h1").text()).toBe("¡Bienvenido a la Página Principal!");
                });

                it("Incremento del contador cuando el botón recibe un clic", async () => {
                    const wrapper = mount(Home);
                    // Este "expect" busca el elemento por su ID, como un "queryElements"
                    expect(wrapper.find("#counter").text()).toContain("Contador: 1");

                    // Realizará una acción de clic simulado y para ello, requerirá de tiempo en su respuesta
                    await wrapper.find("#counter-btn").trigger("click");  //Hace el clic
                    expect(wrapper.find("#counter").text()).toContain("Contador: 2");  //Rectifica el nuevo contenido
                });
            });
        ```
    - Un buena prueba unitaria no debe de porque modificarse el código que ya existe.
    - Toda la prueba unitaria debe de ser automática, sin intervención humana en lo posible.