<template>
  <main>
      <h1 class="title">About Me</h1>
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
  },
  head() {
    return {
      title: "Loz's Leisure"
    };
  },
};
</script>

<style lang="css" scoped>
</style>