import axios from 'axios';
import VueAxios from 'vue-axios';
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  axios,
  VueAxios,
  ElementUI,
  render: h => h(App),
}).$mount('#app');
