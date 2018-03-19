<template>
  <div class="section">
      <div class="middle-section">
          <div class="middle-block">
              <div class="left-block">
                  <img class="image" src="../assets/me.png">
              </div>
              <div class="right-block">
                  <div class="large-text">Hi, I'm Simon!</div>
                  <div class="large-text">My skills include</div>
                  <div class="large-text dynamic-text"></div>
              </div>
          </div>
          <div class="social-media-container">
              <a href="https://www.linkedin.com/in/simon-lam-656671100/"><img class="social-media-image" src="../assets/linkedin.png"></a>
              <a href="https://github.com/TheSimonLam"><img class="social-media-image" src="../assets/github.png"></a>
          </div>
          <hr class="first-hr">
          <hr class="second-hr">
      </div>
  </div>
</template>

<script>

import Typed from 'typed.js';

export default {
    name: 'homepage',
    data () {
        return {
        }
    },
    mounted(){
        let options = {
            strings: ["Front-end Dev.", "Java Dev.", "Mobile Design", "Unit Testing", "Webpack/Babel", "Marketing", "Music Prod.", "Google Adsense", "Video Prod.", "Technology", "Game Design"],
            typeSpeed: 40,
            backSpeed: 40,
            loop: true,
            showCursor: false
        };
        let typed = new Typed(".dynamic-text", options);
    },
    methods: {

    }
}
</script>

<style>
    .section{
        min-height: 100vh;
        background-color: #00A8E8;
    }

    .middle-section{
        padding-top: calc(100%/25);
    }

    .middle-block{
        height: 232px;
        width: 650px;
        margin: auto;
        padding: 30px;
        border-radius: 10px;
        background-color: #00A8E8;
        color: white;
    }

    .left-block{
        display: inline-block;
        float: left;
    }

    .right-block{
        display: inline-block;
        padding-left: 30px;
    }

    .image{
        border-radius: 50%;
        border: 2px solid black;
        max-height: 230px;
    }

    .large-text{
        font-size: 3em;
    }

    .social-media-container{
        margin: auto;
        width: 530px;
        padding: 110px 0;
        text-align: center;
    }

    .social-media-image{
        padding: 0 15px;
        height: 50px;
    }

    .dynamic-text{
        color: #003459;
        font-weight: bold;
    }

    hr{
        border-width: 2px;
        border-style: dashed;;
        color: white;
    }

    .first-hr{
        width: 50%;
    }

    .second-hr{
        width: 30%;
    }
</style>
