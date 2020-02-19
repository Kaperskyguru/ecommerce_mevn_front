<template>
  <div class="col-md-6">
    <div id="reviews">
      <ul class="reviews">
        <review :review="review" v-for="(review, i) in reviews" :key="i"></review>
      </ul>
      <ul class="reviews-pagination">
        <li class="active">1</li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-angle-right"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Review from "./Review";
import { mapState } from "vuex";
export default {
  data() {
    return {
      // reviews: [1, 2, 3]
    };
  },
  components: { Review },

  computed: {
    ...mapState(["reviews"])
  },
  created() {}
};
</script>
