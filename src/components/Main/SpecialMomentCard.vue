<template>
    <div class="position-relative img-container">
        <img class="img-fluid" :src="'/images/'+image.src" :alt="image.alt">
        <img class="img-fluid bg-hover" :src="'/images/'+image.srcHover" :alt="image.alt">
        <div class="infoBox text-white">
            <p class="m-0 p-0">{{ subtitle }}</p>
            <h3 class="py-3">  {{ title }}</h3>
            <ButtonPrimary :text="buttonText" />
        </div>
    </div>
</template>

<script>
import ButtonPrimary from '../helpers/ButtonPrimary.vue';
import ButtonSecondary from '../helpers/ButtonSecondary.vue';

    export default {
    props: {
        title: String,
        subtitle: String,
        buttonText: String,
        image: Object
    },
    components: { ButtonSecondary, ButtonPrimary }
}
</script>

<style lang="scss" scoped>
@use '../../styles/variables' as *;
.img-container {
    min-height: 550px;
    height: 550px;
    max-width: 400px;
    overflow: hidden;
    margin: 0 auto;

    img {
        height: 100%;
        object-fit: cover;
        object-position: left;
    }

    &:hover {
        img{
            object-position: center;
        }
        .bg-hover, .infoBox {
            opacity: 1;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
        .infoBox{
            display: grid;
            place-content: center;
            text-transform: capitalize;
            p{
                font-size: small;
            }
            h3{
                font-family: $source;
                font-weight: bold;
            }
        }
    }
}

.bg-hover{
    opacity: 0;
    transition: all .3s ease;
}
.infoBox{
    opacity: 0;
    transition: all .3s ease;
}
</style>