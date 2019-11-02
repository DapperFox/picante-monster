import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Calendar from "../components/calendar"
import CurrentEvent from "../components/current-event"

import { Text } from "@chakra-ui/core"

const CalendarPage = () => {
  const [info, setInfo] = useState(0);

  return (
    <Layout>
      <SEO title="Schedule" />
      <Text fontSize="4xl">Schedule</Text>
      <Text fontSize="2xl">During the days on Tuesday and Wednesday, we will have water available, if you would like other snacks feel free to bring them and any drink you would like.</Text>
      <Text fontSize="1xl">Click an event for more details</Text>
      <Calendar handleEventClick={(info) => setInfo(info)} />
      <CurrentEvent info={info} />
    </Layout>
  )
}

export default CalendarPage
