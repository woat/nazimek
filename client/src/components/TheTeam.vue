<template>
  <div class="TheTeam">
   <section class="hero is-large banner">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title banner-title">
            LEADERS, BUILDERS, INNOVATORS.
          </h1>
          <h2 class="subtitle banner-subtext">
            A solid focus built upon a strong foundation of leadership.
          </h2>
        </div>
      </div>
    </section>
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container content">
          <h1 class="title has-text-centered is-3">
            We are leaders. We are builders. We are innovators.
          </h1>
          <h1 class="title has-text-centered is-1">We are Nazimek Realty Group.
          </h1>
        </div>
      </div>
    </section>
		<!--
    <section class="hero is-small">
      <div class="hero-body">
        <div class="container content has-text-centered">
          <h1 class="title">Senior Advisory Board</h1>
          <div class="columns">
            <div class="column">
              <h1 class="title is-5">Michael Nazimek</h1>
              <h3 class="subtitle is-7">Director of Real Estate / Princpal Broker</h3>
              <img class="pImg" style="object-position: center 30%;" src="../images/p1.jpg">
            </div>
            <div class="column">
              <h1 class="title is-5">Benjamin Rothschild</h1>
              <h3 class="subtitle is-7">Managing Director</h3>
              <img class="pImg" src="../images/p2.jpg">
            </div>
            <div class="column">
              <h1 class="title is-5">Gregory Alonzo</h1>
              <h3 class="subtitle is-7">Senior Portfolio Manager</h3>
              <img class="pImg" style="object-position: center 15%;" src="../images/p3.jpg">
            </div>
            <div class="column">
              <h1 class="title is-5">Jin Yamaguchi</h1>
              <h3 class="subtitle is-7">Operations Manager</h3>
              <img class="pImg" src="../images/p4.jpg">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container content has-text-centered">
          <h1 class="title">Licensed R.E. Agents</h1>
          <div class="columns">
            <div class="column">
              <h1 class="title is-5">Robert Clarke</h1>
              <img class="pImg" style="object-position: center 10%" src="../images/a1.jpg">
            </div>
            <div class="column">
              <h1 class="title is-5">Joanne Rutherford</h1>
              <img class="pImg" src="../images/a2.jpeg">
            </div>
            <div class="column">
              <h1 class="title is-5">Dominic Green</h1>
              <img class="pImg" src="../images/a3.jpeg">
            </div>
            <div class="column">
              <h1 class="title is-5">Esteban Garcia</h1>
              <img class="pImg" src="../images/a4.jpeg">
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <h1 class="title is-5">Katheryn Nolan</h1>
              <img class="pImg" style="object-position: center 15%;" src="../images/a5.jpg">
            </div>
            <div class="column">
              <h1 class="title is-5">Jamie Stynbek</h1>
              <img class="pImg" src="../images/a6.jpg">
            </div>
            <div class="column">
              <h1 class="title is-5">Maria Hernandez</h1>
              <img class="pImg" src="../images/a7.jpg">
            </div>
            <div class="column">
              <h1 class="title is-5">Cindy Stoen</h1>
              <img class="pImg" style="object-position: 70%;" src="../images/a8.jpg">
            </div>
          </div>
        </div>
      </div>
    </section>
		-->
  </div>
</template>

<script>
export default {
  name: 'TheTeam'
}
</script>

<style scoped>
.banner:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  z-index: -1;
  display: block;
  background-image: url("https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1351&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D");
  height: 100%;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(40%);
}

.pImg {
  height: 256px;
  width: 256px;
  object-fit: cover;
  object-position: center top;
}
</style>
