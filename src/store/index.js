import { createStore } from 'vuex';
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'universal-cookie';

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
        const { data } = response;
      
        if (data.code === 200) {
          commit('SET_USER', data.data);
          cookies.set('token', data.data.token);
          cookies.set('_email', data.data.email);
          cookies.set('_name', data.data.name);
          cookies.set('_phone_number', data.data.phone_number);
          window.location.href = '/user/dashboard';
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
          text: 'An error occurred during login. Please try again.',
        });
      }
    },

    logout({ commit }) {
      cookies.remove('token');

      commit('SET_USER', null);

      window.location.href = '/';
    },
  },
  modules: {},
});
