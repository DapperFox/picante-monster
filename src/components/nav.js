import React from "react"
import { Link, useTheme } from "@chakra-ui/core"
import { Link as GatsbyLink } from "gatsby"
import styled from "@emotion/styled"

export default function Nav () {
  const theme = useTheme()

  const StyledLink = styled(Link)`
    padding: 15px;
    color: ${theme.colors.purple["800"]}
  `
  const StyledNav = styled.nav`
    padding-left: 10%;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: ${theme.colors.gray["400"]}
  `
  return (
    <StyledNav>
      <StyledLink as={GatsbyLink} to="/">Home</StyledLink>
      <StyledLink as={GatsbyLink} to="/housing/">Housing</StyledLink>
      <StyledLink as={GatsbyLink} to="/calendar/">Schedule</StyledLink>
      <StyledLink as={GatsbyLink} to="/tech-talk/">Tech Talk</StyledLink>
      <StyledLink as={GatsbyLink} to="/flights/">Flights</StyledLink>
    </StyledNav>

  )
}
