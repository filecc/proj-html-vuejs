<template>
    <header>
        <div class="p-3">
            <HeaderNavbar />
        </div>
        <HeaderHero />
    </header>
</template>

<script>
import HeaderNavbar from './Header/HeaderNavbar.vue';
import HeaderHero from './Header/HeaderHero.vue';

    export default {
    components: { HeaderNavbar, HeaderHero }
}
</script>

<style lang="scss" scoped>

</style>