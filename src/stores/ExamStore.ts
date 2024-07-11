import { defineStore } from 'pinia'
import { useApiStore } from './ApiStore'
import type {Class} from "@/models/classes.interface";
import {ref} from "vue";
import type {Exam} from "@/models/exams.interface";


export const useExamStore = defineStore('exam', () => {
    const apiStore = useApiStore()
    const exams=ref([] as Exam[])
    const baseUrl = import.meta.env.VITE_API_URL+'exams'
    async function createExam(data:Exam){
        data.attemptsAllowed=Number(data.attemptsAllowed)
        return apiStore.post(baseUrl, data).then(({data})=>{
            exams.value.push(data.data)
            return data.data;
        })
    }

    async function getQuestions(qid:number){

        return apiStore.get(baseUrl+`/${qid}/questions`).then(({data})=>{
            return data.data;
        })
    }
    return {createExam, exams,getQuestions}
})
