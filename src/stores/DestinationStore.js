import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDestinationStore = 
    defineStore('favori', () =>
        {
            const idPrefered = ref(null)
            return { idPrefered }
        })
