<template>
    <div class="col col-l">
        <p class="search">
            <input class="search_input">
            <span class="fa fa-search"></span>
        </p>
        <ul>
            <li v-for="top in item" :key="top" class="col col-r">
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
                    <span> {{top.num}} </span>
                </div>
            </li>
        </ul>
        <el-pagination
                :current-page="current"
                layout="prev, pager, next, jumper"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange">
        </el-pagination>
    </div>
</template>
<script>
    export default {
        props: {
            item: {
                default: []
            },
            current: {
                default: 1
            },
            size: {
                default: 0
            }
        },
        methods:{
            handleSizeChange(val){
                console.log(val)
            },
            handleCurrentChange(val){
                console.log(val)
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
            margin-bottom: 20px;
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

    .search {
        margin-bottom: 20px;
        position: relative;
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
    .el-pagination__sizes{
        margin: 0;
    }
</style>
