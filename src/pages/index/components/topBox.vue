<template>
  <div>
    <el-card>
      <el-row :gutter="10">
        <el-col :span="10">
          <div style="position:relative;padding:15px;border-radius:3px;background-color:rgb(255, 123, 1);color:#fff;font-size:14px;height:420px;overflow-y:auto;">
            <p style="font-size:20px;margin-top:0;">欺诈TOP 10</p>
            <el-row style="padding-bottom:8px;border-bottom:1px solid rgba(255,255,255,.5);">
              <el-col :span="4">名次</el-col>
              <el-col :span="8">姓名</el-col>
              <el-col :span="8">电话</el-col>
              <el-col :span="4">评分</el-col>
            </el-row>
            <el-row v-for="top in items" :key="top.list" style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,.5);">
              <el-col :span="4">{{top.list}}</el-col>
              <el-col :span="8">{{top.name}}</el-col>
              <el-col :span="8">{{top.phone}}</el-col>
              <el-col :span="4">{{top.star}}</el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="7">
          <div style="position:relative;padding:15px;border-radius:3px;background-color:#04c142;color:#fff;font-size:14px;height:420px;overflow-y:auto;">
            <p style="font-size:20px;margin-top:0;color:#fff;">最新监测的欺诈团伙</p>
            <el-row style="padding-bottom:8px;border-bottom:1px solid rgba(255,255,255,.5);">
              <el-col :span="6">名次</el-col>
              <el-col :span="12">名称</el-col>
              <el-col :span="6">人数</el-col>
            </el-row>
            <el-row v-for="top in items1" :key="top.list" style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,.5);">
              <el-col :span="6">{{top.list}}</el-col>
              <el-col :span="12">{{top.name}}</el-col>
              <el-col :span="6">{{top.num}}</el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="7">
          <div style="position:relative;padding:15px;border-radius:3px;background-color:#737373;color:#fff;font-size:14px;height:420px;overflow-y:auto;">
            <p style="font-size:20px;margin-top:0;color:#fff;">等待人工审核人员列表</p>
            <el-row style="padding-bottom:8px;border-bottom:1px solid rgba(255,255,255,.5);">
              <el-col :span="8">姓名</el-col>
              <el-col :span="4">评分</el-col>
              <el-col :span="12">手机</el-col>
            </el-row>
            <el-row v-for="top in items2" :key="top.list" style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,.5);">
              <el-col :span="8">{{top.name}}</el-col>
              <el-col :span="4">{{top.star}}</el-col>
              <el-col :span="12">{{top.phone}}</el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-card>
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
        { list: 10, name: 'zk', phone: 18855556666, star: 3 }
      ],
      items1: [
        { list: 1, name: 'zk', num: 18866 },
        { list: 2, name: 'zk', num: 1866 },
        { list: 3, name: 'zk', num: 18606 },
        { list: 4, name: 'zk', num: 18606 },
        { list: 5, name: 'zk', num: 18606 },
        { list: 6, name: 'zk', num: 18606 }
      ],
      items2: [
        { star: 10, name: 'zk', phone: 18855556665 },
        { star: 10, name: 'zk', phone: 18855556666 },
        { star: 10, name: 'zk', phone: 18855556667 }
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
