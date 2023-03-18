
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
    ]
  },
  {
    path: '/fruit-:id',
    component: () => import('layouts/header.vue'),
    meta: {
      auth: true
    },
    children: [
      { path: '', name:'FruitID', component: () => import('pages/FruitID.vue') },
    ]
  },
  {
    path: '/kategori-stores',
    component: () => import('layouts/header.vue'),
    children: [
      { path: '', name:'KategoriStores', component: () => import('src/pages/KategoriStores.vue') },
    ]
  },
  {
    path: '/kategori-fruits',
    component: () => import('layouts/header.vue'),
    children: [
      { path: '', name:'KategoriFruits', component: () => import('src/pages/KategoriFruits.vue') },
    ]
  },
  {
    path: '/cart',
    component: () => import('layouts/header.vue'),
    children: [
      { path: '', name:'Cart', component: () => import('pages/CartPage.vue') },
    ]
  },
  {
    path: '/checkout',
    component: () => import('layouts/header.vue'),
    children: [
      { path: '', name:'Checkout', component: () => import('pages/Checkout.vue') },
    ]
  },
  {
    path: '/store-id- fruits',
    component: () => import('layouts/header.vue'),
    children: [
      { path: '', name:'StoreIDFruits', component: () => import('pages/StoreIDFruits.vue') },
    ]
  },
  {
    path: '/store-id-ratings',
    component: () => import('layouts/header.vue'),
    children: [
      { path: '', name:'StoreIDRatings', component: () => import('pages/StoreIDRatings.vue') },
    ]
  },
  {
    path: '/confirmation-waiting',
    component: () => import('layouts/header.vue'),
    children: [
      { path: '', name:'ConfirmationWaiting', component: () => import('pages/ConfirmationWaiting.vue') },
    ]
  },
  {
    path: '/confirmation-review',
    component: () => import('layouts/header.vue'),
    children: [
      { path: '', name:'ConfirmationReview', component: () => import('pages/ConfirmationReview.vue') },
    ]
  },
  {
    path: '/payment',
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      { path: '', name:'Payment', component: () => import('pages/Payment.vue') },
    ]
  },
  {
    path: '/payment-confirmation',
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      { path: '', name:'PaymentConfirmation', component: () => import('pages/PaymentConfirmation.vue') },
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
