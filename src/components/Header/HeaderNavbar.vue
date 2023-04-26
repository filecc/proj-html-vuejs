<template>
    <div class="bg-white d-flex justify-content-between align-items-center">
        <div class="logo-container">
            <img src="/images/logo.png" alt="logo">
        </div>
        <div class="d-flex align-items-center justify-content-around gap-3">
            <a class="" href="#">ACCOUNT</a>
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
</template>

<script>
import { useGeneral } from '../../assets/data/store'

    export default {
        data(){
            return {
                GENERAL: useGeneral()
            }
        }
    }


</script>

<style lang="scss" scoped>
@use '../../styles/variables' as *;
/* Variables */
$width: 3rem;
$toggleBG: $fg-primary;

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

.mid-enter-active,
.mid-leave-active {
  transition: all 0.3s ease;
}

.mid-enter-from,
.mid-leave-to {
transform: translate3d(100%, 0, 0);
  opacity: 0;
  width: 0;
}


.hm-container {
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