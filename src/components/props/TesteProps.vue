<template>
    <div class="componenteTeste_container">
        Props recebidas:<br>
        {{ mensagem }}
        {{ outraProp }}
    </div>
</template>

<script>
export default {
    name: "TesteProps",
    props: ["mensagem", "outraProp"]
}
</script>

<style scoped>
.componenteTeste_container {
    background-color: aqua;
}
</style>