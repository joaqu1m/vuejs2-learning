<template>
    <div>
        <video width="300" height="200" controls>
            <!--<source src="https://www.youtube.com/watch?v=a2LnmFgrlUM" />-->
        </video>
        
    </div>
</template>

<script>
import axios from "axios"

export default {
    name: "HooksTest",
    props: [],
    components: {},
    data() {
        return {}
    },
    methods: {},
    computed: {},
    watch: {},
    beforeCreate() {
        // Executa antes que o componente seja inicializado
        console.log('Hook beforeCreate');
    },
    created() {
        // Executa após a criação do componente
        console.log('Hook created');
    },
    beforeMount() {
        axios.get('https://catfact.ninja/fact')
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
        // Executa antes do componente ser montado no DOM
        console.log('Hook beforeMount');
    },
    mounted() {
        // Executa após o componente ser montado no DOM
        console.log('Hook mounted');
    },
    beforeUpdate() {
        // Executa antes de o componente ser atualizado
        console.log('Hook beforeUpdate');
    },
    updated() {
        // Executa após o componente ser atualizado e o DOM ter sido re-renderizado
        console.log('Hook updated');
    },
    beforeDestroy() {
        // Executa antes de o componente ser destruído
        console.log('Hook beforeDestroy');
    },
    destroyed() {
        // Executa após o componente ser totalmente destruído e removido do DOM
        console.log('Hook destroyed');
    },
}
</script>

<style scoped></style>