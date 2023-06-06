<template>
    <div style="padding: 10px">
        <strong>class="azul"</strong>
        <p class="azul">Texto</p>
        <strong>class="azul bold"</strong>
        <p class="azul bold">Texto</p>
        <strong>:class="atributoAzul"</strong>
        <p :class="atributoAzul">Texto</p>
        <strong>:class="[atributoAzul, atributoBold]"</strong>
        <p :class="[atributoAzul, atributoBold]">Texto</p>
        <strong>:class="{ azul: true, bold: false }"</strong>
        <p :class="{ azul: true, bold: false }">Texto</p>
        <strong>:class="{ azul: condicaoAzul, bold: true }"</strong>
        <p :class="{ azul: condicaoAzul, bold: true }">Texto</p>
        <strong>:class="[{ azul: condicaoAzul }, atributoBold]"</strong>
        <p :class="[{ azul: condicaoAzul }, atributoBold]">Texto</p>
        <strong>style="color: blue;"</strong>
        <p style="color: blue;">Texto</p>
        <strong>:style="{ color: 'blue' }"</strong>
        <p :style="{ color: 'blue' }">Texto</p>
        <strong>:style="{ color: 'blue', fontWeight: 'bold' }"</strong>
        <p :style="{ color: 'blue', fontWeight: 'bold' }">Texto</p>
        <strong>:style="{ color: atributoBlue }"</strong>
        <p :style="{ color: atributoBlue }">Texto</p>
        <strong>:style="{ fontSize: tamanho + 'px' }"</strong>
        <p :style="{ fontSize: tamanho + 'px' }">Texto</p>
    </div>
</template>

<script>
export default {
    name: "TesteStyles",
    props: [],
    components: {},
    data() {
        return {
            atributoAzul: "azul",
            atributoBold: "bold",
            condicaoAzul: false,
            atributoBlue: "blue",
            tamanho: 30
        }
    },
    methods: {},
    computed: {},
    watch: {}
}
</script>

<style scoped>
    .verde {
        color: green;
    }
    vermelho {
        color: red;
    }
    .azul {
        color: blue;
    }
    .bold {
        font-weight: bold;
    }
</style>