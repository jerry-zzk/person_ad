<template>
	<el-scrollbar style="height: 100%;position:relative" v-resize:throttle="onResize">
		<el-container>
			<el-main>
				<el-row :gutter="20" >
					<el-col :span="24">
						<div class="container">
							<div class="con-title">
								<i class="fa fa-line-chart"></i>
								最新三个月网络浏览行为
							</div>
							<el-row>
								<el-col :span="12">
									<div class="chart" ref="chart1"></div>	
								</el-col>
								<el-col :span="12">
									<div class="chart" ref="chart2"></div>	
								</el-col>
							</el-row>
						</div>
					</el-col>
					<el-col :span="16">
						<div class="container">
							<div class="con-title">
								<i class="fa fa-line-chart"></i>
								最近三个月消费行为情况（2017-05-25 ~~ 2017-08-25）
							</div>
							<div class="chart" ref="chart3"></div>
						</div>
						
					</el-col>	
					<el-col :span="8">
						<div class="container no-pad">
							<div class="con-title">
							<i class="fa fa-calendar"></i>
							最近三个月消费行为情况
							</div>
							<table class="col-table list">
								<tr>
									<th>类别</th>
									<th>贷款前（万元）</th>
									<th>贷款后（万元）</th>
								</tr>
								<tr>
									<td>购物</td>
									<td class="f-blue1">2</td>
									<td class="f-red">4</td>
								</tr>
								<tr>
									<td>购物</td>
									<td class="f-blue1">2</td>
									<td class="f-red">4</td>
								</tr>
								<tr>
									<td>购物</td>
									<td class="f-blue1">2</td>
									<td class="f-red">4</td>
								</tr>
								<tr>
									<td>购物</td>
									<td class="f-blue1">2</td>
									<td class="f-red">4</td>
								</tr>
								<tr>
									<td>购物</td>
									<td class="f-blue1">2</td>
									<td class="f-red">4</td>
								</tr>
								<tr>
									<td>购物</td>
									<td class="f-blue1">2</td>
									<td class="f-red">4</td>
								</tr>
								<tr>
									<td>购物</td>
									<td class="f-blue1">2</td>
									<td class="f-red">4</td>
								</tr>
								<tr>
									<td>购物</td>
									<td class="f-blue1">2</td>
									<td class="f-red">4</td>
								</tr>
								<tr>
									<td>购物</td>
									<td class="f-blue1">2</td>
									<td class="f-red">4</td>
								</tr>
							</table>
						</div>
					</el-col>
					<el-col :span="16">
						<div class="container">
							<div class="con-title">
								<i class="fa fa-line-chart"></i>
								最近三个月消费行为情况（2017-05-25 ~~ 2017-08-25）
							</div>
							<div class="chart" ref="chart4"></div>
						</div>
					</el-col>
					<el-col :span="8">
						<div class="container no-pad">
							<div class="con-title">
								<i class="fa fa-calendar"></i>
								最近三个月消费行为情况
							</div>
							<table class="col-table list">
								<tr>
									<th>类别</th>
									<th>贷款前（万元）</th>
									<th>贷款后（万元）</th>
								</tr>
								<tr>
									<td>购物</td>
									<td class="f-blue1">2</td>
									<td class="f-red">4</td>
								</tr>
								<tr>
									<td>购物</td>
									<td class="f-blue1">2</td>
									<td class="f-red">4</td>
								</tr>
								<tr>
									<td>购物</td>
									<td class="f-blue1">2</td>
									<td class="f-red">4</td>
								</tr>
								<tr>
									<td>购物</td>
									<td class="f-blue1">2</td>
									<td class="f-red">4</td>
								</tr>
								<tr>
									<td>购物</td>
									<td class="f-blue1">2</td>
									<td class="f-red">4</td>
								</tr>
								<tr>
									<td>购物</td>
									<td class="f-blue1">2</td>
									<td class="f-red">4</td>
								</tr>
								<tr>
									<td>购物</td>
									<td class="f-blue1">2</td>
									<td class="f-red">4</td>
								</tr>
								<tr>
									<td>购物</td>
									<td class="f-blue1">2</td>
									<td class="f-red">4</td>
								</tr>
								<tr>
									<td>购物</td>
									<td class="f-blue1">2</td>
									<td class="f-red">4</td>
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
    	chart4:null,
   	}
  },
  directives:{
    resize
  },
  mounted() {
    this.initChart1();
    this.initChart2();
    this.initChart3();
    this.initChart4();
  },
  beforeDestroy() {
  	// if(this.chart1){
  	// 	this.chart1.dispose();
	  // 	this.chart1= null;
	  // 	this.chart2.dispose();
	  // 	this.chart2= null;
	  // 	this.chart3.dispose();
	  // 	this.chart3= null;
	  // 	this.chart4.dispose();
	  // 	this.chart4= null;
  	// }
  	
  },

  methods:{
  	onResize:function(){
  		if(this.chart1){
  			this.chart1.resize();
  		}
  		if(this.chart2){
  			this.chart2.resize();
  		}
  		if(this.chart3){
  			this.chart2.resize();
  		}
  		if(this.chart4){
  			this.chart2.resize();
  		}
  	},
  	initChart1() {
      	this.chart1 = echarts.init(this.$refs.chart1);
      	this.chart1.setOption({
		    title : {
		        text: '贷款前（2017-05-25 ~~ 2017-08-25',
		        subtext: '',
		        left:"center",
		        top:"10%",
		        textStyle:{
		        	align :"center",
					fontSize:12
		        }
		    },
		    color:['#409eff','#bad654','#76cbc5', '#65a4c3', '#6e82b9','#8e6bcf'],
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    grid:{
		    	left:"10%",
		    	right:"10%",
		    	top:"10%",
		    	bottom:"10%",
		    },
		    legend: {
		        orient: 'vertical',
		        left: 'right',
		        top:"middle",
		        data: ['新闻','体育','文化','其他',]
		    },
		    series : [
		        {
		            name: '搜索行为',
		            type: 'pie',
		            radius: '50%',
		            data:[
		                {value:3351, name:'新闻'},
		                {value:3101, name:'体育'},
		                {value:1234, name:'文化'},
		                {value:1325, name:'其他'},
		            ],
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
		    ]
		})
    },
    initChart2() {
      	this.chart2 = echarts.init(this.$refs.chart2);
      	this.chart2.setOption({
		    title : {
		        text: '贷款后（2017-05-25 ~~ 2017-08-25',
		        subtext: '',
		        left:"center",
		        top:"10%",
		        textStyle:{
		        	align :"center",
					fontSize:12
		        }
		    },
		    color:['#409eff','#bad654','#76cbc5', '#65a4c3', '#6e82b9','#8e6bcf'],
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    grid:{
		    	left:"10%",
		    	right:"10%",
		    	top:"10%",
		    	bottom:"10%",
		    },
		    legend: {
		        orient: 'vertical',
		        left: 'right',
		        top:"middle",
		        data: ['新闻','体育','文化','其他',]
		    },
		    series : [
		        {
		            name: '搜索行为',
		            type: 'pie',
		            radius: '50%',
		            data:[
		                {value:3511, name:'新闻'},
		                {value:31111, name:'体育'},
		                {value:1231, name:'文化'},
		                {value:1325, name:'其他'},
		            ],
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
		    ]
		})
    },
    initChart3() {
      	this.chart3 = echarts.init(this.$refs.chart3);
      	this.chart3.setOption({
		    xAxis: {
		        type: 'category',
		        data: ['2017-05-01', '2017-05-06', '2017-05-11', '2017-05-16', '2017-05-21', '2017-05-26', '2017-05-31']
		    },
		    yAxis: {
		        type: 'value'
		    },
		    series: [ {
		    	barWidth: "10%",
		    	zlevel:2,
		        data: [820, 932, 901, 934, 1290, 1330, 1320],
		        type: 'bar',
		    },{
		    	barWidth: "10%",
		        data: [820, 932, 901, 934, 1290, 1330, 1320],
		        type: 'bar',
		    }]
		})
    },
    initChart4() {
      	this.chart4 = echarts.init(this.$refs.chart4);
      	this.chart4.setOption({
		    xAxis: {
		        type: 'category',
		        data: ['2017-05-01', '2017-05-06', '2017-05-11', '2017-05-16', '2017-05-21', '2017-05-26', '2017-05-31']
		    },
		    yAxis: {
		        type: 'value'
		    },
		    series: [ {
		    	barWidth: "10%",
		    	zlevel:2,
		        data: [820, 932, 901, 934, 1290, 1330, 1320],
		        type: 'bar',
		    },{
		    	barWidth: "10%",
		        data: [820, 932, 901, 934, 1290, 1330, 1320],
		        type: 'bar',
		    }]
		})

    }

  }
 }
</script>

