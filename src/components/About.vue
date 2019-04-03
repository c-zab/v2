<template>
  <div id="about-sec" class="container">
    <Title title="ABOUT"/>
    <div class="container">
      <div class="row text-center align-self-center">
        <div class="col-sm">
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
        <div class="col-sm align-self-center">
          <Language name="Python" percentage="70"/>
          <Language name="PHP" percentage="70"/>
          <Language name="C#" percentage="60"/>
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
/* @media (min-width: 768px) { */
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
