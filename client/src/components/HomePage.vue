<template>
  <div class="HomePage">

    <section class="hero is-large banner">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title banner-title">
            REAL ESTATE DONE RIGHT.
          </h1>
          <h2 class="subtitle banner-subtext">
            Introducing a new breed of investors and developers.
          </h2>
        </div>
      </div>
    </section>

    <section class="hero is-small">
      <br>
      <div class="hero-body">
        <div class="container has-text-centered">
          <a class="title"><i class="fa fa-arrow-down animated pulse" id="arrow"></i></a>
        </div>
      </div>
    </section>

    <div class="container">
      <hr>
      <section class="hero is-medium" id="sec1">
        <div class="hero-body">
          <div class="columns">
            <div class="column vertical-box">
              <div class="vertical-align">
                <h1 class="title">Principal First.</h1>
                <h2 class="subtitle">We provide secure investments that fit your financial goals.</h2>
              </div>
            </div>
            <div class="column">
              <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D">
            </div>
          </div>
        </div>
      </section>

      <hr>

      <section class="hero is-medium">
        <div class="hero-body">
          <div class="columns">
            <div class="column">
              <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1489&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D">
            </div>
            <div class="column vertical-box">
              <div class="vertical-align">
                <h1 class="title">Aquire, Develop, Profit.</h1>
                <h2 class="subtitle">Our main mission is to build hospitality and create substantial returns.</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr>

      <section class="hero is-medium">
        <div class="hero-body">
          <div class="columns">
            <div class="column vertical-box">
              <div class="vertical-align">
                <h1 class="title">Quality over quantity.</h1>
                <h2 class="subtitle">Our exclusive listings consist of properties hand-selected by our seasoned professionals.</h2>
              </div>
            </div>
            <div class="column">
              <img src="https://images.unsplash.com/photo-1500327698971-a5adcc454b37?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D">
            </div>
          </div>
        </div>
      </section>

      <hr>

      <section class="hero is-small" id="test">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title">Interested?</h1>
            <h1 class="subtitle">We are waiting to hear from you.</h1>
          </div>
          <br>
          <div class="container">
            <form action="https://mailthis.to/michaeln@strikerinvestmentrealty.com" method="POST">
              <div class="columns">
                <div class="column is-offset-3 is-3">
                  <div class="field">
                    <div class="control">
                      <input class="input" name="Name" type="text" placeholder="Name">
                    </div>
                  </div>
                </div>
                <div class="column is-3">
                  <div class="field">
                    <div class="control">
                      <input class="input" name="Email" type="email" placeholder="Email">
                    </div>
                  </div>
                </div>
              </div>
              <div class="columns">
                <div class="column is-offset-3 is-6">
                  <textarea class="textarea" name="Message" placeholder="What would you like to ask?"></textarea>
                </div>
              </div>
              <div class="container has-text-centered">
                <input class="button send" type="submit" value="send inquiry">
              </div>
            </form>
          </div>

        </div>
      </section>

      <hr>

      <section class="hero is-small">
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="columns">
              <div class="column">
                <i class="fa fa-2x fa-phone" aria-hidden="true"></i>
                <h1 class="send">phone</h1>
                <h1 class="brand-sub">(862)-202-5702</h1>
              </div>
              <div class="column">
                <i class="fa fa-2x fa-map-marker" aria-hidden="true"></i>
                <h1 class="send">address</h1>
                <h1 class="brand-sub">777 Passaic Ave Suite 518, Clifton, NJ 07012</h1>
              </div>
              <div class="column">
                <i class="fa fa-2x fa-envelope" aria-hidden="true"></i>
                <h1 class="send">email</h1>
                <h1 class="brand-sub">michaeln@strikerinvestmentrealty.com</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>
