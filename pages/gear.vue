<template>
    <main>
        <hero-image
            url="https://images.unsplash.com/photo-1496950866446-3253e1470e8e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ"
        >
            <h1 class="title" style="opacity: 0.9">Gear</h1>
        </hero-image>
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
        HeroImage
    },
    head() {
        return {
            title: "Loz's Leisure"
        };
    },
    async asyncData({ context, error, req }) {}
};
</script>

<style lang="css" scoped>
</style>