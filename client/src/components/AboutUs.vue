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
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container content">
          <h1 class="title">Our vision starts with you.</h1>
          <p>
            Nazimek Realty Group is a privately-held real esate development and investment firm specializing in the acquisition, development, and management of real estate &mdash; from large scale public housing to industrial and commercial real estate. We execute mutually beneficial real estate transactions with <a href="http://strikerinvestmentrealty.com">Striker Investment Realty</a>.
          </p>
          <p>
            From the beginning, NRG was built to be a leading force behind the adaptive reuse of real estate of any nature throughout the country, solving some of America's most difficult real estate challenges. While each acquisition involves it's own specific strategy, many of our projects share similar structures and traits. This allows us to build a cumulutive network of knowledge amongst our team to aquire better investments, develop better strategies, and most importantly, secure better returns.
          </p>
          <p>
            Nazimek Realty Group has a track record of generating substanstial returns with a patient and disiplined investment approach. Not only do we invest in real estate, but we are also commited to investing in the success of our people. We are here to build the future.
          </p>
        </div>
      </div>
    </section>
    <section class="hero is-small">
      <div class="hero-body">
        <div class="container content">
          <div class="columns">
            <div class="column">
              <h1 class="title">Sellers.</h1>
              <p>
                For apartment building owners needing to sell before interest rates increase further, we have thousands of investors with specific criteria allowing us to put your building in front of qualified and serious buyers.
              </p>
            </div>
            <div class="column">
              <h1 class="title">1031 Buyers.</h1>
              <p>
                For investors growing their portfolio needing an exclusive 1031 opportunity, we'll help you maximize your current leverage and acquire greater scaled assets.
              </p>
            </div>
            <div class="column">
              <h1 class="title">Foreign Investors.</h1>
              <p>
                For investors in countries around the world needing a safe investment in a strong national economy, we have multiple opportunities to secure your wealth. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <figure>
            <img class="bImg" src="../images/b1.jpeg">
            <img class="bImg" src="../images/b2.jpeg">
            <img class="bImg" src="../images/b3.jpeg">
            <img class="bImg" src="../images/b4.jpeg">
          </figure>
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

.bImg {
  object-fit: cover;
  width: 256px;
  height: 256px;
}
</style>
