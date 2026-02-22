import { defineStore } from "pinia";
import type { CountNotice, Priority, Task, Tasks } from "../types";
import { computed, reactive, ref, watch } from 'vue';



export const useTasks = defineStore('tasks', ()=>{
        const tasks = ref<Tasks>([]);
        
        function addTask(data: string, priority: Priority, date: Date){
                const task:Task = {
                        data: data,
                        priority: priority,
                        date: date,
                        dueDate: null,
                        id: crypto.randomUUID(),
                        active: true,
                }
                tasks.value.push(task)
        }
        function removeTask(id:string){
                tasks.value = tasks.value.filter(e => e.id !== id)
        }

        const countNotice = reactive<CountNotice>({
                countInbox: 0,
                countToday: 0,
        })
        // inbox
        const inboxTasks = computed(()=>{
                return tasks.value.filter(e => e.active)
        })
        watch(inboxTasks, val=>{
                countNotice.countInbox = val.length
        }, { immediate: true })
        // today
        const todayTasks = computed(()=>{
                const today = new Date()
                return tasks.value.filter(e=>{
                        return e.active && 
                        e.date.getDate() === today.getDate() &&
                        e.date.getMonth() === today.getMonth() &&
                        e.date.getFullYear() === today.getFullYear()
                })
        })
        watch(todayTasks, val=>{
                countNotice.countToday = val.length
        }, { immediate: true })
        // done
        const doneTasks = computed(()=>{
                return tasks.value.filter(e=>!e.active)
        })



        return {tasks, addTask, removeTask, countNotice, inboxTasks, todayTasks, doneTasks}
})
