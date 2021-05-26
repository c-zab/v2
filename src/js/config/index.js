import Vue from 'vue';

if (process.env.MIX_APP_ENV === 'production') {
  Vue.config.devtools = false;
  Vue.config.debug = false;
  Vue.config.silent = true;
  Vue.config.productionTip = false;
}
