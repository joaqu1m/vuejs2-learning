<template>
    <div>
        <button @click="() => { this.$router.push('./home') }">
            Return
        </button>
        <h3>STATEs</h3>
        Count:<br>
        {{ count }}<br>
        <h3>GETTERs</h3>
        NormalCount:<br>
        {{ normalCount }}<br>
        DoubleCount:<br>
        {{ doubleCount }}<br>
        TripleCount:<br>
        {{ tripleCount }}<br>
        <h3>MUTATIONs</h3>
        <button @click="increment(1)">Increment</button>
        <button @click="decrement()">Decrement</button>
        <h3>ACTIONs</h3>
        <button @click="increment(1)">Increment</button>
        <button @click="decrement()">Decrement</button>
        <button @click="incrementAsync(1)">Increment Async</button>

    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';

export default {
    name: "TesteMaps",
    props: [],
    components: {},
    data() {
        return {
        }
    },
    methods: {
        ...mapMutations("increment", "decrement"),
        ...mapActions(['increment', 'decrement', 'incrementAsync']),
        retornar() {

        }
    },
    computed: {
        ...mapState(["count"]),
        ...mapGetters(["normalCount", "doubleCount", "tripleCount"])
    },
    watch: {}
}
</script>

<style scoped></style>