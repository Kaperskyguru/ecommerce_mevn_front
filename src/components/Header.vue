<template>
  <div>
    <header>
      <!-- TOP HEADER -->
      <div id="top-header">
        <div class="container">
          <ul class="header-links pull-left">
            <li>
              <a href="#"> <i class="fa fa-phone"></i> +234 (0)8145655380 </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-envelope-o"></i> solomoneseme@gmail.com
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-map-marker"></i> 24 wokenkoro Street
              </a>
            </li>
          </ul>
          <ul class="header-links pull-right">
            <li>
              <a href="#"> <i class="fa fa-dollar"></i> USD </a>
            </li>
            <li>
              <a href="#"> <i class="fa fa-user-o"></i> My Account </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- /TOP HEADER -->

      <!-- MAIN HEADER -->
      <div id="header">
        <!-- container -->
        <div class="container">
          <!-- row -->
          <div class="row">
            <!-- LOGO -->
            <div class="col-md-3">
              <div class="header-logo">
                <router-link to="/" class="logo">
                  <!-- <a href="#" class="logo"> -->
                  <img src="assets/img/logo.png" alt />
                  <!-- </a> -->
                </router-link>
              </div>
            </div>
            <!-- /LOGO -->

            <!-- SEARCH BAR -->
            <div class="col-md-6">
              <div class="header-search">
                <form>
                  <select class="input-select">
                    <option value="0">All Categories</option>
                    <option
                      v-for="(category, index) in categories"
                      :key="index"
                      :value="category.category_id"
                      >{{ category.name }}</option
                    >
                  </select>
                  <input class="input" placeholder="Search here" />
                  <button class="search-btn">Search</button>
                </form>
              </div>
            </div>
            <!-- /SEARCH BAR -->

            <!-- ACCOUNT -->
            <div class="col-md-3 clearfix">
              <div class="header-ctn">
                <!-- Wishlist -->
                <div>
                  <a href="#">
                    <i class="fa fa-heart-o"></i>
                    <span>Your Wishlist</span>
                    <div class="qty">2</div>
                  </a>
                </div>
                <!-- /Wishlist -->

                <!-- Cart -->
                <div class="dropdown">
                  <a
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="true"
                  >
                    <i class="fa fa-shopping-cart"></i>
                    <span>Your Cart</span>
                    <div class="qty">{{ carts.length }}</div>
                  </a>
                  <div class="cart-dropdown">
                    <div class="cart-list">
                      <div
                        class="product-widget"
                        v-for="(product, i) in carts"
                        :key="i"
                      >
                        <div class="product-img">
                          <img src="assets/img/product01.png" />
                        </div>
                        <div class="product-body">
                          <h3 class="product-name">
                            <a href="#">{{ product.name }}</a>
                          </h3>
                          <h4 class="product-price">
                            <span class="qty">{{ product.quantity }}x</span>
                            ${{ product.total }}
                          </h4>
                        </div>
                        <button
                          class="delete"
                          v-on:click="removeProduct(product)"
                        >
                          <i class="fa fa-close"></i>
                        </button>
                      </div>
                    </div>
                    <div class="cart-summary">
                      <small>{{ carts.length }} Item(s) selected</small>
                      <h5>SUBTOTAL: ${{ getTotalPrice() }}</h5>
                    </div>
                    <div class="cart-btns">
                      <a href="#">View Cart</a>
                      <router-link to="/checkout">
                        Checkout
                        <i class="fa fa-arrow-circle-right"></i>
                      </router-link>
                    </div>
                  </div>
                </div>
                <!-- /Cart -->

                <!-- Menu Toogle -->
                <div class="menu-toggle">
                  <a href="#">
                    <i class="fa fa-bars"></i>
                    <span>Menu</span>
                  </a>
                </div>
                <!-- /Menu Toogle -->
              </div>
            </div>
            <!-- /ACCOUNT -->
          </div>
          <!-- row -->
        </div>
        <!-- container -->
      </div>
      <!-- /MAIN HEADER -->
    </header>
    <!-- /HEADER -->

    <!-- NAVIGATION -->
    <nav id="navigation">
      <!-- container -->
      <div class="container">
        <!-- responsive-nav -->
        <div id="responsive-nav">
          <!-- NAV -->
          <ul class="main-nav nav navbar-nav">
            <router-link to="/" tag="li" class="logo">
              <a>Home</a>
            </router-link>
            <!-- ISSUE OF LOADING A CATEGORIES HERE -->
            <router-link
              v-for="(category, index) in categories"
              :key="index"
              tag="li"
              :to="{
                name: 'products',
                params: { category: category.category_id }
              }"
            >
              <a>{{ category.name }}</a>
            </router-link>
          </ul>
          <!-- /NAV -->
        </div>
        <!-- /responsive-nav -->
      </div>
      <!-- /container -->
    </nav>
    <!-- /NAVIGATION -->
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      // carts: this.$store.state.carts
    };
  },

  computed: {
    ...mapState(["categories", "carts"]),
    ...mapMutations(["removeCartProduct"])
  },
  created() {
    this.$store.commit("loadCartProducts");
    // this.loadCartProducts();
  },
  methods: {
    // loadCartProducts() {
    //   this.carts = this.$cart.getCarts();
    // },
    getTotalPrice() {
      return this.$cart.getTotalPrice();
    },
    removeProduct(product) {
      if (this.$cart.has(product)) {
        this.$store.commit("removeCartProduct", product);
      }
    }
  }
};
</script>
