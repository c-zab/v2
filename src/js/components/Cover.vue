<template>
  <div id="cover" class="container-fluid px-0">
    <CoverImages />
    <div class="jumbotron cover-caption shadow-none bg-transparent">
      <div class="container">
        <div class="row justify-content-start">
          <div
            class="col col-md-8"
            data-aos="fade-right"
            data-aos-anchor-placement="center-bottom"
          >
            <h1 class="text-white title">
              Hello, my name is
              <span class="text-success">
                Carlos Zabaleta
              </span>
              and I'm a  
              <span class="text-success">
                full stack developer
              </span>
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <button
              type="button"
              class="btn btn-info btn-info-cover"
              data-aos="fade-right"
              data-aos-delay="500"
              @click.prevent="scrollTo('#about')"
            >
              View more
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CoverImages from './includes/CoverImages';

export default {
  name: 'Cover',
  components: {
    CoverImages,
  },
  methods: {
    scrollTo(selector) {
      document.querySelector(selector).scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>

<style>
  /* @import '../../scss/elements/_cover.scss'; */
</style>
