<template>
  <main>
    <hero-image :url="storiespageContent['hero_image']['url']">
      <h1
        class="title has-text-white"
        style="opacity: 0.9"
      >{{ $prismic.richTextAsPlain(storiespageContent.title) }}</h1>
    </hero-image>
    <section class="section">
      <div class="columns">
        <div class="column has-text-centered">
          <span class="is-size-4">Where would you like to travel?</span>
        </div>
      </div>
      <div class="columns">
        <div class="column has-text-centered">
          <div class="select">
            <select>
              <option value="Anywhere">Anywhere</option>
              <option v-for="category in postCategories" :value="category.data.post_category" :key="category.id">{{ category.data.post_category }}</option>
            </select>
          </div>
        </div>
      </div>
    </section>
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
  data() {
    return {
      isActive: false
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

      const postCategories = await api.query(
        Prismic.Predicates.at("document.type", "tag"),
        { orderings: "[my.tag.post_category]" }
      );

      // Load the edit button
      if (process.client) window.prismic.setupEditButton();

      // Returns data to be used in template
      return {
        storiespageContent,
        posts: blogPosts.results,
        postCategories: postCategories.results
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