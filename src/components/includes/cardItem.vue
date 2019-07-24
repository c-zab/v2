<template>
  <div class="mix col-lg-4 col-sm-10 col-12" :class="cardItem.types">
    <div class="text-white" @mouseover="show = true" @mouseleave="show = false">
      <picture>
        <source :srcset="imageWebp" />
        <img :src="image" class="card-img" :class="{'card-ima-blur': show}" />
      </picture>
      <div class="card-img-overlay card-body text-center align-items-center">
        <transition name="bounce">
          <div v-if="show">
            <h3 class="card-title pt-2">
              <strong>{{ cardItem.title }}</strong>
            </h3>
            <h5 class="pink-text">{{ cardItem.languages }}</h5>

            <a
              class="btn btn-danger"
              @click="$emit('showModal', cardItem)"
              data-toggle="modal"
              data-target="#myModal"
            >
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
			ima: this.cardItem.image
		};
	},
	computed: {
		image() {
			return require("@/assets/images/cards/" + this.cardItem.image);
		},
		imageWebp() {
			return require("@/assets/images/cards/" + this.cardItem.imageWebp);
		}
	}
};
</script>
