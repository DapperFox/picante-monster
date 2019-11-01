import { Link } from "gatsby"
import { Text, useTheme } from "@chakra-ui/core"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"

const Header = ({ siteTitle }) => {
  const theme = useTheme()
  const StyledText = styled(Text)`
    padding-left: 10%;
    color: ${theme.colors.purple["800"]}
  `
  return (
    <header>
      <div>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          <StyledText fontSize="5xl">{siteTitle}</StyledText>
        </Link>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
