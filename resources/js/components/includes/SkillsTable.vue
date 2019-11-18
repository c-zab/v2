<template functional>
  <div class="col-md-6 col-lg">
    <h3 data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" class="py-4">{{ props.title }}</h3>
    <div class="list-group-flush">
      <div class="list-group-flush">
        <div v-for="(item, index) in props.table" v-bind:key="index" class="list-group-item py-2">
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
            class="row"
          >
            <div class="col-3">
              <svg-vue v-if="item.svg" v-bind:icon='item.svg' height="48"></svg-vue>
              <i v-else :class="[item.classItem]"></i>
            </div>
            <div class="col">
              <h4 class="pt-2">{{ item.name }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "table"],
};
</script>
