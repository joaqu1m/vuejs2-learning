<template>
    <div>
        <p>no componente:</p>
        <p>formValor: {{ valorFormulario }}</p>
        <p>formValorComponente: {{ formValorComponente }}</p>
        <input type="text" v-model="formValorComponente" @keyup="alterar" >
    </div>
</template>

<script>
export default {
    name: "TwoWayDataflow1",
    props: ["valorFormulario"],
    components: {},
    data() {
        return {
            formValorComponente: this.valorFormulario
        }
    },
    methods: {
        alterar() {
            this.$emit("update:valorFormulario", this.formValorComponente)
        }
    },
    computed: {},
    watch: {}
}
</script>

<style scoped></style>