import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/views/MainPage.vue'),
      meta: { auth: true },
    },
    {
      path: '/timeTable',
      name: 'timeTable',
      component: () => import('@/views/TimeTablePage.vue'),
      meta: { auth: true },
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('@/views/TodoPage.vue'),
      meta: { auth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    next('/login');
    return;
  }
  if (to.name == 'login' && store.getters.isLogin) {
    next('/main');
    return;
  }
  next();
});

export default router;
