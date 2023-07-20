import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
Vue.use(ElementUI);

import countTo from 'vue-count-to'
Vue.component('countTo', countTo)


new Vue({
  el: '#app',
  render: h => h(App)
})
