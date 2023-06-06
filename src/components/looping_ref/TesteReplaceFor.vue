<template>
    <div>
        <h3>Lista maluca:</h3>
        <ul>
            <li v-for="(fruta, i) in frutas" :key="i">{{ fruta }}</li>
        </ul>
        <button @click="alterar">Alterar segundo item</button>
    </div>
</template>

<script>
export default {
    name: "TesteReplaceFor",
    props: [],
    components: {},
    data() {
        return {
            frutas: ["Banana", "Maçã", "Pêra", "Morango"]
        }
    },
    methods: {
        alterar() {
            // se for feito desse jeito:
            // this.frutas[1] = "Melão"
            // a reatividade não é ativada

            // então fazemos desta maneira:
            this.$set(this.frutas, 1, "Melão")
        }
    },
    computed: {},
    watch: {}
}
</script>

<style scoped></style>