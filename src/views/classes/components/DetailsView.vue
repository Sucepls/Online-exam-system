<script setup lang="ts">
import {onMounted, ref} from 'vue';
import router from "@/router";
import {useClassStore} from "@/stores/ClassStore";
import {useRoute} from "vue-router";
import type {Class} from "@/models/classes.interface";

const showModal = ref(false);

defineProps(['classInfo'])

const goToSignUpPage = () => {
  router.push('/exams');
};

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
  <div class="border overflow-hidden shadow rounded-lg bg-[#c6adac] m-10">
    <div class="border-gray-200 px-4 py-5 sm:p-0">
      <dl class="sm:divide-y sm:divide-gray-200">
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-700">
            نام کلاس
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ classInfo.name }}
          </dd>
        </div>
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-700">
            نام ایجاد کننده
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ classInfo.instructor?.name }}
          </dd>
        </div>
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-700">
            توضیحات
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ classInfo.description }}
          </dd>
        </div>
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-700">
            رمزعبور
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ classInfo.inviteCode }}
          </dd>
        </div>
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-700">
            تعداد کاربران
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ classInfo.students?.length }}
          </dd>
        </div>
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-700">
            لینک کلاس
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            http://localhost:5173/classes/{{classInfo.id}}
          </dd>
        </div>
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-700">
            آزمون ها
          </dt>
          <button @click="goToSignUpPage" class="bg-[#523946] text-sm w-2/3 sm:col-span-2 text-white rounded-md hover:bg-blue-600">
            مشاهده
          </button>
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
            <label class="block text-sm font-medium text-gray-700">نام کلاس</label>
            <input type="text" v-model="classInfo.name" class="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">نام ایجاد کننده</label>
            <input type="text" v-model="classInfo.creator" class="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">توضیحات</label>
            <input type="text" v-model="classInfo.description" class="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">رمزعبور</label>
            <input type="text" v-model="classInfo.password" class="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">تعداد کاربران</label>
            <input type="number" v-model="classInfo.userCount" class="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">لینک کلاس</label>
            <input type="text" v-model="classInfo.link" class="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
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
