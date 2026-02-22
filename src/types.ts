export type TabId = 'inbox' | 'today' | 'calendar' | 'done';
export interface Tab {
        id: TabId;
        label: string;
}
export type Tabs = Tab[]



export type Priority = 1 | 2 | 3;
export interface Task {
        data: string;
        priority: Priority;
        date: Date;
        dueDate: Date | null;
        id: string;
        active: boolean;
}
export type Tasks = Task[]



export interface CountNotice{
        countInbox: number;
        countToday: number;
}