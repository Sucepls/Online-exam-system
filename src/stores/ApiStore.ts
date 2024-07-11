import { defineStore } from "pinia";
import axios from "axios";
import { useAuthStore } from './AuthStore';

export const useApiStore = defineStore("api", () => {
    const authStore = useAuthStore();
    async function post(url: string, data: any, headers?: any) {
        if (authStore.isLogin)
            headers = { ...headers, Authorization: "Bearer " + authStore.user.token };
        return axios.post(url, data, { headers: headers });
    }
    async function get(url: string, headers?: any, params?: any) {
        if (authStore.isLogin)
            headers = { ...headers, Authorization: "Bearer " + authStore.user.token };
        return axios.get(url, { headers: headers, params: params });
    }

    return { get, post };
});
