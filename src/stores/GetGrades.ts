import { defineStore } from 'pinia'
import { useApiStore } from './ApiStore'
import type {Class} from "@/models/classes.interface";
import {ref} from "vue";
import type {Exam} from "@/models/exams.interface";


export const useExamStore = defineStore('exam', () => {
    const apiStore = useApiStore()
    const baseUrl = import.meta.env.VITE_API_URL+'exams/'+ {} +

    async function getQuestions(examId){

        return apiStore.get(baseUrl+`/${qid}/questions`).then(({data})=>{
            return data.data;.
        })
    }
    return {createExam, exams,getQuestions}
})
