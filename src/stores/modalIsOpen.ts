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

        return {modalIsOpen, openModal, closeModal}
})