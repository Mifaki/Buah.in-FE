<template>
  <q-page>
    <q-icon name="img:icons/Banner.svg" class="home-banner" />
    <div class="home-container">
      <p class="hitam30-24 jakarta-sb  q-mb-none q-mt-lg">Spesial Untuk Kamu</p>
      <div class="list justify-center q-mt-xl">
        <div class="text-centerr">
          <q-btn unelevated round color="primary" icon="card_giftcard" size="30px" to="/kategori-fruits" replace />
          <p class="hitam30-16 jakarta-sb q-mb-none q-mt-sm text-center">Beli Lagi</p>
        </div>
        <div class="text-center">
          <q-btn unelevated round color="primary" icon="card_giftcard" size="30px" to="/kategori-fruits" replace />
          <p class="hitam30-16 jakarta-sb q-mb-none q-mt-sm">Best Deal</p>
        </div>
        <div class="text-center">
          <q-btn unelevated round color="primary" icon="card_giftcard" size="30px" to="/kategori-fruits" replace />
          <p class="hitam30-16 jakarta-sb q-mb-none q-mt-sm">Buah.in Selection</p>
        </div>
        <div class="text-center">
          <q-btn unelevated round color="primary" icon="card_giftcard" size="30px" to="/kategori-fruits" replace />
          <p class="hitam30-16 jakarta-sb q-mb-none q-mt-sm">On Sale</p>
        </div>
        <div class="text-center">
          <q-btn unelevated round color="primary" icon="card_giftcard" size="30px" to="/kategori-fruits" replace />
          <p class="hitam30-16 jakarta-sb q-mb-none q-mt-sm">Semua Kategori</p>
        </div>
      </div>
      <p class="hitam30-24 jakarta-sb  q-mb-none q-mt-xl q-pt-lg">Rekomendasi Buah Buat Kamu</p>
      <q-table :rows="rows" :columns="columns" row-key="name" grid hide-header virtual-scroll
        v-model:pagination="pagination" :rows-per-page-options="[0]" hide-bottom>
        <template v-slot:item="props">
          <div class="q-pa-md">
            <q-item clickable :to="`/fruit-${props.row.id}`" replace>
              <q-card no-shadow class="fruits-card">
                <q-icon :name="props.row.thumbnail" size="202px" />
                <div class="fruits-card-inside q-mx-md q-mt-sm">
                  <p class="hitam30-16 jakarta-sb q-mb-none q-mt-sm">{{ props.row.nama }}</p>
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
                    <p class="hitam20 jakarta-md q-mb-none q-ml-sm">{{ props.row.rating }}</p>
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
  </q-page>
</template>

<script>
import { ref } from 'vue';
import { api } from 'src/boot/axios';

const columns = [
  {
    name: 'id',
    required: true,
    field: row => row.id,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'name', required: true, field: 'name', sortable: true },
  { name: 'thumbnail', required: true, field: row => this.thumbnail, sortable: false },
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

const rows = ref([])

export default {
  name: 'Home',

  data() {
    return {
      thumbnail: ['img:icons/home/alpukat-mentega.png', 'img:icons/home/alpukat.png', 'img:icons/home/apel-malang.png', 'img:icons/home/durian-bawor.png', 'img:icons/home/durian-candimulyo.png', 'img:icons/home/durian-merah.png', 'img:icons/home/jambu-biji.png', 'img:icons/home/pisang.png', 'img:icons/home/rambutan.png'],
      nama: ref(null),
      kondisi: ref(null),
      description: ref(null),
      price: ref(null),
      discount: ref(null),
      berat: ref(null),
      stok: ref(null),
      alamatbuah: ref(null),
      rating: ref(null),
      sold: ref(null),
    };
  },

  setup() {
    return {
      columns,
      rows,
    }
  },

  methods: {
    hasItem(value) {
      return Object.keys(this.rows).includes(value)
    },

    formatNumber(value) {
      return value.toLocaleString('en-US');
    },

    calculateDiscount(price, discount) {
      const discountAmount = price * (discount / 100);
      const discountedPrice = price - discountAmount;
      return this.formatNumber(discountedPrice);
    }
  },

  async mounted() {
    const fruitsData = {
      nama: this.nama,
      kondisi: this.kondisi,
      description: this.description,
      price: this.price,
      discount: this.discount,
      berat: this.berat,
      stok: this.stok,
      alamatbuah: this.alamatbuah,
      rating: this.rating,
      sold: this.sold
    };
    await api.get('/api/anonbuah/', fruitsData).then((response) => {
      rows.value = response.data
      let data = response.data.map(item => {
        return {
          id: item.id,
          nama: item.nama,
          thumbnail: item.thumbnail,
          kondisi: item.kondisi,
          description: item.description,
          price: item.price,
          discount: item.discount,
          berat: item.berat,
          stok: item.stok,
          alamatbuah: item.alamatbuah,
          rating: item.rating,
          sold: item.sold
        }
      })
      console.log(data);
    }).catch((error) => {
      console.log(error);
    })
  },
};


</script>

<style>
.list {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 141px;

}
</style>
