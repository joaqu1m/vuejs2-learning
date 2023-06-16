<template>
    <div>
        <h3>ComponenteSlot3</h3>
        <slot :variavelInterna="variavelInterna"></slot>
    </div>
</template>

<script>
export default {
    name: "ComponenteSlot3",
    props: [],
    components: {},
    data() {
        return {
            variavelInterna: "Esta é uma variável interna do componente slot 3"
        }
    },
    methods: {},
    computed: {},
    watch: {}
}
</script>

<style scoped></style>