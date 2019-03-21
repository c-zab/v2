import Vue from "vue";
import Cover from "./HeadCover.vue";

window.$ = window.jQuery = require("jquery");

require("./assets/js/_references");

Vue.config.productionTip = false;

new Vue({
  render: h => h(Cover)
}).$mount("#cover-img");
