<template>
  <section class="section gear-section">
    <div class="container">
      <h1 class="title section-heading">{{ gear.data['gear_title'][0]['text'] }}</h1>
      <div class="columns">
        <div class="column">
          <figure class="image lazyload" data-aos="fade-up">
            <img :src="responsiveURL" />
          </figure>
        </div>
        <div class="column">
          <div class="columns">
            <div class="column">
              <a :href="gear.data['gear_link']['url']" class="link-container" target="_blank">
                <div class="card" data-aos="fade-up">
                  <div class="card-content">
                    <div class="columns">
                      <div class="column">
                        <p
                          class="subtitle is-size-6-mobile link"
                        >{{ gear.data['gear_link']['url'] }}</p>
                      </div>
                      <div class="column">
                        <p
                          class="subtitle is-size-6-mobile has-text-right has-text-left-mobile"
                        >£{{ gear.data['gear_price'] }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="card" data-aos="fade-up">
                <div class="card-content">
                  <p class="subtitle is-size-6-mobile">{{ gear.data['gear_text'][0]['text'] }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GearSection",
  props: ["gear"],
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
      if (this.windowWidth <= 768 && this.gear.data["gear_image"]["mobile"]) {
        return this.gear.data["gear_image"]["mobile"]["url"];
      } else {
        return this.gear.data["gear_image"]["url"];
      }
    }
  }
};
</script>

<style scoped>
.link-container:hover .link {
  text-decoration-color: #007ac0;
  color: #007ac0;
  transition: all 0.2s;
}

.link {
  text-decoration: underline;
  text-decoration-color: #5ac3ff;
  color: #5ac3ff;
}

.gear-section {
  border-top: 2px solid #363636;
  border-bottom: 2px solid #363636;
}
</style>


