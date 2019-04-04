<template>
  <div id="about-sec" class="container">
    <Title title="ABOUT"/>
    <div class="container pb-5">
      <div class="row text-center align-self-center">
        <div class="col-md">
          <img class="me-picture" src="../assets/images/me.jpg" align="center" alt="image">
          <h2>Who I am?</h2>
          <p>
            I am a
            <strong>full-stack</strong> developer based in Toronto, Canada.
          </p>
          <p>
            I am pasionate for developing quality software; besides, I am a
            <strong>team work person</strong> and I like to create intuitive and dynamic user experiences.
          </p>
        </div>
        <div class="col-md align-self-center">
          <Language name="Python" percentage="70"/>
          <Language name="PHP" percentage="70"/>
          <Language name="C#" percentage="60"/>
          <Language name="Typescript" percentage="65"/>
          <Language name="VueJS" percentage="70"/>
          <Language name="React" percentage="55"/>
          <Language name="JS" percentage="70"/>
          <Language name="CSS" percentage="80"/>
          <Language name="HTML" percentage="75"/>
        </div>
      </div>
    </div>
    <div class="container pt-4">
      <div class="row text-center">
        <div class="col-md-6 col-lg py-3">
          <i
            class="about-icon fas fa-5x"
            @mouseover="hoverBolt = true"
            @mouseleave="hoverBolt = false"
            :class="{'amber-text':hoverBolt, 'fa-bolt':hoverBolt,'fa-tachometer-alt':!hoverBolt}"
          ></i>
          <h3 @mouseover="hoverBolt = true" @mouseleave="hoverBolt = false">Fast</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore fuga numquam</p>
        </div>
        <div class="col-md-6 col-lg py-3">
          <i
            class="about-icon fas fa-5x"
            @mouseover="hoverMobile = true"
            @mouseleave="hoverMobile = false"
            :class="{'indigo-text':hoverMobile, 'fa-laptop':!hoverMobile,'fa-mobile-alt':hoverMobile}"
          ></i>
          <h3 @mouseover="hoverMobile = true" @mouseleave="hoverMobile = false">Responsive</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore fuga numquam</p>
        </div>
        <div class="col-md col-lg py-3">
          <i
            class="about-icon far fa-5x"
            @mouseover="hoverLight=true"
            @mouseleave="hoverLight=false"
            :class="{'fa-grin-beam': hoverLight, 'fa-lightbulb': !hoverLight, 'teal-text': hoverLight}"
          ></i>
          <h3 @mouseover="hoverLight=true" @mouseleave="hoverLight=false">Intuitive</h3>
          <p>yellow rgba-yellow-strong Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore fuga numquam</p>
        </div>
        <div class="col-md col-lg py-3">
          <i
            class="about-icon fa-5x"
            @mouseover="hoverRocket = true"
            @mouseleave="hoverRocket = false"
            :class="{'fas fa-rocket':hoverRocket,'far fa-paper-plane':!hoverRocket, 'red-text':hoverRocket}"
          ></i>
          <h3 @mouseover="hoverRocket = true" @mouseleave="hoverRocket = false">Dinamic</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore fuga numquam</p>
        </div>
        <div class="col-md-12 col-lg-12 py-3">
          <i
            class="about-icon fa-5x"
            @mouseover="hoverCode = true"
            @mouseleave="hoverCode = false"
            :class="{'fas fa-laptop-code':hoverCode, 'far fa-file-code':!hoverCode, 'light-blue-text': hoverCode }"
          ></i>
          <h3 @mouseover="hoverCode = true" @mouseleave="hoverCode = false">Code</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore fuga numquam</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "./includes/Title";
import Language from "./includes/Language";

export default {
  name: "about-sec",
  components: {
    Title,
    Language
  },
  data() {
    return {
      hoverBolt: false,
      hoverMobile: false,
      hoverLight: false,
      hoverRocket: false,
      hoverCode: false
    };
  }
};
</script>

<style scoped>
.about-icon {
  width: 100%;
}

img.me-picture {
  width: 70%;
  clip-path: polygon(
    30% 15%,
    40% 15%,
    70% 15%,
    90% 50%,
    70% 85%,
    40% 85%,
    30% 85%,
    10% 50%
  );
  transition: clip-path 500ms;
}

img.me-picture:hover {
  clip-path: polygon(
    30% 5%,
    70% 5%,
    95% 30%,
    95% 70%,
    70% 95%,
    30% 95%,
    5% 70%,
    5% 30%
  );
}

/* } */
</style>
