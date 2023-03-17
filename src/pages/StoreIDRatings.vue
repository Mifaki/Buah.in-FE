<template>
  <q-page>
    <div class="storeFruits-container ">
      <div class="storeFruits-top row justify-between">
        <div>
          <P class="hitam30-16 jakarta-sb q-mb-none q-mb-sm">{{ this.owner }}</P>
          <p class="hitam20 jakarta-sb q-mb-none">{{ this.city }}</p>
        </div>
        <div>
          <div class="row items-center q-px-md q-mb-sm">
            <q-icon name="fa-solid fa-star" size="26px" color="yellow" />
            <p class="hitam30-16 jakarta-b q-mb-none q-ml-sm">{{ this.rating.toFixed(1) }}</p>
          </div>
          <p class="hitam20 jakarta-sb q-mb-none">Rating & Ulasan</p>
        </div>
      </div>
      <div class="right-container q-mt-xl">
        <div class="row q-ml-md">
          <router-link to="fruits" class="link">
            <div class="row cursor-pointer toggle-text jakarta-b q-mb-none q-px-md">
              <q-icon name="fa-solid fa-seedling" />
              <p class="q-ml-sm q-mb-none">Buah</p>
            </div>
          </router-link>
          <div class="row cursor-pointer active-page jakarta-b q-mb-none q-ml-lg q-px-md">
            <q-icon name="fa-regular fa-star" />
            <p class="q-ml-sm q-mb-none">Ulasan</p>
          </div>
        </div>
        <div class="q-mt-xl">
          <q-card class="review-cardError column justify-center q-mt-md" flat>
            <div class="row items-center justify-center">
              <q-icon name="img:icons/home/durian-bawor.png" size="114px" />
              <div class="q-ml-xl">
                <p class="hitam30-24 jakarta-b q-mb-none">Belum ada ulasan produk untuk buah ini</p>
                <p class="hitam20-16 jakarta-b q-mb-none">Beli buah ini dan jadilah yang pertama memberikan
                  ulasan</p>
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'StoreIDRatings',

  data() {
    return {
      owner: 'Pak Faiz',
      city: 'Kabupaten Banyumas',
      rating: 4.9,
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

<style />
