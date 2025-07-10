<script setup>
  import { ref, computed, watch, watchEffect } from 'vue';
  
  const userName = ref({ name: "Mateo" });
  let isComputed = true;

  const nameLength = computed(() => {
    isComputed = true;
    return userName.value.name.length;
  });
  const setName = () => {
    userName.value.name = "David";
    isComputed = false;
  };


  /* watch(userName,
  (newValue, oldValue) => {
    console.log("¡Nombre de usuario modificado!", newValue, oldValue);
  }, {
    inmediate: true,
    deep: true
  }); */

  watchEffect(
    () => {
      console.log("¡Nombre de usuario modificado! Variable: ", userName);
    }
  )
  
</script>


<template>
  <h1 v-if="isComputed">Computed | Propiedades computadas</h1>
  <h1 v-else>Watch | Vigilancia de Cambios</h1>

  <input type="text" v-model="userName.name" />
  <h2>Hola {{ userName.name }}</h2>
  <h3>Tu nombre tiene {{ nameLength }} caracteres.</h3>

  <button @click="setName">Cambiar de Usuario</button>
</template>


<style></style>