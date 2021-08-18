import Vue from 'vue'
import App from './App'


Vue.config.productionTip = false

import router from './router/router'
import store from './store/store'
import * as api from './api/api'
Vue.prototype.$api = api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store

})
