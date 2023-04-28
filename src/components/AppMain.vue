<template>
    <main class="py-5">
        <div class="container p-4">
            <!-- slider 1 -->
            <div class="row align-items-center">
                <div class="col-12 col-md-4 text-center text-md-start">
                    <SectionRecap title="our products"
                        content="All our delectable pastries are backed fresh in our Kitchen very morning, and are made with all-natural, all organic ingredients." />
                        <div class="col-6 col-md-8 mx-auto mx-md-0">
                            <ButtonPrimary text="Buy Avada Today!" />
                        </div>
                    
                </div>
                <div class="col-12 col-md-8 mt-5 mt-md-0">
                    <Slider :images="images1" folder="slider-1" :price-in-description="true" :category-in-description="true" />
                </div>

            </div>

            <!-- recap sections -->
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

            <!-- slider 2 -->
            <div class="row align-items-center">
                <div class="col-12 col-md-3 mt-5 text-center">
                <SectionRecap content="Find a freshly baked product perfect for you" smallText="Integer a nibh vitae ex porttitor rutrum et ut velit. Etiam ac felis at leo feugiat placerat. Sed ac nulla id orci tempor convallis sed." />
               <ButtonPrimary text="shop all products" />
            </div>
            <div class="col-12 col-md-9 mt-5 text-center">
                <Slider :images="images2" folder="slider-2" classes-responsive="row-cols-md-4" :priceInBottom="true" />
            </div>
           
            </div>

            <!-- process -->
            <div class="py-5">
                <SectionProcessImageCard 
                    :with-image="true"
                    title="Tell us what you have in mind" 
                    number="01"
                    small-text="manual ingredients selection"
                    content="Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl varius. Ut eu laoreet ex. Aliquam erat volutpat. Nullam quis sagittis nibh. Morbi consectetur ultricies ante ac congue. Donec lorem erat, finibus in velit placerat, rutrum augue."
                    image="process-01.jpg"
                />
                <div class="row row-cols-1 row-cols-md-2 gx-0">
                    <SectionProcessImageCard 
                    :with-image="true"
                    title="We Start Baking" 
                    number="02"
                    small-text="sweet & delicious"
                    content="Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl varius. Ut eu laoreet ex. Aliquam erat volutpat. Nullam quis sagittis nibh. Morbi consectetur ultricies ante ac congue. Donec lorem erat, finibus in velit placerat, rutrum augue."
                    image="process-02.jpg"
                    />
                    <SectionProcessImageCard 
                        small-text="dont just take our word for it"
                        content="&ldquo;Finally found an alternative to the mass produced products. Something that incorporates real organic ingredients, nutrient dense wellness while promoting sustainability and activity.&rdquo;"
                        person="Rachel Cooper, Founder"
                    />
                </div>
                <SectionProcessImageCard 
                    :with-image="true"
                    title="Delivered to your home" 
                    number="03"
                    small-text="baked to order & gift wrapped"
                    content="Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl varius. Ut eu laoreet ex. Aliquam erat volutpat. Nullam quis sagittis nibh. Morbi consectetur ultricies ante ac congue. Donec lorem erat, finibus in velit placerat, rutrum augue."
                    image="process-03.jpg"
                    />
                
            </div>
            
            <!-- bakery locations -->
            <div class="text-center">
                <SectionRecap title="locations" content="Visit Our Bakery" />
            </div>
            
            <div class="py-5 row row-cols-1 row-cols-md-2 px-4">
                <BakeryLocation 
                    image="visit-00.jpg" 
                    city="New York" 
                    telephone="1.800.458.556"
                    openings="9:00 AM - 6:00 PM"
                    bg="#F8F1F2"
                />
                <BakeryLocation 
                    image="visit-01.jpg" 
                    city="London" 
                    telephone="1.800.458.556"
                    openings="9:00 AM - 6:00 PM"
                    bg="#F3EEF4"
                />
            </div>

            <!-- social cards -->
            <div class="py-5">
                <div class="row gx-0 socialCards">
                    <div class="col-12 col-md-3 px-2">
                        <SocialCard image="social-0.jpg" />
                    </div>
                   
                    <div class="col px-2 py-5 py-md-0 px-md-4 text-center">
                        <div class="socialCentralCard">
                            <small class="text-uppercase">made for shargins</small>
                            <h2 class="text-primary fw-bold py-4">Let's stay in touch</h2>
                            <ButtonPrimary text="follow us" />
                        </div>
                    </div>
                    <div class="col-12 col-md-3 px-2 ">
                        <SocialCard image="social-1.jpg" />
                    </div>
                </div>

                <div class="row mt-4 gx-0 socialCards">
                    <div v-for="element in [2,3,4,5]" :key="'social'+element" class="col-12 col-md-3 px-2 py-4 py-md-0">
                        <SocialCard :image="'social-'+element+'.jpg'" />
                    </div>
                  
                </div>
            </div>

        </div>

    </main>
</template>

<script>
import SectionRecap from './Main/SectionRecap.vue';
import Slider from './Main/Slider.vue';
import SpecialMomentCard from './Main/SpecialMomentCard.vue';
import ButtonPrimary from './helpers/ButtonPrimary.vue';
import { imagesSlider1, imagesSlider2 } from '../assets/data/imagesData';
import SectionProcessImageCard from './Main/SectionProcessImageCard.vue';
import BakeryLocation from './Main/BakeryLocation.vue';
import SocialCard from './Main/SocialCard.vue';

export default {
    data() {
        return {
            images1: imagesSlider1,
            images2: imagesSlider2,
        }
    },
    components: { SectionRecap, ButtonPrimary, Slider, SpecialMomentCard, SectionProcessImageCard, BakeryLocation, SocialCard }
}
</script>

<style lang="scss" scoped>
@use '../styles/variables' as *;

.socialCards{
    min-height: 350px;
}
.socialCentralCard{
    display: grid;
    place-content: center;
    background: linear-gradient(#F3EEF4, #F8F1F2);
    height: 100%;
    min-height: 350px;
    
    h2{
        font-family: $source;
    }
}
</style>