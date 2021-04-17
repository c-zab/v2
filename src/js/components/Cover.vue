<template>
  <div id="cover" class="container-fluid px-0">
    <CoverImages />
    <div class="jumbotron cover-caption shadow-none bg-transparent">
      <div class="container">
        <h1 class="text-white">Hello, I'm Carlos Zabaleta</h1>
        <h1 class="text-success">I'm a full-stack developer</h1>
        <button
          type="button"
          class="btn btn-outline-info btn-lg"
          data-aos="fade-right"
          data-aos-delay="500"
          @click.prevent="scrollTo('#about')"
        >View more</button>
      </div>
    </div>
  </div>
</template>

<script>
import CoverImages from './includes/CoverImages';

export default {
  name: 'cover',
  components: {
    CoverImages,
  },
  methods: {
    scrollTo(selector) {
      document.querySelector(selector).scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss">
  @import '../../scss/elements/_cover.scss';
  
</style>
