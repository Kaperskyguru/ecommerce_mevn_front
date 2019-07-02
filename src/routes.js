import Vue from 'vue';
import VueRouter from 'vue-router';

import ViewProduct from './components/ViewProduct.vue';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: "/details",
        component: ViewProduct
    }]
});

export default router;