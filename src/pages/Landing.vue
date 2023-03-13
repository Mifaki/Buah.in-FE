<template>
  <q-page>
    <div class="image">
      <q-card class="headline-card justify-center">
        <div class="row items-end justify-center q-mt-xl">
          <p class="headline jakarta-b q-mb-none">Temukan Beragam</p>
          <p class="highlight jakarta-b q-mb-none q-mx-sm">Buah Segar</p>
          <p class="headline jakarta-b q-mb-none">Langsung diantar ke Rumahmu</p>
        </div>
        <P class="description jakarta-b q-mb-none text-justify q-mt-xl">Buah.in adalah platform online yang menyediakan
          berbagai
          macam buah segar dan berkualitas dengan harga
          terjangkau. Kami menjamin keaslian buah yang kami jual dan mengirimkannya langsung ke rumahmu.</P>
        <q-btn outline color="white" label="Mulai Cari di Buah.in Sekarang !"
          class="btn jakarta-b q-mt-xl" no-caps to="/home" />
      </q-card>
    </div>
    <P class="title text-center jakarta-b q-mb-none q-mt-xl">Keuntungan Belanja di Buah.in</P>
    <div class="list row justify-between q-mt-xl">
      <div class="text-center">
        <q-btn unelevated round icon="card_giftcard" size="45px" class="circle-1" />
        <p class="paragraph jakarta-sb q-mb-none q-mt-sm ">Buah segar
          langsung dari Petani</p>
      </div>
      <div class="text-center">
        <q-btn unelevated round icon="card_giftcard" size="45px" class="circle-2" />
        <p class="paragraph jakarta-sb q-mb-none q-mt-sm">Kemudahan pembelian</p>
      </div>
      <div class="text-center">
        <q-btn unelevated round icon="card_giftcard" size="45px" class="circle-3" />
        <p class="paragraph jakarta-sb q-mb-none q-mt-sm">Pengiriman yang cepat dan aman</p>
      </div>
    </div>
    <div class="visi-container row justify-center items-center">
      <q-icon name="img:icons/visi.png" class="visi" />
      <div>
        <P class="title jakarta-b q-mb-none">Visi Buah.in</P>
        <p class="visi-text jakarta-md q-mb-none text-justify q-mt-md">Menjadi platform e-commerce yang terkemuka dan
          membantu
          petani dalam menjual produk buahnya secara online,
          sehingga dapat memperluas pasar dan meningkatkan kesejahteraan petani di Indonesia.</p>
      </div>
    </div>
    <div class="misi-container row justify-center items-center">
      <div>
        <P class="title jakarta-b q-mb-none q-mt-xl">Misi</P>
        <ol class="misi-text jakarta-md text-justify q-ma-none q-mt-md">
          <li>
            Menjalin kemitraan yang baik dengan petani dan mitra pengiriman untuk memastikan kualitas produk dan
            pengiriman yang cepat dan efisien.
          </li>
          <li>
            Memberikan pengalaman belanja yang nyaman dan aman bagi konsumen yang ingin membeli buah-buahan segar dari
            petani.
          </li>
          <li>
            Memberikan pengalaman belanja yang nyaman dan aman bagi konsumen yang ingin membeli buah-buahan segar dari
            petani.
          </li>
        </ol>
      </div>
      <q-icon name="img:icons/misi.png" class="misi" />
    </div>
    <div class="recomendation column justify-center">
      <p class="paragraph recom jakarta-sb q-mb-none">Rekomendasi Buah Buat Kamu</p>
      <q-table :rows="rows" :columns="columns" row-key="name" grid hide-header virtual-scroll
        v-model:pagination="pagination" :rows-per-page-options="[5]" hide-bottom class="table column justify-center ">
        <template v-slot:item="props">
          <div class="q-pa-md">
            <q-card no-shadow class="card">
              <q-icon :name="props.row.thumbnail" size="202px" />
              <div class="card-inside q-mx-md q-mt-sm">
                <p class="name-text jakarta-sb q-mb-none q-mt-sm">{{ props.row.name }}</p>
                <div v-if="props.row.discount > 0 || props.row < 100">
                  <p class="price-text jakarta-b q-mb-none q-mt-sm">Rp {{ calculateDiscount(props.row.price,
                    props.row.discount) }}</p>
                  <div class="row q-mt-sm items-center">
                    <div class="discount-bg">
                      <p class="discount-text jakarta-b q-mb-none q-pa-xs">{{ props.row.discount }}%</p>
                    </div>
                    <p class="caption jakarta-md q-mb-none q-ml-md">Rp <strike>{{ formatNumber(props.row.price)
                    }}</strike>
                    </p>
                  </div>
                </div>
                <p v-else class="price-text jakarta-b q-mb-none q-mt-sm">Rp {{ formatNumber(props.row.price) }}</p>
                <p class="caption jakarta-md  q-mb-none q-mt-sm">{{ props.row.city }}</p>
                <div v-if="props.row.sold" class="row items-center q-mt-sm">
                  <q-icon name="star" color="yellow" />
                  <p class="caption jakarta-md q-mb-none q-ml-sm">{{ props.row.rating }}</p>
                  <p class="caption jakarta-md q-mb-none q-ml-sm">|</p>
                  <p class="caption jakarta-md q-mb-none q-ml-sm">Terjual</p>
                  <p class="caption jakarta-md q-mb-none q-ml-sm">{{ props.row.sold }}</p>
                </div>
              </div>
            </q-card>
          </div>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
const columns = [
  {
    name: 'name',
    required: true,
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'price', required: true, field: 'price', sortable: true },
  { name: 'thumbnail', required: true, field: 'thumbnail', sortable: true },
  { name: 'price', required: true, field: 'price', sortable: true },
  { name: 'discount', required: true, field: 'discount', sortable: true },
  { name: 'city', required: true, field: 'city' },
  { name: 'rating', required: true, field: 'rating' },
  { name: 'kondisi', required: true, field: 'kondisi' },
  { name: 'berat',required: true, field: 'berat', sortable: true },
  { name: 'desc', required: true, field: 'desc', sortable: true },
  { name: 'stock', required: true, field: 'stock', sortable: true }
]

const rows = [
  {
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
  name: 'Landing',

  setup() {
    return {
      columns,
      rows
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
  }
}
</script>

<style>
.image {
  width: 100%;
  height: 475px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 36px;
  background-image: url('/icons/landingBanner.png');
}

.headline-card {
  width: 700px;
  height: min-content;
  backdrop-filter: blur(12.5px);
  background: rgba(232, 232, 232, 0.25);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.headline {
  font-size: 42px;
  color: #E7F0EA;
}

.highlight {
  font-size: 42px;
  color: #FFCC1D
}

.circle-1 {
  background-color: #DBD24D ;
}

.circle-2{
  background-color: #F7982D ;
}

.circle-3{
  background-color: #FFDB61 ;
}


.description {
  font-size: 16px;
  color: #E7F0EA;
}

.btn {
  align-items: center;
  width: 100%;
}

.title {
  font-size: 36px;
  color: #323741;
}

.recom {
  margin-left: 135px;
  min-width:349px;
}

.list {
  margin: 0 210px;
  margin-top: 100px;
}

.paragraph {
  max-width: 240px;
  font-size: 24px;
  color: #323741;
}

.visi {
  width: 550px;
  height: 321px;
  margin-right: 70px;
}

.visi-text {
  font-size: 30px;
  color: #323741;
  max-width: 683px;
}

.visi-container {
  margin-top: 130px;
}

.visi-container {
  margin-top: 55px;
}

.misi {
  width: 550px;
  height: 431px;
  margin-left: 77px;
}

.misi-text {
  font-size: 30px;
  color: #323741;
  max-width: 676px;
  ;
}

.recomendation {
  margin-top: 150px;
}

.table {
  align-items: center;
}

.caption {
  font-size: 14px;
  color: #70737A;
}

.name-text,
.price-text {
  font-size: 16px;
  color: #323741;
}

.card {
  min-height: 398px;
}

.card-inside {
  max-width: 170px;
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
</style>
