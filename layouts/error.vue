<template>
    <section class="hero is-light is-fullheight">
        <div class="hero-body">
            <div class="container">
                <nuxt-link to="/">Return to home</nuxt-link>
                <h1 class="title" v-if="error.statusCode === 404">Page not found</h1>
                <h1 class="title" v-else>An error occurred</h1>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: ["error"],
    layout: "default",
    head() {
        return {
            title: "Loz's Leisure"
        };
    }
};
</script>