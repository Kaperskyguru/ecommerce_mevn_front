<template>
  <li>
    <div class="review-heading">
      <h5 class="name">{{ review.customer_id }}</h5>
      <p class="date">{{new Date(review.created_on)}}</p>
      <div class="review-rating">
        <i class="fa fa-star" v-for="(star, index) in review.rating" :key="index"></i>
        <i class="fa fa-star-o empty" v-for="(emptystar, i) in emptyStars" :key="i + 5"></i>
      </div>
    </div>
    <div class="review-body">
      <p>{{review.review}}</p>
    </div>
  </li>
  <!-- 27 DEC 2018, 8:0 PM -->
</template>
<script>
export default {
  props: ["review"],
  data() {
    return {
      emptyStars: 5 - this.review.rating
    };
  }
};
</script>