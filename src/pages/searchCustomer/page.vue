<template>
  <d2-container id="search_customer" class="page">
    <div class="sCustomer-head">
      <p style="text-align: center;">
        <i class="fa fa-search"></i> 客户搜索
      </p>
      <p style="text-align: center;">
        <el-input v-model="val" style="width:600px;"></el-input>
          <el-button @click="sear" style="background:#ea7312;color:#fff;border-radius:0;border:1px solid #ea7312;" slot="append">搜 索</el-button>
      </p>
    </div>
    <div class="sCustomer-body">
      <div style="width: 100%;height:1px;margin:0 -20px;background-color:#ccc;"></div>
      <p>共搜索到1000条结果</p>
      <div id="sCustomer_table">
        <el-table :data="tableData" style="width: 100%;">
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="gender" label="性别"></el-table-column>
          <el-table-column prop="age" label="年龄"></el-table-column>
          <el-table-column prop="cellphone" label="手机号"></el-table-column>
          <el-table-column prop="idcard" label="身份证号"></el-table-column>
          <el-table-column prop="type" label="种类"></el-table-column>
          <el-table-column prop="time" label="时间"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column prop="blackList" label="黑名单"></el-table-column>
          <el-table-column prop="grade" label="评分"></el-table-column>
        </el-table>
        <div style="margin-top: 50px;text-align: center;">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
      </div>
    </div>

  </d2-container>
</template>

<script>
export default {
  name: 'search_customer',
  components: {
     
  },
  data () {
    return {
      chartData: {
        msg: '第二个图标的首页',
      },
      tableData: [{
        id: '1',
        name: '张三',
        gender: '男',
        age: '23',
        cellphone: '13618261628',
        idcard: '123456789123456789',
        type: '种类',
        time: '2018-09-29',
        address: '北京市朝阳区',
        blackList: '',
        grade: '9.4'
      },{
        id: '2',
        name: '张三',
        gender: '男',
        age: '23',
        cellphone: '13618261628',
        idcard: '123456789123456789',
        type: '种类',
        time: '2018-09-29',
        address: '北京市朝阳区',
        blackList: '',
        grade: '9.4'
      },{
        id: '3',
        name: '张三',
        gender: '男',
        age: '23',
        cellphone: '13618261628',
        idcard: '123456789123456789',
        type: '种类',
        time: '2018-09-29',
        address: '北京市朝阳区',
        blackList: '',
        grade: '9.4'
      },{
        id: '4',
        name: '张三',
        gender: '男',
        age: '23',
        cellphone: '13618261628',
        idcard: '123456789123456789',
        type: '种类',
        time: '2018-09-29',
        address: '北京市朝阳区',
        blackList: '',
        grade: '9.4'
      },{
        id: '5',
        name: '张三',
        gender: '男',
        age: '23',
        cellphone: '13618261628',
        idcard: '123456789123456789',
        type: '种类',
        time: '2018-09-29',
        address: '北京市朝阳区',
        blackList: '',
        grade: '9.4'
      },{
        id: '6',
        name: '张三',
        gender: '男',
        age: '23',
        cellphone: '13618261628',
        idcard: '123456789123456789',
        type: '种类',
        time: '2018-09-29',
        address: '北京市朝阳区',
        blackList: '',
        grade: '9.4'
      },{
        id: '7',
        name: '张三',
        gender: '男',
        age: '23',
        cellphone: '13618261628',
        idcard: '123456789123456789',
        type: '种类',
        time: '2018-09-29',
        address: '北京市朝阳区',
        blackList: '',
        grade: '9.4'
      },{
        id: '8',
        name: '张三',
        gender: '男',
        age: '23',
        cellphone: '13618261628',
        idcard: '123456789123456789',
        type: '种类',
        time: '2018-09-29',
        address: '北京市朝阳区',
        blackList: '',
        grade: '9.4'
      },{
        id: '9',
        name: '张三',
        gender: '男',
        age: '23',
        cellphone: '13618261628',
        idcard: '123456789123456789',
        type: '种类',
        time: '2018-09-29',
        address: '北京市朝阳区',
        blackList: '',
        grade: '9.4'
      },{
        id: '10',
        name: '张三',
        gender: '男',
        age: '23',
        cellphone: '13618261628',
        idcard: '123456789123456789',
        type: '种类',
        time: '2018-09-29',
        address: '北京市朝阳区',
        blackList: '',
        grade: '9.4'
      }]
    }
  },
  mounted(){
    
  },
  methods:{
    
  },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
#search_customer{
  border-left: 1px solid #ccc;
  background-color: #fff;
}
</style>
