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
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#cover" v-on:click="toggleNavbar">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about" v-on:click="toggleNavbar">ABOUT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#skills" v-on:click="toggleNavbar">SKILLS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#portfolio" v-on:click="toggleNavbar">PORTFOLIO</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#testimonials" v-on:click="toggleNavbar">TESTIMONIALS</a>
        </li>
        <li class="nav-item">
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

<style scoped>
.navbar {
  border-bottom: 3px solid #14cbeb;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
}

.navbar.navbar-dark .navbar-nav .nav-item .nav-link:hover,
.navbar.navbar-dark .navbar-nav .nav-item .nav-link:focus {
  color: #b32b72;
}
</style>
