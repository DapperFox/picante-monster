import React from "react"

import { Box, Text, Link, Grid } from "@chakra-ui/core"

export default function CurrentEvent({ info }) {
  if (!info) return (<div></div>)

  console.log(info.event)
  return (
    <section>
      <Text fontSize="3xl">Selected Event: {info.event.title}</Text>
      <h2>Description: {info.event.extendedProps.description}</h2>
      <p>
        Address:
        <Link href={`https://maps.google.com/?q=${info.event.extendedProps.address}`} isExternal>
          {info.event.extendedProps.address}
        </Link>
      </p>
    </section>
  )
}
