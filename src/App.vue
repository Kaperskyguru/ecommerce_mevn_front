<template>
  <div>
    <div id="app">
      <headers></headers>
      <router-view></router-view>
      <!-- SECTION -->
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Headers from "./components/Header.vue";
import MyFooter from "./components/Footer.vue";
export default {
  name: "App",
  components: { Headers, MyFooter },

  updated() {
    this.$store.dispatch("getCategories", { self: this });
    this.$store.dispatch("getProducts", { self: this });
    this.$store.dispatch("getProductCategories", { self: this });
    this.$store.dispatch("loadSizeAttributes", { self: this });
    this.$store.dispatch("loadColorAttributes", { self: this });
  }
};
</script>

<style>
</style>
