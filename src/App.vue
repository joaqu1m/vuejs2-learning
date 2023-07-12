<template>
    <Transition mode="out-in">
        <router-view></router-view>
    </Transition>
</template>

<script>
import Home from './views/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue';
import Lojinha from './views/Lojinha.vue';
import TesteMaps from './components/vuex-maps/TesteMaps.vue';
import Testes from './views/Testes.vue';

export default {
    name: "App",
    components: {
        Home,
        Cadastro,
        Lojinha,
        TesteMaps,
        Testes
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

.v-enter,
.v-leave-to {
    opacity: 0;
}

.v-enter-active,
.v-leave-active {
    transition: all 0.1s
}
</style>