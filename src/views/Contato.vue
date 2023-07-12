<template>
    <div>
        <h1>Contato:</h1>
        <input type="text" @keydown.enter="ir">
        <div v-if="dados">
            <h3>{{ dados.name }}</h3>
            <img :src="dados.image" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: "Contato",
    props: ["entry"],
    components: {},
    data() {
        return {
            dados: null
        }
    },
    methods: {
        ir(e) {
            if (this.$router.history.current.path !== `/contato/${e.target.value}`)
                this.$router.push(`/contato/${e.target.value}`)
        },
        puxarDados(entry) {
            fetch(`https://botw-compendium.herokuapp.com/api/v2/entry/${entry}`)
            .then(res => res.json())
            .then(res => {
                this.dados = res.data
            })
            .catch(err => {
                console.log(err)
                this.dados = null
            })
        }
    },
    computed: {},
    watch: {},
    beforeRouteUpdate(to, from, next) {
        this.puxarDados(to.params.entry)
        next()
    }
}
</script>

<style scoped></style>