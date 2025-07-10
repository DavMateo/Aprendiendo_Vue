<script setup>
import { onUpdated, reactive } from "vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import { useMovieStore } from "../stores/movie";
import router from "../router";

const movieStore = useMovieStore();

const movie = reactive({
    title: "",
    duration: 0,
    director: "",
});

const handleSubmit = () => {
    if (!movie.title || !movie.duration || !movie.director) {
        alert("Rellena todos los campos, por favor");
        return;
    }
    movieStore.addMovie(movie);
    
    router.push({ name: "movies" });
};

onUpdated(() => {
    console.log("El componente 'CreateMovie' ha sido actualizado");
});
</script>

<template>
    <HeaderComponent />
    <h2>Crear Películas</h2>

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
