<template>
    <div>
        este componente será global
    </div>
</template>

<script>
Vue.component('componente-global', {
    name: "ComponenteGlobal",
    props: [],
    components: {},
    data() {
        return {}
    },
    methods: {},
    computed: {},
    watch: {}
})
</script>

<style scoped></style>