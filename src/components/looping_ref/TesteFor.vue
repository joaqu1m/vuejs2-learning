<template>
    <div>
        <h3>Lista maluca:</h3>
        <ul>
            <li v-for="(fruta, i) in frutas" :id="i">{{ fruta }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "TesteFor",
    props: [],
    components: {},
    data() {
        return {
            frutas: ["Banana", "Maçã", "Pêra", "Morango"]
        }
    },
    methods: {},
    computed: {},
    watch: {}
}
</script>

<style scoped></style>