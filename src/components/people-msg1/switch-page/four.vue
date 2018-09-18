<template>
	<el-scrollbar style="height: 100%">
		<el-container>
			<el-main>
				<el-row>
					<el-col :span="24">
						<div class="container">
							<div class="con-title">
								区域内位置行为
							</div>
							<el-row>
								<el-col :span="16">
									<div class="chart" ref="chart1"></div>	
								</el-col>
								<el-col :span="16">
									<div class="con-title">
										<i class="fa fa-calendar"></i>
										活动场所top10
									</div>
									<table class="col-table">
										<th>
											<td>场所</td>
											<td>次数</td>
											<td>增减情况</td>
										</th>
										<tr>
											<td>台湾会所</td>
											<td>20</td>
											<td>UP</td>
										</tr>
										<tr>
											<td>台湾会所</td>
											<td>20</td>
											<td>UP</td>
										</tr>
										<tr>
											<td>台湾会所</td>
											<td>20</td>
											<td>UP</td>
										</tr>
									</table>
								</el-col>
							</el-row>
						</div>
					</el-col>
					<el-col :span="24">
						<div class="container">
							<div class="con-title">
								出境入境行为
							</div>
							<el-row>
								<el-col :span="16">
									<div class="chart" ref="chart1"></div>	
								</el-col>
								<el-col :span="16">
									<div class="con-title">
										<i class="fa fa-calendar"></i>
										近一个月出行行为top10
									</div>
									<button>迁入：134562人</button>
									<button>迁出：134562人</button>
									<table class="col-table">
										<tr>
											<td>北京</td>
											<td><img src="">河北</td>
											<td>200</td>
										</tr>
										<tr>
											<td>北京</td>
											<td><img src="">河北</td>
											<td>200</td>
										</tr>
										<tr>
											<td>北京</td>
											<td><img src="">河北</td>
											<td>200</td>
										</tr>
									</table>
								</el-col>
							</el-row>
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
