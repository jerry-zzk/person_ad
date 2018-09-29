<template>
  <d2-container id="search_customer" class="page">
    <div class="sCustomer-head">
      <p class="sCustomer-p">
        <d2-icon-svg name="isearch" style="position:relative;width:32px;height:32px;top:4px;margin-right:10px;"></d2-icon-svg>
        <span class="sCustomer-title">客户搜索</span>
      </p>
      <p class="sCustomer-p">
        <input v-model="searchVal" class="sCustomer-input">
        <el-button class="sCustomer-btn" slot="append">搜 索</el-button>
      </p>
    </div>
    <div class="sCustomer-body">
      <div class="sCustomer-line"></div>
      <p class="sCustomer-body-title">共搜索到1000条结果</p>
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
        <div style="margin-top: 50px;text-align: right;">
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
      searchVal: '',
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
  .sCustomer-head{
    .sCustomer-p{
      margin-bottom: 30px;
      text-align: center;
      .fa{
        margin-right: 16px;
        font-size: 32px;
        color: #409efe;
      }
      .sCustomer-title{
        font-size: 28px;
        color: #333;
      }
    }
    .sCustomer-input{
      display: inline-block;
      width: 800px;
      height: 50px;
      line-height: 50px;
      padding: 0 15px;
      border: 1px solid #409efe;
      outline: 0;
      border-radius: 4px;
      font-size: inherit;
      color: #606266;
      background-color: #fff;
      background-image: none;
      -webkit-appearance: none;
      -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
    .sCustomer-btn{
      margin-left: -4px;
      padding: 16px 30px 15px 30px;
      color: #fff;
      background-color: #409efe;
      border: 1px solid #409efe;
      font-size: 18px;
    }
  }
  .sCustomer-body{
    .sCustomer-line{
      height: 1px;
      margin: 0 -20px;
      background-color: #ccc;
    }
    .sCustomer-body-title{
      color: #ccc;
    }
  }
}
</style>
