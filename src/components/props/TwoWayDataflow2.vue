<template>
    <div>
        <p>no componente:</p>
        <p>formValor: {{ formValor2 }}</p>
        <p>formValorComponente: {{ formValor2Component }}</p>
        <input type="text" v-model="formValor2Component" @keyup="alterar" >
    </div>
</template>

<script>
export default {
    name: "TwoWayDataflow2",
    props: ["formValor2"],
    components: {},
    data() {
        return {
            formValor2Component: this.formValor2
        }
    },
    methods: {
        alterar() {
            this.$emit("update:formValor2", this.formValor2Component)
        }
    },
    computed: {},
    watch: {},
}
</script>

<style scoped></style>