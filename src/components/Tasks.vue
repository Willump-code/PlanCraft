<template>
        <ul class="tasks">
                <TransitionGroup name="tasks">
                        <Task
                        v-for="task in props.tasks"
                        class="tasks__item"
                        :task="task"
                        :key="task.id"
                        >
                        </Task>
                </TransitionGroup>
        </ul>
</template>


<script setup lang="ts">
        // imports
        import type { Tasks } from '../types';
        import Task from './Task.vue';
        
        
        const props = defineProps<{ tasks: Tasks }>();
</script>


<style scoped lang="scss">
        .tasks{
                display: flex;
                flex-direction: column;
                justify-content: start;
                gap: 18px;
        }

        .tasks-enter-active,
        .tasks-leave-active {
                transition: all 0.4s ease;
        }
        .tasks-enter-from,
        .tasks-leave-to {
                opacity: 0;
                transform: translateX(30px);
        }
        
</style>
