<template>
    <div>
        <p>{{ mensagem }}</p>
        <p>{{ outraProp }}</p>
        <p>{{ trueOuFalse }}</p>
        teste de formulario 1
    </div>
</template>

<script>
    export default {
        name: 'Form1',
        props: ['mensagem', 'outraProp', 'trueOuFalse']
    }
</script>

<style scoped>

</style>