import { createRouter, createWebHistory } from 'vue-router';
import SingUpView from "@/views/singup/SingUpView.vue";
import AuthLayout from "@/views/layouts/AuthLayout.vue";
import MainLayout from "@/views/layouts/MainLayout.vue";
import ProfessorView from "@/views/professor/ProfessorView.vue";
import ClassesView from "@/views/classes/ClassesView.vue";
import ExamsView from "@/views/exams/ExamsView.vue";
import StudentView from "@/views/student/StudentView.vue";
import StudentClassesView from "@/views/studentClasses/StudentClassesView.vue";
import LoginView from "@/views/login/LoginView.vue";

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
      meta: {
        middleware: 'AuthGuard'
      },
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
          path: 'classes/:id',
          name: 'classes',
          component: ClassesView
        },
        {
          path: 'exams/:id',
          name: 'exams',
          component: ExamsView
        },
        {
          path: 'student',
          name: 'student',
          component: StudentView
        },
        {
          path: 'class/:id',
          name: 'class',
          component: StudentClassesView
        },
      ]
    }
  ]
})


export default router;
