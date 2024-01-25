<template>
  <div class="main-layout">
    <Sidebar @minValueUpdate="handleMinValue" @maxValueUpdate="handleMaxValue" />
    <div class="content">
      <Header @searchUpdated="propsSearchProduct" />
      <div>
        <div class="">
          <div class="d-flex gap-3 justify-content-between align-items-center">
            <div class="d-flex justify-content-evenly">
              <div class="dropdown">
                <label for="" class="mr-3">Menampilkan</label>
                <button class="btn btn-light btn-sm dropdown-toggle mx-2" type="button" id="dropdownMenuButton1"
                  data-bs-toggle="dropdown" aria-expanded="false">
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li v-for="number in 20" :key="number">
                    <a class="dropdown-item" @click="shortingNumber(number)">{{ number }}</a>
                  </li>
                </ul>
                <label for="" class="mb-3"> dari {{ this.totalData }}</label>
              </div>
            </div>
            <div>
              <div class="dropdown">
                <label for="">Urutkan</label>
                <button class="btn btn-light btn-sm dropdown-toggle mx-2" type="button" id="dropdownMenuButton1"
                  data-bs-toggle="dropdown" aria-expanded="false">
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li @click="shortingProduct('ASC')"><a class="dropdown-item">A - Z</a></li>
                  <li @click="shortingProduct('DESC')"><a class="dropdown-item">Z - A</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div v-if="searchProduct !== ''">
          <label class="search-text" for="">
            Mencari Product: "<i>{{ searchProduct }}</i>"
          </label>
        </div>
        <div v-if="minPrice !== 0">
          <label class="search-text" for="">
            Mencari Product: "<i>{{ minPrice }}</i>"
          </label>
        </div>
        <div v-if="maxPrice !== 900000">
          <label class="search-text" for="">
            Mencari Product: "<i>{{ maxPrice }}</i>"
          </label>
        </div>
      </div>
      <div class="mt-4">
        <div v-if="loading">
          <div class="row justify-content-center align-items-center">
            <h2>
              <font-awesome-icon :icon="['fas', 'spinner']" pulse />
            </h2>
          </div>
        </div>
        <div v-else-if="products && products.list.length > 0">
          <div class="product-list">
            <div v-for="product in products.list" :key="product.id" class="card-wrapper fade-in">
              <div class="card shadow-sm" style="width: 18rem; cursor: pointer;"
                @click="handleDetailProduct(product.id, product.short_description, product.product_type.name, product.price)">
                <img v-if="product.images.length > 0" :src="product.images[0].image_url" alt="Product Image" />
                <div class="card-body text-center">
                  <text class="card-title type-description">{{ shortedText(product.short_description) }}</text><br>
                  <text class="card-text type-name">{{ product.product_type.name }}</text><br>
                  <div style="size: 5px;"><font-awesome-icon v-for="index in 5" :key="index" :icon="['fas', 'star']"
                      style="color: #FFD43B;" />(7)
                  </div><br>
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
      totalData: null,
      sorting: 'ASC',
      selectData: 20,
      searchProduct: '',
      minPrice: 0,
      maxPrice: 900000,
    };
  },
  mounted() {
    this.fetchProductData();
  },
  watch: {
    sorting(newSorting) {
      this.fetchProductData(newSorting);
    },
    selectData(newShowData) {
      this.fetchProductData(newShowData);
    },
    // minPrice: function(newMinPrice) {
    //   this.fetchProductData();
    // },
    // maxPrice: function(newMaxPrice) {
    //   this.fetchProductData();
    // },
  },
  methods: {
    shortedText(description) {
      if (description.length > 20) {
        return description.substring(0, 20) + '...';
      } else {
        return description;
      }
    },
    propsSearchProduct(searchStringProduct) {
      this.searchProduct = searchStringProduct;
    },
    shortingProduct(newSorting) {
      this.sorting = newSorting;
    },
    shortingNumber(newShowData) {
      this.selectData = newShowData;
      this.fetchProductData(this.sorting, newShowData);
    },

    handleMinValue(minValue) {
      this.minPrice = minValue;
      this.fetchProductData();
    },
    handleMaxValue(maxValue) {
      this.maxPrice = maxValue;
      this.fetchProductData();
    },

      async fetchProductData(sorting = 'ASC') {
        const minPrice = this.minPrice; 
        const maxPrice = this.maxPrice;
        const selectData = this.selectData;

        try {
          const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/api/product?price=${minPrice},${maxPrice}&page=1&limit=${selectData}&order=product_name,${sorting}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          });
          this.totalData = response.data.data.total;
          this.products = response.data.data;
          console.log(this.products, "Data Product");
          this.loading = false;
        } catch (error) {
          console.error('Error fetching product data:', error);
        }
      },

      handleDetailProduct(id, short_description, product_type, price) {
        console.log(id, 'Detail id');
        window.location = `/user/product/${id}/${short_description}/${product_type}/${price}`
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
}

.search-text {
  font-size: 12px;
}
</style>
