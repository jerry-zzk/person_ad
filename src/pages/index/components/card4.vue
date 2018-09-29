<template>
    <div style="float: left;width: 100%">

        <div class="col col-1">
            <h4>客户/分组</h4>
            <p><span> {{user}} / {{group}} </span></p>
            <div class="icon">
                <img src="../image/a.png" alt="">
            </div>
        </div>


        <div class="col col-2">
            <h4>敲诈客户</h4>
            <p><span> {{user_qz}} </span></p>
            <div class="icon">
                <img src="../image/b.png" alt="">
            </div>
        </div>

        <div class="col col-3">
            <h4>欺诈团伙</h4>
            <p><span> {{user_group}} </span></p>
            <div class="icon">
                <img src="../image/c.png" alt="">
            </div>
        </div>

        <div class="col col-4">
            <h4>待审核</h4>
            <p><span> {{num}}</span></p>
            <div class="icon">
                <img src="../image/d.png" alt="">
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name: 'card4',
        data() {
            return {
                user: 800,
                group: 8,
                user_qz: 30,
                user_group: 21,
                num: 33
            }
        }
    }
</script>
<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .fa {
        margin-right: 20px;
    }

    .col {
        padding: 20px;
        border:1px solid rgba(0,0,0,0.2);
        font-size: 16px;
        line-height: 26px;
        position: relative;
        margin-bottom: 20px;
        width: calc(25% - 30px);
        color: grey;
        float: left;
        margin-right: 40px;
        box-sizing: border-box;
        &:last-child{
            margin-right: 0;
        }
        h4 {
            line-height: 32px;
            font-weight: 500;
        }
        .icon {
            position: absolute;
            right: 15px;
            top: 11px;
            font-size: 42px;
            width: 80px;
            height: 80px;
            img {
                width: 100%;
                border-radius: 50%;
            }
        }

    }
    .col-1{
        border-left: 4px solid rgb(188,215,84);
        span{
            color:rgb(188,215,84);
            padding-left: 11px;
        }
    }
    .col-2{
        border-left: 4px solid rgb(118,203,196);
        span{
            color:rgb(118,203,196);
            padding-left: 23px;
        }
    }
    .col-3{
        border-left: 4px solid rgb(100,165,195);
        span{
            color:rgb(100,165,195);
            padding-left: 23px;
        }
    }
    .col-4{
        border-left: 4px solid rgb(110,131,186);
        span{
            color:rgb(110,131,186);
            padding-left: 17px;
        }
    }
</style>
