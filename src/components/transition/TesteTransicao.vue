<template>
    <div>
        <h2>Esse quadrado vai aparecer e sumir</h2>
        <button @click="alterar">alternar</button>
        <div class="quadrados">
            <transition appear>
            <!--
                @before-enter="onBeforeEnter"
                @enter="onEnter"
                @after-enter="onAfterEnter"
                @enter-cancelled="onEnterCancelled"
                @before-leave="onBeforeLeave"
                @leave="onLeave"
                @after-leave="onAfterLeave"
                @leave-cancelled="onLeaveCancelled"
            -->
                <div v-if="aparecendo" class="quadrado"></div>
            </transition>
            <transition name="fade" @after-enter="funcaoTeste" @before-leave="funcaoSair" appear>
                <div v-if="aparecendo" class="quadrado"></div>
            </transition>
            <transition name="fade2" enter-class="classenormal">
                <div v-if="aparecendo" class="quadrado"></div>
            </transition>
        </div>
        <p>
            <img src="../../assets/transition-classes.f0f7b3c9.png" alt="" width="100%">
        </p>
    </div>
</template>

<script>
export default {
    name: "TesteTransicao",
    props: [],
    components: {},
    data() {
        return {
            aparecendo: true
        }
    },
    methods: {
        alterar() {
            this.aparecendo = !this.aparecendo
        },
        funcaoTeste(e) {
            // e: div que esta tirando da dom
            e.style.backgroundColor = 'blue'
        },
        funcaoSair(e) {
            e.style.backgroundColor = ''
        }
    },
    computed: {},
    watch: {}
}
</script>

<style scoped>
.quadrados {
    display: flex;
    flex-wrap: wrap;
}
.quadrado {
    width: 80px;
    height: 80px;
    background-color: red;
    margin: 20px;
}
/* quando o elemento surgiu no DOM: */
.v-enter {
    opacity: 0;
}
/* durante a animação de entrada */
.v-enter-active {
    transition: opacity 1s;
}
/* quando a animação de entrada termina */
.v-enter-to {
    opacity: 1;
}
/* quando o elemento vai sair do DOM: */
.v-leave {
    opacity: 1;
}
/* durante a animação de saída */
.v-leave-active {
    transition: opacity 1s;
}
/* quando a animação de saída termina */
.v-leave-to {
    opacity: 0;
}

/* agora especificando o nome da transição: */
.fade-enter-active,
.fade-leave-active {
    transition: background-color 1s;
}
.fade-enter-to {
    background-color: blue;
}
.fade-leave-to {
    background-color: red;
}

.classenormal {
    background-color: yellow;
}
</style>