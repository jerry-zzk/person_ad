<template>
    <div id="app" style="min-width: 1280px">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style lang="scss">
    @import '~@/assets/style/public-class.scss';

    .el-tabs__header.is-top {
        margin: 0;
    }

    .people-info-popup {
        .el-tabs__item {
            background: #e3e8f1;
            border-right: 1px solid rgba(0, 0, 0, 0.2);
        }
        .el-tabs__item.is-active {
            background: white;
        }
    }

    .people-info-popup1 {
        .el-tabs__item {
            background: #e3e8f1;
            color: rgb(41, 45, 82);
            border-right: 1px solid rgba(0, 0, 0, 0.2);
            &:hover {
                color: rgb(220, 67, 39);
            }
        }
        .el-tabs__item.is-active {
            background: #f9f9f9;
            color: rgb(220, 67, 39);
            border-bottom-color: #f9f9f9 !important;
        }

    }
    .popup .el-scrollbar__view{
        height: 100%;

    }
    .popup .el-tabs__content{
        height: calc(100% - 41px);
        .el-tab-pane{
            height: 100%;
        }
    }
    .BMap_cpyCtrl {
        display: none;
    }

    .anchorBL {
        display: none;
    }

    .el-tabs__nav {
        opacity: 0.78;
    }


    .zk_input .el-input__inner {
        box-shadow: none;
        border: 2px solid #ea7312;
    }

    .zk_input .el-input__inner:hover {
        border-color: #ea7312;
    }

    .zk_input .el-input__inner:focus {
        border-color: #ea7312;
        box-shadow: none;
        transition-duration: .5s;
    }
    .zk_head .d2-container-full__header {
        padding:0px !important;
        padding-left:15px !important;
    }
    .zk_page .d2-container-full__body{
        padding-bottom: 0px !important;
    }
    .zk_head .d2-container-full__body {
        padding:0px !important;
    }



    /*分页按钮样式*/
    .btn-prev{
        background: rgb(64,158,255)!important;
        margin-right: 10px!important;
        padding: 0!important;
        color: white!important;
        border-radius: 2px!important;
        min-width: 30px!important;
        .el-icon-arrow-left{
            text-align: center;
            &:before{
                content: ' '!important;
                display: inline-block;
                width: 0px;
                height: 0px;
                border-right: 6px solid #fff;
                border-top: 6px solid transparent;
                border-bottom: 6px solid transparent;
            }
        }
        &:hover{
            background: rgb(86, 186, 255) !important;
        }

    }
    .btn-next {
        padding: 0 !important;
        background: rgb(64, 158, 255) !important;
        color: white !important;
        min-width: 30px!important;
        border-radius: 2px!important;
        .el-icon-arrow-right{
            text-align: center;
            &:before{
                content: ' '!important;
                display: inline-block;
                width: 0px;
                height: 0px;
                border-left: 6px solid #fff;
                border-top: 6px solid transparent;
                border-bottom: 6px solid transparent;
            }
        }
        &:hover{
            background: rgb(86, 186, 255) !important;
        }

    }
    .zk_page .is-horizontal{
        display: none!important;
    }
    .el-card{
        border: 1px solid rgba(0,0,0,0.2)!important;
        border-radius: 0!important;
    }
    .el-input--mini{
        width: 135px!important;
    }



    .zk_page .el-form-item{
         margin:0px 10px !important;
     }
</style>
