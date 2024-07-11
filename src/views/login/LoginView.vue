<script setup lang="ts">
import { useAuthStore } from '@/stores/AuthStore'
import { ref } from 'vue'
import router from '@/router'

const authStore = useAuthStore()

const auth = ref({
  email: '',
  password: ''
})

async function login() {
  authStore.login(auth.value).then((res) => {
    if (authStore.user.role == 'STUDENT'){
      router.push({ name: 'student' })
    } else {
      router.push({ name: 'professor' })
    }
  })
}
const goToSignUpPage = () => {
  router.push('/auth/signup');
};

</script>
<template>
  <div class="flex exam-bg">
    <div class="w-1/2 flex justify-center h-fit pt-40 flex-col items-center">
      <h3 class="text-4xl font-bold pb-8 rounded">سامانه آزمون انلاین دانشگاه فردوسی مشهد</h3>
      <div class="bg-[#c6adac] p-6 rounded-lg shadow-lg flex flex-col text-right w-1/2">
        <h2 class="text-2xl font-bold mb-5 text-center">وارد شوید</h2>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">ایمیل</label>
            <input v-model="auth.email" type="email" id="email" class="mt-1 p-2 border border-gray-300 rounded-md w-full">
          </div>
          <div class="mb-6">
            <label for="password" class="block text-sm font-medium text-gray-700">رمز عبور</label>
            <input v-model="auth.password" type="password" id="password"
                   class="mt-1 p-2 border border-gray-300 rounded-md w-full">
          </div>
          <button type="submit" class="w-full bg-[#523946] text-white py-2 rounded-md hover:bg-blue-600">ورود</button>
        </form>
        <RouterLink :to="{name:'signup'}" class="text-center w-full bg-[#523946] text-white py-2 rounded-md hover:bg-blue-600 mt-4">
          ثبت نام
        </RouterLink>
      </div>
    </div>
    <div class="w-1/2 flex flex-col items-center">
      <img class="rounded-lg h-screen" src="@/assets/background.png" alt="background">
    </div>
  </div>


</template>



<style scoped>
</style>
