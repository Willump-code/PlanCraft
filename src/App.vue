<template>
        <MyHeader></MyHeader>
        
        <MyMain>
                <router-view></router-view>
        </MyMain>
        <AddTaskModal></AddTaskModal>
</template>


<script setup lang="ts">
        import AddTaskModal from './components/addTaskModal.vue';
        import MyHeader from './components/MyHeader.vue';
        import MyMain from './components/MyMain.vue';

</script>


<style scoped lang="scss">
        
</style>
