<template>
    <nuxt-link :to="link" class="tile is-parent">
        <article class="tile is-child box">
            <p class="is-size-7 has-text-grey-light">{{ formattedDate }}</p>
            <p class="title">{{ $prismic.richTextAsPlain(post.data.title) }}</p>
            <p class="subtitle">{{getFirstParagraph(post)}}</p>
        </article>
    </nuxt-link>
</template>

<script>
import LinkResolver from "~/plugins/link-resolver.js";

export default {
    props: ["post"],
    data: function() {
        return {
            link: "",
            formattedDate: ""
        };
    },
    name: "blog-widget",
    methods: {
        // Function to get the first paragraph of text in a blog post and limit the displayed text at 300 characters
        getFirstParagraph(post) {
            const textLimit = 300;
            const slices = post.data.body;
            let firstParagraph = "";
            let haveFirstParagraph = false;

            slices.map(function(slice) {
                if (!haveFirstParagraph && slice.slice_type == "text") {
                    slice.primary.text.forEach(function(block) {
                        if (block.type == "paragraph" && !haveFirstParagraph) {
                            firstParagraph += block.text;
                            haveFirstParagraph = true;
                        }
                    });
                }
            });

            const limitedText = firstParagraph.substr(0, textLimit);

            if (firstParagraph.length > textLimit) {
                return (
                    limitedText.substr(0, limitedText.lastIndexOf(" ")) + "..."
                );
            } else {
                return firstParagraph;
            }
        }
    },
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