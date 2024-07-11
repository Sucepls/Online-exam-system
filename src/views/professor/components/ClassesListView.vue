<script setup lang="ts">
import router from "@/router";
import {useClassStore} from "@/stores/ClassStore";
import {onMounted, ref} from "vue";
import type {Class} from "@/models/classes.interface";
import {useRoute} from "vue-router";

const classStore = useClassStore()

onMounted(()=>{
  classStore.getProfClasses()
})

const goToSignUpPage = () => {
  router.push('/classes');
};
</script>

<template>
  <div class="shadow border rounded-lg bg-[#c6adac] m-10 w-1/2">
    <div v-for="c in classStore.classes" class=" border-b rounded-lg border-gray-200 px-4 py-5 sm:p-0">
      <dl class="sm:divide-y sm:divide-gray-200 ">
        <div class="flex-col sm:py-5 sm:gap-4 sm:px-6">
          <div class="flex justify-around pb-3">
            <dt class=" text-sm font-medium text-gray-700">
              کلاس {{c.name}}
            </dt>
            <RouterLink :to="{name:'classes',params:{id:c.id}}" class="bg-[#523946] text-xs w-1/3 sm:col-span-2 text-white rounded-md hover:bg-blue-600">
              ورود به کلاس
            </RouterLink>
          </div>
          <div class="flex ps-4 pb-2">
            <dt class="text-xs flex w-full text-gray-700">توضیحات: {{ c.description }}</dt>
          </div>
          <div class="flex ps-4">
            <dt class="text-xs flex w-full text-gray-700">رمز: {{ c.inviteCode }}</dt>
          </div>
        </div>
      </dl>
    </div>
  </div>
</template>

<style scoped>

</style>