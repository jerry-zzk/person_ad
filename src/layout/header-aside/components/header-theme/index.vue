<template>
  <div>
    <el-tooltip effect="dark" content="主题" placement="bottom">
      <el-button class="d2-ml-0 d2-mr btn-text can-hover" type="text" @click="dialogVisible = true">
        <!-- <d2-icon name="cubes" style="font-size: 16px"/> -->
        <div style="width:18px;height:18px;">
        <svg version="1.1" id="t1538024864788" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1024 1024" style="enable-background:new 0 0 1024 1024;" xml:space="preserve">
          <path d="M1004.094293 321.092267L762.737493 79.735467a68.266667 68.266667 0 0 0-96.546133 0l-30.293333 30.293333a68.283733 68.283733 0 0 1-48.264534 20.002133h-151.1936a68.181333 68.181333 0 0 1-48.264533-20.002133l-30.293333-30.293333a68.266667 68.266667 0 0 0-96.546134 0L19.962027 321.092267a68.266667 68.266667 0 0 0 0 96.546133l96.546133 96.546133a67.84 67.84 0 0 0 66.645333 17.271467c10.8032-3.072 21.674667 4.181333 21.674667 15.4112V896c0 37.546667 30.72 68.266667 68.266667 68.266667h477.866666c37.546667 0 68.266667-30.72 68.266667-68.266667V546.8672c0-11.229867 10.871467-18.4832 21.674667-15.4112a67.84 67.84 0 0 0 66.645333-17.271467l96.546133-96.546133a68.266667 68.266667 0 0 0 0-96.546133z"/>
        </svg>
        </div>
      </el-button>
    </el-tooltip>
    <el-dialog title="主题" width="600px" :visible.sync="dialogVisible" :append-to-body="true">
      <d2-theme-list style="margin-top: -25px;"/>
    </el-dialog>
  </div>
</template>

<script>
import themeList from './components/d2-theme-list'
export default {
  components: {
    'd2-theme-list': themeList
  },
  data () {
    return {
      dialogVisible: false
    }
  }
}
</script>
