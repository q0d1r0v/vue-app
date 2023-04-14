<script setup lang="ts">
// imports
import { Icon } from '@iconify/vue'

// types
interface IIconType {
  icon: string
  color?: string
}

// props
const props = defineProps<IIconType>()
</script>

<template>
  <Icon :icon="props.icon" :color="props.color" />
</template>
