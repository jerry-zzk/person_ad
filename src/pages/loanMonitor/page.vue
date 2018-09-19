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
          <i class="fa fa-users"></i>
          <div class="iblock-foot">
            昨天<span class="iblock-digit">+ 420</span>
          </div>
        </div>
        <div class="ibox iblock iblock-margin">
          <p class="iblock-num">2450</p>
          <p class="iblock-title">风险用户数</p>
          <i class="fa fa-question-circle" style="font-size:60px;"></i>
          <div class="iblock-foot iblock-foot-blue">
            昨天<span class="iblock-digit">- 50</span>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="ibox iblock">
          <p class="iblock-num">486</p>
          <p class="iblock-title">存量规则数</p>
          <i class="fa fa-cubes"></i>
          <div class="iblock-foot iblock-foot-orange">
            昨天<span class="iblock-digit">- 140</span>
          </div>
        </div>
        <div class="ibox iblock iblock-margin">
          <p class="iblock-num">4156</p>
          <p class="iblock-title">应用产品数</p>
          <i class="fa fa-bell"></i>
          <div class="iblock-foot iblock-foot-purple">
            昨天<span class="iblock-digit">+ 0</span>
          </div>
        </div>
      </el-col>
    </el-row>

    <div class="ibox mapBox">
      <el-row :gutter="20">
        <el-col :span="18">
          <div id="lm_situationWarn_mapChart"></div>
        </el-col>
        <el-col :span="5">
          <div class="iblock2">
            <p class="iblock2-name">省份用户数</p>
            <p  class="iblock2-data">2,500</p>
          </div>
          <div class="iblock2 iblock2-blue">
            <p class="iblock2-name">省份预警人员数</p>
            <p class="iblock2-data">4,500</p>
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="12">
          <div class="ibox">
            <p class="ibox-title"><i class="fa fa-bar-chart"></i>当前产品变化趋势</p>
            <div id="lm_situationWarn_barChart"></div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="ibox">
            <p class="ibox-title"><i class="fa fa-table"></i>预警人员top10</p>
            <div class="pList">
              <el-row class="pList-head">
                <el-col :span="6" class="pList-first">人员姓名</el-col>
                <el-col :span="8">身份证号</el-col>
                <el-col :span="3">性别</el-col>
                <el-col :span="3">风险评分</el-col>
                <el-col :span="4">操作</el-col>
              </el-row>
              <el-row v-for="(pepole,index) in pepoleList" :key="pepole.id" class="pList-tr">
                <el-col :span="6" class="pList-first">
                  <i class="fa fa-user-circle" v-if="index%2==0" style="color:#f99400;"></i>
                  <i class="fa fa-user-circle" v-else style="color:#8c95ca;"></i>
                  {{pepole.name}}
                </el-col>
                <el-col :span="8">{{pepole.idCard}}</el-col>
                <el-col :span="3" class="pList-gender">{{pepole.gender}}</el-col>
                <el-col :span="3" class="pList-grade">{{pepole.grade}}</el-col>
                <el-col :span="4">
                  <i class="fa fa-file-text-o" style="margin-right:4px;color:#3d99f1;"></i>详情查看
                </el-col>
              </el-row>
            </div>
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
      lineData: {
        xAxisData: ['05-01','05-02','05-03','05-04','05-05','05-06','05-07'],
        seriesData:[{
          type: 'line',
          data: [25000,0,33000,30000,51000,28000,35000]
        }]
      },
      heatMapData: [
        {name: '北京', value: 2000},
        {name: '天津', value: 0},
        {name: '上海', value: 0},
        {name: '重庆', value: 0},
        {name: '河北', value: 0 },
        {name: '河南', value: 0 },
        {name: '云南', value: 0 },
        {name: '辽宁', value: 0 },
        {name: '黑龙江', value: 0 },
        {name: '湖南', value: 0 },
        {name: '安徽', value: 0 },
        {name: '山东', value: 0 },
        {name: '新疆', value: 0 },
        {name: '江苏', value: 0 },
        {name: '浙江', value: 0 },
        {name: '江西', value: 0 },
        {name: '湖北', value: 0 },
        {name: '广西', value: 0 },
        {name: '甘肃', value: 0},
        {name: '山西', value: 0},
        {name: '内蒙古', value: 0},
        {name: '陕西', value: 0},
        {name: '吉林', value: 0},
        {name: '福建', value: 0},
        {name: '贵州', value: 0},
        {name: '广东', value: 0},
        {name: '青海', value: 0},
        {name: '西藏', value: 0},
        {name: '四川', value: 0},
        {name: '宁夏', value: 0},
        {name: '海南', value: 0},
        {name: '台湾', value: 0},
        {name: '香港', value: 0},
        {name: '澳门', value: 0}
      ],
      pepoleList: [
        {id:1,name:'张三',idCard:'410785198407141786',gender:'男',grade:'75'},
        {id:2,name:'李四',idCard:'410785198407141786',gender:'男',grade:'75'},
        {id:3,name:'王二麻子',idCard:'410785198407141786',gender:'男',grade:'75'},
        {id:4,name:'汤姆汉克斯',idCard:'410785198407141786',gender:'男',grade:'75'},
        {id:5,name:'奥姆浩格沃茨',idCard:'410785198407141786',gender:'男',grade:'75'},
        {id:6,name:'张三四五六七八',idCard:'410785198407141786',gender:'男',grade:'75'},
        {id:7,name:'一二三四五六七',idCard:'410785198407141786',gender:'男',grade:'75'},
        {id:8,name:'abcdefghijklm',idCard:'410785198407141786',gender:'男',grade:'75'},
        {id:9,name:'张三',idCard:'410785198407141786',gender:'男',grade:'75'},
        {id:10,name:'张三',idCard:'410785198407141786',gender:'男',grade:'75'}
      ]
    }
  },
  mounted(){
    this.drawLineChart(this.lineData.xAxisData,this.lineData.seriesData)
    this.drawMapChart()
    this.drawBarChart()
  },
  methods:{
    // 画线图(X轴，数据)
    drawLineChart(xAxisData,seriesData){
      let _this = this;
      let option = {
        color: ['#3245a4','#fb7857'],
        grid: {
          right: 30,
          left: 90
        },
        tooltip: {
          show: true
        },
        legend:{
          right: 30,
          data: [{name:'存量用户',icon:'rect'},{name:'预警人员',icon:'rect'}]
        },
        xAxis: {
          type: 'category',
          axisTick: {show: false},
          axisLabel: {rotate: 60},
          data: ['05-01','05-02','05-03','05-04','05-05','05-06','05-07']
        },
        yAxis: {
          type: 'value',
          axisLine: {show: false},
          axisTick: {show: false},
          nameRotate: 270,
          nameLocation: 'middle',
          nameGap: 50,
          name: '数量/人'
        },
        series: [{
          type: 'line',
          name: '存量用户',
          data: [30000,10000,23000,34000,21000,26000,40000]
        },{
          type: 'line',
          name: '预警人员',
          areaStyle:{
            color: '#feece8'
          },
          data: [25000,0,33000,30000,51000,28000,35000]
        }]
      }
      let lineChart=echarts.init(document.getElementById('lm_situationWarn_lineChart'))
      lineChart.setOption(option)
    },
    drawMapChart(){
      let _this = this;
      let option = {
        tooltip:{
          show: true
        },
        visualMap:[{
          type:'continuous',
          show: false,
          min: 0,
          max: 200,
          color: ['#ff0000','#f9d84b']
        }],
        series: [{
          name: '',
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
        color: ['#fb7857','#3245a4'],
        grid: {
          right: 30,
          left: 90
        },
        tooltip: {
          show: true
        },
        legend:{
          right: 30,
          data: [{name:'风险用户数',icon:'rect'},{name:'存量用户数',icon:'rect'}]
        },
        xAxis: {
          type: 'category',
          axisLine: {show: false},
          axisTick: {show: false},
          data: ['产品1','产品2','产品3','产品4','产品5','产品6','产品7','产品8']
        },
        yAxis: {
          type: 'value',
          axisLine: {show: false},
          axisTick: {show: false},
          nameRotate: 270,
          nameLocation: 'middle',
          nameGap: 50,
          name: '数量/人'
        },
        series : [{
          type:'bar',
          name: '风险用户数',
          stack: 'x',
          barWidth: 16,
          data: [4100, 3200, 2800, 4500, 1600, 2200, 2400, 4100]
        },{
          type:'bar',
          name: '存量用户数',
          stack: 'x',
          barWidth: 16,
          data: [5800, 4200, 3800, 6100, 2000, 2700, 3200, 5800]
        }]
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
      margin-bottom: 0;
      padding-bottom: 16px;
      padding-left: 20px;
      border-bottom: 1px solid #ddd;
      .fa{
        margin-right: 8px;
      }
    }
  }
  .iblock{
    position: relative;
    &:after{
      content: '';
      display: block;
      width: 0;
      clear: both;
    }
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
    .fa{
      position: absolute;
      top: 30px;
      right: 30px;
      font-size: 50px;
      color: #ddd;
    }
    .iblock-foot{
      padding: 10px 30px;
      font-size: 12px;
      color: #fff;
      background: linear-gradient(90deg, #4e5fc0, #233695);
      .iblock-digit{
        float: right;
      }
    }
    .iblock-foot-orange{
      background: linear-gradient(90deg, #f98464, #f2645e);
    }
    .iblock-foot-blue{
      background: linear-gradient(90deg, #80cef3, #208bef);
    }
    .iblock-foot-purple{
      background: linear-gradient(90deg, #c885d9, #5d38ba);
    }
  }
  .iblock2{
    margin-top: 20px;
    padding: 30px 30px 20px 30px;
    border: 1px solid #ddd;
    border-left: 4px solid #ed6127;
    .iblock2-name{
      margin: 0;
      color: #666;
    }
    .iblock2-data{
      margin: 10px 0 0 0;
      font-size: 36px;
      color: #ed6127;
    }
  }
  .iblock2-blue{
    border-left: 4px solid #2ea0f3;
    .iblock2-data{
      color: #2ea0f3;
    }
  }
  .iblock-margin{
    margin-top: 30px;
  }
  .pList{
    font-size: 14px;
    .pList-head{
      height: 32px;
      line-height: 32px;
      background-color: #e9eff3;
    }
    .pList-first{
      padding-left: 20px;
      .fa{
        margin-right: 4px;
        font-size: 24px;
      }
    }
    .pList-tr{
      height: 48px;
      line-height: 48px;
      border-top: 1px solid #ddd;
      .pList-gender{
        color: #f58a86;
      }
      .pList-grade{
        color: #5663ac;
      }
    }
  }
  .mapBox{
    margin-top: 20px;
    padding: 50px 10px 50px 10px;
  }

  .iborder{
    border: 1px solid #ddd;
  }

  #lm_situationWarn_lineChart{
    width: 100%;
    height: 300px;
  }
  #lm_situationWarn_mapChart{
    width: 100%;
    height: 700px;
  }
  #lm_situationWarn_barChart{
    width: 100%;
    height: 512px;
  }
}
</style>
