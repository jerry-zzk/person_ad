<template>
  <d2-container>
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
      data: [
        {
          'content': 'hello world',
          'flow_no': 'FW201601010004',
          'flow_type': 'Help',
          'flow_type_code': 'help'
        }, {
          'content': 'hello world',
          'flow_no': 'FW201601010004',
          'flow_type': 'Help',
          'flow_type_code': 'help'
        }, {
          'content': 'hello world',
          'flow_no': 'FW201601010004',
          'flow_type': 'Help',
          'flow_type_code': 'help'
        }, {
          'content': 'hello world',
          'flow_no': 'FW201601010004',
          'flow_type': 'Help',
          'flow_type_code': 'help'
        }
      ],
      titles: [{
        prop: 'flow_no',
        label: 'NO.'
      }, {
        prop: 'content',
        label: 'Content'
      }, {
        prop: 'flow_type',
        label: 'Type'
      }, {
        prop: 'flow_type_code',
        label: 'Hehe'
      }]
    }
  }
}
</script>
<style scope>
</style>
