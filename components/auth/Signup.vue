<template>
  <form action="#">
    <h1>Create Account</h1>
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
    <span>or use your email for registeration</span>
    <input type="text" placeholder="Name" />
    <input type="text" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <a href="#" class="btn btn-animated">Sign Up</a>
  </form>
</template>
