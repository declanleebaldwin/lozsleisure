<template>
    <footer class="footer">
        <div class="content has-text-centered">
            <a class="social-media-link" href="https://www.facebook.com/LozsLeisure/" target="_blank">
                <img class="social-media-logo" src="~/assets/img/facebook-logo.svg" alt="facebook">
            </a>
            <a class="social-media-link" href="https://www.youtube.com/channel/UCwZq7eGqRMwY2gf7k9DcnXA" target="_blank">
                <img class="social-media-logo" src="~/assets/img/youtube-logo.svg" alt="youtube">
            </a>
            <a class="social-media-link" href="https://www.instagram.com/lozsleisure/?hl=en" target="_blank">
                <img class="social-media-logo" src="~/assets/img/instagram-logo.svg" alt="instagram">
            </a>
            <a class="social-media-link" href="https://twitter.com/lozsleisure?lang=en" target="_blank">
                <img class="social-media-logo" src="~/assets/img/twitter-logo.svg" alt="twitter">
            </a>
        </div>
        <div class="columns">
            <div class="column">
                <div class="nuxtjsContainer">
                    <small>Powered by</small>
                    <a href="https://nuxtjs.org/" target="_blank">
                        <img id="nuxt-logo" src="https://nuxtjs.org/logos/nuxt-square.svg" alt="nuxtjs">
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "FooterPrismic"
};
</script>

<style lang="css" scoped>
.footer {
    padding-bottom: 0;
}

.social-media-link {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
}

.social-media-logo {
    width: 30px;
}

.nuxtjsContainer {
    display: flex;
    justify-content: flex-end;
}

.nuxtjsContainer small {
    margin-right: 0.3rem;
}

#nuxt-logo{
    width: 15px;
}
</style>