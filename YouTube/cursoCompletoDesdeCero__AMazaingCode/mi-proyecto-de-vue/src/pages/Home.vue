<script setup>
    import { ref } from 'vue';
    import HeaderComponent from '../components/HeaderComponent.vue';

    const counter = ref(1);
</script>

<template>
    <HeaderComponent />

    <h1>¡Bienvenido a la Página Principal!</h1>

    <h2 id="counter">
        Contador: {{ counter }}
        <button @click="counter++" id="counter-btn">+</button>
    </h2>
</template>

<style></style>