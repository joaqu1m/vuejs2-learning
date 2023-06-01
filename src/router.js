import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './views/Home.vue';
import Cadastro from './views/Cadastro.vue';
import Lojinha from './views/Lojinha.vue';
import TesteMaps from './components/vuex-maps/TesteMaps.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
            alias: ["/home"],
            children: [
                {
                    path: ""
                }
            ]
        },
        {
            path: "/cadastro",
            name: "Cadastro",
            component: Cadastro
        },
        {
            path: "/maps",
            name: "TesteMaps",
            component: TesteMaps
        },
        {
            path: "/loja",
            name: "Lojinha",
            component: Lojinha,
            alias: ["/*"]
        }
    ]
});

export default router;
