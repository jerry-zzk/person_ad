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
      <div id="sCustomer_table" class="sc_table">
        <el-row class="sc_table-thead" :gutter="1">
          <el-col :span="3"><div class="sc_table-thead-td first">姓名</div></el-col>
          <el-col :span="1"><div class="sc_table-thead-td">性别</div></el-col>
          <el-col :span="1"><div class="sc_table-thead-td">年龄</div></el-col>
          <el-col :span="3"><div class="sc_table-thead-td">手机号</div></el-col>
          <el-col :span="4"><div class="sc_table-thead-td">身份证号</div></el-col>
          <el-col :span="1"><div class="sc_table-thead-td">种类</div></el-col>
          <el-col :span="2"><div class="sc_table-thead-td">时间</div></el-col>
          <el-col :span="5"><div class="sc_table-thead-td">地址</div></el-col>
          <el-col :span="2"><div class="sc_table-thead-td">黑名单</div></el-col>
          <el-col :span="2"><div class="sc_table-thead-td last">评分</div></el-col>
        </el-row>
        <el-scrollbar style="height: calc(100vh - 430px);border: 1px solid #ccc;">
        <el-row v-for="item in tableData" :key="item.id" class="sc_table-tr" :gutter="1">
          <el-col class="sc_table-tr-td" :span="3"><div class="itd itd-first">{{item.name}}</div></el-col>
          <el-col class="sc_table-tr-td" :span="1"><div class="itd">{{item.gender}}</div></el-col>
          <el-col class="sc_table-tr-td" :span="1"><div class="itd">{{item.age}}</div></el-col>
          <el-col class="sc_table-tr-td" :span="3"><div class="itd">{{item.cellphone}}</div></el-col>
          <el-col class="sc_table-tr-td" :span="4"><div class="itd">{{item.idcard}}</div></el-col>
          <el-col class="sc_table-tr-td" :span="1"><div class="itd">{{item.type}}</div></el-col>
          <el-col class="sc_table-tr-td" :span="2"><div class="itd">{{item.time}}</div></el-col>
          <el-col class="sc_table-tr-td" :span="5"><div class="itd">{{item.address}}</div></el-col>
          <el-col class="sc_table-tr-td" :span="2">
            <div class="itd">
              <button v-if="item.blackList" @click="openPeopleInfoPopup(item.id)" class="itd-bl-Btn">
                <d2-icon-svg name="iconsumerBlacklist" style="width:16px;height:16px;fill:#fff;"></d2-icon-svg>
              </button>
              <span v-else>&nbsp;</span>
            </div>
          </el-col>
          <el-col class="sc_table-tr-td" :span="2">
            <div class="itd itd-last">
              <span :class="{'itd-red':item.grade>=8,'itd-orange':6<item.grade&&item.grade<8,'itd-green':item.grade<=6}">{{item.grade}}</span>
              <div v-if="item.flag==1" class="itd-flag flag-blue"><p>已通过</p></div>
              <div v-if="item.flag==2" class="itd-flag flag-red"><p>未通过</p></div>
            </div>
          </el-col>
        </el-row>
        </el-scrollbar>
      </div>
      <div class="sc_table-foot">
        <el-pagination
          background
          layout="total, sizes, prev, next, jumper"
          :page-sizes="[100, 200, 300, 400]"
          :total="1000">
        </el-pagination>
      </div>
    </div>
    <people-info-popup :is_input="true"></people-info-popup>
  </d2-container>
</template>

<script>
export default {
  name: 'search_customer',
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
        blackList: true,
        grade: '9.4',
        flag: 1
      }, {
        id: '2',
        name: '张三',
        gender: '男',
        age: '23',
        cellphone: '13618261628',
        idcard: '123456789123456789',
        type: '种类',
        time: '2018-09-29',
        address: '北京市朝阳区',
        blackList: false,
        grade: '9.4',
        flag: 1
      }, {
        id: '3',
        name: '张三',
        gender: '男',
        age: '23',
        cellphone: '13618261628',
        idcard: '123456789123456789',
        type: '种类',
        time: '2018-09-29',
        address: '北京市朝阳区',
        blackList: true,
        grade: '9.4',
        flag: 1
      }, {
        id: '4',
        name: '张三',
        gender: '男',
        age: '23',
        cellphone: '13618261628',
        idcard: '123456789123456789',
        type: '种类',
        time: '2018-09-29',
        address: '北京市朝阳区',
        blackList: false,
        grade: '9.4',
        flag: 2
      }, {
        id: '5',
        name: '张三',
        gender: '男',
        age: '23',
        cellphone: '13618261628',
        idcard: '123456789123456789',
        type: '种类',
        time: '2018-09-29',
        address: '北京市朝阳区',
        blackList: false,
        grade: '9.4',
        flag: 1
      }, {
        id: '6',
        name: '张三',
        gender: '男',
        age: '23',
        cellphone: '13618261628',
        idcard: '123456789123456789',
        type: '种类',
        time: '2018-09-29',
        address: '北京市朝阳区',
        blackList: true,
        grade: '9.4',
        flag: 2
      }, {
        id: '7',
        name: '张三',
        gender: '男',
        age: '23',
        cellphone: '13618261628',
        idcard: '123456789123456789',
        type: '种类',
        time: '2018-09-29',
        address: '北京市朝阳区',
        blackList: true,
        grade: '9.4',
        flag: 2
      }, {
        id: '8',
        name: '张三',
        gender: '男',
        age: '23',
        cellphone: '13618261628',
        idcard: '123456789123456789',
        type: '种类',
        time: '2018-09-29',
        address: '北京市朝阳区',
        blackList: false,
        grade: '7',
        flag: 1
      }, {
        id: '9',
        name: '张三',
        gender: '男',
        age: '23',
        cellphone: '13618261628',
        idcard: '123456789123456789',
        type: '种类',
        time: '2018-09-29',
        address: '北京市朝阳区',
        blackList: false,
        grade: '5.4',
        flag: 2
      }]
    }
  },
  mounted () {
  },
  methods: {
    openPeopleInfoPopup () {
      this.$store.commit('setData', true)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
#search_customer{
  position: absolute;
  border-left: 1px solid #ccc;
  background-color: #fff;
  .d2-container-full__body{
    padding-bottom: 0;
  }
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
      width: 600px;
      height: 50px;
      line-height: 50px;
      padding: 0 10px;
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
      position: relative;
      top: 1px;
      margin-left: -4px;
      padding: 16px 30px 15px 30px;
      color: #fff;
      background-color: #409efe;
      border: 1px solid #409efe;
      border-radius: 0 4px 4px 0;
      font-size: 18px;
    }
  }
  .sCustomer-body{
    font-size: 14px;
    .sCustomer-line{
      height: 1px;
      margin: 0 -20px;
      background-color: #ccc;
    }
    .sCustomer-body-title{
      color: #999;
    }
    .sc_table{
      .sc_table-thead{
        border-radius: 4px 4px 0 0;
        margin-bottom: 4px;
        .sc_table-thead-td{
          padding: 12px 0;
          text-align: center;
          color: #fff;
          background-color: #409efe;
          &.first{
            border-radius: 6px 0 0 0;
          }
          &.last{
            border-radius: 0 6px 0 0;
          }
        }
      }
      .sc_table-tr{
        border-bottom: 1px solid #ccc;
        .sc_table-tr-td{
          height: 42px;
          line-height: 42px;
          text-align: center;
          .itd{
            border-right: 1px solid #ccc;
            .itd-bl-Btn{
              position: relative;
              top: 2px;
              padding: 4px 4px 0px;
              border: 0px;
              outline: none;
              background-color: rgb(250, 70, 69);
              border-radius: 4px;
              cursor: pointer;
              &:hover{
                background-color: #409efe;
              }
            }
          }
          .itd-first{
            border-left: 4px solid #fff;
          }
          .itd-last{
            position: relative;
            border-right: 0;
            font-weight: 900;
            color: #fa4645;
            overflow: hidden;
            .itd-red{
              color: #fa4645;
            }
            .itd-orange{
              color: #fdbc81;
            }
            .itd-green{
              color: #72cd88;
            }
            .itd-flag{
              position: absolute;
              top: 4px;
              width: 80px;
              right: -27px;
              height: 20px;
              line-height: 20px;
              color: #fff;
              background: #aaa;
              transform: rotate(45deg);
              -ms-transform: rotate(45deg);
              -moz-transform: rotate(45deg);
              -webkit-transform: rotate(45deg);
              -o-transform: rotate(45deg);
              p{
                margin: 0;
                font-size: 11px;
                font-weight: 300;
                transform: scale(.8);
                -ms-transform: scale(.8);   /* IE 9 */
                -moz-transform: scale(.8);  /* Firefox */
                -webkit-transform: scale(.8); /* Safari 和 Chrome */
                -o-transform: scale(.8);  /* Opera */
              }
            }
            .flag-blue{
              background-color: #52a8d7;
            }
            .flag-red{
              background-color: #fd8081;
            }
          }
        }
        &:hover{
          border-color: #fee1b7;
          background-color: #fee1b7;
          .sc_table-tr-td{
            .itd-first{
              border-left: 4px solid orange;
            }
          }
        }
      }
    }
    .sc_table-foot{
      margin-top: 10px;
      margin-bottom: -20px;
      text-align: right;
    }
  }
}
</style>
