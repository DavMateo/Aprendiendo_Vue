import { mount } from "@vue/test-utils";
import { describe, expect, vi } from "vitest";
import Home from "./Home.vue";

// Suite
describe("Home", () => {
    // Simular Pinia del elemento conflictivo
    vi.mock("../stores/user.js", () => ({ 
        useUserStore: () => ({
            user: "aaa",
            getUser: () => {}
        })
    }));

    // Individual Testing
    it("Correcto renderizado del componente", () => {
        const wrapper = mount(Home);

        // Comprobación del test
        expect(wrapper.find("h1").text()).toBe("¡Bienvenido a la Página Principal!");
    });

    it("Incremento del contador cuando el botón recibe un clic", async () => {
        const wrapper = mount(Home);

        //expect(wrapper.find("#counter").text()).toContain("Contador: 2");
        
        for(let i = 0; i < 5; i++) {
            // .find es similar al query selector, buscar por identificador (ID)
            expect(wrapper.find("#counter").text()).toContain(`Contador: ${i+1}`);
            await wrapper.find("#counter-btn").trigger("click");
        }
    });
});