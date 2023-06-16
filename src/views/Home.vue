<template>
    <div>
        <button class="home_container" @click="redirecionar2()">
            Ir para cadastro
        </button>
        <router-link to="/testes">
            <button class="home_container">
                Ir para testes
            </button>
        </router-link>
        <br>ComponenteTeste:
        <TesteProps v-bind="propsTesteProps" />
        <ComponenteGlobal />
        <PropsEspecificadas :mensagem="propsTesteProps.mensagem" outraProp="Outra propriedade do componente teste" />
        <PropsTipadas :mensagem="propsTesteProps.mensagem" />
        <h3>indo e voltando dados</h3>
        <p>na home:</p>
        <p>formValor: {{ formValor }}</p>
        <TwoWayDataflow1
            :valorFormulario="formValor"
            @update:valorFormulario="formValor = $event"
        />
        <h3>indo e voltando dados</h3>
        <p>na home:</p>
        <p>formValor: {{ formValor2 }}</p>
        <TwoWayDataflow2
            :formValor2.sync="formValor2"
        />
        <TesteEventBus1 />
        <TesteEventBus2 />
    </div>
</template>

<script>
import TesteProps from '../components/props/TesteProps.vue'
import PropsEspecificadas from '../components/props/PropsEspecificadas.vue'
import PropsTipadas from '../components/props/PropsTipadas.vue'
import TwoWayDataflow1 from '../components/props/TwoWayDataflow1.vue';
import TwoWayDataflow2 from '../components/props/TwoWayDataflow2.vue';
import TesteEventBus1 from '../components/props/TesteEventBus1.vue';
import TesteEventBus2 from '../components/props/TesteEventBus2.vue';

export default {
    name: "Home",
    components: {
    TesteProps,
    PropsEspecificadas,
    PropsTipadas,
    TwoWayDataflow1,
    TwoWayDataflow2,
    TesteEventBus1,
    TesteEventBus2
},
    data() {
        return {
            propsTesteProps: {
                mensagem: 'Mensagem do componente teste',
                outraProp: 'Outra propriedade do componente teste'
            },
            formValor: "",
            formValor2: ""
        }
    },
    methods: {
        redirecionar() {
            window.location.href = './cadastro'
        },
        redirecionar2() {
            this.$router.push("./cadastro")
        }
    }
};
</script>

<style scoped>
.home_container {
    margin: 10px;
    cursor: pointer;
}
</style>