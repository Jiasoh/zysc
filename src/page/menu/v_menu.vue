<template>
  <div class="menu">
    <ul>
      <li class="menu-item"><router-link to="/index/page1">菜单一</router-link></li>
      <li class="menu-item"><router-link to="/index/page2">菜单二</router-link></li>
      <li class="menu-item"><router-link to="/index2">菜单三</router-link></li>
    </ul>
  </div>
</template>

<script>

</script>

<style lang="less">
  .menu{
    ul{
      width: 100%;
      display: block;
      .menu-item{
        display: block;
        width: 33%;
        float: left;
        font-size: 18px;
        text-align: center;
      }
    }
  }
</style>
