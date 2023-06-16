<template>
    <div>
        <component v-if="conteudoFrame" class="frame" :is="conteudoFrame"></component>
        <div v-else style="margin: 10px;">
            <router-link to="/">
                <button>Retornar à home</button>
            </router-link>
            <h2>Página de testes gerais</h2>
        </div>
        <div class="caixona">
            <button v-for="(frame, i) in frames" :key="i" @click="mostrarFrame" :class="{ botaoEspecial: frame.especial }">
                {{ frame.inn }}
            </button>
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
import Testevmodel from '../components/twowaydatabind/Testevmodel.vue';
import TesteVModelModifiers from '../components/twowaydatabind/TesteVModelModifiers.vue';
import TesteVOnGlobal from '../components/lifeCycleHooks/TesteVOnGlobal.vue';
import TesteCalculos from '../components/lifeCycleHooks/TesteCalculos.vue';

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
        TesteStyles,
        Testevmodel,
        TesteVModelModifiers,
        TesteVOnGlobal,
        TesteCalculos
    },
    data() {
        return {
            frames: [{
                inn: "TesteVuex",
                especial: false
            }, {
                inn: "HooksTest",
                especial: false
            }, {
                inn: "TesteV_IF",
                especial: false
            }, {
                inn: "TesteFor",
                especial: false
            }, {
                inn: "TesteForRef",
                especial: false
            }, {
                inn: "TesteRef",
                especial: false
            }, {
                inn: "TesteForMatriz",
                especial: true
            }, {
                inn: "TesteForJson",
                especial: false
            }, {
                inn: "TesteForKey",
                especial: false
            }, {
                inn: "TesteReplaceFor",
                especial: false
            }, {
                inn: "TesteComputed",
                especial: true
            }, {
                inn: "TesteWatch",
                especial: false
            }, {
                inn: "TesteStyles",
                especial: false
            }, {
                inn: "Testevmodel",
                especial: true
            }, {
                inn: "TesteVModelModifiers",
                especial: false
            }, {
                inn: "TesteVOnGlobal",
                especial: false
            }, {
                inn: "TesteCalculos",
                especial: true
            }],
            conteudoFrame: null
        }
    },
    methods: {
        mostrarFrame(e) {
            const fS = e.target.innerText
            this.conteudoFrame = this.conteudoFrame === fS ? null : fS
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
    background-color: rgb(255, 245, 253);
    border: 1px solid rgb(255, 230, 234);
    padding: 20px;
}
.botaoEspecial {
    background-color: #555555 !important;
    border-color: gold !important;
    color: white !important;
}
</style>