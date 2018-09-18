<template>
	<el-scrollbar style="height: 100%">
		<el-container>
			<el-main>
				<el-row>
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
						<div class="container">
							<div class="con-title">
								<i class="fa fa-calendar"></i>
								最近一个月通话统计
							</div>
							<table class="col-table">
								<th>
									<td>日期</td>
									<td>次数</td>
								</th>
								<tr>
									<td>2017-05-01</td>
									<td>98</td>
								</tr>
								<tr>
									<td>2017-05-01</td>
									<td>98</td>
								</tr>
								<tr>
									<td>2017-05-01</td>
									<td>98</td>
								</tr>
							</table>
						</div>
					</el-col>
					<el-col :span="16">
						<div class="container">
							<div class="con-title">
								<i class="fa fa-line-chart"></i>
								最近一个月停机统计
							</div>
							<div class="chart" ref="chart2"></div>	
						</div>
					</el-col>
					<el-col :span="8">
						<div class="container">
							<div class="con-title">
								<i class="fa fa-calendar"></i>
								最近一个月停机统计
							</div>
							<table class="col-table">
								<th>
									<td>日期</td>
									<td>次数</td>
								</th>
								<tr>
									<td>2017-05-01</td>
									<td>98</td>
								</tr>
								<tr>
									<td>2017-05-01</td>
									<td>98</td>
								</tr>
								<tr>
									<td>2017-05-01</td>
									<td>98</td>
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
						<div class="container">
							<div class="con-title">
								<i class="fa fa-calendar"></i>
								最近一个月手机换号统计
							</div>
							<table class="col-table">
								<th>
									<td>日期</td>
									<td>手机号</td>
								</th>
								<tr>
									<td>2017-05-01</td>
									<td>1347589642</td>
								</tr>
								<tr>
									<td>2017-05-01</td>
									<td>1347589642</td>
								</tr>
								<tr>
									<td>2017-05-01</td>
									<td>1347589642</td>
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

