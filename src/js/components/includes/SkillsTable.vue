<template>
  <div class="col-md-6 col-lg">
    <h3 data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" class="py-4">
      {{ title }}
    </h3>
    <div class="list-group-flush">
      <div class="list-group-flush">
        <div v-for="(item, index) in table" :key="index" class="list-group-item py-2">
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
            class="row"
          >
            <div class="col-3">
              <svg-item v-if="item.svgPath" :name="item.svgPath" :alt-text="item.altText" />
              <i v-else-if="item.classItem" :class="[item.classItem]" :aria-label="item.altText" />
              <img
                v-else
                :src="require(`@/svg/${item.svgImage}.svg`)"
                class="svg-size"
                :alt="item.altText"
              >
            </div>
            <div class="col">
              <h4 class="pt-2">
                {{ item.name }}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgItem from './SvgItem';

export default {
  name:'SkillsTable',
  components: {
    SvgItem,
  },
  props: { 
    title: { 
      type: String, 
      required: true, 
    }, 
    table: { 
      type: Array, 
      required: true, 
    }, 
  },
};
</script>
