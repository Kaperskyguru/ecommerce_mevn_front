<template>
  <div class="row">
    <div class="col-md-12">
      <ul class="breadcrumb-tree">
        <li>
          <router-link tag="li" to="/">
            <a>Home</a>
          </router-link>
        </li>
        <li>
          <a>All Categories</a>
        </li>
        <router-link tag="li" :to="{name:'products', params:{ category: product.category_id }}">
          <a>{{ product.category }}</a>
        </router-link>
        <li class="active">{{ product.name }}</li>
      </ul>
    </div>
  </div>
  <!-- /row -->
</template>
<script>
export default {
  props: ["product"]
};
</script>
