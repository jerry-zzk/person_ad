<template>
  <el-form
    :inline="true"
    :model="form"
    :rules="rules"
    ref="form"
    size="mini"
    style="margin-bottom: -2px;text-align:right;">

    <!-- <el-form-item label="原因配型" prop="type">
      <el-select
        v-model="form.type"
        placeholder="状态选择"
        style="width: 100px;">
        <el-option label="电话" value="1"/>
        <el-option label="邮箱" value="2"/>
        <el-option label="身份证" value="3"/>
        <el-option label="地址" value="4"/>
        <el-option label="姓名" value="5"/>
      </el-select>
    </el-form-item> -->

    <!-- <el-form-item label="姓名" prop="user">
      <el-input
        v-model="form.user"
        placeholder="姓名"
        style="width: 100px;"/>
    </el-form-item>

    <el-form-item label="身份证号" prop="id">
      <el-input
        v-model="form.id"
        placeholder="身份证号"
        style="width: 180px;"/>
    </el-form-item>

    <el-form-item label="电话号" prop="phone">
      <el-input
        v-model="form.phone"
        placeholder="电话号"
        style="width: 120px;"/>
    </el-form-item>
     -->

    <!-- <el-form-item>
      <el-button
        type="primary"
        @click="handleFormSubmit">
        <d2-icon name="search"/>
        查询
      </el-button>
    </el-form-item> -->

    <!-- <el-form-item>
      <el-button
        @click="handleFormReset">
        <d2-icon name="refresh"/>
        重置
      </el-button>
    </el-form-item> -->
    <!-- <el-form-item>
      <el-button type="primary"
        @click="add">
        <d2-icon name="add"/>
        添加客户组
      </el-button>
    </el-form-item> -->

    <!-- <el-form-item>
      <el-pagination
        style="margin-right:20px;"
        :current-page="current"
        layout="prev, next, jumper">
      </el-pagination>
    </el-form-item> -->

    <el-form-item>
      <span style="font-family:'微软雅黑';display:inline-block;height:27px;width:36px;font-size:15px;color:#666">{{pa}} / {{pag}}</span>
    </el-form-item>

    <el-form-item>
      <div class="triangle_border_left">
          <span></span>
      </div>
      <div class="triangle_border_right">
          <span></span>
      </div>
    </el-form-item>

    <el-form-item>
      <!-- <div @click="add1" v-for="(id,index) in items" :key="id" :class="[toggle]">{{id.name}}</div> -->
      <!-- <el-button
        style="margin-right:30px;"
        type="primary"
        @click="handleFormSubmit">
        <d2-icon name="search"/>
        查询
      </el-button> -->
      <div @click="add1":class="[toggle,to1]"><d2-icon-svg class="ic_svg" name="inewConsumerSubmit"/></div>
      <div @click="add2" :class="[toggle,to]" ref="bg"><d2-icon-svg class="ic_svg" name="iauditsMgt"/></div>
      <div class="clear:both"></div>
      <!-- <el-switch
        v-model="value2"
        @change="add1"
        active-color="#13ce46"
        inactive-color="#ff4949"
        inactive-icon-class="el-icon-tickets"
        active-icon-class="el-icon-menu"> 
      </el-switch> -->
    </el-form-item>

  </el-form>
</template>

<script>
export default {
  data () {
    return {
      pa:1,
      pag:1,
      active:0,
      toggle:"toggle",
      to:"to",
      to1:"to1",
      ok:"",
      value1: true,
      value2: true,
      form: {
        type: '1',
        user: 'zk',
        key: '',
        note: ''
      },
      rules: {
        type: [ { required: true, message: '请选择一个状态', trigger: 'change' } ],
        user: [ { required: true, message: '请输入用户', trigger: 'change' } ]
      },
      items:[
        {name:"表格"},
        {name:"列表"}
      ]
    }
  },
  methods: {
    add1 (index) {
      
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$emit('submit', this.form)
        } else {
          this.$notify.error({
            title: '错误',
            message: '表单校验失败'
          })
          return false
        }
      })

      // if(this.ok == false){
      //   this.ok = true
      //   this.$emit('zk',this.ok)
      // }else{
      //   this.ok = false
      //   this.$emit('zk',this.ok)
      // }
      this.ok = false
      this.$emit('zk',this.ok)
      this.to ="to1"
      this.to1 ="to"
      // console.log(this.$refs.bg);
      // alert(this.ok)
    },
    add2 () {
      this.ok = true
      this.$emit('zk',this.ok)
      this.to ="to"
      this.to1 ="to1"
      // alert(this.ok)
    },
    add () {
      this.$alert('请选择方式', '添加客户组', {
        confirmButtonText: '确定'
      })
    },
    handleFormSubmit () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$emit('submit', this.form)
        } else {
          this.$notify.error({
            title: '错误',
            message: '表单校验失败'
          })
          return false
        }
      })
    },
    handleFormReset () {
      this.$refs.form.resetFields()
    }
  }
}
</script>
<style>
.triangle_border_right{
    margin:0;
    border:1px solid #ccc; 
    border-radius:0;
    text-align:center;
    border-radius: 2px;
    width:36px;
    height:27px;
    display:inline-block;
    color:#FFF;
    cursor:pointer;
    background:#046AF3;
    position:relative;
}
.triangle_border_right span{
    width: 0;
    height: 0;
    border-left: 10px solid #fff;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    position:absolute;
    top:8px;
    left:15px;
}
.triangle_border_left{
    margin-right:5px;
    margin-left:10px;
    border:1px solid #ccc; 
    border-radius:0;
    text-align:center;
    border-radius: 2px;
    width:36px;
    height:27px;
    display:inline-block;
    color:#FFF;
    cursor:pointer;
    background:#046AF3;
    position:relative;
}
.triangle_border_left span{
    width: 0;
    height: 0;
    border-right: 10px solid #fff;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    position:absolute;
    top:8px;
    left:15px;
}
  .toggle{
    margin:0;
    margin-left:-1px;
    border:1px solid #ccc;
    box-shadow: 0 0 5px #ccc inset;
    border-radius:0;
    text-align:center;
    border-radius: 2px;
    width:35px;
    font-size:13px;
    display:inline-block;
    background: #fff;
    color:#FFF;
    cursor:pointer;
  }
  .to{
    background: #046AF3;
  }
  .ic_svg{
    height:10px;
    width:10px;
    margin-right:3px;
    vertical-align: center;
  }
</style>

