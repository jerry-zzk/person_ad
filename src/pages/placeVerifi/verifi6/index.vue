<template class="page">
    <d2-container class="page">
        <el-card shadow="never" class="d2-mb">
            <h2>手机号历史时间点出现位置核验</h2>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="手机号码 : " prop="name" style="display:inline-block">
                        <el-input v-model="ruleForm.name"  placeholder="请输入手机号码" clearable="" value1="" prefix-icon="el-icon-edit" value="" style="width:300px;margin-right:30px;"></el-input>
                    </el-form-item>
                    <el-form-item label="历史时间范围、位置省市县 : " prop="num" style="display:inline-block">
                        <el-input v-model.number="ruleForm.num" placeholder="请输入历史时间范围、位置省市县" clearable="" value2="" value="" prefix-icon="el-icon-edit" style="width:300px;margin-right:30px;"></el-input> 
                    </el-form-item>
                        <el-button type="warning" size="small" @click="cli">点击验证</el-button>
                    </p>
                <el-card shadow="never" class="d2-mb" style="height:80px;">
                   <h2 style="color:#666;margin-top:3px;" v-show="hello">恭喜,您输入验证的信息相匹配。</h2>
                   <h2 style="color:#aaa;margin-top:3px;" v-show="sorry">很抱歉,您验证的信息不匹配。</h2>
                </el-card>
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
              :loading="loading" v-show="ok"/>

            <el-card v-show="ok1" style="margin-bottom:15px;">
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
export default {
  name: 'demo-business-table-1',
  components: {
    'DemoPageHeader': () => import('./componnets/PageHeader'),
    'DemoPageMain': () => import('./componnets/PageMain'),
    'DemoPageFooter': () => import('./componnets/PageFooter'),
  },
  data () {
    return {
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
            { required: true, message: '请输入历史时间范围、位置省市县', trigger: 'blur' },
          ]
        }
    }
  },
  methods: {
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
            this.hello = true
            this.sorry = false
        }else if(this.ruleForm.name != this.ruleForm.num){
            this.hello = false
            this.sorry = true
        }
    }
  }
}
</script>
<style lang="scss" scoped>
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

