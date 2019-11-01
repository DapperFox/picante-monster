import React from "react"
import { Box } from "@chakra-ui/core"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box d="flex" justifyContent="center">
      <Box m="30px" w="50%">
        <Image />
      </Box>
    </Box>
  </Layout>
)

export default IndexPage
