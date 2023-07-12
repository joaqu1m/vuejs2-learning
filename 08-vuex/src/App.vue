<template>
  <div id="app">
    <ul>
      <li v-for="livro in $store.state.livros" :key="livro.nome">
        <p>{{livro.nome}}</p>
      </li>
    </ul>
    <h2>Livros Lidos</h2>
    <ul>
      <li v-for="livro in livrosLidos(true)" :key="livro.nome">
        <p>{{livro.nome}}</p>
      </li>
    </ul>
    {{$store.state.acao.acao}}
    <Aluno/>
    <Curso/>
  </div>
</template>

<script>
import Aluno from "@/components/Aluno.vue";
import Curso from "@/components/Curso.vue";
import { mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    Aluno,
    Curso
  },
  computed: {
    ...mapGetters(["livrosLidos"])
  },
  created() {
    console.log(this.$store);
    this.$store.dispatch("acao/puxarAcao");
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
