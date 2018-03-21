<template>
  <div class="section">
    <div class="middle-section">

      <div class="box-container">
        <div class="left">
          <img src="../assets/experience/tsm.png">
        </div>
        <div class="right">
          <div class="exp-title">MoneySupermarket: <br>TravelSupermarket</div>
          <div class="exp-text">From October 2015, I was hired as a Junior Developer for the TravelSupermarket brand of MoneySupermarket. I have since been promoted to a professional developer role after aquiring new skills and demonstrating my abilities.</div>
        </div>
      </div>

      <div class="box-container">
        <div class="left">
          <img src="../assets/experience/bangor.png">
        </div>
        <div class="right">
          <div class="exp-title">Bangor University</div>
          <div class="exp-text">I studied a BSc in Creative Technology from 2012 to 2015 where I discovered my, at the time, newfound love for technology and creating engaging software. My final year dissertation consisted of studying how to portray narrative through the medium of techniques within video games. Along with a 10,000 dissertation, it also involved creating a fully functioning video game in Unity. As a result, I attained a 2:1.</div>
        </div>
      </div>

      <div class="box-container">
        <div class="left">
          <img src="../assets/experience/yale.png">
        </div>
        <div class="right">
          <div class="exp-title">Yale College</div>
          <div class="exp-text">From 2010 to 2012 I attended Yale College in Wrexham where I studied A-levels in Computing, Media Studies, and English Literature.</div>
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
  created(){

  }
}
</script>

<style>
.box-container{
  background: white;
  padding: 10px;
  border: 2px solid black;
  color: black;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
}

.exp-title{
  font-size: 2em;
  padding-bottom: 20px;
  font-weight: bold;
}

.exp-text{
  font-size: 1.2em;
  text-align: left;
  line-height: 25px;
}

  .left{
    display:inline-block;
  }

  .right{
    display:inline-block;
  }
</style>
