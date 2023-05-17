<template>
    <div>
        <p>{{ mensagem }}</p>
        <p>{{ outraProp }}</p>
        <p>{{ trueOuFalse }}</p>
        segunda parte do formulário
    </div>
</template>

<script>
    export default {
        name: 'Form2',
        props: ['mensagem', 'outraProp', 'trueOuFalse']
    }
</script>

<style scoped>

</style>