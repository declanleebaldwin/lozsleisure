<template>
    <section class="section stats">
        <div class="columns has-text-centered">
            <div class="column is-half is-offset-one-quarter">
                <div class="columns">
                    <div class="column">
                        <h1 class="title">{{ countries }} Countries</h1>
                    </div>
                    <div class="column">
                        <h1 class="title">{{ videos }} Videos</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Stats",
    props: ['countries', 'videos']
};
</script>

<style scoped>
.stats {
    border-top: 2px solid #363636;
    border-bottom: 2px solid #363636;
}
</style>


