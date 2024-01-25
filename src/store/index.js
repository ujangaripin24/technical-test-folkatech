import { createStore } from 'vuex';
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'universal-cookie';
import { useRouter } from 'vue-router';

const router = useRouter();
const cookies = new Cookies();

export default createStore({
  state: {
    user: null,
  },
  getters: {
    isLoggedIn: (state) => !!state.user,
    getUser: (state) => state.user,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/api/login`, credentials);
        console.log('Response dari try:', response);
        const { data } = response;
      
        if (data && data.code === 200) {
          commit('SET_USER', data.data);
          localStorage.setItem('token', data.data.token);
          localStorage.setItem('_email', data.data.email);
          localStorage.setItem('_name', data.data.name);
          localStorage.setItem('_phone_number', data.data.phone_number);
          // router.push('/user/dashboard');
          window.location = '/user/dashboard';
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Login Error',
            text: 'Invalid credentials. Please try again.',
          });
        }
      }
       catch (error) {
        console.error('Error during login:', error);
        Swal.fire({
          icon: 'error',
          title: 'Login Error',
          text: error.response.data.message,
        });
      }
    },

    logout({ commit }) {
      cookies.remove('token');

      commit('SET_USER', null);

      router.push('/');
    },
  },
  modules: {},
});
