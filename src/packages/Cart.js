/* eslint-disable no-console */
export default {
    install: function (Vue) {
        Vue.cart = {
            cart: [],
            add: function (product) {
                this.cart.push(product);
                localStorage.setItem("product_" + product.product_id, JSON.stringify(product));
            },

            remove: function (product) {
                this.cart.splice(this.cart.indexOf(product), 1);
                localStorage.removeItem("product_" + product.product_id);
            },
            has: function (product) {
                if (localStorage.getItem("product_" + product.product_id)) {
                    return true;
                }
                return false;
            },
            getProduct: function (product) {
                if (localStorage.getItem("product_" + product.product_id)) {
                    return localStorage.getItem("product_" + product.product_id);
                }
            },
            getCarts: function () {

                for (const key in localStorage) {
                    if (localStorage.getItem(key) && key.startsWith("product_")) {
                        this.cart.push(JSON.parse(localStorage.getItem(key)))
                    }
                }
                return this.cart
            },

            getTotalPrice: function () {
                let amount = 0;

                for (const key in this.cart) {
                    if (this.cart.hasOwnProperty(key)) {
                        const element = this.cart[key];
                        amount += parseFloat(element.price);
                    }
                }

                return amount.toFixed(2);
            }
        };

        Object.defineProperty(Vue.prototype, "$cart", {
            get() {
                return Vue.cart;
            }
        });
    }
};