<template>
  <div id="app">
    <Cover />
    <Navbar />
    <About class="py-3" />
    <Skills class="py-3" />
    <Portfolio class="py-3" />
    <Contact class="py-3" />
    <Footer />
  </div>
</template>

<script>
import Cover from "./components/Cover";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Cover,
    Navbar,
    About,
    Skills,
    Portfolio,
    Contact,
    Footer
    // Skills: () => import("./components/Skills"),
    // Portfolio: () => import("./components/Portfolio"),
    // Contact: () => import("./components/Contact"),
    // Footer: () => import("./components/Footer")
  }
};
</script>
