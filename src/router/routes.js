import { useFormChild } from 'quasar'

const routes = [
  {
    path: '/',
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      { path: '', name: 'Landing', component: () => import('pages/Landing.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      { path: '', component: () => import('pages/auth/Login.vue') }
    ]
  },
  {
    path: '/register',
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      { path: '', component: () => import('pages/auth/Register.vue') }
    ]
  },
  {
    path: '/home',
    component: () => import('layouts/header.vue'),
    children: [
      { path: '', name:'Home', component: () => import('pages/Home.vue') },
      { path: 'fruit-id', name:'FruitID', component: () => import('pages/FruitID.vue') },
      { path: 'kategori', name:'Kategori', component: () => import('pages/Kategori.vue') },
      { path: 'cart', name:'Cart', component: () => import('pages/Cart.vue') },
      { path: 'checkout', name:'Checkout', component: () => import('pages/Checkout.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
