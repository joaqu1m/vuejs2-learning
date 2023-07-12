<template>
    <div class="corpo">
        <p>
            <router-link to="/"><button>
                Voltar
            </button></router-link>
        </p>
        caiu na loja
        {{ bananinha1 }}
        {{ bananinha2 }}
        {{ bananao }}
        <button @click="bananas()">Clicar teste</button>
    </div>
</template>

<script>

import bananas, { bananinha, bananao } from "../js/a"

export default {
    name: "Lojinha",
    props: [],
    components: {},
    data() {
        return {
            bananinha1: bananas(),
            bananinha2: bananinha(),
            bananao: bananao()
        }
    },
    methods: {
        ...bananao,
        bananas: function() {
            console.log(bananas())
        }
    },
    computed: {},
    watch: {},
    mounted() {
        console.log(bananao())
    },
    beforeRouteEnter(to, from, next) {
        console.log("beforeRouteEnter")
        console.log(to)
        console.log(from)
        next(vm => {
            console.log(vm.bananinha1)
        })
    },
    beforeRouteUpdate(to, from, next) {
        console.log("beforeRouteUpdate")
        console.log(to)
        console.log(from)
        console.log(this.bananinha1)
        next()
    },
    beforeRouteLeave(to, from, next) {
        if (confirm("Deseja sair da pagina mesmo???")) next()
    }
}
</script>

<style scoped>
.corpo {
    width: 100vw;
    height: 100vh;
    background-color: rgb(247, 247, 247);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>