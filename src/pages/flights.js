import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Text } from "@chakra-ui/core"

const flights = [
  { name: "Terry Durkin",	arrive: "10:00 AM",	depart: "2:34 PM" },
  { name: "Mike Sabatini", arrive: "10:07 AM", depart: "4:50 PM" },
  { name: "Travis Schneeberger", arrive: "10:51 AM", depart:	"3:54 PM" },
  { name: "Michael Buselli", arrive: "11:25 AM", depart:	"6:20 PM" },
  { name: "Bryan Hutchinson", arrive: "12:41 PM", depart:	"1:52 PM" },
  { name: "Ben Gridley", arrive: "12:43 PM", depart:	"12:15 PM" },
  { name: "Brandon Nicholls", arrive: "12:43 PM", depart: "12:15 PM" },
  { name: "Chandler Clement", arrive: "12:43 PM", depart: "12:15 PM" },
  { name: "Drew Bowman", arrive: "12:43 PM", depart:	"2:53 PM" },
  { name: "Gregg Jensen", arrive: "12:43 PM", depart: "12:15 PM" },
  { name: "Joe Wiggins", arrive: "12:43 PM", depart:	"2:53 PM" },
  { name: "Joel Woodbury", arrive: "12:43 PM", depart:	"12:15 PM" },
  { name: "Chris Olsen", arrive: "12:43 PM", depart:	"12:15 PM" },
  { name: "Keith Roberts", arrive: "12:43 PM", depart:	"12:15 PM" },
  { name: "Matt Miller", arrive: "12:43 PM", depart:	"--" },
  { name: "Scott Orgill", arrive: "12:43 PM", depart: "12:15 PM" },
  { name: "Tadd Giles", arrive: "12:43 PM", depart: "2:53 PM" },
  { name: "Omar Soto", arrive: "2:18 PM", depart: "5:18 PM" },
  { name: "Joe Williams", arrive: "4:42 PM", depart:	"9:52 AM" },
  { name: "Lesley Markesbery", arrive: "4:44 PM", depart: "5:55 PM" },
  { name: "Kip Armstrong", arrive: "5:04 PM", depart: "3:34 PM" },
  { name: "Kevin Kronenbitter", arrive: "6:28 PM", depart:	"1:44 PM" },
  { name: "Doug Pace", arrive: "11:35 PM", depart:	"5:50 PM (Sun)" },
  { name: "Jeff Conway", arrive: "10:27AM (Tuesday)", depart: "11:30 AM" },
  { name: "Jamie Bisotti", arrive: "4:02 PM", depart: "10:05 AM" }
]
const FlightsPage = () => (
  <Layout>
    <SEO title="Housing" />
    <Text fontSize="3xl">Flight Information</Text>
      <table numRows={flights.length}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Arrive</th>
            <th>Depart</th>
          </tr>
        </thead>
        { flights.map((flight) => (
          <tr>
            <td>{flight.name}</td>
            <td>{flight.arrive}</td>
            <td>{flight.depart}</td>
          </tr>
        ))}
      </table>
  </Layout>
)

export default FlightsPage
