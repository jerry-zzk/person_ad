<template>
  <d2-container class="page">
    <el-card  class="d2-mb">
    <el-row :gutter="10">
      <el-col :span="6" style="height:800px;">
          <d2-customer-list :item="item"></d2-customer-list>
      </el-col>
      <el-col :span="18">
        <div class="col col-l" style="margin-bottom:10px;">
          <p style="font-size:24px;">人员列表</p>
          <el-button size="small" type="success"></el-button> <span class="midd"> 安全 </span> <el-button size="small" type="danger"></el-button><span class="midd">欺诈</span><el-button size="small" type="info"></el-button><span class="midd">可疑</span><el-button size="small" type="warning"></el-button>
          <span class="midd" style="margin-right:20px;">待检测</span>
          <span @click="toggle1" :class="[toggle,to1]"><d2-icon-svg class="ic_svg" name="inewConsumerSubmit"/></span>
          <span @click="toggle2" :class="[toggle,to]"><d2-icon-svg class="ic_svg" name="iauditsMgt"/></span>
          <!-- <el-switch
            style="margin-top:6px;"
            v-model="value1"
            @change="toggle"
            active-color="#13ce46"
            inactive-color="#ff4949"
            active-icon-class="el-icon-tickets"
            inactive-icon-class="el-icon-menu">
          </el-switch> -->
        </div>
      </el-col>
      <el-col :span="18" v-show="ok">
        <div class="col col-l">
          <el-row :gutter="23">
            <el-col style="margin-bottom:10px;" :span="4" v-for="(list,index) in items" :key="list">
              <el-card shadow="hover" :body-style="{ padding: '0px' }">
                <img  @click="message()" v-bind:src="list.img" class="image" alt="图片">
                <p class="lis">姓名 <b>:</b> {{list.name}}</p>
                <p class="lis">电话 <b>:</b> {{list.phone}}</p>
                <p class="lis">状态 <b>:</b> &nbsp;<el-button size="mini" class="midd1" :type="list.status[index]"></el-button></p>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </el-col>

      <!--人员信息弹窗-->
      <people-info-popup></people-info-popup>

            <el-card v-show="!ok">
              <el-row :class="[zk_ul,{cli:zk_cli}]" v-for="(lb,index) in peo" :key="lb">
                <el-col :span="3">
                  <img src="../../assets/img/1.jpg" style="width:60%;vertical-align:middle;" alt="">
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
            </el-card>

      <!-- <el-card v-show="!ok">
        <el-row :gutter="10">
          <el-col :span="24">
          <div class="col col-l">
            <div shadow="hover" style="margin-bottom:10px;" v-for="(pic,index) in items" :key="pic" class="col col-r">
              <span class="ri">头像 <b>:</b> <span> &nbsp; <img  @click="message()" v-bind:src="pic.img" class="image2" alt="图片"> </span></span>
              <span class="ri">组名 <b>:</b> <span> {{pic.name}} </span></span>
              <span class="ri">电话 <b>:</b> <span> &nbsp; {{pic.phone}} </span></span>
              <span class="ri">状态 <b>:</b> <span> &nbsp; <el-button size="mini" class="midd1" :type="pic.status[index]"></el-button> </span></span>
            </div>
          </div>
        </el-col>
        </el-row>
      </el-card>-->
    </el-row>
  </el-card> 
  <div>
  </div>
  </d2-container>
</template>

<script>
import img1 from '../../assets/img/1.jpg'
import img3 from '../../assets/img/3.jpg'
import axios from '@/plugin/axios'
export default {
  name: 'page2',
  components:{
    // 'DemoTable': () => import('../table/index.vue'),
  },
  data () {
    return {
      zk_cli:false,
      zk_ul:'zk_ul',
      peo:[],
      toggle:"toggle",
      to:"to",
      to1:"to1",
      value1: true,
      value2: false,
      ok:"",
      dialogVisible: false,
      zk_name: 'zk',
      zk_phone: '15522322212',
      item: [
        { name: '组名1', danger_num: 23 ,num:101},
        { name: '组名2', danger_num: 21 ,num:101},
        { name: '组名3', danger_num: 22 ,num:101 },
        { name: '组名4', danger_num: 23 ,num:101},
        { name: 'zk2', danger_num: 23 ,num:101},
        { name: 'zk2', danger_num: 23 ,num:101},
        { name: 'zk2', danger_num: 23 ,num:101},
        { name: 'zk2', danger_num: 23,num:101},
        { name: 'zk2', danger_num: 23 ,num:1019},
        { name: 'zk2', danger_num: 23,num:103}
      ],
      dynamicTags: [],
      inputVisible: false,
      inputValue: '',
      items: [
        // { name: 'zk4', phone: 15522322212, status: 'danger', img: img1 },
        // { name: 'zk1', phone: 15652322212, status: 'success', img: img3 },
        // { name: 'zk2', phone: 15578956212, status: 'danger', img: img1 },
        // { name: 'zk2', phone: 15578956212, status: 'warning', img: img3 },
        // { name: 'zk2', phone: 15578956212, status: 'success', img: img1 },
        // { name: 'zk2', phone: 15578956212, status: 'warning', img: img3 },
        // { name: 'zk2', phone: 15578956212, status: 'danger', img: img1 },
        // { name: 'zk2', phone: 15578956212, status: 'success', img: img3 },
        // { name: 'zk2', phone: 15578956212, status: 'warning', img: img1 },
        // { name: 'zk2', phone: 15578956212, status: 'danger', img: img3 }
      ]
    }
  },
  mounted:function(){
    this.ajax()
    this.ajax1()
  },
  methods: {
    ajax1(){
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
    // mock 数据请求
    ajax () {
      axios({
        url: '/qz',
        method: 'post',
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

    toggle1 () {
      this.to ="to1"
      this.to1 ="to"
      this.ok = true
      this.ajax()
      // alert(this.ok);
    },
    toggle2 () {
      this.ajax()
      this.to ="to"
      this.to1 ="to1"
      this.ok = false
      // alert(this.ok);
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
    }
  }
}
</script>

<style lang="scss" scoped>
.ic_svg{
    height:10px;
    width:10px;
    margin-right:3px;
    vertical-align: center;
  }
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
  .toggle{
    margin:0;
    /* border:1px solid #ccc; */
    border-radius:0;
    text-align:center;
    border-radius: 3px;
    height:20px;
    line-height: 24px;
    width:40px;
    font-size:13px;
    display:inline-block;
    background: #a0cfff;
    color:#FFF;
    margin-top:6px;
    display: inline-block;
    vertical-align: middle;
    width:50px;
    height:23px;
    line-height:23px;
  }
  .to{
    background: #409EFF;
  }
  .toggle:hover{
    background: #409EFF;
    color:#fff;
    cursor: pointer;
    font-size:13px;
  }


  .ri{
    margin-right:5%;
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
    line-height:32px;
    width:40px;
  }
  .lis {
    margin-left:17px;
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
  .image2{
    width:5%;
    vertical-align: middle;
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
