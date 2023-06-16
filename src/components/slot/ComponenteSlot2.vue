<template>
    <div>
        <h3>ComponenteSlot2</h3>
        <p>Slot de header:</p>
        <slot name="header"></slot>
        <p>Slot de footer:</p>
        <slot name="footer"></slot>
        <p>Slot do resto:</p>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "ComponenteSlot2",
    props: [],
    components: {},
    data() {
        return {}
    },
    methods: {},
    computed: {},
    watch: {}
}
</script>

<style scoped></style>