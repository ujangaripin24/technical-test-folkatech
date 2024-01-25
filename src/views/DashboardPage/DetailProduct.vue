<template>
  <div>
    <Header />
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a class="link" href="">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">{{ $route.params.short_description }}</li>
        </ol>
      </nav>
      <div class="row g-2">
        <div class="col-sm-6 col-md-6">
          <div>Gambar</div>

          <div>
            <img style="cursor: pointer;" src="" alt="Gambar 1" srcset="">
            <img style="cursor: pointer;" src="" alt="Gambar 1" srcset="">
            <img style="cursor: pointer;" src="" alt="Gambar 1" srcset="">
          </div>
        </div>
        <div class="col-6 col-md-6">
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
                Rp {{ $route.params.price }}
              </div>
              <div>
                Tersedia
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
  </div>
</template>

<script>

import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  },
}
</script>

<style>
.link {
  text-decoration: none;
  color: #696969;
}

.breadcrumb {
  font-size: smaller;
}
</style>