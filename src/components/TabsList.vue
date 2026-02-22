<template>
        <ul class="tabs" v-bind="$attrs">
                <li
                v-for="tab in nav.tabs"
                class="tabs__item"
                :key="tab.id"
                >       
                        <div class="tabs__notice" v-if="tab.id==='inbox' && tasks.countNotice.countInbox > 0">
                                {{ tasks.countNotice.countInbox }}
                        </div>
                        <div class="tabs__notice" v-if="tab.id==='today' && tasks.countNotice.countToday > 0">
                                {{ tasks.countNotice.countToday }}
                        </div>
                        <img
                        :src='`${tabsIcons[tab.id]}`'
                        class="tabs__icon" 
                        alt="icon"
                        >

                        <router-link 
                        :to='{name: tab.id}'
                        class="tabs__link"
                        active-class="active"
                        >
                                {{ tab.label }}
                        </router-link>
                </li>
        </ul>
</template>


<script setup lang="ts">
        // imports
        import inboxIcons from '~icons/tabs-icons/inbox.png'
        import todayIcons from '~icons/tabs-icons/today.png'
        import calendarIcons from '~icons/tabs-icons/calendar.png'
        import doneIcons from '~icons/tabs-icons/done.png'
        // store
        import { useNav } from '../stores/nav';
        const nav = useNav()
        import { useTasks } from '../stores/tasks';
        const tasks = useTasks()
        

        const tabsIcons = {
                inbox: inboxIcons,
                today: todayIcons,
                calendar: calendarIcons,
                done: doneIcons,
        }
</script>


<style scoped lang="scss">
        .tabs{
                display: flex;
                padding: 0 15px;

                &__item{
                        position: relative;
                        display: flex;
                        justify-content: center;
                        gap: clamp(0.1rem, 0.4vw, 10px);
                        align-items: center;


                        &:hover{
                                text-decoration: underline;
                        }
                }
                &__notice{
                        content: var(--count);
                        position: absolute;
                        top: -10px;
                        right: clamp(-24px, -3vw, -0.8rem);
                        width: clamp(0.8rem, 3vw, 24px);
                        height: clamp(0.8rem, 3vw, 24px);
                        line-height: clamp(1rem, 3.2vw, 26px);
                        font-size: clamp(0.7rem, 2.8vw, 18px);;
                        text-align: center;
                        border-radius: 100%;
                        color: $color-text;
                        background-color: $color-accent;   
                }
                &__icon{
                        width: clamp(0.7rem, 3vw, 1.3rem);
                        height: clamp(0.7rem, 3vw, 1.3rem);
                }
                &__link{
                        font-size: clamp(0.85rem, 3vw, 1.5rem);

                        
                        &.active{
                                text-decoration: underline;
                        }
                }

                
        }
        @media(max-width: 620px) {
                .tabs__item::after{
                        right: -10px;
                }
                .tabs{
                        padding: 0;
                }
                .tabs__link{
                        line-height: 2px;
                }
        }
</style>