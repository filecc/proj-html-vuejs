<template>
    <div class="d-flex justify-content-between align-items-center">
        <div class="logo-container">
            <img src="/images/logo.png" alt="logo">
        </div>
        <div class="d-flex align-items-center justify-content-around gap-3">
            <div class="linksContainer">
                <a v-for="link in links" :href="link.href">{{ link.text }}</a>
            </div>
            <a class="account" href="#">ACCOUNT</a>
            <a href="#"> <i class="bi bi-cart-fill text-primary"></i></a>
            <!-- hamburger menu -->
            <div class="hm-container">
                <div @click="GENERAL.menuToggle" class="hamburger">
                    <div :class="GENERAL.menuOpen && 'on'" class="hm-line one"></div>
                    <Transition name="mid">
                        <div v-if="!GENERAL.menuOpen" class="hm-line two"></div>
                    </Transition>
                    <div :class="GENERAL.menuOpen && 'on'" class="hm-line three"></div>
                </div>
            </div>

        </div>

    </div>
    <Transition name="nested" duration="550">
        <div class="mt-3 py-3 mobile-menu outer bg-white rounded" v-if="GENERAL.menuOpen">
           
            <ul class="p-0 m-0 text-center">
                <li class="mb-2 inner" v-for="link in links" :key="link.text"><a class="text-uppercase" :href="link.href">{{ link.text }}</a></li>
            </ul>
            
        </div>
    </Transition>
    
</template>

<script>
import { useGeneral } from '../../assets/data/store'
import { links } from '../../assets/data/linkData';
    export default {
        data(){
            return {
                GENERAL: useGeneral(),
                links
            }
        }
    }


</script>

<style lang="scss" scoped>
@use '../../styles/variables' as *;
/* Variables */
$width: 3rem;
$toggleBG: $fg-primary;

.linksContainer{
    @media screen and (max-width: 768px) {
       display: none; 
    }
    display: flex;
    gap: 1rem;
    text-transform: uppercase;
}
a{
        position: relative;
        

        &:before{
        transition: all .3s ease;
        content: '';
        width: 100%;
        height: 1px;
        background-color: $fg-primary;
        position: absolute;
        opacity: 0;
        top: 0;
        }

        &:hover{

            &:before{
                top: 100%;
                bottom: 0;
                opacity: 1;
            }
        }
    }
.logo-container {
    width: 150px;

    img {
        width: 100%;
        min-width: 150px;
    }

}

a {
    text-decoration: none;
    font-size: small;
}
.mobile-menu{
    transition: height 0.3s ease;
}
ul{
    list-style: none;
}

.nested-enter-active, .nested-leave-active {
	transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner { 
  transition: all 0.3s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active .inner {
	transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  /*
  	Hack around a Chrome 96 bug in handling nested opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
  opacity: 0.001;
}

.mid-enter-active,
.mid-leave-active {
  transition: all 0.3s ease;
}

.mid-enter-from,
.mid-leave-to {
  opacity: 0;
  width: 0;
}


.hm-container {
    @media screen and (min-width: 768px) {
       display: none; 
    }
    position: relative;
    width: var($width);
    height: var($width);
    display: flex;
    justify-content: center;
    align-items: center;
}

.hamburger {
    width: calc($width / 2);
    height: calc($width / 3);
    display: block;
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.hm-line {
    background-color: $toggleBG;
    width: calc(($width) * .5);
    height: calc(($width) * .04);
    position: relative;
    transition: 0.3s ease all;
    border-radius: 5px;

    &.one.on {
        position: absolute;
        transform: rotateZ(45deg);
    }

    &.three.on {
        position: absolute;
        transform: rotateZ(-45deg);

    }
}
</style>