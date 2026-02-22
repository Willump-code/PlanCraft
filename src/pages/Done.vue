<template>
        <div class="page-head-wrap">
                <h1 class="page-title">
                        Выполненные задачи
                </h1>
        </div>
        <Tasks :tasks="tasks.doneTasks"></Tasks>
</template>


<script setup lang="ts">
        // imports
        import Tasks from '../components/Tasks.vue';

        // store
        import { useTasks } from '../stores/tasks';
        const tasks = useTasks();        
</script>


<style scoped lang="scss">
</style>
