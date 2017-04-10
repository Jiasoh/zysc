<template>
  <div class="first">
    <v_header></v_header>
    <v_menu></v_menu>
    <router-view></router-view>
  </div>
</template>

<script>
  import v_header from './v_header'
  import v_menu from '../menu/v_menu'
  export default {
    name: 'firstpage',
    components: {
      v_header: v_header,
      v_menu: v_menu
    }
  }
</script>

<style lang="less">

</style>
