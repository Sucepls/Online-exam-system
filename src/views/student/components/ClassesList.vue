<template>
  <div class="bg-[#395253] p-4 flex-col pt-10">
    <div class="flex justify-between mb-4">
      <input type="text" placeholder="جستجوی نام کلاس، استاد یا مؤسسه آموزشی..." class="w-2/3 p-2 rounded-lg border" />
      <button class="bg-[#523946] text-white py-2 px-4 rounded">کلاس جدید</button>
    </div>
    <div class="flex-col flex">
      <div class="flex">
        <div v-for="i in 3" class="border m-1 rounded-lg gap-4">
          <div class=" bg-[#c6adac] p-4 rounded">
            <img src="@/assets/background.png" alt="Class Image" class="w-full h-40 object-cover rounded mb-2" />
            <a href="#" class="text-lg font-bold mb-2">برنامه نویسی وب - بهمن ۱۴۰۲</a>
            <div class="text-sm mb-2">محمدجواد ثبوتی - دانشگاه فردوسی مشهد</div>
            <div class="flex justify-between text-sm">
              <span>۸۶ نفر</span>
              <span>۱۴۰۳/۰۱/۰۱</span>
            </div>
          </div>
          <!-- Repeat the above div for each class card -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ClassesPage',
})
</script>

<style scoped>
/* Additional styling if necessary */
</style>
