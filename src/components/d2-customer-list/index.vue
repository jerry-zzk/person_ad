<template>
    <div class="wrap">
        <p class="search">
            <input class="search_input" v-model="search_value">
            <span class="fa fa-search" @click="searchValueChange"></span>
        </p>
        <div class="list">
            <el-scrollbar style="height: 100%">
            <div v-for="top,index in item" :key="index" class=" list-one col-r">
                <p :span="24"> {{top.name}} </p>
                <p :span="24"> <span style="color: rgb(17,139,254);font-size: 16px">{{top.danger_num}}</span>/{{top.num}}</p>
            </div>
            </el-scrollbar>
        </div>

        <el-pagination
                class="page-button"
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
    }
    .wrap{
        border:1px solid rgba(0,0,0,0.1);
        border-radius: 5px;
        width: 100%;
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
        position: relative;
        .search{
            height: 35px;
            margin-bottom: 20px;
            border-bottom: 1px solid rgba(0,0,0,0.1);
            input{
                width: 100%;
                height: 35px;
                border:1px solid rgba(0,0,0,0.2);
                border-radius: 20px;
                outline: none;
                padding: 0px 20px;
                font-size: 16px;
                box-sizing: border-box;
            }
            .fa{
                position: absolute;
                right: 34px;
                top:30px;
                cursor: pointer;
            }
        }
        .list{
            height: calc(100% - 90px);
            .list-one{
                background: rgb(227,239,254);
                height: 70px;
                margin-bottom: 10px;
                border: 1px solid rgb(115, 195, 254);
                border-radius: 3px;
                p{
                    box-sizing: border-box;
                    padding: 0 30px;
                    color: rgb(84, 172, 254);;
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
