<template>
  <div class="flex exam-bg">
    <div class="w-1/2 flex justify-center h-fit pt-40 flex-col items-center">
      <h3 class="text-4xl font-bold pb-8 rounded">سامانه آزمون انلاین دانشگاه فردوسی مشهد</h3>
      <div class="bg-[#c6adac] p-6 rounded-lg shadow-lg text-right w-1/2">
        <h2 class="text-2xl font-bold mb-5 text-center">وارد شوید</h2>
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">ایمیل</label>
            <input v-model="email" type="email" id="email" class="mt-1 p-2 border border-gray-300 rounded-md w-full">
          </div>
          <div class="mb-6">
            <label for="password" class="block text-sm font-medium text-gray-700">رمز عبور</label>
            <input v-model="password" type="password" id="password"
                   class="mt-1 p-2 border border-gray-300 rounded-md w-full">
          </div>
          <button type="submit" class="w-full bg-[#523946] text-white py-2 rounded-md hover:bg-blue-600">ورود</button>
        </form>
        <p v-if="message" class="mt-4 text-red-500">{{ message }}</p>
        <button @click="goToSignUpPage" class="w-full bg-[#523946] text-white py-2 rounded-md hover:bg-blue-600 mt-4">
          ثبت نام
        </button>
      </div>
    </div>
    <div class="w-1/2 flex flex-col items-center">
      <img class="rounded-lg h-screen" src="@/assets/background.png" alt="background">
    </div>
  </div>


</template>

<script>
import {ref} from 'vue';
import router from "@/router/index.ts";

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const message = ref('');

    const goToSignUpPage = () => {
      router.push('/auth/signup');
    };

    const handleLogin = () => {
      if (!email.value && !password.value) {
        message.value = 'Please provide either email or password.';
      } else {
        message.value = '';
        // Handle the login logic here
        console.log('Email:', email.value);
        console.log('Password:', password.value);
      }
    };

    return {
      email,
      password,
      message,
      handleLogin,
      goToSignUpPage
    };
  }
};
</script>

<style scoped>
</style>
