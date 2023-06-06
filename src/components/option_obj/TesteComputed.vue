<template>
    <div style="padding: 10px">
        <h2>Utilizando computed para reatividade em resultados de cálculos</h2>
        <p>"computed" guarda getters customizados para um ou mais atributos</p>
        <p>
            computeds só funcionam caso haja interação com algum atributo em data(), caso contrário não há
            a necessidade de um getter customizado e a reatividade não funciona
        </p>
        <p>
            neste exemplo, a fórmula da tangente e o teorema de pitágoras estão em "computed"
        </p>
        <div :style="{ height: cateto2 + 'px' }" style="position: relative">
            <div class="poligono" :style="{ width: cateto1 + 'px', height: cateto2 + 'px' }"></div>
            <div class="quadradinho" :style="{ rotate: tangente + 'deg' }">
                <div class="hipotenusa" :style="{ width: hipotenusa + 'px' }"></div>
            </div>
        </div>
        <p>tamanho do cateto oposto: {{ cateto2 }}px</p>
        <p>tamanho do cateto adjacente: {{ cateto1 }}px</p>
        <p>tamanho da hipotenusa: {{ hipotenusa.toFixed(3) }}px</p>
        <p>tangente do ângulo: {{ tangente.toFixed(1) }}°</p>
        <br>
        <button @click="aumentar('cateto1')">Aumentar largura do triângulo retângulo</button>
        <br>
        <button @click="diminuir('cateto1')">Diminuir largura do triângulo retângulo</button>
        <br><br>
        <button @click="aumentar('cateto2')">Aumentar altura do triângulo retângulo</button>
        <br>
        <button @click="diminuir('cateto2')">Diminuir altura do triângulo retângulo</button>
    </div>
</template>

<script>
export default {
    name: "TesteComputed",
    props: [],
    components: {},
    data() {
        return {
            cateto1: 100,
            cateto2: 100
        }
    },
    methods: {
        aumentar(cateto) {
            this[cateto] += 10
        },
        diminuir(cateto) {
            this[cateto] -= 10
        }
    },
    computed: {
        hipotenusa() {
            return (((this.cateto1 ** 2) + (this.cateto2 ** 2)) ** 0.5) + 4 // +4 é a largura da borda
        },
        tangente() {
            return Math.atan(this.cateto2 / this.cateto1) * 180 / Math.PI
        }
    },
    watch: {}
}
</script>

<style scoped>
.poligono {
    border: 2px solid transparent;
    border-bottom-color: green;
    border-left-color: blue;
    position: absolute;
}

.quadradinho {
    height: 2px;
    position: absolute;
    width: 2px;
}

.hipotenusa {
    height: 2px;
    background-color: red;
}
</style>