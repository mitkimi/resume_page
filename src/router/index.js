import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';
import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);
Vue.use(NProgress);

const vueRouter = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});

vueRouter.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

vueRouter.afterEach(() => {
  NProgress.done();
});

export default vueRouter;
