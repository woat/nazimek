<template>
  <div class="AboutUs">
    <section class="hero is-large banner">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title banner-title">
            THE NEW FRONTIER.
          </h1>
          <h2 class="subtitle banner-subtext">
            A new generation commited to delivering excellence.
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About Us'
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
  background-image: url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D");
  height: 100%;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(40%);
}
</style>
