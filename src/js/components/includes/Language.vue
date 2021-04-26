<template functional>
  <div class="py-2">
    <div class="text-white clearfix fill">
      <div id="name" class="float-left">
        <h5 class="pt-1">
          {{ props.name }}
        </h5>
      </div>

      <div id="percent" class="float-right bg-light text-right" :style="{width:`${70 - (props.percentage * 70) / 100}%`}">
        <p class="pt-1 pr-2 text-muted">
          {{ props.percentage }}%
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    percentage: String,
  },
};
</script>
