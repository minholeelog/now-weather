export const dateBuilder = (d) => {
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
    'December',
  ]

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const year = d.getFullYear()
  const month = months[d.getMonth()]
  const day = days[d.getDay()]
  const date = d.getDate()

  return `${day} ${date} ${month} ${year}`
}
