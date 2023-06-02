<template>
    <div>
        <h2>Contador vindo direto da variável: {{ count }}</h2>
        <h3>Contador duplo vindo do getter: {{ doubleCount }}</h3>
        <button @click="increment">Incrementar</button>
        <button @click="decrement">Decrementar</button>
        <button @click="incrementAsync">Incrementar Assincronamente</button>
        <Entrando1 />
    </div>
</template>

<script>
import Entrando1 from './Entrando1.vue'

export default {
    name: "TesteVuex",
    props: [],
    components: {
        Entrando1
    },
    data() {
        return {}
    },
    methods: {
        increment() {
            this.$store.dispatch("increment", 1)
        },
        decrement() {
            this.$store.dispatch("decrement")
        },
        incrementAsync() {
            this.$store.dispatch("incrementAsync", 1)
        }
    },
    computed: {
        count() {
            return this.$store.state.count
        },
        doubleCount() {
            return this.$store.getters.doubleCount
        }
    },
    watch: {}
}
</script>

<style scoped></style>
