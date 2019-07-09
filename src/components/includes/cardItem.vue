<template>
  <div class="mix col-md-4 col-sm-6" :class="mixVal">
    <div class="class bg-dark text-white">
      <img class="card-img" src="@/assets/images/cards/queryfox.jpg" />
      <div
        class="card-img-overlay text-center align-items-center py-5 px-4"
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
