<template>
    <div class="slider pt-5">
        <div class="img-holder row row-cols-2 flex-nowrap">
            <template v-for="(image, index) in images" :key="image.alt">
                <Transition :name="next ? 'next' : 'prev'">
                    <div v-if="image.visible" class="col p-2 position-relative">
                        <img :src="IMG_URL + image.id + IMG_EXT" :alt="image.alt">
                        <div class="description m-2">{{ image.alt }}</div>
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
        data(){
            return {
                IMG_URL: '/images/slider-1/image-',
                IMG_EXT: '.jpg',
                images: [
                    {
                        id: '0',
                        alt: 'choco chip cookie',
                        visible: true,
                    },
                    {
                        id: '1',
                        alt: 'strawberry jam cookies',
                        visible: true,
                    },
                    {
                        id: '2',
                        alt: 'cookies with ice-cream',
                        visible: false,
                    },
                    {
                        id: '3',
                        alt: 'homemade bread',
                        visible: false,
                    },
                ],
                next: null,
            }
        },
        methods: {
            nextImages(){
                this.next = true;
                const imagesCount = this.images.length;
                for(let i=0;i<imagesCount;i++){
                    this.images[i].visible = !this.images[i].visible
                }
            },
            prevImages(){
                this.next = false;
                const imagesCount = this.images.length;
                for(let i=0;i<imagesCount;i++){
                    this.images[i].visible = !this.images[i].visible
                }
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
}</style>