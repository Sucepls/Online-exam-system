<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'SignUpView',
  setup() {
    // Define reactive references using ref()
    const formData = ref({
      username: '',
      email: '',
      password: '',
      passwordAgain: '',
      role: 'student' // Default role as student
    });
    const message = ref('');
    const router = useRouter();

    // Function to handle signup process
    const handleSignUp = () => {
      if ( !formData.value.email || !formData.value.password || !formData.value.passwordAgain || !formData.value.username || !formData.value.role ) {
        message.value = 'لطفا تمام فیلد هارا پر کنید';
      }
      else if (formData.value.password != formData.value.passwordAgain){
        message.value = 'تکرار رمز عبور با رمز عبور اصلی یکسان نیست.';
      }
      else {
        message.value = '';
        // Example: Simulated registration logic
        console.log('Name:', formData.value.name);
        console.log('Email:', formData.value.email);
        console.log('Password:', formData.value.password);
        console.log('Role:', formData.value.role);

        // Redirect to login page after signup (example)
        router.push('/login');
      }
    };

    // Return data and functions that need to be accessible in the template
    return {
      formData,
      message,
      handleSignUp
    };
  }
});
</script>


<template>
  <div class="flex exam-bg">
    <div class="w-1/2 flex justify-center h-fit pt-12 flex-col items-center">
      <h3 class="text-4xl font-bold pb-8 rounded">سامانه آزمون انلاین دانشگاه فردوسی مشهد</h3>
      <div class="bg-[#c6adac] p-6 rounded-lg shadow-lg text-right w-1/2">
        <h2 class="text-2xl font-bold mb-5 text-center">اطلاعات خود را وارد کنید</h2>
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">نام کاربری</label>
            <input v-model="username" type="email" id="email" class="mt-1 p-2 border border-gray-300 rounded-md w-full">
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">ایمیل</label>
            <input v-model="email" type="email" id="email" class="mt-1 p-2 border border-gray-300 rounded-md w-full">
          </div>
          <div class="mb-6">
            <label for="password" class="block text-sm font-medium text-gray-700">رمز عبور</label>
            <input v-model="password" type="password" id="password"
                   class="mt-1 p-2 border border-gray-300 rounded-md w-full">
          </div>
          <div class="mb-6">
            <label for="password" class="block text-sm font-medium text-gray-700">تکرار رمز عبور</label>
            <input v-model="password" type="password" id="password"
                   class="mt-1 p-2 border border-gray-300 rounded-md w-full">
          </div>
          <div class="mb-6 text-right">
            <label for="password" class="block text-sm font-medium text-gray-700">نوع</label>
            <select v-model="role" type="role" id="role" class="text-right mt-1 p-2 border border-gray-300 rounded-md w-full">
              <option >استاد</option>
              <option>دانشجو</option>
            </select>
          </div>
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



<style scoped>

</style>