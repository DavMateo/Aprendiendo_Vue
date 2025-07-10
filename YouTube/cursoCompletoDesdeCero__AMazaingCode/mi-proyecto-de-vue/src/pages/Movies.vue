<script setup>
    import { onMounted, onUnmounted } from "vue";
import HeaderComponent from "../components/HeaderComponent.vue";
    import { useMovieStore } from "../stores/movie";

    const movieStore = useMovieStore();

    onMounted(() => {
        console.log("Componente 'Movie' montado");
    });
    onUnmounted(() => {
        console.log("Componente 'Movie' desmontado")
    });
</script>


<template>
    <HeaderComponent />

    <div>
        <h2>Películas</h2>

        <ul>
            <li v-for="movie in movieStore.movies" :key="movie.title" class="movie">
                <h2>
                    <router-link 
                        :to="{ 
                            name: 'movieDetails',
                            params: { 
                                movieTitle: movie.title.toLowerCase() 
                            }
                    }">
                        {{ movie.title }}
                    </router-link>
                </h2>
                <p>Duración: {{ movie.duration }}</p>
                <p>Director: {{ movie.director }}</p>
            </li>
        </ul>
    </div>
</template>


<style>
    .movie {
        margin-bottom: 20px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
</style>