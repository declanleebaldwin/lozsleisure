<template>
  <div class="column is-one-third">
    <a :href="favourite.data['favourite_link']['url']" target="_blank">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3 lazyload">
            <img :src="responsiveURL" />
          </figure>
        </div>
        <div class="card-content">
          <p class="title is-4">{{ favourite.data['favourite_title'][0]['text'] }}</p>
          <p class="subtitle is-6">{{ favourite.data['favourite_subtitle'][0]['text'] }}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import "lazysizes";

export default {
  name: "FavouriteCard",
  props: ["favourite"],
  data() {
    return {
      windowWidth: 0
    };
  },
  mounted() {
    if (!process.client) return;
    this.windowWidth = window.innerWidth;
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
  computed: {
    responsiveURL() {
      if (
        this.windowWidth <= 768 &&
        this.favourite.data["favourite_image"]["mobile"]
      ) {
        return this.favourite.data["favourite_image"]["mobile"]["url"];
      } else {
        return this.favourite.data["favourite_image"]["url"];
      }
    }
  }
};
</script>

