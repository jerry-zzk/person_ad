<template>
  <d2-container class="page">
    待建设......
  </d2-container>
</template>

<script>
export default {
  // name 值和本页的 $route.name 一致才可以缓存页面
  name: 'demo-business-table-1',
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
