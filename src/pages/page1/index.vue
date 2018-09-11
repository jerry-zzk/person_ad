<template>
  <d2-container>
    <el-card>
      <el-row :gutter="10">
        <el-col :span="6">
          <div class="col col-l">
            <!-- <el-button icon="el-icon-search"></el-button> -->
            <el-select
              v-model="value9"
              multiple
              filterable
              remote
              reserve-keyword
              placeholder="请输入关键词"
              :remote-method="remoteMethod"
              :loading="loading" style="width:100%;">
              <el-option
                v-for="item in options4"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="col col-l">
            <p></p>
            <p></p>
          </div>
        </el-col><el-col :span="6">
          <div class="col col-l">
            <p></p>
            <p></p>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="col col-r">
            <el-button type="primary" @click="add">添加客户组</el-button>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <data-tables :data="data">
      <el-table-column v-for="title in titles" :prop="title.prop" :label="title.label" :key="title.label" sortable="custom">
      </el-table-column>
    </data-tables>
  </d2-container>
</template>

<script>
export default {
  name: 'page1',
  data () {
    return {
      tableProps: {
        border: true
      },
      data: [{
        'group': '1组',
        'name': 'zk',
        'phone': '15546355536',
        'num': '300'
      }, {
        'group': '2组',
        'name': 'zk',
        'phone': '15546355536',
        'num': '300'
      }, {
        'group': '4组',
        'name': 'zk',
        'phone': '15546355536',
        'num': '300'
      }, {
        'group': '5组',
        'name': 'zk',
        'phone': '15546355536',
        'num': '300'
      }, {
        'group': '9组',
        'name': 'zk',
        'phone': '15546355536',
        'num': '300'
      }, {
        'group': '11组',
        'name': 'zk',
        'phone': '15546355536',
        'num': '300'
      }, {
        'group': '13组',
        'name': 'zk',
        'phone': '15546355536',
        'num': '300'
      }, {
        'group': '15组',
        'name': 'zk',
        'phone': '15546355536',
        'num': '300'
      }],
      titles: [{
        prop: 'group',
        label: '客户组'
      }, {
        prop: 'name',
        label: '姓名'
      }, {
        prop: 'phone',
        label: '电话'
      }, {
        prop: 'num',
        label: '人数'
      }, {
        prop: 'do',
        label: '操作'
      }]
    }
  },
  methods: {
    add () {
      this.$alert('请选择方式', '添加客户组', {
        confirmButtonText: '确定'
      })
    }
  }
}
</script>
<style scope>
</style>
