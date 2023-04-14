<script setup lang="ts">
// router
const router = useRouter()

// methods
function gotToHomePage() {
  router.push('/')
}
</script>

<template>
  <div class="error">
    <div>
      <img width="600" alt="404" src="../../public/404-error.svg">
      <div flex items-center justify-center>
        <q-btn class="h-12 bg-#3d5ee1 text-white" unelevated @click="gotToHomePage">
          Go to home page
        </q-btn>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.error {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<route lang="yaml">
meta:
  layout: 404
</route>
