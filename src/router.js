import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
import Cadastro from '@/components/cadastro/Cadastro.vue';
import Lojinha from '@/views/Lojinha.vue';

// agora esses dois componentes serão carregados assincronamente no mesmo chunk
const TesteMaps = () => import(/* webpackChunkName: "testes" */ './components/vuex-maps/TesteMaps.vue');
const Testes = () => import(/* webpackChunkName: "testes" */ './views/Testes.vue');
import Contato from './views/Contato.vue'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
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
            path: "/testes",
            name: "Testes",
            component: Testes
        },
        {
            path: "/loja",
            name: "Lojinha",
            component: Lojinha,
            // alias: ["*"]
        },
        {
            path: "/lojinha",
            redirect: "/loja"
        },
        // {
        //     path: "*",
        //     redirect: "/"
        // },
        {
            path: "/contato",
            name: "Contato",
            component: Contato,
            props: true,
            children: [
                {
                    path: ":entry",
                    component: Contato
                }
            ]
        },
        {
            path: "/",
            name: "Home",
            component: Home,
            alias: ["/home"],
            props: true,
            children: [
                {
                    path: ":nome",
                    component: Home
                }
            ]
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        // return { x: 0, y: 0 }
        return window.scrollTo({ top: 0, behavior: "smooth" })
    }
});
