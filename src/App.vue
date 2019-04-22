<template>
  <div id="app">
    <Cover/>
    <Navbar/>
    <About class="py-3"/>
    <Skills class="py-3"/>
    <Portfolio class="py-3"/>
    <!-- <Testimonials class="py-3"/> -->
    <Contact class="py-3"/>
    <Footer/>
  </div>
</template>

<script>
import Cover from "./components/Cover";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
// import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default {
  name: "App",
  components: {
    Cover,
    Navbar,
    Footer,
    About,
    Skills,
    Portfolio,
    // Testimonials,
    Contact
  }
};
</script>

<style>
</style>
