<template>
  <!-- SECTION -->
  <div class="section">
    <!-- container -->
    <div class="container">
      <!-- row -->
      <div class="row">
        <!-- ASIDE -->
        <div id="aside" class="col-md-3">
          <!-- aside Widget -->
          <div class="aside">
            <h3 class="aside-title">Categories</h3>
            <div class="checkbox-filter" v-for="(category, index) in categories" :key="index">
              <div class="input-checkbox">
                <input type="checkbox" :id="`category-${index +1}`" />
                <label :for="`category-${index +1}`">
                  <span></span>
                  {{ category.name }}
                  <small>({{ totalProductsInCategory(category.category_id) }})</small>
                </label>
              </div>
            </div>
          </div>
          <!-- /aside Widget -->

          <!-- aside Widget -->
          <div class="aside">
            <h3 class="aside-title">Price</h3>
            <div class="price-filter">
              <div id="price-slider"></div>
              <div class="input-number price-min">
                <input id="price-min" type="number" />
                <span class="qty-up">+</span>
                <span class="qty-down">-</span>
              </div>
              <span>-</span>
              <div class="input-number price-max">
                <input id="price-max" type="number" />
                <span class="qty-up">+</span>
                <span class="qty-down">-</span>
              </div>
            </div>
          </div>
          <!-- /aside Widget -->

          <!-- aside Widget -->
          <div class="aside">
            <h3 class="aside-title">Brand</h3>
            <div class="checkbox-filter">
              <div class="input-checkbox">
                <input type="checkbox" id="brand-1" />
                <label for="brand-1">
                  <span></span>
                  SAMSUNG
                  <small>(578)</small>
                </label>
              </div>
              <div class="input-checkbox">
                <input type="checkbox" id="brand-2" />
                <label for="brand-2">
                  <span></span>
                  LG
                  <small>(125)</small>
                </label>
              </div>
              <div class="input-checkbox">
                <input type="checkbox" id="brand-3" />
                <label for="brand-3">
                  <span></span>
                  SONY
                  <small>(755)</small>
                </label>
              </div>
              <div class="input-checkbox">
                <input type="checkbox" id="brand-4" />
                <label for="brand-4">
                  <span></span>
                  SAMSUNG
                  <small>(578)</small>
                </label>
              </div>
              <div class="input-checkbox">
                <input type="checkbox" id="brand-5" />
                <label for="brand-5">
                  <span></span>
                  LG
                  <small>(125)</small>
                </label>
              </div>
              <div class="input-checkbox">
                <input type="checkbox" id="brand-6" />
                <label for="brand-6">
                  <span></span>
                  SONY
                  <small>(755)</small>
                </label>
              </div>
            </div>
          </div>
          <!-- /aside Widget -->

          <!-- aside Widget -->
          <div class="aside">
            <h3 class="aside-title">Top selling</h3>
            <div class="product-widget">
              <div class="product-img">
                <img src="assets/img/product01.png" alt />
              </div>
              <div class="product-body">
                <p class="product-category">Category</p>
                <h3 class="product-name">
                  <a href="#">product name goes here</a>
                </h3>
                <h4 class="product-price">
                  $980.00
                  <del class="product-old-price">$990.00</del>
                </h4>
              </div>
            </div>

            <div class="product-widget">
              <div class="product-img">
                <img src="assets/img/product02.png" alt />
              </div>
              <div class="product-body">
                <p class="product-category">Category</p>
                <h3 class="product-name">
                  <a href="#">product name goes here</a>
                </h3>
                <h4 class="product-price">
                  $980.00
                  <del class="product-old-price">$990.00</del>
                </h4>
              </div>
            </div>

            <div class="product-widget">
              <div class="product-img">
                <img src="assets/img/product03.png" alt />
              </div>
              <div class="product-body">
                <p class="product-category">Category</p>
                <h3 class="product-name">
                  <a href="#">product name goes here</a>
                </h3>
                <h4 class="product-price">
                  $980.00
                  <del class="product-old-price">$990.00</del>
                </h4>
              </div>
            </div>
          </div>
          <!-- /aside Widget -->
        </div>
        <!-- /ASIDE -->

        <!-- STORE -->
        <div id="store" class="col-md-9">
          <!-- store top filter -->
          <div class="store-filter clearfix">
            <div class="store-sort">
              <label>
                Sort By:
                <select class="input-select">
                  <option value="0">Popular</option>
                  <option value="1">Position</option>
                </select>
              </label>

              <label>
                Show:
                <select class="input-select">
                  <option value="0">20</option>
                  <option value="1">50</option>
                </select>
              </label>
            </div>
            <ul class="store-grid">
              <li class="active">
                <i class="fa fa-th"></i>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-th-list"></i>
                </a>
              </li>
            </ul>
          </div>
          <!-- /store top filter -->

          <!-- store products -->
          <div class="row">
            <!-- product -->
            <!-- ============================================================ -->
            <span v-for="( product, index ) in catProducts" :key="index">
              <div class="col-md-4 col-xs-6">
                <div class="product">
                  <div class="product-img">
                    <img src="assets/img/product01.png" alt />
                    <div class="product-label">
                      <span class="sale">-30%</span>
                      <span class="new">NEW</span>
                    </div>
                  </div>
                  <div class="product-body">
                    <p class="product-category">{{ product.category }}</p>
                    <h3 class="product-name">
                      <router-link
                        :to="{name:'product', params:{ id: product.product_id }}"
                      >{{product.name}}</router-link>
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
                        <span class="tooltipp">add to wishlist</span>
                      </button>
                      <button class="add-to-compare">
                        <i class="fa fa-exchange"></i>
                        <span class="tooltipp">add to compare</span>
                      </button>
                      <button class="quick-view">
                        <i class="fa fa-eye"></i>
                        <span class="tooltipp">quick view</span>
                      </button>
                    </div>
                  </div>
                  <div class="add-to-cart">
                    <button class="add-to-cart-btn" v-on:click="addToCart(product)">
                      <i class="fa fa-shopping-cart"></i> add to cart
                    </button>
                  </div>
                </div>
              </div>
              <!-- /product -->
              <div class="clearfix visible-sm visible-xs"></div>
            </span>
            <!-- ================================================================================================ -->
          </div>
          <!-- store bottom filter -->
          <div class="store-filter clearfix">
            <span class="store-qty">Showing 20-100 products</span>
            <ul class="store-pagination">
              <li class="active">1</li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-angle-right"></i>
                </a>
              </li>
            </ul>
          </div>
          <!-- /store bottom filter -->
        </div>
        <!-- /STORE -->
      </div>
      <!-- /row -->
    </div>
    <!-- /container -->
  </div>
  <!-- /SECTION -->
</template>

<script>
import Repository from "../repositories/RepositoryFactory";
import { errorAlert, successAlert } from "../assets/utils/sweetAlerts";
import { mapState } from "vuex";
const ProductsRepository = Repository.get("products");
export default {
  data() {
    return {
      catProducts: [],
      totalProducts: []
    };
  },

  created() {
    this.getProducts(this.$route.params.category);
  },

  computed: {
    ...mapState(["productCategories"]),
    ...mapState(["categories"])
  },

  methods: {
    async getProducts(id) {
      const { data } = await ProductsRepository.getProductsByCategory(id);
      this.catProducts = data;
    },

    addToCart(product) {
      if (this.$cart.has(product)) {
        errorAlert();
      } else {
        this.$cart.add(product);
        successAlert();
      }
    },

    // topSelling() {},
    totalProductsInCategory(cat) {
      let cats = this.productCategories.filter(value => {
        return value.category_id == cat;
      });
      return cats.length;
    }
  },

  beforeRouteUpdate(to, from, next) {
    this.getProducts(to.params.category);
    next();
  }
};
</script>
