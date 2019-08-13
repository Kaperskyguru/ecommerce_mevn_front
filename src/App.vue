<template>
  <div id="app">
    <headers></headers>
    <router-view></router-view>
    <!-- SECTION -->
  </div>
</template>

<script>
import Headers from "./components/Header.vue";

export default {
  name: "App",
  components: { Headers },

  created() {
    this.$store.dispatch("getCategories", { self: this });
    this.$store.dispatch("getProducts", { self: this });
  }
};
</script>

<style>
</style>
