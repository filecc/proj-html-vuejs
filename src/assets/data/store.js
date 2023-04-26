import { defineStore } from 'pinia';

export const useGeneral = defineStore('general', {
    state: () => ({
        menuOpen: false
    }),
    actions: {
        openMenu(){
            this.menuOpen = true;
        },
        closeMenu(){
            this.menuOpen = false;
        },
        menuToggle(){
            this.menuOpen = !this.menuOpen;
        }
    }
})

