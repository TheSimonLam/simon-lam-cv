<template>
  <div class="section">
    <div class="middle-section">
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
              path: require('../assets/skills/dfp.png')
          },
          {
              name: 'Responsive Design',
              path: require('../assets/skills/design.png')
          },
          {
              name: 'Affiliate Tracking',
              path: require('../assets/skills/vue.png')
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
          }
      ]
    }
  },
  created(){

  }
}
</script>

<style>
  .item-container {
    width: 150px;
    height: 200px;
    background-color: white;
    display: inline-block;
    margin: 10px;
    border-radius: 10px;
    padding: 10px;
    font-size: 1.1em;
    font-weight: bold;
    text-align: center;
  }
</style>
