<template>
    <section class="hero is-fullheight bg-img" :style="{ 'background-image': 'url(' + url + ')'}">
        <div class="hero-body">
            <div class="container">
                <h1
                    class="title has-text-grey-dark"
                    style="opacity: 0.9"
                >{{ title }}</h1>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "HeroImage",
    props: ['title', 'url']
};
</script>

<style scoped>
.bg-img {
    height: 100vh;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color: #999;
}

.container {
    display: flex;
    justify-content: center;
    text-align: center;
}
.title {
    max-width: 75%;
}
</style>

