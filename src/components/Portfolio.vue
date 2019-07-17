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
	mounted() {
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
          "Quis fugit eius. Facilis quis deserunt. Ipsam sequi asperiores necessitatibus. Vel dolores est animi. Error autem ipsam dolor magnam molestias aut error.",
				image: "queryfox.png",
				imageModal1: "queryfoxModal1.png",
				imageModalXL1: "queryfoxModalXL1.png",
				imageModal2: "queryfoxModal2.png",
				imageModalXL2: "queryfoxModalXL2.png",
				imageModal3: "queryfoxModal3.png",
				imageModalXL3: "queryfoxModalXL3.png",
				imageModal4: "queryfoxModal4.png",
				imageModalXL4: "queryfoxModalXL4.png",
				languages: "PHP, Laravel and Vue ",
				link: "https://queryfox.com/",
				types: { backend: true, frontend: true, leadership: false }
			},
			czabalet: {
				title: "Czabalet",
				subtitle: "Personal Website",
				description:
          "Aperiam sed et consectetur itaque debitis autem corrupti. Qui facilis sed assumenda vel. Aut ut nam ullam voluptatem qui voluptatem neque aut repellendus. Totam qui at qui ut consequatur aliquid ut velit quibusdam. Reiciendis totam esse. Quia omnis aut porro molestias dolore nam dignissimos. Aperiam sed et consectetur itaque debitis autem corrupti. Qui facilis sed assumenda vel. Aut ut nam ullam voluptatem qui voluptatem neque aut repellendus. Totam qui at qui ut consequatur aliquid ut velit quibusdam. Reiciendis totam esse. Quia omnis aut porro molestias dolore nam dignissimos.",
				image: "czabalet.png",
				imageModal1: "czabaletModal1.png",
				imageModalXL1: "czabaletModalXL1.png",
				imageModal2: "czabaletModal2.png",
				imageModalXL2: "czabaletModalXL2.png",
				imageModal3: "czabaletModal3.png",
				imageModalXL3: "czabaletModalXL3.png",
				imageModal4: "czabaletModal4.png",
				imageModalXL4: "czabaletModalXL4.png",
				languages: "Vue and Bootstrap",
				link: "http://czabalet.com/",
				types: { backend: true, frontend: true, leadership: false }
			},
			delisa: {
				title: "Delisa",
				subtitle: "Amaranth Retailer",
				description:
          "Et minus quasi. Provident et nesciunt distinctio fugit placeat ea fugiat est ratione. Ut nam ullam delectus aut beatae recusandae. Corporis architecto voluptas nisi. Placeat nihil dolor nostrum in eum iure. Illum eos qui sequi ducimus ut autem debitis quisquam tempora.",
				image: "delisa.png",
				imageModal1: "delisaModal1.png",
				imageModalXL1: "delisaModalXL1.png",
				imageModal2: "delisaModal2.png",
				imageModalXL2: "delisaModalXL2.png",
				imageModal3: "delisaModal3.png",
				imageModalXL3: "delisaModalXL3.png",
				imageModal4: "delisaModal4.png",
				imageModalXL4: "delisaModalXL4.png",
				languages: "Bootstrap, Vue and Laravel",
				link: "http://delisamaranth.com/",
				types: { backend: true, frontend: true, leadership: false }
			},
			space: {
				title: "Space Shooter",
				subtitle: "College Project",
				description:
          "Dicta molestiae dolorem accusamus est est eos. Ut doloribus inventore est et non quas nemo fuga nihil. Asperiores assumenda quia. Quo enim omnis animi ad est vero libero neque id. Nisi eveniet dolores ex similique nemo ratione.",
				image: "space.png",
				imageModal1: "spaceModal1.png",
				imageModalXL1: "spaceModalXL1.png",
				imageModal2: "spaceModal2.png",
				imageModalXL2: "spaceModalXL2.png",
				imageModal3: "spaceModal3.png",
				imageModalXL3: "spaceModalXL3.png",
				imageModal4: "spaceModal4.png",
				imageModalXL4: "spaceModalXL4.png",
				languages: "Typescript",
				link: "https://github.com/ClaudiaFeliciano/Arrow-6",
				types: { backend: false, frontend: true, leadership: false }
			},
			books: {
				title: "Books Library",
				subtitle: "College Project",
				description:
          "Qui dolor reprehenderit quae id et. Reprehenderit natus occaecati dolorem non quasi enim vel molestiae. Repellendus ut modi ullam voluptate asperiores hic. Hic eveniet saepe mollitia nobis error aliquam quaerat aspernatur et. Rerum ut ea ullam soluta labore perferendis voluptatibus.",
				image: "books.png",
				imageModal1: "booksModal1.png",
				imageModalXL1: "booksModalXL1.png",
				imageModal2: "booksModal2.png",
				imageModalXL2: "booksModalXL2.png",
				imageModal3: "booksModal3.png",
				imageModalXL3: "booksModalXL3.png",
				imageModal4: "booksModal4.png",
				imageModalXL4: "booksModalXL4.png",
				languages: "C#, MySQL and Bootstrap",
				link: "https://github.com/UTSCCSCC01/final-charjd",
				types: { backend: true, frontend: true, leadership: true }
			},
			games: {
				title: "Games and Stuff",
				subtitle: "Entrepreneurship",
				description:
          "Aliquid modi non nam id ut iure sit blanditiis. Ipsum velit doloremque quasi. Natus quae est nostrum rem. Qui impedit dolor quos suscipit vitae non. Voluptas sint occaecati officiis quam.",
				image: "games.png",
				imageModal1: "gamesModal1.png",
				imageModalXL1: "gamesModalXL1.png",
				imageModal2: "gamesModal2.png",
				imageModalXL2: "gamesModalXL2.png",
				imageModal3: "gamesModal3.png",
				imageModalXL3: "gamesModalXL3.png",
				imageModal4: "gamesModal4.png",
				imageModalXL4: "gamesModalXL4.png",
				languages: "Python, Django and MongoDB",
				link: "",
				types: { backend: true, frontend: true, leadership: false }
			},
			aiesec: {
				title: "AIESEC",
				subtitle: "Global Leadership Movement",
				description:
          "Est quia consectetur. Quo quo fugit sunt eius et et et corporis. Id magnam iste porro voluptas voluptatibus nostrum eaque ipsam. Et aut repellendus quaerat quia accusamus quibusdam. Eveniet natus in quae autem.",
				image: "aiesec.png",
				imageModal1: "aiesecModal1.png",
				imageModalXL1: "aiesecModalXL1.png",
				imageModal2: "aiesecModal2.png",
				imageModalXL2: "aiesecModalXL2.png",
				imageModal3: "aiesecModal3.png",
				imageModalXL3: "aiesecModalXL3.png",
				imageModal4: "aiesecModal4.png",
				imageModalXL4: "aiesecModalXL4.png",
				languages: "Team Work, Sales, and Time Management",
				link: "https://aiesec.org/",
				types: { backend: false, frontend: false, leadership: true }
			},
			tedx: {
				title: "TEDx",
				subtitle: "Ideas Worth Spreading",
				description:
          "Possimus deserunt iste distinctio vero et. Similique pariatur accusantium ab nostrum illum est perspiciatis sapiente quibusdam. Cumque quod reiciendis. Delectus consectetur rerum quos neque eligendi.",
				image: "tedx.png",
				imageModal1: "tedxModal1.png",
				imageModalXL1: "tedxModalXL1.png",
				imageModal2: "tedxModal2.png",
				imageModalXL2: "tedxModalXL2.png",
				imageModal3: "tedxModal3.png",
				imageModalXL3: "tedxModalXL3.png",
				imageModal4: "tedxModal4.png",
				imageModalXL4: "tedxModalXL4.png",
				languages:
          "Event Management, Volunteer Management, Finance, and Team Empowerment",
				link: "https://www.ted.com/about/programs-initiatives/tedx-program",
				types: { backend: false, frontend: false, leadership: true }
			},
			google: {
				title: "Google Developers Groups",
				subtitle: "Developers interested in Google's Technology",
				description:
          "Nulla in debitis at inventore voluptates corrupti amet. Ut doloribus nobis aut fugit mollitia nihil ratione. Qui sunt et et incidunt sequi est aliquid quos autem. Aut quasi omnis.",
				image: "google.png",
				imageModal1: "googleModal1.png",
				imageModalXL1: "googleModalXL1.png",
				imageModal2: "googleModal2.png",
				imageModalXL2: "googleModalXL2.png",
				imageModal3: "googleModal3.png",
				imageModalXL3: "googleModalXL3.png",
				imageModal4: "googleModal4.png",
				imageModalXL4: "googleModalXL4.png",
				languages: "Presentation Skills, Teaching and Counselling",
				link: "https://developers.google.com/community/gdg/",
				types: { backend: false, frontend: false, leadership: true }
			}
		};
	}
};
</script>
