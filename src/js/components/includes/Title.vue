<template functional>
  <div class="pb-4">
    <div class="row justify-content-center">
      <h1
        :id="props.title"
        class="sec-title col-auto"
        data-aos="fade-right"
        data-aos-anchor-placement="center-bottom"
      >
        {{ props.title }}
      </h1>
    </div>
    <div class="row justify-content-center pt-2">
      <div
        data-aos="fade-right"
        data-aos-anchor-placement="center-bottom"
        data-aos-delay="200"
        class="col-md-auto bar"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
