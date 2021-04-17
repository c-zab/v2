<template>
  <div id="app">
    <Cover />
    <Navbar />
    <About />
  </div>
</template>

<script>
import Cover from "./js/components/Cover";
import Navbar from "./js/components/Navbar";
import About from "./js/components/About";

export default {
  name: "App",
  components: {
    Cover,
    Navbar,
    About,
  },
};
</script>

<style>
</style>