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
.people-info-popup{
  .el-tabs__item{
    background: rgb(217,226,241);
    border-right: 1px solid rgba(0,0,0,0.2);
  }
  .el-tabs__item.is-active{
    background: white;
  }
}
.people-info-popup1 {
  .el-tabs__item{
    background: rgb(217,226,241);
    color: rgb(41,45,82);
    border-right: 1px solid rgba(0,0,0,0.2);
    &:hover{
      color: rgb(220,67,39);
    }
  }
  .el-tabs__item.is-active{
    background: white;
    color: rgb(220,67,39);
  }
}

</style>
