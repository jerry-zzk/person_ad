<template>
    <div class="people-info-popup" v-if="dialogVisible">
        <span class="close el-icon-close" @click="handleClose"></span>
        <div class="content" :class="{show:isShow}">
            <el-container style="height: 100%;">
                <el-aside>
                    <el-row class="left-msg">
                        <el-col :span="24">
                            <div class="bg-blue">
                                <span>真实身份  </span>
                            </div>
                        </el-col>
                        <el-col :span="10" style="padding: 16px">
                            <img src="./image/people.png" style="width: 100%">
                        </el-col>
                        <el-col :span="14">
                            <div style="padding: 0 20px">
                                <p><label><i class="fa fa-user-o"></i>姓名:</label> 李二</p>
                                <p><label><i class="fa fa-venus-mars"></i>性别:</label> 女</p>
                                <p><label><i class="fa fa-birthday-cake"></i>年龄:</label> 17 </p>
                            </div>
                        </el-col>
                        <el-col :span="24">
                            <div style="padding: 0 20px">
                                <p><label><i class="fa fa-id-card-o"></i>身份证号:</label> 612651657492698</p>
                                <p><label><i class="fa fa-mobile" style="font-size: 30px"></i>手机号:</label> 女</p>
                                <p><label><i class="fa fa-file-o"></i>种类:</label> 未知 </p>
                                <p><label><i class="fa fa-clock-o"></i>时间:</label> 2012-12-12</p>
                                <p><label><i class="fa fa-home"></i>地址:</label> 安宁佳园小区 </p>
                            </div>
                        </el-col>
                        <el-col :span="24">
                            <div class="bg-blue">
                                <span>虚拟身份  </span>
                            </div>
                        </el-col>
                        <el-col :span="24">
                            <div style="padding: 0 20px">
                                <p><label><i class="fa fa-qq"></i>qq:</label> 小二</p>
                                <p><label><i class="fa fa-envelope"></i>邮箱:</label> 51616455616@fds4.com</p>
                            </div>
                        </el-col>
                    </el-row>
                </el-aside>
                <el-main>
                    <el-button class="msg-button" size="mini" type="primary">打印</el-button>
                    <el-button class="msg-button" size="mini" type="primary">导出</el-button>
                    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
                        <el-tab-pane label="欺诈告警" name="first">
                            <div class="wrap">
                                <el-scrollbar style="height: 100%">
                                    <fraudulentAlarm></fraudulentAlarm>
                                </el-scrollbar>
                            </div>

                        </el-tab-pane>
                        <el-tab-pane label="评估详情" name="second">
                            <div class="wrap">
                                <evaluateInfo></evaluateInfo>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="联通详单" name="third">
                            <div class="wrap">
                                <el-scrollbar style="height: 100%">
                                    <generalFederation></generalFederation>
                                </el-scrollbar>
                            </div>
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
            return {
                isShow: false,
                activeName2: 'first'
            }
        },
        computed: {
            dialogVisible: {
                get() {
                    return this.$store.state.peopleInfoPopup.showPeopleInfoPopup
                },
                set() {

                }
            }
        },
        watch: {
            dialogVisible(val) {
                let vm = this
                setTimeout(function () {
                    vm.isShow = val
                }, 100)

                this.dialogVisible = val
            }
        },
        methods: {
            handleClose() {
                this.$store.commit('setData', false)
            },
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>
<style lang="scss" scoped>
    .people-info-popup {
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.6);
        width: 100%;
        height: 100%;
        padding: 30px;
        z-index: 9999;
        box-sizing: border-box;
        .close {
            position: absolute;
            right: 0px;
            top: 0px;
            z-index: 1;
            font-size: 22px;
            transition: all 0.28s ease;
            cursor: pointer;
            width: 30px;
            height: 30px;
            display: inline-block;
            text-align: center;
            line-height: 30px;
            background: #ff6150;
            color: white;
        }
        .content {
            width: 100%;
            height: 100%;
            background: white;
            position: relative;
            z-index: 0;
            transform: scale(0);
            transition: all 0.28s ease;
            .bg-blue {
                background: rgb(64, 158, 254);
                color: white;
                height: 40px;
                padding-left: 20px;
                line-height: 40px;
            }
            .left-msg {
                font-size: 14px;
                color: #2e2e2e;
                height: 100%;
                border-right: 1px solid rgba(0, 0, 0, 0.2);
                img {
                    border: 1px solid rgba(0, 0, 0, 0.2);
                }
                p {
                    margin: 0;
                    height: 50px;
                    line-height: 50px;
                    box-sizing: border-box;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
                    i {
                        font-size: 17px;
                        display: inline-block;
                        width: 40px;
                        text-align: center;
                        line-height: 40px;
                    }
                }
            }
            .el-main {
                position: relative;
                .msg-button{
                    position: absolute;
                    top:20px;
                    z-index: 100;
                    &:first-child{
                        right: 100px;
                    }
                    &:nth-child(2){
                        right: 20px;
                    }
                };
                .wrap {
                    height: calc(100vh - 160px);
                }
            }
        }
        .content.show {
            transform: scale(1);
        }
    }

</style>
