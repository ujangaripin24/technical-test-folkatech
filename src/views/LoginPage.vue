<template>
  <div class="home">
    <div class="row justify-content-center align-items-center" style="height: 100vh;">
      <div class="col-md-8">
        <div class="card shadow p-3 mb-5 bg-white rounded" style="width: 700px; height: 400px;">
          <div class="card-body">
            <h5 class="card-title text-left mb-4">
              <p class="text-title">Masuk</p>
            </h5>
            <form>
              <div class="mb-3">
                <input type="text" class="form-control shadow-sm" id="username" placeholder="Email" required>
              </div>
              <div class="mb-3">
                <div class="input-group">
                  <input :type="showPassword ? 'text' : 'password'" class="form-control shadow-sm" id="password"
                    placeholder="Password" required>
                  <div class="input-group-append shadow-sm">
                    <button class="btn btn-outline-secondary" type="button" @click="togglePasswordVisibility">
                      {{ showPassword ? 'Hide' : 'Show' }}
                    </button>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center mb-3">
                <p class="forgot-text" @click="forgotPassword">Lupa password</p>
              </div>
              <button type="submit" class="btn btn-block btn-login shadow-sm">Masuk</button>
            </form>
            <hr style="border-top: 2px solid #C2C2C2; margin-top: 15px; margin-bottom: 0;">
            <div class="footer">
              <p>Belum Punya akun? <router-link to="/register" class="link-register">Daftar Sekarang</router-link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store';
export default {
  data() {
    return {
      showPassword: false,
      email: '',
      passwod: ''
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    forgotPassword() {
      console.log('Forgot Password clicked!');
    },
    login() {
      store.dispatch('login', {email: this.email, password: this.password})
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  margin: auto;
}

.text-title {
  color: #730C07;
  font-weight: bold;
  font-size: 26px;
}

.forgot-text {
  font-size: 12px;
  color: #777;
  cursor: pointer;
}

.btn-block {
  width: 100%;
}

.footer {
  justify-items: center;
  margin-top: 35px;
}

.link-register {
  text-decoration: none;
  color: #730C07;
}

.btn-login {
  background-color: #EB3F36;
  color: #fff;
}

.btn-login:hover {
  background-color: #730C07;
  color: #fff;
}
</style>
