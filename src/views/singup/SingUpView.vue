<script setup lang="ts">
import {useAuthStore} from "@/stores/AuthStore";
import {ref} from "vue";
import router from "@/router";
const auth = ref({
  name: '',
  email: '',
  password: ''
})
const authStore = useAuthStore()
async function signup() {
  authStore.signup(auth.value).then((res) => {
    router.push({ name: 'professor' })
  })
}

</script>


<template>
  <div class="flex exam-bg">
    <div class="w-1/2 flex justify-center h-fit pt-12 flex-col items-center">
      <h3 class="text-4xl font-bold pb-8 rounded">سامانه آزمون انلاین دانشگاه فردوسی مشهد</h3>
      <div class="bg-[#c6adac] p-6 rounded-lg shadow-lg text-right w-1/2">
        <h2 class="text-2xl font-bold mb-5 text-center">اطلاعات خود را وارد کنید</h2>
        <form @submit.prevent="signup">
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">نام</label>
            <input v-model="auth.name" type="text" id="email" class="mt-1 p-2 border border-gray-300 rounded-md w-full">
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">ایمیل</label>
            <input v-model="auth.email" type="email" id="email" class="mt-1 p-2 border border-gray-300 rounded-md w-full">
          </div>
          <div class="mb-6">
            <label for="password" class="block text-sm font-medium text-gray-700">رمز عبور</label>
            <input v-model="auth.password" type="password" id="password"
                   class="mt-1 p-2 border border-gray-300 rounded-md w-full">
          </div>
          <div class="mb-6">
            <label for="password" class="block text-sm font-medium text-gray-700">تکرار رمز عبور</label>
            <input v-model="auth.password" type="password" id="password"
                   class="mt-1 p-2 border border-gray-300 rounded-md w-full">
          </div>
          <button class="w-full bg-[#523946] text-white py-2 rounded-md hover:bg-blue-600 mt-4">
            ثبت نام
          </button>
        </form>
      </div>
    </div>
    <div class="w-1/2 flex flex-col items-center">
      <img class="rounded-lg h-screen" src="@/assets/background.png" alt="background">
    </div>
  </div>
</template>



<style scoped>

</style>