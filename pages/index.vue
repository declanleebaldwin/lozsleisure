<template>
    <main>
        <section class="hero is-fullheight bg-img">
            <navbar></navbar>
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">{{ $prismic.richTextAsPlain(homepageContent.title) }}</h1>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import Navbar from '~/components/Navbar.vue'

export default {
    name: "Home",
    components: {
      Navbar
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
.bg-img {
    height: 100vh;
    background-image: url("https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80");
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color: #999;
}
</style>