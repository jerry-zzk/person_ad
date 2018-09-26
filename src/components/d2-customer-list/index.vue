<template>
    <div class="wrap">
        <p class="search">
            <span class="all">全部</span>
            <input class="search_input" v-model="search_value">
            <span class="fa fa-search" @click="searchValueChange"></span>
        </p>
        <p style="width: calc(100% + 40px);border-bottom: 1px solid rgba(0,0,0,0.2);margin-bottom: 10px;position: relative;left: -20px"></p>
        <div class="list">
            <el-scrollbar style="height: 100%">
            <div v-for="top,index in item" :key="index" class=" list-one col-r" :class="{active:active==index}" @click="handleGroup(index)">
                <p :span="24"> {{top.name}} </p>
                <p :span="24"> <span style="font-size: 16px">{{top.danger_num}}</span>/{{top.num}}</p>
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
                active:0
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
            }

        }
    }
</script>
<style lang="scss" scoped>
    @import '~@/assets/style/public.scss';
    * {
        margin: 0;
        padding: 0;
    }
    .wrap{
        border:1px solid rgba(0,0,0,0.1);
        border-radius: 5px;
        width: 100%;
        height: 100%;
        padding: 20px;
        padding-top: 14px;
        box-sizing: border-box;
        position: relative;
        padding-top: 10px;
        .search{
            height: 34px;
            margin-bottom: 14px;
            padding-left: 50px;
            margin-bottom: 10px;
            .all{
                position: absolute;
                left: 22px;
                top: 12px;
                padding: 5px 6px;
                background: rgb(64,158,255);
                border-radius: 5px;
                font-size: 14px;
                color: white;
                cursor: pointer;
            }
            input{
                width: 100%;
                height: 34px;
                border:1px solid rgba(0,0,0,0.2);
                border-radius: 20px;
                outline: none;
                padding: 0px 20px;
                font-size: 16px;
                box-sizing: border-box;
            }
            .fa{
                position: absolute;
                right: 30px;
                top:18px;
                cursor: pointer;
                color:dodgerblue;
            }
        }
        .list{
            height: calc(100% - 96px);
            width: calc(100% + 20px);
            box-sizing: border-box;
            .list-one{
                background: rgb(227,239,254);
                height: 70px;
                margin-bottom: 10px;
                border-radius: 3px;
                width: calc(100% - 20px);
                background: url('./image/bg.png') no-repeat center;
                background-size:cover ;
                color: white;
                cursor: pointer;
                p{
                    box-sizing: border-box;
                    padding: 0 20px;
                    &:nth-child(1){
                        height: 40px;
                        line-height: 40px;
                        font-size: 16px;
                        text-align:left ;
                    }
                    &:nth-child(2){
                        text-align:right ;
                        height: 30px;
                        line-height: 30px;
                        font-size: 15px;

                    }
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
