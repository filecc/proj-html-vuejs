<template>
    <div class="w-100">
        <a class="btn btn-lg w-100" href="#">{{ text }}</a>
    </div>
</template>

<script>
    export default {
        props:{
            text: String
        }
    }
</script>

<style lang="scss" scoped>
@use '../../styles/variables' as *;
.btn {
    background-color: $fg-primary;
        color: white;
    font-size: small;
    transition: all 0.3s ease;
    text-transform: capitalize;

    &:hover {
        background-color: #eee;
        color: $fg-primary;
       
    }
}
</style>