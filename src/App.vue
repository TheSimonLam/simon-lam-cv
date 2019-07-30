<template>
    <div id="app">
        <div class="blue-section">
            <div class="top-section-block">
                <div class="top-section__left-block">
                    <img class="profile-image" :src="require('./assets/me.jpg')">
                </div>
                <div class="top-section__right-block">
                    <div>Hello, I'm Simon!</div>
                    <div>My skills include</div>
                    <div class="dynamic-text"></div>
                </div>
            </div>
            <div class="social-media-container">
                <a href="https://www.linkedin.com/in/simon-lam-656671100/" target="_blank"><img class="social-media-image" :src="require('./assets/linkedin.png')"></a>
                <a href="https://github.com/TheSimonLam" target="_blank"><img class="social-media-image" :src="require('./assets/github.png')"></a>
                <a href="https://soundcloud.com/ninjaroni" target="_blank"><img class="social-media-image" :src="require('./assets/soundcloud.png')"></a>
            </div>
        </div>

        <div class="middle-section-container">
            <div class="middle-section__title">Who am I?</div>

            <div class="middle-section-text">
                I'm a software developer with 4 years experience in the industry specializing in
                web development. I'm familiar with best practices, a strong understanding of
                object oriented programming, data structures and agile methodologies.
                I have experience with mentoring and teaching software development classes.
                Open to discuss opportunities to create robust business solutions.
            </div>

            <div class="three-colums-section">
                <div class="flex-container">
                    <div class="flex-item">
                        <div class="title">Languages</div>
                        <div class="text">✅ JavaScript<br/>✅ ES6<br/>✅ TypeScript<br/>✅ HTML<br/>✅ CSS<br/>✅ SASS<br/>✅ Java<br/>✅ C#</div>
                    </div>
                    <div class="flex-item">
                        <div class="title">Core Skills</div>
                        <div class="text">Programming
                            ● Affiliate Tracking
                            ● Amazon AWS
                            ● Design Patterns

                            ● Kanban/Sprints
                            ● API Documentation
                            ● Mentorship
                            ● UX/UI

                            ● TDD Testing
                            ● Git/Version Control
                            ● Automated Testing
                            ● Responsive Design
                        </div>
                    </div>
                    <div class="flex-item">
                        <div class="title">Frameworks/Tools</div>
                        <div class="text">Vue.js, Vuex, AngularJS, Angular 2+, React, Redux, Webpack, Node,
                            Yarn, Karma, Jasmine, Cypress, Sinon, Mocha, Chai, Cucumber, Nightwatch, Babel, Grunt,
                            AEM, jQuery, Gradle, Maven, Git, BitBucket, Optimizely, Jenkins, SonarQube
                        </div>
                    </div>
                </div>
            </div>

            <div class="middle-section__title">Career Summary</div>

            <div class="middle-section-text">
                <div class="career-block">
                    <div class="bold">TravelSupermarket Professional Software Developer:</div>
                    <div class="italics">October 2016 - Present</div>
                </div>
                <div class="career-block">
                    <div class="bold">Barrage Esports Data Analyst:</div>
                    <div class="italics">January 2018 - Present</div>
                </div>
                <div class="career-block">
                    <div class="bold">MoneySupermarket Graduate Software Developer: </div>
                    <div class="italics">October 2015 - October 2016</div>
                </div>
            </div>

            <div class="blue-section text-align-center">
                <img class="skill-image" :src="require('./assets/skills/vue.png')">
                <img class="skill-image" :src="require('./assets/skills/angular.png')">
                <img class="skill-image" :src="require('./assets/skills/react.png')">
            </div>

            <div class="middle-section__title">Personal Projects</div>

            <div class="middle-section-text">
                <div class="career-block">
                    <div class="bold">League of Legends Draft Training Tool:</div>
                    <div>A web app used to help League of Legends esports
                        coaches practice drafting in the game. Produced for the Barrage Organization staff, written in
                        JavaScript using Vue.js
                    </div>
                    <div class="italics">Repo: <a href="https://github.com/TheSimonLam/lol-draft-trainer" target="_blank">https://github.com/TheSimonLam/lol-draft-trainer</a></div>
                </div>

                <div class="career-block">
                    <div class="bold">League of Legends API Scraper:</div>
                    <div>A Node app that executes GET requests to the Riot Games
                        API obtaining detailed match data for specified players. Produced for the Barrage Organization
                        staff, written in JavaScript using node modules such as Bottleneck and Fetch
                    </div>
                    <div class="italics">Repo: <a href="https://github.com/TheSimonLam/player-analysis-scraper" target="_blank">https://github.com/TheSimonLam/player-analysis-scraper</a></div>
                </div>

                <div class="career-block">
                    <div class="bold">YoloTravellers friend finder:</div>
                    <div>A web app that enables travellers to find other travellers to embark
                        on travel adventures with. Uses AWS Services such as Cognito, Route52, S3, and Written in
                        JavaScript, React, Redux
                    </div>
                    <div class="italics">Repo: <a href="https://github.com/TheSimonLam/yolo-travellers-front-end" target="_blank">https://github.com/TheSimonLam/yolo-travellers-front-end</a></div>
                </div>

                <div class="career-block">
                    <div class="bold">League of Legends Pick/Ban Planner:</div>
                    <div>A web app that allows esports coaches to plan pick/ban
                        phase within a game. Produced for the Barrage Organization staff, written in Angular 4+
                    </div>
                    <div class="italics">Repo: <a href="https://github.com/TheSimonLam/pick-ban-lol-v2" target="_blank">https://github.com/TheSimonLam/pick-ban-lol-v2</a></div>
                </div>
            </div>
            
            <div class="middle-section__title">Education</div>

            <div class="middle-section-text">
                <div class="career-block">
                    <div class="bold">Bangor University: </div>
                    <div class="italics">September 2012 - September 2015</div>
                    <div>Studied BSc Creative Technology</div>
                    <div>Graduated with an Upper Second-Class Honours 2:1</div>
                </div>
            </div>

            <div class="blue-section text-align-center">
                <div class="request-text">References and CV available upon request!</div>
            </div>

        </div>

        
        
        <footer>
            <div class="footer-container">
                <div class="last-updated-text">Updated: 16th March 2018</div>
                <div class="email-text">thesimonlam@gmail.com</div>
            </div>
        </footer>
    </div>
</template>

<script>

import Typed from 'typed.js';

export default {
    name: 'app',
    data () {
        return {
        }
    },
    mounted(){
        let options = {
            strings: ["Front-end Dev.", "Java Dev.", "Mobile Design", "Unit Testing", "Webpack/Babel", "Marketing", "Music Prod.", "Vue.js", "React", "Video Prod.", "New Tech.", "Game Design"],
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
    #app {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        min-height: 100vh;
    }

    a, a:visited{
        background:#16c60c;
        color: white;
    }

    .middle-section-container{
        background-color: #fff;
        background-image:
        linear-gradient(90deg, transparent 79px, #abced4 79px, #abced4 81px, transparent 81px),
        linear-gradient(#eee .1em, transparent .1em);
        background-size: 100% 1.2em;
        box-shadow: inset 0px 7px 3px -3px rgba(50, 50, 50, 0.75);
        text-align: center;
    }

    .three-colums-section {
        margin: 0 15%;
        overflow: auto;
    }

    .header-wrapper{
        font-family: 'Cabin Sketch', cursive;
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
        height: 20px;
        width: 100%;
        background-color: #16c60c;
        color: white;
        font-family: 'Roboto', sans-serif;
    }

    .last-updated-text{
        float: left;
    }

    .email-text{
        float: right;
    }

    .blue-section{
        padding: calc(100%/25) 50px;
        background-color: #00A8E8;
        box-shadow: inset 0px 7px 3px -3px rgba(50, 50, 50, 0.75);
    }

    .title{
        font-size: 1.5em;
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
        padding-bottom: 50px;
        padding-top: 20px;
    }

    .flex-item{
        background-color: #00A8E8;
        padding: 15px;
        margin: 10px;
        border: 2px solid white;
        width: 100%;
        border-radius: 10px;
    }

    .top-section-block{
        height: 160px;
        margin: auto;
        padding: 30px;
        border-radius: 10px;
        background-color: #00A8E8;
        color: white;
        text-align: center;
    }

    .top-section__left-block{
        display: inline-block;
        vertical-align: middle;
    }

    .top-section__right-block{
        display: inline-block;
        padding-left: 30px;
        vertical-align: middle;
        font-size: 2.5em;
        text-align: left;
    }

    .profile-image{
        border-radius: 50%;
        border: 5px solid #16c60c;
        max-height: 150px;
    }

    .social-media-container{
        margin: auto;
        padding: 20px 0;
        text-align: center;
    }

    .social-media-container a{
        background: none;
    }

    .social-media-image{
        padding: 0 15px;
        height: 50px;
    }

    .dynamic-text{
        color: #16c60c;
        font-weight: bold;
        background: white;
        display: inline-block;
    }

    .middle-section__title{
        padding-top: 50px;
        margin: 0 auto;
        font-size: 1.5em;
        height: 50px;
        color: #007EA7;
    }

    .middle-section-text{
        width: 60%;
        display: inline-block;
        padding: 30px;
        text-align: left;
        color: #007EA7;
        font-size: 1.2em;
    }

    .bold{
        font-weight: bold;
    }

    .italics{
        font-style: italic;
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .career-block{
        margin: 0 0 40px 0;
    }

    .text-align-center{
        text-align: center;
    }

    .skill-image{
        height: 50px;
        background: white;
        border-radius: 10px;
        padding: 5px;
        margin: 10px;
    }

    .request-text{
        font-size: 2em;
        font-style: italic;
        color: white;
        font-weight: bold;
    }

    /* Smartphones (portrait and landscape) ----------- */
    @media only screen
    and (max-device-width: 480px){
        body .profile-image{
            max-height: 80px;
        }
    }

    /* iPads (portrait) ----------- */
    @media only screen
    and (max-device-width: 1024px) {
        .flex-container{
            display: block;
        }

        .three-colums-section{
            margin: auto;
        }

        .flex-item{
            width: auto;
        }

        .profile-image{
            max-height: 120px;
        }

        .top-section__right-block{
            font-size: 1.3em;
        }
    }
</style>
