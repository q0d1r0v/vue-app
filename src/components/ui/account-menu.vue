<script setup lang="ts">
// router
const router = useRouter()

// data
const menu_value = ref<boolean>(false)
const menu_list = ref<HTMLElement>()

// methods
function changeMenu() {
  menu_value.value = !menu_value.value
}
function goToPage() {
  menu_value.value = false
  router.push('/account')
}

// click outside
onClickOutside(menu_list, (event) => {
  menu_value.value = false
})
</script>

<template>
  <div ref="menu_list">
    <div>
      <div class="parent_container" @click="changeMenu">
        <div class="image_cicle">
          O
        </div>
        <div class="parent_text text-3">
          <span>Full name</span>
          <span>Position</span>
        </div>
        <div class="icon">
          <Icon :icon="`${menu_value ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}`" />
        </div>
      </div>
      <q-tooltip>
        <div>
          Account
        </div>
      </q-tooltip>
    </div>

    <div v-show="menu_value" class="menu_container" px-1>
      <q-list dense padding class="rounded-borders">
        <q-item v-ripple clickable @click="goToPage">
          <q-item-section>
            <div flex items-center gap-2 select-none>
              <Icon icon="ri-user-line" />
              My profile
            </div>
          </q-item-section>
        </q-item>

        <q-item v-ripple clickable>
          <q-item-section>
            <div flex items-center gap-2 select-none>
              <Icon icon="ri-logout-box-r-line" />
              Log out
            </div>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu_container {
  width: 200px;
  background: #fff;
  position: absolute;
  min-height: 100px;
  bottom: 0;
  right: 0;
  color: #000;
  top: 52px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.1);
}

.parent_container {
  height: 40px;
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  user-select: none;

  & .image_cicle {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    justify-content: center;
    color: #000;
  }

  & span {
    display: block;
  }

  & .icon {
    font-size: 18px;
  }
}
</style>
