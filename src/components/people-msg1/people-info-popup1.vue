<template>
    <div class="people-info-popup1" v-if="dialogVisible">
        <el-scrollbar style="height: 100%">
            <div class="scroll_wrap">
                <span class="close el-icon-close" @click="handleClose"></span>
                <div class="content" :class="{show:isShow}">
                    <el-container style="height: 100%;">
                        <el-aside>
                            <div class="left-msg" style="height: calc(100vh - 60px)">
                                <el-scrollbar style="height: 100%;" id="left-msg">
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
                                            <p><label><i class="fa fa-user-o"></i>姓名:</label> 张三</p>
                                            <p><label><i class="fa fa-venus-mars"></i>性别:</label> 男</p>
                                            <p><label><i class="fa fa-birthday-cake"></i>年龄:</label> 25 </p>
                                        </div>
                                    </el-col>
                                    <el-col :span="24">
                                        <div style="padding: 0 20px">
                                            <p><label><i class="fa fa-id-card-o"></i>身份证号:</label> 612651657492698</p>
                                            <p><label><i class="fa fa-mobile" style="font-size: 30px"></i>手机号:</label>
                                                135 4635
                                                4656</p>
                                            <p><label><i class="fa fa-file-o"></i>民族:</label> 汉 </p>
                                            <p><label><i class="fa fa-clock-o"></i>籍贯:</label> 北京市-朝阳区</p>
                                            <p><label><i class="fa fa-home"></i>居住地址:</label> 河北石家庄 </p>
                                            <p><label><i class="fa fa-bookmark-o"></i>学历:</label> 本科 </p>
                                        </div>
                                    </el-col>
                                    <el-col :span="24">
                                        <div class="bg-blue">
                                            <span>虚拟身份  </span>
                                        </div>
                                    </el-col>
                                    <el-col :span="24" style="margin-bottom: 40px">
                                        <div style="padding: 0 20px">
                                            <p><label><i class="fa fa-envelope"></i>Emain:</label> 561654686@qq.com</p>
                                            <p><label><i class="fa fa-qq"></i>QQ号:</label> 561654686</p>
                                            <p><label><i class="fa fa-weibo"></i>微博ID:</label> 767832786</p>
                                            <p><label><i class="fa fa-weixin"></i>微信UNI:</label>369433383</p>
                                            <p><label><i class="fa fa-comments-o "></i>论坛账号:</label> 张三__zhang(天涯)</p>
                                        </div>
                                    </el-col>
                                    <el-col class="dangan" v-if="isDangan">
                                        <div @click="dangAnDetail">查看档案详情</div>
                                    </el-col>
                                </el-scrollbar>
                            </div>
                        </el-aside>

                        <el-main>
                            <component :is="currentTabComponent"></component>
                        </el-main>
                    </el-container>
                </div>
            </div>
        </el-scrollbar>
    </div>

</template>

<script>
    export default {
        name: "people-info-popup1",
        components: {
            mainTab3: () => import('./main-tab/main-tab-3.vue'),
            mainTab4: () => import('./main-tab/main-tab-4.vue'),
            mainTab5: () => import('./main-tab/main-tab-5.vue'),
        },
        data() {
            return {
                isShow: false,
                activeName: 'first',
            }
        },
        computed: {
            dialogVisible: {
                get() {
                    return this.$store.state.peopleInfoPopup.showPeopleInfoPopup1
                },
                set() {
                }
            },
            currentTabComponent: {
                get() {
                    return this.$store.state.peopleInfoPopup.tab
                },
                set() {
                }
            },
            isDangan: {
                get() {
                    let tab = this.$store.state.peopleInfoPopup.tab
                    if (tab == 'mainTab5') {
                        return true
                    } else {
                        return false
                    }

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
                })
                this.dialogVisible = val
            }
        },
        methods: {
            handleClose() {
                if (this.$store.state.peopleInfoPopup.tab == 'mainTab4') {
                    this.$store.commit('setTab', 'mainTab5')
                } else {
                    this.$store.commit('setData1', false)
                }
            },
            dangAnDetail() {
                this.$el.querySelector('#left-msg').children[0].scrollTop = 0
                this.$store.commit('setTab', 'mainTab4')
            }
        }
    }
</script>
<style lang="scss" scoped>
    .people-info-popup1 {
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.6);
        width: 100%;
        height: 100%;
        z-index: 9901;
        box-sizing: border-box;
        color: rgb(41, 45, 82);
        .scroll_wrap {
            width: 100%;
            height: 100%;
            min-width: 1280px;
            box-sizing: border-box;
            padding: 30px;
            position: relative;
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
                    background: rgb(41, 45, 82);
                    color: white;
                    height: 40px;
                    padding-left: 20px;
                    line-height: 40px;
                }
                .left-msg {
                    font-size: 14px;
                    color: rgb(41, 45, 82);
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
                    .dangan {
                        height: 140px;
                        div {
                            width: 200px;
                            height: 40px;
                            margin: 0 auto;
                            margin-top: 20px;
                            border-radius: 5px;
                            background: rgb(217, 226, 243);
                            text-align: center;
                            line-height: 40px;
                            color: #ff6150;
                            font-size: 14px;
                            cursor: pointer;
                            &:hover {
                                background: rgb(212, 218, 241);
                            }
                        }
                    }
                }
                .el-main {
                    position: relative;
                    padding: 0;
                    background: #f9f9f9;
                }
            }
            .content.show {
                transform: scale(1);
            }
        }

    }

</style>
