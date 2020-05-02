import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/reset.css'
import { Toast, Button, Tabs, Tab } from 'vant'
Vue.use(Toast)
Vue.use(Button)
Vue.use(Tab)
Vue.use(Tabs)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
