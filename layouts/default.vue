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
            title: "Loz's Leisure",
            // script: [
            //   { src: "https://www.gstatic.com/charts/loader.js" }
            // ]
        };
    },
    
};
</script>