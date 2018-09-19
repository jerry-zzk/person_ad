<template>
  <div class="ipanel">
  	<div class="ipanel-item">
  		<p class="ipanel-p">新手机号的可信度</p>
  		<el-row class="ipanel-thead">
  			<el-col :span="4">判定规则</el-col>
  			<el-col :span="5">判定依据</el-col>
  			<el-col :span="5">规则权重</el-col>
  			<el-col :span="5">规则匹配情况</el-col>
  			<el-col :span="5">详情</el-col>
  		</el-row>
  		<el-row v-for="msg in phoneMsg" :key="msg.ruleName" class="ipanel-tr">
  			<el-col :span="4">{{msg.ruleName}}</el-col>
  			<el-col :span="5">{{msg.judgeBase}}</el-col>
  			<el-col :span="5">{{msg.ruleWeight}}</el-col>
  			<el-col :span="5">{{msg.ruleCondition}}</el-col>
  			<el-col :span="5">{{msg.detail}}</el-col>
  		</el-row>
  	</div>

  	<div class="ipanel-item">
  		<p class="ipanel-p">活动区域的热力图 13557986547 135478961423</p>
  		<div>
  			<el-button>近一周</el-button>
  			<el-button>近一月</el-button>
  			<el-button>近三个月</el-button>
  			<el-button>近一年</el-button>
  		</div>
  		<div id="active_map_baidu"></div>
  	</div>

  	<div class="ipanel-item">
  		<p class="ipanel-p">社会关系的关系图</p>
  		<div id="f_relationCahrt"></div>
  	</div>

	</div>
</template>
<script>
import echarts from 'echarts'
export default {
  data(){
    return{
      phoneMsg: [{
      	ruleName: 'IMEI标识',
      	judgeBase: '同手机换卡',
      	ruleWeight: '10',
      	ruleCondition: '两个号码imei相同',
      	detail: 'IMEI: 00df2e99d320'
      },{
      	ruleName: '活动区域',
      	judgeBase: '重要位置重叠度',
      	ruleWeight: '10',
      	ruleCondition: '重要位置重叠度80%',
      	detail: '平均偏差小于800米'
      },{
      	ruleName: '社会关系',
      	judgeBase: '社会关系重叠度',
      	ruleWeight: '10',
      	ruleCondition: '社会关系重叠度76%',
      	detail: '数量及联系频次相当'
      }]
    }
  },
  mounted(){
  	console.log(document.getElementById('active_map_baidu').style.width)
  	this.drawBaiduMap()
  	this.drawRelationChart()
  },
  methods:{
    handleClick(tab, event) {
      console.log(tab, event);
    },
    drawBaiduMap(){
    	let _this = this;
    	// 百度地图API功能
			let map = new BMap.Map("active_map_baidu");    // 创建Map实例
			map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别	  
			map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
			map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    },
    drawRelationChart(){
    	let _tihs = this
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
      let relationChart=echarts.init(document.getElementById('f_relationCahrt'))
      relationChart.setOption(option)
    }
  }
}
</script>
<style lang="scss" scoped>
  .ipanel{
  	margin: 30px 20px;
  	padding: 30px 20px;
  	border: 1px solid #ddd;
  	font-size: 14px;

  	#active_map_baidu{
  		width: 100%;
  		height: 500px;
  	}
  	#f_relationCahrt{
  		width: 100%;
  		height: 400px;
  	}
  }
</style>
