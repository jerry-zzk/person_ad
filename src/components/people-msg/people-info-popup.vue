<template>
    <div class="people-info-popup" v-if="dialogVisible">
        <span class="el-icon-circle-close-outline" @click="handleClose"></span>
        <div class="content" :class="{show:isShow}">
            <el-container>
                <el-aside>
                    <el-row>
                        <el-col :span="24">
                            <div class="bg-blue">
                                <span>真事身份  </span>
                            </div>
                        </el-col>
                        <el-col :span="10">
                            <img src="">
                        </el-col>
                        <el-col :span="14">
                            <p><label><i class="fa fa-user-o"></i>姓名:</label> 李小二</p>
                            <p><label><i class="fa fa-venus-mars"></i>性别:</label> 女</p>
                            <p><label><i class="fa fa-birthday-cake"></i>年龄:</label> 17 </p>
                        </el-col>
                        <el-col :span="24">
                            <p><label><i class="fa fa-id-card-o"></i>身份证号:</label> 李小二</p>
                            <p><label><i class="fa fa-mobile"></i>手机号:</label> 女</p>
                            <p><label><i class="fa fa-file-o"></i>种类:</label> 17 </p>
                            <p><label><i class="fa fa-clock-o"></i>时间:</label> 女</p>
                            <p><label><i class="fa fa-address-book"></i>地址:</label> 17 </p>
                        </el-col>
                        <el-col :span="24">
                            <div class="bg-blue">
                                <span>虚拟身份  </span>
                            </div>
                        </el-col>
                        <el-col :span="24">
                            <p><label><i class="fa fa-qq"></i>qq:</label> 李小二</p>
                            <p><label><i class="fa fa-envelope"></i>邮箱:</label> 女</p>
                        </el-col>
                    </el-row>
                </el-aside>
                <el-main>
                    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
                        <el-tab-pane label="欺诈告警" name="first">
                            <fraudulentAlarm></fraudulentAlarm>
                        </el-tab-pane>
                        <el-tab-pane label="评估详情" name="second">
                            <evaluateInfo></evaluateInfo>
                        </el-tab-pane>
                        <el-tab-pane label="联通详单" name="third">
                            <generalFederation></generalFederation>
                        </el-tab-pane>
                    </el-tabs>
                </el-main>
            </el-container>
        </div>
    </div>

</template>

<script>
    export default {
        name:"people-info-popup",
        components:{
            fraudulentAlarm:()=>import('./switch-page/fraudulent-alarm.vue'),
            generalFederation:()=>import('./switch-page/general-federation.vue'),
            evaluateInfo:()=>import('./switch-page/evaluate-info.vue')
        },
        data() {
            return{
                isShow:false,
                activeName2: 'first'
            }
        },
        computed: {
            dialogVisible:{
                get(){
                    return this.$store.state.peopleInfoPopup.showPeopleInfoPopup
                },
                set(){

                }
            }
        },
        watch:{
            dialogVisible(val){
                let vm=this
                setTimeout(function () {
                    vm.isShow=val
                },100)

                this.dialogVisible=val
            }
        },
        methods: {
            handleClose(){
                this.$store.commit('setData',false)
            },
            handleClick(tab, event){
                console.log(tab, event);
            }
        }
    }
</script>
<style lang="scss" scoped>
    .people-info-popup{
        position: fixed;
        top: 0;
        left:0;
        background: rgba(0,0,0,0.6);
        width: 100%;
        height: 100%;
        padding: 25px;
        z-index: 9999;
        box-sizing: border-box;
        .el-icon-circle-close-outline{
            position: absolute;
            right: 30px;
            top:30px;
            z-index: 1;
            font-size: 22px;
            opacity: 0.5;
            transition: all 0.28s ease;
            cursor: pointer;
            &:hover{
                transform: scale(1.2);
                opacity: 1;
            }
        }
        .content{
            width: 100%;
            height: 100%;
            background: white;
            position: relative;
            z-index: 0;
            border-radius: 5px;
            transform: scale(0);
            transition: all 0.28s ease;
        }
        .content.show{
            transform: scale(1);
        }
    }

</style>
