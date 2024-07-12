<script lang="ts" setup>
import backIcon from '@/assets/Icons/next-icon.svg?component'
import nextIcon from '@/assets/Icons/perivous-icon.svg?component'
import { ref, watch } from 'vue';
import {type Question, QuestionType} from "@/models/questions.interface";
import type {Answer} from "@/models/answers.interface";

const props = defineProps({
  'questions': {
    default: [] as Question[],
  },
});

const answers = ref([] as Answer[]);
const currentAnswer = ref({} as Answer);
const currentQuestionIndex = ref(0);


watch(currentQuestionIndex, (newIndex, oldIndex) => {
  // Save the current answer before moving to the next question
  if (oldIndex >= 0) {
    const answer = answers.value.find((a) => a.questionId == props.questions[oldIndex].id);
    if (answer) {
      Object.assign(answer, currentAnswer.value);
    } else {
      answers.value.push({ ...currentAnswer.value });
    }
  }

  // Load the answer for the new question
  const newAnswer = answers.value.find((a) => a.questionId == props.questions[newIndex].id);
  currentAnswer.value = newAnswer ? { ...newAnswer } : { examId: props.questions[newIndex].examId, questionId: props.questions[newIndex].id, choiceId: null, text: '' };
});

function nextQuestion() {
  if (currentQuestionIndex.value < props.questions.length - 1) {
    currentQuestionIndex.value++;
  }
}

function prevQuestion() {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value--;
  }
}

function getAnswer(qid: number): Answer {
  const answer = answers.value.find((a) => a.questionId == qid);
  return answer ? answer : { examId: props.questions[currentQuestionIndex.value].examId, questionId: qid, choiceId: null, text: '' };
}
</script>

<template>
  <div class="text-gray-700 quiz-container p-4 bg-[#847272] border rounded-lg shadow-lg max-w-md mx-auto w-1/2" v-if="questions.length !=0">
    <div class="question-section mb-4 flex justify-between items-center">
      <h2>
        {{ currentQuestionIndex + 1 }}. {{ questions[currentQuestionIndex].text }}
      </h2>
    </div>
    <div class="text-sm options-section mb-4">
      <div v-if="questions[currentQuestionIndex].type != QuestionType.ESSAY"
           v-for="(choice, index) in questions[currentQuestionIndex].choices"
           :key="index"
           @click="currentAnswer.choiceId = choice.id"
           class="option p-2 mb-2 border rounded cursor-pointer"
           :class="{
            'bg-blue-100': currentAnswer.choiceId === choice.id,
          }"
      >
        {{ choice.text }}
      </div>
      <textarea v-else v-model="currentAnswer.text" cols="30" rows="10"></textarea>
    </div>
    <div class="flex justify-between py-4">
      <button
          @click="prevQuestion"
          class="btn-prev bg-[#adacc6] p-2 rounded hover:bg-gray-400"
          :disabled="currentQuestionIndex == 0"
      >
        <backIcon/>
      </button>
      <button class="btn-prev bg-[#adacc6] p-2 rounded hover:bg-gray-400">اتمام آزمون</button>
      <button
          @click="nextQuestion"
          class="btn-next bg-[#adacc6] p-2 rounded hover:bg-gray-400"
          :disabled="currentQuestionIndex == questions.length - 1"
      >
        <nextIcon />
      </button>
    </div>
    <div class="progress mt-4 text-center">
      سوال {{ currentQuestionIndex + 1 }} از {{ questions.length }}
    </div>

    <div class="answers-status mt-4 flex justify-center">
      <div v-for="(question, index) in questions" :key="index" class="mx-1">
        <span :class="answers.some(a => a.questionId === question.id) ? 'bg-green-500 text-white' : 'bg-red-500 text-white' " class="p-2 rounded-full w-8 h-8 flex items-center justify-center">
          {{ index + 1 }}
        </span>
      </div>
    </div>
  </div>
</template>

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
