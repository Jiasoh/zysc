<template>
  <div class="header">
    <img src="../../assets/img/banner.png" alt="" class="banner">
    <input type="text" class="search">
    <img src="../../assets/img/classify_normal.png" alt="" class="classify">
  </div>
</template>

<script>
 export default {

 }
</script>

<style lang="less">
  .header{
    position: relative;
    width: 100%;
    .banner{
      width: 100%;
    }
    .search{
      display: inline-block;
      position: absolute;
      left: .94rem;
      top:.3rem;
      width: 6.25rem;
      height: .6rem;
      border: 0;
      border-radius: .1rem;
      opacity: .6;
    }
    .classify{
      position: absolute;
      left: .3rem;
      top:.4rem;
      width: .44rem;
      height: .44rem;
    }
  }
</style>
