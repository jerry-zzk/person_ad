<template>
    <div id="mainTab4-1">
        <div class="content">
            <el-row>
                <el-col class="title">
                    设备信息
                </el-col>
                <el-col class="xiahuaxian"></el-col>
                <el-col class="table">
                    <el-col class="head">
                        <el-col :span="4">手机品牌</el-col>
                        <el-col :span="5">手机型号</el-col>
                        <el-col :span="5">操作系统及版本</el-col>
                        <el-col :span="5">IMEI</el-col>
                        <el-col :span="5">IMSI</el-col>
                    </el-col>
                    <el-col class="tr">
                        <el-col :span="4">vivo</el-col>
                        <el-col :span="5">X23</el-col>
                        <el-col :span="5">Android OS 9.0</el-col>
                        <el-col :span="5">01 15464651549 5</el-col>
                        <el-col :span="5">02 54654165498 5</el-col>
                    </el-col>
                    <el-col class="tr">
                        <el-col :span="4">vivo</el-col>
                        <el-col :span="5">X23</el-col>
                        <el-col :span="5">Android OS 9.0</el-col>
                        <el-col :span="5">01 15464651549 5</el-col>
                        <el-col :span="5">02 54654165498 5</el-col>
                    </el-col>
                    <el-col class="tr">
                        <el-col :span="4">vivo</el-col>
                        <el-col :span="5">X23</el-col>
                        <el-col :span="5">Android OS 9.0</el-col>
                        <el-col :span="5">01 15464651549 5</el-col>
                        <el-col :span="5">02 54654165498 5</el-col>
                    </el-col>
                    <el-col class="tr">
                        <el-col :span="4">vivo</el-col>
                        <el-col :span="5">X23</el-col>
                        <el-col :span="5">Android OS 9.0</el-col>
                        <el-col :span="5">01 15464651549 5</el-col>
                        <el-col :span="5">02 54654165498 5</el-col>
                    </el-col>
                    <el-col class="tr">
                        <el-col :span="4">vivo</el-col>
                        <el-col :span="5">X23</el-col>
                        <el-col :span="5">Android OS 9.0</el-col>
                        <el-col :span="5">01 15464651549 5</el-col>
                        <el-col :span="5">02 54654165498 5</el-col>
                    </el-col>
                    <el-col class="tr">
                        <el-col :span="4">vivo</el-col>
                        <el-col :span="5">X23</el-col>
                        <el-col :span="5">Android OS 9.0</el-col>
                        <el-col :span="5">01 15464651549 5</el-col>
                        <el-col :span="5">02 54654165498 5</el-col>
                    </el-col>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>

</script>
<style lang="scss" scoped>
    @import '../css/main-tab-4-public.scss';
    #mainTab4-1{
        padding: 20px;
        .content{
            border: 1px solid rgba(0,0,0,0.12);
            background: white;
            border-radius: 2px;
            padding: 20px;
            .title{
                border-left: 4px solid $orangeColor;
                padding-left: 10px;
            }
            .xiahuaxian{
                border-bottom: 1px solid rgba(0,0,0,0.12);
                margin-top: 15px;
                margin-bottom: 15px;
            }
            .table{
                text-align: center;
                .head{
                    background: rgb(233,239,243);
                    height: 40px;
                    line-height: 40px;
                }
                .tr{
                    height: 40px;
                    line-height: 40px;
                    font-size: 14px;
                    &:nth-child(2n+1){
                        background:rgb(233,239,243);
                    }
                }
            }
        }
    }
</style>
