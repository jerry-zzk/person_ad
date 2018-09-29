<template>
    <div id="topBox">
        <div class="box">
            <div class="title x1">
                <img src="./img/1.png" alt="" width="26px">
                最新欺诈用户TOP10
            </div>
            <ul class="list">
                <li >
                    <el-col :span="7">姓名</el-col>
                    <el-col :span="10">电话</el-col>
                    <el-col :span="7">评分</el-col>
                </li>
                <li @click="openPeopleInfoPopup" v-for="item,index in items">
                    <el-col :span="7">{{item.name}}</el-col>
                    <el-col :span="10">{{item.phone}}</el-col>
                    <el-col :span="7" class="pf">
                        <span>{{item.star}}</span>
                    </el-col>
                </li>
            </ul>
        </div>
        <div class="box">
            <div class="title x2">
                <img src="./img/2.png" alt="" width="26px" style="position: relative;top: -2px;">
                最新检测诈骗团伙TOP10
            </div>
            <div class="list">
                <li >
                    <el-col :span="7">姓名</el-col>
                    <el-col :span="10">电话</el-col>
                    <el-col :span="7">评分</el-col>
                </li>
                <li @click="openPeopleInfoPopup"  v-for="item,index in items">
                    <el-col :span="7">{{item.name}}</el-col>
                    <el-col :span="10">{{item.phone}}</el-col>
                    <el-col :span="7" class="pf">
                        <span>{{item.star}}</span>
                    </el-col>
                </li>
            </div>
        </div>
        <div class="box">
            <div class="title x3">
                <img src="./img/3.png" alt="" width="26px" style="position: relative;top: -3px;">
                待人工审核人员TOP10
            </div>
            <div class="list">
                <li>
                    <el-col :span="7">姓名</el-col>
                    <el-col :span="10">电话</el-col>
                    <el-col :span="7">评分</el-col>
                </li>
                <li @click="openPeopleInfoPopup"  v-for="item,index in items">
                    <el-col :span="7">{{item.name}}</el-col>
                    <el-col :span="10">{{item.phone}}</el-col>
                    <el-col :span="7" class="pf">
                        <span>{{item.star}}</span>
                    </el-col>
                </li>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'topBox',
        data() {
            return {
                items: [
                    { name: 'gcx', phone: 18855556666, star: 3},
                    {name: 'gcx', phone: 18855556666, star: 3},
                    { name: 'gcx', phone: 18855556666, star: 3},
                    { name: 'gcx', phone: 18855556666, star: 3},
                    { name: 'gcx', phone: 18855556666, star: 3},
                    { name: 'gcx', phone: 18855556666, star: 3},
                    { name: 'gcx', phone: 18855556666, star: 3},
                    { name: 'gcx', phone: 18855556666, star: 3},
                    { name: 'gcx', phone: 18855556666, star: 3},
                    { name: 'gcx', phone: 18855556666, star: 3}
                ]
            }
        },
        methods: {
            openPeopleInfoPopup() {
                this.$store.commit('setData', true)
            }
        }
    }
</script>
<style lang="scss" scoped>
    #topBox {
        color: grey;
        float: left;
        width: 100%;

        .box {
            width: calc(33% - 20px);
            float: left;
            margin-right: 34px;
            box-sizing: border-box;
            &:last-child{
                margin-right: 0;
            }
            .title{
                border: 1px solid rgba(0, 0, 0, 0.2);
                height: 45px;
                padding-left: 13px;
                line-height: 45px;
                box-sizing: border-box;
                img{
                    margin-right: 8px;
                    vertical-align: middle;
                }
                &.x1{
                    border-left: 4px solid rgb(188,215,84);
                }
                &.x2{
                    border-left: 4px solid rgb(118,203,196);
                }
                &.x3{
                    border-left: 4px solid rgb(100,165,195);
                }
            }
            .list{
                box-sizing: border-box;
                width: 100%;
                padding: 0;
                margin: 0;
                margin-top: 10px;
                li{
                    list-style: none;
                    line-height: 40px;
                    height: 40px;
                    border: 1px solid rgba(0, 0, 0, 0.2);
                    border-bottom: none;
                    font-size: 13px;
                    text-align: center;
                    &:first-child{
                        border: none;
                        background: rgb(207,214,230);
                    }
                    &:first-child:hover{
                        background: rgb(207,214,230);
                    }
                    &:last-child{
                        border-bottom:  1px solid rgba(0, 0, 0, 0.2);
                    }
                    &:hover{
                        background: rgb(222, 231, 247);
                    }
                    .pf{
                        span{
                            background: rgb(247,98,100);
                            display: inline-block;
                            width: 55px;
                            height: 18px;
                            text-align: center;
                            line-height: 18px;
                            color: white;
                            border-radius: 9px;
                        }
                    }
                }
            }
        }

    }

</style>
