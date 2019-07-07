<template>
  <main>
    <hero-image
      url="https://images.unsplash.com/photo-1496950866446-3253e1470e8e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ"
    >
      <h1 class="title" style="opacity: 0.9">Gear</h1>
    </hero-image>
    <section class="section">
      <div class="container">
        <h1 class="title section-heading">Sony-RX100</h1>
        <div class="columns">
          <div class="column">
            <figure class="image lazyload">
              <img src="https://www.imaging-resource.com/PRODS/sony-rx100-v/Z-SONY-RX100-V-BEAUTY.JPG" />
            </figure>
          </div>
          <div class="column">
            <div class="columns">
              <div class="column">
                <a href="http://amzn.to/2hB41Kn" class="link-container">
                  <div class="card">
                    <div class="card-content">
                      <div class="columns">
                        <div class="column">
                          <p class="subtitle is-size-6-mobile link">http://amzn.to/2hB41Kn</p>
                        </div>
                        <div class="column">
                          <p
                            class="subtitle is-size-6-mobile has-text-right has-text-left-mobile"
                          >£349</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <div class="card">
                  <div class="card-content">
                    <p
                      class="subtitle is-size-6-mobile"
                    >The Sony Cyber-shot RX100 is the company’s first pocket-sized advanced compact, and comes with a rich feature set that includes a larger than average 20.3MP sensor; a high quality 3.6x Zeiss optical zoom with a fast f/1.8 maximum aperture; full manual control and the ability to shoot Raw images; a range of built-in digital filter effects and, last but not least, the ability to record 1080p Full HD movies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <navbar></navbar>
  </main>
</template>

<script>
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import Navbar from "~/components/Navbar.vue";
import HeroImage from "~/components/HeroImage.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    HeroImage
  },
  head() {
    return {
      title: "Loz's Leisure"
    };
  },
  async asyncData({ context, error, req }) {}
};
</script>

<style lang="css" scoped>
.link-container:hover .link {
  text-decoration-color: #007ac0;
  color: #007ac0;
  transition: all 0.2s;
}

.link {
  text-decoration: underline;
  text-decoration-color: #5ac3ff;
  color: #5ac3ff;
}
</style>