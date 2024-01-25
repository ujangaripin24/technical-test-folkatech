<template>
  <div class="home">
    <div class="row justify-content-center align-items-center" style="height: 100vh;">
      <div class="col-md-8">
        <div class="card shadow p-3 mb-5 bg-white rounded" style="width: 700px; height: auto;">
          <div class="card-body">
            <h5 class="card-title text-left mb-4">
              <p v-if="step === 1" class="text-title">Daftar Sekarang</p>
              <p v-if="step === 2" @click="backStep" style="cursor: pointer;"><font-awesome-icon
                  :icon="['fas', 'arrow-left']" /> Kembali</p>
            </h5>
            <form @submit.prevent="handleSubmit">
              <div v-if="step === 1">
                <div class="mb-3">
                  <input type="text" class="form-control shadow-sm" id="firstname" placeholder="Nama Depan" required
                    v-model="formData.firstname">
                </div>
                <div class="mb-3">
                  <input type="text" class="form-control shadow-sm" id="lastname" placeholder="Nama Belakang" required
                    v-model="formData.lastname">
                </div>
                <div class="mb-3">
                  <input type="text" class="form-control shadow-sm" id="username" placeholder="Email" required
                    v-model="formData.username">
                </div>
              </div>

              <div v-if="step === 2">
                <div class="mb-3">
                  <input type="text" class="form-control shadow-sm" id="phone_number" placeholder="Nomor Telepon" required
                    v-model="formData.phone_number" @input="validatePhoneNumber">
                  <p v-if="phoneError" class="text-danger">{{ phoneError }}</p>
                </div>
                <div class="mb-3">
                  <input type="password" class="form-control shadow-sm" id="password" placeholder="Password" required
                    v-model="formData.password" @input="validatePassword">
                  <p v-if="passwordError" class="text-danger">{{ passwordError }}</p>
                </div>
                <div class="mb-3">
                  <input type="password" class="form-control shadow-sm" id="conf_password"
                    placeholder="Konfirmasi Password" required v-model="formData.conf_password">
                  <p v-if="formData.password !== formData.conf_password" class="text-danger">Password tidak sesuai.</p>
                </div>
              </div>

              <button v-if="step === 1" :disabled="!isFormOneValid" type="button"
                class="btn btn-block btn-danger shadow-sm" @click="nextStep">Selanjutnya</button>
              <button v-if="step === 2" :disabled="!isFormTwoValid" type="submit"
                class="btn btn-block btn-danger shadow-sm">Submit</button>
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
import axios from 'axios';
import Swal from 'sweetalert2';
export default {
  data() {
    return {
      step: 1,
      phoneError: '',
      passwordError: '',
      formData: {
        firstname: '',
        lastname: '',
        username: '',
        phone_number: '',
        password: '',
        conf_password: '',
      },
    };
  },
  computed: {
    isFormOneValid() {
      return this.formData.firstname && this.formData.lastname && this.formData.username;
    },
    isFormTwoValid() {
      return this.formData.phone_number && this.formData.password && this.formData.conf_password;
    }
  },
  methods: {
    validatePhoneNumber() {
      if (this.formData.phone_number.length < 10) {
        this.phoneError = 'Nomor telepon harus lebih dari 10 karakter.';
      } else {
        this.phoneError = '';
      }
    },
    validatePassword() {
      if (this.formData.password.length < 8) {
        this.passwordError = 'Password harus lebih dari 8 karakter.';
      } else {
        this.passwordError = '';
      }
    },
    nextStep() {
      if (this.isFormOneValid) {
        if (this.formData.password !== this.formData.conf_password) {
          alert('Password tidak sesuai.');
        } else {
          this.step++;
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Lengkapi Form Dahulu!',
        });
      }
    },
    async handleSubmit() {
      try {
        const requestData = {
          name: this.formData.firstname + ' ' + this.formData.lastname,
          email: this.formData.username,
          password: this.formData.password,
          phone: this.formData.phone_number,
        }
        const response = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/api/register`, requestData);
        console.log('response:', response.data);
        Swal.fire({
          icon: "success",
          title: "Terdaftar",
          showConfirmButton: false,
          timer: 2000
        });
        window.location = '/';
      } catch (error) {
        Swal.fire({
          icon: "warning",
          text: error.message,
        })
      }
    },
  },
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
