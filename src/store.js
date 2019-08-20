import Vue from 'vue'
import Vuex from 'vuex'

import Repository from "./repositories/RepositoryFactory";
const CategoryRepository = Repository.get("category");
const ProductRepository = Repository.get("products");
const AttributeRepository = Repository.get("attributes");

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        categories: [],
        products: [],
        carts: [],
        productCategories: [],
        colorAttributes: ['Red'],
        sizeAttributes: ['S']
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
        },
        async loadSizeAttributes({
            commit,
            attribute
        }) {
            commit("loadSizeAttributes", await AttributeRepository.find(1));
        },
        async loadColorAttributes({
            commit,
            attribute
        }) {
            commit("loadColorAttributes", await AttributeRepository.find(2));
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
        },
        loadSizeAttributes: (state, response) => {
            const {
                data
            } = response;
            state.sizeAttributes = data;
        },
        loadColorAttributes: (state, response) => {
            const {
                data
            } = response;
            state.colorAttributes = data;
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