<template>
  <q-page>
    <div class="row items-start">
      <q-list bordered class="sidebar">
        <q-item>
          <q-item-section class="jakarta-b paragraph q-mb-none">Kategori</q-item-section>
        </q-item>

        <q-item clickable v-ripple class="q-pb-none">
          <q-item-section class="jakarta-sb caption q-mb-none q-ml-md">Best Deal</q-item-section>
        </q-item>

        <q-item clickable v-ripple class="q-py-none">
          <q-item-section class="jakarta-sb caption q-mb-none q-ml-md ">Buah.in Selection</q-item-section>
        </q-item>

        <q-item clickable v-ripple class="q-py-none">
          <q-item-section class="jakarta-sb caption q-mb-none q-ml-md">On Sale</q-item-section>
        </q-item>

        <q-item clickable v-ripple class="q-py-none">
          <q-item-section class="jakarta-sb caption q-mb-none q-ml-md">Semua Kategori</q-item-section>
        </q-item>

        <q-separator />

        <q-item>
          <q-item-section class="jakarta-b paragraph q-mb-none">Lokasi</q-item-section>
        </q-item>

        <q-item class="q-py-none">
          <q-checkbox class="jakarta-sb caption q-mb-none" v-model="Malang" color="green" label="Malang">
          </q-checkbox>
        </q-item>

        <q-item class="q-py-none">
          <q-checkbox class="jakarta-sb caption q-mb-none" v-model="Batu" color="green" label="Batu">
          </q-checkbox>
        </q-item>

        <q-item class="q-py-none">
          <q-checkbox class="jakarta-sb caption q-mb-none" v-model="Banyuwangi" color="green" label="Banyuwangi">
          </q-checkbox>
        </q-item>

        <q-item class="q-py-none">
          <q-checkbox class="jakarta-sb caption q-mb-none" v-model="Probolinggo" color="green" label="Probolinggo">
          </q-checkbox>
        </q-item>

        <q-separator />

        <q-item>
          <q-item-section class="jakarta-b paragraph q-mb-none">Urutkan</q-item-section>
        </q-item>
      </q-list>
      <div class="right-container q-mt-xl">
        <div class="row q-ml-md">
          <router-link to="kategori-fruits" class="link">
            <div class="row cursor-pointer toggle-text jakarta-b q-mb-none q-px-md">
              <q-icon name="fa-solid fa-seedling" />
              <p class="q-ml-sm q-mb-none">Buah</p>
            </div>
          </router-link>
          <div class="row cursor-pointer active-page jakarta-b q-mb-none q-ml-lg q-px-md">
            <q-icon name="fa-solid fa-store" />
            <p class="q-ml-sm q-mb-none">Penjual</p>
          </div>
        </div>
        <q-table :rows="rows" :columns="columns" :cols="5" row-key="id" class="col-10" grid
          hide-header virtual-scroll >
          <template v-slot:item="props">
            <div class="q-pa-md">
              <q-card no-shadow class="store-card q-pa-md">
                <div class="row justify-between">
                  <div>
                    <p class="owner-text jakarta-sb q-mb-none">{{ props.row.owner }}</p>
                    <p class="city-text jakarta-sb q-mb-none">{{ props.row.city }}</p>
                  </div>
                  <q-btn outline rounded color="primary" label="Lihat Lebih Banyak" no-caps />
                </div>
                <div class="row q-mt-md">
                  <div class="text-center">
                    <q-icon :name="props.row.thumbnails[0]" size="88px"/>
                    <p class="price-text jakarta-b q-mb-none">{{ 'Rp ' + formatNumber(props.row.prices[0]) }}</p>
                  </div>
                  <div class="text-center q-mx-md" v-if="props.row.thumbnails[1]">
                    <q-icon :name="props.row.thumbnails[1]" size="88px"/>
                    <p class="price-text jakarta-b q-mb-none">{{ 'Rp ' + formatNumber(props.row.prices[1]) }}</p>
                  </div>
                  <div class="text-center" v-if="props.row.thumbnails[2]">
                    <q-icon :name="props.row.thumbnails[2]" size="88px"/>
                    <p class="price-text jakarta-b q-mb-none">{{ 'Rp ' + formatNumber(props.row.prices[2]) }}</p>
                  </div>
                </div>
              </q-card>
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
    name: 'storeId',
    required: true,
    field: row => row.storeId,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'owner', required: true, field: 'owner', sortable: true },
  { name: 'city', required: true, field: 'city', sortable: true },
  { name: 'fruitsName', required: false, field: 'fruitsName', sortable: true },
  { name: 'thumbnails', required: true, field: 'thumbnails', sortable: false },
  { name: 'prices', required: true, field: 'prices', sortable: true },
]

const rows = [
  {
    storeId: '1',
    owner: 'Pak Faiz',
    city: 'Kabupaten Banyumas',
    fruitsName: ['Durian Bawor'],
    thumbnails: ['img:icons/kategori/faiz-1.png'],
    prices: [80000],
  },
  {
    storeId: '2',
    owner: 'Pak Ravi',
    city: 'Kabupaten Lamongan',
    fruitsName: ['Rambutan', 'Rambutan-2', 'Rambutan-3'],
    thumbnails: ['img:icons/kategori/ravi-1.png', 'img:icons/kategori/ravi-2.png', 'img:icons/kategori/ravi-3.png'],
    prices: [9000, 9800, 10200],
  },
  {
    storeId: '3',
    owner: 'Bu Salwa',
    city: 'Kota Batu',
    fruitsName: ['Apel', 'Apel-2', 'Apel-3'],
    thumbnails: ['img:icons/kategori/salwa-1.png', 'img:icons/kategori/salwa-2.png', 'img:icons/kategori/salwa-3.png'],
    prices: [11000, 10500, 9900],
  },
  {
    storeId: '4',
    owner: 'Pak Izzar',
    city: 'Kabupaten Karanganyar',
    fruitsName: ['Jambu', 'Jambu-2'],
    thumbnails: ['img:icons/kategori/izzar-1.png', 'img:icons/kategori/izzar-2.png'],
    prices: [15000, 15700],
  },
  {
    storeId: '5',
    owner: 'Pak Alvin',
    city: 'Kota Batu',
    fruitsName: ['Jeruk'],
    thumbnails: ['img:icons/kategori/alvin-1.png'],
    prices: [2000],
  },
  {
    storeId: '6',
    owner: 'Bu Nanda',
    city: 'Kota Kediri',
    fruitsName: ['Apel-4', 'Apel-5', 'Apel-6'],
    thumbnails: ['img:icons/kategori/nanda-1.png', 'img:icons/kategori/nanda-2.png', 'img:icons/kategori/nanda-3.png'],
    prices: [28000, 23000, 23900],
  },
  {
    storeId: '7',
    owner: 'Bu Lintang',
    city: 'Kabupaten Bojonegoro',
    fruitsName: ['Apel-7', 'Apel-8', 'Apel-9'],
    thumbnails: ['img:icons/kategori/lintang-1.png', 'img:icons/kategori/lintang-2.png', 'img:icons/kategori/lintang-3.png'],
    prices: [25200, 23000, 25900],
  },
  {
    storeId: '8',
    owner: 'Pak Micahael',
    city: 'Kabupaten Magelang',
    fruitsName: ['Durian'],
    thumbnails: ['img:icons/kategori/michael-1.png'],
    prices: [25000],
  },
  {
    storeId: '9',
    owner: 'Pak Reyhan',
    city: 'Kota Boyolali',
    fruitsName: ['Pisang', 'Pisang-2'],
    thumbnails: ['img:icons/kategori/reyhan-1.png', 'img:icons/kategori/reyhan-2.png'],
    prices: [15000, 15700],
  }
]


export default {
  name: 'KategoriStores',

  setup() {
    return {
      columns,
      rows,
      Malang: ref(false),
      Batu: ref(false),
      Banyuwangi: ref(false),
      Probolinggo: ref(false),
      currentPage: ref(true),
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
.right-container {
  width: 1280px;
}

.sidebar {
  margin-top: 48px;
  margin-left: 36px;
  width: 201px;
  height: 695px;
  background-color: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
}

.paragraph,
.owner-text {
  font-size: 16px;
  color: #323741;
}

.caption,
.city-text {
  font-size: 14px;
  color: #70737A;
}

.price-text {
  color: #323741;
}

.link{
  text-decoration: none;
}

.toggle-text {
  font-size: 16px;
  color: #ADAFB3;
}

.list {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 141px;

}

.store-card {
  width: 392px;
  height: 208px;
  background-color: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
}

.discount-bg {
  width: min-content;
  height: min-content;
  background-color: #F8D3D2;
  border-radius: 5px;
}

.discount-text {
  font-size: 12px;
  color: #E4504A;
}

.active-page {
  font-size: 16px;
  border-bottom: 2px solid #116530;
  color: #116530;
}
</style>
