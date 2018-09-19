<template>
	<el-scrollbar style="height: 100%" v-resize:throttle="onResize">
		<el-container>
			<el-main>
				<el-row>
					<el-col :span="24">
						<div class="container">
							<p class="title">贷中风险评分</p>
							<div class="title-text">风险评分：<span>90</span></div>
							<div class="chart" ref="chart"></div>	
						</div>
					</el-col>
					<el-col :span="24">
						<div class="container">
							 <d2-crud
						      ref="d2Crud"
						      :columns="columns"
						      :data="data"/>
							<!-- <table class="col-table">
								<th>
									<td>规则集</td>
									<td>规则</td>
									<td>权重</td>
									<td>评分</td>
									<td>详情</td>
								</th>
								<tr>
									<td rowspan="3">失联倾向</td>
									<td>预留手机持续关机</td>
									<td>8</td>
									<td rowspan="3">90</td>
									<td rowspan="3"><i class="fa fa-info"></i> 详情查看</td>
								</tr>
								<tr>
									<td>出省，出境</td>
									<td>8</td>
								</tr>
								<tr>
									<td>更换新手机号</td>
									<td>8</td>
								</tr>
								<tr>
									<td rowspan="3">关系异常</td>
									<td>身份关联异常</td>
									<td>8</td>
									<td rowspan="3">90</td>
									<td rowspan="3"><i class="fa fa-info"></i> 详情查看</td>
								</tr>
								<tr>
									<td>群体关联异常</td>
									<td>8</td>
								</tr>
								<tr>
									<td>身份关联异常</td>
									<td>8</td>
								</tr>
								<tr>
									<td rowspan="3">位置异常</td>
									<td>频繁出现高档消费场所</td>
									<td>8</td>
									<td rowspan="3">40</td>
									<td rowspan="3"><i class="fa fa-info"></i> 详情查看</td>
								</tr>
								<tr>
									<td>频繁出省出境</td>
									<td>8</td>
								</tr>
								<tr>
									<td>重要位置和贷前差别较大（居住场所更新）</td>
									<td>8</td>
								</tr>
								<tr>
									<td rowspan="3">行为异常</td>
									<td>网络应用异常</td>
									<td>8</td>
									<td rowspan="3">90</td>
									<td rowspan="3"><i class="fa fa-info"></i> 详情查看</td>
								</tr>
								<tr>
									<td>网络浏览/发布/搜索等行为异常</td>
									<td>8</td>
								</tr>
								<tr>
									<td>大额消费记录（固定资产类/金融类/消费类）</td>
									<td>8</td>
								</tr>
							</table> -->
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
</style>
<script>
import echarts from 'echarts'
import resize from 'vue-resize-directive'
export default {
  data () {
    return {
    	chart: null,
    	columns: [
	        {
	          title: '日期',
	          key: 'date',
	          width: '180'
	        },
	        {
	          title: '姓名',
	          key: 'name',
	          width: '180'
	        },
	        {
	          title: '地址',
	          key: 'address'
	        }
	      ],
      	data: [
	        {
	          date: '2016-05-02',
	          name: '王小虎',
	          address: '上海市普陀区金沙江路 1518 弄'
	        },
	        {
	          date: '2016-05-04',
	          name: '王小虎',
	          address: '上海市普陀区金沙江路 1517 弄'
	        },
	        {
	          date: '2016-05-01',
	          name: '王小虎',
	          address: '上海市普陀区金沙江路 1519 弄'
	        },
	        {
	          date: '2016-05-03',
	          name: '王小虎',
	          address: '上海市普陀区金沙江路 1516 弄'
	        }
        ]
   	}
  },
  mounted() {
    this.initChart();
  },
  beforeDestroy() {
  	this.chart.dispose();
  	this.chart= null;
  },
  directives: {
    resize
  },
  methods:{
  	onResize:function(){
  		this.chart.resize();
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
    }
  }
 }
</script>
