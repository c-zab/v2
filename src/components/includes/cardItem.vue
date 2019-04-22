<template>
  <div class="mix col-md-4" :class="mixVal">
    <div
      class="card-image"
      :style="{ backgroundImage: 'url(' + require('@/assets/images/cards/queryfox.jpg') + ')' }"
    >
      <div
        class="text-white text-center align-items-center rgba-black-strong py-5 px-4"
        style="height:300px;"
        @mouseover="show = true"
        @mouseleave="show = false"
      >
        <transition name="bounce">
          <div v-if="show">
            <h5 class="pink-text">{{ cardItem.type }} - {{mixVal}}</h5>
            <h3 class="card-title pt-2">
              <strong>{{ cardItem.title }}</strong>
            </h3>
            <a class="btn btn-pink">
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

<style scoped>
.card-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.3s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
</style>
