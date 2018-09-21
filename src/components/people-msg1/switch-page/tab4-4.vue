<template>
    <div id="mainTab4-4">
        <div class="content">
            <el-row>
                <el-col :span="12">
                    <div class="left">
                        <div class="title">
                            <span class="fa fa-line-chart" style="margin-right: 10px"></span>
                            银行类、金融类APP安装记录、使用记录
                        </div>
                        <div class="buttons">
                            <el-col class="menu">
                                <span v-for="item,index in buttons" class="button"
                                      @click="handleButton(index)"
                                      :class="{active:active==index }">
                                        {{item}}
                                </span>

                            </el-col>
                        </div>
                        <div class="item" id="left">
                            <el-col :span="8" class="its">
                                <div class="its-w">
                                    <div class="top">
                                        <img src="../image/icon.png" alt="">
                                    </div>
                                    <div class="btm">
                                        <div class="bt">腾讯云</div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="8" class="its">
                                <div class="its-w">
                                    <div class="top">
                                        <img src="../image/icon.png" alt="">
                                    </div>
                                    <div class="btm">
                                        <div class="bt">腾讯云</div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="8" class="its">
                                <div class="its-w">
                                    <div class="top">
                                        <img src="../image/icon.png" alt="">
                                    </div>
                                    <div class="btm">
                                        <div class="bt">腾讯云</div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="8" class="its">
                                <div class="its-w">
                                    <div class="top">
                                        <img src="../image/icon.png" alt="">
                                    </div>
                                    <div class="btm">
                                        <div class="bt">腾讯云</div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="8" class="its">
                                <div class="its-w">
                                    <div class="top">
                                        <img src="../image/icon.png" alt="">
                                    </div>
                                    <div class="btm">
                                        <div class="bt">腾讯云</div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="8" class="its">
                                <div class="its-w">
                                    <div class="top">
                                        <img src="../image/icon.png" alt="">
                                    </div>
                                    <div class="btm">
                                        <div class="bt">腾讯云</div>
                                    </div>
                                </div>
                            </el-col>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="right">
                        <div class="title">
                            <span class="fa fa-line-chart" style="margin-right: 10px"></span>
                            网络搜索、浏览、发布、下载金融类相关行为记录
                        </div>
                        <div class="buttons">
                            <el-col class="menu">
                                <span v-for="item,index in buttons" class="button"
                                      @click="handleButton(index)"
                                      :class="{active:active==index }">
                                        {{item}}
                                </span>

                            </el-col>
                        </div>
                        <div class="item" id="right">

                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row style="margin-top: 20px">
                <el-col :span="24">
                    <div class="bottom">
                        <div class="title">
                            <span class="fa fa-line-chart" style="margin-right: 10px"></span>
                            银行类、金融类APP安装记录、使用记录
                        </div>
                        <div class="con">
                            <el-col :span="12">
                                <div>
                                    <div class="buttons">
                                        <span class="tit">收支对比</span>
                                        <el-col class="menu1">
                                            <span v-for="item,index in buttons" class="button"
                                                  @click="handleButton(index)"
                                                  :class="{active:active==index }">
                                            {{item}}
                                            </span>

                                        </el-col>
                                    </div>
                                </div>
                                <div style="height: 400px" id="leftChart"></div>
                            </el-col>
                            <el-col :span="12">
                                <div>
                                    <div class="buttons" style="float: left">
                                        <span class="tit" style="display: inline-block;width: 150px">收入\消费类统计记录</span>
                                        <el-col class="menu1">
                                            <span v-for="item,index in buttons" class="button"
                                                  @click="handleButton(index)"
                                                  :class="{active:active==index }">
                                            {{item}}
                                            </span>

                                        </el-col>
                                    </div>
                                </div>
                                <div style="height: 400px" id="peiChart-wrap"></div>
                            </el-col>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    export default {
        props: ["activeName"],
        data() {
            return {
                buttons: ["近一周", "近一月", "近三个月", "近一年"],
                active: 0
            }
        },
        mounted() {
            this.$el.querySelector("#right").style.height = this.$el.querySelector("#left").offsetHeight + 'px'
        },
        // watch: {
        //     activeName(data) {
        //         if (data == 'four') {
        //             this.$el.querySelector("#right").style.height = this.$el.querySelector("#left").offsetHeight + 'px'
        //         }
        //     }
        // }
    }
</script>
<style lang="scss" scoped>
    @import '../css/main-tab-4-public.scss';

    #mainTab4-4 {
        padding: 20px;
        .content {
            border: 1px solid rgba(0, 0, 0, 0.12);
            background: white;
            border-radius: 2px;
            padding: 20px;
            .menu {
                position: absolute;
                right: 10px;
                top: 20px;
                z-index: 999;
            }
            .menu1{
                width: 360px;
                height: 28px;
                display: inline-block;
                float: right;
                margin-top: 19px;

                .button{
                    width: 75px;
                }
            }
            .left {
                width: calc(100% - 10px);
                margin-right: 10px;
                background: rgb(249, 249, 249);
                border: 1px solid rgba(0, 0, 0, 0.159);
                float: left;
            }
            .right {
                width: calc(100% - 10px);
                margin-left: 10px;
                background: rgb(249, 249, 249);
                border: 1px solid rgba(0, 0, 0, 0.159);
                float: left;
            }
            .title {
                height: 50px;
                line-height: 50px;
                border-bottom: 1px solid rgba(0, 0, 0, 0.159);
                font-size: 14px;
                padding-left: 20px;
                box-sizing: border-box;
                font-weight: 500;
                color: rgba(37, 41, 75, 0.83);
            }
            .buttons {
                position: relative;
                height: 50px;
                margin-bottom: 20px;
            }
            .item {
                box-sizing: border-box;
                float: left;
                width: 100%;
                padding-bottom: 20px;
                .its {
                    box-sizing: border-box;
                    padding: 10px;
                    .its-w {
                        border: 2px solid rgba(255, 165, 0, 0.48);
                        background: rgb(249, 249, 249);
                        position: relative;
                        .top {
                            box-sizing: border-box;
                            text-align: center;
                            img {
                                width: 50%;
                                margin-top: 20px;
                                margin-bottom: 20px;
                            }
                        }
                        .btm {
                            .bt {
                                width: 80%;
                                height: 30px;
                                background: rgb(80, 97, 194);
                                text-align: center;
                                line-height: 30px;
                                color: white;
                                font-size: 13px;
                                border-radius: 4px;
                                margin: 0px auto;
                                margin-bottom: 20px;
                            }
                        }
                    }
                }
            }
            .bottom {
                background: rgb(249, 249, 249);
                border: 1px solid rgba(0, 0, 0, 0.159);
                width: 100%;
                float: left;
                .con {
                    width: 100%;
                    float: left;
                    background: #f9f9f9;

                    .tit {
                        line-height: 20px;
                        display: inline-block;
                        margin-left: 20px;
                        border-left: 4px solid $orangeColor;
                        padding-left: 10px;
                        margin-top: 24px;
                    }

                }
            }

        }
    }
</style>
