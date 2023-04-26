<template>
    <div>
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
    background-color: white;
    color: $fg-primary;
    font-size: small;
    transition: all 0.3s ease;

    &:hover {
        background-color: $fg-primary;
        color: white;
    }
}
</style>