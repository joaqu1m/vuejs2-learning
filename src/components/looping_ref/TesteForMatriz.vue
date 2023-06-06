<template>
    <div class="main">
        <div class="tabelinha">
            <div v-for="(linha, iLinha) in matriz" class="line">
                <div :ref="`bloco${iLinha}:${iColuna}`" v-for="(coluna, iColuna) in linha" class="block" @click="selecionar($event, iLinha, iColuna)">
                    {{ coluna }}
                </div>
            </div>
        </div>
        <span class="tabelinha" style="justify-content: center; align-items: center;">
            {{ selecionado }}
        </span>
    </div>
</template>

<script>
export default {
    name: "TesteForMatriz",
    props: [],
    components: {},
    data() {
        return {
            matriz: [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ],
            selecionado: "Clique em alguma peça para começar"
        }
    },
    methods: {
        selecionar(e, iLinha, iColuna) {
            this.$refs[`bloco${iLinha}:${iColuna}`][0].style.backgroundColor = "red"
            this.selecionado = `Você selecionou a peça ${e.target.innerHTML}`
        }
    },
    computed: {},
    watch: {}
}
</script>

<style scoped>
.main {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.tabelinha {
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
}
.line {
    height: calc(100% / 3);
    width: 100%;
    display: flex;
}
.block {
    width: calc(100% / 3);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
}
</style>