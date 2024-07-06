import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/login/LoginView.vue';
import SingUpView from "@/views/singup/SingUpView.vue";
import AuthLayout from "@/views/layouts/AuthLayout.vue";
import MainLayout from "@/views/layouts/MainLayout.vue";
import ProfessorView from "@/views/professor/ProfessorView.vue";
import ClassesView from "@/views/classes/ClassesView.vue";
import ExamsView from "@/views/exams/ExamsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: AuthLayout,
      children: [
        {
          path: 'login',
          name: 'login',
          component: LoginView
        },
        {
          path: 'signup',
          name: 'signup',
          component: SingUpView
        }
      ]
    },
    {
      path: '/',
      name: 'main',
      component: MainLayout,
      children: [
        {
          path: 'professor',
          name: 'professor',
          component: ProfessorView
        },
        {
          path: 'classes',
          name: 'classes',
          component: ClassesView
        },
        {
          path: 'exams',
          name: 'exams',
          component: ExamsView
        },
      ]
    }
  ]
})


export default router;
