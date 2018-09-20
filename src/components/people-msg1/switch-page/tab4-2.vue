<template>
    <div id="mainTab4-2">
        <div class="content">
            <el-col class="menu">
                <span v-for="item,index in buttons" class="button"
                      @click="handleButton(index)"
                      :class="{active:active==index }">
                    {{item}}
                </span>

            </el-col>
            <div id="message">
                <div class="head">重要位置TOP10</div>
                <div class="con">
                    <ul >
                        <li class="header">
                            <el-col :span="6">重要位置</el-col>
                            <el-col :span="12">经纬度</el-col>
                            <el-col :span="6">活跃时间</el-col>
                        </li>
                        <el-scrollbar style="height: 100%">
                            <li>
                                <el-col :span="6">石梁</el-col>
                                <el-col :span="12" style="color: #2f74ff"><51.2454758,154.54877></el-col>
                                <el-col :span="6" style="color: rgb(249,149,0)">18:00--6:00</el-col>
                            </li>
                            <li>
                                <el-col :span="6">石梁</el-col>
                                <el-col :span="12" style="color: #2f74ff"><51.2454758,154.54877></el-col>
                                <el-col :span="6" style="color: rgb(249,149,0)">18:00--6:00</el-col>
                            </li>
                            <li>
                                <el-col :span="6">石梁</el-col>
                                <el-col :span="12" style="color: #2f74ff"><51.2454758,154.54877></el-col>
                                <el-col :span="6" style="color: rgb(249,149,0)">18:00--6:00</el-col>
                            </li>
                            <li>
                                <el-col :span="6">石梁</el-col>
                                <el-col :span="12" style="color: #2f74ff"><51.2454758,154.54877></el-col>
                                <el-col :span="6" style="color: rgb(249,149,0)">18:00--6:00</el-col>
                            </li>
                            <li>
                                <el-col :span="6">石梁</el-col>
                                <el-col :span="12" style="color: #2f74ff"><51.2454758,154.54877></el-col>
                                <el-col :span="6" style="color: rgb(249,149,0)">18:00--6:00</el-col>
                            </li>
                            <li>
                                <el-col :span="6">石梁</el-col>
                                <el-col :span="12" style="color: #2f74ff"><51.2454758,154.54877></el-col>
                                <el-col :span="6" style="color: rgb(249,149,0)">18:00--6:00</el-col>
                            </li>
                            <li>
                                <el-col :span="6">石梁</el-col>
                                <el-col :span="12" style="color: #2f74ff"><51.2454758,154.54877></el-col>
                                <el-col :span="6" style="color: rgb(249,149,0)">18:00--6:00</el-col>
                            </li>
                            <li>
                                <el-col :span="6">石梁</el-col>
                                <el-col :span="12" style="color: #2f74ff"><51.2454758,154.54877></el-col>
                                <el-col :span="6" style="color: rgb(249,149,0)">18:00--6:00</el-col>
                            </li>
                            <li>
                                <el-col :span="6">石梁</el-col>
                                <el-col :span="12" style="color: #2f74ff"><51.2454758,154.54877></el-col>
                                <el-col :span="6" style="color: rgb(249,149,0)">18:00--6:00</el-col>
                            </li>
                            <li>
                                <el-col :span="6">石梁</el-col>
                                <el-col :span="12" style="color: #2f74ff"><51.2454758,154.54877></el-col>
                                <el-col :span="6" style="color: rgb(249,149,0)">18:00--6:00</el-col>
                            </li>
                            <li>
                                <el-col :span="6">石梁</el-col>
                                <el-col :span="12" style="color: #2f74ff"><51.2454758,154.54877></el-col>
                                <el-col :span="6" style="color: rgb(249,149,0)">18:00--6:00</el-col>
                            </li>
                            <li>
                                <el-col :span="6">石梁</el-col>
                                <el-col :span="12" style="color: #2f74ff"><51.2454758,154.54877></el-col>
                                <el-col :span="6" style="color: rgb(249,149,0)">18:00--6:00</el-col>
                            </li>
                            <li>
                                <el-col :span="6">石梁</el-col>
                                <el-col :span="12" style="color: #2f74ff"><51.2454758,154.54877></el-col>
                                <el-col :span="6" style="color: rgb(249,149,0)">18:00--6:00</el-col>
                            </li>
                        </el-scrollbar>
                    </ul>
                </div>
            </div>
            <baidu-map id="tab4-2-map"
                       :center="center"
                       :zoom="zoom"
                       :scroll-wheel-zoom="true"
                       @ready="handler">
                <bm-marker :position="markerPoint"
                           :icon="{
                                url: '/ks.gif',
                                size: {width: '10%', height: '10%'}}">
                </bm-marker>
                <bm-marker :position="markerPoint1"
                           :icon="{
                                url: '/map1.png',
                                size: {width: 47, height: 52}}">
                </bm-marker>
                <bm-marker :position="markerPoint2"
                           :icon="{
                                url: '/map2.png',
                                size: {width: 47, height: 52}}">
                </bm-marker>
            </baidu-map>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import BaiduMap from 'vue-baidu-map';

    Vue.use(BaiduMap, {
        ak: 'vZHGEgMIsfsWXfL4GLGobzSdg3XWKujm'
    })
    export default {
        data() {
            return {
                center: {lng: 116.38853, lat: 39.991717},
                zoom: 18,
                markerPoint: {lng: 116.38853, lat: 39.991717},
                markerPoint1: {lng: 116.38753, lat: 39.991717},
                markerPoint2: {lng: 116.38653, lat: 39.991717},
                buttons: ["近一周", "近一月", "近三个月", "近一年"],
                active: 0
            }
        },
        created() {
        },
        methods: {
            handler({BMap, map}) {
                // this.center.lng = 116.38853
                // this.center.lat = 39.991717
                // this.zoom = 18
            },
            handleButton(index) {
                this.active = index
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../css/main-tab-4-public.scss';

    #mainTab4-2 {
        padding: 20px;
        height: calc(100vh - 110px);
        box-sizing: border-box;
        .content {
            border: 1px solid rgba(0, 0, 0, 0.12);
            background: white;
            border-radius: 2px;
            height: 100%;
            position: relative;
            .menu{
                position: absolute;
                right: 20px;
                top: 20px;
                z-index: 999;
            }
            #message {
                width: 340px;
                height: calc(100vh - 300px);
                position: absolute;
                z-index: 999;
                top: 80px;
                right: 30px;
                background: white;
                box-shadow: 2px 2px 10px grey;
                .head {
                    background: rgb(41, 45, 82);
                    height: 40px;
                    line-height: 40px;
                    box-sizing: border-box;
                    padding-left: 20px;
                    color: white;
                }
                .con {
                    width: 100%;
                    height: calc(100% - 40px);
                    padding: 15px;
                    box-sizing: border-box;
                    ul {
                        width: 100%;
                        height: 100%;
                        margin: 0;
                        box-sizing: border-box;
                        padding: 0;
                        overflow: hidden;
                        text-align: center;
                        .header {
                            font-size: 14px;
                            font-weight: 600;
                            background: rgb(233, 239, 243);
                            border: none;
                        }
                        li {
                            list-style: none;
                            line-height: 35px;
                            height: 35px;
                            font-size: 13px;
                            border-bottom: 1px solid rgba(0, 0, 0, 0.159);
                        }
                        li:not(.header):hover {
                            background: $orangeColor;
                            color: white!important;
                        }
                    }
                }
            }
            #tab4-2-map {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 998;
            }
        }
    }
</style>
