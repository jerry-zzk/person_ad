<template>
    <div>
        <el-row :gutter="10">
            <el-col :span="6">
                <div class="col col-l">
                    <p>客户/分组 <b>:</b> <span> {{user}} / {{group}} </span></p>
                    <p></p>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="col col-r">
                    <p>敲诈客户 <b>:</b> <span> {{user_qz}} </span></p>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="col col-l">
                    <p>欺诈团伙 <b>:</b> <span> {{user_group}} </span></p>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="col col-r">
                    <p>待审核 <b>:</b> <span> {{num}} 客户</span></p>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'card4',
  data () {
    return {
      user: 800,
      group: 8,
      user_qz: 30,
      user_group: 2,
      num: 300
    }
  }
}
</script>
<style lang="scss" scoped>
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
</style>
