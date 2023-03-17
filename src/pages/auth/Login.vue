<template>
  <q-layout view="hHh lpR fF2">
    <q-page class="column items-center q-mt-xl">
      <q-img src="icons/logo.png" class="logo-auth" />
      <div class="login-form">
        <div class="row justify-between items-end q-px-sm" style="margin-top: 176px">
          <p class="login-title jakarta-sb q-mb-none">Masuk</p>
          <p class="hijau50-24 jakarta-sb q-mb-none">
            Daftar
          </p>
        </div>
        <q-form @submit="submit">
          <p class="hijau60-16 jakarta-sb q-mb-none q-px-sm q-mt-xl">
            Username
          </p>
          <q-input outlined round v-model="username" class="q-mt-sm" :rules="[(val) => !!val]" />
          <p class="hijau60-16 jakarta-sb q-mb-none q-px-sm q-mt-md">
            Password
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
            <q-btn flat label="Lupa Kata Sandi?" no-caps size="16px" class="hijau50-24 " />
          </div>
          <q-btn class="masuk-button jakarta-b q-mt-xl q-mb-md" type="submit" unelevated label="Masuk" text-color="white"
            no-caps />
        </q-form>
        <div class="row items-center justify-center">
          <p class="jakarta-sb q-mb-none q-pa-none">Butuh Bantuan?</p>
          <q-btn flat label="Hubungi Buah.in Care" no-caps class="hijau50-24 q-pa-none" />
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
      username: ref(null),
      password: ref(null),
      isPwd: ref(true),
      orange: ref(false),
    };
  },

  methods: {
    async submit() {
      const userData = {
        username: this.username,
        password: this.password,
      };
      await api.post('/api/user/signin', userData).then((response) => {
        let data = response.data;
        console.log(data);
        localStorage.setItem('token', data.token);
        console.log(response);
        if (response.status === 200) {
          this.$router.push('/home');
        }
      }).catch((error) => {
        console.log(error);
        this.$q.notify({
          color: 'red',
          message: 'Login failed',
          position: 'bottom',
          timeout: 3000,
        });
      })
    },
  },
};
</script>

<style>
.masuk-button {
  background: #116530;
  width: 100%;
  height: 56px;
  border-radius: 15px;
  font-size: 24px;
}
</style>
