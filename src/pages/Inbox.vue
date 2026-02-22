<template>
        <div class="page-head-wrap">
                <h1 class="page-title">
                        Входящие задачи
                </h1>
                <MyButton :painted=false>Добавить задачу</MyButton>
        </div>
        
        <Tasks :tasks="tasks.inboxTasks"></Tasks>
</template>


<script setup lang="ts">
        // imports
        import Tasks from '../components/Tasks.vue';
import MyButton from '../components/ui/MyButton.vue';

        // store
        import { useTasks } from '../stores/tasks';
        const tasks = useTasks();
</script>


<style scoped lang="scss">
        
</style>
