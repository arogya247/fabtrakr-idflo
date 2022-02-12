const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

export const dateutil = (d) => {
    const year = d.getFullYear()
    const date = d.getDate()
    const monthIndex = d.getMonth()
    const monthName = months[monthIndex].slice(0,3)
    const formatted = `${date} ${monthName} ${year}`
    return (formatted)
}