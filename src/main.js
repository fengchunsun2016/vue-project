// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import Home from './home.vue'
import Login from './login.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routers = [{
  path:"home",
  component: Home
},{
  path:"login",
  component: Login
}]
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
