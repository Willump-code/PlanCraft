<template>
        <MyButton @click="modalIsOpen.openModal()" :painted=false type="button">
                Добавить задачу
        </MyButton>
</template>


<script lang="ts" setup>
        // imports
        import MyButton from './ui/MyButton.vue';
        // store
        import { useModalIsOpen } from '../stores/modalIsOpen';
        const modalIsOpen = useModalIsOpen()
</script>


<style scoped>

</style>