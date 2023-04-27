<template>
    <div class="col mb-3 mb-md-0 d-flex flex-column justify-content-between align-content-center text-center">
        <div class="img-container">
            <img class="img-fluid" :src="'/images/'+image" :alt="city + ' bakery'">
        </div>
       
        <div class="p-4" :style="'background-color:'+bg" >
            <h2 class="text-primary fw-bold py-3">{{ city }}</h2>
            <div class="d-flex flex-column flex-lg-row justify-content-between align-content-center gap-3">
                <div>
                <small class="d-block py-2">CALL US</small>
                <span>{{ telephone }}</span>
            </div>
            <div> 
                <small class="d-block py-2">OPEN ALL WEEK</small>
                <span>{{ openings }}</span>
            </div>
            <div class="d-flex align-items-center justify-content-center">
                <ButtonSecondary text="view map"/>
            </div>
            </div>
            
           
        </div>
       
    </div>
</template>

<script>
import ButtonSecondary from '../helpers/ButtonSecondary.vue';

    export default {
    props: {
        image: String,
        city: String,
        telephone: String,
        openings: String,
        bg: String
    },
    components: { ButtonSecondary }
}
</script>

<style lang="scss" scoped>
@use '../../styles/variables' as *;
    h2{
        font-family: $source;
    }
    img{
        transition: transform .5s ease;
    }
    .img-container{
        overflow: hidden;

        &:hover{
            img{
                transform: scale(1.2);
            }
        }
    }

    small{
        font-size: 10px;
        @media screen and (max-width: 769px) {
            font-size: 14px;
        }
    }
    span{
        font-size: 12px;
        @media screen and (max-width: 769px) {
            font-size: 18px;
        }
    }
    
</style>