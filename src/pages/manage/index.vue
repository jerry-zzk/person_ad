<template class="page">
    <d2-container class="page">
        <el-card shadow="never" class="d2-mb">
            <h2>业务管理--验证服务</h2>
            <p> 手机号码 <b>:</b> &nbsp;<el-input clearable=""  v-model='value1' value="" prefix-icon="el-icon-search" style="width:300px;margin-right:30px;"></el-input>
                身份证号 <b>:</b> &nbsp;<el-input clearable="" v-model='value2' value="" prefix-icon="el-icon-search" style="width:300px;margin-right:30px;"></el-input>
                <el-button type="warning" size="small" @click="cli">点击验证</el-button>
            </p>
        </el-card>
        <el-card shadow="never" class="d2-mb"style="height:610px;">
           <h2 style="color:#666" v-show="ok">恭喜,您输入验证的信息相匹配。</h2>
           <h2 style="color:#aaa" v-show="ok1">很抱歉,您验证的信息不匹配。</h2>
        </el-card>
    </d2-container>
</template>

<script>
export default {
  data () {
    return {
        ok:false,
        ok1:false,
        value1:'',
        value2:'',
    }
  },
  methods: {
    cli(){
        if(this.value1 == this.value2 && this.value1 != '' && this.value2 != ''){
            this.ok = true
            this.ok1 = false
        }else if(this.value1 != this.value2 && this.value1 != '' && this.value2 != ''){
            this.ok = false
            this.ok1 = true
        }else if(this.value1 == ''&&this.value2 != ''){
            this.$alert('请输入手机号码再进行验证')
            this.ok = false
            this.ok1 = false
        }else if(this.value2 == ''&&this.value1 != ''){
            this.$alert('请输入身份证号码再进行验证')
            this.ok = false
            this.ok1 = false
        }else{
            this.$alert('请输入之后再进行验证')
            this.ok = false
            this.ok1 = false
        }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
.page {
    .page__btn-group {
        color: $color-text-placehoder;
        font-size: 12px;
        span {
        color: $color-text-sub;
        &:hover {
            color: $color-text-main;
        }
        }
    }
}
</style>

