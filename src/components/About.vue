<template>
  <div id="about-sec" class="container">
    <Title title="ABOUT"/>
    <div class="container">
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
          <Language name="Java" percentage="65"/>
          <Language name="VueJS" percentage="70"/>
          <Language name="React" percentage="55"/>
          <Language name="Git" percentage="80"/>
          <Language name="JS" percentage="70"/>
          <Language name="CSS" percentage="80"/>
          <Language name="HTML" percentage="75"/>
        </div>
      </div>
    </div>
    <div class="container pt-4">
      <div class="row text-center">
        <div class="col-md-6 col-lg bg-danger py-3">
          <i class="fas fa-tachometer-alt fa-5x"></i>
          <h3>Fast</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore fuga numquam</p>
        </div>
        <div class="col-md-6 col-lg bg-info py-3">
          <i class="fas fa-mobile-alt fa-5x"></i>
          <h3>Responsive</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore fuga numquam</p>
        </div>
        <div class="col-md col-lg bg-danger py-3">
          <i class="far fa-lightbulb fa-5x"></i>
          <h3>Intuitive</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore fuga numquam</p>
        </div>
        <div class="col-md col-lg bg-info py-3">
          <i class="fas fa-rocket fa-5x"></i>
          <h3>Dinamic</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore fuga numquam</p>
        </div>
        <div class="col-md-12 col-lg-12 bg-success py-3">
          <i class="fas fa-laptop-code fa-5x"></i>
          <h3>Code</h3>
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
  }
};
</script>

<style scoped>
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
