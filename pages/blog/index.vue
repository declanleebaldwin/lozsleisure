<template>
    <main>
        <!-- <prismic-edit-button :documentId="documentId"/> -->
        <navbar></navbar>
        <section class="hero">
            <div class="hero-body">
                <div class="level">
                    <div class="level-item">
                        <figure class="level-item image is-128x128">
                            <img class="is-rounded" :src="image">
                        </figure>
                    </div>
                </div>
                <div class="level">
                    <div class="level-item">
                        <h1 class="title">{{ $prismic.richTextAsPlain(homepageContent.headline) }}</h1>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="tile is-ancestor">
                <div v-for="post in posts" :key="post.id" v-bind:post="post" class="tile is-parent">
                    <blog-widget :post="post"></blog-widget>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import BlogWidget from "~/components/BlogWidget.vue";
import Navbar from "~/components/Navbar.vue";

export default {
    name: "Home",
    components: {
        BlogWidget,
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
            const document = await api.getSingle("blog_home");
            let homepageContent = document.data;

            // Query to get posts content to preview
            const blogPosts = await api.query(
                Prismic.Predicates.at("document.type", "post"),
                { orderings: "[my.post.date desc]" }
            );

            // Load the edit button
            if (process.client) window.prismic.setupEditButton();

            // Returns data to be used in template
            return {
                homepageContent,
                // documentId: document.id,
                posts: blogPosts.results,
                image: homepageContent.image.url
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