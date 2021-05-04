<template>
  <div id="app">
    <Cover />
    <Navbar />
    <About />
    <Skills />
    <Portfolio />
  </div>
</template>

<script>
import Cover from './js/components/Cover';
import Navbar from './js/components/Navbar';
import About from './js/components/About';
import Skills from './js/components/Skills';
import Portfolio from './js/components/Portfolio';

export default {
  name: 'App',
  components: {
    Cover,
    Navbar,
    About,
    Skills,
    Portfolio,
  },
};
</script>

<style>
</style>