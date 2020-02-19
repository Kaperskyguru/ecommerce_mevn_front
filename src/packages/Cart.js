/* eslint-disable no-console */
export default {
    install: function (Vue) {
        Vue.cart = {
            cart: [],
            add: function (product) {
                if(product.discounted_price != '0.00'){
                    product.total = product.discounted_price * product.quantity;
                    product.realPrice = product.discounted_price;
                } else{
                    product.total = product.price * product.quantity;
                    product.realPrice = product.price;

                }
                
                this.cart.push(product);
                localStorage.setItem("product_" + product.product_id, JSON.stringify(product));
            },

            remove: function (product) {
                this.cart.splice(this.cart.indexOf(product), 1);
                localStorage.removeItem("product_" + product.product_id);
                return this.cart;
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
                let arr = [];
                let local = localStorage;

                for (const key in local) {

                    if (!local.hasOwnProperty(key)) {
                        continue; // skip keys like "setItem", "getItem" etc
                    }
                    if (local.getItem(key) && key.startsWith("product_")) {
                        arr.push(JSON.parse(local.getItem(key)));
                    }
                }
                this.cart = arr;
                return this.cart;
            },

            getTotalPrice: function () {
                let amount = 0;

                let add = (acc, product) => parseFloat(product.total) + acc;

                let result = this.cart.reduce(add, amount);

                return result.toFixed(2);
            },

            update: function(product, col, value){
                if (this.has(product)) {
                    product[col] = value;
                    return true;
                }
                return false;
            }
        };



        Object.defineProperty(Vue.prototype, "$cart", {
            get() {
                return Vue.cart;
            }
        });
    }
};