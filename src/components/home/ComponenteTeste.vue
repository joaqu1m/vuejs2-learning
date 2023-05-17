<template>
    <div class="componenteTeste_container">
        Props recebidas:
        {{ mensagem }}
        {{ outraProp }}
    </div>
</template>

<script>
    export default {
        name: 'ComponenteTeste',
        props: ['mensagem', 'outraProp']
    }
</script>

<style scoped>
    .componenteTeste_container {
        background-color: aqua;
    }
</style>