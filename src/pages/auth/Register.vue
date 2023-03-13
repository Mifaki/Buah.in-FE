<template>
  <q-layout view="hHh lpR fF2">
    <q-page class="main-page column items-center">
      <q-img class="logo q-mt-lg" src="icons/logo.png" />
      <div class="row justify-evenly q-mt-xl">
        <q-img src="icons\resgistration.png" class="ilustration" />
        <div class="register-form">
          <P class="title jakarta-sb q-mb-none q-mt-xl">Daftar Sekarang</P>
          <div class="row items-center justify-center">
            <P class="sub jakarta-r text-center q-mb-none">Sudah punya akun Buah.in?</P>
            <q-btn flat label="Masuk" no-caps class="green q-pa-none" size="28px" />
          </div>
          <q-form @submit.prevent="submit">
            <!-- <p class="jakarta-sb q-mb-none q-px-sm q-mt-xl" style="font-size: 16px; color: #116530">
              Username
            </p>
            <q-input outlined round v-model="name" class="q-mt-sm" :rules="[(val) => !!val]" /> -->
            <p class="label jakarta-sb q-mb-none q-px-sm">
              Email
            </p>
            <q-input outlined round v-model="email" class="q-mt-sm" :rules="[(val) => !!val]" />
            <p class="label jakarta-sb q-mb-none q-px-sm q-mt-md">
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
            <!-- <p class="jakarta-sb q-mb-none q-px-sm q-mt-md" style="font-size: 16px; color: #116530">
              Nomor Telepon
            </p> -->
            <!-- <q-input outlined round v-model="noTelp" class="q-mt-sm" :rules="[(val) => !!val]" /> -->
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
      // name: ref(null),
      password: ref(null),
      isPwd: ref(true),
      email: ref(null),
      // noTelp: ref(null),
    };
  },

  methods: {
    async submit() {
      const userData = {
        // name: this.name,
        email: this.email,
        password: this.password,
        // noTelp: this.noTelp,
      }
      // console.log(userData);
      await api.post('https://reqres.in/api/register', userData).then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log(error);
      })
    },
  },
};
</script>

<style>
.main-page {
  padding: 0 160px;
  background-color: #f5f5f5;
  height: min-content;
}

.register-form {
  width: 546px;
  height: 795px;
  background-color: white;
  padding: 0 24px;
  border-radius: 25px;
}

.logo {
  width: 322px;
  height: 72px;
}

.layout {
  width: 100%;
}

.ilustration {
  width: 581px;
  height: 624px;
}

.title {
  font-size: 36px;
  text-align: center
}

.sub {
  font-size: 24px;
}

.green {
  color: #58936e;
}

.label {
  font-size: 16px;
  color: #116530
}

.button {
  background: #116530;
  width: 100%;
  height: 56px;
  border-radius: 15px;
  font-size: 24px;
}
</style>
