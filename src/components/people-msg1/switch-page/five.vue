<template>
	<el-scrollbar style="height: 100%">
		<el-container>
			<el-main>
				<el-row>
					<el-col :span="24">
						<div class="container">
							<div class="con-title">
								<i class="fa fa-line-chart"></i>
								最新三个月网络浏览行为
							</div>
							<el-row>
								<el-col :span="16">
									<div class="chart" ref="chart1"></div>	
								</el-col>
								<el-col :span="16">
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
						<div class="container">
							<div class="con-title">
							<i class="fa fa-line-chart"></i>
							最近三个月消费行为情况
							</div>
							<table class="col-table">
								<th>
									<td>类别</td>
									<td>贷款前（万元）</td>
									<td>贷款后（万元）</td>
								</th>
								<tr>
									<td>购物</td>
									<td>2</td>
									<td>4</td>
								</tr>
								<tr>
									<td>购物</td>
									<td>2</td>
									<td>4</td>
								</tr>
								<tr>
									<td>购物</td>
									<td>2</td>
									<td>4</td>
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
						<div class="container">
							<div class="con-title">
								<i class="fa fa-line-chart"></i>
								最近三个月消费行为情况
							</div>
							<table class="col-table">
								<th>
									<td>类别</td>
									<td>贷款前（万元）</td>
									<td>贷款后（万元）</td>
								</th>
								<tr>
									<td>购物</td>
									<td>2</td>
									<td>4</td>
								</tr>
								<tr>
									<td>购物</td>
									<td>2</td>
									<td>4</td>
								</tr>
								<tr>
									<td>购物</td>
									<td>2</td>
									<td>4</td>
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
    	
   	}
  },
  directives: {
    resize
  },
  methods:{
  	onResize:function(){
  		
  	}
  }
 }
</script>

