<template>
    <header class="hero-container">
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
.hero-container {
    min-height: 500px;
    background: url('/images/hero-bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    z-index: 0;

    &:before{
        content: '';
        width: 100%;
        height: 100%;
        background-color: rgba(232, 227, 227, 0.178);
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    @media screen and (min-width: 768px) {
        height: 70vh;

        &:before{
          background-color: rgba(232, 227, 227, 0);
        }

    }
}
</style>