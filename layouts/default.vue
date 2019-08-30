<template>
  <div>
    <nuxt />
    <footer-prismic />
  </div>
</template>

<script>
import FooterPrismic from "~/components/FooterPrismic.vue";
import AOS from 'aos';
import "lazysizes";

export default {
  components: {
    FooterPrismic
  },
  head() {
    return {
      title: "Loz's Leisure"
    };
  },
  mounted() {
    AOS.init();
  }
};
</script>