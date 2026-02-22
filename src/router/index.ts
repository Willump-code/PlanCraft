import { createRouter, createWebHistory } from "vue-router";


import Inbox from "../pages/Inbox.vue";
import Today from "../pages/Today.vue";
import Calendar from "../pages/Calendar.vue";
import Done from "../pages/Done.vue";



const routes = [
        {
                path: '/inbox',
                name: 'inbox',
                component: Inbox
        },
        {
                path: '/today',
                name: 'today',
                component: Today
        },
        {
                path: '/calendar',
                name: 'calendar',
                component: Calendar
        },
        {
                path: '/done',
                name: 'done',
                component: Done
        },
        {
                path: '/',
                redirect: '/inbox'
        }
]

export default createRouter({
        history: createWebHistory(),
        routes
})
