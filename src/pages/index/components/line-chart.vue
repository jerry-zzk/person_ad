<template>
    <div id="line-chart"></div>
</template>

<script>
  import echart from 'echarts'
  export default {
    name: 'lineChart',
    data () {
      return {
        msg:'this is line chart!'
      }
    },
    mounted(){
      this.drawLineChart()
    },
    methods:{
      drawLineChart(){
        let option = {
          tooltip: {
            show:true,
            trigger: 'axis',
            // backgroundColor:['skyblue'],
            // textStyle:{
            //   color:['#003']
            // },
          },
          grid:{
            top:40,
            left:40,
            right:40,
            bottom:70
          },
          legend: {
            data:['折线A','折线B'],
            left:'center'
          },
          dataZoom: [{
            show: true,
            realtime: true,
            start: 0,
            end: 100
          }, {
            type: 'inside',
            realtime: true,
            start: 0,
            end: 100
          }],
          xAxis: {
            data: ["2018-5-4","2018-5-5","2018-5-6","2018-5-7","2018-5-8","2018-5-9"],
            boundaryGap: false
          },
          yAxis: {
            name: "每日/欺诈人数",
            axisLabel:{
              show:true
            },
            axisLine:{
              symbol:['none', 'arrow'],
              symbolOffset:[0,10]
            },
            splitLine:{
              show:false
            },
            splitArea: {
              show: true,
              areaStyle :{
                color:['#fff0fe','#e5f6ff'],
                opacity:0.5
              }
            }
          },
          toolbox: {
            show: true,
            feature: {
              mark: true,
              restore: { show: true},
              saveAsImage: { show: true }
            },

          },
          series: [
            {
              name: '折线A',
              type: 'line',
              lineStyle:{
                width:1.2
              },
              smooth: true,
              data: [5, 20, 36, 10, 10, 20],
              showSymbol:true,
            },
            {
              name: '折线B',
              type: 'line',
              lineStyle:{
                width:1.2
              },
              smooth: true,
              data: [15, 22, 10, 30, 20, 40],
              showSymbol:false,
            }
          ]
        };
        const line_chart=echart.init(document.getElementById('line-chart'))
        line_chart.setOption(option)
      }
    }
  }
</script>
<style lang="scss" scoped>
    *{
        margin: 0;
        padding: 0;
    }
    #line-chart{
        width: 100%;
        height: 340px;
    }
</style>
