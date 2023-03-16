<template>
  <q-page>
    <div class="container">
      <q-icon name="img:icons/logo.png" class="logo" />
      <q-icon name="img:Image-url-here" class="ilustration q-mt-xl" />
      <p class="text jakarta-b q-mb-none text-center q-mt-md">Bukti pembayaran sudah berhasil diunggah <br> Cari buah
        lainnya selagi menunggu verifikasi !</p>
      <q-btn label="Fuchsia" class="button jakarta-b" unelevated to="/home" />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PaymentConfirmation',

}
</script>

<style>
.container {
  width: 519px;
  margin: 44px auto 0 auto;
  text-align: center;
}

.logo {
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
