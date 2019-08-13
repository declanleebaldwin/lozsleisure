<template>
  <main>
    <section class="hero">
      <div class="hero-body">
        <div class="level">
          <div class="level-item">
            <div>
              <span class="is-size-7 has-text-grey-light">{{ formattedDate }}</span>
              <h1 class="title">{{ $prismic.richTextAsPlain(document.title) }}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-for="(slice, index) in slices" :key="'slice-' + index" class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-two-thirds">
            <template v-if="slice.slice_type === 'text'">
              <text-slice :slice="slice"></text-slice>
            </template>
            <template v-else-if="slice.slice_type === 'quote'">
              <quote-slice :slice="slice"></quote-slice>
            </template>
            <template v-else-if="slice.slice_type === 'image_with_caption'">
              <image-caption-slice :slice="slice"></image-caption-slice>
            </template>
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
//Importing all the slices components
import TextSlice from "~/components/slices/TextSlice.vue";
import QuoteSlice from "~/components/slices/QuoteSlice.vue";
import ImageCaptionSlice from "~/components/slices/ImageCaptionSlice.vue";

export default {
  name: "post",
  components: {
    Navbar,
    TextSlice,
    QuoteSlice,
    ImageCaptionSlice
  },
  head() {
    return {
      title: "Loz's Leisure"
    };
  },
  async asyncData({ params, error, req }) {
    try {
      // Query to get API object
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, {
        req
      });

      // Query to get post content
      const post = await api.getByUID("post", params.uid);

      // Load the edit button
      if (process.client) window.prismic.setupEditButton();

      // Returns data to be used in template
      return {
        document: post.data,
        documentId: post.id,
        slices: post.data.body,
        formattedDate: Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit"
        }).format(new Date(post.data.date))
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>

<style scoped>
.level {
  margin-top: 1.5rem;
}
</style>
