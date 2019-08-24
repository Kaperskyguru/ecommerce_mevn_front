<template>
  <div class="row">
    <!-- Product main img -->
    <div class="col-md-5 col-md-push-2">
      <div id="product-main-img">
        <div class="product-preview">
          <img src="assets/img/product01.png" alt />
        </div>

        <div class="product-preview">
          <img src="assets/img/product03.png" alt />
        </div>

        <div class="product-preview">
          <img src="assets/img/product06.png" alt />
        </div>

        <div class="product-preview">
          <img src="assets/img/product08.png" alt />
        </div>
      </div>
    </div>
    <!-- /Product main img -->

    <!-- Product thumb imgs -->
    <div class="col-md-2 col-md-pull-5">
      <div id="product-imgs">
        <div class="product-preview">
          <img src="assets/img/product01.png" alt />
        </div>

        <div class="product-preview">
          <img src="assets/img/product03.png" alt />
        </div>

        <div class="product-preview">
          <img src="assets/img/product06.png" alt />
        </div>

        <div class="product-preview">
          <img src="assets/img/product08.png" alt />
        </div>
      </div>
    </div>
    <!-- /Product thumb imgs -->

    <!-- Product details -->
    <div class="col-md-5">
      <div class="product-details">
        <h2 class="product-name">{{ product.name }}</h2>
        <div>
          <div class="product-rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
          </div>
          <a class="review-link">{{reviews.length}} Review(s) | Add your review</a>
        </div>
        <div>
          <h3 class="product-price">
            ${{ product.price }}
            <del class="product-old-price">$990.00</del>
          </h3>
          <span class="product-available">In Stock</span>
        </div>
        <p>{{ product.description }}</p>
        <div class="product-options">
          <label>
            Size
            <select class="input-select">
              <option
                v-for="(attribute, index) in sizeAttributes"
                :key="index"
                :value="attribute.attribute_value_id"
              >{{attribute.value}}</option>
            </select>
          </label>
          <label>
            Color
            <select class="input-select">
              <option
                v-for="(attribute, index) in colorAttributes"
                :key="index"
                :value="attribute.attribute_value_id"
              >{{attribute.value}}</option>
            </select>
          </label>
        </div>

        <div class="add-to-cart">
          <div class="qty-label">
            Qty
            <div class="input-number">
              <input type="number" />
              <span class="qty-up">+</span>
              <span class="qty-down">-</span>
            </div>
          </div>
          <button class="add-to-cart-btn" v-on:click="addToCart(product)">
            <i class="fa fa-shopping-cart"></i> add to cart
          </button>
        </div>

        <ul class="product-btns">
          <li>
            <a href="#">
              <i class="fa fa-heart-o"></i> add to wishlist
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-exchange"></i> add to compare
            </a>
          </li>
        </ul>

        <ul class="product-links">
          <li>Category:</li>
          <li>
            <router-link tag="li" :to="{name:'products', params:{ category: product.category_id }}">
              <a>{{ product.category }}</a>
            </router-link>
          </li>
          <!-- <li>
            <a href="#">Accessories</a>
          </li>-->
        </ul>

        <ul class="product-links">
          <li>Share:</li>
          <li>
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-google-plus"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- /Product details -->

    <!-- Product tab -->
    <div class="col-md-12">
      <div id="product-tab">
        <!-- product tab nav -->
        <ul class="tab-nav">
          <li class="active">
            <a data-toggle="tab" href="#tab1">Description</a>
          </li>
          <li>
            <a data-toggle="tab" href="#tab2">Details</a>
          </li>
          <li>
            <a data-toggle="tab" href="#tab3">Reviews ({{reviews.length}})</a>
          </li>
        </ul>
        <!-- /product tab nav -->

        <!-- product tab content -->
        <div class="tab-content">
          <!-- tab1  -->
          <div id="tab1" class="tab-pane fade in active">
            <div class="row">
              <div class="col-md-12">
                <p>{{ product.description }}</p>
              </div>
            </div>
          </div>
          <!-- /tab1  -->

          <!-- tab2  -->
          <div id="tab2" class="tab-pane fade in">
            <div class="row">
              <div class="col-md-12">
                <p>{{ product.description }}</p>
              </div>
            </div>
          </div>
          <!-- /tab2  -->

          <!-- tab3  -->
          <div id="tab3" class="tab-pane fade in">
            <div class="row">
              <!-- Rating -->
              <div class="col-md-3">
                <ratings :productId="product.product_id"></ratings>
              </div>
              <!-- /Rating -->

              <!-- Reviews -->
              <reviews :productId="product.product_id"></reviews>
              <!-- /Reviews -->

              <!-- Review Form -->
              <div class="col-md-3">
                <add-review :productId="product.product_id"></add-review>
              </div>
              <!-- /Review Form -->
            </div>
          </div>
          <!-- /tab3  -->
        </div>
        <!-- /product tab content  -->
      </div>
    </div>
    <!-- /product tab -->
  </div>
</template>

<script>
import Reviews from "./Reviews.vue";
import AddReview from "./AddReview";
import Ratings from "./Ratings.vue";
import { successAlert, errorAlert } from "../assets/utils/sweetAlerts";
import { mapState } from "vuex";
export default {
  props: ["product"],
  components: {
    Reviews,
    AddReview,
    Ratings
  },

  computed: {
    ...mapState(["sizeAttributes", "colorAttributes", "reviews"])
  },
  methods: {
    addToCart(product) {
      if (this.$cart.has(product)) {
        errorAlert({ message: "Product already added to cart" });
      } else {
        this.$cart.add(product);
        successAlert({
          message: "product added to cart"
        });
      }
    }
  },
  updated() {
    /* eslint-disable */
    // Product Main img Slick
    $("#product-main-img").slick({
      infinite: true,
      speed: 300,
      dots: false,
      arrows: true,
      fade: true,
      asNavFor: "#product-imgs"
    });

    // Product imgs Slick
    $("#product-imgs").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
      focusOnSelect: true,
      centerPadding: 0,
      vertical: true,
      asNavFor: "#product-main-img",
      responsive: [
        {
          breakpoint: 991,
          settings: {
            vertical: false,
            arrows: false,
            dots: true
          }
        }
      ]
    });

    // Product img zoom
    var zoomMainProduct = document.getElementById("product-main-img");
    if (zoomMainProduct) {
      $("#product-main-img .product-preview").zoom();
    }
  }
};
</script>
