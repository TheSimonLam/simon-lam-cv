// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

require('./assets/skills/vue.png');
require('./assets/skills/angular.png');
require('./assets/skills/webpack.png');
require('./assets/skills/react.png');
require('./assets/skills/node.png');
require('./assets/skills/js.png');
require('./assets/skills/es6.png');
require('./assets/skills/yarn.png');
require('./assets/skills/jquery.png');
require('./assets/skills/java.png');
require('./assets/skills/gradle.png');
require('./assets/skills/maven.png');
require('./assets/skills/sass.png');
require('./assets/skills/sonar.png');
require('./assets/skills/git.png');
require('./assets/skills/DFP.png');
require('./assets/skills/design.png');
require('./assets/skills/affiliate.png');
require('./assets/skills/music.png');
require('./assets/skills/video.png');
require('./assets/skills/game.png');
require('./assets/skills/ga.png');
require('./assets/skills/testing.png');

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
