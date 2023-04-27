<template>
    <div class="col position-relative text-white">
        <div v-if="withImage" :style="'background: url(' + IMGURL + image +'), linear-gradient(#F3EEF4, #F8F1F2);'" :class="image && 'gradient'" class="withImage d-flex flex-column justify-content-between bg-image">
            <div class="d-flex flex-wrap justify-content-between align-content-center p-4 textDiv">
                <h2 class="m-0 p-0 col-8">{{ title }}</h2>
                <span class="col-4 text-end">{{ number }}</span>
            </div>
            <div class="d-flex p-4 flex-grow-1 align-items-end">
                <div class="col-12 col-md-6 ms-auto textDiv">
                    <small class="text-uppercase">{{ smallText }}</small>
                    <p>{{ content }}</p>
                </div>
            </div>
        </div>
        <div v-else>
            <div style="background: linear-gradient(#F3EEF4, #F8F1F2);" class="noImage bg-image">
                <small class="text-uppercase">
                    {{ smallText }}
                </small>
                <p>{{ content }}</p>
                <span>{{ person }}</span>
            </div>
        </div>
       
    </div>
</template>

<script>
    export default {
        data(){
            return {
                IMGURL: '/images/'
            }
        },
        props:{
            title: String,
            number: String,
            smallText: String,
            content: String,
            image: String,
            withImage: Boolean,
            person: String
        }
    }
</script>

<style lang="scss" scoped>
@use '../../styles/variables' as *;
.noImage{
    small{
        color: rgb(67, 65, 65);
    }
    p{
        color: $fg-primary;
        font-weight: bold;
        font-family: $source;
        font-size: 35px;
        line-height: 42px;
        padding: 1rem 0;
        @media screen and (max-width: 768px) {
            font-size: 28px;
            line-height: 32px;
        }
    }
    span {
        color: rgb(67, 65, 65);
    
    }

    display: grid;
    place-content: center;
    padding: 2rem;
}
.col {
    min-height: 450px;
    padding: 1rem;
    z-index: 50;
}
.withImage {
    h2 {
        font-family: $source;
        font-weight: bold;
        font-size: 45px;
    }

    span {
        font-size: 70px;
        font-weight: lighter;

    }

    small {
        color: rgba(255, 255, 255, 0.618);
        font-size: x-small;
    }

    .textDiv {
        position: relative;
        z-index: 1000;
    }
}

.bg-image {
        background-size: cover;
        background-repeat: no-repeat;
        min-height: 500px;
    }

    .gradient:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: linear-gradient(#56328b1b, #56328bb1);
        margin: 1rem;
        z-index: 250;
    }



</style>