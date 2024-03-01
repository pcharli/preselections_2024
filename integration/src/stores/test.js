import { defineStore } from 'pinia'

export const useTest = defineStore({
    id: 'test',
    state: () => ({
        biblio: {}
    }),
    getters: {
        firstBook: (state) => {
            return state.biblio
        }
    },
    actions: {
        async init() {
            await fetch('https://cepegra-frontend.xyz/wf11-atelier/wp-json/wp/v2/match/325')
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp)
                this.biblio = resp
            })
            .catch (err => console.log(err))
        }
    }
})