<template>
  <section class="hero is-fullheight bg-img" :style="{ 'background-image': 'url(' + responsiveURL + ')'}">
    <div class="hero-body">
      <div class="container">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroImage",
  props: ["url", "mobileurl"],
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
        if(this.windowWidth <= 768 && this.mobileurl) {
            return this.mobileurl
        } else {
            return this.url
        }
    }
  }
};
</script>

<style scoped>
.bg-img {
  height: 100vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #999;
}

.container {
  display: flex;
  justify-content: center;
  text-align: center;
}
.title {
  max-width: 75%;
  color: white;
  font-size: 4rem;
}
</style>

