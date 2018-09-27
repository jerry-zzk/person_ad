<template>
	<el-scrollbar style="height: 100%" v-resize:throttle="onResize">
		<el-container>
			<el-main>
				<el-row :gutter="20">
					<el-col :span="24">
						<div class="container">
							<p class="title">贷中风险评分</p>
							<div class="title-text">风险评分：<span>90</span></div>
							<div class="chart" ref="chart"></div>
						</div>
					</el-col>
					<el-col :span="24">
						<div class="container">
							<table class="col-table">
								<tr>
									<th>规则集</th>
									<th class="table_td2">规则</th>
									<th>权重</th>
									<th>评分</th>
									<th>详情</th>
								</tr>
								<tr>
									<td class="bg-gray blue" rowspan="3">失联倾向</td>
									<td class="table_td2">预留手机持续关机</td>
									<td class="f-orange" >8</td>
									<td class="f-red" rowspan="3">90</td>
									<td rowspan="3" @click="tabChange(2)"><i class="fa fa-info f-blue"></i> 详情查看</td>
								</tr>
								<tr>
									<td class="table_td2">出省，出境</td>
									<td class="f-orange" >8</td>
								</tr>
								<tr>
									<td class="table_td2">更换新手机号</td>
									<td class="f-orange" >8</td>
								</tr>
								<tr>
									<td class="bg-gray orange" rowspan="3">关系异常</td>
									<td class="table_td2">身份关联异常</td>
									<td class="f-orange" >8</td>
									<td class="f-red" rowspan="3">90</td>
									<td rowspan="3" @click="tabChange(3)"><i class="fa fa-info f-blue"></i> 详情查看</td>
								</tr>
								<tr>
									<td class="table_td2">群体关联异常</td>
									<td class="f-orange" >8</td>
								</tr>
								<tr>
									<td class="table_td2">身份关联异常</td>
									<td class="f-orange"  >8</td>
								</tr>
								<tr>
									<td class="bg-gray blue1" rowspan="3">位置异常</td>
									<td class="table_td2">频繁出现高档消费场所</td>
									<td class="f-orange" >8</td>
									<td class="f-green" rowspan="3">40</td>
									<td rowspan="3" @click="tabChange(4)"><i class="fa fa-info f-blue"></i> 详情查看</td>
								</tr>
								<tr>
									<td class="table_td2">频繁出省出境</td>
									<td class="f-orange" >8</td>
								</tr>
								<tr>
									<td class="table_td2">重要位置和贷前差别较大（居住场所更新）</td>
									<td class="f-orange" >8</td>
								</tr>
								<tr>
									<td class="bg-gray purple" rowspan="3">行为异常</td>
									<td class="table_td2">网络应用异常</td>
									<td class="f-orange">8</td>
									<td class="f-red" rowspan="3">90</td>
									<td rowspan="3" @click="tabChange(5)"><i class="fa fa-info f-blue"></i> 详情查看</td>
								</tr>
								<tr>
									<td class="table_td2">网络浏览/发布/搜索等行为异常</td>
									<td class="f-orange" >8</td>
								</tr>
								<tr>
									<td class="table_td2">大额消费记录（固定资产类/金融类/消费类）</td>
									<td class="f-orange" >8</td>
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
.title-text{
	position: absolute;
	top:70px;
	left:40px;
	font-size:24px;
	span{
		font-size:40px;
		color:red;
	}
}
	.table_td2{
		text-align: left!important;
		padding-left: 60px!important;
		border-right: none!important;
	}
</style>
<script>
import echarts from 'echarts'
import resize from 'vue-resize-directive'
export default {
  data () {
    return {
    	chart: null,

   	}
  },
  mounted() {
    this.initChart();
  },
  beforeDestroy() {
  	if(this.chart){
  		this.chart.dispose();
  		this.chart= null;
  	}
  },
  directives: {
    resize
  },
  methods:{
  	onResize:function(){
  		if(this.chart){
  			this.chart.resize();
  		}
  	},
  	initChart() {
      	this.chart = echarts.init(this.$refs.chart);
      	this.chart.setOption({
		    title: {
		        text: ""
		    },
		    tooltip: {
		        trigger: 'axis'
		    },
		    radar: [
		        {
		            indicator: [
		                {text: '失联倾向异常', max: 100},
		                {text: '关联异常', max: 100},
		                {text: '位置异常', max: 100},
		                {text: '网络行为异常', max: 100}
		            ],
		            radius: 80
		        },

		    ],
		    series: [
		        {
		            type: 'radar',
		             tooltip: {
		                trigger: 'item'
		            },
		            itemStyle: {normal: {areaStyle: {type: 'default'}}},
		            data: [
		                {
		                    value: [66,78,95,90],
		                    name: 'XXX'
		                }
		            ]
		        },

		    ]
		})
    },
      tabChange(tab){
		  this.$emit("tabChange",tab)
	  }
  }
 }
</script>
