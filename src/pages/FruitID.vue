<template>
  <q-page>
    <div class="fruitID-container">
      <div class=" row justify-between">
        <div class="thumbnails-container">
          <q-icon :name="this.thumbnail[0]" size="395px" class="image" />
          <div class="q-mt-sm">
            <q-icon :name="this.thumbnail[0]" size="69px" class="image" />
            <q-icon :name="this.thumbnail[1]" size="69px" class="image q-px-sm" />
            <q-icon :name="this.thumbnail[2]" size="69px" class="image" />
          </div>
        </div>
        <div class="details-container">
          <p class="hitam30-24 jakarta-b q-mb-none">{{ this.name }}</p>
          <p class="price jakarta-b q-mb-none q-mb-md">Rp {{ this.price }}</p>
          <div class="divider" />
          <p class="hijau60-16 jakarta-sb q-mb-none q-my-sm q-ml-md">Detail</p>
          <div class="divider" />
          <div class="row q-mt-md">
            <p class="hitam20 jakarta-sb q-mb-none">Kondisi:</p>
            <p class="hitam30 jakarta-b q-mb-none q-ml-xs">{{ this.kondisi }}</p>
          </div>
          <div class="row q-mt-sm">
            <p class="hitam20 jakarta-sb q-mb-none">Berat Satuan:</p>
            <p class="hitam30 jakarta-b q-mb-none q-ml-xs">{{ this.berat }}</p>
          </div>
          <p class="hitam30 jakarta-b q-mb-none q-mt-sm q-mb-md">{{ this.desc }}</p>
          <div class="divider" />
          <p class="hitam30-16 jakarta-b q-mb-none q-mt-md">Pengiriman</p>
          <div class="row items-center q-mt-sm">
            <q-icon name="img:icons/FruitID/location.png" />
            <p class="hitam20 jakarta-sb q-mb-none q-ml-sm">Berat Satuan:</p>
            <p class="hitam30 jakarta-b q-mb-none q-ml-xs">{{ this.city }}</p>
          </div>
          <div class="row items-center q-mt-sm">
            <q-icon name="img:icons/FruitID/truck-time.png" />
            <p class="hitam20 jakarta-sb q-mb-none q-ml-sm">Ongkri Reguler 10 rb - 13 rb</p>
          </div>
        </div>
        <q-card class="actions-container q-pa-md" flat>
          <p class="hitam30-24 jakarta-b q-mb-none">Atur Jumlah Buah</p>
          <div class=" row q-mt-lg">
            <q-input v-model.number="quantity" type="number" class="quantity-input centered-input no-spin-buttons" rounded
              outlined dense />
            <div class="row items-center">
              <p class="hitam20 jakarta-sb q-mb-none q-ml-sm">Berat Satuan:</p>
              <p class="hitam30 jakarta-b q-mb-none q-ml-xs">{{ this.stock }}</p>
            </div>
          </div>
          <div class="row justify-between items-center q-mt-lg">
            <p class="hitam30-16 jakarta-sb q-mb-none q-ml-sm">Subtotal</p>
            <p class="hitam30-24 jakarta-b q-mb-none">{{ 'Rp ' + formatNumber(this.price) }}</p>
          </div>
          <q-btn class="cart-button jakarta-sb q-mt-lg" icon="add" label="Keranjang" text-color="white" unelevated no-caps
            @click="showNotification()" />
          <q-btn class="checkout-button jakarta-sb q-mt-md" color="transparant" label="Beli Sekarang" text-color="#116530"
            to="/home/checkout" replace unelevated no-caps />
        </q-card>
      </div>
      <div class="q-mt-xl">
        <p class="hitam30-16 jakarta-b q-mb-none">Ulasan Pembeli</p>
        <q-card class="review-cardError column justify-center q-mt-md" flat>
          <div class="row items-center justify-center">
            <q-icon name="img:icons/home/durian-bawor.png" size="114px" />
            <div class="q-ml-xl">
              <p class="hitam30-24 jakarta-b q-mb-none">Belum ada ulasan produk untuk buah ini</p>
              <p class="hitam20-24 jakarta-b q-mb-none">Beli buah ini dan jadilah yang pertama memberikan ulasan
              </p>
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
      thumbnail: ['img:icons/home/durian-bawor.jpg', 'img:icons/home/durian-bawor-2.png', 'img:icons/home/durian-bawor-3.png',],
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
    },

    showNotification() {
      this.$q.notify({
        message: 'Buah berhasil ditambahkan kedalam keranjang',
        color: 'black',
        position: 'bottom',
        timeout: 850
      })
    }
  }
}
</script>

<style>
.image {
  border-radius: 15px;
}

.price {
  font-size: 30px;
  color: #323741;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: #ADAFB3;
}

.quantity-input {
  max-width: 113px;
}

.checkout-button {
  width: 100%;
  height: 40px;
  color: #116530;
  border: 3px solid #116530;
  border-radius: 15px;
}
</style>
