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
                        <div id="relativeChart"></div>
                    </el-col>
                    <el-col :span="8" style="height: calc(100vh - 528px);;overflow: hidden;min-height: 326px">
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
    import echarts from 'echarts'
    export default {
        data() {
            return {
                buttons: ["近一周", "近一月", "近三个月", "近一年"],
                active: 0
            }
        },
        mounted(){
            this.relativeChart()
        },
        methods: {
            handleButton(index) {
                this.active = index
            },
            relativeChart(){
                let chart = echarts.init(document.getElementById('relativeChart'));
                chart.setOption({
                    tooltip: {
                        formatter: function(x) {
                            return x.data.des;
                        }
                    },
                    animationDuration: 1500,
                    animationEasingUpdate: 'quinticInOut',
                    series: [{

                        type: 'graph',
                        layout: 'force',
                        symbolSize: 58,
                        roam: true,
                        edgeSymbol: ['circle', 'arrow'],
                        // edgeSymbolSize: [80, 10],
                        edgeLabel: {
                            normal: {
                                textStyle: {
                                    fontSize: 20
                                }
                            }
                        },
                        focusNodeAdjacency: true,
                        force: {
                            repulsion: 2500,
                            edgeLength: [10, 50]
                        },
                        draggable: true,
                        itemStyle: {
                            normal: {
                                color: '#4b565b'
                            }
                        },
                        lineStyle: {
                            color: 'source',
                            curveness: 0.3,

                        },
                        edgeLabel: {
                            normal: {
                                show: true,
                                formatter: function(x) {
                                    return x.data.name;
                                }
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                textStyle: {}
                            }
                        },
                        data: [{
                            name: '侯亮平',
                            des: '最高检反贪局侦查处处长，汉东省人民检察院副检察长兼反贪局局长。<br/>经过与腐败违法分子的斗争，最终将一批腐败分子送上了审判台，<br/>正义战胜邪恶，自己也迎来了成长。',
                            symbolSize: 100,
                            itemStyle: {
                                normal: {
                                    color: 'red'
                                }
                            }
                        }, {
                            name: '李达康',
                            des: '汉东省省委常委，京州市市委书记。是一个正义无私的好官。<br/>但为人过于爱惜自己的羽毛，对待身边的亲人和朋友显得有些无情。',
                            itemStyle: {
                                normal: {
                                    color: 'red'
                                }
                            }
                        }, {
                            name: '祁同伟',
                            des: '汉东省公安厅厅长',
                            symbolSize: 100
                        }, {
                            name: '陈岩石',
                            des: '离休干部、汉东省检察院前常务副检察长。充满正义，平凡而普通的共 产 党人。<br/>对大老虎赵立春，以各种形式执着举报了十二年。<br/>在这场关系党和国家生死存亡的斗争中，老人家以耄耋高龄，<br/>义无反顾地背起了炸 药包，在反腐胜利前夕因病去世。',
                            itemStyle: {
                                normal: {
                                    color: 'green'
                                }
                            }
                        }, {
                            name: '陆亦可',
                            des: '汉东省检察院反贪局一处处长',
                            itemStyle: {
                                normal: {
                                    color: 'green'
                                }
                            }
                        }, {
                            name: '高育良',
                            des: '汉东省省委副书记兼政法委书记。年近六十，是一个擅长太极功夫的官场老手。侯亮平、陈海和祁同伟是其学生。',
                            symbolSize: 100
                        }, {
                            name: '沙瑞金',
                            des: '汉东省省委书记',
                            itemStyle: {
                                normal: {
                                    color: 'red'
                                }
                            }
                        }, {
                            name: '高小琴',
                            des: '山水集团董事长，是一位叱咤于政界和商界的风云人物，处事圆滑、精明干练。'
                        }, {
                            name: '高小凤'
                        }, {
                            name: '赵东来',
                            des: '汉东省京州市公安局局长，充满正义，整治恶势力，<br/>在与检察部门的合作中从最初的质疑到之后的通力配合。',
                            itemStyle: {
                                normal: {
                                    color: 'green'
                                }
                            }
                        }, {
                            name: '程度',
                            des: '汉东省京州市公安局光明区分局局长，因犯错误，被李达康书记和赵东来局长点名要清除公安队伍。<br/>但在高小琴的帮助下，祁同伟调他当上了省公安厅办公室副主任。<br/>尽管程度逃避了所有罪责，上面也有人保他，<br/>但最终还是在反贪局局长侯亮平的缜密侦查下被绳之于法。',
                        }, {
                            name: '吴惠芬',
                            des: '汉东省省委副书记高育良的妻子，汉东大学明史教授。',
                            itemStyle: {
                                normal: {
                                    color: 'red'
                                }
                            }
                        }, {
                            name: '赵瑞龙',
                            des: '副国级人物赵立春的公子哥，官二代，打着老子的旗子，<br/>黑白两道通吃，可谓呼风唤雨，权倾一时。',
                        }, {
                            name: '赵立春',
                            des: '副国级领导人，曾经的改革闯将，在权利面前，显得极其渺小。',
                        }, {
                            name: '陈海',
                            itemStyle: {
                                normal: {
                                    color: 'red'
                                }
                            }
                        }, {
                            name: '梁璐',
                            itemStyle: {
                                normal: {
                                    color: 'red'
                                }
                            }
                        }, {
                            name: '刘新建'
                        }, {
                            name: '欧阳菁'
                        }, {
                            name: '吴心怡',
                            itemStyle: {
                                normal: {
                                    color: 'green'
                                }
                            }
                        }, {
                            name: '蔡成功'
                        }, {
                            name: '丁义珍'
                        }],
                        links: [{
                            source: '高育良',
                            target: '侯亮平',
                            name: '师生',
                            des: '侯亮平是高育良的得意门生'
                        }, {
                            source: '高育良',
                            target: '祁同伟',
                            name: '师生'
                        }, {
                            source: '赵立春',
                            target: '高育良',
                            name: "前领导"
                        }, {
                            source: '赵立春',
                            target: '赵瑞龙',
                            name: "父子"
                        }, {
                            source: '赵立春',
                            target: '刘新建',
                            name: "前部队下属"
                        }, {
                            source: '李达康',
                            target: '赵立春',
                            name: "前任秘书"
                        }, {
                            source: '祁同伟',
                            target: '高小琴',
                            name: "情人"
                        }, {
                            source: '陈岩石',
                            target: '陈海',
                            name: "父子"
                        }, {
                            source: '陆亦可',
                            target: '陈海',
                            name: "属下"
                        }, {
                            source: '沙瑞金',
                            target: '陈岩石',
                            name: "故人"
                        }, {
                            source: '祁同伟',
                            target: '陈海',
                            name: "师哥"
                        }, {
                            source: '祁同伟',
                            target: '侯亮平',
                            name: "师哥"
                        }, {
                            source: '侯亮平',
                            target: '陈海',
                            name: "同学，生死朋友"
                        }, {
                            source: '高育良',
                            target: '吴惠芬',
                            name: "夫妻"
                        }, {
                            source: '陈海',
                            target: '赵东来',
                            name: "朋友"
                        }, {
                            source: '高小琴',
                            target: '高小凤',
                            name: "双胞胎",
                            symbolSize: '1'
                        }, {
                            source: '赵东来',
                            target: '陆亦可',
                            name: "爱慕"
                        }, {
                            source: '祁同伟',
                            target: '程度',
                            name: "领导"
                        }, {
                            source: '高育良',
                            target: '高小凤',
                            name: "情人"
                        }, {
                            source: '赵瑞龙',
                            target: '祁同伟',
                            name: "勾结",
                            symbolSize: '1',
                        }, {
                            source: '李达康',
                            target: '赵东来',
                            name: "领导"
                        }, {
                            source: '赵瑞龙',
                            target: '程度',
                            name: "领导"
                        }, {
                            source: '沙瑞金',
                            target: '李达康',
                            name: "领导"
                        }, {
                            source: '沙瑞金',
                            target: '高育良',
                            name: "领导"
                        }, {
                            source: '祁同伟',
                            target: '梁璐',
                            name: "夫妻"
                        }, {
                            source: '吴惠芬',
                            target: '梁璐',
                            name: "朋友"
                        }, {
                            source: '李达康',
                            target: '欧阳菁',
                            name: "夫妻"
                        }, {
                            source: '赵瑞龙',
                            target: '刘新建',
                            name: "洗钱工具"
                        }, {
                            source: '赵瑞龙',
                            target: '高小琴',
                            name: "勾结，腐化",
                            symbolSize: '1'
                        }, {
                            source: '赵瑞龙',
                            target: '高小凤',
                            name: "腐化"
                        }, {
                            source: '吴心怡',
                            target: '陆亦可',
                            name: "母女"
                        }, {
                            source: '吴心怡',
                            target: '吴惠芬',
                            name: "姐妹"
                        }, {
                            source: '蔡成功',
                            target: '侯亮平',
                            name: "发小"
                        }, {
                            source: '蔡成功',
                            target: '欧阳菁',
                            name: "举报",
                            lineStyle: {
                                normal: {
                                    type: 'dotted',
                                    color: '#000'
                                }
                            }
                        }, {
                            source: '欧阳菁',
                            target: '刘新建',
                            name: "举报",
                            lineStyle: {
                                normal: {
                                    type: 'dotted',
                                    color: '#000'
                                }
                            }
                        }, {
                            source: '刘新建',
                            target: '赵瑞龙',
                            name: "举报",
                            lineStyle: {
                                normal: {
                                    type: 'dotted',
                                    color: '#000'
                                }
                            }
                        }, {
                            source: '李达康',
                            target: '丁义珍',
                            name: "领导"
                        }, {
                            source: '高小琴',
                            target: '丁义珍',
                            name: "策划出逃"
                        }, {
                            source: '祁同伟',
                            target: '丁义珍',
                            name: "勾结"
                        }, {
                            source: '赵瑞龙',
                            target: '丁义珍',
                            name: "勾结"
                        }]
                    }]
                })
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
            .menu {
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
            #relativeChart {
                height: calc(100vh - 520px);
                min-height: 326px;
                box-sizing: border-box;
                padding: 20px;
                box-sizing: border-box;
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
                            color: white !important;
                        }
                    }
                }
            }
        }
    }
</style>
