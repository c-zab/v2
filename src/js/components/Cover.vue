<template>
  <div id="cover" class="container-fluid px-0">
    <slot />
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
export default {
  name: 'cover',
  methods: {
    scrollTo(selector) {
      document.querySelector(selector).scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
