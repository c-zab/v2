<template>
  <div id="portfolio-sec" class="container">
    <Title data-aos="fade-right" title="PORTFOLIO"/>

    <div class="container pb-4">
      <div class="controls row justify-content-center">
        <button
          type="button"
          class="col-sm-4 col-md-2 col-xs-2 control btn btn-info"
          data-filter="all"
        >All</button>
        <button
          type="button"
          class="col-sm-4 col-md-2 col-xs-2 control btn btn-info"
          data-filter=".backend"
        >Backend</button>
        <button
          type="button"
          class="col-sm-4 col-md-2 col-xs-2 control btn btn-info"
          data-filter=".frontend"
        >Frontend</button>
        <button
          type="button"
          class="col-sm-4 col-md-2 col-xs-2 control btn btn-info"
          data-filter=".leadership"
        >Leadership</button>
      </div>
    </div>
    <div class="containerMix row no-gutters">
      <cardItem :cardItem="queryfox"/>
      <cardItem :cardItem="czabalet"/>
      <cardItem :cardItem="games"/>
      <cardItem :cardItem="delisa"/>
      <cardItem :cardItem="space"/>
      <cardItem :cardItem="books"/>
      <cardItem :cardItem="aiesec"/>
      <cardItem :cardItem="tedx"/>
      <cardItem :cardItem="google"/>
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
        type: "Backend"
      },
      czabalet: {
        title: "Czabalet",
        image: "czabalet.jpg",
        type: "Frontend"
      },
      games: {
        title: "Games and Stuff",
        image: "games.jpg",
        type: "Backend"
      },
      delisa: {
        title: "Delisa",
        image: "delisa.jpg",
        type: "Frontend"
      },
      space: {
        title: "Space Shooter",
        image: "space.jpg",
        type: "Frontend"
      },
      books: {
        title: "Books Library",
        image: "books.jpg",
        type: "Frontend"
      },
      aiesec: {
        title: "AIESEC",
        image: "aiesec.jpg",
        type: "Leadership"
      },
      tedx: {
        title: "TEDx",
        image: "tedx.jpg",
        type: "Leadership"
      },
      google: {
        title: "Google Development Group",
        image: "google.jpg",
        type: "Leadership"
      }
    };
  }
};
</script>

<style scoped>
</style>
