<template>
  <div>
    <headers></headers>
    <router-view></router-view>
    <!-- SECTION -->
    <div class="section">
      <!-- container -->
      <div class="container">
        <collections></collections>
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
import Headers from "./components/Header.vue";
import Collections from "./components/Collections.vue";
import Products from "./components/Products.vue";
import TopSelling from "./components/TopSelling.vue";
import TopSellingsList from "./components/TopSellingsList.vue";
import HotDeal from "./components/HotDeal.vue";
import Newsletter from "./components/Newsletter.vue";

export default {
  name: "app",
  components: {
    Headers,
    Collections,
    Products,
    TopSelling,
    TopSellingsList,
    HotDeal,
    Newsletter
  }
}
</script>

<style>
</style>
