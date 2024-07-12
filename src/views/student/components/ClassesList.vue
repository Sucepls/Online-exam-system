<template>
  <div class="bg-[#395253] p-4 flex-col pt-10">
    <div class="flex justify-around mb-4">
      <input type="text" placeholder="جستجوی نام کلاس، استاد یا مؤسسه آموزشی..." class="w-2/3 p-2 rounded-lg border" />
      <button @click="openModal" class="bg-[#523946] text-white py-2 px-4 rounded-lg">کلاس جدید</button>
    </div>
    <div class="flex-col flex ps-14">
      <div class="flex">
        <div v-for="c in classes" :key="c.id" class="border m-1 rounded-lg gap-4">
          <div class="bg-[#c6adac] p-4 rounded">
            <img src="@/assets/background.png" alt="Class Image" class="w-full h-40 object-cover rounded mb-2" />
            <RouterLink :to="{name:'class',params:{id:c.id}}" class="text-lg font-bold mb-2">{{c.name}}</RouterLink>
            <div class="text-sm mb-2">{{c.description}}</div>

          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-50">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
    <div class="bg-[#c6adac] rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">افزودن کلاس جدید</h3>
      </div>
      <div class="px-4 py-5 sm:p-6">
        <div class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700">لینک کلاس</label>
            <input type="text" v-model="newClass.link" class="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
          <div v-if="newClass.link">
            <label class="block text-sm font-medium text-gray-700">رمز عبور کلاس</label>
            <input type="password" v-model="newClass.password" class="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>
      </div>
      <div class="px-4 py-3 sm:px-6 sm:flex sm:justify-between sm:flex-row-reverse">
        <button @click="addClass" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#523946] text-base font-medium text-white hover:bg-blue-600 sm:w-auto sm:text-sm">
          ذخیره
        </button>
        <button @click="closeModal" class="mt-3 w-full inline-flex justify-center rounded-md border-gray-300 shadow-sm px-6 py-2 bg-gray-300 text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:w-auto sm:text-sm">
          لغو
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {useClassStore} from "@/stores/ClassStore";
import type {Class} from "@/models/classes.interface";
import {data} from "autoprefixer";

const classStore = useClassStore()
const classes = ref([] as Class[])
onMounted( ()=>{
  classStore.getStudentClasses().then((data) => {
    classes.value = data
  })
})


const showModal = ref(false);

const newClass = ref({
  link: '',
  password: ''
});

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  newClass.value.link = '';
  newClass.value.password = '';
};

const addClass = () => {
  if (!newClass.value.link) {
    alert('لطفاً لینک کلاس را وارد کنید.');
    return;
  }
  if (!newClass.value.password) {
    alert('لطفاً رمز عبور کلاس را وارد کنید.');
    return;
  }
  // Add logic to add the class
  console.log('Adding class:', newClass.value);
  closeModal();
};
</script>

<style scoped>
/* Additional styling if necessary */
</style>
