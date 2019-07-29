<template>
  <main>
    <hero-image :url="storiespageContent['hero_image']['url']">
      <h1 class="title has-text-grey-dark" style="opacity: 0.9">{{ $prismic.richTextAsPlain(storiespageContent.title) }}</h1>
    </hero-image>
    <section class="section">
      <div class="tile is-ancestor">
        <div v-for="post in posts" :key="post.id" v-bind:post="post" class="tile is-parent">
          <blog-widget :post="post"></blog-widget>
        </div>
      </div>
    </section>
    <navbar></navbar>
  </main>
</template>

<script>
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import BlogWidget from "~/components/BlogWidget.vue";
import Navbar from "~/components/Navbar.vue";
import HeroImage from "~/components/HeroImage.vue";

export default {
  name: "Home",
  components: {
    BlogWidget,
    Navbar,
    HeroImage
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
      const document = await api.getSingle("storiespa");
      let storiespageContent = document.data;

      // Query to get posts content to preview
      const blogPosts = await api.query(
        Prismic.Predicates.at("document.type", "post"),
        { orderings: "[my.post.date desc]" }
      );

      // Load the edit button
      if (process.client) window.prismic.setupEditButton();

      // Returns data to be used in template
      return {
        storiespageContent,
        // documentId: document.id,
        posts: blogPosts.results
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>

<style lang="css" scoped>
</style>