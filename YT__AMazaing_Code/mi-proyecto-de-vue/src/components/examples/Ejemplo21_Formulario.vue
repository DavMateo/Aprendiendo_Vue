<script setup>
import { reactive } from 'vue';

  const movie = reactive({
    title: "",
    duration: 0,
    director: ""
  });

  const handleSubmit = () => {
    if(!movie.title || !movie.duration || !movie.director) {
      alert("Rellena todos los campos, por favor");
      return;
    }

    console.log(movie)
  }
</script>


<template>
  <h1>Formularios</h1>

  <form @submit.prevent="handleSubmit" class="form">
    <label for="title">Título</label>
    <input v-model="movie.title" type="text" id="title" />

    <label for="duration">Duración</label>
    <input v-model="movie.duration" type="number" id="duration" />

    <label for="director">Director</label>
    <input v-model="movie.director" type="text" id="director" />

    <button>Enviar</button>
  </form>
</template>


<style>
  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>