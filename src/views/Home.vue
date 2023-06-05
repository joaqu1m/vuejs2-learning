<template>
    <div>
        <button class="home_container" @click="redirecionar2()">
            Ir para cadastro
        </button>
        <br>ComponenteTeste:
        <TesteProps v-bind="propsTesteProps" />
    </div>
</template>

<script>
import TesteProps from '../components/props/TesteProps.vue'

export default {
    name: "Home",
    components: {
        TesteProps
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