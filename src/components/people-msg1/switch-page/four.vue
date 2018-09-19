<template>
	<el-scrollbar style="height: 100%" v-resize:throttle="onResize">
		<el-container>
			<el-main>
				<el-row>
					<el-col :span="24">
						<div class="container">
							<div class="con-title">
								区域内位置行为
							</div>
							<div class="col-body">
								<el-row :gutter="20">
									<el-col :span="16">
										<div class="chart" ref="chart1"></div>	
									</el-col>
									<el-col :span="8">
										<div class="container no-pad">
											<div class="con-title">
												<i class="fa fa-calendar"></i>
												活动场所top10
											</div>
											<table class="col-table list">
												<tr>
													<th>场所</th>
													<th>次数</th>
													<th>增减情况</th>
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
												<tr>
													<td>台湾会所</td>
													<td>20</td>
													<td>UP</td>
												</tr>
											</table>
										</div>
									</el-col>
								</el-row>
							</div>
						</div>
					</el-col>
					<el-col :span="24">
						<div class="container">
							<div class="con-title">
								出境入境行为
							</div>
							<el-row>
								<el-col :span="16">
									<div class="chart" ref="chart2"></div>	
								</el-col>
								<el-col :span="8">
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
import 'echarts/map/js/china.js'
export default {
  data () {
    return {
    	chart1:null,
    	chart2:null,
   	}
  },
  mounted() {
    this.initChart1();
    this.initChart2();
  },
  beforeDestroy() {
  	this.chart1.dispose();
  	this.chart1= null;
  	this.chart2.dispose();
  	this.chart2= null;
  },
  directives: {
    resize
  },
  methods:{
  	onResize:function(){
  		if(this.chart1){
  			this.chart1.resize();
  			this.chart2.resize();
  		}
  		
  	},
  	initChart1() {
      	this.chart1 = echarts.init(this.$refs.chart1);
      	this.chart1.setOption({
            backgroundColor: '#ffffff',
            title: {
                text: "北京面包甜点店铺分布",
                left: 'center',
                textStyle: {
                    color: '#000'
                }
            },
            visualMap: {
                min: 60,
                max: 2035,
                dimension:0,
                left: 'left',
                top: 'bottom',
                text: ['HIGH', 'LOW'], // 文本，默认为数值文本
                calculable: true,
                inRange: {
                    color: ['#EECFA1', '#EEAD0E']
                }
            },
            series: [{
                type: 'map',
                mapType: name,
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.8)'
                        }
                    }
                },
                itemStyle: {

                    normal: {
                        borderColor: '#fff',
                        borderWidth: 1,
                        areaColor: '#000',
                    },
                    emphasis: {
                        areaColor: '#CDAA7D',
                        borderColor: 'rgb(218,165,32)',
                        borderWidth: 1,
                    }
                },
                animation: false,
                data: [{
                        name: '东城区',
                        value: 990,
                    }, {
                        name: '西城区',
                        value: 810,
                    }, {
                        name: '海淀区',
                        value: 1400,
                    }, {
                        name: '朝阳区',
                        value: 2035,
                    }, {
                        name: '石景山区',
                        value: 195,
                    }, {
                        name: '大兴区',
                        value: 465,
                    }, {
                        name: '门头沟区',
                        value: 80,
                    }, {
                        name: '昌平区',
                        value: 615,
                    }, {
                        name: '通州区',
                        value: 675,
                    }, {
                        name: '房山区',
                        value: 330,
                    }, {
                        name: '丰台区',
                        value: 960,
                    }, {
                        name: '顺义区',
                        value: 405,
                    }, {
                        name: '怀柔区',
                        value: 90,
                    }, {
                        name: '密云区',
                        value: 105,
                    }, {
                        name: '延庆区',
                        value: 60,
                    }, {
                        name: '平谷区',
                        value: 75,
                }]
            }]
        });
    },
    initChart2() {
      	this.chart2 = echarts.init(this.$refs.chart2);
      	this.chart2.setOption({
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
