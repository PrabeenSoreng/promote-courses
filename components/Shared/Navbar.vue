<template>
  <header class="header">
    <nav class="navigation">
      <div class="navigation-left">
        <div class="nav-brand">Brand</div>
        <div class="nav-links">
          <nuxt-link to="/">Home</nuxt-link>
          <a href="#">Courses</a>
          <a href="#">Blogs</a>
          <a href="#">About</a>
          <a href="#">CV</a>
        </div>
      </div>
      <div class="navigation-right">
        <div class="nav-links">
          <template v-if="false">
            <p>
              <Strong>Welcome User!</Strong>
            </p>
            <!-- If Admin -->
            <a href="#">Instructor</a>
            <a href="#">Logout</a>
          </template>
          <template v-else>
            <nuxt-link to="/auth/index">Login</nuxt-link>
          </template>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.nav-brand {
  display: inline-block;
  font-size: 3rem;
  color: blue;
}
.navigation {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &-left {
    display: flex;
    align-items: center;
  }
  &-right {
    display: flex;
    align-items: center;
  }
}
.nav-links {
  display: flex;
  padding: 10px;
  p {
    align-self: center;
    font-size: 1.5rem;
  }
  a {
    text-decoration: none;
    margin: 0 1rem;
    font-size: 1.8rem;
    color: grey;
  }
}
</style>