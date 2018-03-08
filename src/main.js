// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 进度条插件
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '@/assets/iconfont.css';

import App from './App';
import router from './router';

Vue.use(ElementUI);
Vue.use(NProgress);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
