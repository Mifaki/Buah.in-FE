<template>
  <q-page>
    <div class="paymentConfirmation-container">
      <q-icon name="img:icons/logo.png" class="payment-logo" />
      <q-icon name="img:Image-url-here" class="ilustration q-mt-xl" />
      <p class="hitam30-16 jakarta-b q-mb-none text-center q-mt-md">Bukti pembayaran sudah berhasil diunggah <br> Cari buah
        lainnya selagi menunggu verifikasi !</p>
      <q-btn label="Kembali ke Beranda" class="button jakarta-b" unelevated no-caps @click="navigateToRoute()"/>
    </div>
  </q-page>
</template>

<script>

import { Notify } from 'quasar';

export default {
  name: 'PaymentConfirmation',

  methods: {
    navigateToRoute() {
      Notify.create({
        message: 'Terimakasih Telah Berbelanja',
        timeout: 1000,
      })
      this.$router.push('/home')
    }
  }
}
</script>

<style>
.payment-logo {
  width: 279px;
  height: 62px;
}

.ilustration {
  width: 519px;
  height: 387px;
}

.text {
  font-size: 16px;
  color: black;
}

.button {
  width:100%;
  height: 60px;
  margin-top: 30px;
  background-color: #116530;
  color: white;
  font-size: 16px;
}
</style>
