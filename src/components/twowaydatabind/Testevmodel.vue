<template>
    <div>
        <h3>V-model sendo usado em campos:</h3>
        <input type="text" v-model="nome"><br>
        <input type="text" v-model="sobrenome">
        <p>nome: {{ nome }}</p>
        <p>sobrenome: {{ sobrenome }}</p>
        <button @click="nome = 'Jorge'">Alterar propriedade "nome" para 'Jorge'</button><br>
        <button @click="aaa">Alterar propriedade "sobrenome"</button><br>
        <h2>radio input</h2>
        <p>v-model em inputs não faz a relação de javascript -> DOM, apenas a DOM -> javascript como valor da input indo pro v-model associado</p>
        <p>esses valores são todos definidos pela própria propriedade "value" do html, e o v-model de todos esses inputs foi definido como "nome"</p>
        <p>Alterar propriedade "nome" para:</p>
        <!-- só estou definindo a propriedade "id" para ser referenciada pelo for da label -->
        <input id="jorge" type="radio" value="Jorge" v-model="nome">
        <label for="jorge">Jorge</label><br>
        <input id="josias" type="radio" value="Josias" v-model="nome">
        <label for="josias">Josias</label><br>
        <input id="jesus" type="radio" value="Jesus" v-model="nome">
        <label for="jesus">Jesus</label><br>
        <h2>Usando v-model em >select> e >option></h2>
        <p>esses valores são todos definidos pela própria propriedade "value" em cada option, e o v-model foi definido como "nome" apenas em select</p>
        <p>Alterar propriedade "nome" para:</p>
        <select v-model="nome">
            <option value="Jorge">Jorge</option>
            <option value="Josias">Josias</option>
            <option value="Jesus">Jesus</option>
        </select>
    </div>
</template>

<script>
export default {
    name: "Testevmodel",
    props: [],
    components: {},
    data() {
        return {
            nome: "João",
            sobrenome: "Silva"
        }
    },
    methods: {
        aaa() {
            this.sobrenome = prompt('Digite seu sobrenome')
        }
    },
    computed: {},
    watch: {}
}
</script>

<style scoped></style>