<script setup>
    import { ref } from 'vue';

    defineProps({
        msg: String,
        person: {
            sex: String,
            age: Number
        }
    });
    const userName = ref("Mateo");

    const emit = defineEmits(["login"]);
    const login = () => {
        emit("login", userName.value)
    }
</script>


<template>
    <div class="child">
        <h2>Este es un componente hijo</h2>

        <p>{{ msg }}</p>
        <div>{{ person?.sex }} - {{ person?.age }}</div>

        <p>Nombre de usuario: {{ userName }}</p>
        <button @click="login">Login</button>
    </div>

    <slot>Contenido por defecto por si desde el componente padre no se envía nada.</slot>

    <slot name="top"></slot>
    <slot name="bottom"></slot>
</template>


<style>
    .child {
        border: 5px solid black;
    }
</style>