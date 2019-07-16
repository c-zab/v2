<template>
  <pinned
    :isActiveCover="isActiveCover"
    :isActiveAbout="isActiveAbout"
    :isActiveSkills="isActiveSkills"
    :isActivePortfolio="isActivePortfolio"
    :isActiveContact="isActiveContact"
  >
    <nav class="mx-auto navbar navbar-dark navbar-expand-sm bg-color">
      <button
        class="navbar-toggler mx-auto"
        type="button"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav" :class="{ 'show': show }">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item px-3">
            <a
              :class="{'active-item':isActiveCover}"
              class="nav-link"
              href="#cover"
              @click.prevent="scrollTo('#cover')"
            >HOME</a>
          </li>
          <li class="nav-item px-3">
            <a
              :class="{'active-item':isActiveAbout}"
              class="nav-link"
              href="#about"
              @click.prevent="scrollTo('#about')"
            >ABOUT</a>
          </li>
          <li class="nav-item px-3">
            <a
              :class="{'active-item':isActiveSkills}"
              class="nav-link"
              href="#skills"
              @click.prevent="scrollTo('#skills')"
            >SKILLS</a>
          </li>
          <li class="nav-item px-3">
            <a
              :class="{'active-item':isActivePortfolio}"
              class="nav-link"
              href="#portfolio"
              @click.prevent="scrollTo('#portfolio')"
            >PORTFOLIO</a>
          </li>
          <li class="nav-item px-3">
            <a
              :class="{'active-item':isActiveContact}"
              class="nav-link"
              href="#contact"
              @click.prevent="scrollTo('#contact')"
            >CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  </pinned>
</template>

<script>
import pinned from "./includes/Pinned";

export default {
	components: {
		pinned
	},
	data() {
		return {
			show: false,
			isActiveCover: false,
			isActiveAbout: false,
			isActiveSkills: false,
			isActivePortfolio: false,
			isActiveContact: false
		};
	},
	methods: {
		toggleNavbar() {
			this.show = !this.show;
		},
		scrollTo(selector) {
			document.querySelector(selector).scrollIntoView({ behavior: "smooth" });
		}
	},
	mounted() {
		Event.$on("isActiveCover", () => {
			this.isActiveCover = true;
			this.isActiveAbout = false;
			this.isActiveSkills = false;
			this.isActivePortfolio = false;
			this.isActiveContact = false;
		});
		Event.$on("isActiveAbout", () => {
			this.isActiveCover = false;
			this.isActiveAbout = true;
			this.isActiveSkills = false;
			this.isActivePortfolio = false;
			this.isActiveContact = false;
		});
		Event.$on("isActiveSkills", () => {
			this.isActiveCover = false;
			this.isActiveAbout = false;
			this.isActiveSkills = true;
			this.isActivePortfolio = false;
			this.isActiveContact = false;
		});
		Event.$on("isActivePortfolio", () => {
			this.isActiveSkills = false;
			this.isActiveCover = false;
			this.isActiveAbout = false;
			this.isActivePortfolio = true;
			this.isActiveContact = false;
		});
		Event.$on("isActiveContact", () => {
			this.isActiveSkills = false;
			this.isActiveCover = false;
			this.isActiveAbout = false;
			this.isActivePortfolio = false;
			this.isActiveContact = true;
		});
	}
};
</script>

