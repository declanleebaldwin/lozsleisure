<template>
  <div class="column is-one-third">
    <nuxt-link :to="link">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3 lazyload">
            <img :src="post.data['post_image']['url']" />
          </figure>
        </div>
        <div class="card-content">
          <p class="title is-4">{{ post.data['title'][0]['text'] }}</p>
          <p class="subtitle is-6">{{ post.data['subtitle'][0]['text'] }}</p>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import LinkResolver from "~/plugins/link-resolver.js";
import "lazysizes";

export default {
  props: ["post"],
  data: function() {
    return {
      link: "",
      formattedDate: ""
    };
  },
  name: "blog-widget",
  created() {
    (this.link = LinkResolver(this.post)),
      (this.formattedDate = Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit"
      }).format(new Date(this.post.data.date)));
  }
};
</script>

<style lang="css" scoped>
</style>