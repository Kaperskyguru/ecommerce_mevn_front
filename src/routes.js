import Vue from 'vue';
import VueRouter from 'vue-router';

import ViewProduct from './components/ViewProduct.vue';
import Store from './components/Store.vue';
import Checkout from './components/Checkout.vue';
import Index from './components/Index.vue';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: "/product/:id",
            name: 'product',
            component: ViewProduct
        },
        {
            path: "/products/:category",
            name: 'products',
            component: Store
        },
        {
            path: "/checkout",
            name: 'checkout',
            component: Checkout
        }
    ]
});

export default router;