<template>
  <q-layout view="hHh lpR fF2">
    <q-page class="main-page column items-center">
      <q-img src="icons/logo.png" class="logo" />
      <div class="login-form">
        <div class="row justify-between items-end q-px-sm" style="margin-top: 176px">
          <p class="title jakarta-sb q-mb-none">Masuk</p>
          <p class="daftar-text jakarta-sb q-mb-none">
            Daftar
          </p>
        </div>
        <q-form @submit="submit">
          <p class="label jakarta-sb q-mb-none q-px-sm q-mt-xl">
            Username
          </p>
          <q-input outlined round v-model="email" class="q-mt-sm" :rules="[(val) => !!val]" />
          <p class="label jakarta-sb q-mb-none q-px-sm q-mt-md">
            Email
          </p>
          <q-input class="q-mt-sm" outlined v-model="password" :type="isPwd ? 'password' : 'text'" :rules="[
            (val) => !!val,
            (val) =>
              val.length <= 10 ||
              'Password maksimial terdiri dari 8 karakter',
          ]">
            <template v-slot:append>
              <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
            </template>
          </q-input>
          <div class="row justify-between items-end q-mt-lg">
            <q-checkbox size="55px" v-model="orange" label="Ingat Saya" class="jakarta-sb" />
            <q-btn flat label="Lupa Kata Sandi?" no-caps size="16px" class="label-text " />
          </div>
          <q-btn class="masuk-button jakarta-b q-mt-xl q-mb-md" type="submit" unelevated label="Masuk" text-color="white" no-caps  />
        </q-form>
        <div class="row items-center justify-center">
          <p class="jakarta-sb q-mb-none q-pa-none">Butuh Bantuan?</p>
          <q-btn flat label="Hubungi Buah.in Care" no-caps  class="text-button q-pa-none" />
        </div>
      </div>
    </q-page>
  </q-layout>
</template>

<script>
import { api } from "src/boot/axios";
import { ref } from "vue";

export default {
  name: "Login",

  data() {
    return {
      // username: ref(null),
      email: ref(null),
      password: ref(null),
      isPwd: ref(true),
      orange: ref(false),
    };
  },

  methods: {
    async submit() {
      const userData = {
        email: this.email,
        password: this.password,
      };
      await api.post('/api/login', userData).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      })
    },
  },
};
</script>

<style>
.main-page {
  background-color: #f5f5f5;
  height: min-content;
}

.login-form {
  width: 584px;
  height: 848px;
  background-color: white;
  margin-top: 32px;
  padding: 0 44px;
  border-radius: 25px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
}

.logo {
  width: 322px;
  height: 72px;
}

.title {
  font-size: 36px;
  color: #323741;
}

.daftar-text {
  font-size: 24px;
  color: #58936e
}

.label {
  font-size: 16px;
  color: #116530
}

.label-text,
.text-button {
  color: #58936e
}

.masuk-button {
  background: #116530;
  width: 100%;
  height: 56px;
  border-radius: 15px;
  font-size: 24px;
}
</style>
