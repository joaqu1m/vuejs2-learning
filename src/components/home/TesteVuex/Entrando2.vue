<template>
    <div>
        <h2>Counter: {{ count }}</h2>
        <button @click="teste">Increment</button>
        <button @click="decrement">Decrement</button>
        <button @click="incrementAsync">Increment Async</button>
        <h3>Double Count: {{ doubleCount }}</h3>
        <h3>Triple count: {{ tripleCount }}</h3>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: "Entrando2",
        props: [],
        components: {},
        data() {
            return {}
        },
        methods: {
            ...mapActions(['increment']),
            teste() {
                this.increment(10)
            },
            decrement() {
                this.$store.commit('decrement')
            },
            incrementAsync() {
                this.$store.dispatch('incrementAsync')
            }
        },
        computed: {
            ...mapGetters(["tripleCount"]),
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