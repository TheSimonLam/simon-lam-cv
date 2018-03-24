<template>
  <div class="section">
    <div class="middle-section">

      <div class="box-container">
        <div class="right">
          <div class="exp-title">MoneySupermarket: TravelSupermarket</div>
          <div class="exp-text"><img class="exp-image" src="../assets/experience/tsm.png">Fresh out of university and fired up to enter the technology industry,
            in October 2015 I was granted the amazing opportunity to become a Junior Developer for the TravelSupermarket brand of MoneySupermarket.<br><br>
            TravelSupermarket are a UK based travel comparisson website and I could not have been met with a friendlier group of collegues to work with.<br><br>
            After numerous projects and hard-fought struggles, I have since been promoted to a professional developer role by aquiring new skills and demonstrating my abilities.<br><br>
            I have learned that technology moves at a rapid pace and it is absolutely vital to continue learning whilst on the job. Cross-skilling is a daily part of what I do.</div>
        </div>
      </div>

      <div class="box-container">
        <div class="right">
          <div class="exp-title">Bangor University</div>
          <div class="exp-text"><img class="exp-image" src="../assets/experience/bangor.png">After completing my A-levels at Yale College, I studied a BSc in Creative Technology
            from 2012 to 2015 where I had discovered my, at the time, newfound love for technology and creating engaging software.<br><br>
            For my final year dissertation I studied how to portray narrative through the medium of techniques used within video games.
            Along with a 10,000 dissertation, I also created a fully functioning video game in Unity 3D. After much hard work, graft, and sleepless nights, I had attained a Second Class Honours, Division 1. Also known as a "2:1".<br><br>
            As it is for many of us, university was a huge part of my life, and I cannot thank my lecturers enough for preparing me with the, at the time, seemingly laborious programming tasks.
            I am very thankful for the people I have met, the projects that I have worked on, and mostly my eventual sound education.</div>
        </div>
      </div>

      <div class="box-container">
        <div class="right">
          <div class="exp-title">Yale College</div>
          <div class="exp-text"><img class="exp-image" src="../assets/experience/yale.png">Coming out of High School I decided against 6th form and chose to attend my local college.
            From 2010 to 2012 I attended Yale College in Wrexham where I studied A-levels in Computing, Media Studies, and English Literature.<br><br>
            At this point in my life, I had never experienced using a programming language to create software. I have very fond memories of programming my first working SQL based app hosted on the Yale College servers.</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'experience',
  data () {
    return {

    }
  },
  mounted(){
      let counter = 0;
      let flipInterval = setInterval(fadeIn.bind(this), 200);

      function fadeIn() {
          if(counter < document.getElementsByClassName('box-container').length){
              if(document.getElementsByClassName('box-container')[counter]){
                  document.getElementsByClassName('box-container')[counter].classList.add('fadeInExp');
                  counter++;
              }
              else{
                  clearInterval(flipInterval);
              }
          }
          else{
              clearInterval(flipInterval);
          }
      }
  }
}
</script>

<style>
.box-container{
  opacity: 0;
  background: white;
  border-radius: 10px;
  color: black;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;

  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.exp-title{
  font-size: 2em;
  padding-bottom: 20px;
  font-weight: bold;
  font-family: 'Cabin Sketch', cursive;
  color: #003459;
}

.exp-text{
  font-size: 1.2em;
  text-align: left;
  line-height: 30px;
}

.exp-image{
  float: left;
  padding: 10px;
}

  .right{
    padding: 20px;
    display:inline-block;
  }

  .fadeInExp {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
  }

  @-webkit-keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }

  @keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }

/* Smartphones (portrait and landscape) ----------- */
@media only screen
and (max-device-width: 480px){
  .middle-section{
    margin: auto;
  }
}
</style>
