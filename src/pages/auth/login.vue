<script setup lang="ts">
// types
interface IFormType {
  username: string
  password: string
}

// data
const form = ref<IFormType>({
  username: '',
  password: '',
})
</script>

<template>
  <div class="login_container">
    <div class="login_block">
      <div class="login_text">
        Login
      </div>
      <div class="form pt-10">
        <q-input v-model="form.username" filled label="Username" clearable class="mb-3" />
        <q-input v-model="form.password" type="password" filled clearable label="Password" class="mb-8" />
        <q-btn class="w-full h-12 bg-#3d5ee1 text-white" unelevated>
          Login
        </q-btn>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: #f7f7fa;
  display: flex;
  align-items: center;
  justify-content: center;

  & .login_block {
    width: 600px;
    height: 400px;
    background: #fff;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    padding: 35px;

    & .login_text {
      text-align: center;
      font-size: 33px;
    }

    & .form {
      width: 100%;
      height: 100%;
      margin: auto;
    }
  }
}
</style>

<route lang="yaml">
meta:
  layout: auth
</route>
