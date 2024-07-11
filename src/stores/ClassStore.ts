import { defineStore } from 'pinia'
import { useApiStore } from './ApiStore'
import type {Class} from "@/models/classes.interface";
import {ref} from "vue";


export const useClassStore = defineStore('class', () => {
    const apiStore = useApiStore()
    const classes=ref([] as Class[])
    const baseUrl = import.meta.env.VITE_API_URL+'classes'
    async function getProfClasses() {
         apiStore.get(baseUrl+'/prof').then(({data})=>{
            classes.value = data.data
        })
    }
    async function getStudentClasses() {
        return apiStore.get(baseUrl+'/student').then(({data})=>{
            return data.data
        })
    }
    async function createClass(
        data:Class){
        return apiStore.post(baseUrl, data).then(({data})=>{
            classes.value.push(data.data)
            return data;
        })
    }

    async function getExams(classId:number){
        return apiStore.get(baseUrl+`/${classId}/exams`).then(({data})=>{
            return data.data;
        })
    }
    async function getOneClass(classId: number) {
        return apiStore.get(baseUrl + '/' + classId)
    }
    return {getProfClasses, createClass, classes, getOneClass, getStudentClasses,getExams}
})
