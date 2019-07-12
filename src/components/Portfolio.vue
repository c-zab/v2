<template>
  <div id="portfolio-sec" class="container">
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
      <cardItem @showModal="showModal" :cardItem="books" />
      <cardItem @showModal="showModal" :cardItem="tedx" />
      <cardItem @showModal="showModal" :cardItem="games" />
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
	name: "portfolio-sec",
	components: {
		Title,
		cardItem,
		modal
	},
	mounted() {
		var containerEl = document.querySelector(".containerMix");
		mixitup(containerEl);
	},
	methods: {
		showModal(modalData) {
			this.modalData = modalData;
			console.log("receiving the event", modalData);
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
				image: "queryfox.png",
				languages: "PHP, Laravel and Vue ",
				link: "https://queryfox.com/",
				type: "Backend"
			},
			czabalet: {
				title: "Czabalet",
				image: "czabalet.png",
				languages: "Vue and Bootstrap",
				link: "http://czabalet.com/",
				type: "Frontend"
			},
			delisa: {
				title: "Delisa",
				image: "delisa.png",
				languages: "Bootstrap, Vue and Laravel",
				link: "http://delisamaranth.com/",
				type: "Frontend"
			},
			space: {
				title: "Space Shooter",
				image: "space.png",
				languages: "Typescript",
				link: "https://github.com/ClaudiaFeliciano/Arrow-6",
				type: "Frontend"
			},
			books: {
				title: "Books Library",
				image: "books.png",
				languages: "C#, MySQL and Bootstrap",
				link: "https://github.com/UTSCCSCC01/final-charjd",
				type: "Frontend"
			},
			games: {
				title: "Games and Stuff",
				image: "games.png",
				languages: "Python, Django and MongoDB",
				link: "",
				type: "Backend"
			},
			aiesec: {
				title: "AIESEC",
				image: "aiesec.png",
				languages: "Team Work, Sales, and Time Management",
				link: "https://aiesec.org/",
				type: "Leadership"
			},
			tedx: {
				title: "TEDx",
				image: "tedx.png",
				languages:
          "Event Management, Volunteer Management, Finance, and Team Empowerment",
				link: "https://www.ted.com/about/programs-initiatives/tedx-program",
				type: "Leadership"
			},
			google: {
				title: "Google Development Group",
				image: "google.png",
				languages: "Presentation Skills, Teaching and Counselling",
				link: "https://developers.google.com/community/gdg/",
				type: "Leadership"
			}
		};
	}
};
</script>
