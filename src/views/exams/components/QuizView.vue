<template>
  <div class="quiz-container p-4 bg-[#847272] border rounded-lg shadow-lg max-w-md mx-auto w-1/2" v-if="questions.length!=0">
    <div class="question-section mb-4 flex justify-between items-center">
      <h2 class="">
        {{ currentQuestionIndex + 1 }}. {{ questions[currentQuestionIndex].text }}
      </h2>

    </div>
    <div class="text-sm options-section mb-4">
      <div
          v-for="(option, index) in questions[currentQuestionIndex].choices"
          :key="index"
          class="option p-2 mb-2 border rounded cursor-pointer"
          :class="{
          'bg-blue-100': selectedOption === index,
          'bg-[#7eb280]': questions[currentQuestionIndex].choices[index].isCorrect
        }"
      >
        {{ option.text }}
      </div>
    </div>
    <div class="flex justify-between py-4">
      <button
          @click="previousQuestion"
          class="btn-prev bg-[#adacc6] p-2 rounded hover:bg-gray-400"
          :disabled="currentQuestionIndex === 0"
      >
        <backIcon/>
      </button>
      <button
          @click="openEditPopup"
          class="edit-button bg-[#adacc6] p-2 rounded hover:bg-gray-400"
      >
        <editIcon/>
      </button>
      <button
          @click="nextQuestion"
          class="btn-next bg-[#adacc6] p-2 rounded hover:bg-gray-400"
          :disabled="currentQuestionIndex === questions.length - 1"
      >
        <nextIcon/>
      </button>
    </div>
    <div class="progress mt-4 text-center">
      سوال {{ currentQuestionIndex + 1 }} از {{ questions.length }}
    </div>

    <!-- ویرایش پاپ آپ -->
    <div v-if="isEditPopupOpen" class="edit-popup fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div class="bg-[#c6adac] p-4 rounded shadow-md max-w-md w-full">
        <h3 class="text-xl text-center font-bold mb-4">ویرایش سوال</h3>
        <div class="mb-4">
          <label class="block mb-2">متن سوال:</label>
          <input type="text" v-model="editQuestion.text" class="w-full p-2 border rounded">
        </div>
        <div class="mb-4">
          <label class="block mb-2">گزینه‌ها:</label>
          <div v-for="(choice, index) in editQuestion.choices" :key="index" class="mb-2 flex items-center">
            <input type="text" v-model="choice.text" class="flex-1 p-2 border rounded">
            <input type="checkbox" v-model="choice.isCorrect" :value="index" class=" mr-3">
          </div>
        </div>
        <div class="flex flex-col items-center space-y-1">
          <button @click="saveEdit" class="py-2 px-4 bg-[#523946] text-white rounded hover:bg-blue-600 w-full">ذخیره</button>
          <button @click="closeEditPopup" class="py-2 px-4 bg-gray-300 rounded hover:bg-gray-500 w-full">انصراف</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import backIcon from '@/assets/Icons/next-icon.svg?component'
import nextIcon from '@/assets/Icons/perivous-icon.svg?component'
import editIcon from '@/assets/Icons/Edit-icon.svg?component'
import type {Question} from "@/models/questions.interface";



const props = defineProps({
  'questions': {
    default: [] as Question[],
  },
});


const currentQuestionIndex = ref(0);
const selectedOption = ref<number | null>(null);

const isEditPopupOpen = ref(false);
const editQuestion = ref({} as Question);

const nextQuestion = () => {
  if (currentQuestionIndex.value < props.questions.length - 1) {
    currentQuestionIndex.value++;
    selectedOption.value = null;
  }
};

const previousQuestion = () => {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value--;
    selectedOption.value = null;
  }
};

const selectOption = (index: number) => {
  selectedOption.value = index;
};

const openEditPopup = () => {
  editQuestion.value =  {...props.questions[currentQuestionIndex.value]};
  isEditPopupOpen.value = true;
};

const closeEditPopup = () => {
  isEditPopupOpen.value = false;
};

const saveEdit = () => {
  if (editQuestion.value !== null) {

    closeEditPopup();
  }
};
</script>

<style scoped>
.edit-popup {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.edit-popup > div {
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
}
</style>
