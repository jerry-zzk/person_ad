<template>
  <div id="shgl" style="height: calc(100vh - 100px)">
    <div style="height: 70px;width: 100%;border: 1px solid rgba(0,0,0,0.2)">
      <div class="tj">
        <li style="text-align: center;width:120px">信贷种类：</li>
        <li>
          <input id="all" type="checkbox">
          <label for="all">全部</label>
        </li>
        <li>
          <input id="1" type="checkbox">
          <label for="1">信用贷客户</label>
        </li>
        <li>
          <input id="2" type="checkbox">
          <label for="2">  抵押贷客户</label>
        </li>
        <li>
          <input id="3" type="checkbox">
          <label for="3">xx贷客户</label>
        </li>
      </div>
      <div class="tj">
        <li style="text-align: center;width:120px">申请时间：</li>
        <li>
          <input id="4" type="checkbox">
          <label for="4">最近一天</label>
        </li>
        <li>
          <input id="5" type="checkbox">
          <label for="5">最近一周</label>
        </li>
        <li>
          <input id="6" type="checkbox">
          <label for="6">最近一月</label>
        </li>
        <li style="width: 355px">
          <input id="7" type="checkbox">
          <label for="7">自定</label>
          <span style="display: inline-block;margin-left: 16px">
             <el-date-picker
                     size="mini"
                     class="in"
                     type="datetime"
                     placeholder="选择日期时间">
          </el-date-picker>
          </span>
          --
          <span style="display: inline-block">
             <el-date-picker
                     size="mini"
                     class="in"
                     type="datetime"
                     placeholder="选择日期时间">
          </el-date-picker>
          </span>
        </li>
      </div>
    </div>
    <el-col :span="5" class="list">
        <d2-customer-list :item="items">
        </d2-customer-list>
    </el-col>
    <el-col :span="19" class="table">
      <div class="header">
         <el-col style="border-radius: 8px 0 0 0 " :span="2">姓名</el-col>
         <el-col :span="2">性别</el-col>
         <el-col :span="2">年龄</el-col>
         <el-col :span="3">手机号</el-col>
         <el-col :span="5">身份证号</el-col>
         <el-col :span="2">种类</el-col>
         <el-col :span="3">时间</el-col>
         <el-col :span="2">地址</el-col>
         <el-col style="border-radius:0 8px  0 0 " :span="3">评分</el-col>
      </div>
      <div class="table-list">
        <div>
          <li v-for="item in list"  @click="openPeopleInfoPopup">
            <div class="border"></div>
            <el-col :span="2">{{item.name}}</el-col>
            <el-col :span="2">{{item.sex}}</el-col>
            <el-col :span="2">{{item.age}}</el-col>
            <el-col :span="3">{{item.phone}}</el-col>
            <el-col :span="5">{{item.idcard}}</el-col>
            <el-col :span="2">{{item.type}}</el-col>
            <el-col :span="3">{{item.time}}</el-col>
            <el-col :span="2">{{item.addr}}</el-col>
            <el-col :span="3" style="color: #ff4b35;font-weight: 600;position: relative;overflow: hidden;font-size: 18px">
              {{item.fen}}
              <span class="tg">
                已通过
              </span>
            </el-col>
          </li>
        </div>

      </div>
    </el-col>
    <people-info-popup :is_input="true"></people-info-popup>
  </div>
</template>
<script>
  export default {
      data(){
          return{
              items: [
                  { name: '分组1', num: 15522322, danger_num: '123', status: 'danger' },
                  { name: '分组2', num: 15522212, danger_num: '123', status: 'success' },
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
              list:[
                  {name:'gcx', sex:'男', age:'15', phone:'13651161512', idcard:'1564231564321654615', type:"type", time:'2012-12-12', addr:'详细', fen:'90'},
                  {name:'gcx', sex:'男', age:'15', phone:'13651161512', idcard:'1564231564321654615', type:"type", time:'2012-12-12', addr:'详细', fen:'90'},
                  {name:'gcx', sex:'男', age:'15', phone:'13651161512', idcard:'1564231564321654615', type:"type", time:'2012-12-12', addr:'详细', fen:'90'},
                  {name:'gcx', sex:'男', age:'15', phone:'13651161512', idcard:'1564231564321654615', type:"type", time:'2012-12-12', addr:'详细', fen:'90'},
                  {name:'gcx', sex:'男', age:'15', phone:'13651161512', idcard:'1564231564321654615', type:"type", time:'2012-12-12', addr:'详细', fen:'90'},
                  {name:'gcx', sex:'男', age:'15', phone:'13651161512', idcard:'1564231564321654615', type:"type", time:'2012-12-12', addr:'详细', fen:'90'},
                  {name:'gcx', sex:'男', age:'15', phone:'13651161512', idcard:'1564231564321654615', type:"type", time:'2012-12-12', addr:'详细', fen:'90'},
                  {name:'gcx', sex:'男', age:'15', phone:'13651161512', idcard:'1564231564321654615', type:"type", time:'2012-12-12', addr:'详细', fen:'90'},
                  {name:'gcx', sex:'男', age:'15', phone:'13651161512', idcard:'1564231564321654615', type:"type", time:'2012-12-12', addr:'详细', fen:'90'},
                  {name:'gcx', sex:'男', age:'15', phone:'13651161512', idcard:'1564231564321654615', type:"type", time:'2012-12-12', addr:'详细', fen:'90'}
              ]
          }
      },
      methods:{
          openPeopleInfoPopup() {
              console.log("fds")
              this.$store.commit('setData', true)
          }
      }
  }
</script>
<style lang="scss" scoped>
#shgl{
  .tj{
    height: 35px;
    line-height: 35px;
    color: #585858;
    li{
      list-style: none;
      float: left;
      width: 160px;
      font-size: 14px;
      text-align: left;
      span{
        cursor: pointer;
      }
      input[type=checkbox]{
        display: inline-block;
        position: relative;
        top: 2px;
        transform: scale(1.2);
        margin-right: 4px;
      }
    }
  }
  .list{
    height: calc(100% - 73px);
  }
  .table{
    height: calc(100% - 73px);
    padding: 10px;
    box-sizing: border-box;
    .header{
      height: 50px;
      line-height: 50px;
      text-align: center;

      color: white;
      font-size: 14px;
      margin-bottom: 6px;
      div{
        border-right: 1px solid white;
        background: rgb(64,158,254) ;
      }
    }
    .table-list{
      list-style: none;
      background: white;
      li{
        height: 50px;
        line-height: 50px;
        font-size: 14px;
        text-align: center;
        line-height: 50px;
        color: #3c3c3c;
        position: relative;
        overflow: hidden;
        .border{
          width: 4px;
          height: 50px;
          background: orange;
          position: absolute;
          left: 0;
          border: none!important;
          display: none;
        }
        &:hover{
          background: rgb(254,225,183);

          .border{
            display: block;
          }
        }
        div{
          border-left:1px solid rgba(0,0,0,0.1);
          border-right:1px solid rgba(0,0,0,0.1);
          border-bottom:1px solid rgba(0,0,0,0.5);
          border-top:1px solid rgba(0,0,0,0.5);
        }
        .tg{
          position: absolute;
          display: inline-block;
          width: 80%;
          height: 24px;
          background: rgb(64,158,254) ;
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
          color: white;
          font-size: 12px;
          line-height: 24px;
          top: 7px;
          right: -34px;
        }
      }
    }
  }
}
</style>

