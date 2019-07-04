<template>
    <div>
        <nuxt />
        <footer-prismic />
    </div>
</template>

<script>
import FooterPrismic from "~/components/FooterPrismic.vue";

export default {
    components: {
        FooterPrismic
    },
    head() {
        return {
            title: "Loz's Leisure"
        };
    },
    mounted() {
        if (!process.server && !window.google) {
            console.log("google charts not loaded");
            const script = document.createElement("script");
            script.onload = this.onScriptLoaded;
            script.type = "text/javascript";
            script.src = "https://www.gstatic.com/charts/loader.js";
            document.head.appendChild(script);
        }
        console.log("google charts loaded");
    }
};
</script>