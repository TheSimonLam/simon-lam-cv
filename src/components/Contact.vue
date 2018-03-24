<template>
  <div class="section">
    <div class="middle-section">
      <div class="contact-top-section">
        <div class="middle-block-contact fadeInContact">

          <div class="chat-text">I'm always up for a chat!</div>

          <div class="contact-detail-wrapper">
            <img class="contact-icon" src="../assets/contact/at.png">
            <div class="contact-detail">thesimonlam@gmail.com</div>
          </div>

          <div class="contact-detail-wrapper">
            <a href="https://www.linkedin.com/in/simon-lam-656671100/">
              <img class="contact-icon" src="../assets/contact/linkedin.png">
              <div class="contact-detail">linkedin.com/simon-lam</div>
            </a>
          </div>

          <div class="contact-detail-wrapper">
            <a href="https://github.com/TheSimonLam">
              <img class="contact-icon" src="../assets/contact/github.png">
              <div class="contact-detail">github.com/TheSimonLam</div>
            </a>
          </div>

          <div class="contact-detail-wrapper">
            <a href="https://soundcloud.com/ninjaroni">
              <img class="contact-icon" src="../assets/contact/soundcloud.png">
              <div class="contact-detail">soundcloud.com/ninjaroni</div>
            </a>
          </div>

          <div class="contact-detail-wrapper">
            <img class="contact-icon" src="../assets/contact/phone.png">
            <div class="contact-detail">07799 673369</div>
          </div>

          <div class="contact-detail-wrapper">
            <img class="contact-icon" src="../assets/contact/map.png">
            <div class="contact-detail">Wrexham, North Wales</div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {

    }
  },
  created(){

  }
}
</script>

<style>
  .contact-top-section{
    padding-top: calc(100%/25);
    text-align: center;
  }

  .middle-block-contact{
    padding: 30px;
    border-radius: 10px;
    background-color: white;
    color: white;
    display: inline-block;
    text-align: left;

    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .contact-detail-wrapper{
    padding: 10px;
  }

  .contact-icon{
    width: 35px;
    vertical-align: middle;
  }

  .contact-detail{
    display: inline-block;
    color: #00A8E8;
    font-size: 2em;
    vertical-align: middle;
    padding-left: 15px;
    font-weight: bold;
  }

  a{
    text-decoration: none;
  }

  .fadeInContact {
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

  .chat-text{
    color: #003459;
    font-size: 3em;
    padding-bottom: 30px;
    font-weight: bold;
    font-family: 'Cabin Sketch', cursive;
    text-decoration: underline;
  }

  /* Smartphones (portrait and landscape) ----------- */
  @media only screen
  and (max-device-width: 480px){
    body .chat-text{
      font-size: 1.5em;
    }

    body .contact-detail{
      font-size: 1.2em;
    }
  }

  /* iPads (portrait) ----------- */
  @media only screen
  and (max-device-width: 1024px) {
    .middle-section{
      margin: auto;
    }

    .chat-text{
      font-size: 2em;
    }

    .contact-detail{
      font-size: 1.5em;
    }
  }
</style>
