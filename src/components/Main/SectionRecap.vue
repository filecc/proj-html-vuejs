<template>
    <section class="container text-center">
        <h2 class="text-fg-muted">{{title}}</h2>
        <p class="py-4">{{ content }}</p>
    </section>
</template>

<script>

    export default {
        props: {
            title: String,
            content: String
        }
}
</script>

<style lang="scss" scoped>
@use '../../styles/variables' as *;
    h2{
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 400;
    }
    p{
        font-family: $source;
        color: $fg-primary;
        font-weight: bold;
        font-size: 28px;
        text-align: center;
        line-height: 30px;
    }
</style>