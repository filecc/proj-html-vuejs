<template>
    <div class="hero-container">
        <div class="container p-3 h-100 row flex-column justify-content-center position-relative">
            <div class="col-12 col-md-6 col-lg-4">
                <p class="text-uppercase mb-3">fresh & tasty bakery every day</p>
                <h1 class="py-3">the prefect fresh bread</h1>
                <p class="fs-6 pb-3">Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl varius. Aliquam erat
                    volutpat. Nullam quis sagittis nibh ac nulla id orci tempor.
                </p>
                <div>
                    <a class="btn btn-lg" href="#">Explore our products</a>
                </div>
            </div>
            
        </div>

    </div>
</template>

<script>
    export default {
        
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

.btn {
    background-color: white;
    color: $fg-primary;
    font-size: small;
    transition: all 0.3s ease;

    &:hover {
        background-color: $fg-primary;
        color: white;
    }
}

.hero-container {
    height: 500px;
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