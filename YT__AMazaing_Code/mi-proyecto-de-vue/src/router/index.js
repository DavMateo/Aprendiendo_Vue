import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Movies from "../pages/Movies.vue";
import CreateMovie from "../pages/CreateMovie.vue";
import MovieDetails from "../pages/MovieDetails.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/movies',
            name: 'movies',
            component: Movies
        },
        {
            path: '/movies/:movieTitle',
            name: 'movieDetails',
            component: MovieDetails
        },
        {
            path: '/create',
            name: 'create',
            component: CreateMovie
        }
    ]
});

export default router;