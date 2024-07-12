<script setup lang="ts">
import router from "@/router";
import {useAuthStore} from "@/stores/AuthStore";
import {onMounted, ref} from "vue";
import {useClassStore} from "@/stores/ClassStore";
import type {Exam} from "@/models/exams.interface";
import type {Class} from "@/models/classes.interface";
import Loading from "vue-loading-overlay";

const classStore = useClassStore();
const classes = ref({} as Class);
const isLoading = ref(true);
const goToSignUpPage = () => {
  router.push('/exams');
};
const authStore = useAuthStore()
const props = defineProps(['classId'])
onMounted( ()=>{
  classStore.getOneClass(props.classId).then((data) => {
    isLoading.value = false
    classes.value = data.data.data
  })
})
</script>

<template>
  <div class="border overflow-hidden shadow rounded-lg bg-[#c6adac] m-10 vl-parent">
    <loading v-model:active="isLoading" :is-full-page="false"/>
    <div class="border-gray-200 px-4 py-5 sm:p-0">
      <dl class="sm:divide-y sm:divide-gray-200 ">
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ">
          <dt class="text-sm font-medium text-gray-700 ">
            نام کلاس
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{classes.name}}
          </dd>
        </div>
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-700">
             ایجاد کننده
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ authStore.user.name }}
          </dd>
        </div>
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-700">
            توضیحات
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ classes.description }}
          </dd>
        </div>
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-700">
            رمزعبور
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ classes.inviteCode }}
          </dd>
        </div>
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-700">
            تعداد کاربران
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{classes.students?.length}}
          </dd>
        </div>
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-700">
            لینک کلاس
          </dt>
          <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
            http://localhost:5173/class/{{classes.id}}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<style scoped>

</style>