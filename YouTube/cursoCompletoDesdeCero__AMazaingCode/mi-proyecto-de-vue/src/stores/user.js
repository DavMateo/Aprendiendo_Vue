import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
    const user = ref();
    const randomNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);

    // Petición a una API
    const API_URL = `https://jsonplaceholder.typicode.com/users/${randomNumber}`;

    // Función asíncrona
    const getUser = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        user.value = data;
    }

    return {
        user,
        getUser
    }
});