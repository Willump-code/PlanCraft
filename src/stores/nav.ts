import { defineStore } from "pinia";
import type { Tabs } from "../types";

const tabs: Tabs = [
        {
                id: 'inbox',
                label: 'Входящие'
        },
        {
                id: 'today',
                label: 'Сегодня'
        },
        {
                id: 'calendar',
                label: 'Календарь'
        },
        {
                id: 'done',
                label: 'Выполнено'
        },
]
export const useNav = defineStore('nav', () => {
        return {tabs}
})