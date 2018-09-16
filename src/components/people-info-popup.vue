<template>
  <div class="people-info-popup" v-if="dialogVisible">
    <span class="el-icon-circle-close-outline" @click="handleClose"></span>
    <div class="content-wrap" :class="{show:isShow}">
      <div class="content">

      </div>
    </div>
  </div>

</template>

<script>
export default {
    name:"people-info-popup",
    data() {
      return{
          isShow:false
      }
    },
    computed: {
        dialogVisible:{
            get(){
                return this.$store.state.peopleInfoPopup.showPeopleInfoPopup
            },
            set(){

            }
        }
    },
    watch:{
      dialogVisible(val){
          let vm=this
          setTimeout(function () {
              vm.isShow=val
          },100)
          this.dialogVisible=val
      }
    },
    methods: {
      handleClose(){
          this.$store.commit('setData',false)
      }
  }
}
</script>
<style lang="scss" scoped>
  .people-info-popup{
    position: fixed;
    top: 0;
    left:0;
    background: rgba(0,0,0,0.6);
    width: 100%;
    height: 100%;
    padding: 25px;
    z-index: 9999;
    box-sizing: border-box;
    .el-icon-circle-close-outline{
      position: absolute;
      right: 30px;
      top:30px;
      z-index: 1;
      font-size: 22px;
      opacity: 0.5;
      transition: all 0.28s ease;
      cursor: pointer;
      &:hover{
        transform: scale(1.2);
        opacity: 1;
      }
    }
    .content-wrap.show{
      transform: scale(1);
    }
    .content-wrap{
      width: 100%;
      height: 100%;
      background: white;
      position: relative;
      z-index: 0;
      border-radius: 5px;
      transform: scale(0);
      transition: all 0.5s ease;
      padding: 26px;
      box-sizing: border-box;
      .content{
        width: 100%;
        height: 100%;
        border: 1px solid rgba(0,0,0,0.15);
        border-radius: 5px;
      }
    }

  }

</style>
