<template>
  <div id="review-form">
    <div class="review-form">
      <input class="input" type="text" v-model="review.name" placeholder="Your Name" />
      <input class="input" type="email" v-model="review.email" placeholder="Your Email" />
      <textarea class="input" v-model="review.review" placeholder="Your Review"></textarea>
      <div class="input-rating">
        <span>Your Rating:</span>
        <div class="stars">
          <input id="star5" v-model="review.star" name="rating" value="5" type="radio" />
          <label for="star5"></label>
          <input id="star4" v-model="review.star" name="rating" value="4" type="radio" />
          <label for="star4"></label>
          <input id="star3" v-model="review.star" name="rating" value="3" type="radio" />
          <label for="star3"></label>
          <input id="star2" v-model="review.star" name="rating" value="2" type="radio" />
          <label for="star2"></label>
          <input id="star1" v-model="review.star" name="rating" value="1" type="radio" />
          <label for="star1"></label>
        </div>
      </div>
      <!-- <input type="hidden" v-model="review.product_id" value="productId" /> -->
      <button class="primary-btn" v-on:click="addReview()">Submit</button>
    </div>
  </div>
</template>
<script>
import { successAlert, errorAlert } from "../assets/utils/sweetAlerts";
import reviewRepository from "../repositories/ReviewsRepository";
export default {
  props: ["productId"],
  data() {
    return {
      review: {}
    };
  },
  methods: {
    addReview: async function() {
      this.review.product_id = this.productId;
      const { data } = await reviewRepository.create(this.review);

      if (data.message === "success") {
        successAlert({
          message: "Review saved successfully"
        });
      } else {
        errorAlert({
          message: "Error saving your Review"
        });
      }
      this.review = null;
    }
  }
};
</script>