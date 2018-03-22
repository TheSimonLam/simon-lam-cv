<template>
  <div class="section">
      <div class="homepage-top-section">
          <div class="middle-block">
              <div class="left-block">
                  <img class="image" src="../assets/me.png">
              </div>
              <div class="right-block">
                  <div class="large-text">Hello, I'm Simon!</div>
                  <div class="large-text">My skills include</div>
                  <div class="large-text dynamic-text"></div>
              </div>
          </div>
          <div class="social-media-container">
              <a href="https://www.linkedin.com/in/simon-lam-656671100/"><img class="social-media-image" src="../assets/linkedin.png"></a>
              <a href="https://github.com/TheSimonLam"><img class="social-media-image" src="../assets/github.png"></a>
          </div>
      </div>
      <div class="middle-section">

          <div class="flex-container">
              <div class="flex-item">
                  <div class="title">Introduction</div>
                  <div class="text">Hi, I'm Simon Lam. I'm a software developer based in North Wales with a BSc degree in Creative Technologies from Bangor University.<br><br>I have a keen interest in developing new tools. Holding three years experience in the technology industry, I will always be learning from new opportunities.</div>
              </div>
              <div class="flex-item">
                  <div class="title">Hobbies</div>
                  <div class="text">In my spare time, my hobbies include tinkering with DIY projects, producing music, and browsing the latest memes. <br><br> I also like keeping up to date with the latest technologies and social media platforms, cooking (and eating) delicious foods, video gaming, and travelling the globe in search of something i've never tried before.</div>
              </div>
              <div class="flex-item">
                  <div class="title">Interests</div>
                  <div class="text">I'm interested in developing my personal skillset as well as sharing my knowledge with others. <br><br>Once a student, always a student. The learning never stops!</div>
              </div>
          </div>

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
            strings: ["Front-end Dev.", "Java Dev.", "Mobile Design", "Unit Testing", "Webpack/Babel", "Marketing", "Music Prod.", "Vue.js", "Video Prod.", "New Tech.", "Game Design"],
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
    .homepage-top-section{
        padding-top: calc(100%/25);
    }

    .title{
        font-size: 2em;
        color: white;
        padding-bottom: 20px;
        font-weight: bold;
    }

    .text{
        font-size: 1.2em;
        text-align: left;
        color: white;
        line-height: 30px;
    }

    .flex-container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 auto;
        padding-bottom: 150px;
    }

    .flex-item{
        background: #007EA7;
        padding: 10px;
        margin: 10px;
        border: 2px solid white;
        width: 100%;
        border-radius: 10px;
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
        vertical-align: middle;
    }

    .right-block{
        display: inline-block;
        padding-left: 30px;
        vertical-align: middle;
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

    /* Smartphones (portrait and landscape) ----------- */
    @media only screen
    and (max-device-width: 480px){
        body .image{
            max-height: 80px;
        }

        body .large-text {
            font-size: 1.2em;
        }

        body .middle-block{
            height: 125px;
            width: 300px;
        }
    }

    /* iPads (portrait) ----------- */
    @media only screen
    and (max-device-width: 1024px) {
        .flex-container{
            display: block;
        }

        .middle-section{
            margin: auto;
        }

        .flex-item{
            width: auto;
        }

        .image{
            max-height: 120px;
        }

        .large-text {
            font-size: 2em;
        }

        .middle-block{
            height: 125px;
            width: 400px;
        }
    }
</style>
