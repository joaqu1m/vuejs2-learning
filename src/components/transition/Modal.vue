<template>
    <transition appear name="blurscreen" @after-enter="bluescreenEnter" @before-leave="blurscreenLeave">
        <div @click="$emit('update:modalAberto', false)" v-if="modalAberto" class="blurredscreen">
            <transition appear name="blurscreen">
                <div class="modal">
                    <h3>ComponenteDinamico</h3>
                    <slot></slot>
                    <button @click="$emit('update:modalAberto', false)">fechar modal</button>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
export default {
    name: "Modal",
    props: ["modalAberto"],
    components: {},
    data() {
        return {}
    },
    methods: {
        bluescreenEnter(e) {
            e.style.backgroundColor = "rgba(0, 0, 0, 0.3)"
            e.style.backdropFilter = "blur(5px)"
        },
        blurscreenLeave(e) {
            e.style.backgroundColor = "rgba(0, 0, 0, 0)"
            e.style.backdropFilter = "blur(0px)"
        }
    },
    computed: {},
    watch: {}
}
</script>

<style scoped>
.blurredscreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.blurscreen-leave-to {
    backdrop-filter: blur(0px);
    background-color: rgba(0, 0, 0, 0);
}
.blurscreen-enter-active,
.blurscreen-leave-active {
    transition: backdrop-filter 1s;
    transition: background-color 1s;
}
.blurscreen-enter-to {
    backdrop-filter: blur(5px);
    background-color: rgba(0, 0, 0, 0.3);
}

.modall-enter-active,
.modall-leave-active {
    transition: all 1s;
}
.modall-enter-to {
    opacity: 1;
    background-color: red;
}
.modall-leave-to {
    opacity: 0;
    background-color: red;
}

.modal {
    width: 500px;
    height: 300px;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
}
</style>