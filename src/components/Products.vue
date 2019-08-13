<template>
  <div class="row">
    <!-- section title -->
    <div class="col-md-12">
      <div class="section-title">
        <h3 class="title">New Products</h3>
        <div class="section-nav">
          <ul class="section-tab-nav tab-nav">
            <li class="active">
              <a data-toggle="tab" href="#tab1">Laptops</a>
            </li>
            <li>
              <a data-toggle="tab" href="#tab1">Smartphones</a>
            </li>
            <li>
              <a data-toggle="tab" href="#tab1">Cameras</a>
            </li>
            <li>
              <a data-toggle="tab" href="#tab1">Accessories</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- /section title -->

    <!-- Products tab & slick -->
    <div class="col-md-12">
      <div class="row">
        <div class="products-tabs">
          <!-- tab -->
          <div id="tab1" class="tab-pane active">
            <div class="products-slick" data-nav="#slick-nav-1">
              <product v-for="(product, index) in products" :key="index" :product="product"></product>
            </div>
            <div id="slick-nav-1" class="products-slick-nav"></div>
          </div>
          <!-- /tab -->
        </div>
      </div>
    </div>
    <!-- Products tab & slick -->
  </div>
</template>
<script scoped>
/* eslint-disable no-console */
/* eslint-disable no-undef */

import Product from "./Product.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  components: {
    Product
  },

  computed: {
    ...mapState(["products"])
  },

  created() {
    console.log("Created");
  },

  methods: {},

  mounted() {
    console.log("Mounted");
    $(".products-slick").each(function() {
      var $this = $(this);
      var $nav = $this.attr("data-nav");

      $this.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        speed: 300,
        dots: false,
        arrows: true,
        appendArrows: $nav ? $nav : false,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    });
  },

  updated() {
    console.log("Updated");
  }
  // mounted() {}
};
</script>
