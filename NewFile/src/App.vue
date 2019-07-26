<template>
  <div id="app">
    <Navbar />
    <About class="py-3" />
    <Skills class="py-3" />
    <Portfolio lazy class="py-3" />
    <Contact class="py-3" />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import About from "./components/About";
export default {
	name: "App",
	components: {
		Navbar,
		About,
		Skills: () => import("./components/Skills"),
		Portfolio: () => import("./components/Portfolio"),
		Contact: () => import("./components/Contact"),
		Footer: () => import("./components/Footer")
	}
};
</script>
