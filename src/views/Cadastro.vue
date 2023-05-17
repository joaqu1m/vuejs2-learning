<template>
    <div>
        <div>
            Alterador de componentes em formulário
        </div>
        <button id="button2" @click="exibirForm2 = !exibirForm2">
            alterar componente
        </button>
        <button id="button3" @click="propsParaForm1.trueOuFalse = !propsParaForm1.trueOuFalse">
            alterar prop de componente
        </button>
        <div id="componente">
            <component v-bind="propsParaForm1" :is="exibirForm2 ? 'Form2' : 'Form1'"></component>
        </div>
    </div>
</template>

<script>
    import Form1 from '../components/cadastro/Form1.vue'
    import Form2 from '../components/cadastro/Form2.vue'

    export default {
        data() {
            return {
                exibirForm2: false,
                propsParaForm1: {
                    mensagem: 'Olá, mundo!',
                    outraProp: 42,
                    trueOuFalse: false
                }
            }
        },
        name: 'Cadastro',
        components: {
            Form1,
            Form2
        }
    }
</script>

<style scoped></style>
