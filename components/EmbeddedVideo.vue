<template>
    <section class="section">
      <div class="container">
        <h1 class="title section-heading">Start Here 👇</h1>
        <div style="width: 80%; margin: auto;">
        <div class="video-container">
          <iframe
            class="lazyload"
            :src="src"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        </div>
      </div>
    </section>
</template>

<script>
import "lazysizes";
export default {
    name: "EmbeddedVideo",
    props: ['src']
}
</script>

<style scoped>
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}

.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>


