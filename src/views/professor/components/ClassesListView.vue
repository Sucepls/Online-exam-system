<script setup lang="ts">

</script>

<template>
  <div class="shadow rounded-lg bg-[#c6adac] m-10 w-1/2">
    <div v-for="i in 5" class=" border-b border-gray-200 px-4 py-5 sm:p-0">
      <dl class="sm:divide-y sm:divide-gray-200">
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class=" text-sm font-medium text-gray-700">
            کلاس {{i}}
          </dt>
          <button class="bg-[#523946] text-sm  sm:col-span-2 text-white rounded-md hover:bg-blue-600">
            ورود به کلاس
          </button>
        </div>
      </dl>
    </div>
  </div>
</template>

<style scoped>

</style>