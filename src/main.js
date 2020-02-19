import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import cart from './packages/Cart.js';
import Vuex from 'vuex';
import Router from './routes.js'
import store from './store.js'
import {
  ValidationProvider,
  ValidationObserver
} from 'vee-validate';

import './vee-validate'
// Vue.use(VeeValidate)
Vue.config.productionTip = true
Vue.use(VueResource);
Vue.use(cart);
Vue.use(Vuex);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Vue.http.options.root = 'http://127.0.0.1:8083'

const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTYxNzM0ODA4fQ.tU2NAP7EUG76AcT47xVeKkokvEUmvLEIUTizL_U1j_s";
if (token) {
  Vue.http.headers.common['Authorization'] = token;
}



new Vue({
  el: "#app",
  store,
  render: h => h(App),
  router: Router,
})