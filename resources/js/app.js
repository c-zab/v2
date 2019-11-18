window.Vue = require('vue');
window.Event = new Vue();

if (process.env.MIX_APP_ENV === 'production') {
  Vue.config.devtools = false;
  Vue.config.debug = false;
  Vue.config.silent = true;
  Vue.config.productionTip = false;
}

import SvgVue from 'svg-vue';
Vue.use(SvgVue);

import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faBolt,
  faTachometerAlt,
  faLaptop,
  faMobileAlt,
  faRocket,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';

import {
  faLightbulb,
  faLaughBeam,
  faPaperPlane,
  faFileCode,
} from '@fortawesome/free-regular-svg-icons';

import {
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

library.add(faBolt, faTachometerAlt, faLaptop, faMobileAlt, faLightbulb, faLaughBeam, faPaperPlane, faRocket, faFileCode, faLaptopCode, faGithub, faTwitter, faInstagram, faLinkedin);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.component('navbar', require('./components/Navbar.vue').default);
Vue.component('about', require('./components/About.vue').default);
Vue.component('skills', require('./components/Skills.vue').default);
Vue.component('portfolio', require('./components/Portfolio.vue').default);
Vue.component('contact', require('./components/Contact.vue').default);
Vue.component('myFooter', require('./components/Footer.vue').default);

new Vue({
  el: '#app',
});
