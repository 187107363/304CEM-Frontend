import Vue from 'vue'
import App from './App.vue'
import router from './routes';
import BootstrapVue from 'bootstrap-vue'
import Argon from "./plugins/argon-kit";
Vue.use(BootstrapVue)

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')