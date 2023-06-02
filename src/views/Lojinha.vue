<template>
    <div class="corpo">
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