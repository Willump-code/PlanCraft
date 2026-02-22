<template>
        <div class="page-head-wrap">
                <h1 class="page-title">
                        Входящие задачи
                </h1>
                <OpenAddTaskModalBtn></OpenAddTaskModalBtn>
        </div>
        <Tasks :tasks="tasks.inboxTasks"></Tasks>


        <AddTaskModal></AddTaskModal>
</template>


<script setup lang="ts">
        // imports
        import Tasks from '../components/Tasks.vue';
        import OpenAddTaskModalBtn from '../components/OpenAddTaskModalBtn.vue';
        import AddTaskModal from '../components/addTaskModal.vue';

        // store
        import { useTasks } from '../stores/tasks';
        const tasks = useTasks();
</script>


<style scoped lang="scss">
</style>
