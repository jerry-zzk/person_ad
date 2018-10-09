<template>
    <div id="line-chart">
    </div>
</template>

<script>
    import echart from 'echarts';

    export default {
        name: 'lineChart',
        data() {
            return {
                msg: 'this is line chart!'
            }
        },
        mounted() {
            this.drawLineChart()
        },
        beforeDestroy() {
            echart.init(document.getElementById('line-chart')).dispose()
        },
        methods: {
            drawLineChart() {
                let chartData = {
                    name: ["曲线A", "曲线B"],
                    x: (function () {
                        let arr = []
                        for (let i = 29; i >= 0; i--) {
                            arr.push(new Date(new Date().getTime() - i * 24 * 60 * 60 * 1000).getFullYear() + '-' + (new Date(new Date().getTime() - i * 24 * 60 * 60 * 1000).getMonth() + 1) + '-' + new Date(new Date().getTime() - i * 24 * 60 * 60 * 1000).getDate())
                        }
                        return arr
                    })(),
                    y: (function () {
                        let arr = []
                        let arr1 = []
                        for (let i = 0; i < 30; i++) {
                            arr.push((Math.random() * 100).toFixed(0))
                            arr1.push((Math.random() * 10).toFixed(0))
                        }
                        return [arr, arr1]
                    })()
                }
                let option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    grid: {
                        top: 60,
                        left: 40,
                        right: 65,
                        bottom: 95
                    },
                    color: ['#409eff', '#bad654', '#76cbc5', '#65a4c3', '#6e82b9', '#8e6bcf'],
                    legend: {
                        data: chartData.name,
                        left: 'center'
                    },
                    dataZoom: [{
                        show: true,
                        start: 0,
                        end: 100
                    }, {
                        type: 'inside',
                        start: 0,
                        end: 100
                    }],
                    xAxis: [{
                        data: chartData.x,
                        boundaryGap: false,
                        axisLabel: {
                            interval: 1,
                            rotate: 0
                        }
                    }],
                    yAxis: [{
                        type: 'value',
                        name: "每日/欺诈人数",
                        max: 100,
                        min: 0,
                        interval: 10,
                        axisLabel: {
                            show: true,
                            formatter: '{value}'
                        },
                        axisLine: {
                            symbol: ['none', 'arrow'],
                            symbolOffset: [0, 12]
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                type: 'dashed'
                            }
                        },
                    }, {
                        name: "每日/---人数",
                        axisLabel: {
                            show: true,
                            formatter: '{value}'
                        },
                        axisLine: {
                            symbol: ['none', 'arrow'],
                            symbolOffset: [0, 12]
                        },
                        interval: 1,
                        max: 10,
                        min: 0,
                        splitLine: {
                            show: false,
                            lineStyle: {
                                type: 'dashed'
                            }
                        }
                    }],
                    series: [
                        {
                            name: chartData.name[0],
                            type: 'line',
                            lineStyle: {
                                width: 1.2
                            },
                            smooth: true,
                            data: chartData.y[0],
                            showSymbol: false,
                            areaStyle: {
                                color: '#65A4C3'
                            },
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                ]
                            },
                            markLine: {
                                data: [{
                                    type: 'average',
                                    name: '平均值'
                                }],
                                label:{
                                    formatter: '    {c}人'
                                }
                            }
                        },
                        {
                            name: chartData.name[1],
                            yAxisIndex: 1,
                            type: 'line',
                            lineStyle: {
                                width: 1.2
                            },
                            smooth: true,
                            data: chartData.y[1],
                            showSymbol: false,
                            areaStyle: {
                                color: '#BAD654'
                            },
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                ]
                            },
                            markLine: {
                                data: [{
                                    type: 'average',
                                    name: '平均值'
                                }],
                                label:{
                                    formatter:'    {c}人'
                                }

                            }
                        }
                    ]
                };
                const line_chart = echart.init(document.getElementById('line-chart'))
                line_chart.setOption(option)
                // this.$store.commit('setX',[124,235])
            }
        }
    }
</script>
<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
    }

    #line-chart {
        width: 100%;
        height: 340px;
    }
</style>
