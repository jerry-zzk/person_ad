<template>
  <d2-container id="lm_situationWarn" class="page">
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="ibox">
          <p class="ibox-title"><i class="fa fa-line-chart"></i>近一个月风险用户变化趋势</p>
          <div id="lm_situationWarn_lineChart"></div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="ibox iblock">
          <p class="iblock-num">50000</p>
          <p class="iblock-title">存量用户数</p>
          <div class="iblock-foot">昨天 +420</div>
        </div>
        <div class="ibox iblock" style="margin-top: 30px;">
          <p class="iblock-num">2450</p>
          <p class="iblock-title">风险用户数</p>
          <div class="iblock-foot">昨天 -50</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="ibox iblock">
          <p class="iblock-num">486</p>
          <p class="iblock-title">存量规则数</p>
          <div class="iblock-foot">昨天 -140</div>
        </div>
        <div class="ibox iblock" style="margin-top: 30px;">
          <p class="iblock-num">4156</p>
          <p class="iblock-title">应用产品数</p>
          <div class="iblock-foot">昨天 +0</div>
        </div>
      </el-col>
    </el-row>

    <div class="ibox" style="margin-top: 20px;padding: 50px 10px 50px 10px;">
      <el-row :gutter="20">
        <el-col :span="18">
          <div id="lm_situationWarn_mapChart"></div>
        </el-col>
        <el-col :span="5">
          <div class="iblock2">
            <p class="iblock2-name">省份用户数</p>
            <p  class="iblock2-data">2,500</p>
          </div>
          <div class="iblock2">
            <p class="iblock2-name">省份预警人员数</p>
            <p class="iblock2-data">4,500</p>
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="12">
          <div class="ibox">
            <p class="ibox-title"><i class="fa fa-line-chart"></i>当前产品变化趋势</p>
            <div id="lm_situationWarn_barChart"></div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="ibox">
            <p class="ibox-title"><i class="fa fa-table"></i>预警人员top10</p>
            <div>表格</div>
          </div>
        </el-col>
      </el-row>
    </div>

  </d2-container>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china.js';
export default {
  components: {
     
  },
  data () {
    return {
      chartData: {
        msg: '第二个图标的首页'
      },
      mapData: [
        {name: '北京', value: 1},
        {name: '天津', value: 1},
        {name: '上海', value: 1},
        {name: '重庆', value: 3.6},
        {name: '河北', value: 3.4 },
        {name: '河南', value: 3.2 },
        {name: '云南', value: 1.6 },
        {name: '辽宁', value: 4.3 },
        {name: '黑龙江', value: 4.1 },
        {name: '湖南', value: 2.4 },
        {name: '安徽', value: 3.3 },
        {name: '山东', value: 3.0 },
        {name: '新疆', value: 1 },
        {name: '江苏', value: 3.9 },
        {name: '浙江', value: 3.5 },
        {name: '江西', value: 2.0 },
        {name: '湖北', value: 2.1 },
        {name: '广西', value: 3.0 },
        {name: '甘肃', value: 1.2},
        {name: '山西', value: 3.2},
        {name: '内蒙古', value: 3.5},
        {name: '陕西', value: 2.5},
        {name: '吉林', value: 4.5},
        {name: '福建', value: 2.8},
        {name: '贵州', value: 1.8},
        {name: '广东', value: 3.7},
        {name: '青海', value: 0.6},
        {name: '西藏', value: 0.4},
        {name: '四川', value: 3.3},
        {name: '宁夏', value: 0.8},
        {name: '海南', value: 1.9},
        {name: '台湾', value: 0.1},
        {name: '香港', value: 0.1},
        {name: '澳门', value: 0.1}
      ]
    }
  },
  mounted(){
    this.drawLineChart()
    this.drawMapChart()
    this.drawBarChart()
  },
  methods:{
    drawLineChart(){
      let _this = this;
      let option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      }
      let lineChart=echarts.init(document.getElementById('lm_situationWarn_lineChart'))
      lineChart.setOption(option)
    },
    drawMapChart(){
      let _this = this;
      let option = {
        series: [{
          name: 'xx',
          type: 'map',
          map: 'china',
          top: 20,
          roam: false,
          itemStyle: {
            areaColor: '#f9d84b',
            borderColor: '#fff',
            borderWidth: 1
          },
          data: _this.heatMapData
        }]
      }
      let mapChart=echarts.init(document.getElementById('lm_situationWarn_mapChart'))
      mapChart.setOption(option)
    },
    drawBarChart(){
      let _this = this;
      let option = {
        tooltip : {
          trigger: 'axis',
          axisPointer : {
            type : 'shadow'
          }
        },
        legend: {
          data:['邮件营销','联盟广告']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis : [
          {
            type : 'category',
            data : ['周一','周二','周三','周四','周五','周六','周日']
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : [
          {
            name:'邮件营销',
            type:'bar',
            stack: '广告',
            data:[120, 132, 101, 134, 90, 230, 210]
          },
          {
            name:'联盟广告',
            type:'bar',
            stack: '广告',
            data:[220, 182, 191, 234, 290, 330, 310]
          }
        ]
      }
      let barChart=echarts.init(document.getElementById('lm_situationWarn_barChart'))
      barChart.setOption(option)
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
#lm_situationWarn{

  .ibox{
    border: 1px solid #ddd;
    background-color: #fff;
    .ibox-title{
      padding-bottom: 16px;
      padding-left: 20px;
      border-bottom: 1px solid #ddd;
      .fa{
        margin-right: 8px;
      }
    }
  }
  .iblock{
    .iblock-num{
      margin: 30px 0 0 0;
      padding: 0 30px;
      font-size: 28px;
      color: #3345a5;
    }
    .iblock-title{
      margin: 10px 0 30px 0;
      padding: 0 30px;
      font-size: 16px;
      color: #888;
    }
    .iblock-foot{
      padding: 10px 30px;
      font-size: 12px;
      color: #fff;
      background-color: #3345a5;
    }
  }
  .iblock2{
    margin-top: 20px;
    padding: 30px 30px 20px 30px;
    border: 1px solid #ddd;
    border-left: 4px solid orange;
    .iblock2-name{
      margin: 0;
      color: #666;
    }
    .iblock2-data{
      margin: 10px 0 0 0;
      font-size: 36px;
      color: orange;
    }
  }

  .iborder{
    border: 1px solid #ddd;
  }

  #lm_situationWarn_lineChart{
    width: 100%;
    height: 284px;
  }
  #lm_situationWarn_mapChart{
    width: 100%;
    height: 700px;
  }
  #lm_situationWarn_barChart{
    width: 100%;
    height: 500px;
  }
}
</style>
