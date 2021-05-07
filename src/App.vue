<template>
  <div id="app">
    <Cover />
    <Navbar />
    <About />
    <Skills />
    <Portfolio />
    <Footer />
  </div>
</template>

<script>
import Cover from './js/components/Cover';
import Navbar from './js/components/Navbar';
import About from './js/components/About';
import Skills from './js/components/Skills';
import Portfolio from './js/components/Portfolio';
import Footer from './js/components/Footer';

export default {
  name: 'App',
  components: {
    Cover,
    Navbar,
    About,
    Skills,
    Portfolio,
    Footer,
  },
};
</script>

<style>
</style>