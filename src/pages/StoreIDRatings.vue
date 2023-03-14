<template>
  <q-page>
    <div class="container">
      <div class="top row justify-between">
        <div>
          <P class="owner-text jakarta-sb q-mb-none q-mb-sm">{{ this.owner }}</P>
          <p class="city-text jakarta-sb q-mb-none">{{ this.city }}</p>
        </div>
        <div>
          <div class="row items-center q-px-md q-mb-sm">
            <q-icon name="fa-solid fa-star" size="26px" color="yellow" />
            <p class="rating-text jakarta-b q-mb-none q-ml-sm">{{ this.rating.toFixed(1) }}</p>
          </div>
          <p class="rating-caption jakarta-sb q-mb-none">Rating & Ulasan</p>
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
          <q-card class="review-card column justify-center q-mt-md" flat>
            <div class="row items-center justify-center">
              <q-icon name="img:icons/home/durian-bawor.png" size="114px" />
              <div class="q-ml-xl">
                <p class="review-error-title jakarta-b q-mb-none">Belum ada ulasan produk untuk buah ini</p>
                <p class="review-error-caption jakarta-b q-mb-none">Beli buah ini dan jadilah yang pertama memberikan
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

<style>
.container {
  margin: 0 154px;
  margin-top: 56px;
  margin-bottom: 52px;
}

.top {
  width: 100%;
  height: 116px;
  padding: 32px 24px;
  border: 1px solid #116530;
  border-radius: 15px;
}

.owner-text,
.rating-text,
.paragraph {
  font-size: 16px;
  color: #323741;
}

.city-text,
.rating-caption {
  color: #70737A;
}

.active-page {
  font-size: 16px;
  border-bottom: 2px solid #116530;
  color: #116530;
}

.toggle-text {
  font-size: 16px;
  color: #ADAFB3;
}

.link {
  text-decoration: none;
}

.caption {
  font-size: 14px;
  color: #70737A;
}

.review-card {
  width: 954px;
  height: 184px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
}

.review-error-title {
  font-size: 24px;
  color: #323741;
}

.review-error-caption {
  font-size: 16px;
  color: #70737A;
}
</style>
