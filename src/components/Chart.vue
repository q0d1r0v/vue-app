<script setup lang="ts">
// imports
import { Chart, Grid, Line, Tooltip } from 'vue3-charts'

const direction = ref('horizontal')
const margin = ref({
  left: 0,
  top: 20,
  right: 20,
  bottom: 0,
})

const data = ref([
  { name: 'Jan', students: 1000, avg: 500, inc: 300 },
  { name: 'Feb', students: 2000, avg: 900, inc: 400 },
  { name: 'March', students: 400, avg: 400, inc: 500 },
  { name: 'April', students: 3100, avg: 1300, inc: 700 },
  { name: 'May', students: 3100, avg: 1300, inc: 700 },
  { name: 'June', students: 200, avg: 100, inc: 200 },
  { name: 'July', students: 600, avg: 400, inc: 300 },
  { name: 'August', students: 500, avg: 90, inc: 100 },
  { name: 'September', students: 300, avg: 90, inc: 100 },
  { name: 'October', students: 600, avg: 90, inc: 100 },
  { name: 'November', students: 700, avg: 90, inc: 100 },
  { name: 'December', students: 400, avg: 90, inc: 100 },
])
</script>

<template>
  <div>
    <div text-5>
      Students
    </div>
    <div class="chart_container">
      <Chart :size="{ width: 850, height: 420 }" :data="data" :margin="margin" :direction="direction" style="width: 100%;">
        <template #layers>
          <Grid stroke-dasharray="2,2" />
          <Line :data-keys="['name', 'students']" />
          <Line :data-keys="['name', 'students']" :line-style="{ stroke: 'red' }" type="step" />
        </template>

        <template #widgets>
          <Tooltip
            border-color="#48CAE4" :config="{
              name: { hide: true },
              students: { color: '#0077b6' },
              avg: { hide: true },
              inc: { label: 'averange', color: 'red' },
            }"
          />
        </template>
      </Chart>
    </div>
  </div>
</template>

<style scoped lang="scss">
.chart_container {
  display: inline-block;
  background: #ffff;
  padding: 10px;
}
</style>
