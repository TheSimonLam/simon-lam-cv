<template>
    <div id="app">
        <div class="header-wrapper">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/skills">Skills</router-link>
            <router-link to="/experience">Experience</router-link>
            <router-link to="/contact">Contact</router-link>
        </div>
        <router-view></router-view>
        <footer>
            <div class="footer-container">
                <div class="last-updated-text">Updated: 16th March 2018</div>
                <div class="email-text">thesimonlam@gmail.com</div>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style>
    #app {
        font-family: 'Cabin Sketch', cursive;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .header-wrapper{
        text-align: center;
        padding: 50px 0 50px 0;
        font-size: 3em;
        background-color: #00A8E8;
        color: white;
    }

    .header-wrapper a{
        text-decoration: none;
        color: inherit;
        padding: 0 10px 0 10px;
    }

    .header-wrapper a:hover{
        text-decoration: underline;
        color: #003459;
    }

    .footer-container{
        height: 25px;
        width: 100%;
        background-color: #007EA7;
    }

    .last-updated-text{
        color: white;
        float: left;
        font-size: 1.3em;
    }

    .email-text{
        color: white;
        float: right;
        font-size: 1.3em;
    }

    /* Smartphones (portrait and landscape) ----------- */
    @media only screen
    and (min-device-width: 320px)
    and (max-device-width: 480px) {
        /* Styles */
    }

    /* Smartphones (landscape) ----------- */
    @media only screen
    and (min-width: 321px) {
        /* Styles */
    }

    /* Smartphones (portrait) ----------- */
    @media only screen
    and (max-width: 320px) {
        /* Styles */
    }

    /* iPads (portrait and landscape) ----------- */
    @media only screen
    and (min-device-width: 768px)
    and (max-device-width: 1024px) {
        /* Styles */
    }

    /* iPads (landscape) ----------- */
    @media only screen
    and (min-device-width: 768px)
    and (max-device-width: 1024px)
    and (orientation: landscape) {
        /* Styles */
    }

    /* iPads (portrait) ----------- */
    @media only screen
    and (min-device-width: 768px)
    and (max-device-width: 1024px)
    and (orientation: portrait) {
        /* Styles */
    }

    /* Desktops and laptops ----------- */
    @media only screen
    and (min-width: 1224px) {
        /* Styles */
    }

    /* Large screens ----------- */
    @media only screen
    and (min-width: 1824px) {
        /* Styles */
    }

    /* iPhone 4 ----------- */
    @media only screen and (-webkit-min-device-pixel-ratio: 1.5), only screen and (min-device-pixel-ratio: 1.5) {
        /* Styles */
    }
</style>
