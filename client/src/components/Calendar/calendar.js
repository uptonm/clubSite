import React, { Component } from 'react'
import './calendar.css'

const calendarId = 'cdda3jcethn000va9rbcmmfams@group.calendar.google.com'

class Calendar extends Component {
    render() {
        this.calendarStyle = {
            border:0, 
            width:800, 
            height:600,
            frameborder:0, 
            scrolling:'no'
        }

        return(
            <div className="text-center">
            <iframe title='react-calendar' src="https://calendar.google.com/calendar/embed?src=cdda3jcethn000va9rbcmmfams%40group.calendar.google.com&ctz=America%2FNew_York" style={this.calendarStyle}></iframe>
            </div>
        )
    }
}

export default Calendar