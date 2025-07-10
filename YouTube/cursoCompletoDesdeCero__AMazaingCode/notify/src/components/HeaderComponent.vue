<script setup></script>

<template>
    <header class="header">
        <h1 class="title">Página de Notas</h1>

        <nav>
            <ul class="nav-list">
                <li>
                    <router-link to="/" class="link">Inicio</router-link>
                </li>
                <li>
                    <router-link to="/notes" class="link">Notas</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
.header {
    background-color: #000022;
    color: white;
    padding: 30px;
    text-align: center;

    .title {
        margin: 0;
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