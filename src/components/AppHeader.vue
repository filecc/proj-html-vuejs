<template>
    <header>
        <div class="p-3">
            <HeaderNavbar />
        </div>
        <div class="hero-container">
            <HeaderHero />
        </div>
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
.hero-container{
    min-height: 500px;
    background: url('/images/hero-bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>