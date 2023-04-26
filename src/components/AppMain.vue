<template>
   <main class="py-5">
    <div class="container p-4">
        <div>
            <SectionRecap title="our products" content="All our delectable pastries are backed fresh in our Kitchen very morning, and are made with all-natural, all organic ingredients."/>
            <ButtonPrimary text="Buy Avada Today!" />
        </div>
        <Slider />
    </div>
   
   </main>
</template>

<script>
import SectionRecap from './Main/SectionRecap.vue';
import Slider from './Main/Slider.vue';
import ButtonPrimary from './helpers/ButtonPrimary.vue';

    export default {
    components: { SectionRecap, ButtonPrimary, Slider }
}
</script>

<style lang="scss" scoped>

</style>