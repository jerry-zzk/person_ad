<template>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane  name="first"  lazy="lazy">
            <span slot="label"><i class="el-icon-document"></i> 我的行程</span>
            <div class="wrap">
                <el-scrollbar style="height: 100%">
                    <first></first>
                </el-scrollbar>
            </div>

        </el-tab-pane>
        <el-tab-pane label="失联倾向异常" name="second"  lazy="lazy">
            <span slot="label"><i class="el-icon-document"></i> 失联倾向异常</span>
            <div class="wrap">
                <el-scrollbar style="height: 100%">
                    <second></second>
                </el-scrollbar>
            </div>
        </el-tab-pane>
        <el-tab-pane label="关联异常" name="third"  lazy="lazy">
            <span slot="label"><i class="el-icon-document"></i> 关联异常</span>
            <div class="wrap">
                <el-scrollbar style="height: 100%">
                    <third></third>
                </el-scrollbar>
            </div>
        </el-tab-pane>
        <el-tab-pane label="位置异常" name="four"  lazy="lazy">
            <span slot="label"><i class="el-icon-document"></i> 位置异常</span>
            <div class="wrap">
                <el-scrollbar style="height: 100%">
                    <four></four>
                </el-scrollbar>
            </div>
        </el-tab-pane>
        <el-tab-pane label="网络行为异常" name="five"  lazy="lazy">
            <span slot="label"><i class="el-icon-document"></i> 网络行为异常</span>
            <div class="wrap">
                <el-scrollbar style="height: 100%">
                    <five></five>
                </el-scrollbar>
            </div>
        </el-tab-pane>
    </el-tabs>
</template>
<script>
    export default {
        data(){
            return{
                lazy:true,
                activeName:'first'
            }
        },
        components:{
            first:()=>import('../switch-page/first.vue'),
            second:()=>import('../switch-page/second.vue'),
            third:()=>import('../switch-page/third.vue'),
            four:()=>import('../switch-page/four.vue'),
            five:()=>import('../switch-page/five.vue'),
        },
        methods:{
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>
<style lang="scss" scoped>
    .wrap {
        height: calc(100vh - 110px);
    }
</style>
