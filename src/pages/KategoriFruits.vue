<template>
  <q-page>
    <div class="row items-start">
      <q-list bordered class="kategori-sidebar">
        <q-item>
          <q-item-section class="jakarta-b hitam30-16 q-mb-none">Kategori</q-item-section>
        </q-item>

        <q-item clickable v-ripple class="q-pb-none">
          <q-item-section class="jakarta-sb hitam20 q-mb-none q-ml-md">Best Deal</q-item-section>
        </q-item>

        <q-item clickable v-ripple class="q-py-none">
          <q-item-section class="jakarta-sb hitam20 q-mb-none q-ml-md ">Buah.in Selection</q-item-section>
        </q-item>

        <q-item clickable v-ripple class="q-py-none">
          <q-item-section class="jakarta-sb hitam20 q-mb-none q-ml-md">On Sale</q-item-section>
        </q-item>

        <q-item clickable v-ripple class="q-py-none">
          <q-item-section class="jakarta-sb hitam20 q-mb-none q-ml-md">Semua Kategori</q-item-section>
        </q-item>

        <q-separator />

        <q-item>
          <q-item-section class="jakarta-b hitam30-16 q-mb-none">Lokasi</q-item-section>
        </q-item>

        <q-item class="q-py-none">
          <q-checkbox class="jakarta-sb hitam20 q-mb-none" v-model="Malang" color="green" label="Malang">
          </q-checkbox>
        </q-item>

        <q-item class="q-py-none">
          <q-checkbox class="jakarta-sb hitam20 q-mb-none" v-model="Batu" color="green" label="Batu">
          </q-checkbox>
        </q-item>

        <q-item class="q-py-none">
          <q-checkbox class="jakarta-sb hitam20 q-mb-none" v-model="Banyuwangi" color="green" label="Banyuwangi">
          </q-checkbox>
        </q-item>

        <q-item class="q-py-none">
          <q-checkbox class="jakarta-sb hitam20 q-mb-none" v-model="Probolinggo" color="green" label="Probolinggo">
          </q-checkbox>
        </q-item>

        <q-separator />

        <q-item>
          <q-item-section class="jakarta-b hitam30-16 q-mb-none">Urutkan</q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-btn outline rounded color="hitam20" icon-right="fa-solid fa-arrow-up" label="Murah ke Mahal" no-caps dense/>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-btn outline rounded color="hitam20" icon-right="fa-solid fa-arrow-down" label="Mahal ke Murah" no-caps dense />
          </q-item-section>
        </q-item>

        <q-separator />
        '
      </q-list>
      <div class="kategori-container q-mt-xl">
        <div class="row q-ml-md">
          <div class="row cursor-pointer active-page jakarta-b q-mb-none q-px-md">
            <q-icon name="fa-solid fa-seedling" />
            <p class="q-ml-sm q-mb-none">Buah</p>
          </div>
          <router-link to="kategori-stores" class="link">
            <div class="row cursor-pointer toggle-text jakarta-b q-mb-none q-ml-lg q-px-md">
              <q-icon name="fa-solid fa-store" />
              <p class="q-ml-sm q-mb-none">Penjual</p>
            </div>
          </router-link>
        </div>
        <q-table :rows="rows" :columns="columns" :cols="5" row-key="name" class="fruits col-10  " grid
          hide-header virtual-scroll>
          <template v-slot:item="props">
            <div class="q-pa-md">
              <q-item to="/home/fruit-id" replace>
                <q-card no-shadow class="fruits-card">
                  <q-icon :name="props.row.thumbnail" size="202px" />
                  <div class="fruits-card-inside q-mx-md q-mt-sm">
                    <p class="hitam30-16 jakarta-sb q-mb-none q-mt-sm">{{ props.row.name }}</p>
                    <div v-if="props.row.discount > 0 || props.row < 100">
                      <p class="hitam30-16 jakarta-b q-mb-none q-mt-sm">Rp {{ calculateDiscount(props.row.price,
                        props.row.discount) }}</p>
                      <div class="row q-mt-sm items-center">
                        <div class="discount-bg">
                          <p class="discount-text jakarta-b q-mb-none q-pa-xs">{{ props.row.discount }}%</p>
                        </div>
                        <p class="hitam20 jakarta-md q-mb-none q-ml-md">Rp <strike>{{ formatNumber(props.row.price)
                        }}</strike>
                        </p>
                      </div>
                    </div>
                    <p v-else class="hitam30-16 jakarta-b q-mb-none q-mt-sm">Rp {{ formatNumber(props.row.price) }}</p>
                    <p class="hitam20 jakarta-md  q-mb-none q-mt-sm">{{ props.row.city }}</p>
                    <div v-if="props.row.sold" class="row items-center q-mt-sm">
                      <q-icon name="star" color="yellow" />
                      <p class="hitam20 jakarta-md q-mb-none q-ml-sm">{{ props.row.rating.toFixed(1) }}</p>
                      <p class="hitam20 jakarta-md q-mb-none q-ml-sm">|</p>
                      <p class="hitam20 jakarta-md q-mb-none q-ml-sm">Terjual</p>
                      <p class="hitam20 jakarta-md q-mb-none q-ml-sm">{{ props.row.sold }}</p>
                    </div>
                  </div>
                </q-card>
              </q-item>
            </div>
          </template>
        </q-table>
      </div>
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
    id: '1',
    name: 'Alpukat Mentega',
    thumbnail: 'img:icons/home/alpukat-mentega.png',
    price: 25200,
    discount: 10,
    city: 'Kabupaten Bojonegoro',
    rating: 5.0,
    sold: 500,
    kondisi: 'Baru panen',
    Berat: 3,
    desc: 'Lorem ipsum dolor sit amet, consectetur',
    stock: 20,
  },
  {
    id: '2',
    name: 'Alpukat',
    thumbnail: 'img:icons/home/alpukat.png',
    price: 280000,
    city: 'Kota Kediri',
    rating: 5.0,
    sold: 81,
    kondisi: 'Baru panen',
    Berat: 3,
    desc: 'Lorem ipsum dolor sit amet, consectetur',
    stock: 20,
  },
  {
    id: '3',
    name: 'Apel Malang',
    thumbnail: 'img:icons/home/apel-malang.png',
    price: 11000,
    city: 'Kota Batu',
    kondisi: 'Baru panen',
    Berat: 3,
    desc: 'Lorem ipsum dolor sit amet, consectetur',
    stock: 20,
  },
  {
    id: '4',
    name: 'Durian Bawor',
    thumbnail: 'img:icons/home/durian-bawor.png',
    price: 80000,
    city: 'Kabupaten Banyumas',
    kondisi: 'Baru panen',
    Berat: 3,
    desc: 'Lorem ipsum dolor sit amet, consectetur',
    stock: 20,
  },
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
  {
    id: '6',
    name: 'Jambu Biji',
    thumbnail: 'img:icons/home/jambu-biji.png',
    price: 15000,
    city: 'Kabupaten karanganyar',
    kondisi: 'Baru panen',
    Berat: 3,
    desc: 'Lorem ipsum dolor sit amet, consectetur',
    stock: 20,
  },
  {
    id: '7',
    name: 'Pisang Cavendish',
    thumbnail: 'img:icons/home/pisang.png',
    price: 9000,
    city: 'Kota Boyolali',
    rating: 5.0,
    sold: 192,
    kondisi: 'Baru panen',
    Berat: 3,
    desc: 'Lorem ipsum dolor sit amet, consectetur',
    stock: 20,
  },
  {
    id: '8',
    name: 'Rambutan',
    thumbnail: 'img:icons/home/rambutan.png',
    price: 9000,
    discount: 10,
    city: 'Kota Lamongan',
    rating: 5.0,
    sold: 1382,
    kondisi: 'Baru panen',
    Berat: 3,
    desc: 'Lorem ipsum dolor sit amet, consectetur',
    stock: 20,
  },
  {
    id: '9',
    name: 'Semangka',
    thumbnail: 'img:icons/home/semangka.png',
    price: 7000,
    city: 'Kabupaten Banyumas',
    rating: 5.0,
    sold: 313,
    kondisi: 'Baru panen',
    Berat: 3,
    desc: 'Lorem ipsum dolor sit amet, consectetur',
    stock: 20,
  }
]
export default {
  name: 'KategoriFruits',

  setup() {
    return {
      columns,
      rows,
      Malang: ref(false),
      Batu: ref(false),
      Banyuwangi: ref(false),
      Probolinggo: ref(false),
    }
  },

  methods: {
    hasItem(value) {
      return Object.keys(this.rows).includes(value)
    },

    formatNumber(value) {
      if (value === undefined) {
        return '';
      }
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
.text-hitam20 {
  color: #70737A !important;
}

.bg-hitam20 {
  background: #70737A !important;
}
</style>
