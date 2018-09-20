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

 .zk_input .el-input__inner {
      box-shadow: none;
      border: 2px solid #ea7312;
  }

  .zk_input .el-input__inner:hover {
      border-color: #ea7312;
  }

  .zk_input .el-input__inner:focus {
      border-color: #ea7312;
      box-shadow: none;
      transition-duration: .5s;
  }

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
    background: #f9f9f9;
    color: rgb(220,67,39);
    border-bottom-color: #f9f9f9!important;
  }
}

</style>
