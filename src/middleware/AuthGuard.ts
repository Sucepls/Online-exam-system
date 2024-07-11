import { type MiddlewareContext } from 'vue-middleware'
import { useAuthStore } from '@/stores/AuthStore'
import { toast } from 'vue3-toastify'

export default async ({ redirect, guard }: MiddlewareContext) => {
  const authStore = useAuthStore()

  await authStore.checkLogin()

  if (authStore.isLogin && guard) {
    redirect('/')
  }

  if (!authStore.isLogin && !guard) {
    redirect({ name: 'login' })
    toast('ابتدا وارد شوید!', {
      autoClose: 1000,
      rtl: true,
      type: 'error'
    })
  }

  //
}
