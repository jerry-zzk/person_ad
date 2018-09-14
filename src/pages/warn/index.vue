<template>
  <d2-container class="page zk_page"  >
    <!-- <template >数据模板</template> -->
    <el-header slot="header">
      <p>信贷种类 <b>:</b>&nbsp; <el-button size="mini" type="warning">全部</el-button><el-button class="bu" size="mini" type="primary">信用贷
        </el-button><el-button class="bu" size="mini" type="primary">抵押贷</el-button><el-button class="bu" size="mini" type="primary">XX贷</el-button></p>
      <p>申请时间 <b>:</b>&nbsp; 
        <el-input readonly size="mini" value = '1' v-model="param" class="in"></el-input>
        <el-input readonly size="mini" value = "2" v-model="param2" class="in"></el-input>
        <el-input readonly size="mini" value = "3" v-model="param3" class="in"></el-input>
         <el-date-picker
          size="mini"
          class="in"
          type="datetime"
          placeholder="选择日期时间">
        </el-date-picker>
        <el-date-picker
          size="mini"
          class="in"
          type="datetime"
          placeholder="选择日期时间">
        </el-date-picker>
      </p>
      <p>告警规则 <b>:</b>&nbsp; 
        <el-button size="mini" type="danger" disabled="">严重(5)</el-button><el-button type="warning" size="mini" disabled="">4</el-button>
        <el-button type="primary" size="mini" disabled="">3</el-button><el-button type="primary" style="margin-right:30px;" size="mini" disabled="">2</el-button>评分范围 <b>:</b> &nbsp;
        <el-input class="inp" size="mini"></el-input>-- &nbsp;&nbsp; <el-input class="inp" size="mini"></el-input>
      </p>
    </el-header>
    <div :min-percent='20' :default-percent='30' split="vertical">
      <el-col slot="paneL" :span="4" style="background:#fff;border-right:2px solid #ddd;">
        <d2-customer-list :item="items1" style="height:668px;">
            <!-- 数据编写 -->
        </d2-customer-list>
      </el-col>
      <el-col slot="paneR" :span="20" style="background:#fff;">
              <p>
                <!-- 表格 -->
                <demo-page-header
                  slot="header"
                  @submit="handleSubmit"
                  ref="header"  @zk = "zk" style="padding-left:20px;margin-bottom:10px;border-bottom:1px solid #ddd;"/>
                <demo-page-main style="padding-left:20px;"
                  :table-data="table"
                  :loading="loading" v-show="ok"/>
              </p>
              <el-col :span="24" v-show="!ok">
                <div class="col col-l">
                  <el-row :gutter="23">
                    <el-col style="margin-bottom:10px;" :span="4" v-for="list in items" :key="list">
                      <el-card shadow="hover" :body-style="{ padding: '0px' }">
                        <!-- <img  @click="message()" v-bind:src="list.img" class="image" alt="图片"> -->
                        <span class="cir" style="cursor:pointer;" @click="message">{{list.star}}</span> 
                        <p class="lis1" :title="list.name">姓名 <b>:</b> <span style="font-size:15px;"> {{list.name}}</span></p>
                        <p class="lis" :title="list.phone">手机号 <b>:</b><span style="font-size:15px;"> {{list.phone}}</span></p>
                        <p class="lis" :title="list.peoNum">身份证号 <b>:</b><span style="font-size:15px;"> {{list.peoNum}}</span></p>
                        <p class="lis" :title="list.type">种类 <b>:</b><span style="font-size:15px;"> {{list.type}}</span></p>
                        <p class="lis" :title="list.time">时间 <b>:</b><span style="font-size:15px;"> {{list.time}}</span></p>
                        <p class="lis">状态 <b>:</b> &nbsp;<el-button size="mini" class="midd1" :type="list.status"></el-button></p>
                      </el-card>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
          </el-col>
      <!-- 全屏详细信息 -->
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
                  :key="index"
                  v-for="tag,index in dynamicTags"
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
    </div>
  </d2-container>
</template>
<script>
  import { BusinessTable1List } from '@/api/demo/business/table/1'
  // import img1 from '../../assets/img/1.jpg'
  // import img3 from '../../assets/img/3.jpg'
  export default {
    name: 'demo-business-table-1',
    components: {
      'DemoPageHeader': () => import('./componnets/PageHeader'),
      'DemoPageMain': () => import('./componnets/PageMain'),
      'DemoPageFooter': () => import('./componnets/PageFooter'),
      'GoodWizard': () => import('../wizard/wizard.vue'),
    },
    data () {
      return {
        zk_name: 'zk',
        zk_phone: '15522322212',
        item: [
          { name: 'zk3', status: 'danger' ,num:101},
          { name: 'zk1', status: 'success' ,num:101},
          { name: 'zk2', status: 'warning',num:101 },
          { name: 'zk2', status: 'warning' ,num:101},
          { name: 'zk2', status: 'success' ,num:101},
          { name: 'zk2', status: 'danger' ,num:101},
          { name: 'zk2', status: 'warning' ,num:101},
          { name: 'zk2', status: 'success' ,num:101},
          { name: 'zk2', status: 'warning' ,num:1019},
          { name: 'zk2', status: 'danger' ,num:103}
        ],
        dialogVisible:false,
        dynamicTags: [],
        inputVisible: false,
        inputValue: '',
        param:'2018-2-10',
        param2:'2018-2-16',
        param3:'2018-1-10',
        items1: [
          { name: 'zk', num: 15522322, danger_num: '123', status: 'danger' },
          { name: 'zk', num: 15522212, danger_num: '123', status: 'success' },
          { name: 'zk', num: 15522212, danger_num: '123', status: 'warning' },
          { name: 'zk', num: 15522212, danger_num: '123', status: 'danger' }
        ],
        items: [
        { name: '马尔扎哈哈哈哈', phone: 15522322212, status: 'danger', star: 2.6, type:'信用贷',peoNum:'141234196598050561',time:'2000-1-1'},
        { name: 'zk1', phone: 15652322212, status: 'success', star: 3.5, type:'信用贷',peoNum:'141234196598050561',time:'2000-1-1' },
        { name: 'zk2', phone: 15578956212, status: 'danger', star: 6.9,type:'信用贷',peoNum:'141234196598050561',time:'2000-1-1' },
        { name: 'zk2', phone: 15578956212, status: 'warning', star: 7.8,type:'信用贷',peoNum:'141234196598050561',time:'2000-1-1'},
        { name: 'zk2', phone: 15578956212, status: 'success', star: 8.0,type:'信用贷',peoNum:'141234196598050561',time:'2000-1-1' },
        { name: 'zk2', phone: 15578956212, status: 'warning', star: 5.1,type:'信用贷',peoNum:'141234196598050561',time:'2000-1-1' },
        { name: 'zk2', phone: 15578956212, status: 'danger', star: 4.6,type:'信用贷',peoNum:'141234196598050561',time:'2000-1-1' },
        { name: 'zk2', phone: 15578956212, status: 'success', star: 6.5,type:'信用贷',peoNum:'141234196598050561',time:'2000-1-1' },
        { name: 'zk2', phone: 15578956212, status: 'warning', star: 8.8,type:'信用贷',peoNum:'141234196598050561',time:'2000-1-1' },
        { name: 'zk2', phone: 15578956212, status: 'danger', star: 9.4,type:'信用贷',peoNum:'141234196598050561',time:'2000-1-1' }
      ],
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
    methods: {
      message () {
        // alert(123213)
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
</script>
<style lang="scss" scope>
  .zk_page .d2-container-full__body{
    padding-top: 0px !important;
  }
  .cir{
    height:50px;
    width:50px;
    display:inline-block;
    border-radius:50px;
    text-align: center;
    line-height:52px;
    color:#111;
    border:1px solid #e4393c;
    margin-top:5px;
    margin-left:17px;
    margin-right:10px;
    // background:#e4393c;
    // opacity: 0.3;
  }
  .inp{
    width:40px;
    display:inline-block;
    margin-right:20px;
  }
  .in{
    width:200px;
    display:inline-block;
    margin-right:20px;
  }
  .el-header, .el-footer {
    background-color: #fff;
    color: #333;
    height:120px !important;
    font-size:16px;
    /* text-align: center; */
    /* line-height: 60px; */
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
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
    overflow: hidden;
    white-space: nowrap; //使其不换行
    text-overflow:ellipsis;
  }
  .lis1 {
    display: inline-block;
    width:122px;
    overflow: hidden;
    white-space: nowrap; //使其不换行
    text-overflow:ellipsis;
    vertical-align: middle;
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

