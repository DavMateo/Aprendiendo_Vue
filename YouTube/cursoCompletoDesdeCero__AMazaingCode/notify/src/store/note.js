import { defineStore } from "pinia";
import { ref } from "vue";

export const useNoteStore = defineStore("notes", () => {
    const API_URL = "https://ca02cf91820ee89ae2c7.free.beeceptor.com/api/notes/";
    const notes = ref([]);
    const loading = ref(false);
    const error = ref(false);

    const getNotes = async () => {
        try {
            loading.value = true;

            const response = await fetch(API_URL);
            const data = await response.json();
            notes.value = data.reverse();

            loading.value = false;
            error.value = false;

        } catch(e) {
            loading.value = false;
            error.value = true;
        }
    }

    const createId = () => {
        return Date.now().toString(36) + Math.random.toString(36).slice(2);
    }

    const addNote = async (title) => {
        const newNote = {
            id: createId,
            title,
            marked: false
        }

        try {
            await fetch(API_URL, {
                method: "POST",
                body: JSON.stringify(newNote)
            });

            getNotes();

        } catch(e) {
            error.value = true;
        }
    }

    return {
        notes,
        loading,
        error,
        getNotes,
        addNote
    };
});