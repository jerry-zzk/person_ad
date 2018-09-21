<template>
  <div class="ipanel">
  	<div>
  		<p class="ipanel-p">新手机号的可信度</p>
  		<el-row class="ipanel-thead">
  			<el-col :span="4">判定规则</el-col>
  			<el-col :span="5">判定依据</el-col>
  			<el-col :span="5">规则权重</el-col>
  			<el-col :span="5">规则匹配情况</el-col>
  			<el-col :span="5">详情</el-col>
  		</el-row>
  		<el-row v-for="(msg,index) in phoneMsg" :key="msg.ruleName" class="ipanel-tr" :class="{'ipanel-tr-bg':index%2==0}">
  			<el-col :span="4">{{msg.ruleName}}</el-col>
  			<el-col :span="5">{{msg.judgeBase}}</el-col>
  			<el-col :span="5">{{msg.ruleWeight}}</el-col>
  			<el-col :span="5">{{msg.ruleCondition}}</el-col>
  			<el-col :span="5">{{msg.detail}}</el-col>
  		</el-row>
  	</div>

  	<div class="ipanel-item">
  		<p class="ipanel-p">活动区域的热力图</p>
  		<div class="ipanel-cellphones">
  			<span class="cellphone"><i class="fa fa-square" style="color:#1d8af2"></i>13557986547</span>
  			<span class="cellphone"><i class="fa fa-square" style="color:#963390"></i>135478961423</span>
  		</div>
  		<div class="btns-div">
  			<el-button class="ipanel-btn ipanel-btn-active">近一周</el-button>
  			<el-button class="ipanel-btn">近一月</el-button>
  			<el-button class="ipanel-btn">近三个月</el-button>
  			<el-button class="ipanel-btn">近一年</el-button>
  		</div>
  		<div id="active_map_baidu"></div>
  	</div>

  	<div class="ipanel-item">
  		<p class="ipanel-p">社会关系的关系图</p>
  		<div class="ipanel-cellphones">
  			<span class="cellphone"><i class="fa fa-square" style="color:#1d8af2"></i>13557986547</span>
  			<span class="cellphone"><i class="fa fa-square" style="color:#963390"></i>135478961423</span>
  		</div>
  		<div id="f_relationCahrt"></div>
  	</div>

	</div>
</template>
<script>
import echarts from 'echarts'
import axios from '@/plugin/axios'
export default {
  data(){
    return{
      phoneMsg: [{
      	ruleName: 'IMEI标识',
      	judgeBase: '同手机换卡',
      	ruleWeight: '10',
      	ruleCondition: '两个号码imei相同',
      	detail: 'IMEI: 00df2e99d320'
      },{
      	ruleName: '活动区域',
      	judgeBase: '重要位置重叠度',
      	ruleWeight: '10',
      	ruleCondition: '重要位置重叠度80%',
      	detail: '平均偏差小于800米'
      },{
      	ruleName: '社会关系',
      	judgeBase: '社会关系重叠度',
      	ruleWeight: '10',
      	ruleCondition: '社会关系重叠度76%',
      	detail: '数量及联系频次相当'
      }]
    }
  },
  mounted(){
  	console.log(document.getElementById('active_map_baidu').style.width)
  	this.drawBaiduMap()
  	this.getRelationData()
  },
  methods:{
    getRelationData() {
      let _this = this
      axios({
        url: '../json/npmdepgraph.min10.json',
        method: 'GET',
        data: {}
      })
      .then(res => {
        _this.drawRelationChart(res)
      })
      .catch((error) => {
        // 错误情况
        console.log(error);
      })

    },
    drawBaiduMap(){
    	let _this = this
    	// 百度地图API功能
    	// 创建Map实例
			let map = new BMap.Map("active_map_baidu")
			// 初始化地图,设置中心点坐标和地图级别
			map.centerAndZoom(new BMap.Point(116.404, 39.915), 11)
			// 设置地图显示的城市 此项是必须设置的
			map.setCurrentCity("北京")
			//开启鼠标滚轮缩放
			map.enableScrollWheelZoom(true)

			/*
			// 创建点
			var marker = new BMap.Marker(new BMap.Point(116.404, 40,{color: 'blue'}))
			map.addOverlay(marker)
			*/
			// 海量点
			let points1 = []
			let points2 = []
			points1.push(new BMap.Point(116.338153,39.96406))
			points1.push(new BMap.Point(116.197299,39.936625))
			points1.push(new BMap.Point(116.182926,39.967599))
			points1.push(new BMap.Point(116.074842,39.950786))
			points1.push(new BMap.Point(116.074842,39.950786))
			points2.push(new BMap.Point(116.338153,40.06406))
			points2.push(new BMap.Point(116.197299,40.036625))
			points2.push(new BMap.Point(116.182926,40.067599))
			points2.push(new BMap.Point(116.074842,40.050786))
			points2.push(new BMap.Point(116.074842,40.050786))
			// 初始化PointCollection
			let pointCollection1 = new BMap.PointCollection(points1, {
        size: BMAP_POINT_SIZE_BIGGER,
        shape: BMAP_POINT_SHAPE_CIRCLE,
        color: '#1d8af2'
      });
			let pointCollection2 = new BMap.PointCollection(points2, {
        size: BMAP_POINT_SIZE_BIGGER,
        shape: BMAP_POINT_SHAPE_CIRCLE,
        color: '#963390'
      });
     	map.addOverlay(pointCollection1);
     	map.addOverlay(pointCollection2);

    },
    // 封装的关系数据
    drawRelationChart(json){
    	let _tihs = this
    	let option = {
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series : [{
          type: 'graph',
          layout: 'none',
          label: {
            emphasis: {
              position: 'right',
              show: true
            }
          },
          grid: {
          	top: 0,
          	bottom: 0
          },
          roam: true,
          focusNodeAdjacency: true,
          lineStyle: {
            normal: {
              width: 0.5,
              curveness: 0.3,
              opacity: 0.7
            }
          },
          data: json.nodes.map(function (node) {
            return {
              x: node.x,
              y: node.y,
              id: node.id,
              name: node.label,
              symbolSize: node.size,
              itemStyle: {
                normal: {
                  color: node.color
                }
              }
            };
          }),
          edges: json.edges.map(function (edge) {
            return {
              source: edge.sourceID,
              target: edge.targetID
            };
          }),
                
        }]
      }
      let relationChart=echarts.init(document.getElementById('f_relationCahrt'))
      relationChart.setOption(option)
    }
  }
}
</script>
<style lang="scss" scoped>
  .ipanel{
  	position: relative;
  	margin: 30px 20px;
  	padding: 20px;
  	border: 1px solid #ddd;
  	font-size: 14px;
  	background-color: #fff;
  	.ipanel-item{
  		position: relative;
  		margin-top: 30px;
  	}
  	.ipanel-p{
  		padding-bottom: 10px;
  		border-bottom: 1px solid #ddd;
  		font-weight: 600;
  		&:before{
  			content: '|';
  			margin-right: 6px;
  			font-size: 18px;
  			font-weight: 600;
  			color: #f99909;
  		}
  	}
		.ipanel-cellphones{
			position: absolute;
			z-index: 10;
			top: 6px;
			right: 0;
			.cellphone{
				margin-left: 20px;
				.fa{
					position: relative;
					right: 6px;
				}
			}
		}
  	.ipanel-thead{
  		height: 32px;
  		padding-left: 40px;
  		line-height: 32px;
  		background-color: #e9eff3;
  	}
  	.ipanel-tr{
  		height: 40px;
  		padding-left: 40px;
  		line-height: 40px;
  		font-weight: 600;
  		background-color: #e9eff3;
  	}
  	.ipanel-tr-bg{
  		background-color: #fff;
  	}
  	.btns-div{
  		position: absolute;
  		z-index: 10;
  		right: 16px;
  		top: 70px;
  	}
  	.ipanel-btn{
  		&:hover{
  			color: #fff;
  			background-color: #f99500;
  		}
  	}
  	.ipanel-btn-active{
			color: #fff;
  		background-color: #f99500;
  	}

  	#active_map_baidu{
  		width: 100%;
  		height: 500px;
  	}
  	#f_relationCahrt{
  		width: 100%;
  		height: 400px;
  	}
  }
</style>
