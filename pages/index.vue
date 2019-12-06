<template>
  <div class="container">
    <section class="landing-header">
      <div class="landing-header-image"></div>
      <div class="landing-header-content">
        <h1 class="landing-header-title">Super Amazing Promo</h1>
        <h3 class="landing-header-subtitle">Super Amazing Promo Subtitle</h3>
        <button class="btn btn-primary">Learn More!</button>
      </div>
    </section>
    <section class="featured-course">
      <Courses />
    </section>
    <section class="featured-articles">
      <Articles />
    </section>
  </div>
</template>

<script>
import Courses from "~/components/Courses.vue";
import Articles from "~/components/Articles.vue";

export default {
  components: {
    Courses,
    Articles
  }
};
</script>

<style lang="scss">
.landing-header {
  width: 100%;
  height: 350px;
  &-title {
    font-size: 2.8rem;
    padding: 1rem 0;
  }
  &-subtitle {
    font-size: 1.8rem;
    padding: 1rem 0;
  }
  &-image {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        to right bottom,
        rgba(16, 26, 15, 0.8),
        rgba(107, 107, 107, 0.8)
      ),
      url("../static/emile-perron.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  &-content {
    position: absolute;
    top: 20%;
    left: 15%;
    color: white;
  }
}
</style>
