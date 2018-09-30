<template>
    <div id="addUser"
         style="height: calc(100vh - 100px);width: calc(100% - 22px);border-right: 1px solid #80808066;background: white">
        <div style="height: 46px;width: 100%;border-left: 1px solid rgba(0,0,0,0.1);border-bottom: 1px solid rgba(0,0,0,0.1)">
            <div class="type" :class="{active:active==1}" @click="active=1">信用贷客户</div>
            <div class="type" :class="{active:active==2}" @click="active=2">抵押贷客户</div>
            <div class="type" :class="{active:active==3}" @click="active=3">xx贷客户</div>
        </div>
        <el-col :span="5" class="list">
            <d2-customer-list :item="items">
            </d2-customer-list>
        </el-col>
        <el-col :span="19" class="table">
            <div style="height: 47px">
                <div class="tj">
                    姓名：<input type="text" style="width: 80px">
                </div>
                <div class="tj">
                    身份证号：<input type="text" style="width: 120px">
                </div>
                <div class="tj" style="margin-right: 0">
                    电话号：<input type="text" style="width: 110px">
                </div>
                <el-button type="primary" size="mini" style="float: right">添加客户组</el-button>
                <el-button size="mini" style="float: right;margin-right: 8px">重置</el-button>
                <el-button type="primary" size="mini" style="float: right">查询</el-button>

            </div>
            <div class="header">
                <el-col style="border-radius: 8px 0 0 0 " :span="2">姓名</el-col>
                <el-col :span="2">性别</el-col>
                <el-col :span="2">年龄</el-col>
                <el-col :span="3">手机号</el-col>
                <el-col :span="5">身份证号</el-col>
                <el-col :span="2">种类</el-col>
                <el-col :span="3">时间</el-col>
                <el-col :span="2">地址</el-col>
                <el-col style="border-radius:0 8px  0 0 " :span="3">评分</el-col>
            </div>
            <div class="table-list">
                <el-scrollbar style="height: 100%">
                    <li v-for="item in list" @click="openPeopleInfoPopup">
                        <div class="border"></div>
                        <el-col :span="2">{{item.name}}</el-col>
                        <el-col :span="2">{{item.sex}}</el-col>
                        <el-col :span="2">{{item.age}}</el-col>
                        <el-col :span="3">{{item.phone}}</el-col>
                        <el-col :span="5">{{item.idcard}}</el-col>
                        <el-col :span="2">{{item.type}}</el-col>
                        <el-col :span="3">{{item.time}}</el-col>
                        <el-col :span="2">{{item.addr}}</el-col>
                        <el-col :span="3"
                                style="color: #ff4b35;font-weight: 600;position: relative;overflow: hidden;font-size: 18px;">
                            {{item.fen}}
                            <span class="tg">
                已通过
              </span>
                        </el-col>
                    </li>
                </el-scrollbar>
            </div>
            <el-pagination
                    style="margin-top: 9px;float: right"
                    background
                    layout="total, sizes, prev, next, jumper"
                    :page-sizes="[100, 200, 300, 400]"
                    :total="1000">
            </el-pagination>
        </el-col>
        <people-info-popup :is_input="true"></people-info-popup>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                active:1,
                items: [
                    {name: '分组1', num: 15522322, danger_num: '123', status: 'danger'},
                    {name: '分组2', num: 15522212, danger_num: '123', status: 'success'},
                    {name: 'zk', num: 15522212, danger_num: '123', status: 'warning'},
                    {name: 'zk', num: 15522212, danger_num: '123', status: 'danger'},
                    {name: 'zk', num: 15522212, danger_num: '123', status: 'danger'},
                    {name: 'zk', num: 15522212, danger_num: '123', status: 'danger'},
                    {name: 'zk', num: 15522212, danger_num: '123', status: 'danger'},
                    {name: 'zk', num: 15522212, danger_num: '123', status: 'danger'},
                    {name: 'zk', num: 15522212, danger_num: '123', status: 'danger'},
                    {name: 'zk', num: 15522212, danger_num: '123', status: 'danger'},
                    {name: 'zk', num: 15522212, danger_num: '123', status: 'danger'},
                ],
                list: [
                    {
                        name: 'gcx',
                        sex: '男',
                        age: '15',
                        phone: '13651161512',
                        idcard: '1564231564321654615',
                        type: "type",
                        time: '2012-12-12',
                        addr: '详细',
                        fen: '90'
                    },
                    {
                        name: 'gcx',
                        sex: '男',
                        age: '15',
                        phone: '13651161512',
                        idcard: '1564231564321654615',
                        type: "type",
                        time: '2012-12-12',
                        addr: '详细',
                        fen: '90'
                    },
                    {
                        name: 'gcx',
                        sex: '男',
                        age: '15',
                        phone: '13651161512',
                        idcard: '1564231564321654615',
                        type: "type",
                        time: '2012-12-12',
                        addr: '详细',
                        fen: '90'
                    },
                    {
                        name: 'gcx',
                        sex: '男',
                        age: '15',
                        phone: '13651161512',
                        idcard: '1564231564321654615',
                        type: "type",
                        time: '2012-12-12',
                        addr: '详细',
                        fen: '90'
                    },
                    {
                        name: 'gcx',
                        sex: '男',
                        age: '15',
                        phone: '13651161512',
                        idcard: '1564231564321654615',
                        type: "type",
                        time: '2012-12-12',
                        addr: '详细',
                        fen: '90'
                    },
                    {
                        name: 'gcx',
                        sex: '男',
                        age: '15',
                        phone: '13651161512',
                        idcard: '1564231564321654615',
                        type: "type",
                        time: '2012-12-12',
                        addr: '详细',
                        fen: '90'
                    },
                    {
                        name: 'gcx',
                        sex: '男',
                        age: '15',
                        phone: '13651161512',
                        idcard: '1564231564321654615',
                        type: "type",
                        time: '2012-12-12',
                        addr: '详细',
                        fen: '90'
                    },
                    {
                        name: 'gcx',
                        sex: '男',
                        age: '15',
                        phone: '13651161512',
                        idcard: '1564231564321654615',
                        type: "type",
                        time: '2012-12-12',
                        addr: '详细',
                        fen: '90'
                    },
                    {
                        name: 'gcx',
                        sex: '男',
                        age: '15',
                        phone: '13651161512',
                        idcard: '1564231564321654615',
                        type: "type",
                        time: '2012-12-12',
                        addr: '详细',
                        fen: '90'
                    },
                    {
                        name: 'gcx',
                        sex: '男',
                        age: '15',
                        phone: '13651161512',
                        idcard: '1564231564321654615',
                        type: "type",
                        time: '2012-12-12',
                        addr: '详细',
                        fen: '90'
                    },
                    {
                        name: 'gcx',
                        sex: '男',
                        age: '15',
                        phone: '13651161512',
                        idcard: '1564231564321654615',
                        type: "type",
                        time: '2012-12-12',
                        addr: '详细',
                        fen: '90'
                    }
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
    #addUser {
        .type{
            padding: 4px 20px;
            color: #434343;
            border-radius: 20px;
            display: inline-block;
            font-size: 14px;
            border: 1px solid rgba(0,0,0,0.15);
            cursor: pointer;
            margin: 8px 60px;
            margin-left: 10px;
            &:hover{
                background:rgb(64, 158, 254);
                color: white;
            }
            &.active{
                background:rgb(64, 158, 254);
                color: white;
            }
        }
        .list {
            height: calc(100% - 49px);
        }
        .table {
            height: calc(100% - 94px);
            padding: 10px;
            box-sizing: border-box;
            .tj{
                font-size: 14px;
                display: inline-block;
                color: #3d3d3d;
                line-height: 30px;
                margin-right: 5%;
                input{
                    height: 28px;
                    border: 1px solid rgba(0,0,0,0.1);
                    border-radius: 15px;
                    outline: none;
                    padding: 0 10px;
                    box-sizing: border-box;
                }
            }
            .header {
                height: 50px;
                line-height: 50px;
                text-align: center;

                color: white;
                font-size: 14px;
                margin-bottom: 6px;
                div {
                    border-right: 1px solid white;
                    background: rgb(64, 158, 254);
                }
            }
            .table-list {
                list-style: none;
                background: white;
                height: calc(100% - 97px);
                border-left: 1px solid rgba(0, 0, 0, 0.1);
                border-top: 1px solid rgba(0, 0, 0, 0.1);
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                li {
                    height: 50px;
                    line-height: 50px;
                    font-size: 14px;
                    text-align: center;
                    line-height: 49px;
                    color: #3c3c3c;
                    position: relative;
                    .border {
                        width: 4px;
                        height: 50px;
                        background: orange;
                        position: absolute;
                        left: 0;
                        border: none !important;
                        display: none;
                    }
                    &:hover {
                        background: rgb(254, 225, 183);

                        .border {
                            display: block;
                        }
                    }
                    div {
                        border-right: 1px solid rgba(0, 0, 0, 0.1);
                        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                    }
                    .tg {
                        position: absolute;
                        top: 8px;
                        width: 80px;
                        right: -24px;
                        height: 20px;
                        line-height: 20px;
                        color: #fff;
                        background: #aaa;
                        transform: rotate(45deg);
                        font-size: 11px;
                        background: rgb(64, 158, 254);
                    }
                }
            }
        }
    }
</style>

