<template>
  <q-page>
    <div class="container row justify-center">
      <div class="left-container">
        <p class="page-title jakarta-b q-mb-none q-mb-lg">Checkout</p>
        <p class="section-title jakarta-sb q-mb-none q-mb-md">Alamat Pengiriman</p>
        <div class="divider" />
        <div>
          <p class="username jakarta-sb q-mb-none q-mt-md">{{ this.username }}</p>
          <p class="noTelp jakarta-r q-mb-none q-my-sm">{{ this.noTelp }}</p>
          <p class="address jakarta-r q-mb-none q-mb-md">{{ this.address[0] }}</p>
        </div>
        <div class="divider" />
        <q-btn outline rounded color="hijau60" label="Pilih Alamat Lain" no-caps size="15px" class="q-mt-md q-mb-lg"
          @click="otherAddress = true" />
        <q-dialog v-model="otherAddress">
          <q-card class="overlay">

            <q-card-section>
              <div class="q-pa-md">
                <p v-if="currentPage" class="overlay-title jakarta-b text-center">Pilih Alamat Pengiriman</p>
                <P v-else class="overlay-title jakarta-b text-center">Lengkapi Detail Alamat</P>
                <div class="row justify-evenly">
                  <p class="cursor-pointer" :class="{ 'active-page': currentPage }" @click="currentPage = true">Semua
                    Alamat
                  </p>
                  <p class="cursor-pointer" :class="{ 'active-page': !currentPage }" @click="currentPage = false">Tambah
                    Alamat
                  </p>
                </div>
                <div v-if="currentPage">
                  <q-card flat>
                    <q-card-section>
                      <div class="row inactive-address items-center" :class="{ ' active-address': addressActiveOne }"
                        @click="toggleButton">
                        <div class="details">
                          <p class="address-label jakarta-b q-mb-none">{{ this.addressLabelShow[0] }}</p>
                          <p class="username jakarta-b q-mb-none">{{ this.username }}</p>
                          <p class="noTelp jakarta-r q-mb-none">{{ this.noTelp }}</p>
                          <p class="adress details jakarta-r q-mb-none ellipsis">{{ this.address[0] }}</p>
                        </div>
                        <q-icon v-if="addressActiveOne" name="fa-solid fa-check" color="hijau60" size="24px" />
                      </div>
                      <div class="row inactive-address items-center q-mt-md"
                        :class="{ ' active-address': addressActiveTwo }" @click="toggleButton">
                        <div class="details">
                          <p class="address-label jakarta-b q-mb-none">{{ this.addressLabelShow[1] }}</p>
                          <p class="username jakarta-b q-mb-none">{{ this.username }}</p>
                          <p class="noTelp jakarta-r q-mb-none">{{ this.noTelp }}</p>
                          <p class="adress details jakarta-r q-mb-none ellipsis">{{ this.address[1] }}</p>
                        </div>
                        <q-icon v-if="addressActiveTwo" name="fa-solid fa-check" color="hijau60" size="24px" />
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
                <div v-else>
                  <q-card flat>
                    <q-card-section>
                      <q-form @submit.prevent="submit">
                        <p class="label jakarta-sb q-mb-none q-px-sm">
                          Nama Penerima
                        </p>
                        <q-input outlined round v-model="name" class="q-mt-sm" :rules="[(val) => !!val]" />
                        <p class="label jakarta-sb q-mb-none q-px-sm">
                          Nomor HP
                        </p>
                        <q-input outlined round v-model="addressNoTelp" class="q-mt-sm" :rules="[(val) => !!val]" />
                        <p class="label jakarta-sb q-mb-none q-px-sm">
                          Label Alamat
                        </p>
                        <q-input outlined round v-model="addressLabel" class="q-mt-sm" :rules="[(val) => !!val]" />
                        <p class="label jakarta-sb q-mb-none q-px-sm">
                          Kota & Kecamatan
                        </p>
                        <q-input outlined round v-model="city" class="q-mt-sm" :rules="[(val) => !!val]" />
                        <p class="label jakarta-sb q-mb-none q-px-sm">
                          Almaat
                        </p>
                        <q-input outlined round v-model="addressDetails" class="q-mt-sm" :rules="[(val) => !!val]" />
                        <q-btn class="add-address-button jakarta-b q-mb-md" type="submit" unelevated label="Simpan"
                          text-color="white" no-caps />
                      </q-form>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-dialog>
        <div class="big-divider" />
        <div class="row justify-between items-start">
          <q-table :rows="rows" :columns="columns" row-key="name" class="table" grid hide-header hide-bottom>
            <template v-slot:item="props">
              <div class="column">
                <p class="store-name jakarta-sb q-mb-none q-mt-sm q-mb-sm">{{ props.row.store }}</p>
                <p class="city-text jakarta-sb q-mb-none q-mb-md">{{ props.row.city }}</p>
              </div>
              <div class="cart-item row q-mt-sm q-mb-md">
                <q-icon :name="props.row.thumbnail" size="58px" />
                <div class="column justify-between q-ml-md">
                  <p class="name-text jakarta-sb q-mb-none">{{ props.row.name }}</p>
                  <div v-if="props.row.discount > 0 || props.row < 100" class="row items-center">
                    <p class="discount-price-text jakarta-md q-mb-none">Rp <strike>{{
                      formatNumber(props.row.price)
                    }}</strike>
                    </p>
                    <p class="price-text jakarta-b q-mb-none q-mx-sm">Rp {{
                      formatNumber(calculateDiscount(props.row.price,
                        props.row.discount)) }}</p>
                  </div>
                  <p v-else class="price-text jakarta-b q-mb-none">Rp {{ formatNumber(props.row.price) }}</p>
                </div>
              </div>
            </template>
          </q-table>
          <div class="dropdown">
            <p class="delivery-title jakarta-b q-mb-none q-mb-sm">Pilih Pengiriman</p>
            <q-btn-dropdown color="hijau50" label="pengiriman" dropdown-icon="fa-solid fa-arrow-down" class="jakarta-b "
              no-caps>
              <q-list>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label class="jakarta-b dropdown-disabled">Instan (3 jam)</q-item-label>
                    <q-item-label class="jakarta-md dropdown-error">Jarak pengiriman melebihi batas maks. 25
                      km.</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <div class="row justify-between">
                      <q-item-label class="jakarta-b dropdown-title">Reguler</q-item-label>
                      <q-item-label class="jakarta-md dropdown-price">Rp 19.000</q-item-label>
                    </div>
                    <q-item-label class="jakarta-md dropdown-time">Estimasi tiba 11 - 12 Mar</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
        </div>
        <div class="q-mt-md">
          <p class="payment-title jakarta-b q-mb-none">Pilih Pembayaran</p>
          <q-btn-dropdown label="pengiriman" dropdown_icon="arrow_right" class="jakarta-b q-mt-md payment-button" no-caps>
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section avatar>
                  <q-avatar>
                    <q-img src="image-url-here" alt="image-description-here"/>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="jakarta-b payment-label">Bank BCA</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section avatar>
                  <q-avatar>
                    <q-img src="image-url-here" alt="image-description-here"/>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="jakarta-b payment-label">Bank Mandiri</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section avatar>
                  <q-avatar>
                    <q-img src="image-url-here" alt="image-description-here"/>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="jakarta-b payment-label">Bank BNI</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section avatar>
                  <q-avatar>
                    <q-img src="image-url-here" alt="image-description-here"/>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="jakarta-b payment-label">Bank BRI</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section avatar>
                  <q-avatar>
                    <q-img src="image-url-here" alt="image-description-here"/>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="jakarta-b payment-label">Bank CMB</q-item-label>
                </q-item-section>
              </q-item>

            </q-list>
          </q-btn-dropdown>
        </div>
      </div>
      <q-card class="card q-py-md q-px-lg">
        <p class="name-text jakarta-b q-mb-none">Ringkasan Belanja</p>
        <div class="q-mt-md">
          <div class="row justify-between">
            <p class="summary-text jakarta-sb q-mb-none">Total Harga</p>
            <p class="summary-text jakarta-sb q-mb-none">{{ 'Rp ' + formatNumber(roughTotalCost) }}</p>
          </div>
          <div class="row justify-between">
            <p class="summary-text jakarta-sb q-mb-none">Total Ongkos Kirim</p>
            <p class="summary-text jakarta-sb q-mb-none">Rp 19,000</p>
          </div>
        </div>
        <q-separator inset class="q-my-md" />
        <div class="row justify-between">
          <p class="total-cost-text jakarta-b q-mb-none">Total Tagihan</p>
          <p class="total-cost-text jakarta-b q-mb-none">{{ 'Rp ' + formatNumber(totalCost) }}</p>
        </div>
        <q-btn class="buy-button jakarta-sb q-mt-lg" label="Beli" text-color="white" unelevated no-caps />
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'

const columns = [
  {
    name: 'id',
    required: true,
    field: row => row.id,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'name', required: true, field: 'name', sortable: true },
  { name: 'thumbnail', required: true, field: 'thumbnail', sortable: false },
  { name: 'price', required: true, field: 'price', sortable: true },
  { name: 'discount', required: false, field: 'discount', sortable: true },
  { name: 'city', required: true, field: 'city', sortable: true },
  { name: 'rating', required: true, field: 'rating', sortable: false },
  { name: 'sold', required: true, field: 'sold', sortable: true },
  { name: 'kondisi', required: true, field: 'kondisi', sortable: true },
  { name: 'berat', required: true, field: 'berat', sortable: false },
  { name: 'desc', required: true, field: 'desc', sortable: false },
  { name: 'stock', required: true, field: 'stock', sortable: false }
]

const rows = [
  {
    id: '5',
    store: 'Kebun Pak Ravi',
    name: 'Durian Candimulyo',
    thumbnail: 'img:icons/home/durian-candimulyo.png',
    price: 25000,
    city: 'Kabupaten Magelang',
    rating: 5.0,
    sold: 52,
    kondisi: 'Baru panen',
    Berat: 3,
    desc: 'Lorem ipsum dolor sit amet, consectetur',
    stock: 20,
  },
  {
    id: '6',
    store: 'Kebun Pak Ravi',
    name: 'Durian Merah Banyuwangi',
    thumbnail: 'img:icons/home/durian-merah.png',
    price: 135000,
    discount: 10,
    city: 'Kabupaten Banyuwangi',
    rating: 5.0,
    sold: 21,
    kondisi: 'Baru panen',
    Berat: 3,
    desc: 'Lorem ipsum dolor sit amet, consectetur',
    stock: 20,
  },
]

export default {
  name: 'Checkout',

  setup() {
    return {
      columns,
      rows,
      otherAddress: ref(false),
      currentPage: ref(true),
      name: ref(null),
      addressNoTelp: ref(null),
      addressLabel: ref(null),
      city: ref(null),
      addressDetails: ref(null),
      addressActiveOne: ref(true),
      addressActiveTwo: ref(false),
    }
  },

  data() {
    return {
      username: 'Faiz',
      noTelp: '081335510629',
      address: ['Jl Soekarno Hatta Blok P (Masjid Al Muhajirin) Kec. Lowokwaru, Malang, Kode Pos 65141', 'Jl. Veteran, Ketawanggede, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145'],
      addressLabelShow: ['Kos', 'Rumah'],
    }
  },

  methods: {
    formatNumber(value) {
      return value.toLocaleString('en-US');
    },

    calculateDiscount(price, discount) {
      const discountAmount = price * (discount / 100);
      const discountedPrice = price - discountAmount;
      return discountedPrice;
    },

    toggleButton() {
      this.addressActiveOne = !this.addressActiveOne;
      this.addressActiveTwo = !this.addressActiveTwo;
    },

    submit() {

    },
  },

  computed: {
    totalCost() {
      return this.rows.reduce((total, item) => {
        const price = item.discount > 0 ? this.calculateDiscount(item.price, item.discount) : item.price;
        return total + price;
      }, 0);
    },

    roughTotalCost() {
      return this.rows.reduce((total, item) => {
        return total + item.price;
      }, 0);
    },

    totalDiscount() {
      return this.rows.reduce((total, item) => {
        const discountAmount = item.discount > 0 ? item.price * (item.discount / 100) : 0;
        return total + discountAmount;
      }, 0);
    }
  }
}
</script>

<style>
.container {
  margin-top: 60px;
}

.left-container {
  height: min-content;
  width: 685px;
}

.divider {
  width: 685px;
  height: 2px;
  background-color: #D9D9D9;
}

.big-divider {
  width: 685px;
  height: 8px;
  background-color: #D9D9D9;
  border-radius: 3px;
}

.page-title,
.overlay-title {
  font-size: 24px;
  color: #323741;
}

.section-title,
.store-name,
.username,
.delivery-title,
.payment-title {
  font-size: 16px;
  color: #323741;
}

.noTelp,
.dropdown-title,
.address-details {
  color: #323741;
}

.address,
.city-text,
.discount-price-text,
.address-label {
  color: #70737A;
}

.table {
  max-width: 342px;
  height: min-content;
}

.page-title {
  font-size: 24px;
  color: #323741;
}

.divider {
  width: 677px;
  height: 2px;
  background-color: #D9D9D9;
}

.cart-item {
  width: 654px;
  height: min-content;
}

.store-text,
.name-text,
.total-cost-text {
  font-size: 16px;
  color: #323741;
}

.price-text {
  color: #323741;
}

.q-list {
  top: 100%;
  right: 0;
}

.q-btn-dropdown {
  width: 306px;
  border-radius: 5px;
}

.dropdown {
  margin-top: 78px;
}

.dropdown-disabled {
  color: #ADAFB3;
}

.dropdown-error {
  font-size: 12px;
  color: #E4504A;
}

.dropdown-time,
.dropdown-price {
  font-size: 12px;
  color: #70737A;
}

.card {
  width: 332px;
  height: min-content;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  margin-left: 156px;
}

.summary-text {
  font-size: 16px;
  color: #70737A;
}

.buy-button {
  width: 100%;
  height: 40px;
  background-color: #116530;
  border-radius: 15px;
}

.payment-button {
  width: 100%;
  height: 40px;
  background-color: white;
  border-radius: 15px;
  padding: 16px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
}

.overlay {
  width: 612px;
  height: 711px;
}

form::-webkit-scrollbar {
  display: none;
}

.add-address-button {
  background: #116530;
  width: 100%;
  height: 56px;
  border-radius: 15px;
  font-size: 16px;
}

.details {
  max-width: 380px;
}

.active-page {
  border-bottom: 2px solid #116530;
  color: #116530;
}

.inactive-address {
  padding: 24px;
  border: 2px solid #58936E;
  border-radius: 15px;
  cursor: pointer;
}

.active-address {
  background-color: #C9FDE0;
  border: 2px solid #58936E;
  border-radius: 15px;
}

.payment-label {
  font-size: 12px;
  color: #323741;
}

.text-hijau50 {
  color: #58936E !important;
}

.bg-hijau50 {
  background: #58936E !important;
}

.text-hijau60 {
  color: #116530 !important;
}

.bg-hijau60 {
  background: #116530 !important;
}
</style>
