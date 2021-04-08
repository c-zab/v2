import Vue from 'vue';
import './js/config';
import './js/plugins';
import './js/components';

Vue.config.productionTip = false;
/*
 * new Vue({
 *   render: h => h(App),
 * }).$mount('#app');
 */

new Vue({
  el: '#app',
});