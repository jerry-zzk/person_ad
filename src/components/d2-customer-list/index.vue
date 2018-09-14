<template>
    <div class="col col-l left-list">
        <p class="search">
            <input class="search_input" v-model="search_value">
            <span class="fa fa-search" @click="searchValueChange"></span>
        </p>

        <ul>
            <el-scrollbar style="height: 100%">
            <li v-for="top,index in item" :key="index" class="col col-r">
                <div class="its">
                    <span>组名 <b>:</b> </span>
                    <span> {{top.name}} </span>
                </div>
                <div class="its">
                    <span>状态 <b>:</b> </span>
                    <span>
                        <el-button class="midd1" size="mini" :type="top.status"></el-button>
                    </span>
                </div>
                <div class="its">
                    <span>人数 <b>:</b> </span>
                    <span> {{top.num}} </span>
                </div>
                <div class="its">
                    <span>告警人数 <b>:</b> </span>
                    <span> {{top.danger_num}} </span>
                </div>
            </li>
            </el-scrollbar>
        </ul>

        <el-pagination
                :current-page="current"
                layout="prev, next, jumper"
                @current-change="handleCurrentChange">
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
                current:1
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
            }

        }
    }
</script>
<style lang="scss" scoped>
    @import '~@/assets/style/public.scss';

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul {
        list-style: none;
        li{
            margin-bottom: 10px;
        }
    }
    .midd1 {
        display: inline-block;
        vertical-align: middle;
        height: 20px;
        line-height: 32px;
        width: 40px;
        float: right;
        margin-right: 10px;
    }
    .col {
        padding: 20px;
        border-radius: 4px;
        border-width: 1px;
        border-style: solid;
        font-size: 16px;
    }

    .col-l {
        background-color: lighten($color-info, 40%);
        border-color: lighten($color-info, 35%);
    }

    .col-r {
        background-color: lighten($color-success, 47%);
        border-color: lighten($color-success, 40%);
    }

    .search_input{
        width: 100%;
        height: 40px;
        border-radius:20px;
        padding-right: 30px;
        font-size: 16px;
        border: 1px solid rgba(0,0,0,0.15);
        padding: 0 40px 0px 20px;
        outline: none;
    }
    .fa-search{
        position: absolute;
        right:13px;
        top: 13px;
        cursor: pointer;
    }
    .its{
        min-width: 95px;
        height: 25px;
        display: inline-block;
    }
    .left-list{
        height: 100%;
        overflow: hidden;
        position: relative;
        .search{
            position: absolute;
            top: 20px;
        }
        .el-pagination{
            position: absolute;
            bottom: 10px;
        }
        ul{
            position: absolute;
            top:60px;
            height: calc(100% - 110px);
            overflow: hidden;
            padding-right: 10px;
            border: 1px solid transparent;
            border-radius: 8px;
            padding-top: 20px;
        }
    }
</style>
