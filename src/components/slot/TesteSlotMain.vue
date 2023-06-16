<template>
    <div>
        <p>
            Slots são como children do react, mas podendo ser especificado em várias partições.
            Essas partições são usadas com >template> com a propriedade v-slot:nomedoslot, que
            pode ser abreviada para #nomedoslot
        </p>
        <h2>Esses são componentes que utilizam de slots:</h2>
        <ComponenteSlot1>
            <p style="color: red">
                Aqui estão as configurações feitas para slot
            </p>
        </ComponenteSlot1>
        <ComponenteSlot2>
            <template v-slot:header>
                Esse texto tá na header
            </template>
            <template #footer>
                Esse texto tá na footer
            </template>
            <template v-slot:default>
                <p>
                    Esse texto caiu no resto por estar dentro de um template com v-slot:default, mas
                    poderia também cair no resto se não tivesse dentro de nenhum template
                </p>
            </template>
        </ComponenteSlot2>
        <ComponenteSlot3>
            <template v-slot:default="{ variavelInterna }">
                <p>
                    UIA<br>
                    {{ variavelInterna }}
                </p>
            </template>
        </ComponenteSlot3>
    </div>
</template>

<script>
export default {
    name: "TesteSlotMain",
    props: [],
    components: {
    ComponenteSlot1: () => import("./ComponenteSlot1.vue"),
    ComponenteSlot2: () => import("./ComponenteSlot2.vue"),
    ComponenteSlot3: () => import('./ComponenteSlot3.vue')
},
    data() {
        return {}
    },
    methods: {},
    computed: {},
    watch: {}
}
</script>

<style scoped></style>