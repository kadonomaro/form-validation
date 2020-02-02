import Vue from 'vue';
import App from './App.vue';

import '@/common.scss';

import EscapeDirective from '@/directives/escape.directive';

Vue.config.productionTip = false;

Vue.directive('escape', EscapeDirective);


new Vue({
  render: function (h) { return h(App) },
}).$mount('#app');
