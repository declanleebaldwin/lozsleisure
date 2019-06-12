<template>
    <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="#">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </a>
            <a
                role="button"
                class="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item">
                    <nuxt-link to="/">Home</nuxt-link>
                </a>
                <a class="navbar-item">About</a>
                <a class="navbar-item">
                    <nuxt-link to="/blog">Stories</nuxt-link>
                </a>
                <a class="navbar-item">Guides</a>
                <a class="navbar-item">Gear</a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar"
};
</script>

<style lang="css" scoped>
</style>