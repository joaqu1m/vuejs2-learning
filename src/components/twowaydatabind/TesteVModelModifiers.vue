<template>
    <div>
        <h2>usando modificadores na diretiva v-model</h2>
        <p>nome: {{ nome }}</p>
        <h3>v-model="nome"</h3>
        <input type="text" v-model="nome"><br>
        <p>Atualiza instantâneamente</p>
        <h3>v-model.lazy="nome"</h3>
        <p>Atualiza apenas após o "onfocusout" da input, ou "onBlur" em react</p>
        <input type="text" v-model.lazy="nome"><br>
        <h3>v-model.number="nome"</h3>
        <p>Converte o valor da input para number e apaga os caracteres não-numéricos</p>
        <input type="text" v-model.number="nome"><br>
        <h3>v-model.trim="nome"</h3>
        <p>Remove os espaços em branco do início e do fim do valor da input</p>
        <input type="text" v-model.trim="nome"><br>
    </div>
</template>

<script>
export default {
    name: "TesteVModelModifiers",
    props: [],
    components: {},
    data() {
        return {
            nome: "João"
        }
    },
    methods: {},
    computed: {},
    watch: {}
}
</script>

<style scoped></style>