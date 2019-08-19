import Vue from 'vue'
import Vuex from 'vuex'

import Repository from "./repositories/RepositoryFactory";
const CategoryRepository = Repository.get("category");
const ProductRepository = Repository.get("products");

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        categories: [],
        products: [],
        carts: [],
        productCategories: [],
    },

    actions: {
        async getCategories({
            commit
        }) {
            commit('getCategories', await CategoryRepository.get())
        },

        async getProducts({
            commit
        }) {
            commit("getProducts", await ProductRepository.get())
        },
        async getProductCategories({
            commit
        }) {
            commit("loadProductCategories", await ProductRepository.getProductCategories());
        }

    },

    mutations: {
        getCategories: (state, response) => {
            const {
                data
            } = response;
            state.categories = data;
        },

        getProducts: (state, response) => {
            const {
                data
            } = response;
            state.products = data;
        },

        loadCartProducts: (state) => {
            state.carts = Vue.prototype.$cart.getCarts();
        },

        removeCartProduct: (state, product) => {
            state.carts = Vue.prototype.$cart.remove(product);
        },

        loadProductCategories: (state, response) => {
            const {
                data
            } = response;
            state.productCategories = data
        }
    },

    getters: {
        getTotalCartPrice: () => {
            return Vue.prototype.$cart.getTotalPrice();
        }
    }

    // strict: true
});

export default store;