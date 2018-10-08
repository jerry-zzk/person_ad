<template>
  <div
    class="d2-layout-header-aside-group"
    :style="styleLayoutMainGroup"
    :class="{grayMode: grayActive}">
    <!-- 半透明遮罩 -->
    <div class="d2-layout-header-aside-mask"></div>
    <!-- 主体内容 -->
    <div class="d2-layout-header-aside-content" flex="dir:top">
      <div class="layer bg" id="login"></div>
      <!-- 顶栏 -->
      <div
        class="d2-theme-header"
        :style="{
          opacity: this.searchActive ? 0.3 : 1
        }"
        flex-box="0">
        <div class="logo-group" :style="{width: asideCollapse ? asideWidthCollapse : asideWidth}">
         <!--  <img v-if="asideCollapse" :src="`${$baseUrl}image/theme/${themeActiveSetting.name}/logo/icon-only.svg`"> -->
          <img v-if="asideCollapse" :src="`${$baseUrl}image/logos/logo.svg`">
          <!-- <img v-else :src="`${$baseUrl}image/theme/${themeActiveSetting.name}/logo/logo.svg`"> -->
          <img v-else :src="`${$baseUrl}image/logos/index/${themeActiveSetting.type}/all.svg`">
        </div>
        <div class="toggle-aside-btn" @click="handleToggleAside">
          <d2-icon name="bars"/>
        </div>
        <!-- <d2-menu-header/> -->
        <div class="d2-header-companyName">北京小微贷款科技有限公司</div>
        <!-- 顶栏右侧 -->
        <div class="d2-header-right">
          <!-- 如果你只想在开发环境显示这个按钮请添加 v-if="$env === 'development'" -->
          <d2-header-help/>
          <!-- <d2-header-search @click="handleSearchClick"/> -->
          <d2-header-error-log/>
          <d2-header-fullscreen/>
          <d2-header-theme/>
          <d2-header-user/>
        </div>
      </div>
      <!-- 下面 主体 -->
      <div class="d2-theme-container" flex-box="1" flex>
        <!-- 主体 -->
        <div class="d2-theme-container-main" flex-box="1" flex>
          <!-- 搜索 -->
          <transition name="fade-scale">
            <div v-show="searchActive" class="d2-theme-container-main-layer" flex="dir:top">
              <d2-panel-search
                ref="panelSearch"
                @close="searchPanelClose"/>
            </div>
          </transition>
          <!-- 内容 -->
          <transition name="fade-scale">
            <div v-show="!searchActive" class="d2-theme-container-main-layer" flex="dir:top">
              <!-- 页面 -->
              <div class="d2-theme-container-main-body" flex-box="1">
                <transition :name="transitionActive ? 'fade-transverse' : ''">
                  <keep-alive :include="keepAlive">
                    <el-container class="page">
                      <el-main>
                        <el-row>
                          <el-col :span="18" :offset="3">
                            <div class="grid-content bg-purple-light">
                              <el-row>
                                <el-col :span="8">
                                  <div class="menu_button button_one">
                                    <img :src="`${$baseUrl}image/index/lian_xin_he_bg.png`">
                                    <a :href="`${$baseUrl}#/antiFraud/index`" @click="link_event('line')">
                                      <img :src="`${$baseUrl}image/index/lian_xin_he.png`">
                                      <p>联信核</p>
                                      <p>贷前反欺诈产品</p>
                                    </a>
                                  </div>
                                </el-col>
                                <el-col :span="8">
                                  <div class="menu_button button_two">
                                    <img :src="`${$baseUrl}image/index/lian_xin_kong_bg.png`">
                                    <a :href="`${$baseUrl}#/loaningMonitor/index`" @click="link_event('d2')">
                                      <img :src="`${$baseUrl}image/index/lian_xin_kong.png`">
                                      <p>联信控</p>
                                      <p>贷中监控产品</p>
                                    </a>
                                  </div>
                                </el-col>
                                <el-col :span="8">
                                  <div class="menu_button button_three">
                                    <img :src="`${$baseUrl}image/index/lian_xin_fu_bg.png`">
                                    <a :href="`${$baseUrl}#/dataVerification/index`" @click="link_event('violet')">
                                      <img :src="`${$baseUrl}image/index/lian_xin_fu.png`">
                                      <p>联信服</p>
                                      <p>数据核验服务产品</p>
                                    </a>
                                  </div>
                                </el-col>
                              </el-row>
                            </div>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="18" :offset="3">
                            <div class="grid-content bg-purple-light">
                              <el-row :gutter="20">
                                <el-col :span="8">
                                  <div class="menu_button button_one">
                                    <img :src="`${$baseUrl}image/index/lian_zhong_bg.png`">
                                    <a href="javacript:void(0);">
                                      <img :src="`${$baseUrl}image/index/lian_zhong.png`">
                                      <p>联众</p>
                                      <p>风控知识图谱系统</p>
                                    </a>
                                  </div>
                                </el-col>
                                <el-col :span="8">
                                  <div class="menu_button button_two">
                                    <img :src="`${$baseUrl}image/index/lian_zhi_bg.png`">
                                    <a href="javacript:void(0);">
                                      <img :src="`${$baseUrl}image/index/lian_zhi.png`">
                                      <p>联智</p>
                                      <p>大数据建模风控分析系统</p>
                                    </a>
                                  </div>
                                </el-col>
                               
                              </el-row>
                            </div>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="18" :offset="3">
                            <div class="grid-content bg-purple-light">
                              <el-row :gutter="20">
                                <el-col :span="8">
                                  <div class="menu_button button_one">
                                    <img :src="`${$baseUrl}image/index/lian_yan_bg.png`">
                                    <a href="javacript:void(0);">
                                      <img :src="`${$baseUrl}image/index/lian_yan.png`">
                                      <p>联眼</p>
                                      <p>数据采集平台</p>
                                    </a>
                                  </div>
                                </el-col>
                                <el-col :span="8">
                                  <div class="menu_button button_two">
                                    <img :src="`${$baseUrl}image/index/lian_qing_bg.png`">
                                    <a href="javacript:void(0);">
                                      <img :src="`${$baseUrl}image/index/lian_qing.png`">
                                      <p>联擎</p>
                                      <p>大数据基础平台</p>
                                    </a>
                                  </div>
                                </el-col>
                                <el-col :span="8">
                                  <div class="menu_button button_three">
                                    <img :src="`${$baseUrl}image/index/lian_rong_bg.png`">
                                    <a href="javacript:void(0);">
                                      <img :src="`${$baseUrl}image/index/lian_rong.png`">
                                      <p>联融</p>
                                      <p>数据治理融合汇聚平台</p>
                                    </a>
                                  </div>
                                </el-col>
                              </el-row>
                            </div>
                          </el-col>
                        </el-row>
                      </el-main>
                    </el-container>
                  </keep-alive>
                </transition>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  // 注册主题
  @import '~@/assets/style/theme/register.scss';
  .layer {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 0;
    &.flex-center {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
  // 背景
  .bg {
    canvas {
      display: block;
      margin: 0px;
      padding: 0px;
    }
  }
  .el-row {
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .page{
    height: 100%;
    width: 1024px;
    top: 4%;
    left: 50%;
    margin-left: -512px;
    position: absolute;
    border-radius: 4px;
  }
  .bg-purple-light {
    background: #fff;
  }
  .grid-content {
    border-radius: 18px;
    min-height: 36px;
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.2);
  }
  .menu_button{
    width: 181px;
    position: relative;
    height: 151px;
    margin: auto;
    padding: 20px;
    cursor: pointer;
    &>img{
      position: absolute;
      top:0px;
      left:0px;
      opacity:0;
      z-index: 1;
      width: 180px;
      height: 180px;
      margin: 5px 20px;
      transition:opacity 0.5s ease-in-out;
    }
    &:hover>img{
      opacity:1;
    }
    a{
      position: absolute;
      z-index:2;
      img{
        margin: 0 40px;
      }
    }
    p{
      text-align: center;
      font-size:14px;
      margin:5px;
      paddiing:0px;
      color:rgb(104, 104, 104);
    }
  }
</style>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import mixinSearch from '../header-aside/mixins/search'
require('particles.js')
import config from '../header-aside/config/default'
export default {
  name: 'd2-layout-index',
  mixins: [
    mixinSearch
  ],
  components: {
    'd2-header-help': () => import('../header-aside/components/header-help'),
    'd2-header-fullscreen': () => import('../header-aside/components/header-fullscreen'),
    'd2-header-search': () => import('../header-aside/components/header-search'),
    'd2-header-theme': () => import('../header-aside/components/header-theme'),
    'd2-header-user': () => import('../header-aside/components/header-user'),
    'd2-header-error-log': () => import('../header-aside/components/header-error-log')
  },
  mounted () {
    // 初始化例子插件
    particlesJS('login', config)
  },
  data () {
    return {
      // [侧边栏宽度] 正常状态
      asideWidth: '200px',
      // [侧边栏宽度] 折叠状态
      asideWidthCollapse: '65px'
    }
  },
  computed: {
    ...mapState('d2admin', {
      grayActive: state => state.gray.active,
      transitionActive: state => state.transition.active,
      asideCollapse: state => state.menu.asideCollapse
    }),
    ...mapGetters('d2admin', {
      keepAlive: 'page/keepAlive',
      themeActiveSetting: 'theme/activeSetting'
    }),
    /**
     * @description 最外层容器的背景图片样式
     */
    styleLayoutMainGroup () {
      return {
        ...this.themeActiveSetting.backgroundImage ? {
          backgroundImage: `url('${this.$baseUrl}${this.themeActiveSetting.backgroundImage}')`
        } : {}
      }
    }
  },
  methods: {
    ...mapMutations({
      menuAsideCollapseToggle: 'd2admin/menu/asideCollapseToggle'
    }),
    /**
     * 接收点击切换侧边栏的按钮
     */
    handleToggleAside () {
      this.menuAsideCollapseToggle()
    },
    // 进入子模块触发(主题名字)
    link_event (themeName) {
      // 关闭所有小导航
      this.$store.commit('d2admin/page/closeAll', this)
      // 设置不同的皮肤
      if (!themeName) {
        themeName = 'line'
      }
      this.$store.commit('d2admin/theme/set', themeName)
    }
  }
}
</script>
