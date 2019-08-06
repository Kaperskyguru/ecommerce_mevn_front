import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import cart from './packages/Cart.js';

import Router from './routes.js'
Vue.config.productionTip = true
Vue.use(VueResource);
Vue.use(cart);


Vue.http.options.root = 'http://127.0.0.1:8083'

const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTYxNzM0ODA4fQ.tU2NAP7EUG76AcT47xVeKkokvEUmvLEIUTizL_U1j_s";
if (token) {
  Vue.http.headers.common['Authorization'] = token;
}

new Vue({
  el: "#app",
  render: h => h(App),
  router: Router,
})