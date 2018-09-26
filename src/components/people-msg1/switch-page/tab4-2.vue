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
                <bm-overlay
                        pane="labelPane"
                        class="sample"
                        @draw="draw">
                    <div><img src="../image/ks.gif" alt="" style="width: 100%"></div>
                </bm-overlay>
                <bm-marker :position="markerPoint1"
                           :icon="{
                                url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAsCAYAAADmZKH2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNDA0NDg4OUJCRTkxMUU4OEY3OTlENzg3OEM4RERBMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNDA0NDg4QUJCRTkxMUU4OEY3OTlENzg3OEM4RERBMCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM0MDQ0ODg3QkJFOTExRTg4Rjc5OUQ3ODc4QzhEREEwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM0MDQ0ODg4QkJFOTExRTg4Rjc5OUQ3ODc4QzhEREEwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Jy3NWgAACfhJREFUeNqsmGtsFNcV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',
                                size: {width: 47, height: 52}}">
                </bm-marker>
                <bm-marker :position="markerPoint2"
                           :icon="{
                                url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAsCAYAAADmZKH2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozMzk2MUJDQ0JCRTkxMUU4QjM4Q0Y2QzFCRjk0OUZFNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozMzk2MUJDREJCRTkxMUU4QjM4Q0Y2QzFCRjk0OUZFNiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjMzOTYxQkNBQkJFOTExRThCMzhDRjZDMUJGOTQ5RkU2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjMzOTYxQkNCQkJFOTExRThCMzhDRjZDMUJGOTQ5RkU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WSbnfQAAC1NJREFUeNq0mQlwFFUa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',
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
                center: {lng: 116.38753, lat:39.991717},
                zoom: 18,
                markerPoint: {lng: 116.38653, lat: 39.991717},
                markerPoint1: {lng: 116.38753, lat: 39.991717},
                markerPoint2: {lng: 116.38853, lat: 39.991717},
                buttons: ["近一周", "近一月", "近三个月", "近一年"],
                active: 0
            }
        },
        created() {
        },
        methods: {
            handler({BMap, map}) {
                this.center.lng = 116.38753
                this.center.lat = 39.991717
                this.zoom = 18
            },
            handleButton(index) {
                this.active = index
            },
            draw ({el, BMap, map}) {
                const pixel = map.pointToOverlayPixel(new BMap.Point(116.38853, 39.992717))
                el.style.left = pixel.x - 60 + 'px'
                el.style.top = pixel.y - 20 + 'px'
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
                .sample {
                    width: 80px;
                    height:80px;
                    line-height: 40px;
                    overflow: hidden;
                    text-align: center;
                    position: absolute;
                }
            }
        }
    }
</style>
