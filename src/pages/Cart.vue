<template>
  <q-page>
    <div class="cart-container row justify-center">
      <div>
        <p class="hitam30-24 jakarta-sb q-mb-none">Keranjang</p>
        <div class="divider q-mt-md" />
        <q-table :rows="rows" :columns="columns" row-key="name" class="cart-table" grid hide-header hide-bottom>
          <template v-slot:item="props">
            <div class="column q-mt-md">
              <p class="hitam30-16 jakarta-sb q-mb-none q-mt-sm">{{ props.row.store }}</p>
              <p class="hitam20 jakarta-sb q-mb-none">{{ props.row.city }}</p>
            </div>
            <div class="cart-item row q-mt-sm q-mb-md">
              <q-icon :name="props.row.thumbnail" size="78px" />
              <div class="column justify-between q-ml-sm">
                <p class="hitam30-16 jakarta-sb q-mb-none">{{ props.row.name }}</p>
                <div v-if="props.row.discount > 0 || props.row < 100" class="row items-center q-mt-sm">
                  <div class="discount-bg">
                    <p class="discount-text jakarta-b q-mb-none q-pa-xs">{{ props.row.discount }}%</p>
                  </div>
                  <p class="hitam20 jakarta-md q-mb-none q-ml-md">Rp <strike>{{ formatNumber(props.row.price)
                  }}</strike>
                  </p>
                  <p class="hitam30 jakarta-b q-mb-none q-mx-sm">Rp {{ formatNumber(calculateDiscount(props.row.price,
                    props.row.discount)) }}</p>
                </div>
                <p v-else class="hitam30 jakarta-b q-mb-none q-mt-sm">Rp {{ formatNumber(props.row.price) }}</p>
              </div>
            </div>
            <q-seperator class="divider" />
          </template>
        </q-table>
      </div>
      <q-card class="cart-card q-py-md q-px-xl">
        <p class="hitam30-16 jakarta-sb q-mb-none">Ringkasan Belanja</p>
        <div class="q-mt-md">
          <div class="row justify-between">
            <p class="hitam20-16 q-mb-none">Total Harga</p>
            <p class="hitam20-16 q-mb-none">{{ 'Rp ' + formatNumber(roughTotalCost) }}</p>
          </div>
          <div class="row justify-between">
            <p class="hitam20-16 q-mb-none">Total Diskon Buah</p>
            <p class="hitam20-16 q-mb-none">{{ '-Rp ' + formatNumber(totalDiscount) }}</p>
          </div>
        </div>
        <q-separator inset class="q-my-md" />
        <div class="row justify-between">
          <p class="hitam30-16 q-mb-none">Ringkasan Belanja</p>
          <p class="hitam30-16 q-mb-none">{{ 'Rp ' + formatNumber(totalCost) }}</p>
        </div>
        <q-btn class="buy-button jakarta-sb q-mt-lg" label="Beli" text-color="white" unelevated no-caps to="/home/checkout" replace />
      </q-card>
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
  { name: 'berat',required: true, field: 'berat', sortable: false },
  { name: 'desc', required: true, field: 'desc', sortable: false },
  { name: 'stock', required: true, field: 'stock', sortable: false }
]

const rows = [
  {
    id: '5',
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
  name: 'Cart',

  setup() {
    return {
      columns,
      rows
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
    }
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
.divider {
  width: 677px;
  height: 2px;
  background-color: #D9D9D9;
}

.buy-button {
  width: 100%;
  height: 40px;
  background-color: #116530;
  border-radius: 15px;
}
</style>
