<template>
    <div>
        <p>contador: {{ contador }}</p>
        <button @click="incrementar">Incrementar</button>
        <p>Evento que está assistindo a propriedade watch:</p>
        <p v-if="incrementouRecentemente" style="color: green;">Valor "incrementar" alterado!</p>
        <p v-else style="color: red;">Esperando...</p>
        <p>
            Antes:
            {{ before }}
        </p>
        <p>
            Depois:
            {{ after }}
        </p>
    </div>
</template>

<script>
export default {
    name: "TesteWatch",
    props: [],
    components: {},
    data() {
        return {
            contador: 0,
            incrementouRecentemente: false,
            timeout: null,
            after: null,
            before: null
        }
    },
    methods: {
        incrementar() {
            this.contador++
        },
    },
    computed: {},
    watch: {
        contador(after, before) {
            this.after = after
            this.before = before
            this.incrementouRecentemente = true
            clearTimeout(this.timeout)
            this.timeout = setTimeout(() => {
                this.incrementouRecentemente = false
            }, 500)
        }
    }
}
</script>

<style scoped></style>