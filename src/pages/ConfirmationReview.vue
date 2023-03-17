<template>
  <q-page>
    <div class="confirmationReview-container">
      <div class="row">
        <router-link to="confirmation-waiting" class="link">
          <div class="row cursor-pointer toggle-text jakarta-b q-mb-none q-px-md">
            <p class="q-ml-sm q-mb-none">Menunggu Konfirmasi</p>
          </div>
        </router-link>
        <div class="row cursor-pointer active-page jakarta-b q-mb-none q-ml-lg q-px-md">
          <p class="q-ml-sm q-mb-none">Ulasan Saya</p>
        </div>
      </div>
      <div class="confirmationReviews-item q-mt-lg">
        <div class="row">
          <q-icon :name="this.thumbnail" size="116px" />
          <div class="q-ml-lg">
            <p class="hitam30-24 jakarta-b q-mb-none">{{ this.name }}</p>
            <p class="hitam10-16 jakarta-sb q-mb-none q-mt-md">Bagaimana kualitas buah secara kesuluruhan</p>
            <div class="row justify-between items-center q-mt-md">
              <q-rating v-model="ratingModel" size="26px" color="yellow" icon="star_border" icon-selected="star" />
              <p class="hitam20-16 jakarta-b q-mb-none">Sangat Baik</p>
            </div>
          </div>
        </div>
        <p class="hitam30-16 jakarta-sb q-mb-none q-mt-xl">Berikan ulasan untuk buah ini</p>
        <q-form @submit.prevent="submitForm">
          <q-input outlined round v-model="reviews" type="text-area" class="confirmation-reviews q-mt-sm" color="primary"
            placeholder="Tulis deskripsi Anda mengenai produk ini ..." autogrow />
          <q-btn rounded color="primary" label="Kirim Ulasaan" no-caps class="confirmation-button jakarta-sb q-mt-lg"
            type="submit" unelevated />
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';
import { useQuasar } from 'quasar';

export default {
  name: 'ConfirmationReview',

  data() {
    return {
      name: 'Durian Bawor',
      thumbnail: 'img:/icons/home/durian-bawor.jpg'
    }
  },

  setup() {
    const $q = useQuasar()

    return {
      ratingModel: ref(0),
      reviews: ref(null)
    }
  },

  methods: {
    submitForm() {
      this.showNotification();
    },

    showNotification() {
      this.$q.notify({
        message: 'Terima Kasih telah Memberi Ulasan',
        color: 'black',
        position: 'bottom',
        actions: [
          {
            label: 'Home',
            color: 'white',
            handler: () => {
              this.$router.push('/home')
            }
          }
        ]
      })
    }
  }
}
</script>

<style>
.confirmation-button {
  height: 44px;
  width: 130px;
  display: flex;
  margin-right: 0;
  margin-left: auto;
}
</style>
