<template>
  <div>
    <el-form
      :inline="true"
      size="mini">
      <el-form-item :label="`已选数据下载 [ ${currentTableData.length} ]`">
        <el-button-group>
          <el-button
            type="primary"
            size="mini"
            :disabled="currentTableData.length === 0"
            @click="handleDownloadXlsx(currentTableData)">
            xlsx
          </el-button>
          <el-button
            type="primary"
            size="mini"
            :disabled="currentTableData.length === 0"
            @click="handleDownloadCsv(currentTableData)">
            csv
          </el-button>
        </el-button-group>
      </el-form-item>
      <el-form-item :label="`已选数据下载 [ ${multipleSelection.length} ]`">
        <el-button-group>
          <el-button
            type="primary"
            size="mini"
            :disabled="multipleSelection.length === 0"
            @click="handleDownloadXlsx(multipleSelection)">
            xlsx
          </el-button>
          <el-button
            type="primary"
            size="mini"
            :disabled="multipleSelection.length === 0"
            @click="handleDownloadCsv(multipleSelection)">
            csv
          </el-button>
        </el-button-group>
      </el-form-item>
    </el-form>

    <el-table
      :data="currentTableData"
      v-loading="loading"
      size="mini"
      stripe
      style="width: 100%;"
      @selection-change="handleSelectionChange">

      <el-table-column
        type="selection"
        width="55">
      </el-table-column>

      <el-table-column label="姓名" width="100" align="center" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          {{scope.row.admin}}
        </template>
      </el-table-column>

      <el-table-column label="出生年月" width="120"  align="center" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          <!-- <el-tag
            size="mini"
            type="success"> -->
            {{scope.row.dateTimeUse}}
          <!-- </el-tag> -->
        </template>
      </el-table-column>

      <el-table-column label="手机号码" width="100" align="center" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          {{scope.row.phone}}
        </template>
      </el-table-column>

      <el-table-column label="家庭住址" align="center" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          {{scope.row.address}}
        </template>
      </el-table-column>

      <el-table-column label="学生/员工" width="80" align="center">
        <template slot-scope="scope">
          {{scope.row.admin}}
        </template>
      </el-table-column>

      <el-table-column label="籍贯" align="center" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          {{scope.row.address}}
        </template>
      </el-table-column>

      <el-table-column label="亲属姓名" width="80" align="center" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          {{scope.row.admin}}
        </template>
      </el-table-column>

      <el-table-column label="亲属住址" align="center" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          {{scope.row.address}}
        </template>
      </el-table-column>

      <el-table-column label="亲属手机号码" width="120" align="center" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          {{scope.row.phone}}
        </template>
      </el-table-column>
      <el-table-column label="已申请的信用卡" align="center" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          {{scope.row.card}}
        </template>
      </el-table-column>
      <el-table-column label="已申请贷款" width="150" align="center" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          {{scope.row.money}}
        </template>
      </el-table-column>

      <el-table-column label="添加操作" width="100" align="center">
        <template slot-scope="scope">
          <el-button size="mini"  @click="message"> + </el-button>
        </template>
      </el-table-column>

      <!-- 全屏详细信息 -->
    <el-dialog
      :title="tooltipContent"
      :fullscreen="true"
      :visible.sync="dialogVisible"
      :append-to-body="true">
      <vue-good-wizard :steps="steps"
        :onNext="nextClicked" :onBack="backClicked">
        <div slot="page1">
          <h4>Step 1</h4>
          <p>This is step 1</p>
        </div>
        <div slot="page2">
          <h4>Step 2</h4>
          <p>This is step 2</p>
        </div>
        <div slot="page3">
          <h4>Step 3</h4>
          <p>This is step 3</p>
        </div>
        <div slot="page4">
          <h4>Step 4</h4>
          <p>This is step 4</p>
        </div>
      </vue-good-wizard>
    </el-dialog>
    </el-table>
  </div>
</template>

<script>
import BooleanControl from '../BooleanControl'
import BooleanControlMini from '../BooleanControlMini'
export default {
  components: {
    BooleanControl,
    BooleanControlMini
  },
  props: {
    tableData: {
      default: () => []
    },
    loading: {
      default: false
    }
  },
  data () {
    return {
      steps: [
        {
          label: '第一步',
          slot: 'page1'
        },
        {
          label: '第二步',
          slot: 'page2'
        },
        {
          label: '第三步',
          slot: 'page3'
        },
        {
          label: '第四步',
          slot: 'page4',
          options: {
            nextDisabled: true
          }
        }
      ],
      currentTableData: [],
      multipleSelection: [],
      downloadColumns: [
        { label: '姓名', prop: 'admin' },
        { label: '出生年月', prop: 'value' },
        { label: '状态', prop: 'type' },
        { label: '管理员', prop: 'admin' },
        { label: '管理员备注', prop: 'adminNote' },
        { label: '创建时间', prop: 'dateTimeCreat' },
        { label: '使用状态', prop: 'used' },
        { label: '使用时间', prop: 'dateTimeUse' }
      ],
      dialogVisible: false,
      dynamicTags: [],
      inputVisible: false,
      inputValue: ''
    }
  },
  watch: {
    tableData: {
      handler (val) {
        this.currentTableData = val
      },
      immediate: true
    }
  },
  methods: {
    // step () {
    //   alert(123);
    // },
    nextClicked (currentPage) {
      console.log('next clicked', currentPage)
      return true
    },
    backClicked (currentPage) {
      console.log('back clicked', currentPage)
      return true
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
    },

    handleSwitchChange (val, index) {
      const oldValue = this.currentTableData[index]
      this.$set(this.currentTableData, index, {
        ...oldValue,
        type: val
      })
      // 注意 这里并没有把修改后的数据传递出去 如果需要的话请自行修改
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    downloadDataTranslate (data) {
      return data.map(row => ({
        ...row,
        type: row.type ? '禁用' : '正常',
        used: row.used ? '已使用' : '未使用'
      }))
    },
    handleDownloadXlsx (data) {
      this.$export.excel({
        title: 'D2Admin 表格示例',
        columns: this.downloadColumns,
        data: this.downloadDataTranslate(data)
      })
        .then(() => {
          this.$message('导出表格成功')
        })
    },
    handleDownloadCsv (data) {
      this.$export.csv({
        title: 'D2Admin 表格示例',
        columns: this.downloadColumns,
        data: this.downloadDataTranslate(data)
      })
        .then(() => {
          this.$message('导出CSV成功')
        })
    }
  }
}
</script>
