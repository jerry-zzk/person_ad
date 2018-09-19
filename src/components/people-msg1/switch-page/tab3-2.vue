<template>
  <div class="ipanel">
  	<div class="ipanel-item">
  		<div>
  			<el-button>近一周</el-button>
  			<el-button>近一月</el-button>
  			<el-button>近三个月</el-button>
  			<el-button>近一年</el-button>
  		</div>
  		<div id="active_map_baidu2"></div>
  		<div class="lbox">
  			<div class="lbox-title">
  				重要位置top10
  			</div>
  			<div class="lbox-body">
  				<el-row class="lbox-thead">
  					<el-col :span="8">重要位置</el-col>
  					<el-col :span="8">经纬度</el-col>
  					<el-col :span="8">活跃时间</el-col>
  				</el-row>
  				<el-row v-for="loc in importantLocs" :key='loc.id' class="lbox-tr">
  					<el-col :span="8">{{loc.address}}</el-col>
  					<el-col :span="8">&lt; {{loc.lat}},{{loc.lng}} &gt;</el-col>
  					<el-col :span="8">{{loc.activeTime}}</el-col>
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
  	margin: 30px 20px;
  	padding: 30px 20px;
  	border: 1px solid #ddd;
  	font-size: 14px;

  	#active_map_baidu2{
  		width: 100%;
  		height: 500px;
  	}
  }
</style>
