<template>
    <div class="slider pt-5">
        <div class="img-holder row row-cols-2 flex-nowrap">
            <template v-for="element in imagesVisible" :key="images[element].alt">
                <Transition :name="next ? 'next' : 'prev'">
                    <div>
                        <div class="col position-relative">
                            <img :src="IMG_URL + images[element].id + IMG_EXT" :alt="images[element].alt">
                            <div class="description m-2">{{ images[element].alt }}</div>
                        </div>
                        <div v-if="images[element].price">
                            <h6>{{ images[element].alt }}</h6>
                            <small>{{ images[element].price }}</small>
                        </div>
                    </div>
                </Transition>
               
            </template>

            <button @click="prevImages()" class="prev ms-2"><i class="bi bi-chevron-left"></i></button>
            <button @click="nextImages()" class="next me-2"><i class="bi bi-chevron-right"></i></button>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        images: Array,
        folder: String
    },
    data() {
        return {
            IMG_URL: '/images/' + this.folder + '/image-',
            IMG_EXT: '.jpg',
            next: null,
            imagesVisible: [0, 1]
        }
    },
    methods: {
        nextImages() {
          
            const imagesCount = this.images.length;
            const nextFirstImgID = this.imagesVisible[0];
            const nextSecondImgID = this.imagesVisible[1];

            if ((nextFirstImgID < imagesCount - 2) && (nextSecondImgID <= imagesCount - 1)){
                this.imagesVisible[0] += 2;
                if (this.imagesVisible[1] + 2 <= imagesCount-1){
                    this.imagesVisible[1] += 2;
                } else {
                    this.imagesVisible[1] = 1;
                    this.imagesVisible[0] = 0;
                }
               
            } else {
                this.imagesVisible[0] = 0;
                this.imagesVisible[1] = 1;
               
            }

         
        },
        prevImages() {
           console.log(this.imagesVisible)
            const imagesCount = this.images.length;
            const nextFirstImgID = this.imagesVisible[0];

            if (nextFirstImgID >= 2){
                this.imagesVisible[0] -= 2;
                this.imagesVisible[1] -= 2;
            } else {
                this.imagesVisible[0] = imagesCount - 2;
                this.imagesVisible[1] = imagesCount - 1;
            }

           

            console.log(this.imagesVisible)            

           

        }
    }
}
</script>

<style lang="scss" scoped>
@use '../../styles/variables' as *;

.slider {
    overflow: hidden;


    & button {
        position: absolute;
        border: none;
        background-color: $fg-primary;
        color: white;
        opacity: .5;

        &.prev,
        &.next {
            top: 50%;
            transform: translate3d(0, -50%, 0);
            width: 50px;
            height: 80px;
            display: grid;
            place-content: center;

            &:hover {
                opacity: .7;
            }
        }

        &.prev {
            left: 0;
        }

        &.next {
            right: 0;
        }
    }
}

.img-holder {
    position: relative;

    img {
        width: 100%;
    }
}

h6{
    text-align: center;
    text-transform: capitalize;
    color: $fg-primary;
    font-weight: bold;
    font-family: $source;
    padding: .5rem 1rem 0 1rem;
}

small{
    text-align: center;
    display: block;
    color: $fg-primary;
    font-size: x-small;
}

.description:hover {
    opacity: 1;
}

.description {
    transition: all .3s;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: grid;
    place-items: center;
    text-align: center;
    text-transform: capitalize;
    font-family: $source;
    background-color: $fg-primary-transparent;
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding: 2rem;
}

.next-enter-active,
.next-leave-active,
.prev-enter-active,
.prev-leave-active {
    transition: all 0.3s ease;
}

.next-enter-from {
    transform: translate3d(-100%, 0, 0);
    opacity: 1;
}

.next-leave-to {
    transform: translate3d(100%, 0, 0);
    opacity: 0;
}


.prev-enter-from {
    transform: translate3d(100%, 0, 0);
    opacity: 1;
}

.prev-leave-to {
    transform: translate3d(-100%, 0, 0);
    opacity: 0;
}
</style>