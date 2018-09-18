<template>
	<el-scrollbar style="height: 100%">
		<el-container>
			<el-main>
				<el-row>
					<el-col :span="24">
						<div class="container">
							<p class="title">贷中风险评分</p>
							<div class="text">风险评分：<span>90</span></div>
							<div class="chart" ref="chart"></div>	
						</div>
					</el-col>
					<el-col :span="24">
						<div class="container">
							<table class="col-table">
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
