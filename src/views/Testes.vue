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
export default {
    name: "Testes",
    props: [],
    components: {
        TesteVuex: () => import("../components/vuex/TesteVuex.vue"),
        HooksTest: () => import("../components/lifeCycleHooks/HooksTest.vue"),
        TesteV_IF: () => import("../components/condicionais/TesteV_IF.vue"),
        TesteFor: () => import("../components/looping_ref/TesteFor.vue"),
        TesteForRef: () => import("../components/looping_ref/TesteForRef.vue"),
        TesteRef: () => import("../components/looping_ref/TesteRef.vue"),
        TesteForMatriz: () => import("../components/looping_ref/TesteForMatriz.vue"),
        TesteForJson: () => import("../components/looping_ref/TesteForJson.vue"),
        TesteForKey: () => import("../components/looping_ref/TesteForKey.vue"),
        TesteReplaceFor: () => import("../components/looping_ref/TesteReplaceFor.vue"),
        TesteComputed: () => import("../components/option_obj/TesteComputed.vue"),
        TesteWatch: () => import("../components/option_obj/TesteWatch.vue"),
        TesteStyles: () => import("../components/estilizacoes/TesteStyles.vue"),
        Testevmodel: () => import("../components/twowaydatabind/Testevmodel.vue"),
        TesteVModelModifiers: () => import("../components/twowaydatabind/TesteVModelModifiers.vue"),
        TesteVOnGlobal: () => import("../components/lifeCycleHooks/TesteVOnGlobal.vue"),
        TesteCalculos: () => import("../components/lifeCycleHooks/TesteCalculos.vue"),
        TesteSlotMain: () => import("../components/slot/TesteSlotMain.vue")
    },
    data() {
        return {
            frames: [
                { inn: "TesteVuex", especial: false },
                { inn: "HooksTest", especial: false },
                { inn: "TesteV_IF", especial: false },
                { inn: "TesteFor", especial: false },
                { inn: "TesteForRef", especial: false },
                { inn: "TesteRef", especial: false },
                { inn: "TesteForMatriz", especial: true },
                { inn: "TesteForJson", especial: false },
                { inn: "TesteForKey", especial: false },
                { inn: "TesteReplaceFor", especial: false },
                { inn: "TesteComputed", especial: true },
                { inn: "TesteWatch", especial: false },
                { inn: "TesteStyles", especial: false },
                { inn: "Testevmodel", especial: true },
                { inn: "TesteVModelModifiers", especial: false },
                { inn: "TesteVOnGlobal", especial: false },
                { inn: "TesteCalculos", especial: true },
                { inn: "TesteSlotMain", especial: false }
            ],
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