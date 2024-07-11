import { defineStore } from 'pinia'
import { useApiStore } from './ApiStore'
import type {Class} from "@/models/classes.interface";
import {ref} from "vue";
import type {Exam} from "@/models/exams.interface";
import type {Question} from "@/models/questions.interface";


export const useQuestionStore = defineStore('question', () => {
    const apiStore = useApiStore()

    const baseUrl = import.meta.env.VITE_API_URL+'questions'
    async function createQuestion(data:Question){
        return apiStore.post(baseUrl, data).then(({data})=>{
            return data.data;
        })
    }
    return {createQuestion}
})
