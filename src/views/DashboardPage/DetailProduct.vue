<template>
  <div>
    <Header />
    <div class="container mb-4">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a class="link" href="">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">{{ $route.params.short_description }}</li>
        </ol>
      </nav>
      <div class="row g-4">
        <div class="col-sm-6 col-md-6">
          <div class="border d-flex justify-content-center">
            <img :src="selectedImage" style="width: 500px; height: 500px;" alt="Default Image" sizes="" srcset="">
          </div>

          <div class="d-flex justify-content-center mt-2">
            <div class="d-flex align-items-center">
              <font-awesome-icon :icon="['fas', 'chevron-circle-left']" />
            </div>
            <div>
              <img v-for="(image, index) in images" :key="index" class="border mx-2"
                style="cursor: pointer; width: 80px; height: 80px;" :src="image.src" :alt="`Gambar ${index + 1}`"
                @click="selectImage(index)" />
            </div>
            <div class="d-flex align-items-center">
              <font-awesome-icon :icon="['fas', 'chevron-circle-right']" />
            </div>
          </div>
        </div>
        <div class="col-6 col-md-6 mx-auto">
          <div>
            <h3>{{ $route.params.short_description }}</h3>
          </div>
          <div>{{ $route.params.product_type }}</div>
          <div style="size: 5px;"><font-awesome-icon v-for="index in 5" :key="index" :icon="['fas', 'star']"
              style="color: #FFD43B;" />(7)
          </div>
          <div>
            <div class="d-flex justify-content-between">
              <div>
                <text class="color-price">Rp {{ $route.params.price }}</text>
              </div>
              <div>
                <text class="color-avilable">
                  <font-awesome-icon :icon="['far', 'check-square']" style="color: #6F8EFF;" /> Tersedia
                </text>
              </div>
            </div>
          </div>
          <div>
            <div class="d-flex justify-content-start">
              <div class="border">
                <button class="btn btn-white">-</button>
              </div>
              <div class="border">
                <input style="width: 40px;" class="form-control" type="text">
              </div>
              <div class="border">
                <button class="btn btn-white">+</button>
              </div>
              <div class="mx-2">
                <button class="btn btn-danger">
                  Tambah Ke Kerjanjang
                </button>
              </div>
              <div>
                <button class="btn btn-light">
                  <font-awesome-icon :icon="['far', 'heart']" style="color: #EB3F36;" />
                </button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p>
                {{ $route.params.short_description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container class-rekomen">
      <div class="d-flex justify-content-center">
        <div class="mx-2 tabs-text" @click="selectTab('deskripsi')" :class="{ active: selectedTab === 'deskripsi' }">
          Deskripsi</div>
        <div class="mx-2 tabs-text" @click="selectTab('informasi')" :class="{ active: selectedTab === 'informasi' }">
          Informasi</div>
      </div>
      <div v-if="selectedTab === 'deskripsi'" class="tab-content">
        <div class="text-description">French Press dari Hario berbahan dasar kaca berwarna abu-abu di desain dengan bentuk
          yang ramping dan
          menarik. sangat
          cocok untuk membuat 1-2 gelas kopi.
          French Press merupakan salah satu teknik seduh manual yang simple, cukup untuk
          menyeduh air dan steep selama empat menit sebelum kamu menekan knob agar ampas bisa turun ke dasar.
        </div>
        <p class="text-description">
          Spesifikasi: <br>
          Dimensi : 11x16,5x8cm<br>
          Berat :350gr<br>
          Kapasitas : (240ml)<br>
          Warna : Abu-abu / Grey<br>
          Brand : Hario<br>
        </p>
      </div>
      <div v-if="selectedTab === 'informasi'" class="tab-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec lacinia massa.</p>
      </div>
    </div>
    <div class="container class-rekomen">
      <div class="d-flex justify-content-center">
        <text class="recomendation">Rekomendasi Untuk Anda</text>
      </div>
      <div class="d-flex flex-row justify-content-center class-rekomen">
        <div class="card shadow mx-4" style="width: 18rem;">
          <img src="./../../assets/image/image_6.png" class="card-img-top" alt="...">
          <div class="card-body text-center">
            <h5 class="card-title">ABID CLEVER DRIPPER 102</h5>
            <p class="card-title">UBRUKOPI</p>
            <font-awesome-icon v-for="index in 5" :key="index" :icon="['fas', 'star']"
              style="color: #FFD43B;" />(7)
            <p class="card-text">Rp 480.000</p>
          </div>
        </div>

        <div class="card shadow mx-4" style="width: 18rem;">
          <img src="./../../assets/image/image_50.png" class="card-img-top" alt="...">
          <div class="card-body text-center">
            <h5 class="card-title">KALITA FP PAPER FILTER ...</h5>
            <p class="card-title">UBRUKOPI</p>
            <font-awesome-icon v-for="index in 5" :key="index" :icon="['fas', 'star']"
              style="color: #FFD43B;" />(7)
            <p class="card-text">Rp 80.000</p>
          </div>
        </div>

        <div class="card shadow mx-4" style="width: 18rem;">
          <img src="./../../assets/image/image_51.png" class="card-img-top" alt="...">
          <div class="card-body text-center">
            <h5 class="card-title">HARIO GLASS RANGE SER...</h5>
            <p class="card-title">UBRUKOPI</p>
            <font-awesome-icon v-for="index in 5" :key="index" :icon="['fas', 'star']"
              style="color: #FFD43B;" />(7)
            <p class="card-text">Rp 499.000</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import gambar_2 from '@/assets/image/image_3.png';
import gambar_3 from '@/assets/image/image_4.png';
import gambar_4 from '@/assets/image/image_5.png';

export default {
  data() {
    return {
      selectedTab: 'deskripsi',
      selectedImage: gambar_2,
      images: [
        { src: gambar_2 },
        { src: gambar_3 },
        { src: gambar_4 },
      ],
    };
  },
  components: {
    Header,
  },
  methods: {
    selectImage(index) {
      this.selectedImage = this.images[index].src;
    },
    selectTab(tab) {
      this.selectedTab = tab;
    },
  },
}

</script>

<style scoped>
.link {
  text-decoration: none;
  color: #696969;
}

.breadcrumb {
  font-size: smaller;
}

.color-price {
  color: #EB3F36;
}

.color-avilable {
  color: #6F8EFF;
}

.tabs-text {
  font-size: 30px;
  font-weight: bold;
  max-width: 200px;
  cursor: pointer;
}

.tabs-text.active {
  color: #EB3F36;
  text-decoration: underline;
}

.tabs-text:not(.active) {
  color: #BEBEBE;
}

.tab-content {
  margin-top: 10px;
}

.text-description {
  color: #696969;
  margin-top: 20px;
}

.recomendation {
  font-size: 30px;
  font-weight: bold;
  color: #EB3F36;
}

.class-rekomen{
  margin-top: 50px;
  margin-bottom: 100px;
}

.card-text{
  color: #EB3F36;
}

.card-title{
  color: #696969;
}
</style>