<template>
    <div id="mainTab4-2">
        <div class="content">
            <div id="menu">
                <span v-for="item,index in buttons" class="button"
                      @click="handleButton(index)"
                      :class="{active:active==index }">
                    {{item}}
                </span>

            </div>
            <div id="message"></div>
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
                active:0
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
            handleButton(index){
                this.active=index
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
            #menu {
                width: 380px;
                height: 40px;
                position: absolute;
                right: 20px;
                top: 20px;
                z-index: 999;
                text-align: right;
                .button {
                    cursor: pointer;
                    box-sizing: border-box;
                    width: 19.5%;
                    margin: 0 2%;
                    display: inline-block;
                    height: 100%;
                    background: white;
                    box-shadow: 2px 2px 10px grey;
                    border-radius: 5px;
                    text-align: center;
                    line-height: 40px;
                    font-size: 14px;
                }
                .button.active {
                    background: $orangeColor;
                    color: white;
                }
            }
            #message{
                width: 310px;
                height: calc(100vh - 300px);
                position: absolute;
                z-index: 999;
                top: 100px;
                right: 20px;
                background: red;
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
