<template>
  <div>
    <!-- BREADCRUMB -->
    <div id="breadcrumb" class="section">
      <!-- container -->
      <div class="container">
        <!-- row -->
        <bread-crumb></bread-crumb>
      </div>
      <!-- /container -->
    </div>
    <!-- /BREADCRUMB -->

    <!-- SECTION -->
    <div class="section">
      <!-- container -->
      <div class="container">
        <!-- row -->
        <product-detail></product-detail>
        <!-- /row -->
      </div>
      <!-- /container -->
    </div>
    <!-- /SECTION -->

    <!-- Section -->
    <div class="section">
      <!-- container -->
      <div class="container">
        <!-- row -->
        <related-products></related-products>
      </div>
      <!-- /container -->
    </div>
    <!-- /Section -->

    <!-- NEWSLETTER -->
    <div id="newsletter" class="section">
      <!-- container -->
      <div class="container">
        <!-- row -->
        <newsletter></newsletter>
        <!-- /row -->
      </div>
      <!-- /container -->
    </div>
    <!-- /NEWSLETTER -->
  </div>
</template>

<script>
import BreadCrumb from "./BreadCrumb.vue";
import RelatedProducts from "./RelatedProducts.vue";
import Newsletter from "./Newsletter.vue";
import ProductDetail from "./ProductDetail.vue";

export default {
  components: {
    BreadCrumb,
    RelatedProducts,
    Newsletter,
    ProductDetail
  }
};
</script>

