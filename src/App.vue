<template>
  <div>
    <AppHeader />
    <AppMain />
    <AppCallToAction />
    <AppFooter />
    
  </div>
</template>

<script>
import AppCallToAction from './components/AppCallToAction.vue';
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  components: { AppMain, AppFooter, AppHeader, AppCallToAction }
}
</script>

<style lang="scss" scoped></style>