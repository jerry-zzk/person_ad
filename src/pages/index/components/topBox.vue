<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="10">
        <div style="position:relative;padding:15px;border-radius:3px;background-color:#FF9800;color:#fff;font-size:14px;text-align: center;">
          <p style="font-size:20px;margin-top:0;text-align:left;">欺诈TOP 10</p>
          <el-row style="padding-bottom:8px;border-bottom:1px solid rgba(255,255,255,.5);">
            <el-col :span="4">名次</el-col>
            <el-col :span="8">姓名</el-col>
            <el-col :span="8">电话</el-col>
            <el-col :span="4">评分</el-col>
          </el-row>
          <div style="height:340px;overflow-y: auto;text-align: center;">
            <el-row v-for="top in items" :key="top.list" style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,.5);">
              <el-col :span="4">{{top.list}}</el-col>
              <el-col :span="8">{{top.name}}</el-col>
              <el-col :span="8">{{top.phone}}</el-col>
              <el-col :span="4">{{top.star}}</el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col :span="7">
        <div style="position:relative;padding:15px;border-radius:3px;background-color:#04c142;color:#fff;font-size:14px;text-align: center;">
          <p style="font-size:20px;margin-top:0;color:#fff;text-align:left;">最新监测的欺诈团伙</p>
          
          <el-row style="padding-bottom:8px;border-bottom:1px solid rgba(255,255,255,.5);">
            <el-col :span="6">名次</el-col>
            <el-col :span="12">名称</el-col>
            <el-col :span="6">人数</el-col>
          </el-row>
          <div style="height:340px;overflow-y: auto;">
            <el-row v-for="top in items1" :key="top.list" style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,.5);">
              <el-col :span="6">{{top.list}}</el-col>
              <el-col :span="12">{{top.name}}</el-col>
              <el-col :span="6">{{top.num}}</el-col>
            </el-row>
          </div>
          <!--
          <el-row>
            <el-col :xl="12" :lg="12" :md="12" :lg="3" :xl="1"></el-col>
          </el-row>
          <div v-for="top in items1" :key="top.list" style="width:100px;">
            <p>名次:{{top.list}}</p>
            <p>名称:{{top.name}}</p>
            <p>人数:{{top.num}}</p>
          </div>
        -->
        </div>
      </el-col>
      <el-col :span="7">
        <div style="position:relative;padding:15px;border-radius:3px;background-color:#737373;color:#fff;font-size:14px;text-align: center;">
          <p style="font-size:20px;margin-top:0;color:#fff;text-align:left;">等待人工审核人员列表</p>
          <el-row style="padding-bottom:8px;border-bottom:1px solid rgba(255,255,255,.5);">
            <el-col :span="8">姓名</el-col>
            <el-col :span="12">手机</el-col>
            <el-col :span="4">评分</el-col>
          </el-row>
          <div style="height:340px;overflow-y: auto;">
            <el-row v-for="top in items2" :key="top.list" style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,.5);">
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
  name: 'card4',
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
        { star: 10, name: 'zk', phone: 18855556668 }
        /*,
        { star: 10, name: 'zk', phone: 18855556669 },
        { star: 10, name: 'zk', phone: 18855556610 },
        { star: 10, name: 'zk', phone: 18855554611 },
        { star: 10, name: 'zk', phone: 18855556612 },
        { star: 10, name: 'zk', phone: 18855556613 }
        */
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
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
</style>
