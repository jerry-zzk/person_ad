<template>
    <d2-container class="page" v-resize:throttle="onResize">
        <card4></card4>
        <!-- 折线图区域 -->
        <el-card shadow="never" class="d2-mb">
            <line-chart></line-chart>
        </el-card>
        <!-- 反欺诈列表 -->
        <topBox></topBox>
        <!--人员信息弹窗-->
        <people-info-popup></people-info-popup>
        <people-info-popup1></people-info-popup1>

    </d2-container>
</template>

<script>
    import echart from 'echarts'
    import D2HelpBtn from './components/d2-help-btn'
    import card4 from './components/card4.vue'
    import resize from 'vue-resize-directive'

    export default {
        data() {
            return {
                chartData: {
                    columns: ['日期', '客户', '欺诈客户'],
                    rows: [
                        {'日期': '2018-01-01', '客户': 1393, '欺诈客户': 1093},
                        {'日期': '2018-01-02', '客户': 3530, '欺诈客户': 3230},
                        {'日期': '2018-01-03', '客户': 2923, '欺诈客户': 2623},
                        {'日期': '2018-01-04', '客户': 1723, '欺诈客户': 1423},
                        {'日期': '2018-01-05', '客户': 3792, '欺诈客户': 3492},
                        {'日期': '2018-01-06', '客户': 4593, '欺诈客户': 4293},
                        {'日期': '2018-01-07', '客户': 545, '欺诈客户': 42},
                        {'日期': '2018-01-08', '客户': 1222, '欺诈客户': 493},
                        {'日期': '2018-01-09', '客户': 3333, '欺诈客户': 293}
                    ]
                }
            }
        },
        components: {
            D2HelpBtn,
            card4,
            lineChart:()=> import('./components/line-chart.vue'),
            topBox: () => import('./components/topBox')
        },
        mounted() {
        },
        directives: {
            resize
        },
        methods: {
            open1(tab) {
                this.$store.commit('setData1', true)
                this.$store.commit('setTab', tab)
            },
            onResize() {
                echart.init(document.getElementById('line-chart')).resize()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .inner {
        position: relative;
        top: 20px;
        right: 20px;
        bottom: 20px;
        left: 20px;
    }

    @import '~@/assets/style/public.scss';
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

    .page {
        .page__btn-group {
            color: $color-text-placehoder;
            font-size: 12px;
            span {
                color: $color-text-sub;
                &:hover {
                    color: $color-text-main;
                }
            }
        }
    }
</style>
