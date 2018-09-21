<template>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane  name="first"  lazy="lazy">
            <span slot="label"><i class="el-icon-document"></i> 新手机号</span>
            <div class="wrap">
                <el-scrollbar style="height: 100%">
                    <tab31></tab31>
                </el-scrollbar>
            </div>
        </el-tab-pane>
        <el-tab-pane label="新位置" name="second" lazy="lazy">
            <span slot="label"><i class="el-icon-document"></i> 新位置</span>
            <div class="wrap">
                <el-scrollbar style="height: 100%">
                    <tab32></tab32>
                </el-scrollbar>
            </div>
        </el-tab-pane>
        <el-tab-pane label="社会关系" name="third"  lazy="lazy">
            <span slot="label"><i class="el-icon-document"></i> 社会关系</span>
            <div class="wrap">
                <el-scrollbar style="height: 100%">
                    <tab33></tab33>
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
            tab31:()=>import('../switch-page/tab3-1.vue'),
            tab32:()=>import('../switch-page/tab3-2.vue'),
            tab33:()=>import('../switch-page/tab3-3.vue')
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
