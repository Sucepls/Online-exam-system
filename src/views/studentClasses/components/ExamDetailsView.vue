<template>
  <div class="quiz-container p-4 bg-[#847272] border rounded-lg shadow-lg max-w-md mx-auto w-1/2">
    <div class="question-section mb-4 flex justify-between items-center">
      <h2>
        {{ currentQuestionIndex + 1 }}. {{ questions[currentQuestionIndex].question }}
      </h2>
    </div>
    <div class="text-sm options-section mb-4">
      <div
          v-for="(option, index) in questions[currentQuestionIndex].options"
          :key="index"
          class="option p-2 mb-2 border rounded cursor-pointer"
          :class="{
          'bg-blue-100': selectedOption === index,
        }"
          @click="selectOption(index)"
      >
        {{ option }}
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

    <div class="answers-status mt-4 flex justify-center">
      <div v-for="(answered, index) in answeredQuestions" :key="index" class="mx-1">
        <span :class="answered ? 'bg-green-500 text-white' : 'bg-red-500 text-white' " class="p-2 rounded-full w-8 h-8 flex items-center justify-center">
          {{ index + 1 }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import backIcon from '@/assets/Icons/next-icon.svg?component'
import nextIcon from '@/assets/Icons/perivous-icon.svg?component'
import { ref } from 'vue';

interface Question {
  question: string;
  options: string[];
  correctOption: number;
}

const questions = ref<Question[]>([
  {
    question: 'سوال اول چیست؟',
    options: ['گزینه 1', 'گزینه 2', 'گزینه 3', 'گزینه 4'],
    correctOption: 0,
  },
  {
    question: 'سوال دوم چیست؟',
    options: ['گزینه 1', 'گزینه 2', 'گزینه 3', 'گزینه 4'],
    correctOption: 1,
  },
  {
    question: 'سوال سوم چیست؟',
    options: ['گزینه 1', 'گزینه 2', 'گزینه 3', 'گزینه 4'],
    correctOption: 2,
  },
]);

const currentQuestionIndex = ref(0);
const selectedOption = ref<number | null>(null);
const answeredQuestions = ref<boolean[]>(Array(questions.value.length).fill(false));

const nextQuestion = () => {
  if (selectedOption.value !== null) {
    answeredQuestions.value[currentQuestionIndex.value] = true;
  }
  if (currentQuestionIndex.value < questions.value.length - 1) {
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
</script>

<style scoped>
.answers-status {
  display: flex;
  justify-content: center;
}

.answers-status div {
  margin: 0 0.25rem;
}

.answers-status span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}
</style>
