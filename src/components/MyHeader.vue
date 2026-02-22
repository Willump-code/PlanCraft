<template>
        <header class="header">
                <div class="container">
                        <TabsList class="header__list"></TabsList>
                </div>
        </header>
        
</template>


<script setup lang="ts">
        import TabsList from './TabsList.vue';
</script>


<style scoped lang="scss">
        .header{
                background-color: $color-bg-secondary;
                padding: 20px 0;

                &__list{
                      align-items: center;
                      justify-content: space-between;
                }
        }
        @media(max-width: 620px) {
                .header{
                        padding: 15px 0 10px 0;
                }
        }
</style>