<template>
  <div id="cover">
    <div class="container-fluid px-0">
      <picture>
        <source media="(max-width: 550px)" type="image/webp" srcset="/images/coverBg-450w.webp" />
        <source media="(max-width: 550px)" type="image/png" srcset="/images/coverBg-450w.png" />
        <source media="(max-width: 800px)" type="image/webp" srcset="/images/coverBg-800w.webp" />
        <source media="(max-width: 800px)" type="image/png" srcset="/images/coverBg-800w.png" />
        <source media="(min-width: 1300px)" type="image/webp" srcset="/images/coverBg-1300w.webp" />
        <source media="(min-width: 1300px)" type="image/png" srcset="/images/coverBg-1300w.png" />
        <img
          src="/images/coverBg-1300w.webp"
          type="image/webp"
          alt="placeholder"
          class="img-fluid cover-image"
        />
      </picture>
      <div class="jumbotron cover-caption shadow-none bg-transparent">
        <div class="container">
          <h1
            data-aos="fade-right"
            data-aos-delay="800"
            data-aos-duration="800"
            data-aos-anchor-placement="top-bottom"
            class="text-white"
          >Hello, I'm Carlos Zabaleta.</h1>
          <h1
            data-aos="fade-right"
            data-aos-delay="800"
            data-aos-duration="800"
            data-aos-anchor-placement="top-bottom"
            class="text-success"
          >I'm a full-stack web developer.</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

