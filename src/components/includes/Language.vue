<template>
  <div class="py-2">
    <div class="text-white clearfix fill">
      <div id="name" class="float-left" style="width: 30%;">
        <h5 class="pt-1">{{ name }}</h5>
      </div>
      <div id="percent" class="float-right bg-light text-right" :style="{width:numberWidth + '%'}">
        <p class="pt-1 pr-2 text-muted">{{ percentage }}%</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    percentage: String
  },
  data() {
    return {
      numberWidth: 70 - (this.percentage * 70) / 100
    };
  }
};
</script>

<style scoped>
#name {
  background: #14cbeb;
  height: 100%;
}

.fill {
  background: #0e8aa0;
  height: 35px;
}

#percent {
  height: 100%;
}

.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

/* @keyframes example {
  from {
    width: 0%;
  }
  to {
    width: 80%;
  }
} */
</style>
