<template>
  <div class="mix col-md-4 col-sm-6" :class="mixVal">
    <div class="text-white">
      <video height="auto" class="card-img" loop autoplay muted autobuffer playsinline>
        <source src="@/assets/images/cards/queryfox.webm" type="video/webm" />
        <source src="@/assets/images/cards/queryfox.mp4" type="video/mp4" />
        <p>Your browser does not support the video element.</p>
      </video>
      <div
        class="card-img-overlay text-center align-items-center"
        @mouseover="show = true"
        @mouseleave="show = false"
      >
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
			mixVal: this.cardItem.type.toLowerCase()
		};
	}
};
</script>
