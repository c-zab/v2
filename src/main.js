import Vue from 'vue';
import './js/plugins';
import App from './App.vue';
import './js/config';

import './scss/app.scss';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');