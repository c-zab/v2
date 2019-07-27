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

Vue.use(VeeValidate);

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

import { Validator } from "vee-validate";
import Axios from "axios";

const dict = {
	custom: {
		name: {
			required: "Your name is required",
			alpha_spaces: "Please enter a valid name",
			max: "Please enter a name no longer than 25 characters"
		},
		email: {
			required: "Your email is required",
			email: "Please enter a valid email"
		},
		subject: {
			required: "A subject is required",
			max: "Please enter a subject no longer than 35 characters"
		},
		message: {
			required: "A message is required",
			max: "Please enter a message no longer than 200 characters"
		}
	}
};

Validator.localize("en", dict);

const app = new Vue({
	el: '#app',
	data() {
		return {
			name: "",
			email: "",
			subject: "",
			message: "",
			coffeeMessage: false,
			clientName: '',
			errorsBE: {}
		};
	},
	methods: {
		validationSubmit() {
			this.$validator.validate().then(valid => {
				if (!valid) return;

				Axios.post('/messages', {
					name: this.name,
					email: this.email,
					subject: this.subject,
					message: this.message
				})
					.then(this.onSuccess)
					.catch(error => {
						this.errorsBE = error.response.data.errors
					});
			});
		},
		onSuccess(response) {
			console.log(response.data.message)
			this.clientName = response.data.clientName
			this.name = ''
			this.email = ''
			this.subject = ''
			this.message = ''
			this.$nextTick(() => {
				this.errors.clear();
				this.$nextTick(() => {
					this.$validator.reset();
				});
			});
			this.coffeeMessage = true
		},
		geterrorsBE(field) {
			return `${field}`
		},
		clearInputBE(field) {
			delete this.errorsBE[field];
		}
	},
	mounted() {
		let contact_sec = this.$refs["contact-sec"].offsetTop;
		Event.$emit("offsetContact", contact_sec);
	}
});
