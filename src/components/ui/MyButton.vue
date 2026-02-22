<template>
        <button v-bind="$attrs" class="my-button" :class='{painted:props.painted}'>
                <slot></slot>
        </button>
</template>

<script setup lang="ts">
        const props = defineProps<{
                painted: boolean
        }>();
</script>


<style lang="scss" scoped>
        .my-button{
                color: $color-accent;
                border: 2px solid $color-accent;
                padding: clamp(1px, 1vw, 0.5rem) clamp(1px, 2vw, 1rem);
                font-size: clamp(0.8rem, 2.8vw, 2rem);
                font-weight: 800;
                

                &.painted{
                        background-color: $color-accent;
                        color: $color-text;
                        border: none;
                }
        }
</style>