<template>
  <q-layout view="hHh lpR fF2">
    <q-header bordered="false" class="header-bg row items-center justify-evenly">
      <q-icon name="img:icons/logo.png" class="logo" />
      <q-btn flat color="black" label="Kategori" class="header-text jakarta-md" no-caps to="kategori-fruits" />
      <q-input rounded outlined class="search-bar" v-model="search" placeholder="Search" dense>
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
      <q-btn flat round color="black" icon="fa-solid fa-cart-shopping" />
      <q-btn-dropdown v-if="loggedIn" icon="img:icons/notification.png" no-caret flat v-model="showDropdown"
        @mouseenter="showDropdown = true" dense>
        <div @mouseleave="showDropdown = false">
          <div class="row justify-evenly items-end">
            <q-item-label class="jakarta-b cursor-pointer" :class="{ 'active-page': currentPage }"
              @click="currentPage = true">Transaksi</q-item-label>
            <q-item-label class="jakarta-b cursor-pointer" :class="{ 'active-page': !currentPage }"
              @click="currentPage = false">Informasi</q-item-label>
          </div>
          <q-item v-if="currentPage">
            <q-item-section>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section avatar>
                  <q-avatar>
                    <q-icon name="fa-solid fa-arrows-rotate" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="jakarta-md payment-label">Pesanan Diproses</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section avatar>
                  <q-avatar>
                    <q-icon name="fa-solid fa-truck-fast" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="jakarta-md payment-label">Sedang Dikirm</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section avatar>
                  <q-avatar>
                    <q-icon name="fa-regular fa-file-lines" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="jakarta-md payment-label">Riwayat Transaksi</q-item-label>
                </q-item-section>
              </q-item>


              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section avatar>
                  <q-avatar>
                    <q-icon name="fa-solid fa-arrows-rotate" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="jakarta-md payment-label">Pesanan diproses</q-item-label>
                </q-item-section>
              </q-item>
            </q-item-section>
          </q-item>
          <q-item v-else="currentPage" v-for="notification in notifications" :key="notification.id" class="q-mt-sm">
            <q-item-section>
              <q-item-label>{{ notification.title }}</q-item-label>
              <q-item-label caption style="max-width: 270px;">{{ notification.message }}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </q-btn-dropdown>
      <div class="seperator" />
      <div v-if="loggedIn" class="row items-center">
        <q-icon name="img:icons\pofile.png" size="29px" />
        <P class="name jakarta-sb q-mb-none q-ml-sm" inline>{{ user.first_name }}</P>
      </div>
      <div v-else class="roww">
        <q-btn outline color="hijau60" label="Masuk" no-caps class="jakarta-md q-mx-md" to="/" />
        <q-btn unelevated color="hijau60" label="Daftar" no-caps class="jakarta-md" to="/register" />
      </div>
    </q-header>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import { api } from 'src/boot/axios';

export default {
  data() {
    return {
      search: ref(null),
      loggedIn: false,
      user: null,
      currentPage: ref(true),
      showDropdown: ref(false),
      notificationIcon: 'icons/bell-regular.svg',
      notifications: [
        { id: 1, title: 'Pembayaranmu sudah terverifikasi', message: 'Pembayaran kamu sudah kami terima, mohon tunggu konfirmasi selanjutnya.' },
        { id: 2, title: 'Sobat Buah, suaramu sangat berarti !', message: 'Agar Buah.in bisa melayani lebih baik, jawab pertanyaan singkat ini yuk !' },
      ]
    }
  },
  async mounted() {
    try {
      const response = await api.get('https://reqres.in/api/users/2');
      if (response && response.data) {
        this.loggedIn = true;
        this.user = response.data.data;
      }
    } catch (error) {
      console.error(error);
    }
  }
}
</script>

<style>
.header-bg {
  height: 80px;
  background-color: white;
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.15);
}

.logo {
  height: 37px;
  width: 167px;
}

.header-text {
  font-size: 16px;
  color: #323741;
}

.search-bar {
  width: 817px;
}

.seperator {
  width: 2px;
  height: 27px;
  border-radius: 20px;
  background-color: #ADAFB3;
}

.text-hijau60 {
  color: #116530 !important;
}

.bg-hijau60 {
  background-color: #116530 !important;
}

.name {
  font-size: 14px;
  color: #323741;
}

.active-page {
  border-bottom: 2px solid #116530;
  color: #116530;
}

.toggle-text {
  color: #ADAFB3;
}
</style>
