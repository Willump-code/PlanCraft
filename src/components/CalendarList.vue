<template>
        <ul class="calendar-list">
                <li v-for="item in list" class="calendar-list__item">
                        <div class="calendar-list__date">
                                <span class="calendar-list__date1">{{ formatDayMonth(item) }}</span>
                                <span class="calendar-list__date2">
                                        {{ item.toLocaleDateString('ru-RU', {
                                                weekday: 'long'
                                        })}}
                                </span>  
                        </div>

                        <Tasks
                        :class="{
                                'calendar-list__tasks': filteredTasks(item).length > 0,
                        }" 
                        :tasks="filteredTasks(item)">
                        </Tasks>

                        <OpenAddTaskModalBtn @click="modalIsOpen.setDefualtDate(item)" :size="'m'"></OpenAddTaskModalBtn>
                </li>  
        </ul>
</template>


<script setup lang="ts">
        // imports
        import { ref } from 'vue'
        import { formatDayMonth } from '../utilits'
        import Tasks from './Tasks.vue'
        import OpenAddTaskModalBtn from './OpenAddTaskModalBtn.vue'


        // store
        import { useTasks } from '../stores/tasks'
        const tasks = useTasks()
        import { useModalIsOpen } from '../stores/modalIsOpen';
        const modalIsOpen = useModalIsOpen()

        

        const list = ref<Date[]>([])
        const startDate = new Date()
        const endDate = new Date()
        endDate.setFullYear(startDate.getFullYear()+1)
        let current = new Date(startDate)
        while (current <= endDate) {
                list.value.push(new Date(current))
                current.setDate(current.getDate()+1)
        }


        function isSameDay(d1: Date, d2: Date) {
                return (
                d1.getFullYear() === d2.getFullYear() &&
                d1.getMonth() === d2.getMonth() &&
                d1.getDate() === d2.getDate()
                )
        }

        function filteredTasks(date1: Date){
                return tasks.tasks.filter(e => {
                        const sameDay = isSameDay(date1, e.date)
                        const active = e.active
                        return sameDay && active
                })
        }
</script>


<style scoped lang="scss">
        .calendar-list{
                display: flex;
                flex-direction: column;
                align-items: start;
                gap: 65px;


                &__tasks{
                        margin: 25px 0;
                }
                &__item{
                        width: 100%;
                }
                &__date{
                        display: flex;
                        justify-content: start;
                        align-self: center;
                        gap: 10px;
                        font-size: clamp(0.8rem, 3vw, 1.6rem);
                        font-weight: 500;
                        border-bottom: 1px solid $color-text;
                        margin-bottom: 15px;

                        &1{
                                
                        }
                        &2{
                                font-weight: 800;

                                &::first-letter {
                                        text-transform: uppercase;
                                }
                        }
                }

        }
</style>
