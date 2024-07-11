<script setup lang="ts">
import { ref } from 'vue';
import {useAuthStore} from "@/stores/AuthStore";

const showModal = ref(false);

const authStore = useAuthStore()

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const saveChanges = () => {
  // Add logic to save changes
  closeModal();
};
</script>

<template>
  <div class="overflow-hidden shadow border rounded-lg bg-[#c6adac] m-10">
    <div class="px-4 py-5 sm:p-0">
      <dl class="sm:divide-gray-200">
        <div class="border-b rounded-lg py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-700">
            نام
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ authStore.user.name }}
          </dd>
        </div>
        <div class="border-b rounded-lg py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-700">
            ایمیل
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ authStore.user.email }}
          </dd>
        </div>
        <div class="border-b rounded-lg py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-700">
            نقش
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ authStore.user.role }}
          </dd>
        </div>
        <div class="flex justify-center p-4">
          <button @click="openModal" class="bg-[#523946] text-white p-2 rounded-md hover:bg-blue-600">
            ویرایش
          </button>
        </div>
      </dl>
    </div>
  </div>

  <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-50">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
    <div class="bg-[#c6adac] rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">ویرایش اطلاعات</h3>
      </div>
      <div class="px-4 py-5 sm:p-6">
        <div class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700">نام</label>
            <input type="text" v-model="user.name" class="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">نام کاربری</label>
            <input type="text" v-model="user.username" class="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">ایمیل</label>
            <input type="email" v-model="user.email" class="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">شماره تلفن</label>
            <input type="text" v-model="user.phone" class="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">مدرک تحصیلی</label>
            <input type="text" v-model="user.degree" class="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>
      </div>
      <div class="px-4 py-3 sm:px-6 sm:flex sm:justify-between sm:flex-row-reverse">
        <button @click="saveChanges" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#523946] text-base font-medium text-white hover:bg-blue-600 sm:w-auto sm:text-sm">
          ذخیره
        </button>
        <button @click="closeModal" class="mt-3 w-full inline-flex justify-center rounded-md border-gray-300 shadow-sm px-6 py-2 bg-gray-300 text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:w-auto sm:text-sm">
          لغو
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any additional styling here */
</style>
