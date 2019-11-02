import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Calendar from "../components/calendar"
import CurrentEvent from "../components/current-event"

const CalendarPage = () => {
  const [info, setInfo] = useState(0);

  return (
    <Layout>
      <SEO title="Calendar" />
      <h1>Schedule</h1>
      <Calendar handleEventClick={(info) => setInfo(info)} />
      <CurrentEvent info={info} />
    </Layout>
  )
}

export default CalendarPage
