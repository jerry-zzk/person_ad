<template>
	<el-scrollbar style="height: 100%">
		<el-container>
			<el-main>
				<el-row>
					<el-col :span="24">
						<div class="container">
							<p class="title">身份关系异常</p>
							<table class="col-table">
								<th>
									<td>类型</td>
									<td>号码</td>
									<td>关联身份证号</td>
									<td>关联时间</td>
									<td>证据来源</td>
								</th>
								<tr>
									<td rowspan="2">手机号</td>
									<td rowspan="2">15034543423</td>
									<td>12121212134324234</td>
									<td>2018年6月4日</td>
									<td>用户提交</td>
								</tr>
								<tr>
									<td>12121212134324234</td>
									<td>2018年6月4日</td>
									<td>短信</td>
								</tr>
								<tr>
									<td rowspan="2">qq账号</td>
									<td rowspan="2">15034543423</td>
									<td>12121212134324234</td>
									<td>2018年6月4日</td>
									<td>用户提交</td>
								</tr>
								<tr>
									<td>12121212134324234</td>
									<td>2018年6月4日</td>
									<td>qq通知</td>
								</tr>
								<tr>
									<td rowspan="2">微信UNI</td>
									<td rowspan="2">15034543423</td>
									<td>12121212134324234</td>
									<td>2018年6月4日</td>
									<td>用户提交</td>
								</tr>
								<tr>
									<td>12121212134324234</td>
									<td>2018年6月4日</td>
									<td>微信通知</td>
								</tr>
							</table>
							<p class="title">
								群体关系异常
								<button>近一周</button>
								<button>近一月</button>
								<button>近三个月</button>
								<button>近一年</button>
							</p>
							<el-row>
								<el-col :span="12">
									<div class="chart" ref="chart"></div>
								</el-col>
								<el-col :span="12">
									<table class="col-table">
										<th>
											<td>联系方式</td>
											<td>潜在关联</td>
											<td>异常情况</td>
											<td>首次联通时间</td>
											<td>联通次数</td>
										</th>
										<tr>
											<td>15022343234</td>
											<td>同事</td>
											<td>金融圈</td>
											<td>2018年6月4日</td>
											<td>23</td>
										</tr>
										<tr>
											<td>15022343234</td>
											<td>同事</td>
											<td>金融圈</td>
											<td>2018年6月4日</td>
											<td>23</td>
										</tr>
										<tr>
											<td>15022343234</td>
											<td>同事</td>
											<td>金融圈</td>
											<td>2018年6月4日</td>
											<td>23</td>
										</tr>
										<tr>
											<td>15022343234</td>
											<td>同事</td>
											<td>金融圈</td>
											<td>2018年6月4日</td>
											<td>23</td>
										</tr>
										<tr>
											<td>15022343234</td>
											<td>同事</td>
											<td>金融圈</td>
											<td>2018年6月4日</td>
											<td>23</td>
										</tr>
										<tr>
											<td>15022343234</td>
											<td>同事</td>
											<td>金融圈</td>
											<td>2018年6月4日</td>
											<td>23</td>
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
