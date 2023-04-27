<template>
   <footer class="py-5">
    <div class="d-flex justify-content-between align-items-center flex-wrap p-4">
        <div class="col-12 col-md-6 d-flex flex-column">
            <div class="col-4 col-md-4 mx-auto mx-md-0">
                <img src="/images/logo.png" alt="logo">
            </div>
           <div class="col-12 col-md-10">
            <div class="linksContainer">
                <a v-for="link in links" :href="link.href">{{ link.text }}</a>
            </div>
           </div>
        </div>
        <div class="col-12 col-md-6 py-3 py-md-0 d-flex flex-column align-content-center justify-content-center">
            <p class="text-center text-primary fw-bold">Subscribe to our Newsletter</p>
            <div class="w-100 d-flex flex-column justify-content-center align-items-center px-5">
                <input class="input-group-text bg-white w-100 mb-3" placeholder="Enter email address*" type="text">
                <ButtonPrimary text="Subscribe" />
            </div>
        </div>
    </div>
   </footer>
</template>

<script>
import ButtonPrimary from './helpers/ButtonPrimary.vue';
import { links } from '../assets/data/linkData';
    export default {
    components: { ButtonPrimary },
    data(){
        return {
        links,
    }
    }
}
</script>

<style lang="scss" scoped>
@use '../styles/variables' as *;
img{
    width: 100%;
}
.linksContainer{
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    text-transform: uppercase;
    flex-wrap: wrap;
    @media screen and (min-width: 768px) {
        justify-content: start;
    }
    a{
        position: relative;
        

        &:before{
        transition: all .3s ease;
        content: '';
        width: 100%;
        height: 1px;
        background-color: $fg-primary;
        position: absolute;
        opacity: 0;
        top: 0;
        }

        &:hover{

            &:before{
                top: 100%;
                bottom: 0;
                opacity: 1;
            }
        }
    }
}
a {
    text-decoration: none;
    font-size: small;
}
</style>