<template>
  <main>
    <section class="section profile-container">
      <div class="columns">
        <div class="column">
          <div class="image-container is-mobile">
            <figure class="image is-square">
              <img class="lazyload" :src="aboutpageContent['profile_image']['url']" />
            </figure>
          </div>
        </div>
        <div class="column">
          <div class="container">
            <h1 class="title section-heading">{{ $prismic.richTextAsPlain(aboutpageContent.title) }}</h1>
            <prismic-rich-text :field="aboutpageContent['profile_text']" />
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title section-heading">Get In Touch</h1>
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
    Navbar
  },
  head() {
    return {
      title: "Loz's Leisure"
    };
  },
  async asyncData({ context, error, req }) {
    try {
      // Query to get API object
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, {
        req
      });

      // Query to get blog home content
      const document = await api.getSingle("aboutpage");
      let aboutpageContent = document.data;

      // Load the edit button
      if (process.client) window.prismic.setupEditButton();

      // Returns data to be used in template
      return {
        aboutpageContent
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>

<style lang="css" scoped>
.profile-container {
  margin-top: 3rem;
}

.section {
  border-bottom: 2px solid #363636;
}

@media only screen and (min-width: 770px) {
  .image-container {
    margin: auto;
    max-width: 80%;
  }
}
</style>