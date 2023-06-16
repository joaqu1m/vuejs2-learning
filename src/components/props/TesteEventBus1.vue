<template>
    <div>
        <h3>TesteEventBus1</h3>
        <p>Este componente não recebe props, mas recebe um evento do componente irmão.</p>
        <p>Valor recebido do componente irmão: {{ valorRecebido }}</p>
    </div>
</template>

<script>
import EventBus from './EventBus.js';

export default {
    name: "TesteEventBus1",
    props: [],
    components: {},
    data() {
        return {
            valorRecebido: ""
        }
    },
    methods: {},
    computed: {},
    watch: {},
    created() {
        EventBus.$on("eventoteste", (valor) => {
            this.valorRecebido = valor
        })
    }
}
</script>

<style scoped></style>