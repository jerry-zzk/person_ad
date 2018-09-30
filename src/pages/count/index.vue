<template>
  <d2-container class="page">
    <div style="margin-top:50px;text-align: center;">
      <img src="/image/building.png" alt="待建设"/>
      <p style="color: #999;">待建设</p>
    </div>
  </d2-container>
</template>

<script>
export default {
  // name 值和本页的 $route.name 一致才可以缓存页面
  name: 'count',
  components: {
    
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
  .page{
    height: calc(100vh-100px);
    background-color: #fff;
  }
</style>
