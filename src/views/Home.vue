<template>
    <div class="container">
        nova div
    </div>
</template>

<script>
    export default {
        data() {
            return {
                mensagem: 'Olá, Vue!'
            };
        },
        methods: {
            atualizarMensagem() {
                this.mensagem = 'Mensagem atualizada!';
            }
        }
    };
</script>

<style scoped>
    .container {
        background-color: grey;
        margin: 20px;
    }
</style>
