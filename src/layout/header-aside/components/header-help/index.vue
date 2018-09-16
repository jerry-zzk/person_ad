<template>
  <div>
    <el-tooltip effect="dark" content="帮助" placement="bottom">
      <el-button class="d2-ml-0 d2-mr btn-text can-hover" type="text" @click="dialogVisible = true">
        <d2-icon name="question-circle-o" style="font-size: 20px"/>
      </el-button>
    </el-tooltip>
    <el-dialog title="帮助" width="600px" :visible.sync="dialogVisible" :append-to-body="true">
      <d2-theme-list style="margin-top: -25px;"/>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false
    }
  }
}
</script>
