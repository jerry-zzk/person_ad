<template>
	<d2-container>
		<demo-page-header
	      slot="header"
	      @submit="handleSubmit"
	      ref="header"/>
		<div>
		    <ul class="people_list">
		      	<li class="people_item black_list">
			        <img src="../index/image/qr@2x.png">
			        <span class="state phone"><i class="fa fa-phone"></i></span>
			        <div class="info">
				        <span>hahahha</span>
				        <span>11118611108792117</span>
				        <span>234234@sdsd.com</span>
			    	</div>
		      	</li>
		      	<li class="people_item black_list">
			        <img src="../index/image/qr@2x.png">
			        <span class="state phone"><i class="fa fa-phone"></i></span>
			        <div class="info">
				        <span>hahahha</span>
				        <span>11118611108792117</span>
				        <span>234234@sdsd.com</span>
			    	</div>
		      	</li>
		      	<li class="people_item black_list">
			        <img src="../index/image/qr@2x.png">
			        <span class="state id"><i class="fa fa-phone"></i></span>
			        <div class="info">
				        <span>hahahha</span>
				        <span>11118611108792117</span>
				        <span>234234@sdsd.com</span>
			    	</div>
		      	</li>
		      	<li class="people_item black_list">
			    	<img src="../index/image/qr@2x.png">
			    	<span class="state phone"><i class="fa fa-phone"></i></span>
			        <div class="info">
				        <span>hahahha</span>
				        <span>11118611108792117</span>
				        <span>234234@sdsd.com</span>
		    		</div>
		      	</li>
		    </ul>
	 	</div>
    	<demo-page-footer
	      slot="footer"
	      :current="page.current"
	      :size="page.size"
	      :total="page.total"
	      @change="handlePaginationChange"/>
  	</d2-container>
</template>
<style type="text/css" scope>
  .people_list{
    list-style: none;
    margin:0px;
    padding:0px;
  }
  .people_item .state{
  	position: absolute;
  	right:-40px;
  	top:-40px;
  	width:80px;
  	height:80px;
	background: red;
	transform: rotate(45deg);
  }
  .people_item .state i{
  	color:white;
  	line-height: 50px;
  	transform: rotate(-45deg);
  	margin-top: 40px;
    margin-left: 30px;
    font-size: 28px;
  }
  .people_item{
  	overflow: hidden;
    float:left;
    display: block;
    border:1px solid black;
    box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.5);
    width:200px;
    height:300px;
    position: relative;
    cursor:pointer;
    margin:10px;
  }
  .people_item img{
  	width:150px;
  	position:absolute;
  	left:50%;
  	margin-left:-75px;
  	top:25px;
  }
  .people_item .info{
  	margin-top:200px;
  	text-align:center;
  }
  .people_item span{
  	display: block;
  	margin-bottom:10px;
  }
</style>
<script>
import { BusinessTable1List } from '@/api/demo/business/table/1'
export default {
  // name 值和本页的 $route.name 一致才可以缓存页面
  name: 'demo-business-table-1',
  components: {
    'DemoPageHeader': () => import('./componnets/PageHeader'),
    'DemoPageFooter': () => import('./componnets/PageFooter')
  },
  data () {
    return {
      table: [],
      page: {
        current: 1,
        size: 100,
        total: 0
      }
    }
  },
  methods: {
    handlePaginationChange (val) {
      this.$notify({
        title: '分页变化',
        message: `当前第${val.current}页 共${val.total}条 每页${val.size}条`
      })
      this.page = val
      // nextTick 只是为了优化示例中 notify 的显示
      this.$nextTick(() => {
        this.$refs.header.handleFormSubmit()
      })
    },
    handleSubmit (form) {
      this.loading = true
      this.$notify({
        title: '开始请求模拟表格数据'
      })
      BusinessTable1List({
        ...form,
        page: this.page
      })
        .then(res => {
          this.loading = false
          this.$notify({
            title: '模拟表格数据请求完毕'
          })
          this.table = res.list
          this.page = res.page
        })
        .catch(err => {
          this.loading = false
          this.$notify({
            title: '模拟表格数据请求异常'
          })
          console.log('err', err)
        })
    }
  }
}
</script>
