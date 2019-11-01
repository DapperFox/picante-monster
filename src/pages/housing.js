import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Text } from "@chakra-ui/core"
import Houses from "../components/houses"
import Map from "../components/map"

const HousingPage = () => (
  <Layout>
    <SEO title="Housing" />
    <Text fontSize="4xl">Housing Information</Text>
    <Map />
    <Houses />
  </Layout>
)

export default HousingPage
