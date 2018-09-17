<template>
	<div id="evaluete-info">
		<div id="evaluete-info-header">
			<ul>
			  <li :index="item.index" v-for="item in menu_item">
			  	<a href="javascript:void(0)" @click="goAnchor('#anchor-'+item.index)" target="_blank">
			  		{{item.name}}
			  	</a>
			  	<span v-if="item.index!=6" class="bar">
			  		<span></span>
			  		<span class="center"></span>
			  		<span></span>
			  	</span>
			  </li>
			</ul>
		</div>
		<el-scrollbar style="height: 100%">
			<el-container id="evaluete-info-main">
				<el-main>
					<div id="anchor-1" class="section">
						
					</div>
					<div id="anchor-2" class="section">
						
					</div>
					<!--设备欺诈 -->
					<div id="anchor-3" class="section">
						<p class="title">设备欺诈</p>
						<p>设备评分：<span class="red"><i class="fa fa-waring"></i>有风险</span></p>
						<div class="echart" style="height:500px;width:500px" ref="myEchart1"></div>
						<div class="guan_lian_hao">
							<p><i class="fa fa-waring"></i>有风险</p>
							<ul class="waring-list">
								<li class="list-item">139*******</li>
								<li class="list-item">139*******</li>
								<li class="list-item">139*******</li>
								<li class="list-item">139*******</li>
							</ul>
						</div>
						<div class="guan_lian_hao">
							<p><i class="fa fa-waring"></i>疑似黑中介wifi</p>
							<ul class="waring-list">
								<li class="list-item">网络环境</li>
							</ul>
						</div>
						<div class="wei_zhi_xin_xi">
							<p><i class="fa fa-waring"></i>疑似黑中介地址</p>
							<ul class="waring-list">
								<li class="list-item">位置信息</li>
							</ul>
						</div>
						<div class="IP_yi_chang">
							<p><i class="fa fa-waring"></i>疑似团伙欺诈</p>
							<ul class="waring-list">
								<li class="list-item">ip地址</li>
							</ul>
							<p><i class="fa fa-waring"></i>黑中介风险</p>
							<ul class="waring-list">
								<li class="list-item">ip地址</li>
							</ul>
						</div>
						<div class="xu_ni_hao_ma">
							<table>
								<tr>
									<td class="first color1">
										微博
									</td>
									<td>
										**********
									</td>
								</tr>
								<tr>
									<td class="first color2">
										微信
									</td>
									<td>
										**********
									</td>
								</tr>
							</table>
						</div>
						<div class="xing_hao_xi_tong">
							<table>
								<tr>
									<td class="first color1">
										系统
									</td>
									<td>
										**********
									</td>
								</tr>
								<tr>
									<td class="first color2">
										账号
									</td>
									<td>
										**********
									</td>
								</tr>
							</table>
						</div>
					</div>
					<!--团伙关联 -->
					<div id="anchor-4" class="section">
						<el-row>
							<el-col :span="12">
								<p class="title">通联关系</p>
								<div class="echart" style="width:100%;height:500px" ref="myEchart2"></div>
								<div class="table">
									<p>详情</p>
									<table>
										<tr>
											<td class="first color1">
												系统
											</td>
											<td>
												**********
											</td>
										</tr>
										<tr>
											<td class="first color2">
												账号
											</td>
											<td>
												**********
											</td>
										</tr>
									</table>
								</div>
							</el-col>
							<el-col :span="12">
								<p class="title">虚拟身份</p>
								<div class="echart" style="width:100%;height:500px" ref="myEchart3"></div>
								<div class="table">
									<p>详情</p>
									<table>
										<tr>
											<td class="first color1">
												系统
											</td>
											<td>
												**********
											</td>
										</tr>
										<tr>
											<td class="first color2">
												账号
											</td>
											<td>
												**********
											</td>
										</tr>
									</table>
								</div>
							</el-col>
							<el-col :span="24">
								<p class="title">行为关联风险</p>
								<div class="table">
									<p>详情</p>
									<table>
										<tr>
											<td class="first color1">
												系统
											</td>
											<td>
												**********
											</td>
										</tr>
										<tr>
											<td class="first color2">
												账号
											</td>
											<td>
												**********
											</td>
										</tr>
									</table>
								</div>
							</el-col>
						</el-row>
					</div>
					<!--金融属性 -->
					<div id="anchor-5" class="section">
						<el-row>
							<el-col :span="12">
								<el-col :span="24">
									<p class="title">催收电话</p>
									<table>
										<tr>
											<td class="first color1">138********</td>
											<td>2018年1月3日</td>
											<td>建设银行</td>
										</tr>
										<tr>
											<td class="first color2">138********</td>
											<td>2018年1月3日</td>
											<td>建设银行</td>
										</tr>
									</table>
								</el-col>
								<el-col :span="24">
									<p class="title">催收短信</p>
									<table>
										<tr>
											<td class="first color1">138********</td>
											<td>2018年1月3日</td>
											<td>建设银行</td>
										</tr>
										<tr>
											<td class="first color2">138********</td>
											<td>2018年1月3日</td>
											<td>建设银行</td>
										</tr>
									</table>
								</el-col>
							</el-col>
							<el-col :span="12">
								<p class="title">高危消费行为</p>
								<div class="echart" style="width:100%;height:500px" ref="myEchart4"></div>
							</el-col>
							<el-col :span="12">
								<p class="title">贷款类app注册</p>
								<div class="echart" style="width:100%;height:500px" ref="myEchart5"></div>
							</el-col>
							<el-col :span="12">
								<p class="title">高危消费类型</p>
								<div class="echart" style="width:100%;height:500px" ref="myEchart6"></div>
							</el-col>
						</el-row>
					</div>
					<!--网络行为 -->
					<div id="anchor-6" class="section">
						<el-row>
							<el-col :span="12">
								<p class="title">APP使用</p>
								<div class="echart" style="width:100%;height:500px" ref="myEchart7"></div>
							</el-col>
							<el-col :span="12">
								<p class="title">社交行为</p>
								<div class="echart" style="width:100%;height:500px" ref="myEchart8"></div>
							</el-col>
							<el-col :span="12">
								<p class="title">浏览行为</p>
								<div class="echart" style="width:100%;height:500px" ref="myEchart9"></div>
							</el-col>
							<el-col :span="12">
								<p class="title">搜索行为</p>
								<div class="echart" style="width:100%;height:500px" ref="myEchart10"></div>
							</el-col>
						</el-row>
					</div>
				</el-main>
			</el-container>
		</el-scrollbar>
	</div>
</template>
<style lang="scss" scoped>
@import '~@/assets/style/unit/info.scss';
</style>
<script>
import echarts from 'echarts'
export default {
  data () {
    return {
    	menu_item:[{
    		index:1,
    		name:"身份核验"
    	},{
    		index:2,
    		name:"黑名单"
    	},{
    		index:3,
    		name:"设备欺诈"
    	},{
    		index:4,
    		name:"团伙关联"
    	},{
    		index:5,
    		name:"金融属性"
    	},{
    		index:6,
    		name:"网络行为"
    	}],
    	chart1: null,
    	chart2: null,
    	chart3: null,
    	chart4: null,
    	chart5: null,
    	chart6: null,
    	chart7: null,
    	chart8: null,
    	chart9: null,
    	chart10: null,
    }
  },
  mounted() {
    this.initChart1();
    this.initChart2();
    this.initChart3();
    this.initChart4();
    this.initChart5();
    this.initChart6();
    this.initChart7();
    this.initChart8();
    this.initChart9();
    this.initChart10();
  }, 
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart1.dispose();
    this.chart2.dispose();
    this.chart3.dispose();
    this.chart4.dispose();
    this.chart5.dispose();
    this.chart6.dispose();
    this.chart7.dispose();
    this.chart8.dispose();
    this.chart9.dispose();
    this.chart10.dispose();
    this.chart1 = this.chart2 = this.chart3 = this.chart4 = this.chart5 =null;
    this.chart6 = this.chart7 = this.chart8 = this.chart9 = this.chart10=null;
  },
  methods:{
  	goAnchor(selector) {
        var anchor = this.$el.querySelector(selector)
        document.documentElement.scrollTop = anchor.offsetTop
    },
    initChart1() {
      	this.chart1 = echarts.init(this.$refs.myEchart1);
      	// 把配置和数据放这里
      	this.chart1.setOption({
		    title: {
		        text: '基础雷达图'
		    },
		    tooltip: {},
		    legend: {
		        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
		    },
		    radar: {
		        // shape: 'circle',
		        name: {
		            textStyle: {
		                color: '#fff',
		                backgroundColor: '#999',
		                borderRadius: 3,
		                padding: [3, 5]
		           }
		        },
		        indicator: [
		           { name: '销售（sales）', max: 6500},
		           { name: '管理（Administration）', max: 16000},
		           { name: '信息技术（Information Techology）', max: 30000},
		           { name: '客服（Customer Support）', max: 38000},
		           { name: '研发（Development）', max: 52000},
		           { name: '市场（Marketing）', max: 25000}
		        ]
		    },
		    series: [{
		        name: '预算 vs 开销（Budget vs spending）',
		        type: 'radar',
		        // areaStyle: {normal: {}},
		        data : [
		            {
		                value : [4300, 10000, 28000, 35000, 50000, 19000],
		                name : '预算分配（Allocated Budget）'
		            },
		             {
		                value : [5000, 14000, 28000, 31000, 42000, 21000],
		                name : '实际开销（Actual Spending）'
		            }
		        ]
		    }]
		})
    },
    initChart2() {
      	this.chart2 = echarts.init(this.$refs.myEchart2);
      	// 把配置和数据放这里
      	this.chart2.setOption({
		    title: {
		        text: '基础雷达图'
		    },
		    tooltip: {},
		    legend: {
		        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
		    },
		    radar: {
		        // shape: 'circle',
		        name: {
		            textStyle: {
		                color: '#fff',
		                backgroundColor: '#999',
		                borderRadius: 3,
		                padding: [3, 5]
		           }
		        },
		        indicator: [
		           { name: '销售（sales）', max: 6500},
		           { name: '管理（Administration）', max: 16000},
		           { name: '信息技术（Information Techology）', max: 30000},
		           { name: '客服（Customer Support）', max: 38000},
		           { name: '研发（Development）', max: 52000},
		           { name: '市场（Marketing）', max: 25000}
		        ]
		    },
		    series: [{
		        name: '预算 vs 开销（Budget vs spending）',
		        type: 'radar',
		        // areaStyle: {normal: {}},
		        data : [
		            {
		                value : [4300, 10000, 28000, 35000, 50000, 19000],
		                name : '预算分配（Allocated Budget）'
		            },
		             {
		                value : [5000, 14000, 28000, 31000, 42000, 21000],
		                name : '实际开销（Actual Spending）'
		            }
		        ]
		    }]
		})
    },
    initChart3() {
      	this.chart3 = echarts.init(this.$refs.myEchart3);
      	// 把配置和数据放这里
      	this.chart3.setOption({
		    title: {
		        text: '基础雷达图'
		    },
		    tooltip: {},
		    legend: {
		        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
		    },
		    radar: {
		        // shape: 'circle',
		        name: {
		            textStyle: {
		                color: '#fff',
		                backgroundColor: '#999',
		                borderRadius: 3,
		                padding: [3, 5]
		           }
		        },
		        indicator: [
		           { name: '销售（sales）', max: 6500},
		           { name: '管理（Administration）', max: 16000},
		           { name: '信息技术（Information Techology）', max: 30000},
		           { name: '客服（Customer Support）', max: 38000},
		           { name: '研发（Development）', max: 52000},
		           { name: '市场（Marketing）', max: 25000}
		        ]
		    },
		    series: [{
		        name: '预算 vs 开销（Budget vs spending）',
		        type: 'radar',
		        // areaStyle: {normal: {}},
		        data : [
		            {
		                value : [4300, 10000, 28000, 35000, 50000, 19000],
		                name : '预算分配（Allocated Budget）'
		            },
		             {
		                value : [5000, 14000, 28000, 31000, 42000, 21000],
		                name : '实际开销（Actual Spending）'
		            }
		        ]
		    }]
		})
    },
    initChart4() {
      	this.chart4 = echarts.init(this.$refs.myEchart4);
      	// 把配置和数据放这里
      	this.chart4.setOption({
		    title: {
		        text: '基础雷达图'
		    },
		    tooltip: {},
		    legend: {
		        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
		    },
		    radar: {
		        // shape: 'circle',
		        name: {
		            textStyle: {
		                color: '#fff',
		                backgroundColor: '#999',
		                borderRadius: 3,
		                padding: [3, 5]
		           }
		        },
		        indicator: [
		           { name: '销售（sales）', max: 6500},
		           { name: '管理（Administration）', max: 16000},
		           { name: '信息技术（Information Techology）', max: 30000},
		           { name: '客服（Customer Support）', max: 38000},
		           { name: '研发（Development）', max: 52000},
		           { name: '市场（Marketing）', max: 25000}
		        ]
		    },
		    series: [{
		        name: '预算 vs 开销（Budget vs spending）',
		        type: 'radar',
		        // areaStyle: {normal: {}},
		        data : [
		            {
		                value : [4300, 10000, 28000, 35000, 50000, 19000],
		                name : '预算分配（Allocated Budget）'
		            },
		             {
		                value : [5000, 14000, 28000, 31000, 42000, 21000],
		                name : '实际开销（Actual Spending）'
		            }
		        ]
		    }]
		})
    },
    initChart4() {
      	this.chart4 = echarts.init(this.$refs.myEchart4);
      	// 把配置和数据放这里
      	this.chart4.setOption({
		    title: {
		        text: '基础雷达图'
		    },
		    tooltip: {},
		    legend: {
		        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
		    },
		    radar: {
		        // shape: 'circle',
		        name: {
		            textStyle: {
		                color: '#fff',
		                backgroundColor: '#999',
		                borderRadius: 3,
		                padding: [3, 5]
		           }
		        },
		        indicator: [
		           { name: '销售（sales）', max: 6500},
		           { name: '管理（Administration）', max: 16000},
		           { name: '信息技术（Information Techology）', max: 30000},
		           { name: '客服（Customer Support）', max: 38000},
		           { name: '研发（Development）', max: 52000},
		           { name: '市场（Marketing）', max: 25000}
		        ]
		    },
		    series: [{
		        name: '预算 vs 开销（Budget vs spending）',
		        type: 'radar',
		        // areaStyle: {normal: {}},
		        data : [
		            {
		                value : [4300, 10000, 28000, 35000, 50000, 19000],
		                name : '预算分配（Allocated Budget）'
		            },
		             {
		                value : [5000, 14000, 28000, 31000, 42000, 21000],
		                name : '实际开销（Actual Spending）'
		            }
		        ]
		    }]
		})
    },
	initChart5() {
      	this.chart5 = echarts.init(this.$refs.myEchart5);
      	// 把配置和数据放这里
      	this.chart5.setOption({
		    title: {
		        text: '基础雷达图'
		    },
		    tooltip: {},
		    legend: {
		        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
		    },
		    radar: {
		        // shape: 'circle',
		        name: {
		            textStyle: {
		                color: '#fff',
		                backgroundColor: '#999',
		                borderRadius: 3,
		                padding: [3, 5]
		           }
		        },
		        indicator: [
		           { name: '销售（sales）', max: 6500},
		           { name: '管理（Administration）', max: 16000},
		           { name: '信息技术（Information Techology）', max: 30000},
		           { name: '客服（Customer Support）', max: 38000},
		           { name: '研发（Development）', max: 52000},
		           { name: '市场（Marketing）', max: 25000}
		        ]
		    },
		    series: [{
		        name: '预算 vs 开销（Budget vs spending）',
		        type: 'radar',
		        // areaStyle: {normal: {}},
		        data : [
		            {
		                value : [4300, 10000, 28000, 35000, 50000, 19000],
		                name : '预算分配（Allocated Budget）'
		            },
		             {
		                value : [5000, 14000, 28000, 31000, 42000, 21000],
		                name : '实际开销（Actual Spending）'
		            }
		        ]
		    }]
		})
    },
    initChart6() {
      	this.chart6 = echarts.init(this.$refs.myEchart6);
      	// 把配置和数据放这里
      	this.chart6.setOption({
		    title: {
		        text: '基础雷达图'
		    },
		    tooltip: {},
		    legend: {
		        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
		    },
		    radar: {
		        // shape: 'circle',
		        name: {
		            textStyle: {
		                color: '#fff',
		                backgroundColor: '#999',
		                borderRadius: 3,
		                padding: [3, 5]
		           }
		        },
		        indicator: [
		           { name: '销售（sales）', max: 6500},
		           { name: '管理（Administration）', max: 16000},
		           { name: '信息技术（Information Techology）', max: 30000},
		           { name: '客服（Customer Support）', max: 38000},
		           { name: '研发（Development）', max: 52000},
		           { name: '市场（Marketing）', max: 25000}
		        ]
		    },
		    series: [{
		        name: '预算 vs 开销（Budget vs spending）',
		        type: 'radar',
		        // areaStyle: {normal: {}},
		        data : [
		            {
		                value : [4300, 10000, 28000, 35000, 50000, 19000],
		                name : '预算分配（Allocated Budget）'
		            },
		             {
		                value : [5000, 14000, 28000, 31000, 42000, 21000],
		                name : '实际开销（Actual Spending）'
		            }
		        ]
		    }]
		})
    },
    initChart7() {
      	this.chart7 = echarts.init(this.$refs.myEchart7);
      	// 把配置和数据放这里
      	this.chart7.setOption({
		    title: {
		        text: '基础雷达图'
		    },
		    tooltip: {},
		    legend: {
		        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
		    },
		    radar: {
		        // shape: 'circle',
		        name: {
		            textStyle: {
		                color: '#fff',
		                backgroundColor: '#999',
		                borderRadius: 3,
		                padding: [3, 5]
		           }
		        },
		        indicator: [
		           { name: '销售（sales）', max: 6500},
		           { name: '管理（Administration）', max: 16000},
		           { name: '信息技术（Information Techology）', max: 30000},
		           { name: '客服（Customer Support）', max: 38000},
		           { name: '研发（Development）', max: 52000},
		           { name: '市场（Marketing）', max: 25000}
		        ]
		    },
		    series: [{
		        name: '预算 vs 开销（Budget vs spending）',
		        type: 'radar',
		        // areaStyle: {normal: {}},
		        data : [
		            {
		                value : [4300, 10000, 28000, 35000, 50000, 19000],
		                name : '预算分配（Allocated Budget）'
		            },
		             {
		                value : [5000, 14000, 28000, 31000, 42000, 21000],
		                name : '实际开销（Actual Spending）'
		            }
		        ]
		    }]
		})
    },
    initChart8() {
      	this.chart8 = echarts.init(this.$refs.myEchart8);
      	// 把配置和数据放这里
      	this.chart8.setOption({
		    title: {
		        text: '基础雷达图'
		    },
		    tooltip: {},
		    legend: {
		        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
		    },
		    radar: {
		        // shape: 'circle',
		        name: {
		            textStyle: {
		                color: '#fff',
		                backgroundColor: '#999',
		                borderRadius: 3,
		                padding: [3, 5]
		           }
		        },
		        indicator: [
		           { name: '销售（sales）', max: 6500},
		           { name: '管理（Administration）', max: 16000},
		           { name: '信息技术（Information Techology）', max: 30000},
		           { name: '客服（Customer Support）', max: 38000},
		           { name: '研发（Development）', max: 52000},
		           { name: '市场（Marketing）', max: 25000}
		        ]
		    },
		    series: [{
		        name: '预算 vs 开销（Budget vs spending）',
		        type: 'radar',
		        // areaStyle: {normal: {}},
		        data : [
		            {
		                value : [4300, 10000, 28000, 35000, 50000, 19000],
		                name : '预算分配（Allocated Budget）'
		            },
		             {
		                value : [5000, 14000, 28000, 31000, 42000, 21000],
		                name : '实际开销（Actual Spending）'
		            }
		        ]
		    }]
		})
    },
    initChart9() {
      	this.chart9 = echarts.init(this.$refs.myEchart9);
      	// 把配置和数据放这里
      	this.chart9.setOption({
		    title: {
		        text: '基础雷达图'
		    },
		    tooltip: {},
		    legend: {
		        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
		    },
		    radar: {
		        // shape: 'circle',
		        name: {
		            textStyle: {
		                color: '#fff',
		                backgroundColor: '#999',
		                borderRadius: 3,
		                padding: [3, 5]
		           }
		        },
		        indicator: [
		           { name: '销售（sales）', max: 6500},
		           { name: '管理（Administration）', max: 16000},
		           { name: '信息技术（Information Techology）', max: 30000},
		           { name: '客服（Customer Support）', max: 38000},
		           { name: '研发（Development）', max: 52000},
		           { name: '市场（Marketing）', max: 25000}
		        ]
		    },
		    series: [{
		        name: '预算 vs 开销（Budget vs spending）',
		        type: 'radar',
		        // areaStyle: {normal: {}},
		        data : [
		            {
		                value : [4300, 10000, 28000, 35000, 50000, 19000],
		                name : '预算分配（Allocated Budget）'
		            },
		             {
		                value : [5000, 14000, 28000, 31000, 42000, 21000],
		                name : '实际开销（Actual Spending）'
		            }
		        ]
		    }]
		})
    },
    initChart10() {
      	this.chart10 = echarts.init(this.$refs.myEchart10);
      	// 把配置和数据放这里
      	this.chart10.setOption({
		    title: {
		        text: '基础雷达图'
		    },
		    tooltip: {},
		    legend: {
		        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
		    },
		    radar: {
		        // shape: 'circle',
		        name: {
		            textStyle: {
		                color: '#fff',
		                backgroundColor: '#999',
		                borderRadius: 3,
		                padding: [3, 5]
		           }
		        },
		        indicator: [
		           { name: '销售（sales）', max: 6500},
		           { name: '管理（Administration）', max: 16000},
		           { name: '信息技术（Information Techology）', max: 30000},
		           { name: '客服（Customer Support）', max: 38000},
		           { name: '研发（Development）', max: 52000},
		           { name: '市场（Marketing）', max: 25000}
		        ]
		    },
		    series: [{
		        name: '预算 vs 开销（Budget vs spending）',
		        type: 'radar',
		        // areaStyle: {normal: {}},
		        data : [
		            {
		                value : [4300, 10000, 28000, 35000, 50000, 19000],
		                name : '预算分配（Allocated Budget）'
		            },
		             {
		                value : [5000, 14000, 28000, 31000, 42000, 21000],
		                name : '实际开销（Actual Spending）'
		            }
		        ]
		    }]
		})
    },
  }
 }
</script>