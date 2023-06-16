<template>
    <div>
        <h3>PropsTipadas</h3>
        <p>nesse caso, o programa da erro se a tipagem estiver incorreta</p>
        {{ mensagem }}
        {{ outraProp }}
    </div>
</template>

<script>
export default {
    name: "PropsTipadas",
    props: {
        mensagem: {
            type: String,
            required: true
        },
        outraProp: {
            type: String,
            required: false,
            default: "Valor padrão"
        },
        // Também é possível apenas passar o "type", sem especificar nada
        podeSerString: String,
        // Vários types
        podeSerStringOuFuncao: [String, Function]
    },
    components: {},
    data() {
        return {}
    },
    methods: {},
    computed: {},
    watch: {}
}
</script>

<style scoped></style>