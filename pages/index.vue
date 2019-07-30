<template>
  <main>
    <hero-image :url="homepageContent['hero-image']['url']">
      <h1
        class="subtitle is-2 has-text-grey-dark"
        style="opacity: 0.9"
      >{{ $prismic.richTextAsPlain(homepageContent.title) }}</h1>
    </hero-image>
    <stats
      :countries="homepageContent['number_of_countries']"
      :videos="homepageContent['number_of_videos']"
    ></stats>
    <section class="section">
      <div class="container">
        <h1 class="title section-heading">Where am I now?</h1>
        <div id="regions_div" class="lazyload" style="width: 100%;"></div>
        <div class="columns">
          <div class="column">
            <div class="card">
              <div class="card-content">
                <p class="title is-size-6-mobile">{{ homepageContent.country }}</p>
                <p class="subtitle is-size-6-mobile">{{ homepageContent.city }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="card">
              <div class="card-content">
                <p class="subtitle is-size-6-mobile">
                  <prismic-rich-text :field="homepageContent['location_description']" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title section-heading">My Favourites</h1>
        <div class="columns">
          <div class="column">
            <a :href="favouritesArray[0].data['favourite_link']['url']" target="_blank">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3 lazyload">
                  <img :src="favouritesArray[0].data['favourite_image']['url']" />
                </figure>
              </div>
              <div class="card-content">
                <p class="title is-4">{{ favouritesArray[0].data['favourite_title'][0]['text'] }}</p>
                <p class="subtitle is-6">{{ favouritesArray[0].data['favourite_subtitle'][0]['text'] }}</p>
              </div>
            </div>
            </a>
          </div>
          <div class="column">
            <a :href="favouritesArray[1].data['favourite_link']['url']" target="_blank">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3 lazyload">
                  <img :src="favouritesArray[1].data['favourite_image']['url']" />
                </figure>
              </div>
              <div class="card-content">
                <p class="title is-4">{{ favouritesArray[1].data['favourite_title'][0]['text'] }}</p>
                <p class="subtitle is-6">{{ favouritesArray[1].data['favourite_subtitle'][0]['text'] }}</p>
              </div>
            </div>
            </a>
          </div>
          <div class="column">
            <a :href="favouritesArray[2].data['favourite_link']['url']" target="_blank">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3 lazyload">
                  <img :src="favouritesArray[2].data['favourite_image']['url']" />
                </figure>
              </div>
              <div class="card-content">
                <p class="title is-4">{{ favouritesArray[2].data['favourite_title'][0]['text'] }}</p>
                <p class="subtitle is-6">{{ favouritesArray[2].data['favourite_subtitle'][0]['text'] }}</p>
              </div>
            </div>
            </a>
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
import Stats from "~/components/Stats.vue";
import HeroImage from "~/components/HeroImage.vue";
import "lazysizes";

export default {
  name: "Home",
  components: {
    Navbar,
    Stats,
    HeroImage
  },
  head() {
    return {
      title: "Loz's Leisure"
    };
  },
  mounted() {
    google.charts.load("current", {
      packages: ["geochart"],
      mapsApiKey: "AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY"
    });
    google.charts.setOnLoadCallback(drawRegionsMap);
    let $this = this;
    function drawRegionsMap() {
      var data = google.visualization.arrayToDataTable([
        ["Country"],
        [$this.homepageContent.country]
      ]);
      var options = {};
      var chart = new google.visualization.GeoChart(
        document.getElementById("regions_div")
      );
      chart.draw(data, options);
    }
  },
  async asyncData({ context, error, req }) {
    try {
      // Query to get API object
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, {
        req
      });

      // Query to get blog home content
      const document = await api.getSingle("homepage");
      let homepageContent = document.data;

      const favourites = await api.query(
        Prismic.Predicates.at("document.type", "favourites")
      );

      // Query to get posts content to preview

      // Load the edit button
      if (process.client) window.prismic.setupEditButton();

      // Returns data to be used in template
      return {
        homepageContent,
        favouritesArray: favourites.results
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