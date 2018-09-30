<template>
    <div class="popup" v-if="show_popup">

        <div class="scroll_wrap">
            <span class="close el-icon-close" @click="handleClose"></span>
            <div class="content" :class="{show:isShow}">
                <el-tabs v-model="activeName" type="card" @tab-click="handleClick" style="height: 100%">
                    <el-tab-pane name="first" lazy="lazy">
                        <span slot="label"><i class="el-icon-document"></i>表单添加</span>
                        <div class="wrap">
                            <div class="item">
                                <span>姓名</span><input type="text">
                            </div>
                            <div class="item">
                                <span>出生日期</span>
                                <el-date-picker
                                        v-model="birthday"
                                        type="date"
                                        placeholder="选择日期">
                                </el-date-picker>
                            </div>
                            <div class="item">
                                <span>身份证号</span><input type="text">
                            </div>
                            <div class="item">
                                <span>手机号码</span><input type="text">
                            </div>
                            <div class="item">
                                <span>家庭住址</span><input type="text">
                            </div>
                            <div class="footer">
                                <el-button size="medium ">重置</el-button>
                                <el-button type="primary" size="medium  ">创建</el-button>

                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="新位置" name="second" lazy="lazy">
                        <span slot="label"><i class="el-icon-document"></i>批量导入</span>
                        <div class="wrap">
                            2
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="社会关系" name="third" lazy="lazy">
                        <span slot="label"><i class="el-icon-document"></i>扫描添加</span>
                        <div class="wrap">
                            3
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="社会关系" name="four" lazy="lazy">
                        <span slot="label"><i class="el-icon-document"></i>API接口</span>
                        <div class="wrap">
                            4
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "add-popup",
        props: {
            show_popup: {
                default: false
            }
        },
        components: {},
        data() {
            return {
                isShow: false,
                activeName: 'first',
                birthday: ''
            }
        },
        computed: {
            _show_popup() {
                return this.show_popup
            }
        },
        watch: {
            _show_popup(val) {
                let vm = this
                if (val) {
                    setTimeout(function () {
                        vm.isShow = true
                    })
                }
            }
        },
        methods: {
            handleClose() {
                this.$emit("closePopup", false)
                this.isShow = false
            },
            handleClick() {

            }
        }
    }
</script>
<style lang="scss" scoped>
    .popup {
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.6);
        width: 100%;
        height: 100%;
        z-index: 1001;
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
                .wrap {
                    height: calc(100% - 41px);
                    position: relative;
                    .item {
                        color: #3e3e3e;
                        font-size: 14px;
                        margin: 35px 0;
                        span {
                            display: inline-block;
                            text-align: left;
                            line-height: 36px;
                            width: 100px;
                            padding-left: 30px;
                            box-sizing: border-box;
                        }
                        input {
                            width: 70%;
                            height: 36px;
                            outline: none;
                            border-radius: 2px;
                            border: 1px solid rgba(0, 0, 0, 0.18);
                            padding: 0 20px;
                        }
                    }
                    .footer {
                        height: 60px;
                        width: 100%;
                        border-top: 1px solid rgba(0, 0, 0, 0.18);
                        position: absolute;
                        bottom: 0;
                        button {
                            margin: 16px;
                            float: right;
                        }
                    }
                }
            }
            .content.show {
                transform: scale(1);
            }
        }

    }

</style>
