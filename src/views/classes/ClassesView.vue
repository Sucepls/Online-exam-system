<script setup lang="ts">
import User from "@/views/classes/components/UserView.vue";
import CreateExam from "@/views/classes/components/createExam/CreateExamView.vue";
import Details from "@/views/classes/components/DetailsView.vue";
import {onMounted, ref} from "vue";
import {useClassStore} from "@/stores/ClassStore";
import {useRoute} from "vue-router";
import type {Class} from "@/models/classes.interface";

const classStore = useClassStore()
const  route = useRoute()
const classInfo = ref({} as Class)


onMounted(()=>{
  classStore.getOneClass(Number(route.params.id)).then(({data})=>{
    classInfo.value = data.data
    console.log(data.data)
  })
})
</script>

<template>
  <div class="bg-[#395253] flex">
    <div class="w-1/3 flex-col flex items-center pt-10">
      <h2 class="text-4xl font-bold pb-5">لیست کاربران</h2>
      <User :users="classInfo.students"/>
    </div>
    <div class="w-1/3 flex-col flex items-center pt-10">
      <h2 class="text-4xl font-bold pb-5">ساخت آزمون جدید</h2>
      <CreateExam :classId="classInfo.id"/>
    </div>
    <div class="w-1/3 flex-col flex items-center pt-10">
      <h2 class="text-4xl font-bold pb-5">اطلاعات کلاس</h2>
      <Details :classInfo="classInfo"/>
    </div>
  </div>
</template>

<style scoped>

</style>