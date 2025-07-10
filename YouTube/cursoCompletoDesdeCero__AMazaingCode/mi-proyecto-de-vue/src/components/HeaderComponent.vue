<script setup>
import { onMounted } from 'vue';
import { useUserStore } from '../stores/user';

const userStore = useUserStore();

onMounted(() => {
    userStore.getUser();
});
</script>

<template>
    <header class="header">
        <h1>Películas</h1>

        <div class="login-bar">
            <p v-if="userStore.user" class="username">{{ userStore.user.name }}</p>
            <button @click="userStore.getUser()">Login</button>
        </div>

        <nav>
            <ul class="nav-list">
                <li>
                    <router-link class="link" to="/">Principal</router-link>
                </li>
                <li>
                    <router-link class="link" to="/movies">Películas</router-link>
                </li>
                <li>
                    <router-link class="link" :to="{ name: 'create' }">Crear Películas</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style>
.header {
    background-color: #000022;
    color: white;
    text-align: center;
    padding: 20px;

    .login-bar {
        width: 100%;
        position: absolute;
        top: 10px;
        right: 10px;
        display: flex;
        justify-content: end;

        .username {
            margin: 0;
            padding-right: 10px;
        }
    }

    .nav-list {
        display: flex;
        justify-content: space-around;

        .link {
            color: white;
            text-decoration: none;
        }
    }
}
</style>