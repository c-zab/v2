import Vue from "vue";
import App from "./App.vue";

require("./assets/css/styles.css");
require("../node_modules/mdbootstrap/css/bootstrap.min.css");
require("../node_modules/mdbootstrap/css/mdb.min.css");

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
