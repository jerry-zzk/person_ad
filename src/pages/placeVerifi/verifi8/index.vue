<template class="page">
    <d2-container class="page">
        <el-card shadow="never" class="d2-mb">
            <h3>两个手机号位置共现核验</h3>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="手机号码 : " prop="name" style="display:inline-block">
                        <el-input v-model="ruleForm.name"  placeholder="请输入手机号码" clearable="" value1="" prefix-icon="el-icon-edit" value="" style="width:300px;margin-right:30px;"></el-input>
                    </el-form-item>
                    <el-form-item label="时间范围 : " prop="num" style="display:inline-block">
                        <el-input v-model.number="ruleForm.num" placeholder="请输入时间范围" clearable="" value2="" value="" prefix-icon="el-icon-edit" style="width:300px;margin-right:30px;"></el-input> 
                    </el-form-item>
                        <el-button type="warning" size="small" @click="cli">点击验证</el-button>
                    </p>
                <div v-show="hide" style="height:50px; border-top:1px solid #ccc;line-height:50px;">
                   <h3 style="color:#666;margin-top:3px;" v-show="hello">恭喜,您输入验证的信息相匹配。</h3>
                   <h3 style="color:#aaa;margin-top:3px;" v-show="sorry">很抱歉,您验证的信息不匹配。</h3>
                </div>
            </el-form>
        </el-card>
        <div>
            <demo-page-header
              style="margin-bottom:6px;"
              slot="header"
              @submit="handleSubmit"
              ref="header"  @zk = "zk"/>
            <demo-page-main
            style="margin-bottom:15px;"
              :table-data="table"
              :loading="loading" v-show="ok1"/>

            <p v-show="ok">
              <el-row :class="[zk_ul,{cli:zk_cli}]" v-for="(lb,index) in peo" :key="lb">
                <el-col :span="3">
                  <img src="../../../assets/img/1.jpg" style="width:60%;vertical-align:middle;" alt="">
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
              </el-row>
            </p>

            <demo-page-footer
              style="margin-top:10px;"
              slot="footer"
              :current="page.current"
              :size="page.size"
              :total="page.total"
              @change="handlePaginationChange"/> 
        </div>
        
    </d2-container>
</template>

<script>
import { BusinessTable1List } from '@/api/demo/business/table/1'
import axios from '@/plugin/axios'
export default {
  name: 'demo-business-table-1',
  components: {
    'DemoPageHeader': () => import('./componnets/PageHeader'),
    'DemoPageMain': () => import('./componnets/PageMain'),
    'DemoPageFooter': () => import('./componnets/PageFooter'),
  },
  data () {
    return {
    hide:false,
      zk_cli:false,
        zk_ul:'zk_ul',
        peo:[],
        value1:'',
        value2:'',
        ok:false,
        ok1:true,
        ruleForm: {
            name:'',
            num:''
        },
        item: [
            { name: 'zk3', num: 3065, status: 'danger' },
            { name: 'zk3', num: 3065, status: 'warning' },
            { name: 'zk3', num: 3065, status: 'success' },
            { name: 'zk3', num: 3065, status: 'danger' },
            { name: 'zk3', num: 3065, status: 'success' },
            { name: 'zk3', num: 3065, status: 'danger' },
            { name: 'zk3', num: 3065, status: 'info' },
            { name: 'zk3', num: 3065, status: 'danger' }
          ],
        hello:false,
        sorry:false,
        table: [],
        loading: false,
        page: {
        current: 1,
        size: 100,
        total: 0
        },
        dialogVisible: false,
        dynamicTags: [],
        rules: {
          name: [
            { required: true, message: '请输入核验手机号码', trigger: 'blur' },
            { type: 'number', message: '手机号码为数字值'}
          ],
          num: [
            { required: true, message: '请输入时间范围', trigger: 'blur' },
          ]
        }
    }
  },mounted(){
    this.ajax()
    this.handleSubmit()
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
    },
    cli(){
        if(this.ruleForm.name == this.ruleForm.num){
            this.hide = true
            this.hello = true
            this.sorry = false
        }else if(this.ruleForm.name != this.ruleForm.num){
            this.hello = false
            this.sorry = true
            this.hide = true
        }
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
    border:1px solid #35ab62;
    border-left:3px solid #35ab62;
    background:rgba(132, 182, 144, 0.12);
  }
@import '~@/assets/style/public.scss';
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

