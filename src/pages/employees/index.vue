<script setup lang="ts">
// data
const columns = [
  {
    name: 'name',
    label: 'Ism',
    field: 'employee_name',
    sortable: true,
    align: 'center',
  },
  {
    name: 'surname',
    label: 'Familya',
    field: 'employee_surname',
    sortable: true,
    align: 'center',
  },
  {
    name: 'phone_number',
    label: 'Telefon raqam',
    field: 'employee_phone_number',
    sortable: true,
    align: 'center',
  },
  {
    name: 'additional_phone_number',
    label: 'Qo\'shimcha telefon raqam',
    field: 'employee_additional_phone_number',
    sortable: true,
    align: 'center',
  },
  {
    name: 'birthday',
    label: 'Tug\'ilgan sana',
    field: 'employee_birthday',
    sortable: true,
    align: 'center',
  },
  {
    name: 'gender',
    label: 'Jinsi',
    field: 'employee_gender',
    sortable: true,
    align: 'center',
  },
  {
    name: 'role',
    label: 'Huquq(lar)',
    field: 'employee_role',
    sortable: true,
    align: 'center',
  },
  {
    name: 'actions',
    label: 'Amallar',
    field: 'employee_actions',
    sortable: true,
    align: 'center',
  },
]
</script>

<template>
  <div>
    <div mb-3 text-5>
      Xodimlar bo'limi
    </div>

    <div>
      <q-table no-data-label="Ma'lumotlar mavjud emas!" flat :columns="columns" />
    </div>
  </div>
</template>
