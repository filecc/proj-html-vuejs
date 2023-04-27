<template>
    <div class="slider position-relative">
        <div ref="divContainer" :class="classesResponsive" class="img-holder row row-cols-2 flex-nowrap">
            <template v-for="image in images" :key="images.alt">
                <div>
                    <div class="col position-relative">
                        <img :src="IMG_URL + image.id + IMG_EXT" :alt="image.alt">
                        <div class="description">
                            <div>
                                <h4 class="text-white fw-bold">{{ image.alt }}</h4>
                                <small v-if="categoryInDescription" class="text-capitalize text-white">{{
                                    image.category.join(', ') }}</small>
                                <p v-if="priceInDescription">{{ image.price }}</p>
                            </div>



                        </div>
                    </div>
                    <div v-if="priceInBottom">
                        <h6>{{ image.alt }}</h6>
                        <small>{{ image.price }}</small>
                    </div>
                </div>
            </template>
        </div>
        <button @click="prevImages()" class="prev"><i class="bi bi-chevron-left"></i></button>
        <button @click="nextImages()" class="next"><i class="bi bi-chevron-right"></i></button>
    </div>
</template>

<script>

export default {
    props: {
        images: Array,
        folder: String,
        classesResponsive: String,
        increment: Number,
        priceInDescription: Boolean,
        categoryInDescription: Boolean,
        priceInBottom: Boolean
    },
    data() {
        return {
            IMG_URL: '/images/' + this.folder + '/image-',
            IMG_EXT: '.jpg',
            scrollableArea: null,
            containerWidth: null,
        }
    },
    mounted() {
        this.scrollableArea = this.$refs["divContainer"];
        this.containerWidth = this.scrollableArea.offsetWidth;
    },
    methods: {
        nextImages() {
            this.scrollableArea.scrollBy(this.containerWidth, 0);
            if (
                this.scrollableArea.scrollLeft + this.containerWidth >=
                this.scrollableArea.scrollWidth
            ) {
                this.scrollableArea.scrollLeft = 0;
            }
        },
        prevImages() {
            this.scrollableArea.scrollBy(-this.containerWidth, 0);
            if (this.scrollableArea.scrollLeft === 0) {
                this.scrollableArea.scrollLeft = this.containerWidth * this.images.length;
            }
        },
    },

}
</script>

<style lang="scss" scoped>
@use '../../styles/variables' as *;

.slider {

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
    scroll-behavior: smooth;
    overflow: auto;

    &::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;

    img {
        width: 100%;
    }
}

h6 {
    text-align: center;
    text-transform: capitalize;
    color: $fg-primary;
    font-weight: bold;
    font-family: $source;
    padding: .5rem 1rem 0 1rem;
}

small {
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