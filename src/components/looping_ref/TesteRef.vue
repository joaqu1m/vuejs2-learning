<template>
    <div>
        <input type="text" placeholder="Nome" ref="nomeRef">
        <input type="text" placeholder="Email" ref="emailRef">
        <input type="text" placeholder="Senha" ref="senhaRef">
        <input type="text" placeholder="Cpf" ref="cpfRef">
        <button @click="logrefs">Log refs</button>
    </div>
</template>

<script>
export default {
    name: "TesteRef",
    props: [],
    components: {},
    data() {
        return {}
    },
    methods: {
        logrefs() {
            console.log(this.$refs)
        }
    },
    computed: {},
    watch: {}
}
</script>

<style scoped></style>