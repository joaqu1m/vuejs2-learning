<template>
    <div>
        <div v-for="(value, key, index) in banana">
            {{ index }}. {{ key }}: {{ value }}
        </div>
    </div>
</template>

<script>
export default {
    name: "TesteForJson",
    props: [],
    components: {},
    data() {
        return {
            banana: {
                cor: "amarelo",
                preco: 2.5,
                quantidade: 10
            }
        }
    },
    methods: {},
    computed: {},
    watch: {}
}
</script>

<style scoped></style>