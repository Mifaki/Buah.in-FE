<template>
  <q-layout view="hHh lpR fF2">
    <q-page class="column items-center">
      <q-img class="logo-auth q-mt-lg" src="icons/logo.png" />
      <div class="row justify-evenly q-mt-xl">
        <q-img src="icons\resgistration.png" class="ilustration-register" />
        <div class="register-form">
          <P class="title jakarta-sb q-mb-none q-mt-xl">Daftar Sekarang</P>
          <div class="row items-center justify-center">
            <P class="hitam30-24 jakarta-r text-center q-mb-none">Sudah punya akun Buah.in?</P>
            <q-btn flat label="Masuk" no-caps class="hijau50-24 q-pa-none" size="28px" />
          </div>
          <q-form @submit.prevent="submit">
            <p class="hijau60-16 jakarta-sb q-mb-none q-px-sm q-mt-xl">
              Username
            </p>
            <q-input outlined round v-model="username" class="q-mt-sm" :rules="[(val) => !!val]" />
            <p class="hijau60-16 jakarta-sb q-mb-none q-px-sm">
              Email
            </p>
            <q-input outlined round v-model="email" class="q-mt-sm" :rules="[(val) => !!val]" />
            <p class="hijau60-16 jakarta-sb q-mb-none q-px-sm q-mt-md">
              Password
            </p>
            <q-input class="q-mt-sm" outlined v-model="password" :type="isPwd ? 'password' : 'text'" :rules="[
              (val) => !!val,
              (val) =>
                val.length <= 8 ||
                'Password maksimial terdiri dari 8 karakter',
            ]">
              <template v-slot:append>
                <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
              </template>
            </q-input>
            <p class="hijau60-16 jakarta-sb q-mb-none q-px-sm q-mt-md">
              Nomor Telepon
            </p>
            <q-input outlined round v-model="notelp" class="q-mt-sm" :rules="[(val) => !!val]" />
            <q-btn class="button jakarta-b q-mt-xl q-mb-md" type="submit" unelevated label="Daftar" text-color="white"
              no-caps />
          </q-form>
          <div class="row items-center justify-center">
            <P class="jakarta-sb q-mb-none q-mx-xs">Dengan mendaftar saya menyetujui</P>
            <q-btn flat label="Syarat dan Ketentuan" no-caps class="green q-pa-none" />
            <P class="jakarta-sb q-mb-none q-mx-xs">serta</P>
            <q-btn flat label="Kebijakan Privasi" no-caps class="green q-pa-none" />
          </div>
        </div>
      </div>
    </q-page>
  </q-layout>
</template>

<script>
// import { Notify } from 'quasar'
import { ref } from "vue";
import { api } from "src/boot/axios";

export default {
  name: "Register",

  data() {
    return {
      username: ref(null),
      password: ref(null),
      isPwd: ref(true),
      email: ref(null),
      notelp: ref(null),
    };
  },

  methods: {
    async submit() {
      const userData = {
        username: this.username,
        email: this.email,
        password: this.password,
        notelp: this.noTelp,
      }
      await api.post('/api/user/register', userData).then((response) => {
        this.user = response.data;
        localStorage.setItem('token', user.token);
        console.log(response)
      }).catch((error) => {
        console.log(error);
      })
    },
  },
};
</script>

<style>
.title {
  color: #323741;
  font-size: 36px;
  text-align: center
}

.button {
  background: #116530;
  width: 100%;
  height: 56px;
  border-radius: 15px;
  font-size: 24px;
}
</style>
