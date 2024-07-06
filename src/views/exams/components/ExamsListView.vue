<script setup lang="ts">

</script>

<template>
  <div class="shadow border rounded-lg bg-[#c6adac] m-10 w-1/2 ">
    <div v-for="i in 5" class=" border-b rounded-lg border-gray-200 px-4 py-5 sm:p-0">
      <div class=" py-3 sm:py-5 sm:grid sm:gap-4 sm:px-3">
        <div class="flex justify-between">
          <dt class=" text-sm font-medium text-gray-700">
            آزمون {{i}}
          </dt>
          <button class="bg-[#523946] w-1/2 text-sm text-white rounded-md hover:bg-blue-600">
            مشاهده
          </button>
        </div>
        <div class="flex w-full  items-center">
          <dt class=" text-sm font-medium text-gray-700">
            در تاریخ 1403/4/15 انجام شد
          </dt>
        </div>
      </div>
    </div>
    <div class="flex justify-center p-4">
      <button class=" bg-[#523946] text-white p-2 rounded-md hover:bg-blue-600">
        افزودن آزمون
      </button>
    </div>
  </div>
</template>

<style scoped>
.sm\:grid\:col-span-2 {
  display: flex; /* تبدیل چک باکس به یک ردیف */
  align-items: center; /* متن و چک باکس را در یک خط عمودی تراز کنید */
}
</style>
