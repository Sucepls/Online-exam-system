<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useClassStore} from "@/stores/ClassStore";
import type {Class} from "@/models/classes.interface";
import {toast} from "vue3-toastify";

const classStore = useClassStore()

const classInfo = ref({

} as Class)

function createClass (){
  classStore.createClass(classInfo.value).then(()=>{
    toast(' کلاس با موفقیت ایجاد شد', {
      autoClose: 1500,
      rtl: true,
      type: 'success'
    })
  }).catch(()=>{
    toast('کلاس ایجاد نشد!', {
      autoClose: 1500,
      rtl: true,
      type: 'error'
    })
  })
}
</script>

<template>
  <div class="flex-col flex items-center pt-10 ">
    <div class="bg-[#c6adac] p-6 rounded-lg shadow-lg text-right border">
      <form @submit.prevent="createClass">
        <div class="mb-4">
          <label for="className" class="block text-sm font-medium text-gray-700">نام کلاس</label>
          <input v-model="classInfo.name" type="text" id="className" class="mt-1 p-2 border border-gray-300 rounded-md w-full">
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">رمز عبور</label>
          <input v-model="classInfo.inviteCode" type="text" id="password" class="mt-1 p-2 border border-gray-300 rounded-md w-full">
        </div>
        <div class="mb-4">
          <label for="description" class="block text-sm font-medium text-gray-700">توضیحات</label>
          <input v-model="classInfo.description" type="text" id="description" class="mt-1 p-2 border border-gray-300 rounded-md w-full">
        </div>
        <button class="w-full bg-[#523946] text-white py-2 rounded-md hover:bg-blue-600 mt-4">
          ایجاد کلاس
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>