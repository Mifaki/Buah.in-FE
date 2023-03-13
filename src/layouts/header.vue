<template>
  <q-layout view="hHh lpR fF2">
    <q-header bordered="false" class="header-bg row items-center justify-evenly">
      <q-icon name="img:icons/logo.png" class="logo" />
      <p class="header-text jakarta-md q-mb-none">Kategori</p>
      <q-input rounded outlined class="search-bar" v-model="search" placeholder="Search" dense>
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
      <q-btn flat round color="hijau60" icon="fa-solid fa-cart-shoppin" />
      <q-btn v-if="loggedIn" flat round color="hijau60" icon="fa-solid fa-cart-shoppin" />
      <div class="seperator" />
      <div v-if="loggedIn" class="row">
        <q-img :src="user.avatar" size="29px" inline />
        <P class="name jakarta-sb q-mb-none" inline>{{ user.first_name }}</P>
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
      user: null
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
</style>
