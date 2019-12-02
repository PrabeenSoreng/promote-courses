<template>
  <div class="container">
    <header class="header">
      <h1>Header</h1>
    </header>
    <div class="landing-header">
      <div class="landing-header-image"></div>
      <div class="landing-header-content">
        <h1 class="header-1">Super Amazing Promo</h1>
        <h3 class="header-3">Super Amazing Promo Subtitle</h3>
        <button class="btn btn-primary">Learn More!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.landing-header {
  width: 100%;
  height: 350px;
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
