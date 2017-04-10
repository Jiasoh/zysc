/*// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})*/

import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Routes from './router/routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
