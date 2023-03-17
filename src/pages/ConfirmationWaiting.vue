<template>
  <q-page>
    <div class="confirmationWaiting-container">
      <div class="row">
        <div class="row cursor-pointer active-page jakarta-b q-mb-none q-px-md">
          <p class="q-ml-sm q-mb-none">Menunggu Konfirmasi</p>
        </div>
        <router-link to="confirmation-review" class="link">
          <div class="row cursor-pointer toggle-text jakarta-b q-mb-none q-ml-lg q-px-md">
            <p class="q-ml-sm q-mb-none">Ulasan Saya</p>
          </div>
        </router-link>
      </div>
      <q-table :rows="rows" :columns="columns" row-key="name" class="confirmationWaiting-table" grid hide-header hide-bottom>
        <template v-slot:item="props">
          <div class="column">
            <p class="hitam30-16 jakarta-sb q-mb-none q-mt-sm q-mb-sm">{{ props.row.store }}</p>
            <p class="hitam20 jakarta-sb q-mb-none q-mb-md">{{ props.row.city }}</p>
          </div>
          <div class="cart-item row q-mt-sm q-mb-md">
            <q-icon :name="props.row.thumbnail" size="58px" />
            <div class="column justify-between q-ml-md">
              <p class="hitam30-16 jakarta-sb q-mb-none">{{ props.row.name }}</p>
              <div v-if="props.row.discount > 0 || props.row < 100" class="row items-center">
                <p class="discount-hitam30 jakarta-md q-mb-none">Rp <strike>{{
                  formatNumber(props.row.price)
                }}</strike>
                </p>
                <p class="hitam30 jakarta-b q-mb-none q-mx-sm">Rp {{
                  formatNumber(calculateDiscount(props.row.price,
                    props.row.discount)) }}</p>
              </div>
              <p v-else class="hitam30 jakarta-b q-mb-none">Rp {{ formatNumber(props.row.price) }}</p>
            </div>
          </div>
          <q-btn outline rounded color="primary" label="Konfirmasi Pesanan" no-caps class="confirmation-button" />
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>

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
  name: 'ConfirmationWaiting',

  setup() {
    return {
      columns,
      rows,
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
  },
}
</script>

<style>
.confirmation-button {
  width: 100%;
}
</style>
