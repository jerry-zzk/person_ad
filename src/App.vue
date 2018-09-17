<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import '~@/assets/style/public-class.scss';
.el-tabs__header.is-top{
  margin: 0;
}
</style>
