<template>
  <div id="topBox"  >
    <el-row :gutter="10">
      <el-col :span="10">
        <div class="ipanel">
          <p class="ipanel-title" style="color:#FF9800;">欺诈TOP 10</p>
          <el-row class="ipanel-thead">
            <el-col :span="4">名次</el-col>
            <el-col :span="8">姓名</el-col>
            <el-col :span="8">电话</el-col>
            <el-col :span="4">评分</el-col>
          </el-row>
          <div class="ipanel-tbody">
            <el-row v-for="top in items" :key="top.list" class="ipanel-tr" >
              <div @click="openPeopleInfoPopup">
                <el-col :span="4">{{top.list}}</el-col>
                <el-col :span="8">{{top.name}}</el-col>
                <el-col :span="8">{{top.phone}}</el-col>
                <el-col :span="4">{{top.star}}</el-col>
              </div>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="ipanel" style="background-color:#04c142;">
          <p class="ipanel-title" style="color:#04c142;">最新监测的欺诈团伙</p>
          <el-row class="ipanel-thead">
            <el-col :span="6">名次</el-col>
            <el-col :span="12">名称</el-col>
            <el-col :span="6">人数</el-col>
          </el-row>
          <div class="ipanel-tbody">
            <el-row v-for="top in items1" :key="top.list" class="ipanel-tr">
              <el-col :span="6">{{top.list}}</el-col>
              <el-col :span="12">{{top.name}}</el-col>
              <el-col :span="6">{{top.num}}</el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="ipanel" style="background-color:#737373;">
          <p class="ipanel-title" style="color:#737373;">等待人工审核人员列表</p>
          <el-row class="ipanel-thead">
            <el-col :span="8">姓名</el-col>
            <el-col :span="12">手机</el-col>
            <el-col :span="4">评分</el-col>
          </el-row>
          <div class="ipanel-tbody">
            <el-row v-for="top in items2" :key="top.list" class="ipanel-tr">
              <el-col :span="8">{{top.name}}</el-col>
              <el-col :span="12">{{top.phone}}</el-col>
              <el-col :span="4">{{top.star}}</el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'topBox',
  data () {
    return {
      items: [
        { list: 1, name: 'zk', phone: 18855556666, star: 3 },
        { list: 2, name: 'zk', phone: 18855556666, star: 3 },
        { list: 3, name: 'zk', phone: 18855556666, star: 3 },
        { list: 4, name: 'zk', phone: 18855556666, star: 3 },
        { list: 5, name: 'zk', phone: 18855556666, star: 3 },
        { list: 6, name: 'zk', phone: 18855556666, star: 3 },
        { list: 7, name: 'zk', phone: 18855556666, star: 3 },
        { list: 8, name: 'zk', phone: 18855556666, star: 3 },
        { list: 9, name: 'zk', phone: 18855556666, star: 3 },
        { list: 10, name: 'abcd efgh ijkl mnop', phone: 18855556666, star: 3 }
      ],
      items1: [
        { list: 1, name: 'abcd efgh ijkl mnop', num: 18866 },
        { list: 2, name: 'zk', num: 1866 },
        { list: 3, name: 'zk', num: 18606 },
        { list: 4, name: 'zk', num: 18606 },
        { list: 5, name: 'zk', num: 18606 },
        { list: 6, name: 'zk', num: 18606 }
      ],
      items2: [
        { star: 10, name: 'abcd efgh ijkl', phone: 18855556611 },
        { star: 10, name: 'zk', phone: 18855556662 },
        { star: 10, name: 'zk', phone: 18855556663 },
        { star: 10, name: 'zk', phone: 18855556664 },
        { star: 10, name: 'zk', phone: 18855556665 },
        { star: 10, name: 'zk', phone: 18855556666 },
        { star: 10, name: 'zk', phone: 18855556667 },
        { star: 10, name: 'zk', phone: 18855556669 },
        { star: 10, name: 'zk', phone: 18855556610 },
        { star: 10, name: 'zk', phone: 18855554611 }
      ]
    }
  },
  methods:{
    openPeopleInfoPopup(){
        console.log("fds")
        this.$store.commit('setData',true)
    }
  }
}
</script>
<style lang="scss" scoped>
  #topBox .ipanel{
    position: relative;
    height: 440px;
    padding: 15px;
    border-radius: 3px;
    font-size: 14px;
    text-align: center;
    color: #fff;
    background-color: #FF9800;
    overflow-y: hidden;
  }
  #topBox .ipanel .ipanel-title{
    margin-top: 0;
    margin-bottom: 8px;
    padding: 8px;
    border-radius: 4px;
    font-size: 20px;
    background-color: #fff;
  }
  #topBox .ipanel .ipanel-thead{
    padding: 8px 0;
    border-bottom: 1px solid rgba(255,255,255,.5);
  }
  #topBox .ipanel .ipanel-tbody{
    text-align: center;
  }
  #topBox .ipanel .ipanel-tbody .ipanel-tr{
    padding: 8px 0;
    border-bottom: 1px solid rgba(255,255,255,.5);
  }
  #topBox .ipanel .ipanel-tbody .ipanel-tr:hover{
    background-color: #fff;
    color: #000;
  }
</style>
