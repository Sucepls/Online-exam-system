<script setup lang="ts">

</script>

<template>
  <div class="shadow border rounded-lg bg-[#c6adac] m-10 w-1/2 ">
    <div v-for="i in 5" class=" border-b rounded-lg border-gray-200 px-4 py-5 sm:p-0">
      <dl class="sm:divide-y sm:divide-gray-200">
        <div class=" py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class=" text-sm font-medium text-gray-700">
            کاربر {{i}}
          </dt>
          <button class="bg-[#523946] text-sm sm:col-span-2 text-white rounded-md hover:bg-blue-600">
            مشاهده
          </button>

        </div>
      </dl>
    </div>
    <div class="flex justify-center p-4">
      <button class=" bg-[#523946] text-white p-2 rounded-md hover:bg-blue-600">
        افزودن کاربر
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>