<template>
  <d2-container>
    <!-- <el-input
      placeholder="请输入内容"
      clearable style="margin-bottom:10px;">
      <el-button slot="append" icon="el-icon-search" @click="search()"></el-button>
    </el-input> -->
    <el-card class="d2-mb" v-show="ok1">
    <el-row :gutter="10">
      <el-col :span="24">
        <div class="col col-l">
          <p style="font-size:30px;">结果列表展示</p>
          <el-row :gutter="23">
            <el-col style="margin-bottom:10px;" :span="3" v-for="list in items" :key="list">
              <el-card shadow="hover" :body-style="{ padding: '0px' }">
                <img  @click="message()" v-bind:src="list.img" class="image" alt="图片">
                <p class="lis">姓名 <b>:</b> {{list.name}}</p>
                <p class="lis">电话 <b>:</b> {{list.phone}}</p>
                <p class="lis">状态 <b>:</b> &nbsp;<el-button size="mini" class="midd1" :type="list.status"></el-button></p>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </el-card>
  <!-- 表格 -->
  <demo-page-header
      slot="header"
      @submit="handleSubmit"
      ref="header"  @zk = "zk"/>
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

  <!-- 全屏信息展示 -->
    <el-dialog
      :title="tooltipContent"
      :fullscreen="true"
      :visible.sync="dialogVisible"
      :append-to-body="true">
      <div class="d2-mb-10">
        <el-card  class="d2-mb">
          <el-row :gutter="10" style="margin-bottom:15px;">
            <el-col :span="24">
              <div class="col col-l">
                <el-button class="button-new-tag" size="small" @click="showInput">添加标签</el-button>
                <el-tag
                :key="tag"
                v-for="tag in dynamicTags"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)">
                {{tag}}
              </el-tag>
              <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm"
              >
              </el-input>
              </div>
            </el-col>
          </el-row>
          <p style="font-size:24px;">个人详细信息</p>
          <el-row :gutter="10">
            <el-col :span="5">
              <div class="col col-d">
                <img src="../../assets/img/1.jpg" class="image1" alt="">
                <span style="display:inline-block;height:130px;width:170px;overflow-x:hidden;">
                  <el-tag
                    :key="tag"
                    v-for="tag in dynamicTags"
                    closable
                    :disable-transitions="false"
                    @close="handleClose(tag)">
                    {{tag}}
                  </el-tag>
                </span>
                <p>姓名 <b>:</b> {{zk_name}}</p>
                <p>电话 <b>:</b> {{zk_phone}}</p>
                <p>状态 <b>:</b> &nbsp;&nbsp;<el-button size="mini" class="midd1" type="danger"></el-button></p>
              </div>
            </el-col>
            <el-col :span="18">
              <div class="col col-d">
                （1）欺诈告警  对该企业新检查发现的欺诈客户向业务人员进行告警，由业务人员标记后从告警中移除。告警主要让业务人员对欺诈行为及时处理。
                      其中告警内容需要多方面的展示欺诈检测不同指标内容。
                      在审核的过程中，欺诈告警就已经在后台逐渐产生，产生一个告警一个。
                      审核的结果报告单独页面展示，能够快速让业务人员发现问题，做出评判。<br>
                （2）欺诈告警  对该企业新检查发现的欺诈客户向业务人员进行告警，由业务人员标记后从告警中移除。告警主要让业务人员对欺诈行为及时处理。
                      其中告警内容需要多方面的展示欺诈检测不同指标内容。
                      在审核的过程中，欺诈告警就已经在后台逐渐产生，产生一个告警一个。
                      审核的结果报告单独页面展示，能够快速让业务人员发现问题，做出评判。<br>
               （3）欺诈告警  对该企业新检查发现的欺诈客户向业务人员进行告警，由业务人员标记后从告警中移除。告警主要让业务人员对欺诈行为及时处理。
                      其中告警内容需要多方面的展示欺诈检测不同指标内容。
                      在审核的过程中，欺诈告警就已经在后台逐渐产生，产生一个告警一个。
                      审核的结果报告单独页面展示，能够快速让业务人员发现问题，做出评判。<br>
               （4）欺诈告警  对该企业新检查发现的欺诈客户向业务人员进行告警，由业务人员标记后从告警中移除。告警主要让业务人员对欺诈行为及时处理。
                      其中告警内容需要多方面的展示欺诈检测不同指标内容。
                      在审核的过程中，欺诈告警就已经在后台逐渐产生，产生一个告警一个。
                      审核的结果报告单独页面展示，能够快速让业务人员发现问题，做出评判。<br>
                （1）欺诈告警  对该企业新检查发现的欺诈客户向业务人员进行告警，由业务人员标记后从告警中移除。告警主要让业务人员对欺诈行为及时处理。
                      其中告警内容需要多方面的展示欺诈检测不同指标内容。
                      在审核的过程中，欺诈告警就已经在后台逐渐产生，产生一个告警一个。
                      审核的结果报告单独页面展示，能够快速让业务人员发现问题，做出评判。<br>
                （2）欺诈告警  对该企业新检查发现的欺诈客户向业务人员进行告警，由业务人员标记后从告警中移除。告警主要让业务人员对欺诈行为及时处理。
                      其中告警内容需要多方面的展示欺诈检测不同指标内容。
                      在审核的过程中，欺诈告警就已经在后台逐渐产生，产生一个告警一个。
                      审核的结果报告单独页面展示，能够快速让业务人员发现问题，做出评判。<br>
               （3）欺诈告警  对该企业新检查发现的欺诈客户向业务人员进行告警，由业务人员标记后从告警中移除。告警主要让业务人员对欺诈行为及时处理。
                      其中告警内容需要多方面的展示欺诈检测不同指标内容。
                      在审核的过程中，欺诈告警就已经在后台逐渐产生，产生一个告警一个。
                      审核的结果报告单独页面展示，能够快速让业务人员发现问题，做出评判。<br>
                （4）欺诈告警  对该企业新检查发现的欺诈客户向业务人员进行告警，由业务人员标记后从告警中移除。告警主要让业务人员对欺诈行为及时处理。
                      其中告警内容需要多方面的展示欺诈检测不同指标内容。
                      在审核的过程中，欺诈告警就已经在后台逐渐产生，产生一个告警一个。
                      审核的结果报告单独页面展示，能够快速让业务人员发现问题，做出评判。<br>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </div>
    </el-dialog>
  </d2-container>
</template>

<script>
import img1 from '../../assets/img/1.jpg'
import img3 from '../../assets/img/3.jpg'
import { BusinessTable1List } from '@/api/demo/business/table/1'
export default {
  name: 'demo-business-table-1',
  components: {
    'DemoPageHeader': () => import('./componnets/PageHeader'),
    'DemoPageMain': () => import('./componnets/PageMain'),
    'DemoPageFooter': () => import('./componnets/PageFooter')
  },
  data () {
    return {
      zk_name: 'zk',
      zk_phone: '15522322212',
      item: [
        { name: 'zk3', status: 'danger' },
        { name: 'zk1', status: 'success' },
        { name: 'zk2', status: 'warning' },
        { name: 'zk2', status: 'warning' },
        { name: 'zk2', status: 'success' },
        { name: 'zk2', status: 'danger' },
        { name: 'zk2', status: 'warning' },
        { name: 'zk2', status: 'success' },
        { name: 'zk2', status: 'warning' },
        { name: 'zk2', status: 'danger' }
      ],
      dynamicTags: [],
      inputVisible: false,
      inputValue: '',
      dialogVisible: false,
      items: [
        { name: 'zk', phone: 15522322212, status: 'danger', img: img1 },
        { name: 'zk1', phone: 15652322212, status: 'success', img: img3 },
        { name: 'zk2', phone: 15578956212, status: 'danger', img: img1 },
        { name: 'zk2', phone: 15578956212, status: 'warning', img: img3 },
        { name: 'zk2', phone: 15578956212, status: 'success', img: img1 },
        { name: 'zk2', phone: 15578956212, status: 'warning', img: img3 },
        { name: 'zk2', phone: 15578956212, status: 'danger', img: img1 },
        { name: 'zk2', phone: 15578956212, status: 'success', img: img3 },
        { name: 'zk2', phone: 15578956212, status: 'warning', img: img1 },
        { name: 'zk2', phone: 15578956212, status: 'danger', img: img3 }
      ],
      ok:false,
      ok1:true,
      table: [],
      loading:false,
      page: {
        current: 1,
        size: 100,
        total: 0
      },
    }
  },
  methods: {
    zk (msg) {
      if(msg == true){
        this.ok =false
        this.ok1 =true
      }else{
        this.ok1 =false
        this.ok =true
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
    },
    message () {
      this.dialogVisible = true
    },
    handleClose (tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },
    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleInputConfirm () {
      let inputValue = this.inputValue
      if (inputValue) {
        this.dynamicTags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    },
    search () {
      console.log(123)
    }
  }
}
</script>
<style lang="scss" scoped>
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .midd{
    display: inline-block;
    vertical-align: middle;
    width:50px;
    height:26px;
    line-height:32px;
    margin-left:5px;
  }
  .midd1{
    display: inline-block;
    vertical-align: middle;
    height:20px;
    line-height:30px;
    width: 40px;
  }
  .lis {
    margin-left:17px;
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .button {
    padding: 0;
    float: right;
  }
  .image {
    width: 80%;
    margin:5px auto;
    display: block;
  }
  .image1 {
    width: 40%;
    vertical-align: top;
    margin-right:20px;
  }
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }
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
