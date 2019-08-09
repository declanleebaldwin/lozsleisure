<template>
    <section>
        <div class="logo-container">
            <nuxt-link to="/">
                <img src="~/assets/img/lozsleisurelogo.svg" alt="">
            </nuxt-link>
        </div>
        <div class="button_container" id="toggle">
            <span class="top"></span>
            <span class="middle"></span>
            <span class="bottom"></span>
        </div>
        <div class="overlay" id="overlay">
            <nav class="overlay-menu">
                <ul>
                    <li>
                        <div>
                            <nuxt-link to="/">Home</nuxt-link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <nuxt-link to="/about">About</nuxt-link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <nuxt-link to="/blog">Stories</nuxt-link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <nuxt-link to="/gear">Gear</nuxt-link>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
</template>

<script>
export default {
    name: "Navbar",
    mounted: function() {
        document.querySelector("#toggle").addEventListener("click", function() {
            this.classList.toggle("active");
            let overlay = document.querySelector("#overlay");
            overlay.classList.toggle("open");
        });
    }
};
</script>

<style lang="css" scoped>
.logo-container {
    position: absolute;
    top: 3%;
    width: 100px;
    z-index:100;
}
.button_container {
    position: fixed;
    top: 5%;
    right: 2%;
    height: 27px;
    width: 35px;
    cursor: pointer;
    z-index: 100;
    transition: opacity 0.25s ease;
}
.button_container:hover {
    opacity: 0.7;
}
.button_container.active .top {
    transform: translateY(11px) translateX(0) rotate(45deg);
    background: #fff;
}
.button_container.active .middle {
    opacity: 0;
    background: #fff;
}
.button_container.active .bottom {
    transform: translateY(-11px) translateX(0) rotate(-45deg);
    background: #fff;
}
.button_container span {
    background: #4a4a4a ;
    border: none;
    height: 5px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.35s ease;
    cursor: pointer;
}
.button_container span:nth-of-type(2) {
    top: 11px;
}
.button_container span:nth-of-type(3) {
    top: 22px;
}

.overlay {
    position: fixed;
    background: #606060;
    top: 0;
    left: 0;
    width: 100%;
    height: 0%;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.35s, visibility 0.35s, height 0.35s;
    overflow: hidden;
}
.overlay.open {
    opacity: 0.9;
    visibility: visible;
    height: 100%;
}
.overlay.open li {
    animation: fadeInRight 0.5s ease forwards;
    animation-delay: 0.35s;
}
.overlay.open li:nth-of-type(2) {
    animation-delay: 0.4s;
}
.overlay.open li:nth-of-type(3) {
    animation-delay: 0.45s;
}
.overlay.open li:nth-of-type(4) {
    animation-delay: 0.5s;
}
.overlay.open li:nth-of-type(5) {
    animation-delay: 0.55s;
}
.overlay nav {
    position: relative;
    height: 70%;
    top: 50%;
    transform: translateY(-50%);
    font-size: 36px;
    font-weight: 400;
    text-align: center;
    z-index: 1;
}
.overlay ul {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    display: inline-block;
    position: relative;
    height: 100%;
}
.overlay ul li {
    display: block;
    height: 20%;
    height: calc(100% / 5);
    min-height: 40px;
    position: relative;
    opacity: 0;
}
.overlay ul li a {
    display: block;
    position: relative;
    color: #fff;
    text-decoration: none;
    overflow: hidden;
}
.overlay ul li a:hover:after,
.overlay ul li a:focus:after,
.overlay ul li a:active:after {
    width: 100%;
}
.overlay ul li a:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0%;
    transform: translateX(-50%);
    height: 3px;
    background: #5ac3ff;
    transition: 0.2s;
}

@keyframes fadeInRight {
    0% {
        opacity: 0;
        left: 20%;
    }
    100% {
        opacity: 1;
        left: 0;
    }
}
</style>