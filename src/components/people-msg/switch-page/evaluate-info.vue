<template>
	<el-container>
		<el-header>
			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			  <el-menu-item :index="item.index" v-for="item in menu_item">
			  	<a href="javascript:void(0)" @click="goAnchor('#anchor-'+item.index)" target="_blank">
			  		{{item.name}}
			  	</a>
			  </el-menu-item>
			</el-menu>
		</el-header>
		<el-main>
			<div :id="'anchor-'+item.index" class="item" v-for="item in menu_item">
				{{item.name}}
			</div>
		</el-main>
	</el-container>
</template>
<style lang="scss" scoped>

</style>
<script>
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
    	}]
    }
  },
  methods:{
  	goAnchor(selector) {
        var anchor = this.$el.querySelector(selector)
        document.documentElement.scrollTop = anchor.offsetTop
    }
  }
 }
</script>