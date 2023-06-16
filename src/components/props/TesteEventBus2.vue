<template>
    <div>
        <h3>TesteEventBus2</h3>
        <p>Este componente não recebe props, mas emite um evento para o componente irmão.</p>
        <button @click="emitirEvento">Emitir evento</button>
    </div>
</template>

<script>
import EventBus from './EventBus.js';

export default {
    name: "TesteEventBus2",
    props: [],
    components: {},
    data() {
        return {}
    },
    methods: {
        emitirEvento() {
            EventBus.$emit("eventoteste", "Evento emitido pelo componente TesteEventBus2")
        }
    },
    computed: {},
    watch: {}
}
</script>

<style scoped></style>