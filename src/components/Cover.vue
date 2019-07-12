<template>
  <div id="cover">
    <div class="container-fluid px-0">
      <picture>
        <source media="(max-width: 550px)" srcset="../assets/images/coverBg-450w.png" />
        <source media="(max-width: 800px)" srcset="../assets/images/coverBg-800w.png" />
        <source media="(min-width: 1300px)" srcset="../assets/images/coverBg-1300px.png" />
        <img
          src="../assets/images/coverBg-1300px.png"
          alt="placeholder"
          class="img-fluid cover-image"
        />
      </picture>
      <div class="jumbotron cover-caption shadow-none bg-transparent">
        <div class="container">
          <h1
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="800"
            data-aos-anchor-placement="top-bottom"
            class="text-white"
          >Hello, I'm Carlos Zabaleta.</h1>
          <h1
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="800"
            data-aos-anchor-placement="top-bottom"
            class="text-success"
          >I'm a full-stack web developer.</h1>
          <!-- <div
                class="button"
                data-aos="zoom-in"
                data-aos-delay="500"
                data-aos-duration="500"
                data-aos-anchor-placement="top-bottom"
                dest="about"
              >
                View my work
                <i class="fas fa-arrow-right fa-rotate-90"></i>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

