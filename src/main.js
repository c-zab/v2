import Vue from "vue";
import App from "./App.vue";

window.$ = window.jQuery = require("jquery");
require("./assets/js/_references");

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
