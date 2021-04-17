import Vue from 'vue';
import './js/plugins';
import App from './App.vue';

import './scss/app.scss';
/*
 * import './js/config';
 * import './js/components';
 */

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');