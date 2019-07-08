<template>
  <div class="title-sec pb-4">
    <div class="row justify-content-center">
      <h2
        v-bind:id="title | idName"
        class="sec-title col-auto"
        data-aos="fade-right"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="500">{{ title }}</h2>
    </div>
    <div class="row justify-content-center pt-2">
      <div
        data-aos="fade-right"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="500"
        data-aos-delay="200"
        class="col-md-auto bar"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  filters: {
    idName(value) {
      return value.toLowerCase();
    }
  }
};
</script>

<style scoped>
.bar {
  width: 5em;
  height: 0.5em;
  background-color: #2d2d2d;
}

.sec-title {
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  color: #2d2d2d;
}

.sec-title::before {
  display: block;
  content: "";
  height: 4rem;
  visibility: hidden;
  pointer-events: none;
}
</style>
