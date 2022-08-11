import {createRouter, createWebHistory} from 'vue-router'
import AuthorizationView from '@/views/AuthorizationView.vue'
import RegistrationView from "@/views/RegistrationView";

const routes = [
    {
        path: '/',
        name: 'registration',
        component: RegistrationView,
        meta: {
            keepAlive: false
        }
    },
    {
        path: '/authorization',
        name: 'authorization',
        component: AuthorizationView,
        meta: {
            keepAlive: false
        }
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
