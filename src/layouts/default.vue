<script setup lang="ts">
// methods
function changeFullScreenMode(data: boolean) {
  if (data)
    document.exitFullscreen()

  else
    document.documentElement.requestFullscreen()
}
</script>

<template>
  <main>
    <ui-top-bar @full-screen-mode="changeFullScreenMode">
      <template #right_item>
        <ui-account-menu />
      </template>
    </ui-top-bar>
    <div flex>
      <ui-nav-bar />
      <div class="view">
        <RouterView />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.view {
  width: 100%;
  height: 100vh;
  background: #f7f7fa;
  padding: 10px;
}
</style>
