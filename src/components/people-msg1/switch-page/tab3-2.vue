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
			let map = new BMap.Map("active_map_baidu2");    // 创建Map实例
			map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别	  
			map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
			map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
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
