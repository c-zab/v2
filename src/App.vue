<template>
  <div id="app">
    <Cover />
    <Navbar />
    <About />
    <Skills />
  </div>
</template>

<script>
import Cover from "./js/components/Cover";
import Navbar from "./js/components/Navbar";
import About from "./js/components/About";
import Skills from './js/components/Skills';

export default {
  name: "App",
  components: {
    Cover,
    Navbar,
    About,
    Skills,
  },
};
</script>

<style>
</style>