<template>
    <div class="text-center">
        <a class="btn btn-lg" href="#">{{ text }}</a>
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

    &:hover {
        background-color: #eee;
        color: $fg-primary;
       
    }
}
</style>