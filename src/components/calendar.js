import React from "react"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import events from './events'

import './calendar.scss' // webpack must be configured to do this

export default function Calendar({ handleEventClick }) {
  return (
    <FullCalendar
      defaultView={'timeGridFourDay'}
      header={{
        right: 'timeGridFourDay'
      }}
      defaultDate={"2019-11-04"}
      views={{
        timeGridFourDay: {
          type: 'timeGrid',
          duration: { days: 4 },
          buttonText: 'Week View'
        }
      }}
      allDaySlot={false}
      minTime={"08:30:00"}
      maxTime={"21:00:00"}
      events={events}
      eventClick={(info) => handleEventClick(info)}
      plugins={[ timeGridPlugin ]}
    />
  )
}
