<script setup lang="ts">
// types
interface IEmitTypes {
  (e: 'fullScreenMode', data: boolean): void
}

// emit
const emit = defineEmits<IEmitTypes>()

// router
const router = useRouter()

// data
const full_screen_mode = ref<boolean>(false)

// methods
function goToHomePage() {
  router.push('/')
}

function emitToParent() {
  full_screen_mode.value = !full_screen_mode.value
  emit('fullScreenMode', !full_screen_mode.value)
}
</script>

<template>
  <div class="top_bar_container">
    <div class="left_container">
      <span cursor-pointer select-none @click="goToHomePage">
        Tenix
      </span>
    </div>

    <div class="right_container">
      <div mr-3>
        <q-btn class="bg-white" unelevated round dense @click="emitToParent">
          <Icon
            class="text-black text-4"
            :icon="`${full_screen_mode ? 'ri-fullscreen-exit-line' : 'ri-fullscreen-line'}`"
          />
          <q-tooltip>
            <div>
              Full screen
            </div>
          </q-tooltip>
        </q-btn>
      </div>
      <slot name="right_item" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.top_bar_container {
  width: 100%;
  height: 50px;
  background: #fff;
  color: #3d5ee1;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1000;
  border: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;

  & .left_container {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
    margin-left: 10px;
    font-size: 22px;
  }

  & .right_container {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: right;
    margin-right: 10px;
  }
}
</style>
