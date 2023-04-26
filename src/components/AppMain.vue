<template>
    <main class="py-5">
        <div class="container p-4">
            <div class="row align-items-center">
                <div class="col-12 col-md-4 text-center text-md-start">
                    <SectionRecap title="our products"
                        content="All our delectable pastries are backed fresh in our Kitchen very morning, and are made with all-natural, all organic ingredients." />
                    <ButtonPrimary text="Buy Avada Today!" />
                </div>
                <div class="col-12 col-md-8">
                    <Slider />
                </div>

            </div>

            <div class="mt-5 text-center">
                <SectionRecap title="corporate & weddings" content="Baking Special Moments" />
                <div class="row row-cols-1 row-cols-md-2">
                    <div class="col mb-4 mb-md-0">
                        <SpecialMomentCard
                            :image="{ src: 'corporate-bg.jpg', srcHover: 'corporate-hover-bg.jpg', alt: 'corporate moments' }"
                            title="Corporate Events" subtitle="internationl bakery" buttonText="Explore More" />
                    </div>
                    <div class="col">
                        <SpecialMomentCard
                            :image="{ src: 'wedding-bg.jpg', srcHover: 'wedding-hover-bg.jpg', alt: 'corporate moments' }"
                            title="Weddings & Parties" subtitle="private dining hall" buttonText="Explore More" />
                    </div>
                </div>
            </div>
            <div class="mt-5 text-center">
                <SectionRecap content="Find a freshly baked product perfect for you" smallText="Integer a nibh vitae ex porttitor rutrum et ut velit. Etiam ac felis at leo feugiat placerat. Sed ac nulla id orci tempor convallis sed." />
               <ButtonPrimary text="shop all products" />
            </div>

        </div>

    </main>
</template>

<script>
import SectionRecap from './Main/SectionRecap.vue';
import Slider from './Main/Slider.vue';
import SpecialMomentCard from './Main/SpecialMomentCard.vue';
import ButtonPrimary from './helpers/ButtonPrimary.vue';

export default {
    components: { SectionRecap, ButtonPrimary, Slider, SpecialMomentCard }
}
</script>

<style lang="scss" scoped></style>