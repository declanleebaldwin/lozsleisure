<template>
    <main>
        <hero-image :title="$prismic.richTextAsPlain(homepageContent.title)" url="https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"></hero-image>
        <stats></stats>
        <section class="section">
            <div class="container">
                <h1 class="title">Where am I now?</h1>
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
    async asyncData({ context, error, req }) {
        try {
            // Query to get API object
            const api = await Prismic.getApi(PrismicConfig.apiEndpoint, {
                req
            });

            // Query to get blog home content
            const document = await api.getSingle("homepage");
            let homepageContent = document.data;

            // Query to get posts content to preview

            // Load the edit button
            if (process.client) window.prismic.setupEditButton();

            // Returns data to be used in template
            return {
                homepageContent
                // documentId: document.id,
                // posts: blogPosts.results,
                // image: homepageContent.image.url
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