<template>
  <d2-container class="page">
    <el-card  class="d2-mb">
    <el-row :gutter="10">
      <el-col :span="6" style="height: 800px">
          <d2-customer-list :item="item"></d2-customer-list>
      </el-col>
      <el-col :span="18">
        <div class="col col-l" style="margin-bottom:10px;">
          <p style="font-size:24px;">人员列表</p>
          <el-button size="small" type="success"></el-button> <span class="midd"> 安全 </span> <el-button size="small" type="danger"></el-button><span class="midd">欺诈</span><el-button size="small" type="info"></el-button><span class="midd">可疑</span><el-button size="small" type="warning"></el-button>
          <span class="midd" style="margin-right:20px;">待检测</span>
          <span @click="toggle1" :class="[toggle,to1]">表格</span>
          <span @click="toggle2" :class="[toggle,to]">列表</span>
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
            <el-col style="margin-bottom:10px;" :span="4" v-for="list in items" :key="list">
              <el-card shadow="hover" :body-style="{ padding: '0px' }">
                <img  @click="message()" v-bind:src="list.img" class="image" alt="图片">
                <p class="lis">姓名 <b>:</b> {{list.name}}</p>
                <p class="lis">电话 <b>:</b> {{list.phone}}</p>
                <p class="lis">状态 <b>:</b> &nbsp;<el-button size="mini" class="midd1" :type="list.status"></el-button></p>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </el-col>

      <el-card v-show="!ok">
        <el-row :gutter="10">
          <el-col :span="24">
          <div class="col col-l">
            <div shadow="hover" style="margin-bottom:10px;" v-for="pic in items" :key="pic" class="col col-r">
              <span class="ri">头像 <b>:</b> <span> &nbsp; <img  @click="message()" v-bind:src="pic.img" class="image2" alt="图片"> </span></span>
              <span class="ri">组名 <b>:</b> <span> {{pic.name}} </span></span>
              <span class="ri">电话 <b>:</b> <span> &nbsp; {{pic.phone}} </span></span>
              <span class="ri">状态 <b>:</b> <span> &nbsp; <el-button size="mini" class="midd1" :type="pic.status"></el-button> </span></span>
            </div>
          </div>
        </el-col>
        </el-row>
      </el-card>
    </el-row>
  </el-card>
  <div>
    <!-- 全屏详细信息 -->
    <el-dialog
      :title="tooltipContent"
      :fullscreen="true"
      :visible.sync="dialogVisible"
      :append-to-body="true">
      <div class="d2-mb-10">
        <el-card  class="d2-mb">
          <el-row :gutter="10" style="margin-bottom:15px;">
            <el-col :span="24">
              <div class="col col-l">
                <el-button class="button-new-tag" size="small" @click="showInput">添加标签</el-button>
                <el-tag
                :key="index"
                v-for="tag,index in dynamicTags"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)">
                {{tag}}
              </el-tag>
              <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm"
              >
              </el-input>
              </div>
            </el-col>
          </el-row>
          <p style="font-size:24px;">个人详细信息</p>
          <el-row :gutter="10">
            <el-col :span="5">
              <div class="col col-d">
                <img src="../../assets/img/1.jpg" class="image1" alt="">
                <span style="display:inline-block;height:130px;width:170px;overflow-x:hidden;">
                  <el-tag
                    :key="tag"
                    v-for="tag in dynamicTags"
                    closable
                    :disable-transitions="false"
                    @close="handleClose(tag)">
                    {{tag}}
                  </el-tag>
                </span>
                <p>姓名 <b>:</b> {{zk_name}}</p>
                <p>电话 <b>:</b> {{zk_phone}}</p>
                <p>状态 <b>:</b> &nbsp;&nbsp;<el-button size="mini" class="midd1" type="danger"></el-button></p>
              </div>
            </el-col>
            <el-col :span="18">
              <div class="col col-d">
                （1）欺诈告警  对该企业新检查发现的欺诈客户向业务人员进行告警，由业务人员标记后从告警中移除。告警主要让业务人员对欺诈行为及时处理。
                      其中告警内容需要多方面的展示欺诈检测不同指标内容。
                      在审核的过程中，欺诈告警就已经在后台逐渐产生，产生一个告警一个。
                      审核的结果报告单独页面展示，能够快速让业务人员发现问题，做出评判。<br>
                （2）欺诈告警  对该企业新检查发现的欺诈客户向业务人员进行告警，由业务人员标记后从告警中移除。告警主要让业务人员对欺诈行为及时处理。
                      其中告警内容需要多方面的展示欺诈检测不同指标内容。
                      在审核的过程中，欺诈告警就已经在后台逐渐产生，产生一个告警一个。
                      审核的结果报告单独页面展示，能够快速让业务人员发现问题，做出评判。<br>
               （3）欺诈告警  对该企业新检查发现的欺诈客户向业务人员进行告警，由业务人员标记后从告警中移除。告警主要让业务人员对欺诈行为及时处理。
                      其中告警内容需要多方面的展示欺诈检测不同指标内容。
                      在审核的过程中，欺诈告警就已经在后台逐渐产生，产生一个告警一个。
                      审核的结果报告单独页面展示，能够快速让业务人员发现问题，做出评判。<br>
               （4）欺诈告警  对该企业新检查发现的欺诈客户向业务人员进行告警，由业务人员标记后从告警中移除。告警主要让业务人员对欺诈行为及时处理。
                      其中告警内容需要多方面的展示欺诈检测不同指标内容。
                      在审核的过程中，欺诈告警就已经在后台逐渐产生，产生一个告警一个。
                      审核的结果报告单独页面展示，能够快速让业务人员发现问题，做出评判。<br>
                （1）欺诈告警  对该企业新检查发现的欺诈客户向业务人员进行告警，由业务人员标记后从告警中移除。告警主要让业务人员对欺诈行为及时处理。
                      其中告警内容需要多方面的展示欺诈检测不同指标内容。
                      在审核的过程中，欺诈告警就已经在后台逐渐产生，产生一个告警一个。
                      审核的结果报告单独页面展示，能够快速让业务人员发现问题，做出评判。<br>
                （2）欺诈告警  对该企业新检查发现的欺诈客户向业务人员进行告警，由业务人员标记后从告警中移除。告警主要让业务人员对欺诈行为及时处理。
                      其中告警内容需要多方面的展示欺诈检测不同指标内容。
                      在审核的过程中，欺诈告警就已经在后台逐渐产生，产生一个告警一个。
                      审核的结果报告单独页面展示，能够快速让业务人员发现问题，做出评判。<br>
               （3）欺诈告警  对该企业新检查发现的欺诈客户向业务人员进行告警，由业务人员标记后从告警中移除。告警主要让业务人员对欺诈行为及时处理。
                      其中告警内容需要多方面的展示欺诈检测不同指标内容。
                      在审核的过程中，欺诈告警就已经在后台逐渐产生，产生一个告警一个。
                      审核的结果报告单独页面展示，能够快速让业务人员发现问题，做出评判。<br>
                （4）欺诈告警  对该企业新检查发现的欺诈客户向业务人员进行告警，由业务人员标记后从告警中移除。告警主要让业务人员对欺诈行为及时处理。
                      其中告警内容需要多方面的展示欺诈检测不同指标内容。
                      在审核的过程中，欺诈告警就已经在后台逐渐产生，产生一个告警一个。
                      审核的结果报告单独页面展示，能够快速让业务人员发现问题，做出评判。<br>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </div>
    </el-dialog>

    <!-- <demo-table>table</demo-table> -->
  </div>
  </d2-container>
</template>

<script>
import img1 from '../../assets/img/1.jpg'
import img3 from '../../assets/img/3.jpg'
// import zkData from '@/api/demo/plugins/mock/ajax'
export default {
  name: 'page2',
  components:{
    // 'DemoTable': () => import('../table/index.vue'),
  },
  data () {
    return {
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
      dynamicTags: [],
      inputVisible: false,
      inputValue: '',
      items: [
        { name: 'zk4', phone: 15522322212, status: 'danger', img: img1 },
        { name: 'zk1', phone: 15652322212, status: 'success', img: img3 },
        { name: 'zk2', phone: 15578956212, status: 'danger', img: img1 },
        { name: 'zk2', phone: 15578956212, status: 'warning', img: img3 },
        { name: 'zk2', phone: 15578956212, status: 'success', img: img1 },
        { name: 'zk2', phone: 15578956212, status: 'warning', img: img3 },
        { name: 'zk2', phone: 15578956212, status: 'danger', img: img1 },
        { name: 'zk2', phone: 15578956212, status: 'success', img: img3 },
        { name: 'zk2', phone: 15578956212, status: 'warning', img: img1 },
        { name: 'zk2', phone: 15578956212, status: 'danger', img: img3 }
      ]
    }
  },
  methods: {
    toggle1 () {
      this.to ="to1"
      this.to1 ="to"
      this.ok = true
      // alert(this.ok);
    },
    toggle2 () {
      this.to ="to"
      this.to1 ="to1"
      this.ok = false
      // alert(this.ok);
    },
    message () {
      this.dialogVisible = true
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
  .toggle{
    margin:0;
    /* border:1px solid #ccc; */
    border-radius:0;
    text-align:center;
    border-radius: 3px;
    height:20px;
    line-height: 24px;
    width:50px;
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
