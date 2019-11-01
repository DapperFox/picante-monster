import React from "react"
import { Link } from "@chakra-ui/core"
import { Link as GatsbyLink } from "gatsby"
import styled from "@emotion/styled"

const StyledLink = styled(Link)`
  padding: 15px;
`
export default function Nav () {
  return (
    <nav>
      <StyledLink as={GatsbyLink} to="/housing/">Housing</StyledLink>
      <StyledLink as={GatsbyLink} to="/calendar/">Calendar</StyledLink>
      <StyledLink as={GatsbyLink} to="/tech-talk/">Tech Talk</StyledLink>
      <StyledLink as={GatsbyLink} to="/flights/">Flights</StyledLink>
    </nav>

  )
}
