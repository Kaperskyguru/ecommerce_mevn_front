<template>
  <div class="col-md-4 col-xs-6">
    <div class="shop">
      <div class="shop-img">
        <img src="assets/img/shop01.png" alt />
      </div>
      <div class="shop-body">
        <h3>
          {{ category.name }}
          <br />Collection
        </h3>

        <router-link
          class="nav-link cta-btn"
          :to="{name:'products', params:{ category: category.category_id }}"
        >
          Shop now
          <i class="fa fa-arrow-circle-right"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["category"]
};
</script>
