<template>
    <div>
        <button class="home_container" @click="redirecionar2()">
            Ir para cadastro
        </button>
        <router-link to="/testes">
            <button class="home_container">
                Ir para testes
            </button>
        </router-link>
        <br>ComponenteTeste:
        <TesteProps v-bind="propsTesteProps" />
        <PropsEspecificadas :mensagem="propsTesteProps.mensagem" :outraProp="propsTesteProps.outraProp" />
    </div>
</template>

<script>
import TesteProps from '../components/props/TesteProps.vue'
import PropsEspecificadas from '../components/props/PropsEspecificadas.vue'

export default {
    name: "Home",
    components: {
        TesteProps,
        PropsEspecificadas
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