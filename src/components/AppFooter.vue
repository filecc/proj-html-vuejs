<template>
   <footer>
    <div class="d-flex justify-content-between align-items-center flex-wrap p-4">
        <div class="col-12 col-md-6 d-flex flex-column">
            <div class="col-4 col-md-4 mx-auto mx-md-0">
                <img src="/images/logo.png" alt="logo">
            </div>
           <div class="col-12 col-md-8">
            links
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

    export default {
    components: { ButtonPrimary }
}
</script>

<style lang="scss" scoped>
img{
    width: 100%;
}
</style>