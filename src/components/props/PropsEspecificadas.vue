<template>
    <div>
        <h3>PropsEspecificadas</h3>
        {{ mensagem }}
        {{ outraProp }}
    </div>
</template>

<script>
export default {
    name: "PropsEspecificadas",
    props: ["mensagem", "outraProp"],
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