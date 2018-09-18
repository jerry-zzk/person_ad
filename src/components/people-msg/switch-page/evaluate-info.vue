<template>
	<div id="evaluete-info">
		<div id="evaluete-info-header">
			<ul>
			  <li :index="item.index" v-for="item in menu_item">
			  	<a :class="{'active':item.select}"  href="javascript:void(0)" @click="goAnchor(item)" target="_blank">
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
		<div id="evaluete-info-main">
			<el-scrollbar style="height: 100%">
				<div id="evaluete-info-main-inner">
					<div id="anchor-1" class="section">
						<div class="detail-body">
				      <el-row :gutter="40">
				        <el-col :span="16">
				        	<p class="title" style="margin:0 0 10px -20px;">身份欺诈</p>
				          <el-row class="detail-thead" :gutter="2">
				            <el-col :span="8"><div class="detail-thead-th detail-thead-th-left">实名核实</div></el-col>
				            <el-col :span="8"><div class="detail-thead-th">有无嫌疑</div></el-col>
				            <el-col :span="8"><div class="detail-thead-th detail-thead-th-right">细则</div></el-col>
				          </el-row>
				          <el-row class="detail-tr color-1">
				            <el-col :span="8">户籍信息</el-col>
				            <el-col :span="8">有</el-col>
				            <el-col :span="8">与活动区域不符</el-col>
				          </el-row>
				          <el-row class="detail-tr color-2">
				            <el-col :span="8">工作信息</el-col>
				            <el-col :span="8">有</el-col>
				            <el-col :span="8">与活动区域不符</el-col>
				          </el-row>
				          <el-row class="detail-tr color-3">
				            <el-col :span="8">地址信息</el-col>
				            <el-col :span="8">有</el-col>
				            <el-col :span="8">与活动区域不符</el-col>
				          </el-row>
				          <el-row class="detail-tr color-4">
				            <el-col :span="8">家庭成员信息</el-col>
				            <el-col :span="8">无</el-col>
				            <el-col :span="8">与活动区域不符</el-col>
				          </el-row>
				          <el-row class="detail-tr color-5">
				            <el-col :span="8">虚拟身份</el-col>
				            <el-col :span="8">无</el-col>
				            <el-col :span="8">与活动区域不符</el-col>
				          </el-row>
				        </el-col>
				        <el-col :span="8">
				        	<p class="title" style="margin:0 0 10px -20px;">常活动区域</p>
				          <div id="detail_heatMap"></div>
				        </el-col>
				      </el-row>
			      </div>
						<p class="title" style="margin-bottom:10px;">主要通联TOP5</p>
		    		<div class="detail-body">
				      <el-row class="detail-tr color-6">
				        <el-col :span="3">1.</el-col>
				        <el-col :span="6">姓名</el-col>
				        <el-col :span="6">185********</el-col>
				        <el-col :span="3">30次/月</el-col>
				        <el-col :span="6">无可疑</el-col>
				      </el-row>
				      <el-row class="detail-tr color-7">
				        <el-col :span="3">2.</el-col>
				        <el-col :span="6">姓名</el-col>
				        <el-col :span="6">185********</el-col>
				        <el-col :span="3">30次/月</el-col>
				        <el-col :span="6">无可疑</el-col>
				      </el-row>
				      <el-row class="detail-tr color-8">
				        <el-col :span="3">3.</el-col>
				        <el-col :span="6">姓名</el-col>
				        <el-col :span="6">185********</el-col>
				        <el-col :span="3">30次/月</el-col>
				        <el-col :span="6">无可疑</el-col>
				      </el-row>
				      <el-row class="detail-tr color-9">
				        <el-col :span="3">4.</el-col>
				        <el-col :span="6">姓名</el-col>
				        <el-col :span="6">185********</el-col>
				        <el-col :span="3">30次/月</el-col>
				        <el-col :span="6">无可疑</el-col>
				      </el-row>
				      <el-row class="detail-tr color-10">
				        <el-col :span="3">5.</el-col>
				        <el-col :span="6">姓名</el-col>
				        <el-col :span="6">185********</el-col>
				        <el-col :span="3">30次/月</el-col>
				        <el-col :span="6">无可疑</el-col>
				      </el-row>
				    </div>
					</div>
					<div id="anchor-2" class="section">
						<p class="title" style="margin-bottom: 10px;">黑名单</p>
					    <div class="detail-body">
					      <div class="detail-thead2">实名黑名单</div>
					      <el-row class="detail-tr2">
					        <el-col :span="8">110105********</el-col>
					        <el-col :span="8">法院被执行人（北京）</el-col>
					        <el-col :span="8">2016年12月13日</el-col>
					      </el-row>
					      <el-row class="detail-tr2">
					        <el-col :span="8">110105********</el-col>
					        <el-col :span="8">吸毒人员（北京朝阳区）</el-col>
					        <el-col :span="8">2016年12月13日</el-col>
					      </el-row>
					      <div style="margin-top:60px;" class="detail-thead2">手机号黑名单</div>
					      <el-row class="detail-tr2">
					        <el-col :span="8">1390105****</el-col>
					        <el-col :span="8">欠款人员名单（互金协会）</el-col>
					        <el-col :span="8">2016年12月13日</el-col>
					      </el-row>
					    </div>
					</div>
					<!--设备欺诈 -->
					<div id="anchor-3" class="section">
						<p class="title">设备欺诈</p>
						<p class="main-title">设备评分：<span class="red"><i class="fa fa-warning"></i> 有风险</span></p>
						<div class="echarts" ref="myEchart1"></div>
						<div class="container guan_lian_hao">
							<p><i class="fa fa-warning"></i>有风险</p>
							<ul class="waring-list">
								<li class="list-item">139*******</li>
								<li class="list-item">139*******</li>
								<li class="list-item">139*******</li>
								<li class="list-item">139*******</li>
							</ul>
						</div>
						<div class="container wang_luo_huan_jing">
							<p><i class="fa fa-warning"></i>疑似黑中介wifi</p>
							<ul class="waring-list">
								<li class="list-item">网络环境</li>
							</ul>
						</div>
						<div class="container wei_zhi_xin_xi">
							<p><i class="fa fa-warning"></i>疑似黑中介地址</p>
							<ul class="waring-list">
								<li class="list-item">位置信息</li>
							</ul>
						</div>
						<div class="container IP_yi_chang">
							<p><i class="fa fa-warning"></i>疑似团伙欺诈</p>
							<ul class="waring-list">
								<li class="list-item">ip地址</li>
							</ul>
							<p><i class="fa fa-warning"></i>黑中介风险</p>
							<ul class="waring-list">
								<li class="list-item">ip地址</li>
							</ul>
						</div>
						<div class="container xu_ni_hao_ma">
							<table>
								<tr>
									<td class="first color1">微博</td>
									<td>**********</td>
								</tr>
								<tr>
									<td class="first color2">微信</td>
									<td>**********</td>
								</tr>
							</table>
						</div>
						<div class="container xing_hao_xi_tong">
							<table>
								<tr>
									<td class="first color1">系统</td>
									<td>**********</td>
								</tr>
								<tr>
									<td class="first color2">账号</td>
									<td>**********</td>
								</tr>
							</table>
						</div>
					</div>
					<!--团伙关联 -->
					<div id="anchor-4" class="section">
						<el-row>
							<el-col :span="12">
								<p class="title">通联关系</p>
								<div class="echart" ref="myEchart2"></div>
								<div class="table">
									<p>详情</p>
									<table>
										<tr>
											<td class="first color1">张三</td>
											<td>黑名单</td>
											<td>日期</td>
										</tr>
										<tr>
											<td class="first color2">李四</td>
											<td>黑名单</td>
											<td>日期</td>
										</tr>
									</table>
								</div>
							</el-col>
							<el-col :span="12">
								<p class="title">虚拟身份</p>
								<div class="echart" ref="myEchart3"></div>
								<div class="table">
									<p>详情</p>
									<table>
										<tr>
											<td class="first color1">张三/td>
											<td>黑名单</td>
											<td>日期</td>
											<td>微博转发</td>
										</tr>
										<tr>
											<td class="first color2">李四</td>
											<td>黑名单</td>
											<td>日期</td>
											<td>微博转发</td>
										</tr>
									</table>
								</div>
							</el-col>
							<el-col :span="24">
								<p class="title">行为关联风险</p>
								<div class="table">
									<table>
										<tr>
											<td class="first color1">多个设备同时申请</td>
											<td>时间</td>
											<td>设备</td>
										</tr>
										<tr>
											<td class="first color2">多个设备同IP申请</td>
											<td>IP</td>
											<td>设备</td>
										</tr>
										<tr>
											<td class="first color3">多个设备同位置P申请</td>
											<td>位置</td>
											<td>设备</td>
										</tr>
										<tr>
											<td class="first color4">多个身份同设备申请</td>
											<td>设备</td>
											<td>身份</td>
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
								<div class="echart"  ref="myEchart4"></div>
							</el-col>
							<el-col :span="12">
								<p class="title">贷款类app注册</p>
								<div class="echart"  ref="myEchart5"></div>
							</el-col>
							<el-col :span="12">
								<p class="title">高危消费类型</p>
								<div class="echart"  ref="myEchart6"></div>
							</el-col>
						</el-row>
					</div>
					<!--网络行为 -->
					<div id="anchor-6" class="section">
						<el-row>
							<el-col :span="12">
								<p class="title">APP使用</p>
								<div class="echart"  ref="myEchart7"></div>
							</el-col>
							<el-col :span="12">
								<p class="title">社交行为</p>
								<div class="echart"  ref="myEchart8"></div>
							</el-col>
							<el-col :span="12">
								<p class="title">浏览行为</p>
								<div class="echart"  ref="myEchart9"></div>
							</el-col>
							<el-col :span="12">
								<p class="title">搜索行为</p>
								<div class="echart"  ref="myEchart10"></div>
							</el-col>
						</el-row>
					</div>
				</div>
			</el-scrollbar>
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import '~@/assets/style/unit/info.scss';
</style>
<script>
import echarts from 'echarts'
import 'echarts/map/js/china.js';
export default {
  data () {
    return {
    	menu_item:[{
    		index:1,
    		name:"身份核验",
    		select:true
    	},{
    		index:2,
    		name:"黑名单",
    		select:false
    	},{
    		index:3,
    		name:"设备欺诈",
    		select:false
    	},{
    		index:4,
    		name:"团伙关联",
    		select:false
    	},{
    		index:5,
    		name:"金融属性",
    		select:false
    	},{
    		index:6,
    		name:"网络行为",
    		select:false
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
    	heatMapData: [
        {name: '北京', value: 5.3},
        {name: '天津', value: 3.8},
        {name: '上海', value: 4.6},
        {name: '重庆', value: 3.6},
        {name: '河北', value: 3.4 },
        {name: '河南', value: 3.2 },
        {name: '云南', value: 1.6 },
        {name: '辽宁', value: 4.3 },
        {name: '黑龙江', value: 4.1 },
        {name: '湖南', value: 2.4 },
        {name: '安徽', value: 3.3 },
        {name: '山东', value: 3.0 },
        {name: '新疆', value: 1 },
        {name: '江苏', value: 3.9 },
        {name: '浙江', value: 3.5 },
        {name: '江西', value: 2.0 },
        {name: '湖北', value: 2.1 },
        {name: '广西', value: 3.0 },
        {name: '甘肃', value: 1.2},
        {name: '山西', value: 3.2},
        {name: '内蒙古', value: 3.5},
        {name: '陕西', value: 2.5},
        {name: '吉林', value: 4.5},
        {name: '福建', value: 2.8},
        {name: '贵州', value: 1.8},
        {name: '广东', value: 3.7},
        {name: '青海', value: 0.6},
        {name: '西藏', value: 0.4},
        {name: '四川', value: 3.3},
        {name: '宁夏', value: 0.8},
        {name: '海南', value: 1.9},
        {name: '台湾', value: 0.1},
        {name: '香港', value: 0.1},
        {name: '澳门', value: 0.1}
      ]
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
    this.drawHeatMap();
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
  	goAnchor(item) {
  		this.menu_item.forEach((item, index) => {
  			item.select = false;
		});
  		item.select = true;
        var anchor = this.$el.querySelector('#anchor-'+item.index);
       
        document.querySelector(".el-scrollbar__view").scrollTop = anchor.offsetTop
    },
    initChart1() {
      	this.chart1 = echarts.init(this.$refs.myEchart1);
      	// 把配置和数据放这里
      	this.chart1.setOption({
		    title: {
		        text: ''
		    },
		    tooltip: {},
		    legend: {
		        show:false
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
    // 热力图
    drawHeatMap(){
      let _this = this;
      let option = {
        visualMap: {
          type: 'continuous',
          show: false,
          showLabel: false,
          min: 0,
          max: 7,
          inRange: {
              color: ['#edfbfb', '#b7d6f3', '#40a9ed', '#3598c1', '#215096', ]
          }
        },
        series: [{
          name: '常驻人口分布',
          type: 'map',
          mapType: 'china',
          roam: false,
          itemStyle: {
            normal: {
              borderColor:'rgba(100,149,237,1)',
              borderWidth:1
            }
          },
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: true
            }
          },
          data: _this.heatMapData
        }]
      }
      const heatMap_chart=echarts.init(document.getElementById('detail_heatMap'))
      heatMap_chart.setOption(option)
    }
  }
 }
</script>