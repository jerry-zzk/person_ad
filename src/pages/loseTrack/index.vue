<template>
  <d2-container>
    <div class="col col-l">
      <p class="zk_sousuo" style="text-align:center;">
        <!-- <img src="../../assets/img/1.jpg" alt="搜索" style="width:2%;vertical-align:middle;margin-right:5px;"> -->
        <i style="vertical-align:middle;margin-right:10px;height:29px;display:inline-block;font-size:22px;color:#ea7312;" class="fa fa-search"></i>
         <span style="font-size:24px;color:#666;">用 户 搜 索</span>
      </p>
      <p class="zk_input" style="text-align:center;">
        <el-input
          v-model="val"
          placeholder="请输入搜索内容"
          style="width:600px;"
          prefix-icon="el-icon-search"
          clearable="">
          <el-button @click="sear" style="background:#ea7312;color:#fff;border-radius:0;border:1px solid #ea7312;" slot="append">搜索</el-button>
        </el-input>
      </p>
    </div>
    <div style="background-color:#fff;border-width:24px 10px 5px 10px;border-style:solid;border-color:#f5f6fa;">
      <p style="background-color:#eaeff3;height:40px;line-height:40px;margin: 0 0 0 -1px;padding-left: 10px;font-size: 16px;font-weight:600;color:#999;">共搜索到{{resault}}个结果</p>
      <!-- 表格 -->
      <demo-page-header
        slot="header"
        @submit="handleSubmit"
        ref="header"  @zk = "zk"/>
        <div v-show="ok1">
          <el-row :class="[zk_ul,{cli:zk_cli}]" v-for="(lb,index) in peo" :key="lb">
            <el-col :span="3">
              <img src="../../assets/img/1.jpg" style="width:120px;vertical-align:middle;" alt="">
            </el-col>
            <el-col :span="6">
              <p><b style="color:#ea7312;">{{lb.name[index].name}}</b></p>
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
              <p @click="mess(index)">
                <el-tooltip content="查看详情" placement="bottom" effect="light">
                   <i style="width:26px;height:15px;cursor:pointer;display:inline-block;border:1px solid #ccc;
                padding:5px 0 5px 5px;background:#efefef;" class="fa fa-id-card-o"></i>
                </el-tooltip>
               
                <!-- <d2-icon-svg  name="count" ></d2-icon-svg> -->
              </p>
              <p> </p>
              <p> </p>
            </el-col>
          </el-row>
        </div>
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
      <!--人员信息弹窗-->
      <people-info-popup1></people-info-popup1>
    </div>
  </d2-container>
</template>

<script>
import img1 from '../../assets/img/1.jpg'
import img3 from '../../assets/img/3.jpg'
import { BusinessTable1List } from '@/api/demo/business/table/1'
import axios from '@/plugin/axios'
export default {
  name: 'demo-business-table-1',
  components: {
   // 'DemoPageHeader': () => import('./componnets/PageHeader'),
   // 'DemoPageMain': () => import('./componnets/PageMain'),
   // 'DemoPageFooter': () => import('./componnets/PageFooter')
  },
  data () {
    return {
      val:'',
      fo:'',
      zk_cli:false,
      zk_ul:'zk_ul',
      peo:[
        // {name:'张三',idcard:'142300xxxxxxxx0000',mz:'汉族',sex:'男',phone:'15555446665',address:'北京',country:'山西'},
        // {name:'张三',idcard:'142300xxxxxxxx0000',mz:'汉族',sex:'男',phone:'15555446665',address:'北京',country:'山西'},
        // {name:'张三',idcard:'142300xxxxxxxx0000',mz:'汉族',sex:'男',phone:'15555446665',address:'北京',country:'山西'},
        // {name:'张三',idcard:'142300xxxxxxxx0000',mz:'汉族',sex:'男',phone:'15555446665',address:'北京',country:'山西'},
        // {name:'张三',idcard:'142300xxxxxxxx0000',mz:'汉族',sex:'男',phone:'15555446665',address:'北京',country:'山西'},
        // {name:'张三',idcard:'142300xxxxxxxx0000',mz:'汉族',sex:'男',phone:'15555446665',address:'北京',country:'山西'}
      ],
      resault:'2336',
      zk_name: 'zk',
      zk_phone: '15522322212',
      dynamicTags: [],
      inputVisible: false,
      inputValue: '',
      dialogVisible: false,
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
  mounted:function(){
    this.ajax()
  },
  methods: {
    sear(){
      if(this.ok1 === true){
        // 列表搜索
        axios({
          url: '/risk1',
          method: 'post',
        })
        .then(res => {
          for(let i =0;i<res.list.length;i++){
            for(let j =0;i<res.list[i].name.length;j++){
              if(this.val == res.list[i].name[j].name){
                this.peo = ''
                this.peo = res.list
              }else if(this.val != res.list[i].name[j].name){
                this.ajax()
              }
            }
          }
        })
        .catch((error) => {
          // 错误情况
          console.log(error);
        })
      }else{
        // 表格搜索
      }
    },
    ajax(){
      axios({
          url: '/risk',
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
    mess(index){
      // 待修改替换
      this.$store.commit('setData1',true)
      this.$store.commit('setTab','mainTab3')
    },
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
      // this.dialogVisible = true
      this.$store.commit('setData1',true)
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
  // .el-input__inner, .el-checkbox__inner, .el-textarea__inner, .el-button {
  //   border:1px solid #ea7312 !important;
  //   border-radius:0px !important;
  // }
  .fo{
    border:1px solid #ea7312;
    border-radius:0px;
  }
  .zk_ul{
    border-bottom:1px solid #eee;
    padding: 20px 0 5px 15px;
    // margin-bottom: 15px;
  }
  .zk_cli{
    border:2px solid #35ab62;
    border-left:5px solid #35ab62;
  }
  .zk_ul:hover{
    border:1px solid #35ab62;
    border-left:4px solid #35ab62;
    background:rgba(132, 182, 144, 0.12);
  }
@import '~@/assets/style/public.scss';
.col {
  padding: 0 20px 40px 20px;
  border-radius: 4px;
  // border-width: 1px;
  // border-style: solid;
  font-size: 16px;
}
.col-l {
  // background-color: lighten($color-info, 40%);
  // border-color: lighten($color-info, 35%);
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
