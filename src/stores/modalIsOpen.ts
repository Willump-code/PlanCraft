import { defineStore } from "pinia";
import { ref } from "vue";


export const useModalIsOpen = defineStore('modalIsOpen', ()=>{
        const modalIsOpen = ref<boolean>(false)

        function openModal(){
                modalIsOpen.value = true
        }
        function closeModal(){
                modalIsOpen.value = false
        }

        
        const defualtDate = ref<Date>();
        function setDefualtDate(val: Date) {
                defualtDate.value = val
        }

        return {modalIsOpen, openModal, closeModal, defualtDate, setDefualtDate}
})