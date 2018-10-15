<template>
  <d2-container class="page zk_page zk_head">
    <el-header style="padding-left:5px;" slot="header">
          <p style="margin:5px 0 5px 0;padding:0px;">信贷种类 <b>:</b>&nbsp; <el-checkbox style="margin-right:58px;" :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
          <el-checkbox-group style="display:inline-block;" v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox  style="margin-right:14px;font-family:'微软雅黑';" v-for="(city,index) in cities" :label="city" :key="index">{{city}}</el-checkbox>
          </el-checkbox-group>
        </p>
      <p style="margin:5px 0 5px 0;padding:0px;">申请时间 <b>:</b>&nbsp;
        <el-radio-group v-model="radio2">
          <el-radio :label="1">最近一天</el-radio>
          <el-radio :label="2">最近一周</el-radio>
          <el-radio :label="3">最近一月</el-radio>
          <el-radio style="margin-right:10px;" :label="4">自定</el-radio>
        </el-radio-group>
        <el-date-picker
          v-model="value1"
          size="mini"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
         <!-- <el-date-picker
          size="mini"
          class="in"
          type="date"
          v-model="value1"
          placeholder="选择日期">
        </el-date-picker>
        <el-date-picker
          size="mini"
          class="in"
          v-model="value2"
          type="date"
          placeholder="选择日期">
        </el-date-picker> -->
      </p>
      <p style="margin:5px 0 5px 0;padding:0px;">告警规则 <b>:</b>&nbsp;
        <span v-for="(bg,index) in bgc" :key="bg.num" :class="[{el_bg: index == inx},bg_zk(index)]" @click="chan_zk(index)">{{bg.num}}</span>
        评分范围 <b>:</b> &nbsp;
        <el-input class="inp" size="mini"></el-input>-- &nbsp;&nbsp; <el-input class="inp" size="mini"></el-input>
      </p>
    </el-header>
    <el-col :span="5" class="zk_vh" style="">
        <d2-customer-list :item="items1" style="">
            <!-- 数据编写 -->
        </d2-customer-list>
    </el-col>
    <el-col :span="19" style="background:#fff; height:calc(100vh - 200px);">
          <p>
            <!-- 表格 -->
            <demo-page-header
            slot="header"
            @submit="handleSubmit"
            ref="header"  @zk = "zk"/>
            <!-- ref="header"  @zk = "zk" style="position:fixed;top:250px;right:30px;"/> -->
          <el-scrollbar style="height:100%;">
            <demo-page-main
            class="zk_gd"
              :table-data="table"
              :loading="loading" v-show="ok"/>
            <el-col :span="24" v-show="!ok" class="zk_gd">
                      <div class="col-l">
                        <el-row :gutter="20">
                          <el-col style="margin-bottom:20px;width:256px;"  v-for="(list,index) in items" :key="list.name">
                            <el-card shadow="hover" style="position:relative;" :class="bian(index)" :body-style="{ padding: '0px' }">
                              <div class="yuan" :class="yuan(index)">{{list.yuan[index].yuan}}</div>
                              <div class="sanjiao"></div>
                              <div class="sanjiao_gai"></div>
                              <div class="sanjiao_gai1"></div>
                              <div class="bai_sanjiao">  </div>
                              <span class="dbx" :class="dbx(index)" >{{list.star}}</span>
                              <p class="lis1" style="font-size:13px;" :title="list.name">
                              <d2-icon-svg class="ic_svg" name="user"/>姓名 <b>:</b> <span style="font-size:13px;"> {{list.name}}</span></p>
                              <p class="lis" :title="list.phone"><d2-icon-svg class="ic_svg" name="phone"/> 手机号 <b>:</b><span style="font-size:13px;"> {{list.phone}}</span></p>
                              <p class="lis" :title="list.peoNum"><d2-icon-svg class="ic_svg" name="idcard"/> 身份证号 <b>:</b><span style="font-size:13px;"> {{list.peoNum}}</span></p>
                              <p style="margin-bottom:20px;margin-top:-5px;">
                                <span style="padding-right:8px;" class="lis" :title="list.sex[index].sex" ><d2-icon-svg class="ic_svg" name="old"/> 性别 <b>:</b><span style="font-size:13px;margin-right:10px;"> {{list.sex[index].sex}}</span></span>
                                <span style="padding-right:29px;" class="lis" :title="list.age" ><d2-icon-svg class="ic_svg" name="old"/> 年龄 <b>:</b><span style="font-size:13px;"> {{list.age}}</span></span>
                              </p>
                              <p>
                              <span style="padding-right:10px;margin-left:0px;padding-left:17px;" class="lis" :title="list.type[index].type"><d2-icon-svg class="ic_svg" name="star"/> 种类 <b>:</b><span style="font-size:13px;margin-right:10px;"> {{list.type[index].type}}</span></span>
                              <span style="margin-left:-10px;" class="lis" :title="list.time"><d2-icon-svg class="ic_svg" name="alarm"/> 时间 <b>:</b>&nbsp;<span style="font-size:13px;height:15px;display:inline-block;width:53px;line-height:19px;overflow: hidden;white-space: nowrap;text-overflow:ellipsis;">{{list.time}} </span></span>
                              </p>

                              <p class="lis" style="margin-bottom:25px;border:none;cursor:pointer;" @click="message">
                                <el-tooltip content="点击查看详细信息" placement="right">
                                  <el-button style="font-size:13px;" size="mini">详细信息</el-button>
                                  <!-- <span ></span> -->
                                </el-tooltip>
                              </p>
                            </el-card>
                          </el-col>
                        </el-row>
                      </div>
            </el-col>
          </el-scrollbar>
        </p>
      </el-col>
    <!--人员信息弹窗-->
    <people-info-popup></people-info-popup>
  </d2-container>
</template>
<script>
  import { BusinessTable1List } from '@/api/demo/business/table/1'
  // import img1 from '../../assets/img/1.jpg'
  // import img3 from '../../assets/img/3.jpg'
  const cityOptions = ['信用贷', '抵押贷', 'XX贷'];
  import axios from '@/plugin/axios'
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
        value1: '',
        value2: '',
        selectedBlock: {},
        inx: -1,
        bgc:[
          {num:5},
          {num:4},
          {num:3},
          {num:2},
          {num:1}
        ],
        radio2: 1,
        checkAll: '',
        checkedCities: [],
        cities: cityOptions,
        isIndeterminate: true,
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
          { name: 'zk', num: 15522212, danger_num: '123', status: 'danger' },
          { name: 'zk', num: 15522212, danger_num: '123', status: 'danger' },
          { name: 'zk', num: 15522212, danger_num: '123', status: 'danger' },
          { name: 'zk', num: 15522212, danger_num: '123', status: 'danger' },
          { name: 'zk', num: 15522212, danger_num: '123', status: 'danger' },
          { name: 'zk', num: 15522212, danger_num: '123', status: 'danger' },
          { name: 'zk', num: 15522212, danger_num: '123', status: 'danger' },
          { name: 'zk', num: 15522212, danger_num: '123', status: 'danger' },
        ],
        items: [
          // { name: '马尔扎哈维', phone: 15522322212, age: '18', star: 2.6, type:'信用贷',peoNum:'141234196598050561',time:'2000-1-1',yuan:'5'},
          // { name: 'zk1', phone: 15652322212, age: '23', star: 3.5, type:'信用贷',peoNum:'141234196598050561',time:'2000-1-1',yuan:'1' },
          // { name: 'zk2', phone: 15578956212, age: '24', star: 6.9,type:'信用贷',peoNum:'141234196598050561',time:'2000-1-1',yuan:'4' },
          // { name: 'zk2', phone: 15578956212, age: '54', star: 7.8,type:'信用贷',peoNum:'141234196598050561',time:'2000-1-1',yuan:'2'},
          // { name: 'zk2', phone: 15578956212, age: '32', star: 8.0,type:'信用贷',peoNum:'141234196598050561',time:'2000-1-1',yuan:'5' },
          // { name: 'zk2', phone: 15578956212, age: '54', star: 5.1,type:'信用贷',peoNum:'141234196598050561',time:'2000-1-1',yuan:'1' },
          // { name: 'zk2', phone: 15578956212, age: '32', star: 4.6,type:'信用贷',peoNum:'141234196598050561',time:'2000-1-1',yuan:'5' },
          // { name: 'zk2', phone: 15578956212, age: '19', star: 6.5,type:'信用贷',peoNum:'141234196598050561',time:'2000-1-1',yuan:'3' },
          // { name: 'zk2', phone: 15578956212, age: '28', star: 6.9,type:'信用贷',peoNum:'141234196598050561',time:'2000-1-1',yuan:'2' },
          // { name: 'zk2', phone: 15578956212, age: '23', star: 5.4,type:'信用贷',peoNum:'141234196598050561',time:'2000-1-1',yuan:'1' },
          // { name: 'zk2', phone: 15578956212, age: '20', star: 7.5,type:'信用贷',peoNum:'141234196598050561',time:'2000-1-1',yuan:'3' },
          // { name: 'zk2', phone: 15578956212, age: '24', star: 6.2,type:'信用贷',peoNum:'141234196598050561',time:'2000-1-1',yuan:'1' },
        ],
        ok: false,
        ok1: true,
        table: [],
        loading: false,
        page: {
          current: 1,
          size: 10,
          total: 0
        },
        dialogVisible: false,
        dynamicTags: [],
        inputVisible: false,
        inputValue: ''
      }
    },
    mounted:function() {
      // debugger
      this.ajax();
    },
    methods: {
      ajax(){
        axios({
          url: '/warn',
          method: 'post',
          data:{
            login:'admin'
          }
        })
        .then(res => {
          console.log(res);
          this.items = res.list
        })
        .catch((error) => {
          // 错误情况
          console.log(error);
        })
      },
      chan_zk(index){
        this.inx = index
        if(this.inx == 0){
          axios({
              url: '/warn1',
              method: 'post',
              data:{
                login:'admin'
              }
            })
            .then(res => {
              console.log(res);
              this.items = ""
              this.items = res.list
            })
            .catch((error) => {
              // 错误情况
              console.log(error);
            })
        }else if(this.inx == 1){
          axios({
              url: '/warn2',
              method: 'post',
              data:{
                login:'admin'
              }
            })
            .then(res => {
              console.log(res);
              this.items = ""
              this.items = res.list
            })
            .catch((error) => {
              // 错误情况
              console.log(error);
            })
        }else if(this.inx == 2){
          axios({
              url: '/warn3',
              method: 'post',
              data:{
                login:'admin'
              }
            })
            .then(res => {
              console.log(res);
              this.items = ""
              this.items = res.list
            })
            .catch((error) => {
              // 错误情况
              console.log(error);
            })
        }else if(this.inx == 3){
          axios({
              url: '/warn4',
              method: 'post',
              data:{
                login:'admin'
              }
            })
            .then(res => {
              console.log(res);
              this.items = ""
              this.items = res.list
            })
            .catch((error) => {
              // 错误情况
              console.log(error);
            })
        }else if(this.inx == 4){
          axios({
              url: '/warn5',
              method: 'post',
              data:{
                login:'admin'
              }
            })
            .then(res => {
              console.log(res);
              this.items = ""
              this.items = res.list
            })
            .catch((error) => {
              // 错误情况
              console.log(error);
            })
        }
      },
      bg_zk(index){
        let bg = this.bgc[index].num
        if(bg === 1){
          return 'el1'
        }else if(bg === 2){
          return 'el2'
        }else if(bg === 3){
          return 'el3'
        }else if(bg === 4){
          return 'el4'
        }else if(bg === 5){
          return 'el5'
        }
      },
      dbx(index){
        let yu = this.items[index].yuan[index].yuan.toString()
        if(yu === '1'){
          return 'dbx1'
        }else if(yu === '2'){
          return 'dbx2'
        }else if(yu === '3'){
          return 'dbx3'
        }else if(yu === '4'){
          return 'dbx4'
        }else if(yu === '5'){
          return 'dbx5'
        }
      },
      yuan(index){
        let yu = this.items[index].yuan[index].yuan.toString()
        if(yu === '1'){
          return 'yuan1'
        }else if(yu === '2'){
          return 'yuan2'
        }else if(yu === '3'){
          return 'yuan3'
        }else if(yu === '4'){
          return 'yuan4'
        }else if(yu === '5'){
          return 'yuan5'
        }
      },
      bian(index){
        let yu = this.items[index].yuan[index].yuan.toString()
        if(yu === '1'){
          return 'bian1'
        }else if(yu === '2'){
          return 'bian2'
        }else if(yu === '3'){
          return 'bian3'
        }else if(yu === '4'){
          return 'bian4'
        }else if(yu === '5'){
          return 'bian5'
        }
      },
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
        if(val == true){
          this.ajax()
        }
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        for(let i=0;i<value.length;i++){
          if(value.length == 1 && value[i] == "信用贷"){
            // 信用贷
            axios({
              url: '/warn1',
              method: 'post',
              data:{
                login:'admin'
              }
            })
            .then(res => {
              console.log(res);
              //this.items = ""
              this.items = res.list
            })
            .catch((error) => {
              // 错误情况
              console.log(error);
            })
          }else if(value.length == 1 && value[i] == "抵押贷"){
            // 抵押贷
            axios({
              url: '/warn2',
              method: 'post',
              data:{
                login:'admin'
              }
            })
            .then(res => {
              console.log(res);
              this.items = ""
              this.items = res.list
            })
            .catch((error) => {
              // 错误情况
              console.log(error);
            })
          }else if(value.length == 1 && value[i] == "XX贷"){
            // 抵押贷
            axios({
              url: '/warn3',
              method: 'post',
              data:{
                login:'admin'
              }
            })
            .then(res => {
              console.log(res);
              this.items = ""
              this.items = res.list
            })
            .catch((error) => {
              // 错误情况
              console.log(error);
            })
          }else if(value.length == 2 && value[i] == "抵押贷" || value[i] == "信用贷"){
            // 抵押贷
            axios({
              url: '/warn4',
              method: 'post',
              data:{
                login:'admin'
              }
            })
            .then(res => {
              console.log(res);
              this.items = ""
              this.items = res.list
            })
            .catch((error) => {
              // 错误情况
              console.log(error);
            })
          }else if(value.length == 3){
            this.ajax()
          }
        }
      },
      message () {
        // alert(123213)
        // this.dialogVisible = true
        this.$store.commit('setData',true)
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
<style lang="scss" scoped>
  .bai_sanjiao{
    border-right:1px solid #fff;
    border-bottom:1px solid #fff;
    width:5px;
    height:5px;
    position:absolute;
    bottom:4px;
    right:4px;
  }
  .zk_gd{
    padding-left:20px;
    height:calc(100vh - 254px);
  }
  .zk_vh{
    background:#fff;
    height:calc(100vh - 200px);
    min-width:215px;
  }
  .ic_svg{
    height:10px;
    width:10px;
    // border:1px solid red;
    ;margin-right:3px;
    vertical-align: center;
  }
  .el5{
    display:inline-block;
    margin:0;
    border-radius:0;
    background:#ef1c11;
    border:none;
    color:#fff;
    width:50px;
    text-align: center;
    line-height: 25px;
    height:25px;
    font-size:12px;
    opacity: 0.8;
  }
  .el_bg{
    background:#641807 !important;
  }
  .el5:hover{
    margin:0;
    border-radius:0;
    background:#ef1c11;
    opacity: 1;
    border:none;
    color:#fff;
    width:50px;
  }
  .el4{
    display:inline-block;
    margin:0;
    border-radius:0;
    border:none;
    color:#fff;
    width:50px;
    text-align: center;
    line-height: 25px;
    height:25px;
    font-size:12px;
    opacity: 0.8;
    background:#ed5a39;
  }
  .el4:hover{
    background:#ed5a39;
    color:#fff;
    opacity: 1;
  }
  .el3{
    display:inline-block;
    margin:0;
    border-radius:0;
    border:none;
    color:#fff;
    width:50px;
    text-align: center;
    line-height: 25px;
    height:25px;
    font-size:12px;
    opacity: 0.8;
    background:#e37f18;
  }
  .el3:hover{
    background:#e37f18;
    color:#fff;
    opacity: 1;
  }
  .el2{
    display:inline-block;
    margin:0;
    border-radius:0;
    border:none;
    color:#fff;
    width:50px;
    text-align: center;
    line-height: 25px;
    height:25px;
    font-size:12px;
    opacity: 0.8;
    background:#e3b718;
  }
  .el2:hover{
    background:#e3b718;
    color:#fff;
    opacity: 1;
  }
  .el1{
    display:inline-block;
    margin:0;
    border-radius:0;
    border:none;
    color:#fff;
    width:50px;
    text-align: center;
    line-height: 25px;
    height:25px;
    font-size:12px;
    opacity: 0.8;
    background:#fdf705;
    margin-right:30px;
  }
  .el1:hover{
    background:#fdf705;
    color:#fff;
    opacity: 1;
  }
  .el-button{
    margin-left: 0px !important;
  }
  .dbx{
    position: relative;
    width: 40px;
    height: 30px;
    line-height:30px;
    border: 2px solid red;
    margin-top:10px;
    background:red;
    color:#fff;
    margin-top:5px;
    margin-right:10px;
    display:inline-block;
    padding-left:5px;
  }
  .dbx1{
    border: 2px solid #fdf705;
    background:#fdf705;
  }
  .dbx2{
    border: 2px solid #e3b718;
    background:#e3b718;
  }
  .dbx3{
    border: 2px solid #e37f18;
    background:#e37f18;
  }
  .dbx4{
    border: 2px solid #ed5a39;
    background:#ed5a39;
  }
  .dbx5{
    border: 2px solid #ef1c11;
    background:#ef1c11;
  }
  .sanjiao{
    color:#fff;
    height: 0;
    width: 0;
    border-left: 20px solid transparent;
    border-bottom: 20px solid #058eee;
    border-top: 20px solid transparent;
    position:absolute;
    right:0;
    bottom:0;
  }
  .sanjiao_gai{
    color:#fff;
    height: 0;
    width: 0;
    border-right: 28px solid transparent;
    border-bottom: 24px solid #fff;
    border-top: 24px solid transparent;
    transform:rotate(45deg);
    -ms-transform:rotate(45deg);   /* IE 9 */
    -moz-transform:rotate(45deg);  /* Firefox */
    -webkit-transform:rotate(45deg); /* Safari 和 Chrome */
    -o-transform:rotate(45deg);
    position:absolute;
    left:45px;
    top:-6px;
    z-index:99;
  }
  .sanjiao_gai1{
      height: 0;
      width: 0;
      border-top: 24px solid transparent;
      border-right: 24px solid transparent;
      border-bottom: 24px solid #fff;
      transform:rotate(45deg);
      -ms-transform:rotate(45deg);   /* IE 9 */
      -moz-transform:rotate(45deg);  /* Firefox */
      -webkit-transform:rotate(45deg); /* Safari 和 Chrome */
      -o-transform:rotate(45deg);
      position:absolute;
      left:47px;
      top:-6px;
      z-index:999;
    }
  .yuan{
    font-size:13px;
    height:20px;
    width:20px;
    border-radius:0px 0px 0 20px;
    background:red;
    position:absolute;
    right:0;
    top:0;
    text-align:right;
    padding-right:3px;
    color:#fff;
  }

  .bian1{
    border-left:5px solid #fdf705;
  }
  .yuan1{
    background:#fdf705;
  }
  .bian2{
    border-left:5px solid #e3b718;
  }
  .yuan2{
    background:#e3b718;
  }
  .bian3{
    border-left:5px solid #e37f18;
  }
  .yuan3{
    background:#e37f18;
  }
  .bian4{
    border-left:5px solid #ed5a39;
  }
  .yuan4{
    background:#ed5a39;
  }
  .bian5{
    border-left:5px solid #ef1c11;
  }
  .yuan5{
    background:#ef1c11;
  }
  .cir{
    height:50px;
    width:50px;
    display:inline-block;
    border-radius:50px;
    text-align: center;
    line-height:52px;
    color:#111;
    border:1px solid #fff;
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
    height:95px !important;
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
    border-bottom:1px solid #ccc;
    padding-bottom:8px;
    margin-right:5px;
    // padding-right: 5px;
    font-size:13px;
    font-family:"微软雅黑";
  }
  .lis1 {
    display: inline-block;
    width:165px;
    overflow: hidden;
    white-space: nowrap; //使其不换行
    text-overflow:ellipsis;
    vertical-align: middle;
    border-bottom:1px solid #ccc;
    padding-bottom:10px;
  }

  @media screen and (max-width: 1280) {
    .lis1 {
      display: inline-block;
      width:54px;
      overflow: hidden;
      white-space: nowrap; //使其不换行
      text-overflow:ellipsis;
      vertical-align: middle;
      border-bottom:1px solid #333;
      padding-bottom:10px;
    }
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

