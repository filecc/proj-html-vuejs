<template>
    <section class="container">
        <h2 v-if="title" class="text-fg-muted">{{title}}</h2>
        <p v-if="content" class="py-4">{{ content }}</p>
        <small v-if="smallText">{{ smallText }}</small>
    </section>
</template>

<script>

    export default {
        props: {
            title: String,
            content: String,
            smallText: String
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
        line-height: 30px;
    }
</style>