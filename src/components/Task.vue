<template>
        <div class="task">
                <div class="task__info1">
                        <div class="task__check-wrap">
                                <input 
                                type="checkbox" 
                                class="task__check" 
                                v-if="props.task.active"
                                :checked="!props.task.active"
                                @change="props.task.active = false, props.task.dueDate = new Date()"
                                >
                        </div>
                        
                        <p class="task__text">{{ props.task.data }}</p>
                </div>
                
                <div class="task__info2">
                        <div 
                        class="task__date" 
                        v-if="props.task.active"
                        >
                                <img :src="`${calendarIcon}`" alt="icon">
                                <span class="task__date-text">{{ formatDayMonth(props.task.date) }}</span>
                        </div>
                        <div 
                        class="task__date task__date2"  
                        v-if="!props.task.active"
                        >
                                <span  class="task__date-bold task__date-text">
                                        Время выполнения:
                                </span>
                                <div class="task__date2-wrap">
                                        <span class="task__date-text">{{ props.task.dueDate ? formatDayMonth(props.task.dueDate) : '' }}</span>
                                        <span class="task__date-text">{{ `${props.task.dueDate?.getHours()}:${props.task.dueDate?.getMinutes()}` }}</span>
                                </div>
                                
                        </div>
                        <div
                        class="task__priority"
                        v-if="props.task.active"
                        >
                                <svg class="task__svg" width="80" height="80" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.031 2a1 1 0 00-1 1v6a1 1 0 102 0V3a1 1 0 00-1-1zm0 11.969a1 1 0 100-2 1 1 0 000 2z" 
                                        :fill="`${colorPriority[props.task.priority]}`">
                                </path>
                                </svg>
                        </div>
                </div>
        </div>
</template>


<script setup lang="ts">
        // imports
        import type { Task } from '../types';
        import calendarIcon from '~icons/tabs-icons/calendar.png'
        import { formatDayMonth } from '../utilits';

        const props = defineProps<{ task: Task }>();
        const colorPriority = {
                1: '#b10000',
                2: '#f0c400',
                3: '#56b300',
        }
</script>


<style scoped lang="scss">
        .task{
                background-color: $color-bg-secondary;
                width: 100%;
                display: flex;
                justify-content: space-between;
                padding: 10px 10px;
                gap: clamp(15px, 1vw, 20px);
                
                &__check{
                        border-radius: 100%;
                }
                &__check[type="checkbox"]{
                        width: clamp(14px, 3vw, 25px);
                        height: clamp(14px, 3vw, 25px);
                        accent-color: $color-accent;
                        
                        
                }     
                &__text{
                        font-size: clamp(0.8rem, 3vw, 1.6rem);
                }
                &__info1{
                        display: flex;
                        align-items: center;
                        justify-content: start;
                        gap: clamp(6px, 0.5vw, 15px);
                        gap: 10px;
                }
                &__info2{
                        display: flex;
                        align-items: center;
                        justify-content: end;
                        gap: clamp(1px, 0.5vw, 15px);
                        flex: 0 0 auto;
                        
                }
                &__date{
                        display: flex;
                        justify-content: end;
                        align-items: center;
                        gap: clamp(5px, 1vw, 10px);
                        width: 100%;


                        &-text{
                                font-size: clamp(0.8rem, 3vw, 1.6rem);
                                font-weight: 500;
                                width: max-content;
                        }
                        &-bold{
                                font-weight: 900;
                                width: max-content;
                        }
                        & img{
                                height: clamp(13px, 3vw, 25px)
                        }
                }
                &__date2{
                        &-wrap{
                                display: flex;
                                gap: 10px;
                        }

                }
                &__svg{
                        height: clamp(50px, 7vw, 80px);
                        width: auto;
                }
                
        }
        @media (max-width:767px) {
                .task__date2{
                        flex-direction: column;
                        align-items: end;

                        &-wrap{
                                gap: 4px;
                        }
                }
        }
</style>
