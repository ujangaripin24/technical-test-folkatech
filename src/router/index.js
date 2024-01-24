import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import DashboardPage from '../views/DashboardPage/DashboardPage.vue';
import store from '../store';
import Swal from 'sweetalert2';

const routes = [
  {
    path: '/',
    name: 'home',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage
  },
  {
    path: '/user/dashboard',
    name: 'dashboardPage',
    component: DashboardPage,
    beforeEnter: (to, from, next) => {
      if (store.getters.isLoggedIn) {
        next();
      } else {
        Swal.fire({
          icon: 'warning',
          title: 'Tidak Dapat Diakses',
          text: 'Mohon Login Terlebih Dahulu.',
        }).then(() => {
          next('/');
        });
      }
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
