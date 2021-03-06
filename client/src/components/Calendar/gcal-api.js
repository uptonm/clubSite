const request = require('request')

const client = '985529780679-4r46jqvnv28eql0uj994jp3gcvnau0fm.apps.googleusercontent.com'
const key = 'jzjB1i65ArDOxXkxP-URac8V'

let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

export function getEvents (callback) {
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        const events = []
        JSON.parse(resp.text).items.map((event) => {
          events.push({
            start: event.start.date || event.start.dateTime,
            end: event.end.date || event.end.dateTime,
            title: event.summary,
          })
        })
        callback(events)
      }
    })
}
