window.Vue = require('vue');

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

new Vue({
  el: '#app',
});
