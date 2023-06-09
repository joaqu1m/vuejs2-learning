<template>
    <div>
        <p>esse teste adiciona um listener global que procura pela movimentação do mouse então calcula o quanto foi movido em pixels</p>
        <p>x: {{ x }}px</p>
        <p>y: {{ y }}px</p>
        <p>translação realizada em X: {{ mX }}px</p>
        <p>translação realizada em Y: {{ mY }}px</p>
    </div>
</template>

<script>
export default {
    name: "TesteCalculos",
    props: [],
    components: {},
    data() {
        return {
            x: 0,
            y: 0,
            mX: 0,
            mY: 0
        }
    },
    methods: {
        movimento(e) {
            this.x = e.clientX
            this.y = e.clientY
        }
    },
    computed: {},
    watch: {
        x(after, before) {
            this.mX = after - before
        },
        y(after, before) {
            this.mY = after - before
        }
    },
    created() {
        window.addEventListener("mousemove", this.movimento)
    },
    destroyed() {
        window.removeEventListener("mousemove", this.movimento)
    }
}
</script>

<style scoped></style>