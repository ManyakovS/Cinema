
import { createRouter, createWebHashHistory } from "vue-router"

import RegistrationPageVue from "@/pages/RegistrationPage.vue";

const routes = [
    {
        path: '/',
        component: RegistrationPageVue
    },
]

const router = createRouter(
    {
        routes,
        history: createWebHashHistory(process.env.Base_URL)
    }
)

export default router;