<template>
  <div class="ipanel">
  	<div class="ipanel-item">
  		<div class="btns-div">
  			<el-button class="ipanel-btn ipanel-btn-active">近一周</el-button>
  			<el-button class="ipanel-btn">近一月</el-button>
  			<el-button class="ipanel-btn">近三个月</el-button>
  			<el-button class="ipanel-btn">近一年</el-button>
  		</div>
  		<div id="active_map_baidu2"></div>
  		<div class="lbox">
  			<div class="lbox-title">
  				重要位置top10
  			</div>
  			<div class="lbox-body">
  				<el-row class="lbox-thead">
  					<el-col :span="8">重要位置</el-col>
  					<el-col :span="9">经纬度</el-col>
  					<el-col :span="7">活跃时间</el-col>
  				</el-row>
  				<el-row v-for="loc in importantLocs" :key='loc.id' class="lbox-tr">
  					<el-col :span="8">{{loc.address}}</el-col>
  					<el-col :span="9">&lt; {{loc.lat}},{{loc.lng}} &gt;</el-col>
  					<el-col :span="7">{{loc.activeTime}}</el-col>
  				</el-row>

  			</div>
  		</div>
  	</div>

	</div>
</template>
<script>
export default {
  data(){
    return{
      importantLocs: [
      	{id:"1",address:'石梁',lng:'121.3',lat:'57.4',activeTime:'18:00-6:00'},
      	{id:"2",address:'石梁',lng:'121.3',lat:'57.4',activeTime:'18:00-6:00'},
      	{id:"3",address:'石梁',lng:'121.3',lat:'57.4',activeTime:'18:00-6:00'},
      	{id:"4",address:'石梁',lng:'121.3',lat:'57.4',activeTime:'18:00-6:00'},
      	{id:"5",address:'石梁',lng:'121.3',lat:'57.4',activeTime:'18:00-6:00'},
      	{id:"6",address:'石梁',lng:'121.3',lat:'57.4',activeTime:'18:00-6:00'},
      	{id:"7",address:'石梁',lng:'121.3',lat:'57.4',activeTime:'18:00-6:00'},
      	{id:"8",address:'石梁',lng:'121.3',lat:'57.4',activeTime:'18:00-6:00'},
      	{id:"9",address:'石梁',lng:'121.3',lat:'57.4',activeTime:'18:00-6:00'},
      	{id:"10",address:'石梁',lng:'121.3',lat:'57.4',activeTime:'18:00-6:00'}
      ]
  	}
	},
  mounted(){
  	this.drawBaiduMap()
  },
  methods:{
    drawBaiduMap(){
    	let _this = this;
    	// 百度地图API功能
    	// 创建Map实例
			let map2 = new BMap.Map("active_map_baidu2")
			// 初始化地图,设置中心点坐标和地图级别
			map2.centerAndZoom(new BMap.Point(116, 40.4), 11)
			// 设置地图显示的城市 此项是必须设置的
			map2.setCurrentCity("北京")
			//开启鼠标滚轮缩放
			map2.enableScrollWheelZoom(true)

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
     	map2.addOverlay(pointCollection1);
     	map2.addOverlay(pointCollection2);
    }
  }
}
</script>
<style lang="scss" scoped>
  .ipanel{
  	position: relative;
  	margin: 30px 20px;
  	border: 1px solid #ddd;
  	font-size: 14px;
  	background-color: #fff;
  	.ipanel-item{
  		position: relative;
  	}
  	.btns-div{
  		position: absolute;
  		z-index: 10;
  		right: 16px;
  		top: 20px;
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
  	.lbox{
  		position: absolute;
  		z-index: 10;
  		top: 80px;
  		right: 16px;
  		width: 300px;
  		background-color: #fff;
  		.lbox-title{
  			padding: 8px 16px;
  			color: #fff;
  			background-color: #292d52;
  		}
			.lbox-body{
				padding: 20px 10px;
				.lbox-thead{
					padding: 4px 0 4px 8px;
					color: #888;
					background-color: #e9eff3;
				}
				.lbox-tr{
					padding-left: 8px;
					height: 40px;
					line-height: 40px;
					border-bottom: 1px solid #ddd;
					&:hover{
						color: #fff;
						background-color: #f99500;
					}
				}
			}
  	}

  	#active_map_baidu2{
  		width: 100%;
  		height: 600px;
  	}
  }
</style>
