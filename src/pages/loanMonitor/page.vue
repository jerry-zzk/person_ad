<template>
  <d2-container class="page">
    <h1>从前有座山，山里有个小和尚</h1>

  </d2-container>
</template>

<script>

export default {
  data () {
    return {
      chartData: {
        msg: '第二个图标的首页'
      }
    }
  },
  components: {
     
  },
  mounted(){

  },
  methods:{
    
  }
}
</script>

<style lang="scss" scoped>
.inner {
  position: relative;
  top: 20px;
  right:  20px;
  bottom: 20px;
  left: 20px;
}
@import '~@/assets/style/public.scss';
.col {
  padding: 20px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  font-size: 16px;
}
.col-l {
  background-color: lighten($color-info, 40%);
  border-color: lighten($color-info, 35%);
}
.col-r {
  background-color: lighten($color-success, 47%);
  border-color: lighten($color-success, 40%);
}
.page {
  .page__btn-group {
    color: $color-text-placehoder;
    font-size: 12px;
    span {
      color: $color-text-sub;
      &:hover {
        color: $color-text-main;
      }
    }
  }
}
</style>
