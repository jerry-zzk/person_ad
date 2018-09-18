<template>
    <div id="general-federation">
        <div class="left">
            <div class="shuqian">
                <span class="fa fa-book" style="margin-right: 20px;margin-left: 17px"></span>书签
            </div>
            <el-scrollbar style="height: 100%">
                <ul class="type-wrap">
                <li v-for="item,index in type"
                    :key="index+0"
                    :class="{isActive:typeActive[index]}"
                    @click="handleType(index)">
                    <a @click="goEl('#type'+index)">
                        <span class="fa fa-lock"></span>
                        <span>{{item}}</span>
                    </a>
                </li>
                </ul>
            </el-scrollbar>
        </div>
        <div class="right" >
            <el-scrollbar style="height: 100%;" id="item-wrap">
                <div style="padding-right: 20px;" >
                    <div id="type0"  class="el-item">
                        <p class="tit"><b>.</b>欺诈风险</p>
                        <div class="head">
                            <el-row>
                                <el-col :span="8">
                                    <div class="type01">
                                        风险指标
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="type02">
                                        分析结果
                                    </div>
                                </el-col>
                                <el-col :span="10">
                                    <div class="type03">
                                        数据来源
                                    </div>
                                </el-col>
                            </el-row>

                        </div>
                        <el-row>
                            <el-col :span="8">
                                <div class="txt txt-left">身份证号有效性</div>
                            </el-col>
                            <el-col :span="6">
                                <div class="txt center">有效</div>
                            </el-col>
                            <el-col :span="10">
                                <div class="txt">ISO国际身份验证规则</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <div class="txt txt-left">运营商是否属实</div>
                            </el-col>
                            <el-col :span="6">
                                <div class="txt center">是</div>
                            </el-col>
                            <el-col :span="10">
                                <div class="txt">运营商实名信息</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <div class="txt txt-left">运营商是否与登记人一致</div>
                            </el-col>
                            <el-col :span="6">
                                <div class="txt center">不一致</div>
                            </el-col>
                            <el-col :span="10">
                                <div class="txt">运营商实名信息与个人登记信息匹配校验</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <div class="txt txt-left">是否出现长时间关机</div>
                            </el-col>
                            <el-col :span="6">
                                <div class="txt center">是</div>
                            </el-col>
                            <el-col :span="10">
                                <div class="txt">连续超过5天无数据、无通话、无短信记录</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <div class="txt txt-left">是否呼叫紧急联系人</div>
                            </el-col>
                            <el-col :span="6">
                                <div class="txt center">是</div>
                            </el-col>
                            <el-col :span="10">
                                <div class="txt">与提交的紧急联系人有通话记录</div>
                            </el-col>
                        </el-row>
                    </div>
                    <div id="type1"  class="el-item">
                        <p class="tit"><b>.</b>运营商基本信息</p>
                        <el-row>
                            <el-col :span="4">
                                <div class="txt txt-left1">运营商类型</div>
                            </el-col>
                            <el-col :span="8">
                                <div class="txt">中国移动</div>
                            </el-col>
                            <el-col :span="4">
                                <div class="txt">入网时间</div>
                            </el-col>
                            <el-col :span="8">
                                <div class="txt">2012-12-12</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4">
                                <div class="txt txt-left1">认证实名</div>
                            </el-col>
                            <el-col :span="8">
                                <div class="txt">雯雯</div>
                            </el-col>
                            <el-col :span="4">
                                <div class="txt">入网时间</div>
                            </el-col>
                            <el-col :span="8">
                                <div class="txt">2012-12-12</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4">
                                <div class="txt txt-left1">手机号</div>
                            </el-col>
                            <el-col :span="8">
                                <div class="txt">13261236365</div>
                            </el-col>
                            <el-col :span="4">
                                <div class="txt">登记邮箱</div>
                            </el-col>
                            <el-col :span="8">
                                <div class="txt">wenwen@qq.com</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4">
                                <div class="txt txt-left1">当前余额</div>
                            </el-col>
                            <el-col :span="8">
                                <div class="txt">358.6</div>
                            </el-col>
                            <el-col :span="4">
                                <div class="txt">会员等级</div>
                            </el-col>
                            <el-col :span="8">
                                <div class="txt">3级</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4">
                                <div class="txt txt-left1">积分值</div>
                            </el-col>
                            <el-col :span="8">
                                <div class="txt">120</div>
                            </el-col>
                            <el-col :span="4">
                                <div class="txt">网龄</div>
                            </el-col>
                            <el-col :span="8">
                                <div class="txt">5年9个月</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4">
                                <div class="txt txt-left1">最早通话时间</div>
                            </el-col>
                            <el-col :span="8">
                                <div class="txt">2012-12-12</div>
                            </el-col>
                            <el-col :span="4">
                                <div class="txt">最近通话时间</div>
                            </el-col>
                            <el-col :span="8">
                                <div class="txt">2012-12-21</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24">
                                <div class="txt txt-left1" style="padding-left: 25px">登记地址：<span style="margin-right: 40px"> </span>北京海淀区北四环西路255号方正国际大厦 252</div>
                            </el-col>
                        </el-row>
                    </div>
                    <div id="type2"  class="el-item">
                        <p class="tit"><b>.</b>运营商消费分析</p>
                        <div class="head">
                            <el-row>
                                <el-col :span="4">
                                    <div class="txt  left-jiao head-its">月份</div>
                                </el-col>
                                <el-col :span="5">
                                    <div class="txt head-its">主呼叫时间（分）</div>
                                </el-col>
                                <el-col :span="5">
                                    <div class="txt head-its">被呼叫时间（分）</div>
                                </el-col>
                                <el-col :span="5">
                                    <div class="txt head-its">短信数（条）</div>
                                </el-col>
                                <el-col :span="5">
                                    <div class="txt head-its right-jiao">话费充值（元）</div>
                                </el-col>
                            </el-row>
                        </div>
                        <el-row>
                            <el-col :span="4">
                                <div class="txt txt-left2 center">201212</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">569</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">256</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">112</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">120</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4">
                                <div class="txt txt-left2 center">201312</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">569</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">256</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">112</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">120</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4">
                                <div class="txt txt-left2 center">201412</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">569</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">256</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">112</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">120</div>
                            </el-col>
                        </el-row>
                    </div>
                    <div id="type3"  class="el-item">
                        <p class="tit"><b>.</b>通话记录分析</p>
                        <div class="head">
                            <el-row>
                                <el-col :span="4">
                                    <div class="txt  left-jiao head-its">号码</div>
                                </el-col>
                                <el-col :span="3">
                                    <div class="txt head-its">通话时长</div>
                                </el-col>
                                <el-col :span="3">
                                    <div class="txt head-its">通话次数</div>
                                </el-col>
                                <el-col :span="4">
                                    <div class="txt head-its">号码归属地</div>
                                </el-col>
                                <el-col :span="3">
                                    <div class="txt head-its">主叫次数</div>
                                </el-col>
                                <el-col :span="3">
                                    <div class="txt head-its">被叫次数</div>
                                </el-col>
                                <el-col :span="4">
                                    <div class="txt head-its right-jiao">号码标识</div>
                                </el-col>
                            </el-row>
                        </div>
                        <el-row>
                            <el-col :span="4">
                                <div class="txt txt-left3 center">02514651651</div>
                            </el-col>
                            <el-col :span="3">
                                <div class="txt center">265秒</div>
                            </el-col>
                            <el-col :span="3">
                                <div class="txt center">12</div>
                            </el-col>
                            <el-col :span="4">
                                <div class="txt center">江苏</div>
                            </el-col>
                            <el-col :span="3">
                                <div class="txt center">2</div>
                            </el-col>
                            <el-col :span="3">
                                <div class="txt center">20</div>
                            </el-col>
                            <el-col :span="4">
                                <div class="txt center">信用钱包</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4">
                                <div class="txt txt-left3 center">02514651651</div>
                            </el-col>
                            <el-col :span="3">
                                <div class="txt center">265秒</div>
                            </el-col>
                            <el-col :span="3">
                                <div class="txt center">12</div>
                            </el-col>
                            <el-col :span="4">
                                <div class="txt center">江苏</div>
                            </el-col>
                            <el-col :span="3">
                                <div class="txt center">2</div>
                            </el-col>
                            <el-col :span="3">
                                <div class="txt center">20</div>
                            </el-col>
                            <el-col :span="4">
                                <div class="txt center">信用钱包</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4">
                                <div class="txt txt-left3 center">02514651651</div>
                            </el-col>
                            <el-col :span="3">
                                <div class="txt center">265秒</div>
                            </el-col>
                            <el-col :span="3">
                                <div class="txt center">12</div>
                            </el-col>
                            <el-col :span="4">
                                <div class="txt center">江苏</div>
                            </el-col>
                            <el-col :span="3">
                                <div class="txt center">2</div>
                            </el-col>
                            <el-col :span="3">
                                <div class="txt center">20</div>
                            </el-col>
                            <el-col :span="4">
                                <div class="txt center">信用钱包</div>
                            </el-col>
                        </el-row>
                    </div>
                    <div id="type4"  class="el-item">
                        <p class="tit"><b>.</b>短信记录</p>
                        <div class="head">
                            <el-row>
                                <el-col :span="5">
                                    <div class="txt  left-jiao head-its">号码</div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="txt head-its">号码归属地</div>
                                </el-col>
                                <el-col :span="5">
                                    <div class="txt head-its">条数</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="txt head-its right-jiao">号码标识</div>
                                </el-col>
                            </el-row>
                        </div>
                        <el-row>
                            <el-col :span="5">
                                <div class="txt txt-left4 center">56126512</div>
                            </el-col>
                            <el-col :span="6">
                                <div class="txt center">北京</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">11</div>
                            </el-col>
                            <el-col :span="8">
                                <div class="txt center">招商银行2</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="5">
                                <div class="txt txt-left4 center">56126512</div>
                            </el-col>
                            <el-col :span="6">
                                <div class="txt center">北京</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">11</div>
                            </el-col>
                            <el-col :span="8">
                                <div class="txt center">招商银行2</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="5">
                                <div class="txt txt-left4 center">56126512</div>
                            </el-col>
                            <el-col :span="6">
                                <div class="txt center">北京</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">11</div>
                            </el-col>
                            <el-col :span="8">
                                <div class="txt center">招商银行2</div>
                            </el-col>
                        </el-row>
                    </div>
                    <div id="type5"  class="el-item">
                        <p class="tit"><b>.</b>联系人区域分析</p>
                        <div class="head">
                            <el-row>
                                <el-col :span="4">
                                    <div class="txt  left-jiao head-its">地区</div>
                                </el-col>
                                <el-col :span="3">
                                    <div class="txt head-its">号码数量</div>
                                </el-col>
                                <el-col :span="3">
                                    <div class="txt head-its">主叫次数</div>
                                </el-col>
                                <el-col :span="4">
                                    <div class="txt head-its">主叫时间</div>
                                </el-col>
                                <el-col :span="3">
                                    <div class="txt head-its">被叫次数</div>
                                </el-col>
                                <el-col :span="3">
                                    <div class="txt head-its">被叫时间</div>
                                </el-col>
                                <el-col :span="4">
                                    <div class="txt head-its right-jiao">占比</div>
                                </el-col>
                            </el-row>
                        </div>
                        <el-row>
                            <el-col :span="4">
                                <div class="txt txt-left center">北京</div>
                            </el-col>
                            <el-col :span="3">
                                <div class="txt center">22</div>
                            </el-col>
                            <el-col :span="3">
                                <div class="txt center">5262</div>
                            </el-col>
                            <el-col :span="4">
                                <div class="txt center">5716</div>
                            </el-col>
                            <el-col :span="3">
                                <div class="txt center">852</div>
                            </el-col>
                            <el-col :span="3">
                                <div class="txt center">2321</div>
                            </el-col>
                            <el-col :span="4">
                                <div class="txt center">85.4%</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4">
                                <div class="txt txt-left center">北京</div>
                            </el-col>
                            <el-col :span="3">
                                <div class="txt center">22</div>
                            </el-col>
                            <el-col :span="3">
                                <div class="txt center">5262</div>
                            </el-col>
                            <el-col :span="4">
                                <div class="txt center">5716</div>
                            </el-col>
                            <el-col :span="3">
                                <div class="txt center">852</div>
                            </el-col>
                            <el-col :span="3">
                                <div class="txt center">2321</div>
                            </el-col>
                            <el-col :span="4">
                                <div class="txt center">85.4%</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4">
                                <div class="txt txt-left center">北京</div>
                            </el-col>
                            <el-col :span="3">
                                <div class="txt center">22</div>
                            </el-col>
                            <el-col :span="3">
                                <div class="txt center">5262</div>
                            </el-col>
                            <el-col :span="4">
                                <div class="txt center">5716</div>
                            </el-col>
                            <el-col :span="3">
                                <div class="txt center">852</div>
                            </el-col>
                            <el-col :span="3">
                                <div class="txt center">2321</div>
                            </el-col>
                            <el-col :span="4">
                                <div class="txt center">85.4%</div>
                            </el-col>
                        </el-row>
                    </div>
                    <div id="type6"  class="el-item">
                        <p class="tit"><b>.</b>出行风险分析</p>
                        <div class="head">
                            <el-row>
                                <el-col :span="6">
                                    <div class="txt  left-jiao head-its">出发时间</div>
                                </el-col>
                                <el-col :span="4">
                                    <div class="txt head-its">出发地</div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="txt head-its">到达时间</div>
                                </el-col>
                                <el-col :span="4">
                                    <div class="txt head-its">目的地</div>
                                </el-col>
                                <el-col :span="4">
                                    <div class="txt head-its right-jiao">停留时间</div>
                                </el-col>
                            </el-row>
                        </div>
                        <el-row>
                            <el-col :span="6">
                                <div class="txt txt-left1 center">2016年8月10日 22时</div>
                            </el-col>
                            <el-col :span="4">
                                <div class="txt center">北京</div>
                            </el-col>
                            <el-col :span="6">
                                <div class="txt center">2016年8月10日 22时</div>
                            </el-col>
                            <el-col :span="4">
                                <div class="txt center">深圳</div>
                            </el-col>
                            <el-col :span="4">
                                <div class="txt center">218小时</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="6">
                                <div class="txt txt-left1 center">2016年8月10日 22时</div>
                            </el-col>
                            <el-col :span="4">
                                <div class="txt center">北京</div>
                            </el-col>
                            <el-col :span="6">
                                <div class="txt center">2016年8月10日 22时</div>
                            </el-col>
                            <el-col :span="4">
                                <div class="txt center">深圳</div>
                            </el-col>
                            <el-col :span="4">
                                <div class="txt center">218小时</div>
                            </el-col>
                        </el-row>
                    </div>
                    <div id="type7"  class="el-item">
                        <p class="tit"><b>.</b>特定需求分析</p>
                        <div class="head">
                            <el-row>
                                <el-col :span="4">
                                    <div class="txt  left-jiao head-its">月份</div>
                                </el-col>
                                <el-col :span="5">
                                    <div class="txt head-its">名称</div>
                                </el-col>
                                <el-col :span="5">
                                    <div class="txt head-its">号码</div>
                                </el-col>
                                <el-col :span="5">
                                    <div class="txt head-its">通话次数</div>
                                </el-col>
                                <el-col :span="5">
                                    <div class="txt head-its right-jiao">短信条数</div>
                                </el-col>
                            </el-row>
                        </div>
                        <el-row>
                            <el-col :span="4">
                                <div class="txt txt-left2 center">2016-9</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">信用钱包</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">1564321654</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">12</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">12</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4">
                                <div class="txt txt-left2 center">2016-9</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">信用钱包</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">1564321654</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">12</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">12</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4">
                                <div class="txt txt-left2 center">2016-9</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">信用钱包</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">1564321654</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">12</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">12</div>
                            </el-col>
                        </el-row>
                    </div>
                    <div id="type8"  class="el-item">
                        <p class="tit"><b>.</b>通话风险分析</p>
                        <div class="head">
                            <el-row>
                                <el-col :span="8">
                                    <div class="type01">
                                        分析指标
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="type02 center">
                                        分析结果
                                    </div>
                                </el-col>
                                <el-col :span="10">
                                    <div class="type03">
                                        数据来源
                                    </div>
                                </el-col>
                            </el-row>

                        </div>
                        <el-row>
                            <el-col :span="8">
                                <div class="txt txt-left3 center">110通话记录</div>
                            </el-col>
                            <el-col :span="6">
                                <div class="txt center">6次</div>
                            </el-col>
                            <el-col :span="10">
                                <div class="txt center">通话列表、公安数据</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <div class="txt txt-left3 center">110通话记录</div>
                            </el-col>
                            <el-col :span="6">
                                <div class="txt center">6次</div>
                            </el-col>
                            <el-col :span="10">
                                <div class="txt center">通话列表、公安数据</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <div class="txt txt-left3 center">110通话记录</div>
                            </el-col>
                            <el-col :span="6">
                                <div class="txt center">6次</div>
                            </el-col>
                            <el-col :span="10">
                                <div class="txt center">通话列表、公安数据</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <div class="txt txt-left3 center">110通话记录</div>
                            </el-col>
                            <el-col :span="6">
                                <div class="txt center">6次</div>
                            </el-col>
                            <el-col :span="10">
                                <div class="txt center">通话列表、公安数据</div>
                            </el-col>
                        </el-row>
                    </div>
                    <div id="type9"  class="el-item">
                        <p class="tit"><b>.</b>朋友圈分析</p>
                        <div class="head">
                            <el-row>
                                <el-col :span="8">
                                    <div class="type01">
                                        风险指标
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="type02 center">
                                        分析结果
                                    </div>
                                </el-col>
                                <el-col :span="10">
                                    <div class="type03">
                                        数据来源
                                    </div>
                                </el-col>
                            </el-row>

                        </div>
                        <el-row>
                            <el-col :span="8">
                                <div class="txt txt-left3 center">近6月联系号码数</div>
                            </el-col>
                            <el-col :span="6">
                                <div class="txt center">121个</div>
                            </el-col>
                            <el-col :span="10">
                                <div class="txt center">通话列表</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <div class="txt txt-left3 center">近6月联系号码数</div>
                            </el-col>
                            <el-col :span="6">
                                <div class="txt center">121个</div>
                            </el-col>
                            <el-col :span="10">
                                <div class="txt center">通话列表</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <div class="txt txt-left3 center">近6月联系号码数</div>
                            </el-col>
                            <el-col :span="6">
                                <div class="txt center">121个</div>
                            </el-col>
                            <el-col :span="10">
                                <div class="txt center ">通话列表</div>
                            </el-col>
                        </el-row>
                    </div>
                    <div id="type10"  class="el-item">
                        <p class="tit"><b>.</b>流量使用分析</p>
                        <div class="head">
                            <el-row>
                                <el-col :span="8">
                                    <div class="type01">
                                        月份
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="type02 ">
                                        流量使用数
                                    </div>
                                </el-col>
                                <el-col :span="10">
                                    <div class="type03">
                                        数据来源
                                    </div>
                                </el-col>
                            </el-row>

                        </div>
                        <el-row>
                            <el-col :span="8">
                                <div class="txt txt-left4 center">2018-12</div>
                            </el-col>
                            <el-col :span="6">
                                <div class="txt center">3.5G</div>
                            </el-col>
                            <el-col :span="10">
                                <div class="txt center">运营商</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <div class="txt txt-left4 center">2018-12</div>
                            </el-col>
                            <el-col :span="6">
                                <div class="txt center">3.5G</div>
                            </el-col>
                            <el-col :span="10">
                                <div class="txt center">运营商</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <div class="txt txt-left4 center">2018-12</div>
                            </el-col>
                            <el-col :span="6">
                                <div class="txt center">3.5G</div>
                            </el-col>
                            <el-col :span="10">
                                <div class="txt center">运营商</div>
                            </el-col>
                        </el-row>
                    </div>
                    <div id="type11"  class="el-item">
                        <p class="tit"><b>.</b>APP打开分析</p>
                        <div class="head">
                            <el-row>
                                <el-col :span="8">
                                    <div class="type01">
                                        APP名称
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="type02 ">
                                        打开评率（天）
                                    </div>
                                </el-col>
                                <el-col :span="10">
                                    <div class="type03">
                                        平均使用时长
                                    </div>
                                </el-col>
                            </el-row>

                        </div>
                        <el-row>
                            <el-col :span="8">
                                <div class="txt txt-left center">招商银行信用卡</div>
                            </el-col>
                            <el-col :span="6">
                                <div class="txt center">3</div>
                            </el-col>
                            <el-col :span="10 ">
                                <div class="txt center">10min</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <div class="txt txt-left center">招商银行信用卡</div>
                            </el-col>
                            <el-col :span="6">
                                <div class="txt center">3</div>
                            </el-col>
                            <el-col :span="10 ">
                                <div class="txt center">10min</div>
                            </el-col>
                        </el-row>

                    </div>
                    <div id="type12"  class="el-item">
                        <p class="tit"><b>.</b>催收电话分析</p>
                        <div class="head">
                            <el-row>
                                <el-col :span="4">
                                    <div class="txt  left-jiao head-its">电话类型</div>
                                </el-col>
                                <el-col :span="5">
                                    <div class="txt head-its">主呼叫次数</div>
                                </el-col>
                                <el-col :span="5">
                                    <div class="txt head-its">被呼叫次数</div>
                                </el-col>
                                <el-col :span="5">
                                    <div class="txt head-its">成功接通次数</div>
                                </el-col>
                                <el-col :span="5">
                                    <div class="txt head-its right-jiao">通话时长</div>
                                </el-col>
                            </el-row>
                        </div>
                        <el-row>
                            <el-col :span="4">
                                <div class="txt txt-left2 center">宜人贷</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">3</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">5</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">6</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">10min</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4">
                                <div class="txt txt-left2 center">宜人贷</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">3</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">5</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">6</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="txt center">10min</div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-scrollbar>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                type: ["欺诈风险", "运营商基本信息", "运营商消费分析", "通话记录分析",
                    "短信记录", "联系人区域分析", "出行风险分析", "特定需求分析",
                    "通话风险分析", "朋友圈分析", "流量使用分析", "APP打开分析", "催收电话分析"],
                typeActive: [true, false, false, false, false, false, false, false, false, false, false, false, false]
            }
        },
        methods: {
            handleType(index) {
                let arr=[]
                for (let x in this.typeActive) {
                    if(x==index){
                        arr.push(true)
                    }else {
                        arr.push(false)
                    }
                }
                this.typeActive = arr
            },
            goEl(el){
                let ele =this.$el.querySelector(el)
                document.getElementById('item-wrap').children[0].scrollTop=ele.offsetTop
            }
        }
    }
</script>
<style lang="scss" scoped>
    #general-federation {
        height: 100%;
        width: 100%;
        color: rgba(0, 0, 0, 0.8);
        .left {
            width: 160px;
            height: 100%;
            overflow: hidden;
            float: left;
            border-right: 1px solid rgba(0, 0, 0, 0.2);
            .shuqian {
                width: 100%;
                height: 50px;
                line-height: 50px;
                border-top: 1px solid rgba(0, 0, 0, 0.2);
                border-bottom: 1px solid rgba(0, 0, 0, 0.2);
                font-size: 16px;
            }
            .type-wrap {
                padding: 0 17px;
                list-style: none;
                li.isActive {
                    color: #2f74ff;
                    span {
                        color: #2f74ff!important;
                    }
                }
                li {
                    height: 46px;
                    line-height: 46px;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
                    font-size: 13px;
                    cursor: pointer;
                    &:hover {
                        color: #2f74ff;
                    }
                    span:nth-child(1) {
                        margin-right: 16px;
                        color: rgba(0, 0, 0, 0.4);
                    }
                    a {
                        color: rgba(0, 0, 0, 0.8);
                        display: inline-block;
                        width: 100%;
                    }
                }
            }
        }
        .right {
            float: left;
            height: 100%;
            overflow: hidden;
            box-sizing: border-box;
            width: calc(100% - 162px);
            .el-item {
                padding-left: 20px;
                .tit{
                    font-weight: 700;
                    margin: 0;
                    margin-bottom: 6px;
                    b{
                        margin-right: 10px;
                        position: relative;
                        font-size: 35px;
                        color:rgb(64, 154, 254);
                        top: -3px;
                    }
                }
                .head {
                    margin-bottom: 5px;
                    .type01 {
                        width: calc(100% - 2px);
                        height: 100%;
                        margin: 0 2px 0 0;
                        box-sizing: border-box;
                        background: rgb(64, 154, 254);
                        height: 40px;
                        text-align: center;
                        line-height: 40px;
                        color: white ;
                        border-radius: 10px 0 0 0;

                    }
                    .type02{
                        width: calc(100% - 4px);
                        height: 100%;
                        margin: 0 2px 0 2px;
                        box-sizing: border-box;
                        background: rgb(64, 154, 254);
                        height: 40px;
                        text-align: center;
                        line-height: 40px;
                        color: white ;
                    }
                    .type03 {
                        width: calc(100% - 2px);
                        height: 100%;
                        margin: 0 0 0 2px;
                        box-sizing: border-box;
                        background: rgb(64, 154, 254);;
                        height: 40px;
                        text-align: center;
                        line-height: 40px;
                        color: white ;
                        border-radius:  0 10px 0 0;
                    }
                }
                .txt{
                    height: 40px;
                    line-height: 40px;
                    padding-left: 15%;
                    box-sizing: border-box;
                    border: 1px solid rgba(0,0,0,0.12);
                    font-family: '楷体';
                    overflow: hidden;
                    font-size: 14px;
                }
                .txt-left{
                    border-left: 4px solid rgb(188,215,84);
                }
                .txt-left1{
                    border-left: 4px solid rgb(118,203,196);
                }
                .txt-left2{
                    border-left: 4px solid rgb(100,165,196);
                }
                .txt-left3{
                    border-left: 4px solid rgb(109,132,196);
                }
                .txt-left4{
                    border-left: 4px solid rgb(142,107,207);
                }
                .center{
                    text-align: center;
                    padding-left: 0;
                }
                .head-its{
                    margin: 0 2px 0 0;
                    box-sizing: border-box;
                    background: rgb(64, 154, 254);
                    height: 40px;
                    text-align: center;
                    line-height: 40px;
                    color: white ;
                    border: none;
                    padding-left: 0!important;
                }
                .left-jiao{
                    border-radius: 10px 0 0 0;
                }
                .right-jiao{
                    border-radius: 0 10px 0 0;
                }
            }
        }
    }
</style>
