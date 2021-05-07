import Vue from 'vue';
import './js/plugins';
import App from './App.vue';

import './scss/app.scss';
/*
 * import './js/config';
 */

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');