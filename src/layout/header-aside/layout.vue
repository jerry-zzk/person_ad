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
        <div class="logo-group" @click="$router.replace({ path: '/' })" :style="{width: asideCollapse ? asideWidthCollapse : asideWidth}">
          <!-- <img v-if="asideCollapse" :src="`${$baseUrl}image/theme/${themeActiveSetting.name}/logo/icon-only.svg`"> -->
          <img v-if="asideCollapse" :src="`${$baseUrl}image/logos/logo.svg`">
          <!-- <img v-else :src="`${$baseUrl}image/theme/${themeActiveSetting.name}/logo/logo.svg`"> -->
          <img v-else :src="`${$baseUrl}image/logos/${logoPath}/${themeActiveSetting.type}/all.svg`">
        </div>
        <div class="toggle-aside-btn" @click="handleToggleAside">
          <d2-icon name="bars"/>
        </div>
        <!-- <d2-menu-header/> -->
        <div class="d2-header-companyName">北京小微贷款科技有限公司</div>
        <!-- 顶栏右侧 -->
        <div class="d2-header-right">
          <!-- 如果你只想在开发环境显示这个按钮请添加 v-if="$env === 'development'" -->
          <d2-header-gohome/>
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
        <!-- 主体 侧边栏 -->
        <div
          flex-box="0"
          ref="aside"
          class="d2-theme-container-aside"
          :style="{
            width: asideCollapse ? asideWidthCollapse : asideWidth,
            opacity: this.searchActive ? 0.3 : 1
          }">
          <d2-menu-side/>
        </div>
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
              <!-- tab -->
              <div class="d2-theme-container-main-header" flex-box="0">
                <d2-tabs/>
              </div>
              <!-- 页面 -->
              <div class="d2-theme-container-main-body" flex-box="1">
                <transition :name="transitionActive ? 'fade-transverse' : ''">
                  <keep-alive :include="keepAlive">
                    <router-view/>
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

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import mixinSearch from './mixins/search'
require('particles.js')
import config from './config/default'
export default {
  name: 'd2-layout-header-aside',
  mixins: [
    mixinSearch
  ],
  components: {
    'd2-menu-side': () => import('./components/menu-side'),
    // 'd2-menu-header': () => import('./components/menu-header'),
    'd2-tabs': () => import('./components/tabs'),
    'd2-header-gohome': () => import('./components/header-gohome'),
    'd2-header-help': () => import('./components/header-help'),
    'd2-header-fullscreen': () => import('./components/header-fullscreen'),
    'd2-header-search': () => import('./components/header-search'),
    'd2-header-theme': () => import('./components/header-theme'),
    'd2-header-user': () => import('./components/header-user'),
    'd2-header-error-log': () => import('./components/header-error-log')
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
      themeActiveSetting: 'theme/activeSetting',
      logoPath: 'theme/logoPathSetting',
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
    }
  }
}
</script>

<style lang="scss">
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
</style>
