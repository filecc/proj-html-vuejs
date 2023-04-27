<template>
    <div class="h-100">
        <div class="container p-4 h-100 row flex-column justify-content-center position-relative mx-auto">
            <div class="col-12 col-md-6 col-lg-4">
                <p class="text-uppercase mb-3">fresh & tasty bakery every day</p>
                <h1 class="py-3">the prefect fresh bread</h1>
                <p class="fs-6 pb-3">Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl varius. Aliquam erat
                    volutpat. Nullam quis sagittis nibh ac nulla id orci tempor.
                </p>
                <div>
                    <ButtonSecondary text="Explore our products" />
                </div>
            </div>
            
        </div>

    </div>
</template>

<script>
import ButtonSecondary from '../helpers/ButtonSecondary.vue';

    export default {
    components: { ButtonSecondary }
}
</script>

<style lang="scss" scoped>
@use '../../styles/variables' as *;

p {
    color: $fg-dark;
    font-size: small;
}

h1 {
    color: $fg-primary;
    font-family: $source;
    font-weight: bold;
    text-transform: capitalize;
    font-size: 38px;
}



</style>