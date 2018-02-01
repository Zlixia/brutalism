//依赖  使用promise,async等的依赖
import 'babel-polyfill'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


//引入style样式
import '@/styles/index.less'
//引入flexible (px->rem，必须要先安装扩展cssrem)
import '@/styles/reset.js'

//引入http库 axios
import axios from 'axios'
Vue.prototype.$http = axios

//引入vuex
import store from './store'

//引入mint-ui 中的按需加载
// import {Indicator} from 'mint-ui'
// Vue.prototype.loading = Indicator

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
