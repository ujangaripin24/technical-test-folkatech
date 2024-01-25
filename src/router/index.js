import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import DashboardPage from '../views/DashboardPage/DashboardPage.vue';
import store from '../store';
import Swal from 'sweetalert2';

const requireAuth = (to, from, next) => {
  if (store.getters.isLoggedIn) {
    next();
  } else {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('_email');
    const name = localStorage.getItem('_name');
    const phone_number = localStorage.getItem('_phone_number');

    if (token && email && name && phone_number) {
      // Set user data in Vuex store
      store.commit('SET_USER', {
        token: token,
        email: email,
        name: name,
        phone_number: phone_number
      });
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
};

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
    beforeEnter: requireAuth
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
