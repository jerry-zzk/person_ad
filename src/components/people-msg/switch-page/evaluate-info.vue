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
											<td class="first color1">张三</td>
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
    this.drawHeatMap()
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
       
        document.querySelector("#evaluete-info-main").querySelector(".el-scrollbar__wrap").scrollTop = anchor.offsetTop
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
		         text: ''
		     },
		     tooltip: {
		         formatter: function(x) {
		             return x.data.des;
		         }
		     },
		     animationDuration: 1500,
		     animationEasingUpdate: 'quinticInOut',
		     series: [{
		        
		         type: 'graph',
		         layout: 'force',
		         symbolSize: 58,
		         roam: true,
		         edgeSymbol: ['circle', 'arrow'],
		         // edgeSymbolSize: [80, 10],
		         edgeLabel: {
		             normal: {
		                 textStyle: {
		                     fontSize: 20
		                 }
		             }
		         },
		         focusNodeAdjacency: true,
		         force: {
		             repulsion: 2500,
		             edgeLength: [10, 50]
		         },
		         draggable: true,
		         itemStyle: {
		             normal: {
		                 color: '#4b565b'
		             }
		         },
		         lineStyle: {
		             color: 'source',
		             curveness: 0.3,
		             
		         },
		         edgeLabel: {
		             normal: {
		                 show: true,
		                 formatter: function(x) {
		                     return x.data.name;
		                 }
		             }
		         },
		         label: {
		             normal: {
		                 show: true,
		                 textStyle: {}
		             }
		         },
		         data: [{
		             name: '侯亮平',
		             des: '最高检反贪局侦查处处长，汉东省人民检察院副检察长兼反贪局局长。<br/>经过与腐败违法分子的斗争，最终将一批腐败分子送上了审判台，<br/>正义战胜邪恶，自己也迎来了成长。',
		             symbolSize: 100,
		             itemStyle: {
		                 normal: {
		                     color: 'red'
		                 }
		             }
		         }, {
		             name: '李达康',
		             des: '汉东省省委常委，京州市市委书记。是一个正义无私的好官。<br/>但为人过于爱惜自己的羽毛，对待身边的亲人和朋友显得有些无情。',
		             itemStyle: {
		                 normal: {
		                     color: 'red'
		                 }
		             }
		         }, {
		             name: '祁同伟',
		             des: '汉东省公安厅厅长',
		             symbolSize: 100
		         }, {
		             name: '陈岩石',
		             des: '离休干部、汉东省检察院前常务副检察长。充满正义，平凡而普通的共 产 党人。<br/>对大老虎赵立春，以各种形式执着举报了十二年。<br/>在这场关系党和国家生死存亡的斗争中，老人家以耄耋高龄，<br/>义无反顾地背起了炸 药包，在反腐胜利前夕因病去世。',
		             itemStyle: {
		                 normal: {
		                     color: 'green'
		                 }
		             }
		         }, {
		             name: '陆亦可',
		             des: '汉东省检察院反贪局一处处长',
		             itemStyle: {
		                 normal: {
		                     color: 'green'
		                 }
		             }
		         }, {
		             name: '高育良',
		             des: '汉东省省委副书记兼政法委书记。年近六十，是一个擅长太极功夫的官场老手。侯亮平、陈海和祁同伟是其学生。',
		             symbolSize: 100
		         }, {
		             name: '沙瑞金',
		             des: '汉东省省委书记',
		             itemStyle: {
		                 normal: {
		                     color: 'red'
		                 }
		             }
		         }, {
		             name: '高小琴',
		             des: '山水集团董事长，是一位叱咤于政界和商界的风云人物，处事圆滑、精明干练。'
		         }, {
		             name: '高小凤'
		         }, {
		             name: '赵东来',
		             des: '汉东省京州市公安局局长，充满正义，整治恶势力，<br/>在与检察部门的合作中从最初的质疑到之后的通力配合。',
		             itemStyle: {
		                 normal: {
		                     color: 'green'
		                 }
		             }
		         }, {
		             name: '程度',
		             des: '汉东省京州市公安局光明区分局局长，因犯错误，被李达康书记和赵东来局长点名要清除公安队伍。<br/>但在高小琴的帮助下，祁同伟调他当上了省公安厅办公室副主任。<br/>尽管程度逃避了所有罪责，上面也有人保他，<br/>但最终还是在反贪局局长侯亮平的缜密侦查下被绳之于法。',
		         }, {
		             name: '吴惠芬',
		             des: '汉东省省委副书记高育良的妻子，汉东大学明史教授。',
		             itemStyle: {
		                 normal: {
		                     color: 'red'
		                 }
		             }
		         }, {
		             name: '赵瑞龙',
		             des: '副国级人物赵立春的公子哥，官二代，打着老子的旗子，<br/>黑白两道通吃，可谓呼风唤雨，权倾一时。',
		         }, {
		             name: '赵立春',
		             des: '副国级领导人，曾经的改革闯将，在权利面前，显得极其渺小。',
		         }, {
		             name: '陈海',
		             itemStyle: {
		                 normal: {
		                     color: 'red'
		                 }
		             }
		         }, {
		             name: '梁璐',
		             itemStyle: {
		                 normal: {
		                     color: 'red'
		                 }
		             }
		         }, {
		             name: '刘新建'
		         }, {
		             name: '欧阳菁'
		         }, {
		             name: '吴心怡',
		             itemStyle: {
		                 normal: {
		                     color: 'green'
		                 }
		             }
		         }, {
		             name: '蔡成功'
		         }, {
		             name: '丁义珍'
		         }],
		         links: [{
		             source: '高育良',
		             target: '侯亮平',
		             name: '师生',
		             des: '侯亮平是高育良的得意门生'
		         }, {
		             source: '高育良',
		             target: '祁同伟',
		             name: '师生'
		         }, {
		             source: '赵立春',
		             target: '高育良',
		             name: "前领导"
		         }, {
		             source: '赵立春',
		             target: '赵瑞龙',
		             name: "父子"
		         }, {
		             source: '赵立春',
		             target: '刘新建',
		             name: "前部队下属"
		         }, {
		             source: '李达康',
		             target: '赵立春',
		             name: "前任秘书"
		         }, {
		             source: '祁同伟',
		             target: '高小琴',
		             name: "情人"
		         }, {
		             source: '陈岩石',
		             target: '陈海',
		             name: "父子"
		         }, {
		             source: '陆亦可',
		             target: '陈海',
		             name: "属下"
		         }, {
		             source: '沙瑞金',
		             target: '陈岩石',
		             name: "故人"
		         }, {
		             source: '祁同伟',
		             target: '陈海',
		             name: "师哥"
		         }, {
		             source: '祁同伟',
		             target: '侯亮平',
		             name: "师哥"
		         }, {
		             source: '侯亮平',
		             target: '陈海',
		             name: "同学，生死朋友"
		         }, {
		             source: '高育良',
		             target: '吴惠芬',
		             name: "夫妻"
		         }, {
		             source: '陈海',
		             target: '赵东来',
		             name: "朋友"
		         }, {
		             source: '高小琴',
		             target: '高小凤',
		             name: "双胞胎",
		             symbolSize: '1'
		         }, {
		             source: '赵东来',
		             target: '陆亦可',
		             name: "爱慕"
		         }, {
		             source: '祁同伟',
		             target: '程度',
		             name: "领导"
		         }, {
		             source: '高育良',
		             target: '高小凤',
		             name: "情人"
		         }, {
		             source: '赵瑞龙',
		             target: '祁同伟',
		             name: "勾结",
		             symbolSize: '1',
		         }, {
		             source: '李达康',
		             target: '赵东来',
		             name: "领导"
		         }, {
		             source: '赵瑞龙',
		             target: '程度',
		             name: "领导"
		         }, {
		             source: '沙瑞金',
		             target: '李达康',
		             name: "领导"
		         }, {
		             source: '沙瑞金',
		             target: '高育良',
		             name: "领导"
		         }, {
		             source: '祁同伟',
		             target: '梁璐',
		             name: "夫妻"
		         }, {
		             source: '吴惠芬',
		             target: '梁璐',
		             name: "朋友"
		         }, {
		             source: '李达康',
		             target: '欧阳菁',
		             name: "夫妻"
		         }, {
		             source: '赵瑞龙',
		             target: '刘新建',
		             name: "洗钱工具"
		         }, {
		             source: '赵瑞龙',
		             target: '高小琴',
		             name: "勾结，腐化",
		             symbolSize: '1'
		         }, {
		             source: '赵瑞龙',
		             target: '高小凤',
		             name: "腐化"
		         }, {
		             source: '吴心怡',
		             target: '陆亦可',
		             name: "母女"
		         }, {
		             source: '吴心怡',
		             target: '吴惠芬',
		             name: "姐妹"
		         }, {
		             source: '蔡成功',
		             target: '侯亮平',
		             name: "发小"
		         }, {
		             source: '蔡成功',
		             target: '欧阳菁',
		             name: "举报",
		             lineStyle: {
		                 normal: {
		                     type: 'dotted',
		                     color: '#000'
		                 }
		             }
		         }, {
		             source: '欧阳菁',
		             target: '刘新建',
		             name: "举报",
		             lineStyle: {
		                 normal: {
		                     type: 'dotted',
		                     color: '#000'
		                 }
		             }
		         }, {
		             source: '刘新建',
		             target: '赵瑞龙',
		             name: "举报",
		             lineStyle: {
		                 normal: {
		                     type: 'dotted',
		                     color: '#000'
		                 }
		             }
		         }, {
		             source: '李达康',
		             target: '丁义珍',
		             name: "领导"
		         }, {
		             source: '高小琴',
		             target: '丁义珍',
		             name: "策划出逃"
		         }, {
		             source: '祁同伟',
		             target: '丁义珍',
		             name: "勾结"
		         }, {
		             source: '赵瑞龙',
		             target: '丁义珍',
		             name: "勾结"
		         }]
		     }]
		 })
    },
    initChart3() {
      	this.chart3 = echarts.init(this.$refs.myEchart3);
      	// 把配置和数据放这里
      	this.chart3.setOption({
		     title: {
		         text: ''
		     },
		     tooltip: {
		         formatter: function(x) {
		             return x.data.des;
		         }
		     },
		     animationDuration: 1500,
		     animationEasingUpdate: 'quinticInOut',
		     series: [{
		        
		         type: 'graph',
		         layout: 'force',
		         symbolSize: 58,
		         roam: true,
		         edgeSymbol: ['circle', 'arrow'],
		         // edgeSymbolSize: [80, 10],
		         edgeLabel: {
		             normal: {
		                 textStyle: {
		                     fontSize: 20
		                 }
		             }
		         },
		         focusNodeAdjacency: true,
		         force: {
		             repulsion: 2500,
		             edgeLength: [10, 50]
		         },
		         draggable: true,
		         itemStyle: {
		             normal: {
		                 color: '#4b565b'
		             }
		         },
		         lineStyle: {
		             color: 'source',
		             curveness: 0.3,
		             
		         },
		         edgeLabel: {
		             normal: {
		                 show: true,
		                 formatter: function(x) {
		                     return x.data.name;
		                 }
		             }
		         },
		         label: {
		             normal: {
		                 show: true,
		                 textStyle: {}
		             }
		         },
		         data: [{
		             name: '侯亮平',
		             des: '最高检反贪局侦查处处长，汉东省人民检察院副检察长兼反贪局局长。<br/>经过与腐败违法分子的斗争，最终将一批腐败分子送上了审判台，<br/>正义战胜邪恶，自己也迎来了成长。',
		             symbolSize: 100,
		             itemStyle: {
		                 normal: {
		                     color: 'red'
		                 }
		             }
		         }, {
		             name: '李达康',
		             des: '汉东省省委常委，京州市市委书记。是一个正义无私的好官。<br/>但为人过于爱惜自己的羽毛，对待身边的亲人和朋友显得有些无情。',
		             itemStyle: {
		                 normal: {
		                     color: 'red'
		                 }
		             }
		         }, {
		             name: '祁同伟',
		             des: '汉东省公安厅厅长',
		             symbolSize: 100
		         }, {
		             name: '陈岩石',
		             des: '离休干部、汉东省检察院前常务副检察长。充满正义，平凡而普通的共 产 党人。<br/>对大老虎赵立春，以各种形式执着举报了十二年。<br/>在这场关系党和国家生死存亡的斗争中，老人家以耄耋高龄，<br/>义无反顾地背起了炸 药包，在反腐胜利前夕因病去世。',
		             itemStyle: {
		                 normal: {
		                     color: 'green'
		                 }
		             }
		         }, {
		             name: '陆亦可',
		             des: '汉东省检察院反贪局一处处长',
		             itemStyle: {
		                 normal: {
		                     color: 'green'
		                 }
		             }
		         }, {
		             name: '高育良',
		             des: '汉东省省委副书记兼政法委书记。年近六十，是一个擅长太极功夫的官场老手。侯亮平、陈海和祁同伟是其学生。',
		             symbolSize: 100
		         }, {
		             name: '沙瑞金',
		             des: '汉东省省委书记',
		             itemStyle: {
		                 normal: {
		                     color: 'red'
		                 }
		             }
		         }, {
		             name: '高小琴',
		             des: '山水集团董事长，是一位叱咤于政界和商界的风云人物，处事圆滑、精明干练。'
		         }, {
		             name: '高小凤'
		         }, {
		             name: '赵东来',
		             des: '汉东省京州市公安局局长，充满正义，整治恶势力，<br/>在与检察部门的合作中从最初的质疑到之后的通力配合。',
		             itemStyle: {
		                 normal: {
		                     color: 'green'
		                 }
		             }
		         }, {
		             name: '程度',
		             des: '汉东省京州市公安局光明区分局局长，因犯错误，被李达康书记和赵东来局长点名要清除公安队伍。<br/>但在高小琴的帮助下，祁同伟调他当上了省公安厅办公室副主任。<br/>尽管程度逃避了所有罪责，上面也有人保他，<br/>但最终还是在反贪局局长侯亮平的缜密侦查下被绳之于法。',
		         }, {
		             name: '吴惠芬',
		             des: '汉东省省委副书记高育良的妻子，汉东大学明史教授。',
		             itemStyle: {
		                 normal: {
		                     color: 'red'
		                 }
		             }
		         }, {
		             name: '赵瑞龙',
		             des: '副国级人物赵立春的公子哥，官二代，打着老子的旗子，<br/>黑白两道通吃，可谓呼风唤雨，权倾一时。',
		         }, {
		             name: '赵立春',
		             des: '副国级领导人，曾经的改革闯将，在权利面前，显得极其渺小。',
		         }, {
		             name: '陈海',
		             itemStyle: {
		                 normal: {
		                     color: 'red'
		                 }
		             }
		         }, {
		             name: '梁璐',
		             itemStyle: {
		                 normal: {
		                     color: 'red'
		                 }
		             }
		         }, {
		             name: '刘新建'
		         }, {
		             name: '欧阳菁'
		         }, {
		             name: '吴心怡',
		             itemStyle: {
		                 normal: {
		                     color: 'green'
		                 }
		             }
		         }, {
		             name: '蔡成功'
		         }, {
		             name: '丁义珍'
		         }],
		         links: [{
		             source: '高育良',
		             target: '侯亮平',
		             name: '师生',
		             des: '侯亮平是高育良的得意门生'
		         }, {
		             source: '高育良',
		             target: '祁同伟',
		             name: '师生'
		         }, {
		             source: '赵立春',
		             target: '高育良',
		             name: "前领导"
		         }, {
		             source: '赵立春',
		             target: '赵瑞龙',
		             name: "父子"
		         }, {
		             source: '赵立春',
		             target: '刘新建',
		             name: "前部队下属"
		         }, {
		             source: '李达康',
		             target: '赵立春',
		             name: "前任秘书"
		         }, {
		             source: '祁同伟',
		             target: '高小琴',
		             name: "情人"
		         }, {
		             source: '陈岩石',
		             target: '陈海',
		             name: "父子"
		         }, {
		             source: '陆亦可',
		             target: '陈海',
		             name: "属下"
		         }, {
		             source: '沙瑞金',
		             target: '陈岩石',
		             name: "故人"
		         }, {
		             source: '祁同伟',
		             target: '陈海',
		             name: "师哥"
		         }, {
		             source: '祁同伟',
		             target: '侯亮平',
		             name: "师哥"
		         }, {
		             source: '侯亮平',
		             target: '陈海',
		             name: "同学，生死朋友"
		         }, {
		             source: '高育良',
		             target: '吴惠芬',
		             name: "夫妻"
		         }, {
		             source: '陈海',
		             target: '赵东来',
		             name: "朋友"
		         }, {
		             source: '高小琴',
		             target: '高小凤',
		             name: "双胞胎",
		             symbolSize: '1'
		         }, {
		             source: '赵东来',
		             target: '陆亦可',
		             name: "爱慕"
		         }, {
		             source: '祁同伟',
		             target: '程度',
		             name: "领导"
		         }, {
		             source: '高育良',
		             target: '高小凤',
		             name: "情人"
		         }, {
		             source: '赵瑞龙',
		             target: '祁同伟',
		             name: "勾结",
		             symbolSize: '1',
		         }, {
		             source: '李达康',
		             target: '赵东来',
		             name: "领导"
		         }, {
		             source: '赵瑞龙',
		             target: '程度',
		             name: "领导"
		         }, {
		             source: '沙瑞金',
		             target: '李达康',
		             name: "领导"
		         }, {
		             source: '沙瑞金',
		             target: '高育良',
		             name: "领导"
		         }, {
		             source: '祁同伟',
		             target: '梁璐',
		             name: "夫妻"
		         }, {
		             source: '吴惠芬',
		             target: '梁璐',
		             name: "朋友"
		         }, {
		             source: '李达康',
		             target: '欧阳菁',
		             name: "夫妻"
		         }, {
		             source: '赵瑞龙',
		             target: '刘新建',
		             name: "洗钱工具"
		         }, {
		             source: '赵瑞龙',
		             target: '高小琴',
		             name: "勾结，腐化",
		             symbolSize: '1'
		         }, {
		             source: '赵瑞龙',
		             target: '高小凤',
		             name: "腐化"
		         }, {
		             source: '吴心怡',
		             target: '陆亦可',
		             name: "母女"
		         }, {
		             source: '吴心怡',
		             target: '吴惠芬',
		             name: "姐妹"
		         }, {
		             source: '蔡成功',
		             target: '侯亮平',
		             name: "发小"
		         }, {
		             source: '蔡成功',
		             target: '欧阳菁',
		             name: "举报",
		             lineStyle: {
		                 normal: {
		                     type: 'dotted',
		                     color: '#000'
		                 }
		             }
		         }, {
		             source: '欧阳菁',
		             target: '刘新建',
		             name: "举报",
		             lineStyle: {
		                 normal: {
		                     type: 'dotted',
		                     color: '#000'
		                 }
		             }
		         }, {
		             source: '刘新建',
		             target: '赵瑞龙',
		             name: "举报",
		             lineStyle: {
		                 normal: {
		                     type: 'dotted',
		                     color: '#000'
		                 }
		             }
		         }, {
		             source: '李达康',
		             target: '丁义珍',
		             name: "领导"
		         }, {
		             source: '高小琴',
		             target: '丁义珍',
		             name: "策划出逃"
		         }, {
		             source: '祁同伟',
		             target: '丁义珍',
		             name: "勾结"
		         }, {
		             source: '赵瑞龙',
		             target: '丁义珍',
		             name: "勾结"
		         }]
		     }]
		})
    },
    initChart4() {
      	this.chart4 = echarts.init(this.$refs.myEchart4);
      	// 把配置和数据放这里
      	this.chart4.setOption({
		    xAxis: {
		        type: 'category',
		        boundaryGap: false,
		        
		        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月']
		    },
		    color:['#409eff','#bad654','#76cbc5', '#65a4c3', '#6e82b9','#8e6bcf'],
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c}次"
		    },
		    yAxis: {
		        type: 'value'
		    },
		    series: [{
		        name:'高危消费行为',
		        data: [420, 432, 401, 334, 390, 510, 520],
		        type: 'line',
		        smooth: true,
		        areaStyle: {}
		    }]
		})
    },
	initChart5() {
      	this.chart5 = echarts.init(this.$refs.myEchart5);
      	// 把配置和数据放这里
      	this.chart5.setOption({
		    xAxis: {
		        type: 'category',
		        boundaryGap: false,
		        
		        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月']
		    },
		    color:['#409eff','#bad654','#76cbc5', '#65a4c3', '#6e82b9','#8e6bcf'],
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c}"
		    },
		    yAxis: {
		        type: 'value'
		    },
		    series: [{
		        name:'贷款类APP注册',
		        data: [820, 932, 901, 934, 1290, 1330, 1320],
		        type: 'line',
		        smooth: true,
		        areaStyle: {}
		    }]
		})
    },
    initChart6() {
      	this.chart6 = echarts.init(this.$refs.myEchart6);
      	// 把配置和数据放这里
      	this.chart6.setOption({
		    title : {
		        text: '某站点用户访问来源',
		        subtext: '纯属虚构',
		        x:'center'
		    },
		    color:['#409eff','#bad654','#76cbc5', '#65a4c3', '#6e82b9','#8e6bcf'],
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        left: 'left',
		        data: ['赌博','奢侈品','出入境跨境消费','娱乐场所','XXX']
		    },
		    series : [
		        {
		            name: '搜索行为',
		            type: 'pie',
		            center: ['50%', '60%'],
		            data:[
		                {value:3351, name:'赌博'},
		                {value:3101, name:'奢侈品'},
		                {value:1234, name:'娱乐场所'},
		                {value:1325, name:'出入境跨境消费'},
		                {value:1148, name:'XXX'}
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
    initChart7() {
      	this.chart7 = echarts.init(this.$refs.myEchart7);
      	// 把配置和数据放这里
      	this.chart7.setOption({
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    color:['#409eff','#bad654','#76cbc5', '#65a4c3', '#6e82b9','#8e6bcf'],
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'category',
		            data : ['PiPi', '美团', '人人贷', '招行', '拍拍贷'],
		            axisTick: {
		                alignWithLabel: true
		            }
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value'
		        }
		    ],
		    series : [
		        {
		            name:'直接访问',
		            type:'bar',
		            barWidth: '60%',
		            data:[10, 12, 20, 4, 3]
		        }
		    ]
		})
    },
    initChart8() {
      	this.chart8 = echarts.init(this.$refs.myEchart8);
      	// 把配置和数据放这里
      	this.chart8.setOption({
		    title: {
		        text: '堆叠区域图'
		    },
		    color:['#409eff','#bad654','#76cbc5', '#65a4c3', '#6e82b9','#8e6bcf'],
		    tooltip : {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'cross',
		            label: {
		                backgroundColor: '#6a7985'
		            }
		        }
		    },
		    legend: {
		        data:['qq','微博','微信','高危行为']
		    },
		    toolbox: {
		        feature: {
		            saveAsImage: {}
		        }
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'category',
		            boundaryGap : false,
		            data : ['一月','二月','三月','四月','五月','六月','七月']
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value'
		        }
		    ],
		    series : [
		        {
		            name:'高危行为',
		            type:'line',
		            stack: '总量',
		            areaStyle: {normal: {color:"#bad654"}},
		            data:[120, 132, 101, 134, 90, 230, 210]
		        },
		        {
		            name:'微信',
		            type:'line',
		            stack: '总量',
		            areaStyle: {normal: {color:"#76cbc5"}},
		            data:[220, 182, 191, 234, 290, 330, 310]
		        },
		        {
		            name:'微博',
		            type:'line',
		            stack: '总量',
		            areaStyle: {normal: {color:"#65a4c3"}},
		            data:[150, 232, 201, 154, 190, 330, 410]
		        },
		        {
		            name:'qq',
		            type:'line',
		            stack: '总量',
		            areaStyle: {normal: {color:"#6e82b9"}},
		            data:[320, 332, 301, 334, 390, 330, 320]
		        },

		    ]
		})
    },
    initChart9() {
      	this.chart9 = echarts.init(this.$refs.myEchart9);
      	// 把配置和数据放这里
      	this.chart9.setOption({
		    title : {
		        text: '某站点用户访问来源',
		        subtext: '纯属虚构',
		        x:'center'
		    },
		    color:['#409eff','#bad654','#76cbc5', '#65a4c3', '#6e82b9','#8e6bcf'],
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        left: 'left',
		        data: ['理财','贷款','汽车','新闻','博彩']
		    },
		    series : [
		        {
		            name: '浏览行为',
		            type: 'pie',
		            radius: ['50%', '70%'],
		            center: ['50%', '60%'],
		            data:[
		                {value:335, name:'理财'},
		                {value:310, name:'贷款'},
		                {value:234, name:'汽车'},
		                {value:135, name:'新闻'},
		                {value:1548, name:'博彩'}
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
    initChart10() {
      	this.chart10 = echarts.init(this.$refs.myEchart10);
      	// 把配置和数据放这里
      	this.chart10.setOption({
		    title : {
		        text: '某站点用户访问来源',
		        subtext: '纯属虚构',
		        x:'center'
		    },
		    color:['#409eff','#bad654','#76cbc5', '#65a4c3', '#6e82b9','#8e6bcf'],
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        left: 'left',
		        data: ['高回报','骗贷','高利贷','洗钱','资金转移']
		    },
		    series : [
		        {
		            name: '搜索行为',
		            type: 'pie',
		            radius: ['50%', '70%'],
		            center: ['50%', '60%'],
		            data:[
		                {value:3351, name:'高回报'},
		                {value:3101, name:'骗贷'},
		                {value:1234, name:'高利贷'},
		                {value:1325, name:'洗钱'},
		                {value:1148, name:'资金转移'}
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
      let heatMap_chart=echarts.init(document.getElementById('detail_heatMap'))
      heatMap_chart.setOption(option)
    }
  }
 }
</script>