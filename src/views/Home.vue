<template>
    <div>
        <button class="home_container" @click="redirecionar2()">
            Ir para cadastro
        </button>
        <br>ComponenteTeste:
        <TesteProps v-bind="propsTesteProps"></TesteProps>
        <TesteVuex />
        <HooksTest />
    </div>
</template>

<script>
import TesteProps from '../components/props/TesteProps.vue'
import TesteVuex from '../components/vuex/TesteVuex.vue';
import HooksTest from '../components/lifeCycleHooks/HooksTest.vue';

export default {
    name: "Home",
    components: {
        TesteProps,
        TesteVuex,
        HooksTest
    },
    data() {
        return {
            propsTesteProps: {
                mensagem: 'Mensagem do componente teste',
                outraProp: 'Outra propriedade do componente teste'
            }
        }
    },
    methods: {
        redirecionar() {
            window.location.href = './cadastro'
        },
        redirecionar2() {
            this.$router.push("./cadastro")
        }
    }
};
</script>

<style scoped>
.home_container {
    margin: 10px;
    cursor: pointer;
}
</style>