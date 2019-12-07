<template>
  <form action="#">
    <h1>Login</h1>
    <div class="social-container">
      <a href="#" class="social"
        ><i
          ><font-awesome-icon
            :icon="['fab', 'facebook']"
            style="font-size: 30px;"/></i
      ></a>
      <a href="#" class="social"
        ><i
          ><font-awesome-icon
            :icon="['fab', 'google']"
            style="font-size: 30px"/></i
      ></a>
      <a href="#" class="soclial"
        ><i
          ><font-awesome-icon
            :icon="['fab', 'linkedin']"
            style="font-size: 30px"/></i
      ></a>
    </div>
    <span>or use your account</span>
    <input type="text" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <a href="#">Forgot your password ?</a>
    <a href="#" class="btn btn-animated">Login</a>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        email: "",
        password: ""
      }
    };
  }
};
</script>
