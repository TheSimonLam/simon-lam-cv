<template>
  <div class="section">
    <div class="middle-section align-center">
      <div class="item-container" v-for="item in skills">
        <img :src=item.path>
        <div>{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'skills',
  data () {
    return {
      skills: [
          {
              name: 'Vue',
              path: require('../assets/skills/vue.png')
          },
          {
              name: 'Angular',
              path: require('../assets/skills/angular.png')
          },
          {
              name: 'Webpack',
              path: require('../assets/skills/webpack.png')
          },
          {
              name: 'React',
              path: require('../assets/skills/react.png')
          },
          {
              name: 'Node.js',
              path: require('../assets/skills/node.png')
          },
          {
              name: 'JavaScript',
              path: require('../assets/skills/js.png')
          },
          {
              name: 'ES6',
              path: require('../assets/skills/es6.png')
          },
          {
              name: 'Yarn',
              path: require('../assets/skills/yarn.png')
          },
          {
              name: 'JQuery',
              path: require('../assets/skills/jquery.png')
          },
          {
              name: 'Java',
              path: require('../assets/skills/java.png')
          },
          {
              name: 'Gradle',
              path: require('../assets/skills/gradle.png')
          },
          {
              name: 'Maven',
              path: require('../assets/skills/maven.png')
          },
          {
              name: 'Sass',
              path: require('../assets/skills/sass.png')
          },
          {
              name: 'Sonar',
              path: require('../assets/skills/sonar.png')
          },
          {
              name: 'Git',
              path: require('../assets/skills/git.png')
          },
          {
              name: 'Google DFP',
              path: require('../assets/skills/DFP.png')
          },
          {
              name: 'Responsive Design',
              path: require('../assets/skills/design.png')
          },
          {
              name: 'Affiliate Tracking',
              path: require('../assets/skills/affiliate.png')
          },
          {
              name: 'Music Production',
              path: require('../assets/skills/music.png')
          },
          {
              name: 'Video Production',
              path: require('../assets/skills/video.png')
          },
          {
              name: 'Game Design',
              path: require('../assets/skills/game.png')
          },
          {
              name: 'Google Analytics',
              path: require('../assets/skills/ga.png')
          },
          {
              name: 'Unit Testing',
              path: require('../assets/skills/testing.png')
          }
      ]
    }
  },
  mounted(){
      let counter = 0;
      let flipInterval = setInterval(fadeIn.bind(this), 20);

      function fadeIn() {
          if(counter < this.skills.length){
              if(document.getElementsByClassName('item-container')[counter]){
                  document.getElementsByClassName('item-container')[counter].classList.add('fadeIn');
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
  .item-container {
    display: none;
    width: 150px;
    height: 180px;
    background-color: white;
    margin: 10px;
    border-radius: 10px;
    padding: 10px;
    font-size: 1.1em;
    font-weight: bold;
    text-align: center;

    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .fadeIn {
    display: inline-block;
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

  /* iPads (portrait) ----------- */
  @media only screen
  and (max-device-width: 1024px) {
    .align-center{
      text-align: center;
    }
  }
</style>
