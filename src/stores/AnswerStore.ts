import { defineStore } from 'pinia';
import { useApiStore } from './ApiStore';
import type { Answer } from "@/models/answers.interface";

export const useAnswerStore = defineStore('answer', () => {
    const apiStore = useApiStore();
    const baseUrl = import.meta.env.VITE_API_URL + 'answers';

    async function createAnswer(data: Answer[]) {
        return apiStore.post(baseUrl, data).then(({ data }) => {
            return data.data;
        });
    }

    // async function submitAnswers(answers: Answer[]) {
    //     const promises = answers.map(answer => createAnswer(answer));
    //     return Promise.all(promises);
    // }

    return { createAnswer };
});
