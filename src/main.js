import Vue from 'vue';
import App from './App.vue';

import '@/common.scss';

import EscapeDirective from '@/directives/escape.directive';
import CurrencyFilter from '@/filters/currency.filter';

Vue.config.productionTip = false;

Vue.directive('escape', EscapeDirective);
Vue.filter('currency', CurrencyFilter);


new Vue({
  render: function (h) { return h(App) },
}).$mount('#app');
