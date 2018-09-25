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
                        <div class="buttons" style="height: 50px;">
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
                        <div class="buttons" style="height: 50px;">
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
                                    <div class="buttons" style="float: left">
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
                                <div style="height: 400px" id="peiChart-wrap">
                                    <div class="buttons">
                                        <span class="button">支出</span>
                                        <span class="button">收入</span>
                                    </div>
                                    <div id="pie1"></div>
                                </div>
                            </el-col>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        props: ["activeName"],
        data() {
            return {
                buttons: ["近一周", "近一月", "近三个月", "近一年"],
                active: 0
            }
        },
        mounted() {
            let vm = this
            setTimeout(function () {
                vm.$el.querySelector("#right").style.height = vm.$el.querySelector("#left").offsetHeight + 'px'
                vm.pie()
            }, 10)
            this.lineChart()
            this.pie1()
        },
        methods: {
            pie(){
                let option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{b}: {c} ({d}%)"
                    },
                    color:['rgb(43,154,242)','rgb(246,104,92)','rgb(245,107,91)','rgb(43,61,157)','rgb(145,199,171)','rgb(116,159,131)','rgb(112,69,151)'],
                    legend: {
                        orient: 'vertical',
                        x: 'right',
                        y:'0',
                        data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','百度','其他']
                    },
                    series: [
                        {
                            name:'访问来源',
                            type:'pie',
                            selectedMode: 'single',
                            radius: [0, '30%'],
                            center:[ '45%', '50%'],
                            label: {
                                normal: {
                                    position: 'inner'
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data:[
                                {value:335, name:'直达', selected:true},
                                {value:679, name:'营销广告'},
                                {value:1548, name:'搜索引擎'}
                            ]
                        },
                        {
                            name:'访问来源',
                            type:'pie',
                            label:{
                                show:true
                            },
                            radius: ['40%', '55%'],
                            center:[ '45%', '50%'],
                            data:[
                                {value:335, name:'直达'},
                                {value:310, name:'邮件营销'},
                                {value:234, name:'联盟广告'},
                                {value:135, name:'视频广告'},
                                {value:1048, name:'百度'},
                                {value:102, name:'其他'}
                            ]
                        }
                    ]
                };
                let pie=echarts.init(document.getElementById("right"))
                pie.setOption(option)
            },
            pie1(){
                let option = {
                    tooltip : {
                        trigger: 'item',
                        formatter: "{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'right',
                        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                    },
                    series : [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius : ["35%",'55%'],
                            center: ['50%', '50%'],
                            data:[
                                {value:335, name:'直接访问'},
                                {value:310, name:'邮件营销'},
                                {value:234, name:'联盟广告'},
                                {value:135, name:'视频广告'},
                                {value:1548, name:'搜索引擎'}
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };
                let pie=echarts.init(document.getElementById("pie1"))
                pie.setOption(option)
            },
            lineChart() {
                let option = {
                    tooltip : {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    legend: {
                        data:['邮件营销','联盟广告'],
                        icon:"rect",
                        right:'20'
                    },
                    grid: {
                        left: '6%',
                        right: '4%',
                        bottom: '3%',
                        top:'10%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : false,
                            data : ['5-1','5-3','5-3','5-4','5-5','5-6','5-7','5-8','5-9','5-10','5-11','5-12','5-13','5-14','5-15','5-16','5-17','5-18','5-19','5-20','5-21','5-22','5-23','5-24','5-25','5-26','5-27'],
                            axisLabel :{
                                interval: 1,
                                rotate:60
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            name : '流量(m^3/s)',
                            splitLine:{
                                show:true,
                                lineStyle: {
                                    width:0.6
                                }
                            },
                        },
                    ],
                    color:["rgb(50,69,164)","rgb(251,120,87)"],
                    series : [
                        {
                            name:'邮件营销',
                            type:'line',
                            symbol:"none",
                            lineStyle:{
                                width:1.2
                            },
                            data:[25,38,24,48,40,59,62,50,69,90,80,88,99,105,160,150,149,169,180,170,190,200,208,180,201,256,240,210]
                        },
                        {
                            name:'联盟广告',
                            type:'line',
                            symbol:"none",
                            lineStyle:{
                                width:1.2
                            },
                            areaStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#f9950073'
                                    }, {
                                        offset: 1, color: 'white'
                                    }]
                                }
                            },
                            data:[12,25,38,50,28,60,90,80,70,102,120,109,99,111,108,120,160,111,160,140,205,183,158,205,208,150,140,190]
                        }
                    ]
                };
                let leftChart=echarts.init(document.getElementById("leftChart"))
                leftChart.setOption(option)
            }
        }
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
            .menu1 {
                width: 360px;
                height: 28px;
                display: inline-block;
                float: right;
                margin-top: 19px;
                .button {
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
                /*float: left;*/
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
                    #peiChart-wrap, #leftChart {
                        width: 100%;
                        height: 400px;
                        float: left;
                        position: relative;
                        .button {
                            cursor: pointer;
                            box-sizing: border-box;
                            width: 80px;
                            margin: 0 20px;
                            display: inline-block;
                            height: 100%;
                            background: white;
                            box-shadow: 2px 2px 10px #adadad;
                            border-radius: 5px;
                            text-align: center;
                            line-height: 28px;
                            font-size: 13px;
                        }
                        #pie1{
                            width: 100%;
                            height: 100%;
                            position: absolute;
                            top: 0;
                        }
                    }
                }
            }

        }
    }
</style>
