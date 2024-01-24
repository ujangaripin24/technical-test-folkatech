<template>
  <div class="home">
    <div class="row justify-content-center align-items-center" style="height: 100vh;">
      <div class="col-md-8">
        <div class="card shadow p-3 mb-5 bg-white rounded" style="width: 700px; height: 400px;">
          <div class="card-body">
            <h5 class="card-title text-left mb-4">
              <p class="text-title">Daftar Sekarang</p>
            </h5>
            <form>
              <div class="mb-3">
                <input type="text" class="form-control shadow-sm" id="firstname" placeholder="Nama Depan" required>
              </div>
              <div class="mb-3">
                <input type="text" class="form-control shadow-sm" id="lastname" placeholder="Nama Belakang" required>
              </div>
              <div class="mb-3">
                <input type="text" class="form-control shadow-sm" id="username" placeholder="Email" required>
              </div>
              <button type="submit" class="btn btn-block btn-login shadow-sm">Selanjutnya</button>
            </form>
            <hr style="border-top: 2px solid #C2C2C2; margin-top: 35px; margin-bottom: 0;">
            <div class="footer">
              <p>Sudah Punya akun? <router-link to="/" class="link-register">Masuk</router-link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    forgotPassword() {
      // Implement logic for forgot password
      console.log('Forgot Password clicked!');
    }
  }
};
</script>

<style scoped>
/* Tambahkan atau modifikasi gaya sesuai kebutuhan */
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
