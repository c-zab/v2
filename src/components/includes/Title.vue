<template>
  <div class="title-sec pb-4">
    <div class="row justify-content-center">
      <h1
        v-bind:id="title | idName"
        class="sec-title col-auto"
        data-aos="fade-right"
        data-aos-anchor-placement="center-bottom"
      >{{ title }}</h1>
    </div>
    <div class="row justify-content-center pt-2">
      <div
        data-aos="fade-right"
        data-aos-anchor-placement="center-bottom"
        data-aos-delay="200"
        class="col-md-auto bar"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
	props: {
		title: String
	},
	filters: {
		idName(value) {
			return value.toLowerCase();
		}
	}
};
</script>
