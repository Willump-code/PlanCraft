export function formatDayMonth(date: Date) {
        const months = [
        'января', 'февраля', 'марта', 'апреля',
        'мая', 'июня', 'июля', 'августа',
        'сентября', 'октября', 'ноября', 'декабря'
        ]
        const day = date.getDate()
        const monthName = months[date.getMonth()]
        return `${day} ${monthName}`
}