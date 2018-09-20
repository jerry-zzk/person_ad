<template>
  <div class="ipanel">
  	<el-table :data="tableData" style="width: 100%;">
      <el-table-column prop="contact" label="联系方式"></el-table-column>
      <el-table-column prop="socialRelation" label="社会关系"></el-table-column>
      <el-table-column prop="phoneTimes" label="电话通联次数(近1个月)"></el-table-column>
      <el-table-column prop="msgTimes" label="短信通联次数(近1个月)"></el-table-column>
    </el-table>
    <div style="margin-top: 50px;text-align: center;">
	    <el-pagination
			  background
			  layout="prev, pager, next"
			  :total="1000">
			</el-pagination>
    </div>
	</div>
</template>
<script>
export default {
  data(){
    return{
      tableData: [{
      	contact: '15022343553',
      	socialRelation: '同事',
      	phoneTimes: '56',
      	msgTimes: '32'
      },{
      	contact: '15022343553',
      	socialRelation: '同事',
      	phoneTimes: '56',
      	msgTimes: '32'
      },{
      	contact: '15022343553',
      	socialRelation: '同事',
      	phoneTimes: '56',
      	msgTimes: '32'
      },{
      	contact: '15022343553',
      	socialRelation: '同事',
      	phoneTimes: '56',
      	msgTimes: '32'
      },{
      	contact: '15022343553',
      	socialRelation: '同事',
      	phoneTimes: '56',
      	msgTimes: '32'
      },{
      	contact: '15022343553',
      	socialRelation: '同事',
      	phoneTimes: '56',
      	msgTimes: '32'
      },{
      	contact: '15022343553',
      	socialRelation: '同事',
      	phoneTimes: '56',
      	msgTimes: '32'
      },{
      	contact: '15022343553',
      	socialRelation: '同事',
      	phoneTimes: '56',
      	msgTimes: '32'
      },{
      	contact: '15022343553',
      	socialRelation: '同事',
      	phoneTimes: '56',
      	msgTimes: '32'
      },{
      	contact: '15022343553',
      	socialRelation: '同事',
      	phoneTimes: '56',
      	msgTimes: '32'
      }]
  	}
	},
  mounted(){
  	
  },
  methods:{
    
  }
}
</script>
<style lang="scss" scoped>
  .ipanel{
  	margin: 30px 20px;
  	padding: 30px 20px;
  	border: 1px solid #ddd;
  	font-size: 14px;
  	background-color: #fff;
  }
</style>
