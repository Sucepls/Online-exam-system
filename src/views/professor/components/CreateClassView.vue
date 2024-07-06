<script setup lang="ts">
import {ref} from "vue";

const classInfo = ref({
  className: '',
  password: '',
  description: '',

})
function createClass (){
}
</script>

<template>
  <div class="flex-col flex items-center pt-10">
    <div class="bg-[#c6adac] p-6 rounded-lg shadow-lg text-right">
      <form>
        <div class="mb-4">
          <label for="className" class="block text-sm font-medium text-gray-700">نام کلاس</label>
          <input v-model="classInfo.className" type="text" id="className" class="mt-1 p-2 border border-gray-300 rounded-md w-full">
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">رمز عبور</label>
          <input v-model="classInfo.password" type="text" id="password" class="mt-1 p-2 border border-gray-300 rounded-md w-full">
        </div>
        <div class="mb-4">
          <label for="description" class="block text-sm font-medium text-gray-700">توضیحات</label>
          <input v-model="classInfo.description" type="text" id="description" class="mt-1 p-2 border border-gray-300 rounded-md w-full">
        </div>
        <button @click="createClass" class="w-full bg-[#523946] text-white py-2 rounded-md hover:bg-blue-600 mt-4">
          ایجاد کلاس
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>