<template>
    <div>
        <button class="home_container" @click="redirecionar()">
            Ir para cadastro
        </button>
        <br>
        ComponenteTeste:
        <br>
        <ComponenteTeste v-bind="propsComponenteTeste"></ComponenteTeste>
    </div>
</template>

<script>
    import ComponenteTeste from '../components/home/ComponenteTeste.vue'

    export default {
        name: "Home",
        components: {
            ComponenteTeste
        },
        data() {
            return {
                propsComponenteTeste: {
                    mensagem: 'Mensagem do componente teste',
                    outraProp: 'Outra propriedade do componente teste'
                }
            }
        },
        methods: {
            redirecionar() {
                window.location.href = './cadastro'
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