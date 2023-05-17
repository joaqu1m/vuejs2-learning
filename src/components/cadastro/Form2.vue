<template>
    <div>
        <p>{{ mensagem }}</p>
        <p>{{ outraProp }}</p>
        segunda parte do formulário
    </div>
</template>

<script>
    export default {
        name: 'Form2',
        props: ['mensagem', 'outraProp']
    }
</script>

<style scoped>

</style>