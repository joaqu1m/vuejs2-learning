<template>
    <router-view></router-view>
</template>

<script>
    import Home from './views/Home.vue';
    import Cadastro from './views/Cadastro.vue';

    export default {
        name: 'App',
        components: {
            Home,
            Cadastro
        }
    }
</script>

<style>
    body {
        margin: 0;
    }
    * {
        font-family: "Trebuchet MS";
    }
</style>