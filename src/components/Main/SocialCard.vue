<template>
    <div class="col h-100">
        <img aria-hiddden="true" :src="'/images/'+image" alt="social">
    </div>
</template>

<script>
    export default {
        props:{
            image: String
        }
    }
</script>

<style lang="scss" scoped>
.col{
    overflow: hidden;

    &:hover{
        img{
            transform: scale(1.1);
        }
            
        }
}
    img{
        transition: transform .6s ease;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>