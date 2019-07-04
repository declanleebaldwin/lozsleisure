<template>
    <section class="hero is-fullheight bg-img" :style="{ 'background-image': 'url(' + url + ')'}">
        <div class="hero-body">
            <div class="container">
                <slot></slot>
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
    color: white;
    font-size: 4rem;
}
</style>

