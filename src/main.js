import Vue from "vue";
import Head from "./Head.vue";

require("./assets/js/_references");

Vue.config.productionTip = false;

new Vue({
  render: h => h(Head)
}).$mount("#head");
