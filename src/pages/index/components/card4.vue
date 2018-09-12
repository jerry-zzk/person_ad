<template>
    <div>
        <el-row :gutter="10">
            <el-col :span="6">
                <div class="col col-1">
                    <h4>客户/分组</h4>
                    <p><span> {{user}} / {{group}} </span></p>
                    <div class="icon">
                        <img src="../image/user-group.svg" alt="">
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="col col-2">
                    <h4>敲诈客户</h4>
                    <p><span> {{user_qz}} </span></p>
                    <div class="icon">
                        <img src="../image/people.svg" alt="">
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="col col-3">
                    <h4>欺诈团伙</h4>
                    <p><span> {{user_group}} </span></p>
                    <div class="icon">
                        <img src="../image/group.svg" alt="">
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="col col-4">
                    <h4>待审核</h4>
                    <p><span> {{num}}</span></p>
                    <div class="icon">
                        <img src="../image/search.svg" alt="">
                    </div>
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
        user_group: 21,
        num: 300
      }
    }
  }
</script>
<style lang="scss" scoped>
    @import "~@/assets/style/public.scss";
    *{
        margin: 0;
        padding: 0;
    }
    .fa {
        margin-right: 20px;
    }

    .col {
        padding: 20px;
        border-radius: 4px;
        border-width: 1px;
        border-style: solid;
        font-size: 16px;
        transition: all 0.3s ease;
        line-height: 26px;
        position: relative;
        &:hover{
           transform: scale(1.05);
        }
        h4{
            line-height: 32px;
        }
        .icon{
            position: absolute;
            right: 24px;
            top: 24px;
            font-size: 42px;
            width: 50px;
            height: 50px;
            img{
                width: 100%;
            }
        }
    }
    .col-1 {
        background-color: rgba(175, 255, 177, 0.42);
        border-color: rgba(208, 199, 205, 0.33);
    }
    .col-2 {
        background-color: rgba(82, 255, 241, 0.42);
        border-color: rgba(208, 199, 205, 0.33);
    }
    .col-3 {
        background-color: rgb(216, 220, 255);
        border-color: rgba(208, 199, 205, 0.33);
    }
    .col-4 {
        background-color: rgba(255, 182, 193, 0.42);
        border-color: rgba(208, 199, 205, 0.33);
    }
</style>
