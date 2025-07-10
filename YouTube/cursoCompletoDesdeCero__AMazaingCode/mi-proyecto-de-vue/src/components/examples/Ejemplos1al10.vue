<script setup>
  import HeaderComponent from './components/HeaderComponent.vue';
  import { ref } from 'vue';

  const myId = 'gato';
  const myValue = ref('Hola');
  let number = ref(0);

  /* setInterval(() => {
    number.value++;
  }, 1000); */

  const addOne = () => {
    number.value++;
  }

  /* const testFunction = (text) => {
    return text;
  } */

  function testFunction(text) {
    return `${text} ${myValue.value}`;
  }


  let myCondition = true;
  let myCondition2 = false;
  let count = ref(0);
  const incrementCount = () => {
    count.value++;
    switchBoolean();
  }
  const switchBoolean = () => {
    myCondition2 = !myCondition2;
    return myCondition2;
  }



  const condition = "";
  const condition2 = false;
</script>

<template>
  <HeaderComponent />

  <h1 class="title" v-bind:id="myId">¡Hola a todos!</h1>
  <h2 @click="addOne">{{ number }}</h2>

  <input type="text" :value="testFunction('No')" />
  <input type="text" v-model="myValue">

  <h2 :class="myCondition ? 'highlight' : ''">¡Esto tiene una clase dinámica!</h2>
  <h2 :class="{highlight: myCondition, red: true}">Otro ejemplo de clase dinámica con distinto método</h2>
  <p @click="incrementCount" :class="myCondition2 ? 'title' : 'highlight'">¡Tócame!: {{ count }}</p>


  <h2 v-if="condition">¡Esto se muestra dinámicamente!</h2>
  <h2 v-else-if="condition2">Si lo anterior no se mostró</h2>
  <h2 v-else>Por si nada de lo anterior se mostró</h2>
</template>

<style>
  .title {
    background-color: blue;
    color: white;
  }

  .highlight {
    background-color: black;
    color: yellow;
  }

  .red {
    color: red;
  }
</style>