<template>
    <div id="fraudulent-alarm">
        <p class="title">
            <span style="margin-left: 20px">欺诈评分：<span style="color: red">9.4</span></span>
            <span style="margin-left: 160px">告警级别：<span style="color: red">4级</span></span>
        </p>
        <div class="item">
            <p class="head">
                <span class="col1">欺诈类型</span>
                <span class="col2">检测模型与规则</span>
                <span class="col3">是否有行为</span>
                <span class="col4">欺诈评分</span>
                <span class="col5">说明</span>
            </p>
            <div class="content">
                <div class="col1 left">身份欺诈</div>
                <div class="right">
                    <span class="its">身份证号正确性</span>
                    <span class="its">非欺诈</span>
                    <span class="its">0</span>
                    <span class="its">&nbsp;</span>
                </div>
                <div class="right">
                    <span class="its">手机号码真实性</span>
                    <span class="its" style="color: red">欺诈</span>
                    <span class="its">9.6</span>
                    <span class="its">&nbsp;</span>
                </div>
                <div class="right">
                    <span class="its">地址信息正确性</span>
                    <span class="its" style="color: orange">疑似欺诈</span>
                    <span class="its">4.8</span>
                    <span class="its">&nbsp;</span>
                </div>
                <div class="right">
                    <span class="its">教育信息真实性</span>
                    <span class="its">非欺诈</span>
                    <span class="its">&nbsp;</span>
                    <span class="its">&nbsp;</span>
                </div>
                <div class="right">
                    <span class="its">亲属信息正确性</span>
                    <span class="its" style="color: red">欺诈</span>
                    <span class="its">9.6</span>
                    <span class="its">&nbsp;</span>
                </div>
            </div>
            <div class="content">
                <div class="col1 left">黑名单欺诈</div>
                <div class="right">
                    <span class="its">身份证号正确性</span>
                    <span class="its">非欺诈</span>
                    <span class="its">0</span>
                    <span class="its">&nbsp;</span>
                </div>
                <div class="right">
                    <span class="its">手机号码真实性</span>
                    <span class="its" style="color: red">欺诈</span>
                    <span class="its">9.6</span>
                    <span class="its">&nbsp;</span>
                </div>
                <div class="right">
                    <span class="its">地址信息正确性</span>
                    <span class="its" style="color: orange">疑似欺诈</span>
                    <span class="its">4.8</span>
                    <span class="its">&nbsp;</span>
                </div>
                <div class="right">
                    <span class="its">教育信息真实性</span>
                    <span class="its">非欺诈</span>
                    <span class="its">&nbsp;</span>
                    <span class="its">&nbsp;</span>
                </div>
                <div class="right">
                    <span class="its">亲属信息正确性</span>
                    <span class="its" style="color: red">欺诈</span>
                    <span class="its">9.6</span>
                    <span class="its">&nbsp;</span>
                </div>
            </div>
            <div class="content">
                <div class="col1 left">金融欺诈</div>
                <div class="right">
                    <span class="its">身份证号正确性</span>
                    <span class="its">非欺诈</span>
                    <span class="its">0</span>
                    <span class="its">&nbsp;</span>
                </div>
                <div class="right">
                    <span class="its">手机号码真实性</span>
                    <span class="its" style="color: red">欺诈</span>
                    <span class="its">9.6</span>
                    <span class="its">&nbsp;</span>
                </div>
                <div class="right">
                    <span class="its">地址信息正确性</span>
                    <span class="its" style="color: orange">疑似欺诈</span>
                    <span class="its">4.8</span>
                    <span class="its">&nbsp;</span>
                </div>
                <div class="right">
                    <span class="its">教育信息真实性</span>
                    <span class="its">非欺诈</span>
                    <span class="its">&nbsp;</span>
                    <span class="its">&nbsp;</span>
                </div>
                <div class="right">
                    <span class="its">亲属信息正确性</span>
                    <span class="its" style="color: red">欺诈</span>
                    <span class="its">9.6</span>
                    <span class="its">&nbsp;</span>
                </div>
            </div>
            <div class="content">
                <div class="col1 left">设备欺诈</div>
                <div class="right">
                    <span class="its">身份证号正确性</span>
                    <span class="its">非欺诈</span>
                    <span class="its">0</span>
                    <span class="its">&nbsp;</span>
                </div>
                <div class="right">
                    <span class="its">手机号码真实性</span>
                    <span class="its" style="color: red">欺诈</span>
                    <span class="its">9.6</span>
                    <span class="its">&nbsp;</span>
                </div>
                <div class="right">
                    <span class="its">地址信息正确性</span>
                    <span class="its" style="color: orange">疑似欺诈</span>
                    <span class="its">4.8</span>
                    <span class="its">&nbsp;</span>
                </div>
                <div class="right">
                    <span class="its">教育信息真实性</span>
                    <span class="its">非欺诈</span>
                    <span class="its">&nbsp;</span>
                    <span class="its">&nbsp;</span>
                </div>
                <div class="right">
                    <span class="its">亲属信息正确性</span>
                    <span class="its" style="color: red">欺诈</span>
                    <span class="its">9.6</span>
                    <span class="its">&nbsp;</span>
                </div>
            </div>
            <div class="content">
                <div class="col1 left">团伙欺诈</div>
                <div class="right">
                    <span class="its">身份证号正确性</span>
                    <span class="its">非欺诈</span>
                    <span class="its">0</span>
                    <span class="its">&nbsp;</span>
                </div>
                <div class="right">
                    <span class="its">手机号码真实性</span>
                    <span class="its" style="color: red">欺诈</span>
                    <span class="its">9.6</span>
                    <span class="its">&nbsp;</span>
                </div>
                <div class="right">
                    <span class="its">地址信息正确性</span>
                    <span class="its" style="color: orange">疑似欺诈</span>
                    <span class="its">4.8</span>
                    <span class="its">&nbsp;</span>
                </div>
                <div class="right">
                    <span class="its">教育信息真实性</span>
                    <span class="its">非欺诈</span>
                    <span class="its">&nbsp;</span>
                    <span class="its">&nbsp;</span>
                </div>
                <div class="right">
                    <span class="its">亲属信息正确性</span>
                    <span class="its" style="color: red">欺诈</span>
                    <span class="its">9.6</span>
                    <span class="its">&nbsp;</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        }
    }
</script>
<style lang="scss" scoped>
    #fraudulent-alarm{
        padding-right: 20px;
        .title {
            margin: 0;
            font-size: 18px;
            line-height: 40px;
            height: 40px;
            color: rgba(0, 0, 0, 0.8);
        }

        .col1 {
            display: inline-block;
            width: calc(20% - 2px);
        }

        .col2 {
            display: inline-block;
            width: calc(20% - 4px);
        }

        .col3 {
            display: inline-block;
            width: calc(20% - 4px);
        }

        .col4 {
            display: inline-block;
            width: calc(20% - 4px);
        }

        .col5 {
            display: inline-block;
            width: calc(20% - 2px);
        }

        .item {
            width: 100%;
            color: white;

            .head {
                height: 40px;
                line-height: 40px;
                text-align: center;
                margin-bottom: 5px;
                span {
                    background: rgb(64, 154, 254);
                    &:nth-child(1) {
                        margin-right: 2px;
                        border-radius: 10px 0px 0 0;
                    }
                    &:nth-child(2), &:nth-child(3), &:nth-child(4) {
                        margin: 0 2px;
                    }
                    &:nth-child(5) {
                        margin-left: 2px;
                        border-radius: 0px 10px 0 0;
                    }
                }
            }
            .content {
                font-size: 15px;
                width: 100%;
                color: rgba(0, 0, 0, 0.8);
                float: left;
                margin-bottom: 5px;
                .left {
                    text-align: center;
                    display: block;
                    float: left;
                    box-sizing: border-box;
                    border: 1px solid rgba(0, 0, 0, 0.2);

                    height: 210px;
                    line-height: 210px;
                }
                .right {
                    width: calc(80% + 1px);
                    float: left;
                }
                .its {
                    display: inline-block;
                    width: calc(25% - 2px);
                    height: 40px;
                    text-align: center;
                    line-height: 40px;
                    border: 1px solid rgba(0, 0, 0, 0.2);
                }
            }
            .content:nth-child(2) .left{
                border-left: 4px solid rgb(188,215,84);
            }
            .content:nth-child(3) .left{
                border-left: 4px solid rgb(118,203,196);
            }
            .content:nth-child(4) .left{
                border-left: 4px solid rgb(100,165,196);
            }
            .content:nth-child(5) .left{
                border-left: 4px solid rgb(109,132,196);
            }
            .content:nth-child(6) .left{
                border-left: 4px solid rgb(142,107,207);
            }
        }
    }


</style>
