<template>
    <div class="cta">
        <div class="textDiv text-white">
            <small class="text-uppercase">
                try our seasonal products
            </small>
            <h2>Order for pick-up or delivery to your home</h2>
            <ButtonSecondary text="Shop Now" />
        </div>
    </div>
</template>

<script>
import ButtonSecondary from './helpers/ButtonSecondary.vue';

    export default {
    components: { ButtonSecondary }
}
</script>

<style lang="scss" scoped>
@use '../styles/variables' as *;
    .cta{
        background: url('/images/cta-bg.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        min-height: 400px;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        padding: 3rem;
        @media screen and (max-width: 768px) {
          background-position: center;
            
        }


    }

    small{
        opacity: .6;
    }

    .textDiv{
        max-width: 40%;

        @media screen and (max-width: 768px) {
            max-width: 100%;
            text-align: center;
            
        }

        h2{
            padding: 2rem 0 3.5rem 0;
            font-family: $source;
            font-weight: 700;
            font-size: 40px;

            @media screen and (max-width: 768px) {
            font-size: 30px;
            
            }
        }
    }

</style>