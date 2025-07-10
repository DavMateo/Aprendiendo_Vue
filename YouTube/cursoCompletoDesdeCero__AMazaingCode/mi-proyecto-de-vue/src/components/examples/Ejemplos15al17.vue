<script setup>
  import { ref } from 'vue';
  import ChildComponent from './components/ChildComponent.vue';

  const text = "Info desde variable en el padre";
  const person = {
    sex: "hombre",
    age: 30
  };
  const displayName = ref("");
  let isPadreHijo = true;


  const setName = (e) => {
    displayName.value = e;
    isPadreHijo = false;
  }
</script>


<template>
  <h1 v-if="isPadreHijo">Props | Comunicación Padre-Hijo</h1>
  <h1 v-else>Props | Comunicación Hijo - Padre</h1>

  <h2>Hola {{ displayName }}</h2>

  <ChildComponent msg="Esto es info desde el padre" @login="setName">
    <h3>Y ESTE ES EL CONTENIDO DESDE EL COMPONENTE PADRE COMO SLOT A MODO DE BLOQUE HTML</h3>
  </ChildComponent>

  <ChildComponent>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia unde dolore fugit blanditiis corporis eius libero laborum nostrum corrupti porro reprehenderit nemo animi eaque ipsa deleniti, deserunt dolor harum minus.</p>
  </ChildComponent>

  <ChildComponent></ChildComponent>

  <ChildComponent>
    <template v-slot:top>
      <h3>Contenido desde el componente padre como Slot para TOP</h3>
    </template>

    <template v-slot:bottom>
      <h3>Contenido para el slot BOTTOM</h3>
    </template>
  </ChildComponent>
  <!-- <ChildComponent msg="Otro mensajito"></ChildComponent>
  <ChildComponent :msg="text" :person="person"></ChildComponent> -->
</template>


<style></style>