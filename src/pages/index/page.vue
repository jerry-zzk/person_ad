<template>
  <d2-container class="page">
      <el-card shadow="never" class="d2-mb">
      <el-row :gutter="10">
        <el-col :span="6">
          <div class="col col-l">
            <p>客户/分组 <b>:</b> <span> {{user}} / {{group}} </span> </p>
            <p></p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="col col-r">
            <p>敲诈客户 <b>:</b> <span> {{user_qz}} </span> </p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="col col-l">
            <p>欺诈团伙 <b>:</b> <span> {{user_group}} </span> </p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="col col-r">
            <p>待审核 <b>:</b> <span> {{num}} 客户</span> </p>
          </div>
        </el-col>
      </el-row>
    </el-card>
  <!-- 折线图区域 -->
    <div class="inner">
      <ve-line :data="chartData"></ve-line>
      <!-- <ve-line :data="chartData" :settings="chartSettings"></ve-line> -->
    </div>
  <!-- 反欺诈列表 -->
    <el-card shadow="never" class="d2-mb">
    <el-row :gutter="10">
      <el-col :span="8">
        <div class="col col-d">
          <p style="font-size:24px;">欺诈TOP 10</p>
          <div style="margin-bottom:10px;" v-for="top in items" :key="top" class="col col-r">
            <span style='margin-right:40%'>名次 <b>:</b> <span> {{top.list}} </span></span>
            <span>姓名 <b>:</b> <span> {{top.name}} </span></span><br><br>
            <span style='margin-right:21.8%'>电话 <b>:</b> <span> {{top.phone}} </span></span>
            <span>评分 <b>:</b> <span> {{top.star}} </span></span>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
       <div class="col col-d">
          <p style="font-size:24px;">最新监测的欺诈团伙</p>
          <div style="margin-bottom:10px;" v-for="top in items1" :key="top"  class="col col-r">
            <span style='margin-right:40%'>名次 <b>:</b> <span> {{top.list}} </span></span>
            <span>姓名 <b>:</b> <span> {{top.name}} </span></span><br><br>
            <span style='margin-right:40%'>人数 <b>:</b> <span> {{top.num}} </span></span>
          </div>
        </div>
      </el-col><el-col :span="8">
        <div class="col col-d">
          <p style="font-size:24px;">等待人工审核人员列表</p>
          <div style="margin-bottom:10px;" v-for="top in items2" :key="top" class="col col-r">
            <span style='margin-right:40%'>姓名 <b>:</b> <span> {{top.name}} </span></span>
            <span>评分 <b>:</b> <span> {{top.star}} </span></span><br><br>
            <span style='margin-right:40%'>手机号 <b>:</b> <span> {{top.phone}} </span></span>
          </div>
        </div>
      </el-col>
    </el-row>
  </el-card>
  </d2-container>
</template>

<script>
import D2HelpBtn from './components/d2-help-btn'
export default {
  data () {
    // this.chartSettings = {
    //   xAxisType: 'time'
    // }
    this.$ajax(this.GLOBAL.urls.list)
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
    return {
      user: 800,
      group: 8,
      user_qz: 30,
      user_group: 2,
      num: 300,
      chartData: {
        columns: ['日期', '客户', '欺诈客户'],
        rows: [
          { '日期': '2018-01-01', '客户': 1393, '欺诈客户': 1093 },
          { '日期': '2018-01-02', '客户': 3530, '欺诈客户': 3230 },
          { '日期': '2018-01-03', '客户': 2923, '欺诈客户': 2623 },
          { '日期': '2018-01-04', '客户': 1723, '欺诈客户': 1423 },
          { '日期': '2018-01-05', '客户': 3792, '欺诈客户': 3492 },
          { '日期': '2018-01-06', '客户': 4593, '欺诈客户': 4293 },
          { '日期': '2018-01-07', '客户': 545, '欺诈客户': 42 },
          { '日期': '2018-01-08', '客户': 1222, '欺诈客户': 493 },
          { '日期': '2018-01-09', '客户': 3333, '欺诈客户': 293 }
        ]
      },
      items: [
        { key: 1, list: 10, name: 'zk', phone: 18855556666, star: 3 },
        { key: 2, list: 10, name: 'zk', phone: 18855556666, star: 3 },
        { key: 3, list: 10, name: 'zk', phone: 18855556666, star: 3 }
      ],
      items1: [
        { list: 10, name: 'zk', num: 18866 },
        { list: 10, name: 'zk', num: 1866 },
        { list: 10, name: 'zk', num: 18606 }
      ],
      items2: [
        { star: 10, name: 'zk', phone: 18855556666 },
        { star: 10, name: 'zk', phone: 18855556666 },
        { star: 10, name: 'zk', phone: 18855556666 }
      ]
    }
  },
  components: {
    D2HelpBtn
  }
}
</script>

<style lang="scss" scoped>
.inner {
  position: position;
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
