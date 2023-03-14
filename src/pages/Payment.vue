<template>
  <q-page>
    <div class="container">
      <q-card class="details">
        <p class="title jakarta-b text-center q-mb-none">Selesaikan Pembayaran Dalam</p>
        <p class="countdown jakarta-b text-center q-mb-none q-mt-sm">{{ days }} days {{ hours % 24 }} hours {{ minutes %
          60 }} minutes {{ seconds % 60 }} seconds</p>
        <p class="caption jakarta-md q-mb-none q-mt-sm text-center">Batas Akhir Pembayaran</p>
        <p class="deadline jakarta-b q-mb-none q-mt-sm text-center">{{ formatDate(launchDate) }}</p>
        <div class="row justify-between items-center q-mt-lg">
          <P class="payment-method jakarta-b q-mb-none">Transfer Rekening {{ this.bank }}</P>
          <q-icon name="img:icons/payment/bca.png" size="20px" />
        </div>
        <q-separator inset class="q-my-md" />
        <p class="details-title jakarta-md q-mb-none">Nomor Rekening</p>
        <p class="details-value jakarta-b q-mb-none q-mb-lg">{{ this.noRek }}</p>
        <p class="details-title jakarta-md q-mb-none">Total Pembayaran</p>
        <p class="details-value jakarta-b q-mb-none">Rp {{ formatNumber(this.total) }}</p>
      </q-card>
      <q-card class="upload q-mt-xl">
        <p class="title jakarta-b text-center q-mb-none">Bukti Pembayaran</p>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Payment',

  data() {
    return {
      bank: 'BCA',
      noRek: '8027169245',
      total: 86000
    }
  },

  setup() {
    const days = ref(0);
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);
    const launchDate = new Date('19 March 2023');

    setInterval(() => {
      const currDate = new Date();
      const launchTine = launchDate - currDate;

      seconds.value = parseInt(launchTine / 1000);
      minutes.value = parseInt(seconds.value / 60);
      hours.value = parseInt(minutes.value / 60);
      days.value = parseInt(hours.value / 24);
    }, 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
      launchDate
    }
  },

  methods: {
    formatDate(date) {
      const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    },

    formatNumber(value) {
      return value.toLocaleString('en-US');
    }
  }
}
</script>

<style>
.container {
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.details {
  width: 511px;
  height: min-content;
  padding: 32px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
}

.title {
  font-size: 24px;
  color: #323741;
}

.countdown {
  font-size: 16px;
  color: #E4504A;
}

.caption,
.details-title {
  font-size: 16px;
  color: #70737A;
}

.deadline,
.payment-bank,
.details-value {
  font-size: 16px;
  color: #323741;
}

.upload {
  width: 509px;
  height: 599px;
  padding: 32px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
}
</style>
