import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useApiStore } from './ApiStore'
import { toast } from 'vue3-toastify'
import { AxiosError } from 'axios'
import type { User } from "@/models/users.interface"

export const useAuthStore = defineStore('user', () => {
    const user = ref({} as User)
    const isLogin = ref(false)

    const apiStore = useApiStore()
    const baseUrl = import.meta.env.VITE_API_URL

    function setUser(data: any) {
        console.log('====================')
        console.log(user.value)
        console.log('====================')

        user.value.name = data.data.user.name
        user.value.password = data.data.user.password
        user.value.id = data.data.user.id
        user.value.email = data.data.user.email
        user.value.role = data.data.user.role
        user.value.token = data.data.data.token
        isLogin.value = true
        localStorage.setItem('user', JSON.stringify(user.value))
    }

    async function login(auth: { email: string; password: string }) {
        return apiStore
            .post(`${baseUrl}login`, auth)
            .then(({ data }) => {
                setUser(data)
                toast('با موفقیت وارد شدید', {
                    autoClose: 1500,
                    rtl: true,
                    type: 'success'
                })

                return data
            })
            .catch((res: AxiosError) => {
                toast('ورود با مشکل مواجه گردید!', {
                    autoClose: 1500,
                    rtl: true,
                    type: 'error'
                })
                throw res
            })
    }

    async function signup(auth: { name: string; email: string; password: string }) {
        return apiStore
            .post(`${baseUrl}signup`, auth)
            .then(({ data }) => {
                setUser(data)
                toast('ثبت‌نام با موفقیت انجام شد', {
                    autoClose: 1500,
                    rtl: true,
                    type: 'success'
                })

                return data
            })
            .catch((res: AxiosError) => {
                toast('ثبت‌نام با مشکل مواجه گردید!', {
                    autoClose: 1500,
                    rtl: true,
                    type: 'error'
                })
                throw res
            })
    }

    async function checkLogin() {
        user.value = JSON.parse(localStorage.getItem('user')!) || ({} as User)
        isLogin.value = true
        return new Promise((resolve, reject) => {
            apiStore
                .get(`${baseUrl}me`)
                .then(() => resolve(true))
                .catch((e: AxiosError) => {
                    if (e.response!.status == 401) {
                        isLogin.value = false

                        // localStorage.removeItem('user')
                    } else {
                        toast('مشکل در برقراری ارتباط', {
                            autoClose: 1500,
                            rtl: true,
                            type: 'error'
                        })
                    }
                    resolve(false)
                })
        })
    }

    return { user, isLogin, login, signup, checkLogin }
})
