<template>
	<el-scrollbar style="height: 100%" v-resize:throttle="onResize">
		<el-container>
			<el-main>
				<el-row :gutter="20">
					<el-col :span="16">
						<div class="container">
							<div class="con-title">
								<i class="fa fa-line-chart"></i>
								最近一个月通话统计
							</div>
							<div class="chart" ref="chart1"></div>	
						</div>
					</el-col>
					<el-col :span="8">
						<div class="container no-pad">
							<div class="con-title">
								<i class="fa fa-calendar"></i>
								最近一个月通话统计
							</div>
							<table class="col-table list">
								<tr>
									<th>日期</th>
									<th>次数</th>
								</tr>
								<tr>
									<td>2017-05-01</td>
									<td class="f-blue1">98</td>
								</tr>
								<tr>
									<td>2017-05-01</td>
									<td class="f-blue1">98</td>
								</tr>
								<tr>
									<td>2017-05-01</td>
									<td class="f-blue1">98</td>
								</tr>
								<tr>
									<td>2017-05-01</td>
									<td class="f-blue1">98</td>
								</tr>
								<tr>
									<td>2017-05-01</td>
									<td class="f-blue1">98</td>
								</tr>
								<tr>
									<td>2017-05-01</td>
									<td class="f-blue1">98</td>
								</tr>
								<tr>
									<td>2017-05-01</td>
									<td class="f-blue1">98</td>
								</tr>
								<tr>
									<td>2017-05-01</td>
									<td class="f-blue1">98</td>
								</tr>
								<tr>
									<td>2017-05-01</td>
									<td class="f-blue1">98</td>
								</tr>
							</table>
						</div>
					</el-col>
					<el-col :span="16">
						<div class="container ">
							<div class="con-title">
								<i class="fa fa-line-chart"></i>
								最近一个月停机统计
							</div>
							<div class="chart" ref="chart2"></div>	
						</div>
					</el-col>
					<el-col :span="8">
						<div class="container no-pad">
							<div class="con-title">
								<i class="fa fa-calendar"></i>
								最近一个月停机统计
							</div>
							<table class="col-table list">
								<tr>
									<th>日期</th>
									<th>开机时长（min）</th>
								</tr>
								<tr>
									<td>2017-05-01</td>
									<td class="f-blue1">98</td>
								</tr>
								<tr>
									<td>2017-05-01</td>
									<td class="f-blue1">98</td>
								</tr>
								<tr>
									<td>2017-05-01</td>
									<td class="f-blue1">98</td>
								</tr>
								<tr>
									<td>2017-05-01</td>
									<td class="f-blue1">98</td>
								</tr>
								<tr>
									<td>2017-05-01</td>
									<td class="f-blue1">98</td>
								</tr>
								<tr>
									<td>2017-05-01</td>
									<td class="f-blue1">98</td>
								</tr>
								<tr>
									<td>2017-05-01</td>
									<td class="f-blue1">98</td>
								</tr>
								<tr>
									<td>2017-05-01</td>
									<td class="f-blue1">98</td>
								</tr>
								<tr>
									<td>2017-05-01</td>
									<td class="f-blue1">98</td>
								</tr>
							</table>
						</div>
					</el-col>
					<el-col :span="16">
						<div class="container">
							<div class="con-title">
								<i class="fa fa-line-chart"></i>
								最近一个月手机换号统计
							</div>
							<div class="chart" ref="chart3"></div>	
						</div>
					</el-col>
					<el-col :span="8">
						<div class="container no-pad">
							<div class="con-title">
								<i class="fa fa-calendar"></i>
								最近一个月手机换号统计
							</div>
							<table class="col-table list">
								<tr>
									<th>日期</th>
									<th>手机号</th>
								</tr>
								<tr>
									<td>2017-05-01</td>
									<td class="f-orange">1347589642</td>
								</tr>
								<tr>
									<td>2017-05-01</td>
									<td class="f-orange">1347589642</td>
								</tr>
								<tr>
									<td>2017-05-01</td>
									<td class="f-orange">1347589642</td>
								</tr>
								<tr>
									<td>2017-05-01</td>
									<td class="f-orange">1347589642</td>
								</tr>
								<tr>
									<td>2017-05-01</td>
									<td class="f-orange">1347589642</td>
								</tr>
								<tr>
									<td>2017-05-01</td>
									<td class="f-orange">1347589642</td>
								</tr>
								<tr>
									<td>2017-05-01</td>
									<td class="f-orange">1347589642</td>
								</tr>
								<tr>
									<td>2017-05-01</td>
									<td class="f-orange">1347589642</td>
								</tr>
								<tr>
									<td>2017-05-01</td>
									<td class="f-orange">1347589642</td>
								</tr>
							</table>
						</div>
					</el-col>
				</el-row>
			</el-main>
		</el-container>
	</el-scrollbar>
</template>
<style lang="scss" scoped>
@import '~@/assets/style/unit/info.scss';
</style>
<script>
import echarts from 'echarts'
import resize from 'vue-resize-directive'
export default {
  data () {
    return {
    	chart1:null,
    	chart2:null,
    	chart3:null,
   	}
  },
  mounted() {
    this.initChart1();
    this.initChart2();
    this.initChart3();
  },
  beforeDestroy() {
  	this.chart1.dispose();
  	this.chart2.dispose();
  	this.chart3.dispose();
  	this.chart1= null;
  	this.chart2= null;
  	this.chart3= null;
  },
  directives: {
    resize
  },
  methods:{
  	onResize:function(){
  		if(this.chart){
  			this.chart1.resize();
  			this.chart2.resize();	
  			this.chart3.resize();
  		}
  				
  	},
  	initChart1() {
      	this.chart1 = echarts.init(this.$refs.chart1);
      	this.chart1.setOption({
		    xAxis: {
		        type: 'category',
		        boundaryGap: false,
		        data: ['2017-05-01', '2017-05-06', '2017-05-11', '2017-05-16', '2017-05-21', '2017-05-26', '2017-05-31']
		    },
		    yAxis: {
		        type: 'value'
		    },
		    series: [{
		        data: [820, 932, 901, 934, 1290, 1330, 1320],
		        type: 'line',
		        areaStyle: {}
		    }]
		})
    },
    initChart2() {
      	this.chart2 = echarts.init(this.$refs.chart2);
      	this.chart2.setOption({
		    xAxis: {
		        type: 'category',
		        data: ['2017-05-01', '2017-05-06', '2017-05-11', '2017-05-16', '2017-05-21', '2017-05-26', '2017-05-31']
		    },
		    yAxis: {
		        type: 'value'
		    },
		    series: [ { 
	            type: 'bar',
	            itemStyle: {
	                normal: {color: 'rgba(0,0,0,0.05)'}
	            },
	            barGap:'-100%',
	            barCategoryGap:'40%',
	            barWidth: '60%',
	            data: [1500, 1500, 1500, 1500, 1500, 1500, 1500],
	            animation: false
	        },{
		    	barWidth: '60%',
		        data: [820, 932, 901, 934, 1290, 1330, 1320],
		        type: 'bar',
		    }]
		})
    },
    initChart3() {
      	this.chart3 = echarts.init(this.$refs.chart3);
      	this.chart3.setOption({
      		xAxis: {
		        type: 'category',
		        boundaryGap: false,
		        data: ['2017-05-01', '2017-05-06', '2017-05-11', '2017-05-16', '2017-05-21', '2017-05-26', '2017-05-31']
		    },
		    yAxis: {
		        type: 'value'
		    },
		    
		    series: [{
		        data: [820, 932, 901, 934, 1290, 1330, 1320],
		        type: 'line',
		        symbolSize:10,
            	symbol:'circle',
		        lineStyle : {
		        	color:"rgba(0,0,0,0)"
		        },
		        itemStyle:{
		        	normal: {
			        	color:'#fb957d',
					},
		        	
		        }
		    }]
		})
    }

  }
 }
  
</script>

