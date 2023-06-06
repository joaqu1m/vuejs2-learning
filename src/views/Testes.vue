<template>
    <div>
        <component v-show="mostrandoFrame" class="frame" :is="conteudoFrame"></component>
        <div class="caixona">
            <button @click="mostrarFrame">TesteVuex</button>
            <button @click="mostrarFrame">HooksTest</button>
            <button @click="mostrarFrame">TesteV_IF</button>
            <button @click="mostrarFrame">TesteFor</button>
            <button @click="mostrarFrame">TesteForRef</button>
            <button @click="mostrarFrame">TesteRef</button>
            <button @click="mostrarFrame">TesteForMatriz</button>
            <button @click="mostrarFrame">TesteForJson</button>
            <button @click="mostrarFrame">TesteForKey</button>
            <button @click="mostrarFrame">TesteReplaceFor</button>
            <button @click="mostrarFrame">TesteComputed</button>
            <button @click="mostrarFrame">TesteWatch</button>
            <button @click="mostrarFrame">TesteStyles</button>
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
import TesteForJson from '../components/looping_ref/TesteForJson.vue'
import TesteForKey from '../components/looping_ref/TesteForKey.vue';
import TesteReplaceFor from '../components/looping_ref/TesteReplaceFor.vue';
import TesteComputed from '../components/option_obj/TesteComputed.vue';
import TesteWatch from '../components/option_obj/TesteWatch.vue';
import TesteStyles from '../components/estilizacoes/TesteStyles.vue';

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
        TesteForMatriz,
        TesteForJson,
        TesteForKey,
        TesteReplaceFor,
        TesteComputed,
        TesteWatch,
        TesteStyles
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