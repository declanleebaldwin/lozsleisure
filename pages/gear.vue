<template>
  <main>
    <hero-image :url="gearpageContent['hero-image']['url']" :mobileurl="gearpageContent['hero-image']['mobile']['url']">
      <h1 class="title" style="opacity: 0.9">{{ $prismic.richTextAsPlain(gearpageContent.title) }}</h1>
    </hero-image>
    <gear-section
      v-for="(gear, index) in gearArray"
      v-bind:gear="gear"
      v-bind:index="index"
      v-bind:key="gear.id"
    ></gear-section>
    <navbar></navbar>
  </main>
</template>

<script>
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import Navbar from "~/components/Navbar.vue";
import HeroImage from "~/components/HeroImage.vue";
import GearSection from "~/components/GearSection.vue";


export default {
  name: "Home",
  components: {
    Navbar,
    HeroImage,
    GearSection
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
      const document = await api.getSingle("gearpage");
      let gearpageContent = document.data;

      // Query to get posts content to preview
      const gear = await api.query(
        Prismic.Predicates.at("document.type", "gear"),
        { orderings: "[my.post.date desc]" }
      );

      // Returns data to be used in template
      return {
        gearpageContent,
        gearArray: gear.results
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