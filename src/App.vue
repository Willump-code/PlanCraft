<template>
        <MyHeader></MyHeader>
        
        <MyMain>
                <router-view></router-view>
        </MyMain>
</template>


<script setup lang="ts">
        import MyHeader from './components/MyHeader.vue';
        import MyMain from './components/MyMain.vue';

</script>


<style scoped lang="scss">
        
</style>
