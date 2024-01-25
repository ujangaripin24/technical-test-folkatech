<template>
    <div class="main-layout">
        <Sidebar />
        <div class="content">
            <Header />
            <h3>Product List</h3>
            <div v-if="products && products.list.length > 0">
                <div class="product-list">
    <div v-for="product in products.list" :key="product.id" class="card-wrapper">
      <div class="card shadow-sm" style="width: 18rem;">
        <img v-if="product.images.length > 0" :src="product.images[0].image_url" alt="Product Image" />
        <div class="card-body text-center">
          <h5 class="card-title">{{ product.short_description }}</h5>
          <p class="card-text">{{ product.product_type.name }}</p>
          <p class="card-text">{{ product.price }}</p>
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
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
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
</style>
