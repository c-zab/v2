<template>
  <div id="app">
    <Navbar />
    <About class="py-3" />
    <Skills class="py-3" />
    <Portfolio class="py-3" />
    <Contact class="py-3" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default {
  name: "App",
  components: {
    Navbar,
    About,
    Skills,
    Portfolio,
    Contact
    // Skills: () => import("./components/Skills"),
    // Portfolio: () => import("./components/Portfolio"),
    // Contact: () => import("./components/Contact"),
    // Footer: () => import("./components/Footer")
  }
};
</script>
