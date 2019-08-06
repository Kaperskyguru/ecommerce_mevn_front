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
        <product-detail :product="product"></product-detail>
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

<script scoped>
import BreadCrumb from "./BreadCrumb.vue";
import RelatedProducts from "./RelatedProducts.vue";
import Newsletter from "./Newsletter.vue";
import ProductDetail from "./ProductDetail.vue";

import Repository from "../repositories/RepositoryFactory";
const ProductModel = Repository.get("products");

export default {
  components: {
    BreadCrumb,
    RelatedProducts,
    Newsletter,
    ProductDetail
  },

  data() {
    return {
      product: {}
    };
  },

  created() {
    this.getProduct();
  },
  methods: {
    async getProduct() {
      const { data } = await ProductModel.getProduct(this.$route.params.id);
      this.product = data;
    }
  }
};
</script>

