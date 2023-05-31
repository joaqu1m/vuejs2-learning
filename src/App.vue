<template>
    <router-view></router-view>
</template>

<script>
    import Home from './views/Home.vue';
    import Cadastro from './views/Cadastro.vue';
    import Lojinha from './views/Lojinha.vue';

    export default {
        name: 'App',
        components: {
            Home,
            Cadastro,
            Lojinha
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