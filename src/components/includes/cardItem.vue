<template>
  <div class="mix col-lg-4 col-sm-10 col-12" :class="mixVal">
    <div class="text-white" @mouseover="show = true" @mouseleave="show = false">
      <!-- <video height="auto" class="card-img" loop autoplay muted autobuffer playsinline>
        <source src="@/assets/images/cards/delisa.webm" type="video/webm" />
        <source src="@/assets/images/cards/delisa.mp4" type="video/mp4" />
        <p>Your browser does not support the video element.</p>
      </video>-->
      <img class="card-img" :src="image" :class="{'card-ima-blur': show}" />

      <div class="card-img-overlay card-body text-center align-items-center">
        <transition name="bounce">
          <div v-if="show">
            <h3 class="card-title pt-2">
              <strong>{{ cardItem.title }}</strong>
            </h3>
            <h5 class="pink-text">{{ cardItem.languages }}</h5>

            <a class="btn btn-danger">
              <i class="fas fa-clone left"></i> Details
            </a>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	props: { cardItem: Object },
	data() {
		return {
			show: false,
			mixVal: this.cardItem.type.toLowerCase(),
			ima: this.cardItem.image
		};
	},
	computed: {
		image() {
			return require("@/assets/images/cards/" + this.cardItem.image);
		}
	}
};
</script>
