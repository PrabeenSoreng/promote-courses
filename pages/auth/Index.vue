<template>
  <div class="auth-container" id="auth-container">
    <div class="form-container signup-container">
      <Signup />
    </div>
    <div class="form-container login-container">
      <Login />
    </div>
    <div class="overlay-container">
      <div class="overlay">
        <div class="overlay-panel overlay-left">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us login with your personal info</p>
          <a href="#" class="btn btn-transparent" id="login">Login</a>
        </div>
        <div class="overlay-panel overlay-right">
          <h1>Hello</h1>
          <p>Enter your personal details and start your journey with us</p>
          <a href="#" class="btn btn-transparent" id="signup">Sign Up</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Signup from "~/components/auth/Signup.vue";
import Login from "~/components/auth/Login.vue";

export default {
  components: {
    Signup,
    Login
  },
  mounted() {
    const signupButton = document.getElementById("signup");
    const loginButton = document.getElementById("login");
    const authContainer = document.getElementById("auth-container");

    signupButton.addEventListener("click", () => {
      authContainer.classList.add("right-panel-active");
    });
    loginButton.addEventListener("click", () => {
      authContainer.classList.remove("right-panel-active");
    });
  }
};
</script>
