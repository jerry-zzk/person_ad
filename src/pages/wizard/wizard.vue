<template class="page">
    <vue-good-wizard :steps="steps"
        :onNext="nextClicked" :onBack="backClicked">
        <div slot="page1">
          <!-- <el-card> -->
            <el-row :gutter="10" v-for="(card,index) in item" :key="card" style="margin-bottom:20px;text-align:center;cursor:pointer;">
              <el-col :span="24">
                <div class="col col-r" @click="choose(index)">
                  {{card.name}}
                </div>
              </el-col>
            </el-row>
          <!-- </el-card> -->
        </div>
        <div slot="page2">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
          <el-form-item label="姓名" prop="name">
          <el-input size="small" class="" v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="出生日期" prop="born">
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.born" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="身份证号" prop="num">
          <el-input size="small" class="" v-model="ruleForm.num"></el-input>
          </el-form-item>
          <el-form-item label="手机号码" prop="phoneNum">
          <el-input size="small" class="" v-model="ruleForm.phoneNum"></el-input>
          </el-form-item>
          <el-form-item label="家庭住址" prop="address">
          <el-input size="small" class="" v-model="ruleForm.address"></el-input>
           </el-form-item>
          <!--<el-form-item label="学生/员工" prop="name">
          <el-input size="small" class="in"></el-input>
          </el-form-item>
          <el-form-item label="籍贯" prop="name">
          <el-input size="small" class="in"></el-input>
          </el-form-item>
          <el-form-item label="亲属姓名" prop="name">
          <el-input size="small" class="in"></el-input>
          </el-form-item>
          <el-form-item label="亲属住址" prop="name">
          <el-input size="small" class="in"></el-input>
          </el-form-item>
          <el-form-item label="亲属手机号码" prop="name">
          <el-input size="small" class="in"></el-input>
          </el-form-item>
          <el-form-item label="已申请的信用卡" prop="name">
          <el-input size="small" class="in"></el-input>
          </el-form-item>
          <el-form-item label="已申请贷款等" prop="name">
          <el-input size="small" class="in"></el-input>
          </el-form-item> -->
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
          </el-form>
          </div>
        <div slot="page3">
          <el-row :gutter="10" style="margin-bottom:10px;">
            <el-col :span="24">
              <div class="col col-r" >
                  姓名 <b>:</b> {{na}}
              </div>
            </el-col>
          </el-row>
          </el-row>
          <el-row :gutter="10" style="margin-bottom:10px;">
            <el-col :span="24">
              <div class="col col-r" >
                  出生年月 <b>:</b> {{bo}}
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="10" style="margin-bottom:10px;">
            <el-col :span="24">
              <div class="col col-r">
                  身份证号 <b>:</b> {{pNum}}
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="10" style="margin-bottom:10px;">
            <el-col :span="24">
              <div class="col col-r" >
                  手机号码 <b>:</b> {{phNum}}
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="10" style="margin-bottom:10px;">
            <el-col :span="24">
              <div class="col col-r" >
                  家庭住址 <b>:</b> {{adr}}
              </div>
            </el-col>
          </el-row>
        </div>
      </vue-good-wizard>
</template>

<script>
export default {
  data () {
    return {
      na:'zk',
      bo:'2000-1-1',
      pNum: 145612345623,
      phNum: 1556465465,
      adr:"山西省孝义市xxxxx",
      ruleForm: {
          name: '',
          born: '',
          num: '',
          phoneNum: '',
          address: ''
      },
      rules: {
          name: [
            { required: true, message: '请输入您的真实姓名', trigger: 'blur' },
          ],
          born: [
            { required: true, message: '请选择出生日期', trigger: ' blur' },
          ],
          num: [
            { type: 'number', required: true, message: '请输入身份证号', trigger: 'blur' },
          ],
          phoneNum: [
            { required: true, message: '请输入手机号', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '家庭地址', trigger: 'blur' }
          ]
      },
      index:0,
      item:[
        { name:'api接口' },
        { name:'扫描添加'},
        { name:'批量导入' },
        { name:'表单添加'},
      ],
      steps: [
        {
          label: '选择方式',
          slot: 'page1'
        },
        {
          label: '表格填写',
          slot: 'page2'
        },
        {
          label: '提交信息',
          slot: 'page3',
          options: {
            nextDisabled: true
          }
        }
      ]
    }
  },
  methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    onSubmit() {
      alert('submit!');
    },
    choose (index) {
      this.index = index
      this.$confirm(`您选择的是${this.item[this.index].name}`, '选择方式', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
    },
    nextClicked (currentPage) {
      console.log('next clicked', currentPage)
      return true // return false if you want to prevent moving to next page
    },
    backClicked (currentPage) {
      console.log('back clicked', currentPage)
      return true // return false if you want to prevent moving to previous page
    }
  }
}
</script>
<style lang="scss" scope>
.ro{
  margin-bottom: 20px;
}
.ri{
  margin-right:5%;
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
.midd1{
    display: inline-block;
    vertical-align: middle;
    height:20px;
    line-height:6px;
    width:40px;
  }
</style>

