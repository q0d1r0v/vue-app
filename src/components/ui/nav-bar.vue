<script setup lang="ts">
// types
interface INavBarItemsType {
  id: number
  title: string
  icon: string
  active_icon: string
  active: boolean
  path: string
}

// router
const router = useRouter()

// route
const route = useRoute()

// data
const NavBarItems = ref<INavBarItemsType[]>([
  {
    id: 1,
    title: 'Dashboard',
    icon: 'ri-dashboard-line',
    active_icon: 'ri-dashboard-fill',
    active: false,
    path: '/',
  },
  {
    id: 2,
    title: 'Xodimlar',
    icon: 'ri-group-2-line',
    active_icon: 'ri-group-2-fill',
    active: false,
    path: '/employees',
  },
  {
    id: 3,
    title: 'Moliya',
    icon: 'ri-money-dollar-box-line',
    active_icon: 'ri-money-dollar-box-fill',
    active: false,
    path: '/finance',
  },
  {
    id: 4,
    title: 'O\'quvchilar',
    icon: 'ri-graduation-cap-line',
    active_icon: 'ri-graduation-cap-fill',
    active: false,
    path: '/students',
  },
  {
    id: 5,
    title: 'O\'qituvchilar',
    icon: 'mdi:human-male-board',
    active_icon: 'mdi:human-male-board-poll',
    active: false,
    path: '/teachers',
  },
  {
    id: 6,
    title: 'Yetakchilar',
    icon: 'material-symbols:leaderboard-outline-rounded',
    active_icon: 'material-symbols:leaderboard-rounded',
    active: false,
    path: '/leaders',
  },
  {
    id: 7,
    title: 'Kurslar',
    icon: 'material-symbols:menu-book-outline',
    active_icon: 'material-symbols:menu-book',
    active: false,
    path: '/courses',
  },
  {
    id: 8,
    title: 'Guruhlar',
    icon: 'ri-group-line',
    active_icon: 'ri-group-fill',
    active: false,
    path: '/groups',
  },
  {
    id: 9,
    title: 'Xonalar',
    icon: 'ri-home-8-line',
    active_icon: 'ri-home-8-fill',
    active: false,
    path: '/rooms',
  },
])
const mini = ref<boolean>(false)

// methods
function goToPage(item: INavBarItemsType) {
  mini.value = false
  router.push(item.path)
}
function changeMenuBar() {
  mini.value = !mini.value
}
</script>

<template>
  <div :class="`${!mini ? 'navbar_container' : 'mini_navbar_container'} transition-all`">
    <div
      :class="`${!mini ? 'flex justify-start px-2 py-1 text-5' : 'flex justify-center px-2 py-1 text-5'} cursor-pointer`"
    >
      <Icon :icon="`${mini ? 'ri-menu-unfold-line' : 'ri-menu-fold-line'}`" @click="changeMenuBar()" />
    </div>
    <div
      v-for="(item) of NavBarItems" :key="item.id"
      :class="`${route.fullPath !== item.path ? 'block_container' : 'block_container'} `" @click="goToPage(item)"
    >
      <div class="items">
        <div v-show="route.fullPath === item.path" class="left_active">
          <!-- some -->
        </div>
        <div
          :class="`${route.fullPath === item.path ? 'icon' : 'icon ml-2'} ${mini && route.fullPath !== item.path ? 'pl-2' : ''}`"
        >
          <Icon
            :icon="`${route.fullPath !== item.path ? item.icon : item.active_icon}`"
            :color="`${route.fullPath === item.path ? '#3d5ee1' : ''}`"
          />
        </div>
        <span v-show="!mini" :class="`${route.fullPath === item.path ? 'text-#3d5ee1' : ''}`">
          {{ item.title }}
        </span>
        <q-tooltip v-if="mini">
          {{ item.title }}
        </q-tooltip>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.navbar_container {
  width: 230px;

  & .block_container {
    @apply py-4 cursor-pointer select-none;

    & .left_active {
      background: #3d5ee1;
      width: 8px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      height: 23px;
    }

    & .items {
      display: flex;
      align-items: center;
      justify-content: left;
      gap: 10px;
      color: #6f6f6f;
      font-size: 18px;
    }

    & .items:hover {
      color: #3d5ee1;
    }
  }
}

.mini_navbar_container {
  width: 50px;

  & .block_container {
    @apply py-4 cursor-pointer select-none;

    & .left_active {
      background: #3d5ee1;
      width: 8px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      height: 23px;
    }

    & .items {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #6f6f6f;
      font-size: 18px;
    }

    & .items:hover {
      color: #3d5ee1;
    }
  }
}
</style>
