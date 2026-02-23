<template>
        <MyButton 
        @click="modalIsOpen.openModal()" 
        :painted=false 
        :size="size"
        type="button">
                Добавить задачу
        </MyButton>
</template>


<script lang="ts" setup>
        // imports
        import MyButton from './ui/MyButton.vue';
        // store
        import { useModalIsOpen } from '../stores/modalIsOpen';
        const modalIsOpen = useModalIsOpen()


        const props = defineProps<{
                size: 's' | 'm' | 'l',
        }>()
</script>


<style scoped>

</style>