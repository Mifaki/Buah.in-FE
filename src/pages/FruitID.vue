<template>
  <q-page>
      <div class="container">
        <div class=" row justify-between">
          <div class="left-container">
            <q-icon :name="this.thumbnail[0]" size="395px" class="image" />
            <div class="q-mt-sm">
              <q-icon :name="this.thumbnail[0]" size="69px" class="image" />
              <q-icon :name="this.thumbnail[1]" size="69px" class="image q-px-sm" />
              <q-icon :name="this.thumbnail[2]" size="69px" class="image" />
            </div>
          </div>
          <div class="middlle-container">
            <p class="title jakarta-b q-mb-none">{{ this.name }}</p>
            <p class="price jakarta-b q-mb-none q-mb-md">Rp {{ this.price }}</p>
            <div class="divider" />
            <p class="detail-text jakarta-sb q-mb-none q-my-sm q-ml-md">Detail</p>
            <div class="divider" />
            <div class="row q-mt-md">
              <p class="static-text jakarta-sb q-mb-none">Kondisi:</p>
              <p class="dinamic-text jakarta-b q-mb-none q-ml-xs">{{ this.kondisi }}</p>
            </div>
            <div class="row q-mt-sm">
              <p class="static-text jakarta-sb q-mb-none">Berat Satuan:</p>
              <p class="dinamic-text jakarta-b q-mb-none q-ml-xs">{{ this.berat }}</p>
            </div>
            <p class="dinamic-text jakarta-b q-mb-none q-mt-sm q-mb-md">{{ this.desc }}</p>
            <div class="divider" />
            <p class="subtitle jakarta-b q-mb-none q-mt-md">Pengiriman</p>
            <div class="row items-center q-mt-sm">
              <q-icon name="img:icons/FruitID/location.png" />
              <p class="static-text jakarta-sb q-mb-none q-ml-sm">Berat Satuan:</p>
              <p class="dinamic-text jakarta-b q-mb-none q-ml-xs">{{ this.city }}</p>
            </div>
            <div class="row items-center q-mt-sm">
              <q-icon name="img:icons/FruitID/truck-time.png" />
              <p class="static-text jakarta-sb q-mb-none q-ml-sm">Ongkri Reguler 10 rb - 13 rb</p>
            </div>
          </div>
          <q-card class="right-container q-pa-md" flat>
            <p class="title jakarta-b q-mb-none">Atur Jumlah Buah</p>
            <div class=" row q-mt-lg">
              <q-input v-model.number="quantity" type="number" class="quantity-input centered-input no-spin-buttons" rounded
                outlined dense />
              <div class="row items-center">
                <p class="static-text jakarta-sb q-mb-none q-ml-sm">Berat Satuan:</p>
                <p class="dinamic-text jakarta-b q-mb-none q-ml-xs">{{ this.stock }}</p>
              </div>
            </div>
            <div class="row justify-between items-center q-mt-lg">
              <p class="subtotal-text jakarta-sb q-mb-none q-ml-sm">Subtotal</p>
              <p class="small-price jakarta-b q-mb-none">{{ 'Rp ' + formatNumber(this.price) }}</p>
            </div>
            <q-btn class="cart-button jakarta-sb q-mt-lg" icon="add" label="Keranjang" text-color="white" unelevated
              no-caps />
            <q-btn class="checkout-button jakarta-sb q-mt-md" color="transparant" label="Beli Sekarang" text-color="#116530"
              unelevated no-caps />
          </q-card>
        </div>
        <div class="q-mt-xl">
          <p class="review-title jakarta-b q-mb-none">Ulasan Pembeli</p>
          <q-card class="review-card column justify-center q-mt-md" flat>
            <div class="row items-center justify-center">
              <q-icon name="img:icons/home/durian-bawor.png" size="114px" />
              <div class="q-ml-xl">
                <p class="review-error-title jakarta-b q-mb-none">Belum ada ulasan produk untuk buah ini</p>
                <p class="review-error-caption jakarta-b q-mb-none">Beli buah ini dan jadilah yang pertama memberikan ulasan</p>
              </div>
            </div>
          </q-card>
        </div>
      </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'FruitID',
  data() {
    return {
      id: '4',
      name: 'Durian Bawor',
      thumbnail: ['img:icons/home/durian-bawor.png', 'img:icons/home/durian-bawor-2.png', 'img:icons/home/durian-bawor-3.png',],
      price: 80000,
      city: 'Kabupaten Banyumas',
      kondisi: 'Baru Panen',
      berat: 3,
      desc: 'Lorem ipsum dolor sit amet, consectetur',
      stock: 20,
    }
  },

  setup() {
    return {
      quantity: ref(0)
    }
  },

  methods: {
    formatNumber(value) {
      return value.toLocaleString('en-US');
    },

    calculateDiscount(price, discount) {
      const discountAmount = price * (discount / 100);
      const discountedPrice = price - discountAmount;
      return this.formatNumber(discountedPrice);
    }
  }
}
</script>

<style>
.container {
  margin: 0 63px;
  margin-top: 56px;
}


.left-container {
  width: 395px;
  height: min-content;
}

.middlle-container {
  width: 495px;
  height: min-content;
}

.right-container {
  width: 290px;
  height: min-content;
  color: #323741;
  border-radius: 15px;
  border: 2px solid #323741;
  background-color: transparent;
}

.image {
  border-radius: 15px;
}

.title {
  font-size: 24px;
  color: #323741;
}

.price {
  font-size: 30px;
  color: #323741;
}

.small-price {
  font-size: 24px;
  font-size: 24px;
}

.detail-text {
  font-size: 16px;
  color: #116530;
}

.static-text {
  font-size: 14px;
  color: #70737A;
}

.dinamic-text {
  font-size: 14px;
  color: #323741;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: #ADAFB3;
}

.subtitle {
  font-size: 16px;
  color: #323741;
}

.quantity-input {
  max-width: 113px;
}

.centered-input input {
  text-align: center;
}

.cart-button {
  width: 100%;
  height: 40px;
  background-color: #116530;
  border-radius: 15px;
}

.checkout-button {
  width: 100%;
  height: 40px;
  color: #116530;
  border: 3px solid #116530;
  border-radius: 15px;
}

.review-card {
  width: 954px;
  height: 184px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
}

.subtotal-text {
  font-size: 16px;
  color: #70737A;
}

.review-title {
  font-size: 16px;
  color: #323741;
}

.review-error-title {
  font-size: 24px;
  color: #323741;
}

.review-error-caption {
  font-size: 24px;
  color: #70737A;
}


/* .no-spin-buttons::-webkit-outer-spin-button,
.no-spin-buttons::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.no-spin-buttons {
  -moz-appearance: textfield;
} */
</style>
