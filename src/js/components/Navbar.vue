<template>
  <nav class="navbar sticky-top navbar-dark bg-color navbar-expand-sm">
    <button
      class="navbar-toggler mx-auto"
      type="button"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      @click="show = !show"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div
      id="navbarNav"
      class="collapse navbar-collapse"
      :class="{ show }"
    >
      <ul class="navbar-nav mx-auto">
        <li class="nav-item px-3">
          <a
            :class="{ 'active-item': isActiveCover }"
            class="nav-link"
            href="#cover"
            @click.prevent="
              scrollTo('#cover');
              activeCover();
            "
          >
            HOME
          </a>
        </li>
        <li class="nav-item px-3">
          <a
            :class="{ 'active-item': isActiveAbout }"
            class="nav-link"
            href="#about"
            @click.prevent="
              scrollTo('#about');
              activeAbout();
            "
          >
            ABOUT
          </a>
        </li>
        <li class="nav-item px-3">
          <a
            :class="{ 'active-item': isActiveSkills }"
            class="nav-link"
            href="#skills"
            @click.prevent="
              scrollTo('#skills');
              activeSkills();
            "
          >
            SKILLS
          </a>
        </li>
        <li class="nav-item px-3">
          <a
            :class="{ 'active-item': isActivePortfolio }"
            class="nav-link"
            href="#portfolio"
            @click.prevent="
              scrollTo('#portfolio');
              activePortfolio();
            "
          >
            PORTFOLIO
          </a>
        </li>
        <li class="nav-item px-3">
          <a
            :class="{ 'active-item': isActiveContact }"
            class="nav-link"
            href="#contact"
            @click.prevent="
              scrollTo('#contact');
              activeContact();
            "
          >
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      show: false,
      isActiveCover: false,
      isActiveAbout: false,
      isActiveSkills: false,
      isActivePortfolio: false,
      isActiveContact: false,
    };
  },
  updated() {
    setTimeout(() => {
      this.isActiveCover = false;
      this.isActiveAbout = false;
      this.isActiveSkills = false;
      this.isActivePortfolio = false;
      this.isActiveContact = false;
    }, 2000);
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show;
    },
    scrollTo(selector) {
      document.querySelector(selector).scrollIntoView({ behavior: 'smooth' });
      this.show = false;
    },
    activeCover() {
      this.isActiveCover = true;
      this.isActiveAbout = false;
      this.isActiveSkills = false;
      this.isActivePortfolio = false;
      this.isActiveContact = false;
    },
    activeAbout() {
      this.isActiveCover = false;
      this.isActiveAbout = true;
      this.isActiveSkills = false;
      this.isActivePortfolio = false;
      this.isActiveContact = false;
    },
    activeSkills() {
      this.isActiveCover = false;
      this.isActiveAbout = false;
      this.isActiveSkills = true;
      this.isActivePortfolio = false;
      this.isActiveContact = false;
    },
    activePortfolio() {
      this.isActiveCover = false;
      this.isActiveAbout = false;
      this.isActiveSkills = false;
      this.isActivePortfolio = true;
      this.isActiveContact = false;
    },
    activeContact() {
      this.isActiveCover = false;
      this.isActiveAbout = false;
      this.isActiveSkills = false;
      this.isActivePortfolio = false;
      this.isActiveContact = true;
    },
  },
};
</script>
