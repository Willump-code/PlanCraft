<template>
        <button 
        v-bind="$attrs" 
        class="my-button" 
        :class="{
                painted:props.painted,
                small:props.size==='s',
                medium:props.size==='m',
                large:props.size==='l',
        }">
                <slot></slot>
        </button>
</template>

<script setup lang="ts">
        const props = defineProps<{
                painted: boolean,
                size: 's' | 'm' | 'l'
        }>();
</script>


<style lang="scss" scoped>
        .my-button{
                color: $color-accent;
                border: 2px solid $color-accent;
                

                &.painted{
                        background-color: $color-accent;
                        color: $color-text;
                        border: none;
                }
                &.small{
                        padding: clamp(1px, 0.5vw, 0.25rem) clamp(1px, 1vw, 0.5rem);
                        font-size: clamp(0.7rem, 1.4vw, 1rem);
                        font-weight: 600;
                }
                &.medium{
                        padding: clamp(1px, 1vw, 0.5rem) clamp(1px, 2vw, 1rem);
                        font-size: clamp(0.8rem, 2vw, 1.5rem);
                        font-weight: 700;
                }
                &.large{
                        padding: clamp(1px, 1vw, 0.5rem) clamp(1px, 2vw, 1rem);
                        font-size: clamp(0.8rem, 2.8vw, 2rem);
                        font-weight: 800;
                }
        }
</style>