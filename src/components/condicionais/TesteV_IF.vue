<template>
    <div>
        <button @click="mostrando = !mostrando">alternador</button>
        <div v-if="mostrando">
            <h2>cau no h2 do if</h2>
        </div>
        <span v-else>
            <h1>caiu no h1 do else</h1>
        </span>
        <template v-if="mostrando">
            <h2>cau no h2 do if</h2>
        </template>
        <template v-else>
            <h1>caiu no h1 do else</h1>
        </template>
        <div v-show="mostrando">
            opa bom?
        </div>
        <div v-if="mostrando">
            opa bom?
        </div>
    </div>
</template>

<script>
export default {
    name: "TesteV_IF",
    props: [],
    components: {},
    data() {
        return {
            mostrando: false
        }
    },
    methods: {},
    computed: {},
    watch: {}
}
</script>

<style scoped></style>
