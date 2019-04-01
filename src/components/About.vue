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
        <div class="col-sm align-self-center"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "./includes/Title";

export default {
  name: "about-sec",
  components: {
    Title
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
