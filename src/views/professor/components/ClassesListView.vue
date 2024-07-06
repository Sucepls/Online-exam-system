<script setup lang="ts">
import router from "@/router";

const goToSignUpPage = () => {
  router.push('/classes');
};
</script>

<template>
  <div class="shadow border rounded-lg bg-[#c6adac] m-10 w-1/2">
    <div v-for="i in 5" class=" border-b rounded-lg border-gray-200 px-4 py-5 sm:p-0">
      <dl class="sm:divide-y sm:divide-gray-200 ">
        <div class="flex-col sm:py-5 sm:gap-4 sm:px-6">
          <div class="flex justify-around pb-3">
            <dt class=" text-sm font-medium text-gray-700">
              کلاس {{i}}
            </dt>
            <button @click="goToSignUpPage" class="bg-[#523946] text-sm w-1/2  sm:col-span-2 text-white rounded-md hover:bg-blue-600">
              ورود به کلاس
            </button>
          </div>
          <div class="ps-4">
            <dt class="text-xs flex w-full text-gray-700">این کلاس توضیحات ندارد.</dt>
          </div>
        </div>
      </dl>
    </div>
  </div>
</template>

<style scoped>

</style>