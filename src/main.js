import Vue from "vue";
import App from "./App.vue";

import AOS from "aos";
import "aos/dist/aos.css";

window.$ = window.jQuery = require("jquery");
require("./assets/js/_references");

Vue.config.productionTip = false;

new Vue({
	created() {
		AOS.init({
			duration: 700,
			once: true
		});
	},
	render: h => h(App)
}).$mount("#app");
