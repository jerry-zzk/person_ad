// polyfill
import 'babel-polyfill'
// Vue
import Vue from 'vue'
import App from './App'
// store
import store from '@/store/index'
// 模拟数据
import '@/mock'
// 多国语
import i18n from './i18n'
// 核心插件
import d2Admin from '@/plugin/d2admin'
import D2Crud from '@d2-projects/d2-crud'
// 调用接口
import global from './pages/global/global.vue'

Vue.use(D2Crud)

// 菜单和路由设置
import router from './router'
import { menuAside,menuAside1,menuAside2 } from '@/menu'
import { frameInRoutes } from '@/router/routes'

// 引用插件 vue-good-wizard
import VueGoodWizard from 'vue-good-wizard'
Vue.use(VueGoodWizard)

// 核心插件
Vue.use(d2Admin)
Vue.prototype.GLOBAL = global
// Vue.use(axios)
// Vue.use(global)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  created () {
    // 处理路由 得到每一级的路由设置
    this.$store.commit('d2admin/page/init', frameInRoutes)
    // 设置顶栏菜单
    //this.$store.commit('d2admin/menu/headerSet', menuHeader)
    // 初始化菜单搜索功能
    //this.$store.commit('d2admin/search/init', menuHeader)
    this.$store.commit('d2admin/search/init', menuAside)
    // 显示侧边菜单
    this.$store.commit('d2admin/menu/asideSet', menuAside)
  },
  mounted () {
    // 展示系统信息
    this.$store.commit('d2admin/releases/versionShow')
    // 检查最新版本
    this.$store.dispatch('d2admin/releases/checkUpdate')
    // 用户登录后从数据库加载一系列的设置
    this.$store.commit('d2admin/account/load')
    // 获取并记录用户 UA
    this.$store.commit('d2admin/ua/get')
    // 初始化全屏监听
    this.$store.commit('d2admin/fullscreen/listen')
  },
  watch: {
    // 监听路由 控制侧边栏显示
    /*
    '$route.matched' (val) {
      const _side = menuAside.filter(menu => menu.path === val[0].path)
      this.$store.commit('d2admin/menu/asideSet', _side.length > 0 ? _side[0].children : [])
    }
    */
    '$route.matched' (val) {
      let url_path = val[0].path
      let now_menuAside =  menuAside
      // 监听到不同的子模块
      if(url_path=='/dataVerification'){
        now_menuAside = menuAside1

      }else if(url_path=='/loaningMonitor'){
        now_menuAside = menuAside2
        
      }
      // 初始化菜单搜索功能
      this.$store.commit('d2admin/search/init', now_menuAside)
      // 显示侧边菜单
      this.$store.commit('d2admin/menu/asideSet', now_menuAside)
    }
    
  }
}).$mount('#app')
