<template></template>

<script>
export default {
    name: "TesteVOnGlobal",
    props: [],
    components: {},
    data() {
        return {}
    },
    methods: {
        clique() {
            alert('Clicou')
        },
    },
    computed: {},
    watch: {},
    created() {
        window.addEventListener('click', this.clique)
    },
    destroyed() {
        window.removeEventListener('click', this.clique)
    }
}
</script>

<style scoped></style>