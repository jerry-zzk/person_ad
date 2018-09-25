<template>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane  name="first"  lazy="lazy">
            <span slot="label"><i class="el-icon-document"></i> 基本信息</span>
            <div class="wrap">
                <el-scrollbar style="height: 100%">
                    <tab41></tab41>
                </el-scrollbar>
            </div>

        </el-tab-pane>
        <el-tab-pane label="重要位置" name="second"   lazy="lazy">
            <span slot="label"><i class="el-icon-document"></i> 重要位置</span>
            <div class="wrap">
                <el-scrollbar style="height: 100%">
                    <tab42></tab42>
                </el-scrollbar>
            </div>
        </el-tab-pane>
        <el-tab-pane label="社会关系" name="third"  lazy="lazy">
            <span slot="label"><i class="el-icon-document"></i> 社会关系</span>
            <div class="wrap">
                <el-scrollbar style="height: 100%">
                    <tab43></tab43>
                </el-scrollbar>
            </div>
        </el-tab-pane>
        <el-tab-pane label="网络行为异常" name="four"   lazy="lazy">
            <span slot="label"><i class="el-icon-document"></i> 网络行为异常</span>
            <div class="wrap">
                <el-scrollbar style="height: 100%">
                    <tab44></tab44>
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
            tab41:()=>import('../switch-page/tab4-1.vue'),
            tab42:()=>import('../switch-page/tab4-2.vue'),
            tab43:()=>import('../switch-page/tab4-3.vue'),
            tab44:()=>import('../switch-page/tab4-4.vue')
        },
        methods:{
            handleClick(tab, event) {
                // console.log(tab.name);
            }
        }
    }
</script>
<style lang="scss" scoped>
    .wrap {
        height: calc(100vh - 110px);
    }
</style>
