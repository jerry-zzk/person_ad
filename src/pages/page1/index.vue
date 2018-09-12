<template>
  <d2-container class="page">
    <!-- 表格 -->
    <demo-page-header
      slot="header"
      @submit="handleSubmit"
      ref="header"/>
    <!-- <el-button style="position:fixed;top:122px;right:620px;height:28px;line-height:2px;" type="warning" @click="add"> 切换 </el-button> -->

    <el-switch
      v-model="value2"
      style="position:fixed;top:122px;right:590px;height:32px;"
      @change="add"
      active-color="#13ce46"
      inactive-color="#ff4949"
      active-icon-class="el-icon-tickets"
      inactive-icon-class="el-icon-menu"> 
    </el-switch>
    
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

    <el-card v-show="!ok">
      <el-row :gutter="10">
        <el-col :span="24">
        <div class="col col-l">
          <div shadow="hover" style="margin-bottom:10px;" v-for="top in item" :key="top" class="col col-r">
            <span class="ri">组名 <b>:</b> <span> {{top.name}} </span></span>
            <span class="ri">人数 <b>:</b> <span> &nbsp; {{top.num}} </span></span>
            <span class="ri">添加 <b>:</b>  &nbsp; <el-button size="mini" @click="message" class="midd1" :type="top.status"> + </el-button> </span>
          </div>
        </div>
      </el-col>
      </el-row>
    </el-card>

    <!-- 全屏 -->
    <el-dialog
      :title="tooltipContent"
      :fullscreen="true"
      :visible.sync="dialogVisible"
      :append-to-body="true">
      <vue-good-wizard 
        :steps="steps"
        :onNext="nextClicked" 
        :onBack="backClicked">
        <div slot="选择方式">
          <h4>Step 1</h4>
        </div>
        <div slot="表格填写">
          <h4>Step 2</h4>
        </div>
        <div slot="提交信息">
          <h4>Step 3</h4>
        </div>
      </vue-good-wizard>
    </el-dialog>

  </d2-container>
</template>

<script>
import { BusinessTable1List } from '@/api/demo/business/table/1'
export default {
  // name 值和本页的 $route.name 一致才可以缓存页面
  name: 'demo-business-table-1',
  components: {
    'DemoPageHeader': () => import('./componnets/PageHeader'),
    'DemoPageMain': () => import('./componnets/PageMain'),
    'DemoPageFooter': () => import('./componnets/PageFooter'),
    // 'DemoToggle': () => import('./componnets/Toggle'),
  },
  data () {
    return {
      value1: true,
      value2: true,
      item: [
        { name: 'zk3', num: 3065, status:"danger"},
        { name: 'zk3', num: 3065, status:"warning" },
        { name: 'zk3', num: 3065, status:"success" },
        { name: 'zk3', num: 3065, status:"danger" },
        { name: 'zk3', num: 3065, status:"success" },
        { name: 'zk3', num: 3065, status:"danger" },
        { name: 'zk3', num: 3065, status:"info" },
        { name: 'zk3', num: 3065, status:"danger" },
      ],
      ok:false,
      table: [],
      loading:false,
      page: {
        current: 1,
        size: 100,
        total: 0
      },
       steps: [
        {
          label: '第一步',
          slot: 'page1',
        },
        {
          label: '第二步',
          slot: 'page2',
        },
        {
          label: '第三步',
          slot: 'page3',
          options: {
            nextDisabled: true,
          },
        }
      ],
      dialogVisible: false,
      dynamicTags: [],
      inputVisible: false,
      inputValue: '',
    }
  },
  methods: {
    nextClicked(currentPage) {
      console.log('next clicked', currentPage)
      return true; //return false if you want to prevent moving to next page
    },
    backClicked(currentPage) {
      console.log('back clicked', currentPage);
      return true; //return false if you want to prevent moving to previous page
    },

    message () {
      this.dialogVisible = true
    },
    add () {
      // alert(this.ok);
      this.ok=!this.ok
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
<style lang="scss" scope>
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
