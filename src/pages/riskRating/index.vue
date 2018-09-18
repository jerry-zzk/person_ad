<template>
  <d2-container>
    <el-card class="d2-mb">
      <el-row :gutter="10">
        <el-col :span="24">
          <div class="col col-l">
            <p style="text-align:center;"> 
              <img src="../../assets/img/1.jpg" alt="搜索" style="width:2%;vertical-align:middle;margin-right:5px;"> <span style="font-size:24px;color:#666;">用 户 搜 索</span>
            </p>
            <p style="text-align:center;"> 
              <el-input
                placeholder="请输入搜索内容"
                style="width:600px;"
                prefix-icon="el-icon-search"
                clearable="">
                <el-button slot="append" >搜索</el-button>
              </el-input>
            </p>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <div style="background:#fff;margin-top:-20px;border:5px solid #d5d8de;border-top:20px solid #d5d8de;">
      <p style="background:#aaa;opacity:0.3;height:30px;line-height:30px;iwdth:100%;margin-top:0px;color:#333;">共搜索出 <b style="color:#000;"> {{resault}} </b> 条信息</p>
      <!-- 表格 -->
      <demo-page-header
        slot="header"
        @submit="handleSubmit"
        style="margin-bottom:-10px;"
        ref="header"  @zk = "zk"/>
        <p v-show="ok1">
          <el-row :class="[zk_ul,{cli:zk_cli}]" v-for="(lb,index) in peo" :key="lb">
            <el-col :span="3">
              <img src="../../assets/img/1.jpg" style="width:60%;vertical-align:middle;" alt="">
            </el-col>
            <el-col :span="6">
              <p><b style="color:#ea7312;">{{lb.name}}</b></p>
              <p><span style="color:#999"> 身份证号码 </span> <b>:</b> {{lb.idcard}}</p>
              <p><span style="color:#999"> 民族 </span> <b>:</b> {{lb.mz}}</p>
            </el-col>
            <el-col :span="6">
              <p style="height:10px;"> </p>
              <p><span style="color:#999"> 性别 </span> <b>:</b> {{lb.sex}}</p>
              <p><span style="color:#999"> 籍贯 </span> <b>:</b> {{lb.country}}</p>
            </el-col>
            <el-col :span="6">
              <p style="height:10px;"> </p>
              <p><span style="color:#999"> 电话号码 </span> <b>:</b> {{lb.phone}}</p>
              <p><span style="color:#999"> 居住地址 </span> <b>:</b> {{lb.address}}</p>
            </el-col>
            <el-col :span="3">
              <p @click="mess(index)">
                <d2-icon-svg style="width:30px;height:15px;cursor:pointer;display:inline-block;border:1px solid #ccc;
                padding:5px 0;background:#efefef;" name="count" ></d2-icon-svg>
              </p>
              <p> </p>
              <p> </p>
            </el-col>
          </el-row>
        </p>
      <demo-page-main
        :table-data="table"
        :loading="loading" v-show="ok"/>
      <!-- <demo-toggle /> -->
      <demo-page-footer
        slot="footer"
         style="padding-bottom:10px;margin-left:5px;"
        :current="page.current"
        :size="page.size"
        :total="page.total"
        @change="handlePaginationChange"/>
      <!--人员信息弹窗-->
      <people-info-popup></people-info-popup>
    </div>
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
      zk_cli:false,
      zk_ul:'zk_ul',
      peo:[
        {name:'张三',idcard:'142300xxxxxxxx0000',mz:'汉族',sex:'男',phone:'15555446665',address:'北京',country:'山西'},
        {name:'张三',idcard:'142300xxxxxxxx0000',mz:'汉族',sex:'男',phone:'15555446665',address:'北京',country:'山西'},
        {name:'张三',idcard:'142300xxxxxxxx0000',mz:'汉族',sex:'男',phone:'15555446665',address:'北京',country:'山西'},
        {name:'张三',idcard:'142300xxxxxxxx0000',mz:'汉族',sex:'男',phone:'15555446665',address:'北京',country:'山西'},
        {name:'张三',idcard:'142300xxxxxxxx0000',mz:'汉族',sex:'男',phone:'15555446665',address:'北京',country:'山西'},
        {name:'张三',idcard:'142300xxxxxxxx0000',mz:'汉族',sex:'男',phone:'15555446665',address:'北京',country:'山西'}
      ],
      resault:'2336',
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
    mess(index){
      // 待修改替换
      this.$store.commit('setData',true)
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
      this.$store.commit('setData',true)
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
    border:2px solid #35ab62;
    border-left:5px solid #35ab62;
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
