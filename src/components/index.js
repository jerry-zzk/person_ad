import Vue from 'vue'

import d2Container from './d2-container'

// 注意 有些组件使用异步加载会有影响
Vue.component('d2-container', d2Container)
Vue.component('d2-page-cover', () => import('./d2-page-cover'))
Vue.component('d2-icon', () => import('./d2-icon'))
Vue.component('d2-icon-svg', () => import('./d2-icon-svg/index.vue'))
Vue.component('d2-customer-list', () => import('./d2-customer-list/index.vue'))
Vue.component('people-info-popup', () => import('./people-msg/people-info-popup.vue'))
Vue.component('people-info-popup1', () => import('./people-msg1/people-info-popup1.vue'))
