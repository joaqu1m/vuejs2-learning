<template>
    <div>
        teste usando a :ref
        <ul>
            <li v-for="(fruta, i) in frutas" :ref="'frutaRef' + i">{{ fruta }}</li>
        </ul>
        <button @click="logg">Logar o que for preciso</button>
    </div>
</template>

<script>
export default {
    name: "TesteForRef",
    props: [],
    components: {},
    data() {
        return {
            frutas: ["Banana", "Maçã", "Pêra", "Morango"]
        }
    },
    methods: {
        logg() {
            console.log(this.$refs)
        }
    },
    computed: {},
    watch: {}
}
</script>

<style scoped></style>