<template>
  <div class="main-layout">
    <Sidebar />
    <div class="content">
      <Header />
      <div class="mt-4">
    <div v-if="loading">
      <p>Harap Tunggu...</p>
      <font-awesome-icon :icon="['fas', 'spinner']" pulse />
    </div>
    <div v-else-if="products && products.list.length > 0">
      <div class="product-list">
        <div v-for="product in products.list" :key="product.id" class="card-wrapper">
          <div class="card shadow-sm" style="width: 18rem; cursor: pointer;" @click="handleDetailProduct(product.id)">
            <img v-if="product.images.length > 0" :src="product.images[0].image_url" alt="Product Image" />
            <div class="card-body text-center">
              <text class="card-title type-description">{{ product.short_description }}</text><br>
              <text class="card-text type-name">{{ product.product_type.name }}</text><br>
              <div style="size: 5px;"><font-awesome-icon v-for="index in 5" :key="index" :icon="['fas', 'star']"
                  style="color: #FFD43B;" />(7)</div><br>
              <text class="card-text price">Rp {{ product.price }}</text>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>No products available.</p>
    </div>
  </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Header from '@/components/Header.vue';
import axios from 'axios';

export default {
  components: {
    Sidebar,
    Header,
  },
  data() {
    return {
      loading: true, 
      products: null,
    };
  },
  mounted() {
    this.fetchProductData();
  },
  methods: {
    async fetchProductData() {
      try {
        const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/api/product?price=0,90000&page=1&limit=10&order=product_name,ASC`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        this.products = response.data.data;
        console.log(this.products, "Data Produk");
        this.loading =false;
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    },
    handleDetailProduct(id) {
      console.log(id, 'Detail id');
      window.location = `/user/product/${id}`
    },
  },
};
</script>

<style>
.main-layout {
  display: flex;
  z-index: 9999;
}

.content {
  flex: 1;
  padding: 20px;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.card-wrapper {
  flex: 0 0 30%;
  margin: 0 10px 10px 0;
}

.price {
  color: #EB3F36;
  font-size: small;
}

.type-name {
  color: #696969;
}

.type-description {
  color: #696969;
}

.star {
  font-size: xx-small;
}</style>
