<template>
        <div class="modal" v-if="modalIsOpen.modalIsOpen" @click="modalIsOpen.closeModal()">
                <div @click.stop class="modal__content">
                        <form @submit="addTask()" @submit.prevent class='modal__form'>
                                <textarea required v-model="text" placeholder="Текст задачи" class="modal__textarea"></textarea>
                                <div class="modal__inputs">
                                        <input class="modal__input" v-model="date" :min="today" type='date'>
                                        <select class="modal__input" v-model="priority">
                                                <option disabled value=3>Приоритет</option>
                                                <option value=1>Срочно</option>
                                                <option value=2>Нормально</option>
                                                <option value=3>Не срочно</option>
                                        </select>
                                </div>
                                <MyButton 
                                class="modal__btn" 
                                type="submit"
                                :painted=true 
                                :size="'l'"
                                >
                                Добавить задачу
                                </MyButton>
                        </form>
                </div>
        </div>
</template>


<script lang="ts" setup>
        // imports
        import MyButton from './ui/MyButton.vue';
        import { ref, watch } from 'vue';
        import type { Priority } from '../types';

        // store
        import { useModalIsOpen } from '../stores/modalIsOpen';
        const modalIsOpen = useModalIsOpen()
        import { useTasks } from '../stores/tasks';
        const tasks = useTasks()


        const d = new Date()
        d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
        const today = d.toISOString().split('T')[0]
        const text = ref<string>('')
        const date = ref<string>(modalIsOpen.defualtDate?.toISOString().split('T')[0] ?? '1321')
        watch(()=>modalIsOpen.modalIsOpen, val=>{
                if (val === true) {
                        date.value = modalIsOpen.defualtDate?.toISOString().split('T')[0] ?? today ?? ''
                }else{
                        modalIsOpen.setDefualtDate(new Date) 
                }
        })
          
        
        const priority = ref<Priority>(3)
        function addTask() {
                const transformDate = new Date(date.value)
                tasks.addTask(text.value, priority.value, transformDate)
                modalIsOpen.closeModal()
                text.value=''
                date.value=today ?? ''
                priority.value=3
        }
</script>


<style lang="scss" scoped>
        .modal{
                z-index: 10;
                background-color: rgba(0, 0, 0, 0.63);
                position: fixed;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;

                &__content{
                        z-index: 11;
                        position: absolute;
                        padding: 4vw;
                        background-color: $color-bg;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        width: clamp(300px, 60vw, 1200px);
                        height: 60vh;
                        border: 1px solid $color-border;
                }
                &__form{
                        height: 100%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        gap: 5px;
                        flex-direction: column;
                        
                }
                &__textarea{
                        padding: 10px;
                        background-color: $color-bg-secondary;
                        width: 100%;
                        height: 40%;
                        font-size: clamp(0.9rem, 4vw, 1.7rem);
                        border: 1px solid $color-border;


                        &::placeholder{
                                color: $color-text;
                                font-size: clamp(0.9rem, 4vw, 1.7rem);
                        }
                }
                &__inputs{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        width: 100%;
                        height: 35%;
                        
                }
                &__input{
                        padding: 10px;
                        background-color: $color-bg-secondary;
                        width: 48%;
                        min-height: 35%;
                        font-size: clamp(0.9rem, 4vw, 1.7rem);
                        border: 1px solid $color-border;
                }
                &__btn{
                        width: 100%;
                        min-height: 10%;
                }
        }
        @media(max-width:1000px){
                .modal__inputs{
                        flex-direction: column;
                }
                .modal__input{
                        width: 100%;
                }
        }
        @media(max-width:700px){
                .modal__content{
                        height: 40vh;
                }
        }
</style>