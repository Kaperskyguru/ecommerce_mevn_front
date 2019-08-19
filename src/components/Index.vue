<template>
  <div>
    <div class="section">
      <!-- container -->
      <div class="container">
        <div class="row">
          <collections
            v-for="( category, index ) in randomCategories"
            :category="category"
            :key="index"
          ></collections>
        </div>
      </div>
      <!-- /container -->
    </div>

    <!-- SECTION -->
    <div class="section">
      <!-- container -->
      <div class="container">
        <products></products>
      </div>
      <!-- /container -->
    </div>

    <!-- HOT DEAL SECTION -->
    <div id="hot-deal" class="section">
      <!-- container -->
      <div class="container">
        <hot-deal></hot-deal>
      </div>
      <!-- /container -->
    </div>
    <!-- /HOT DEAL SECTION -->

    <!-- SECTION -->
    <div class="section">
      <!-- container -->
      <div class="container">
        <top-selling></top-selling>
      </div>
      <!-- /container -->
    </div>

    <!-- SECTION -->
    <div class="section">
      <!-- container -->
      <div class="container">
        <top-sellings-list></top-sellings-list>
      </div>
      <!-- /container -->
    </div>

    <!-- NEWSLETTER -->
    <div id="newsletter" class="section">
      <!-- container -->
      <div class="container">
        <newsletter></newsletter>
      </div>
      <!-- /container -->
    </div>
    <!-- /NEWSLETTER -->
  </div>
</template>

<script>
import Collections from "./Collections.vue";
import Products from "./Products.vue";
import TopSelling from "./TopSelling.vue";
import TopSellingsList from "./TopSellingsList.vue";
import HotDeal from "./HotDeal.vue";
import Newsletter from "./Newsletter.vue";

import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  components: {
    Collections,
    Products,
    TopSelling,
    TopSellingsList,
    HotDeal,
    Newsletter
  },

  computed: {
    ...mapState(["categories"]),

    randomCategories() {
      return this.getRandomCollections();
    }
  },
  created() {},

  methods: {
    getRandomCollections() {
      const shuffled = this.categories.sort(function() {
        return 0.5 - Math.random();
      });
      return shuffled.slice(0, 3);
    }
  }
};
</script>
