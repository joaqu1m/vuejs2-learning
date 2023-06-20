<template>
    <div>
        <input @keydown.enter="adicionar" placeholder="Adicionar ao carrinho" />
        <button @click="ordenar">Ordenar A-Z</button>
        <button @click="ordenarZA">Ordenar Z-A</button>
        <transition-group tag="ul">
            <li v-for="(item, i) in items" :key="item">
                {{ item }}
                <button @click="remover(i)">X</button>
            </li>
        </transition-group>
    </div>
</template>

<script>
export default {
    name: "TesteTransitionGroup",
    data() {
        return {
            items: [
                "Maçã",
                "Banana",
                "Uva"
            ]
        }
    },
    methods: {
        remover(i) {
            this.items.splice(i, 1)
        },
        adicionar({ target }) {
            this.items.push(target.value)
            target.value = ""
        },
        ordenar() {
            this.items.sort((a, b) => a.localeCompare(b))
        },
        ordenarZA() {
            this.items.sort((a, b) => a.localeCompare(b)).reverse()
        }
    }
}
</script>

<style>
.v-enter-active,
.v-leave-active {
    transition: all 0.3s;
}

.v-enter,
.v-leave-to {
    opacity: 0;
    transform: translate3d(-20px, 0, 0);
}

.v-move {
    transition: transform 0.3s;
}

</style>