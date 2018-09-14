import Vue from 'vue'
import Vuex from 'vuex'

import d2admin from './modules/d2admin'
import chartData from './modules/line-chart'
import peopleInfoPopup from './modules/people-info-popup'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    d2admin,
    chartData,
    peopleInfoPopup
  }
})
