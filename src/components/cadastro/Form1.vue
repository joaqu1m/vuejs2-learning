<template>
    <div>
        <input type="text" class="fase-form-input" placeholder="Nome">
        <input type="text" class="fase-form-input" placeholder="Email">
        <input type="text" class="fase-form-input" placeholder="Senha">
    </div>
</template>

<script>
    export default {
        name: "Form1",
        props: []
    }
</script>

<style scoped>
    .fase-form-input {
        width: 200px;
        height: 30px;
        border-radius: 10px;
        border: 1px rgb(177, 177, 177) solid;
    }
</style>