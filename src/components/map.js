import React from "react"
import { Box, Text } from "@chakra-ui/core"

export default function Map () {
  return (
    <>
      <Text fontSize="3xl">Map</Text>
      <Box>
        <iframe title="map" src="https://www.google.com/maps/d/embed?mid=1B-QrNtsbtzDjyCzXOAZCDhudAkeiG1r7" width="920" height="800"></iframe>
      </Box>
    </>
  )
}
