<template>
  <d2-container id="black_list" class="page">
    <el-row :gutter="10" class="bl-navs">
      <el-col :span="4">
        <button class="bl-nav bl-nav-active">
          <d2-icon-svg name="iidCardBlacklist" style="width:14px;height:14px;"/> 身份证黑名单
        </button>
      </el-col>
      <el-col :span="4">
        <button class="bl-nav">
          <d2-icon-svg name="itelephoneBlacklist" style="width:14px;height:14px;"/> 手机号黑名单
        </button>
      </el-col>
      <el-col :span="4">
        <button class="bl-nav">
          <d2-icon-svg name="ivirtualAccountBlacklist" style="width:14px;height:14px;"/> 虚拟帐号黑名单
        </button>
      </el-col>
      <el-col :span="4">
        <button class="bl-nav">
          <d2-icon-svg name="iipAdressBlacklist" style="width:14px;height:14px;"/> IP地址黑名单
        </button>
      </el-col>
    </el-row>
    <div class="bl-line"></div>
    <el-row :gutter="10" class="bl-search">
      <el-col :span="6"><div>姓名: <input class="bl-input"/></div></el-col>
      <el-col :span="8"><div>身份证号: <input class="bl-input" style="width:240px;"/></div></el-col>
      <el-col :span="6"><div>电话号: <input class="bl-input"/></div></el-col>
      <el-col :span="4">
        <div>
          <el-button type="primary" class="bl-btn"><i class="fa fa-search"></i> 查询</el-button> 
          <el-button class="bl-btn"><i class="fa fa-refresh"></i> 重置</el-button>
        </div>
      </el-col>
    </el-row>
    <div class="bl-line"></div>
    <el-row class="bl-list">
      <el-col :span="5">
        一系列列表
      </el-col>
      <el-col :span="19">
        <div id="black_list_chart">echart图</div>
      </el-col>
    </el-row>
  </d2-container>
</template>

<script>
export default {
  name: 'black_list',
  components: {
     
  },
  data () {
    return {
      searchVal: '',
      
    }
  },
  mounted(){
    
  },
  methods:{
    
  },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
#black_list{
  padding-top: 0;
  border-left: 1px solid #ccc;
  background-color: #fff;
  .bl-navs{
    height: 54px;
    line-height: 54px;
    margin-top: -14px;
    .bl-nav{
      padding: 8px 24px;
      border: 1px solid #ccc;
      border-radius: 20px;
      background-color: #fff;
      outline: none;
      cursor: pointer;
      &:hover{
        border: 1px solid #ccc;
        color: #fff;
        background-color: #409efe;
        svg{
          fill: #fff;
        }
      }
    }
    .bl-nav-active{
      border: 1px solid #409efe;
      color: #fff;
      background-color: #409efe;
      svg{
        fill: #fff;
      }
    }
  }
  .bl-search{
    height: 64px;
    line-height: 64px;
    .bl-input{
      width: 200px;
      height: 24px;
      padding-left: 12px;
      border-radius: 20px;
      outline: none;
      border: 1px solid #ccc;
    }
    .bl-btn{
      padding: 10px 16px;
      font-weight: 600;
    }
  }
  .bl-list{

  }
  .bl-line{
    height: 1px;
    margin: 0 -20px;
    background-color: #ccc;
  }
}
</style>
