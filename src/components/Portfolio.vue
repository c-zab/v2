<template>
  <div id="portfolio-sec" class="container">
    <Title title="PORTFOLIO" />

    <div class="container pb-4">
      <div class="controls row justify-content-center">
        <button
          data-aos="zoom-in"
          type="button"
          class="col-sm-4 col-md-2 col-xs-2 control btn btn-info m-1"
          data-filter="all"
        >All</button>
        <button
          data-aos="zoom-in"
          type="button"
          class="col-sm-4 col-md-2 col-xs-2 control btn btn-info m-1"
          data-filter=".backend"
        >Backend</button>
        <button
          data-aos="zoom-in"
          type="button"
          class="col-sm-4 col-md-2 col-xs-2 control btn btn-info m-1"
          data-filter=".frontend"
        >Frontend</button>
        <button
          data-aos="zoom-in"
          type="button"
          class="col-sm-4 col-md-2 col-xs-2 control btn btn-info m-1"
          data-filter=".leadership"
        >Leadership</button>
      </div>
    </div>
    <div class="containerMix row no-gutters">
      <cardItem :cardItem="queryfox" />
      <cardItem :cardItem="czabalet" />
      <cardItem :cardItem="games" />
      <cardItem :cardItem="delisa" />
      <cardItem :cardItem="space" />
      <cardItem :cardItem="books" />
      <cardItem :cardItem="aiesec" />
      <cardItem :cardItem="tedx" />
      <cardItem :cardItem="google" />
    </div>
  </div>
</template>

<script>
import Title from "./includes/Title";
import cardItem from "./includes/cardItem";
import mixitup from "mixitup";

export default {
	name: "portfolio-sec",
	components: {
		Title,
		cardItem
	},
	mounted() {
		var containerEl = document.querySelector(".containerMix");
		mixitup(containerEl);
	},
	data() {
		return {
			show: false,
			queryfox: {
				title: "QueryFox",
				image: "queryfox.jpg",
				languages: "PHP, Laravel and Vue ",
				type: "Backend"
			},
			czabalet: {
				title: "Czabalet",
				image: "czabalet.jpg",
				languages: "Vue and Bootstrap",
				type: "Frontend"
			},
			games: {
				title: "Games and Stuff",
				image: "games.jpg",
				languages: "Python, Django and MongoDB",
				type: "Backend"
			},
			delisa: {
				title: "Delisa",
				image: "delisa.jpg",
				languages: "Bootstrap, Vue and Laravel",
				type: "Frontend"
			},
			space: {
				title: "Space Shooter",
				image: "space.jpg",
				languages: "Typescript",
				type: "Frontend"
			},
			books: {
				title: "Books Library",
				image: "books.jpg",
				languages: "C#, MySQL and Bootstrap",
				type: "Frontend"
			},
			aiesec: {
				title: "AIESEC",
				image: "aiesec.jpg",
				languages: "Team Work, Sell Skills and Time Management",
				type: "Leadership"
			},
			tedx: {
				title: "TEDx",
				image: "tedx.jpg",
				languages: "Founder, Organizer and Empowerment",
				type: "Leadership"
			},
			google: {
				title: "Google Development Group",
				image: "google.jpg",
				languages: "Speaker and Organizer",
				type: "Leadership"
			}
		};
	}
};
</script>
