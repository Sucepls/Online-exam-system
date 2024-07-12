import { defineStore } from 'pinia';
import { useApiStore } from './ApiStore';
import { ref } from 'vue';

export const useJoinClassStore = defineStore('joinClass', () => {
    const apiStore = useApiStore();

    const baseUrl = import.meta.env.VITE_API_URL + 'users/join-class/1';

    async function joinClass(inviteCode: string) {
        return apiStore.post(baseUrl, { inviteCode }).then(({ data }) => {
            return data.data;
        });
    }

    return { joinClass };
});
