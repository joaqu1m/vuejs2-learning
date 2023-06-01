<template>
    <div class="corpo">
        <div class="card-cadastro">
            <div class="card-cadastro-titulo">
                Cadastro
            </div>
            <component class="card-cadastro-form" :is="`Form${formAtual}`"></component>
            <button @click="formAtual++" class="card-cadastro-botao">
                Próxima fase
            </button>
        </div>
    </div>
</template>

<script>
    import Form1 from '../components/cadastro/Form1.vue'
    import Form2 from '../components/cadastro/Form2.vue'
    import Form3 from '../components/cadastro/Form3.vue'

    export default {
        name: "Cadastro",
        components: {
            Form1,
            Form2,
            Form3
        },
        data() {
            return {
                formAtual: 1
            }
        }
    }
</script>

<style scoped>
    .corpo {
        width: 100vw;
        height: 100vh;
        background-color: rgb(247, 247, 247);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card-cadastro {
        width: 450px;
        height: 500px;
        border: 1px rgb(177, 177, 177) solid;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .card-cadastro-titulo {
        font-size: 25px;
    }

    .card-cadastro-botao {
        width: 200px;
        height: 50px;
        border-radius: 10px;
        background-color: rgb(230, 166, 250);
        border: 0;
        color: white;
        font-size: 20px;
        cursor: pointer;
    }

    .card-cadastro-form {
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
</style>