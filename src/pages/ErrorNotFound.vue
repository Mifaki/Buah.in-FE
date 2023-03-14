<template>
  <div class="fullscreen bg-green text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh" class="jakarta-b">
        404
      </div>

      <div class="jakarta-b text-h4" style="opacity:.4">
        I'm sorry but the page you were trying to looking for doesn't exist
      </div>

      <q-btn
        class="jakarta-b q-mt-xl"
        color="white"
        text-color="primary"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorNotFound'
})
</script>
