<template>
    <div id="mainTab4-3">
        <div class="content">
            <el-row>
                <el-col :span="12" class="title">
                    用户提交的主要社会关系
                </el-col>
                <el-col :span="12" class="menu">
                    <span v-for="item,index in buttons" class="button"
                          @click="handleButton(index)"
                          :class="{active:active==index }">
                        {{item}}
                    </span>

                </el-col>
                <el-col class="xiahuaxian"></el-col>
                <el-col class="table">
                    <el-col class="head">
                        <el-col :span="4">姓名</el-col>
                        <el-col :span="4">与本人关系</el-col>
                        <el-col :span="10">住址</el-col>
                        <el-col :span="6">联系方式</el-col>
                    </el-col>
                    <el-col class="tr">
                        <el-col :span="4">李二</el-col>
                        <el-col :span="4">父子</el-col>
                        <el-col :span="10">北京市海淀区XXXXXXXXXX</el-col>
                        <el-col :span="6">095411168472</el-col>
                    </el-col>
                    <el-col class="tr">
                        <el-col :span="4">王麻子</el-col>
                        <el-col :span="4">母子</el-col>
                        <el-col :span="10">北京市海淀区XXXXXXXXXX</el-col>
                        <el-col :span="6">095411168472</el-col>
                    </el-col>
                    <el-col class="tr">
                        <el-col :span="4">李四</el-col>
                        <el-col :span="4">父子</el-col>
                        <el-col :span="10">北京市海淀区XXXXXXXXXX</el-col>
                        <el-col :span="6">095411168472</el-col>
                    </el-col>
                    <el-col class="tr">
                        <el-col :span="4">张三</el-col>
                        <el-col :span="4">父子</el-col>
                        <el-col :span="10">北京市海淀区XXXXXXXXXX</el-col>
                        <el-col :span="6">095411168472</el-col>
                    </el-col>
                </el-col>
            </el-row>
            <el-row style="margin-top: 40px">
                <el-col :span="12" class="title">
                    挖掘的社会关系
                </el-col>
                <el-col :span="12" class="menu">
                    <span v-for="item,index in buttons" class="button"
                          @click="handleButton(index)"
                          :class="{active:active==index }">
                        {{item}}
                    </span>

                </el-col>
                <el-col class="xiahuaxian"></el-col>
                <el-col class="table">
                    <el-col :span="16">
                        <div style="height: 320px" id="relativeChart"></div>
                    </el-col>
                    <el-col :span="8" style="height: 320px;overflow: hidden">
                            <div id="message">
                            <div class="con">
                                <ul>
                                    <li class="header">
                                        <el-col :span="12">联系方式</el-col>
                                        <el-col :span="6">潜在关系</el-col>
                                        <el-col :span="6">联通次数</el-col>
                                    </li>
                                    <el-scrollbar style="height: 100%;">
                                        <li>
                                            <el-col :span="12">156 3545 2153</el-col>
                                            <el-col :span="6" style="color: #2f74ff">同事</el-col>
                                            <el-col :span="6" style="color: rgb(249,149,0)">23</el-col>
                                        </li>
                                        <li>
                                            <el-col :span="12">156 3545 2153</el-col>
                                            <el-col :span="6" style="color: #2f74ff">同事</el-col>
                                            <el-col :span="6" style="color: rgb(249,149,0)">23</el-col>
                                        </li>
                                        <li>
                                            <el-col :span="12">156 3545 2153</el-col>
                                            <el-col :span="6" style="color: #2f74ff">同事</el-col>
                                            <el-col :span="6" style="color: rgb(249,149,0)">23</el-col>
                                        </li>
                                        <li>
                                            <el-col :span="12">156 3545 2153</el-col>
                                            <el-col :span="6" style="color: #2f74ff">同事</el-col>
                                            <el-col :span="6" style="color: rgb(249,149,0)">23</el-col>
                                        </li>
                                        <li>
                                            <el-col :span="12">156 3545 2153</el-col>
                                            <el-col :span="6" style="color: #2f74ff">同事</el-col>
                                            <el-col :span="6" style="color: rgb(249,149,0)">23</el-col>
                                        </li>
                                        <li>
                                            <el-col :span="12">156 3545 2153</el-col>
                                            <el-col :span="6" style="color: #2f74ff">同事</el-col>
                                            <el-col :span="6" style="color: rgb(249,149,0)">23</el-col>
                                        </li>
                                        <li>
                                            <el-col :span="12">156 3545 2153</el-col>
                                            <el-col :span="6" style="color: #2f74ff">同事</el-col>
                                            <el-col :span="6" style="color: rgb(249,149,0)">23</el-col>
                                        </li>
                                        <li>
                                            <el-col :span="12">156 3545 2153</el-col>
                                            <el-col :span="6" style="color: #2f74ff">同事</el-col>
                                            <el-col :span="6" style="color: rgb(249,149,0)">23</el-col>
                                        </li>
                                        <li>
                                            <el-col :span="12">156 3545 2153</el-col>
                                            <el-col :span="6" style="color: #2f74ff">同事</el-col>
                                            <el-col :span="6" style="color: rgb(249,149,0)">23</el-col>
                                        </li>
                                        <li>
                                            <el-col :span="12">156 3545 2153</el-col>
                                            <el-col :span="6" style="color: #2f74ff">同事</el-col>
                                            <el-col :span="6" style="color: rgb(249,149,0)">23</el-col>
                                        </li>
                                        <li>
                                            <el-col :span="12">156 3545 2153</el-col>
                                            <el-col :span="6" style="color: #2f74ff">同事</el-col>
                                            <el-col :span="6" style="color: rgb(249,149,0)">23</el-col>
                                        </li>
                                    </el-scrollbar>
                                </ul>
                            </div>
                        </div>
                    </el-col>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                buttons: ["近一周", "近一月", "近三个月", "近一年"],
                active: 0
            }
        },
        methods:{
            handleButton(index) {
                this.active = index
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../css/main-tab-4-public.scss';

    #mainTab4-3 {
        padding: 20px;
        .content {
            border: 1px solid rgba(0, 0, 0, 0.12);
            background: white;
            border-radius: 2px;
            padding: 20px;
            position: relative;
            .title {
                border-left: 4px solid $orangeColor;
                padding-left: 10px;
            }
            .menu{
                position: absolute;
                top: -10px;
                right: -10px;
            }
            .xiahuaxian {
                border-bottom: 1px solid rgba(0, 0, 0, 0.12);
                margin-top: 15px;
                margin-bottom: 15px;
            }
            .table {
                text-align: center;
                .head {
                    background: rgb(233, 239, 243);
                    height: 40px;
                    line-height: 40px;
                }
                .tr {
                    height: 40px;
                    line-height: 40px;
                    font-size: 14px;
                    &:nth-child(2n+1) {
                        background: rgb(233, 239, 243);
                    }
                }
            }
            #message {
                width: 100%;
                height: 100%;
                background: white;
                box-shadow: 2px 2px 10px grey;
                .con {
                    width: 100%;
                    height: 100%;
                    ul {
                        width: 100%;
                        height: 100%;
                        margin: 0;
                        box-sizing: border-box;
                        padding: 0;
                        text-align: center;
                        .header {
                            font-size: 14px;
                            font-weight: 600;
                            background: rgb(233, 239, 243);
                            border: none;
                        }
                        li {
                            list-style: none;
                            line-height: 35px;
                            height: 35px;
                            font-size: 13px;
                            border-bottom: 1px solid rgba(0, 0, 0, 0.159);
                        }
                        li:not(.header):hover {
                            background: $orangeColor;
                            color: white!important;
                        }
                    }
                }
            }
        }
    }
</style>
