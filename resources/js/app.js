require('./bootstrap');

import AOS from "aos";
import "aos/dist/aos.js";

$(function () {
	AOS.init({
		duration: 700,
		once: true,
		disable: 'mobile'
	});
});

window.Vue = require('vue');

import VeeValidate from 'vee-validate';

Vue.use(VeeValidate, {
	validity: true
});

window.Event = new Vue();

if (process.env.MIX_APP_ENV === 'production') {
	Vue.config.devtools = false;
	Vue.config.debug = false;
	Vue.config.silent = true;
}

Vue.component('navbar', require('./components/Navbar.vue').default);
Vue.component('about', require('./components/About.vue').default);
Vue.component('skills', require('./components/Skills.vue').default);
Vue.component('portfolio', require('./components/Portfolio.vue').default);
Vue.component('contact', require('./components/Contact.vue').default);

const app = new Vue({
	el: '#app'
});
