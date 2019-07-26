require('./bootstrap');

import AOS from "aos";
import "aos/dist/aos.css";

window.Vue = require('vue');

import VeeValidate from 'vee-validate';

Vue.use(VeeValidate, {
	validity: true
});

window.Event = new Vue();

Vue.component('app', require('./App.vue').default);


if (process.env.MIX_APP_ENV === 'production') {
	Vue.config.devtools = false;
	Vue.config.debug = false;
	Vue.config.silent = true;
}

const app = new Vue({
	el: '#app',
	created() {
		AOS.init({
			duration: 700,
			once: true
		});
	},
});
