<template>
  <div class="sidebar shadow-sm">
    <div class="container">
      <label for="customRange1" class="form-label">Harga</label>
      <input type="range" class="form-range" id="customRange1" v-model="selectedValue" @input="updateInput" />

      <div class="mt-3">
        <div class="row">
          <div class="col">
            <input type="text" class="form-control" id="priceInput" v-model="selectedValue" />
          </div>
          <div class="col">
            <input type="text" class="form-control" id="priceInput" v-model="selectedValue" />

          </div>
        </div>
      </div>
    </div>
    <div>
      <div style="width: 100%; background-color: #f0f0f0; margin-top: 20px; height: auto;">
        <div class="d-flex justify-content-between align-items-center container">
          <div>
            <p>Origin</p>
          </div>
          <div>
            <button class="btn">
              <font-awesome-icon :icon="['fas', 'sort-up']" />
            </button>
          </div>
        </div>
      </div>
      <div class="form-check">
        <div class="container">
          <div>
            <input class="form-check-input" type="checkbox" value="">
            <label class="form-check-label">
              Aceh
            </label>
          </div>
          <div>
            <input class="form-check-input" type="checkbox" value="">
            <label class="form-check-label">
              Semarang
            </label>
          </div>
          <div>
            <input class="form-check-input" type="checkbox" value="">
            <label class="form-check-label">
              Bandung
            </label>
          </div>
          <div>
            <input class="form-check-input" type="checkbox" value="">
            <label class="form-check-label">
              Jawa
            </label>
          </div>
          <div>
            <input class="form-check-input" type="checkbox" value="">
            <label class="form-check-label">
              Amerika Selatan
            </label>
          </div>
          <div>
            <input class="form-check-input" type="checkbox" value="">
            <label class="form-check-label">
              Lain - Lain
            </label>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div style="width: 100%; background-color: #f0f0f0; margin-top: 20px; height: auto;">
        <div class="d-flex justify-content-between align-items-center container">
          <div>
            <p>Species</p>
          </div>
          <div>
            <button class="btn">
              <font-awesome-icon :icon="['fas', 'sort-up']" />
            </button>
          </div>
        </div>
      </div>
      <div class="form-check">
        <div class="container">
          <div>
            <input class="form-check-input" type="checkbox" value="">
            <label class="form-check-label">
              Arabika
            </label>
          </div>
          <div>
            <input class="form-check-input" type="checkbox" value="">
            <label class="form-check-label">
              Robusta
            </label>
          </div>
          <div>
            <input class="form-check-input" type="checkbox" value="">
            <label class="form-check-label">
              Blend
            </label>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div style="width: 100%; background-color: #f0f0f0; margin-top: 20px; height: auto;">
        <div class="d-flex justify-content-between align-items-center container">
          <div>
            <p>Roast Level</p>
          </div>
          <div>
            <button class="btn">
              <font-awesome-icon :icon="['fas', 'sort-up']" />
            </button>
          </div>
        </div>
      </div>
      <div class="form-check">
        <div class="container">
          <div>
            <input class="form-check-input" type="checkbox" value="">
            <label class="form-check-label">
              Light Roast
            </label>
          </div>
          <div>
            <input class="form-check-input" type="checkbox" value="">
            <label class="form-check-label">
              Medium Roast
            </label>
          </div>
          <div>
            <input class="form-check-input" type="checkbox" value="">
            <label class="form-check-label">
              Dark Roast
            </label>
          </div>
          <div>
            <input class="form-check-input" type="checkbox" value="">
            <label class="form-check-label">
              Light To Medium Roast
            </label>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div style="width: 100%; background-color: #f0f0f0; margin-top: 20px; height: auto;">
        <div class="d-flex justify-content-between align-items-center container">
          <div>
            <p>Tasted</p>
          </div>
          <div>
            <button class="btn">
              <font-awesome-icon :icon="['fas', 'sort-up']" />
            </button>
          </div>
        </div>
      </div>
      <div class="form-check">
        <div class="container">
          <div>
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <input class="form-check-input" type="checkbox" value="">
                <label class="form-check-label">
                  Sweet
                </label>
              </div>
              <div>
                <button class="btn">
                  <label for="" class="form-check-label">(19)</label>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <input class="form-check-input" type="checkbox" value="">
                <label class="form-check-label">
                  Floral
                </label>
              </div>
              <div>
                <button class="btn">
                  <label for="" class="form-check-label">(21)</label>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <input class="form-check-input" type="checkbox" value="">
                <label class="form-check-label">
                  Fruity
                </label>
              </div>
              <div>
                <button class="btn">
                  <label for="" class="form-check-label">(7)</label>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <input class="form-check-input" type="checkbox" value="">
                <label class="form-check-label">
                  Nutty
                </label>
              </div>
              <div>
                <button class="btn">
                  <label for="" class="form-check-label">(5)</label>
                </button>
              </div>
            </div>

          </div>
          <div>

          </div>
          <div>
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <input class="form-check-input" type="checkbox" value="">
                <label class="form-check-label">
                  Spices
                </label>
              </div>
              <div>
                <button class="btn">
                  <label for="" class="form-check-label">(18)</label>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div style="width: 100%; background-color: #f0f0f0; margin-top: 20px; height: auto;">
        <div class="d-flex justify-content-between align-items-center container">
          <div>
            <p>Processing</p>
          </div>
          <div>
            <button class="btn">
              <font-awesome-icon :icon="['fas', 'sort-up']" />
            </button>
          </div>
        </div>
      </div>
      <div class="form-check">
        <div class="container">
          <div>
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <input class="form-check-input" type="checkbox" value="">
                <label class="form-check-label">
                  Honey White
                </label>
              </div>
              <div>
                <button class="btn">
                  <label for="" class="form-check-label">(8)</label>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <input class="form-check-input" type="checkbox" value="">
                <label class="form-check-label">
                  Natural
                </label>
              </div>
              <div>
                <button class="btn">
                  <label for="" class="form-check-label">(2)</label>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <input class="form-check-input" type="checkbox" value="">
                <label class="form-check-label">
                  Honey Gold
                </label>
              </div>
              <div>
                <button class="btn">
                  <label for="" class="form-check-label">(7)</label>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <input class="form-check-input" type="checkbox" value="">
                <label class="form-check-label">
                  Honey Yellow
                </label>
              </div>
              <div>
                <button class="btn">
                  <label for="" class="form-check-label">(5)</label>
                </button>
              </div>
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
      selectedValue: 0,
    };
  },
  methods: {
    updateInput(event) {
      this.selectedValue = event.target.value;
    },
  },
};
</script>
  
<style scoped>
.sidebar {
  width: 300px;
  background-color: #fff;
}
.label{
  background-color: red;
  color: #f0f0f0;
}
.p{
  font-weight: bold;
}
</style>
  