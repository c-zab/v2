import Vue from "vue";
import Cover from "./HeadCover.vue";

require("./assets/js/_references");

Vue.config.productionTip = false;

new Vue({
  render: h => h(Cover)
}).$mount("#cover-img");
