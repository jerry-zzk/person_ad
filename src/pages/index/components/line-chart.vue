<template>
    <div id="line-chart">
    </div>
</template>

<script>
  import echart from 'echarts';
  export default {
    name: 'lineChart',
    data () {
      return {
        msg:'this is line chart!'
      }
    },
    mounted(){
      let chartData=this.$store.state.chartData.chartData
      this.drawLineChart(chartData)
    },
    methods:{
      drawLineChart(chartData){
        let option = {
          tooltip: {
            show:true,
            trigger: 'axis'
          },
          grid:{
            top:40,
            left:40,
            right:40,
            bottom:70
          },
          legend: {
            data:chartData.name,
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
            data:chartData.x,
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
              show:true,
                lineStyle:{
                  type:'dashed'
                }
            },
            splitArea: {
              show: false,
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
              name: chartData.name[0],
              type: 'line',
              lineStyle:{
                width:1.2
              },
              smooth: false,
              data: chartData.y[0],
              showSymbol:true,
            },
            {
              name: chartData.name[1],
              type: 'line',
              lineStyle:{
                width:1.2
              },
              smooth: false,
              data: chartData.y[1],
              showSymbol:false,
            }
          ]
        };
        const line_chart=echart.init(document.getElementById('line-chart'))
        line_chart.setOption(option)
        // this.$store.commit('setX',[124,235])
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
