<template>
  <div class="product">
    <div class="product-img">
      <img src="assets/img/product01.png" alt />
      <div class="product-label">
        <span class="sale">-30%</span>
        <span class="new">NEW</span>
      </div>
    </div>
    <div class="product-body">
      <p class="product-category">Category</p>
      <h3 class="product-name">
        <router-link :to="{name:'product', params:{ id: product.product_id }}">{{product.name}}</router-link>
      </h3>
      <h4 class="product-price">
        ${{product.discounted_price}}
        <del class="product-old-price">${{product.price}}</del>
      </h4>
      <div class="product-rating">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
      </div>
      <div class="product-btns">
        <button class="add-to-wishlist">
          <i class="fa fa-heart-o"></i>
          <span class="tooltipp">
            add to
            wishlist
          </span>
        </button>
        <button class="add-to-compare">
          <i class="fa fa-exchange"></i>
          <span class="tooltipp">
            add to
            compare
          </span>
        </button>
        <button class="quick-view">
          <i class="fa fa-eye"></i>
          <span class="tooltipp">
            quick
            view
          </span>
        </button>
      </div>
    </div>
    <div class="add-to-cart">
      <button class="add-to-cart-btn" v-on:click="addToCart(product)">
        <i class="fa fa-shopping-cart"></i> add to cart
      </button>
      <span class="text-danger" id="info">{{error}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {
      error: ""
    };
  },

  methods: {
    addToCart(product) {
      if (this.$cart.has(product)) {
        this.error = "Product already added to cart";
      } else {
        this.$cart.add(product);
      }
    }
  }
};
</script>

