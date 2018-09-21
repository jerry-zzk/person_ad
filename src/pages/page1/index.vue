<template>
  <d2-container class="page">
    <!-- 表格 -->
    <demo-page-header
      slot="header"
      @submit="handleSubmit"
      ref="header"  @zk = "zk"/>
    <!-- <el-switch
      v-model="value2"
      style="position:fixed;top:122px;right:590px;height:32px;"
      @change="add"
      active-color="#13ce46"
      inactive-color="#ff4949"
      active-icon-class="el-icon-tickets"
      inactive-icon-class="el-icon-menu"></el-switch> -->
    <demo-page-main
      :table-data="table"
      :loading="loading" v-show="ok"/>
    <!-- <demo-toggle /> -->
    <demo-page-footer
      slot="footer"
      :current="page.current"
      :size="page.size"
      :total="page.total"
      @change="handlePaginationChange"/>

      <p v-show="ok1">
          <el-row :class="[zk_ul,{cli:zk_cli}]" v-for="(lb,index) in peo" :key="lb">
            <el-col :span="3">
              <img src="../../assets/img/1.jpg" style="width:60%;vertical-align:middle;" alt="">
            </el-col>
            <el-col :span="6">
              <p><b style="color:#ea7312;">{{lb.name}}</b></p>
              <p><span style="color:#999"> 身份证号码 </span> <b>:</b> {{lb.idcard[index].idcard}}</p>
              <p><span style="color:#999"> 民族 </span> <b>:</b> {{lb.mz[index].mz}}</p>
              <!-- <p><span style="color:#999"> 民族 </span> <b>:</b> {{lb.mz[index]}}</p> -->
            </el-col>
            <el-col :span="6">
              <p style="height:10px;"> </p>
              <p><span style="color:#999"> 性别 </span> <b>:</b> {{lb.sex[index].sex}}</p>
              <p><span style="color:#999"> 籍贯 </span> <b>:</b> {{lb.country[index].country}}</p>
            </el-col>
            <el-col :span="6">
              <p style="height:10px;"> </p>
              <p><span style="color:#999"> 电话号码 </span> <b>:</b> {{lb.phone[index].phone}}</p>
              <p><span style="color:#999"> 居住地址 </span> <b>:</b> {{lb.address[index].address}}</p>
            </el-col>
            <el-col :span="3">
              <p @click="message(index)">
                <i style="width:26px;height:15px;cursor:pointer;display:inline-block;border:1px solid #ccc;
                padding:5px 0 5px 5px;background:#efefef;" class="fa fa-id-card-o"></i>
                <!-- <d2-icon-svg  name="count" ></d2-icon-svg> -->
              </p>
              <p> </p>
              <p> </p>
            </el-col>
          </el-row>
        </p>

    <!-- 全屏 -->
    <el-dialog
      :title="tooltipContent"
      :fullscreen="true"
      :visible.sync="dialogVisible"
      :append-to-body="true">
      <!-- <vue-good-wizard :steps="steps"
        :onNext="nextClicked" :onBack="backClicked">
        <div slot="page1">
          <h4>Step 1</h4>
        </div>
        <div slot="page2">
          <h4>Step 2</h4>
        </div>
        <div slot="page3">
          <h4>Step 3</h4>
        </div>
      </vue-good-wizard> -->
      <good-wizard></good-wizard>
    </el-dialog>
  </d2-container>
</template>

<script>
import { BusinessTable1List } from '@/api/demo/business/table/1'
import axios from '@/plugin/axios'
export default {
  // name 值和本页的 $route.name 一致才可以缓存页面
  name: 'demo-business-table-1',
  components: {
    'DemoPageHeader': () => import('./componnets/PageHeader'),
    'DemoPageMain': () => import('./componnets/PageMain'),
    'DemoPageFooter': () => import('./componnets/PageFooter'),
    'GoodWizard': () => import('../wizard/wizard.vue'),
  },
  data () {
    return {
      zk_cli:false,
      zk_ul:'zk_ul',
      peo:[],
      value1: true,
      value2: true,
      ok: false,
      ok1: true,
      table: [],
      loading: false,
      page: {
        current: 1,
        size: 100,
        total: 0
      },
      dialogVisible: false,
      dynamicTags: [],
      inputVisible: false,
      inputValue: ''
    }
  },
  mounted:function(){
    this.ajax()
  },
  methods: {
    ajax(){
      axios({
          url: '/send',
          method: 'post',
        })
        .then(res => {
          console.log(res);
          this.peo = res.list
        })
        .catch((error) => {
          // 错误情况
          console.log(error);
        })
    },
    message () {
      this.dialogVisible = true
    },
    zk (msg) {
      if (msg === true) {
        this.ok = false
        this.ok1 = true
      } else {
        this.ok1 = false
        this.ok = true
      }
    },
    handlePaginationChange (val) {
      this.$notify({
        title: '分页变化',
        message: `当前第${val.current}页 共${val.total}条 每页${val.size}条`
      })
      this.page = val
      // nextTick 只是为了优化示例中 notify 的显示
      this.$nextTick(() => {
        this.$refs.header.handleFormSubmit()
      })
    },
    handleSubmit (form) {
      this.loading = true
      this.$notify({
        title: '开始请求模拟表格数据'
      })
      BusinessTable1List({
        ...form,
        page: this.page
      })
        .then(res => {
          this.loading = false
          this.$notify({
            title: '模拟表格数据请求完毕'
          })
          this.table = res.list
          this.page = res.page
        })
        .catch(err => {
          this.loading = false
          this.$notify({
            title: '模拟表格数据请求异常'
          })
          console.log('err', err)
        })
    }
  }
}
// export default {
//   name: 'page1',
//   data () {
//     return {
//     }
//   }
// }
</script>
<style lang="scss" scoped>
.zk_ul{
    border:1px solid #ccc;
    padding:5px 0 5px 15px;
    // margin-bottom: 15px;
  }
  .zk_cli{
    border:2px solid #35ab62;
    border-left:5px solid #35ab62;
  }
  .zk_ul:hover{
    border:1px solid #35ab62;
    border-left:3px solid #35ab62;
    background:rgba(132, 182, 144, 0.12);
  }

.ri{
  margin-right:5%;
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
.midd1{
    display: inline-block;
    vertical-align: middle;
    height:20px;
    line-height:6px;
    width:40px;
  }
</style>
