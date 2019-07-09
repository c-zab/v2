<template>
  <nav class="navbar sticky-top navbar-dark navbar-expand-sm bg-color">
    <button
      class="navbar-toggler"
      type="button"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      v-on:click="toggleNavbar"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav" :class="{ 'show': show }">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item px-3">
          <a class="nav-link" href="#cover" v-on:click="toggleNavbar">HOME</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link" href="#about" v-on:click="toggleNavbar">ABOUT</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link" href="#skills" v-on:click="toggleNavbar">SKILLS</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link" href="#portfolio" v-on:click="toggleNavbar">PORTFOLIO</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link" href="#contact" v-on:click="toggleNavbar">CONTACT</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
	data() {
		return {
			show: false
		};
	},
	methods: {
		toggleNavbar() {
			this.show = !this.show;
		}
	}
};
</script>

