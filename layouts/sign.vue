<template>
<div class="">
  <menuHome />
  <nuxt></nuxt>
  <footerHome/>
</div>
</template>

<script>
   import menuHome from '@/components/home/menuHome.vue'
   import footerHome from '@/components/home/footerHome.vue'
   export default {
    components: {
      menuHome,
      footerHome
    },
    data() {
      return {
      }
    }
  }
  </script>


<style lang="scss">
.content-login {
  // background: $color-light;
  min-height: calc(100vh - 60px - 250px);
  padding: 50px 0;
}

.container-login {
  background: $color-white;
  padding: 20px;
  border: 1px solid $color-light-grey;
  width: 600px;
  max-width: 100%;
  margin: 0 auto;
  overflow: hidden;
}
</style>
