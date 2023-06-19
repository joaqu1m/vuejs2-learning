<template>
    <div class="corpo">
        <div class="card-cadastro">
            <div class="card-cadastro-titulo">
                Cadastro
            </div>
            <keep-alive>
                <component class="card-cadastro-form" :is="formAtual"></component>
            </keep-alive>
            <button @click="validarForm" class="card-cadastro-botao">
                Próxima fase
            </button>
            <router-link to="/">
                <button class="card-voltar-botao" v-if="formAtual === 'Form1'">voltar à home</button>
            </router-link>
        </div>
    </div>
</template>

<script>
// a tag keep-alive não deixa o componente tomar destroyed() quando ele sai da tela

import Form1 from './Form1.vue'
import Form2 from './Form2.vue'
import Form3 from './Form3.vue'

export default {
    name: "Cadastro",
    components: {
        Form1,
        Form2,
        Form3
    },
    data() {
        return {
            formAtual: "Form1"
        }
    },
    methods: {
        validarForm() {
            const form = Number(this.formAtual.substring(4))

            if (form === 1) {
                // tem suas validacoes
                this.formAtual = "Form2"
            } else if (form === 2) {
                // tem suas validacoes
                this.formAtual = "Form3"
            } else if (form === 3) {
                // tem suas validacoes
                this.formAtual = "Form1"
            }
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
.card-voltar-botao {
    width: 100px;
    height: 60px;
    border-radius: 10px;
    background-color: rgb(230, 166, 250);
    margin-top: 20px;
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