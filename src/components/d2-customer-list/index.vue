<template>
    <div class="wrap">
        <p class="search">
            <span class="all" @click="handleGroup(-1)" :class="{'all_active':all_active}">全部分组</span>
            <input class="search_input" v-model="search_value">
            <span class="fa fa-search" @click="searchValueChange"></span>
        </p>
        <p style="width: calc(100% + 24px);border-bottom: 1px solid rgba(0,0,0,0.2);margin-bottom: 10px;position: relative;left: -11px"></p>
        <div class="list">
            <el-scrollbar style="height: 100%">
            <div v-for="top,index in item" :key="index" class=" list-one col-r" :class="{active:active==index}" @click="handleGroup(index)">
                <p :span="24">
                    <span style="float: left;font-size: 19px;line-height: 50px">
                        {{top.name}}
                    </span>
                    <span style="float: right;position: relative;top: 24px;">
                        <span style="font-size: 18px;font-weight: bold">{{top.danger_num}}</span>/{{top.num}}
                    </span>

                </p>
            </div>
            </el-scrollbar>
        </div>

        <el-pagination
                style="float: right;margin-top: 10px"
                @current-change="handleCurrentChange"
                :current-page.sync="current"
                layout="total, prev, next"
                :total="100">
        </el-pagination>

    </div>
</template>
<script>
    export default {
        props: {
            item: {
                default: []
            }
        },
        data(){
            return{
                search_value:'',
                current:1,
                active:0,
                all_active:false,
            }
        },
        methods:{
            handleCurrentChange(val){
                this.current=val
                let search_value=this.search_value
                this.$emit("listCurrentChange",{
                    search_value:search_value,
                    current:val
                })
            },
            searchValueChange(){
                let search_value=this.search_value
                let current=this.current
                this.$emit("listSearchValueChange",{
                    search_value:search_value,
                    current:current
                })
            },
            handleGroup(index){
                this.active=index
                if(index==-1){
                    this.all_active=true
                }else {
                    this.all_active=false
                }
            }

        }
    }
</script>
<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
    }
    .wrap{
        border:1px solid rgba(0,0,0,0.1);
        width: 100%;
        height: 100%;
        padding: 12px;
        padding-top: 14px;
        box-sizing: border-box;
        position: relative;
        padding-top: 8px;
        .search{
            height: 25px;
            margin-bottom: 14px;
            padding-left: 74px;
            margin-bottom: 10px;
            .all{
                position: absolute;
                left: 12px;
                top: 8px;
                padding: 4px 5px;
                background: rgb(64,158,255);
                border-radius: 5px;
                font-size: 13px;
                line-height: 18px;
                color: white;
                cursor: pointer;
            }
            .all_active{
                box-shadow: 0 0 8px rgba(128, 128, 128, 0.28);
                background: rgb(42, 147, 255);
            }
            input{
                width: 100%;
                height: 28px;
                border:1px solid rgba(0,0,0,0.2);
                border-radius: 20px;
                outline: none;
                padding: 0px 20px;
                font-size: 16px;
                box-sizing: border-box;
            }
            .fa{
                position: absolute;
                right: 26px;
                top:14px;
                cursor: pointer;
                color:dodgerblue;
            }
        }
        .list{
            height: calc(100% - 84px);
            width: calc(100% + 15px);
            box-sizing: border-box;
            .list-one{
                background: rgb(227,239,254);
                height: 50px;
                margin-bottom: 10px;
                border-radius: 3px;
                width: calc(100% - 15px);
                background: url('./image/bg.png') no-repeat center;
                background-size:cover ;
                color: white;
                cursor: pointer;
                p{
                    box-sizing: border-box;
                    padding: 0 20px;
                };
                &:hover{
                    background: url('./image/active.png') no-repeat center;
                    background-size:cover ;
                }
            }
            .list-one.active{
                background: url('./image/active.png') no-repeat center;
                background-size:cover ;
            }
        }
        .page-button{
            position: absolute;
            bottom: 0;
            right: 16px;
            margin-bottom: 16px;
        }
    }
</style>
