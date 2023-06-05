<template>
    <div>
        bem vindo à pagina de testes
        <component v-show="mostrandoFrame" class="frame" :is="conteudoFrame"></component>
        <div class="caixona">
            <button @click="mostrarFrame">TesteVuex</button>
            <button @click="mostrarFrame">HooksTest</button>
            <button @click="mostrarFrame">TesteV_IF</button>
            <button @click="mostrarFrame">TesteFor</button>
            <button @click="mostrarFrame">TesteForRef</button>
            <button @click="mostrarFrame">TesteRef</button>
            <button @click="mostrarFrame">TesteForMatriz</button>
        </div>
    </div>
</template>

<script>
import TesteVuex from '../components/vuex/TesteVuex.vue';
import HooksTest from '../components/lifeCycleHooks/HooksTest.vue';
import TesteV_IF from '../components/condicionais/TesteV_IF.vue'
import TesteFor from '../components/looping_ref/TesteFor.vue'
import TesteForRef from '../components/looping_ref/TesteForRef.vue'
import TesteRef from '../components/looping_ref/TesteRef.vue'
import TesteForMatriz from '../components/looping_ref/TesteForMatriz.vue'

export default {
    name: "Testes",
    props: [],
    components: {
        TesteVuex,
        HooksTest,
        TesteV_IF,
        TesteFor,
        TesteForRef,
        TesteRef,
        TesteForMatriz
    },
    data() {
        return {
            mostrandoFrame: false,
            conteudoFrame: null
        }
    },
    methods: {
        mostrarFrame(e) {
            this.conteudoFrame = e.target.innerText
            this.mostrandoFrame = true
        }
    },
    computed: {},
    watch: {}
}
</script>

<style scoped>
.frame {
    width: 800px;
    height: 400px;
    border: 1px solid gray;
    overflow-y: scroll;
}
.caixona {
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
}
.caixona > button {
    width: 100px;
    height: 100px;
}
</style>