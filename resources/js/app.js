window.Vue = require('vue');

window.Event = new Vue();

import SvgVue from 'svg-vue';
Vue.use(SvgVue);

import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

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

new Vue({
  el: '#app',
});
