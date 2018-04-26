<template>
  <div class="nbar">
    <nav class="navbar">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img src="https://icon-icons.com/icons2/37/PNG/96/irisscan_irisscan_eye_iris_3003.png">
          <span class="brand">
            <span class="brand-title">Nazimek</span><br>
            <span class="brand-sub">Realty Group</span>
          </span>
        </router-link>
        <button class="navbar-burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="navbar-menu" id="navMenu">
        <div class="navbar-end items">
          <router-link to="/about" class="navbar-item">About Us</router-link>
          <router-link to="/team" class="navbar-item" href="#">The Team</router-link>
          <!--<router-link to="#test" class="navbar-item"><span class="button">Contact</span></router-link>-->
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>
