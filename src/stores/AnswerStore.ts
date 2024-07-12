import { defineStore } from 'pinia';
import { useApiStore } from './ApiStore';
import type { Answer } from "@/models/answers.interface";

export const useAnswerStore = defineStore('answer', () => {
    const apiStore = useApiStore();
    const baseUrl = import.meta.env.VITE_API_URL + 'answers';

    async function createAnswer(data: Answer[]) {
        return apiStore.post(baseUrl, {answers:data}).then(({ data }) => {
            return data.data;
        });
    }

    return { createAnswer };
});
