import React from "react"
import styled from "@emotion/styled"

import { Box, Text, Link } from "@chakra-ui/core"

const StyledBox = styled(Box)`
  margin-top: 20px;
  padding: 2px 0 0 10px;
`
export default function CurrentEvent({ info }) {
  if (!info) return null

  return (
    <StyledBox maxW="lg" borderWidth="1px" rounded="md">
      <Text fontSize="2xl">Selected Event: {info.event.title}</Text>
      <Text fontSize="m">Description: {info.event.extendedProps.description}</Text>
      <Text fontSize="md">
        Address:&nbsp;
        <Link href={`https://maps.google.com/?q=${info.event.extendedProps.address}`} isExternal>
          {info.event.extendedProps.address}
        </Link>
      </Text>
    </StyledBox>
  )
}
