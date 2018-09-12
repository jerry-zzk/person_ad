<template>
  <el-form
    :inline="true"
    :model="form"
    :rules="rules"
    ref="form"
    size="mini"
    style="margin-bottom: -18px;">

    <el-form-item label="原因配型" prop="type">
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
    </el-form-item>

    <el-form-item label="用户名" prop="user">
      <el-input
        v-model="form.user"
        placeholder="用户"
        style="width: 100px;"/>
    </el-form-item>

    <el-form-item label="身份证号" prop="id">
      <el-input
        v-model="form.id"
        placeholder="身份证号"
        style="width: 120px;"/>
    </el-form-item>

    <el-form-item label="电话号" prop="phone">
      <el-input
        v-model="form.phone"
        placeholder="电话号"
        style="width: 120px;"/>
    </el-form-item>

    <el-form-item>
      <el-button
        type="primary"
        @click="handleFormSubmit">
        <d2-icon name="search"/>
        查询
      </el-button>
    </el-form-item>

    <el-form-item>
      <el-button
        @click="handleFormReset">
        <d2-icon name="refresh"/>
        重置
      </el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary"
        @click="add">
        <d2-icon name="add"/>
        添加客户组
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      form: {
        type: '1',
        user: 'hahahaha',
        key: '',
        note: ''
      },
      rules: {
        type: [ { required: true, message: '请选择一个状态', trigger: 'change' } ],
        user: [ { required: true, message: '请输入用户', trigger: 'change' } ]
      }
    }
  },
  methods: {
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
