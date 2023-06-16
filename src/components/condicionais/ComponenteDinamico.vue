<template>
    <div>
        <h3>ComponenteDinamico</h3>
        <component :is="componente"></component>
    </div>
</template>

<script>
export default {
    name: "ComponenteDinamico",
    props: [],
    components: {},
    data() {
        return {}
    },
    methods: {},
    computed: {},
    watch: {}
}
</script>

<style scoped></style>