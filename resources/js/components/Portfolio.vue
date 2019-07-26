<template>
  <div ref="portfolio-sec" id="portfolio" class="container">
    <Title title="PORTFOLIO" />
    <div class="container pb-4">
      <div class="controls row justify-content-center">
        <button
          data-aos="zoom-in"
          data-aos-delay="300"
          type="button"
          class="col-sm-4 col-md-2 col-xs-2 control btn btn-info m-1"
          data-filter="all"
        >All</button>
        <button
          data-aos="zoom-in"
          data-aos-delay="350"
          type="button"
          class="col-sm-4 col-md-2 col-xs-2 control btn btn-info m-1"
          data-filter=".backend"
        >Backend</button>
        <button
          data-aos="zoom-in"
          data-aos-delay="400"
          type="button"
          class="col-sm-4 col-md-2 col-xs-2 control btn btn-info m-1"
          data-filter=".frontend"
        >Frontend</button>
        <button
          data-aos="zoom-in"
          data-aos-delay="450"
          type="button"
          class="col-sm-4 col-md-2 col-xs-2 control btn btn-info m-1"
          data-filter=".leadership"
        >Leadership</button>
      </div>
    </div>
    <div class="containerMix row justify-content-center no-gutters">
      <cardItem @showModal="showModal" :cardItem="queryfox" />
      <cardItem @showModal="showModal" :cardItem="czabalet" />
      <cardItem @showModal="showModal" :cardItem="delisa" />
      <cardItem @showModal="showModal" :cardItem="space" />
      <cardItem @showModal="showModal" :cardItem="tedx" />
      <cardItem @showModal="showModal" :cardItem="games" />
      <cardItem @showModal="showModal" :cardItem="books" />
      <cardItem @showModal="showModal" :cardItem="aiesec" />
      <cardItem @showModal="showModal" :cardItem="google" />
    </div>
    <modal :modalData="modalData" v-if="isModalVisible" @close="isModalVisible = false" />
  </div>
</template>

<script>
import Title from "./includes/Title";
import cardItem from "./includes/cardItem";
import mixitup from "mixitup";
import modal from "./includes/Modal";

export default {
  name: "portfolio",
  components: {
    Title,
    cardItem,
    modal
  },
  async mounted() {
    var containerEl = document.querySelector(".containerMix");
    mixitup(containerEl);
    let portfolio_sec = this.$refs["portfolio-sec"].offsetTop;
    Event.$emit("offsetPortfolio", portfolio_sec);
  },
  methods: {
    showModal(modalData) {
      this.modalData = modalData;
      this.isModalVisible = true;
    }
  },
  data() {
    return {
      show: false,
      isModalVisible: false,
      modalData: {},
      queryfox: {
        title: "QueryFox",
        subtitle: "Unified Management System",
        description:
          "Queryfox is a Canadian startup which gives municipalities unprecedented control over managing resident issues, assigning tasks, sharing knowledge, defining trends and creating metrics for budgeting and benchmarking.",
        image: "queryfox.png",
        imageWebp: "queryfox.webp",
        imageModal: "queryfoxModal.gif",
        imageModalWebp: "queryfoxModal.webp",
        imageModalXL: "queryfoxModalXL.gif",
        imageModalXLWebp: "queryfoxModalXL.webp",
        languages: "PHP, Laravel and Vue ",
        links: {
          site: "https://queryfox.com/",
          repository: "private"
        },
        types: { backend: true, frontend: true, leadership: false }
      },
      czabalet: {
        title: "Czabalet",
        subtitle: "Personal Website",
        description: `Czabalet is a dream come true. Since I started my first "Hello World" in Java I had an idea about showing my work and experience in a website, build it from scratch. At this point in my life I have learnt enough about programming languages, algorithms, and best practices for front end and back end development that helped me to build this gorgeous website and others. This is one of my first steps yet not the last in this development journey.`,
        image: "czabalet.png",
        imageWebp: "czabalet.webp",
        imageModal: "czabaletModal.gif",
        imageModalWebp: "czabaletModal.webp",
        imageModalXL: "czabaletModalXL.gif",
        imageModalXLWebp: "czabaletModalXL.webp",
        languages: "Vue and Bootstrap",
        links: {
          site: "http://czabalet.com/",
          repository: "private"
        },
        types: { backend: true, frontend: true, leadership: false }
      },
      delisa: {
        title: "Delisa",
        subtitle: "Amaranth Retailer",
        description:
          "Delisa is a family business operated by professional people in the food industry. As a group, we have extensive experience of our members who have worked for more than 30 years in local and international companies, (Food Industry) providing a solid base and confidence in our operations, processes and products.",
        image: "delisa.png",
        imageWebp: "delisa.webp",
        imageModal: "delisaModal.gif",
        imageModalWebp: "delisaModal.webp",
        imageModalXL: "delisaModalXL.gif",
        imageModalXLWebp: "delisaModalXL.webp",
        languages: "Bootstrap, Vue and Laravel",
        links: {
          site: "http://delisamaranth.com/",
          repository: "https://github.com/c-zab/delisa"
        },

        types: { backend: true, frontend: true, leadership: false }
      },
      space: {
        title: "Space Shooter",
        subtitle: "College Project",
        description: `Arrow 6.0 is the latest game inspired by the famous old-school manic shooters. This Shoot 'em up will immerse you in a space environment aboard an aircraft made in Canada (Super Arrow) where your goal is to shoot waves of enemies! This "bullet hell" game is easy-to-handle but hard to master!`,
        image: "space.png",
        imageWebp: "space.webp",
        imageModal: "spaceModal.gif",
        imageModalWebp: "spaceModal.webp",
        imageModalXL: "spaceModalXL.gif",
        imageModalXLWebp: "spaceModalXL.webp",
        languages: "Typescript",
        links: {
          repository: "https://github.com/ClaudiaFeliciano/Arrow-6"
        },
        types: { backend: false, frontend: true, leadership: false }
      },
      books: {
        title: "Books Library",
        subtitle: "College Project",
        description:
          "Books Library is a web project developed in Centennial College using C# for the backend (ASP.net MVC). We work as a team of 6 people working in an Agile environment.",
        image: "books.png",
        imageWebp: "books.webp",
        imageModal: "booksModal.gif",
        imageModalWebp: "booksModal.webp",
        imageModalXL: "booksModalXL.gif",
        imageModalXLWebp: "booksModalXL.webp",
        languages: "C#, MySQL and Bootstrap",
        links: {
          repository: "https://github.com/UTSCCSCC01/final-charjd"
        },
        types: { backend: true, frontend: true, leadership: true }
      },
      games: {
        title: "Games and Stuff",
        subtitle: "Entrepreneurship",
        description:
          "Games and Stuff (not final name) is an entrepreneurship business idea. Anthony Portocarrero Garcia, owner, is a guy with autism who has been collecting video games since a young age. So far, he has more that 4000 video games including consoles, toys and more objects related with video games. Besides, he also collects videos. We are thinking about finding the best way to sell and buy video games, toys and others related with video games and videos from Canada to all around the world.",
        image: "games.png",
        imageWebp: "games.webp",
        imageModal: "gamesModal.gif",
        imageModalWebp: "gamesModal.webp",
        imageModalXL: "gamesModalXL.gif",
        imageModalXLWebp: "gamesModalXL.webp",
        languages: "Python, Django and MongoDB",
        links: { repository: "private", construction: true },
        types: { backend: true, frontend: true, leadership: false }
      },
      aiesec: {
        title: "AIESEC",
        subtitle: "Global Leadership Movement",
        description:
          "AIESEC is the world's largest youth-run organization. It is an international non-governmental and Not-for-profit that provides young people with leadership development, cross-cultural any internships, and volunteer exchange globalist experiences. The organization focuses on empowering young people to make a Progressive social impact. The AIESEC network includes approximately 44,280 members in 127 countries.",
        image: "aiesec.png",
        imageWebp: "aiesec.webp",
        imageModal: "aiesecModal.gif",
        imageModalWebp: "aiesecModal.webp",
        imageModalXL: "aiesecModalXL.gif",
        imageModalXLWebp: "aiesecModalXL.webp",
        languages: "Team Work, Sales, and Time Management",
        links: {
          site: "https://aiesec.org/",
          volunteer: true
        },

        types: { backend: false, frontend: false, leadership: true }
      },
      tedx: {
        title: "TEDx",
        subtitle: "Ideas Worth Spreading",
        description:
          "TEDx brings the spirit of TED’s mission of ideas worth spreading to local communities around the globe. TEDx events are organized by curious individuals who seek to discover ideas and spark conversations in their own community. TEDx events include live speakers and recorded TED Talks, and are organized independently under a free license granted by TED.",
        image: "tedx.png",
        imageWebp: "tedx.webp",
        imageModal: "tedxModal.gif",
        imageModalWebp: "tedxModal.webp",
        imageModalXL: "tedxModalXL.gif",
        imageModalXLWebp: "tedxModalXL.webp",
        languages:
          "Event Management, Volunteer Management, Finance, and Team Empowerment",
        links: {
          site: "https://www.tedxumsa.org",
          volunteer: true
        },
        types: { backend: false, frontend: false, leadership: true }
      },
      google: {
        title: "Google Developers Group",
        subtitle: "Developers interested in Google's Technology",
        description:
          "Google Developers Group (GDG) is for people who are interested in Google's developer technology; everything from the Android and App Engine platforms, to product APIs like the YouTube API, Google+ API, Google Maps API and the Google Calendar API, to initiatives like OpenSocial. Check out code.google.com for the full list of offerings.",
        image: "google.png",
        imageWebp: "google.webp",
        imageModal: "googleModal.gif",
        imageModalWebp: "googleModal.webp",
        imageModalXL: "googleModalXL.gif",
        imageModalXLWebp: "googleModalXL.webp",
        languages: "Presentation Skills, Teaching and Counselling",
        links: {
          site: "https://developers.google.com/community/gdg/",
          volunteer: true
        },
        types: { backend: false, frontend: false, leadership: true }
      }
    };
  }
};
</script>
