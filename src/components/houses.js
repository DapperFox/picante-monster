
import React from "react"
import { Box, Badge, Image, Text, Grid } from "@chakra-ui/core"

const properties = [
  {
    imageUrl: "https://a0.muscache.com/im/pictures/481f9909-ad34-4446-ab9c-c5f25d4b8ba5.jpg?aki_policy=xx_large",
    link: "https://www.airbnb.com/rooms/31822557?source_impression_id=p3_1567638830_yVMl9HzdAQSxPnTM",
    imageAlt: "Penthouse Mansion",
    beds: 9,
    baths: 7,
    title: "Downtown Penthouse",
    occupants: ["Leah M", "Joel W", "Scott O", "Blake", "James B", "Michael B.", "Keith S."]
  },
  {
    imageUrl: "https://odis.homeaway.com/odis/listing/de334d85-1f74-4947-9347-b794619ad8b3.f10.jpg",
    link: "https://www.vrbo.com/7523399ha?arrival=2019-11-04&departure=2019-11-08&adultsCount=5",
    imageAlt: "Camelback House",
    beds: 6,
    baths: 3,
    title: "Camelback House",
    occupants: ["Jordan", "Matt", "Drew", "Keith R", "Mike S", "Ben"]
  },
  {
    imageUrl: "https://a0.muscache.com/im/pictures/1d2f9a70-4151-42ad-a692-7070f43b4285.jpg?aki_policy=xx_large",
    link: "https://www.airbnb.com/rooms/21648640?source_impression_id=p3_1568154594_JRp2mejk%2FF1iUtCo",
    imageAlt: "Old Town Scottsdale Urban Desert Retreat",
    beds: 3,
    baths: 2,
    title: "Maya Condos #1",
    occupants: ["Gaya", "Lesley"]
  },
  {
    imageUrl: "https://a0.muscache.com/im/pictures/5a77c066-7ac1-4d2c-9eea-aa2a9ed01263.jpg?aki_policy=xx_large",
    link: "https://www.airbnb.com/rooms/35673059?source_impression_id=p3_1568154995_Te7j0A6kXBH0GOam",
    imageAlt: "Luxury High-Tech Condo",
    beds: 1,
    baths: 1,
    title: "Maya Condos #2",
    occupants: ["Jason"]
  },
  {
    imageUrl: "https://a0.muscache.com/im/pictures/2778db17-9b53-444f-b575-8e32e3b69018.jpg?aki_policy=xx_large",
    link: "https://www.airbnb.com/rooms/28733486?source_impression_id=p3_1567696858_jG2JZnS2mrvUeD90",
    imageAlt: "Artsy-Heated Pool -Spa-Gym-OLD TOWN",
    beds: 1,
    baths: 1,
    title: "Maya Condos #3",
    occupants: ["Doug"]
  },
  {
    imageUrl: "https://a0.muscache.com/im/pictures/2aabfcb3-57db-426a-a90c-81459bc4cc1a.jpg?aki_policy=xx_large",
    imageAlt: "Quiet Oasis-Walk to Entertainment Dist",
    link: "https://www.airbnb.com/rooms/32773948?source_impression_id=p3_1567696835_G%2Bkt5BbZYvh%2Bi11U",
    beds: 2,
    baths: 2,
    title: "Maya Condos #4",
    occupants: ["Kip", "Tadd"]
  },
  {
    imageUrl: "https://a0.muscache.com/im/pictures/74f7083c-6eb2-4a1b-94e7-99ace686be27.jpg?aki_policy=xx_large",
    imageAlt: "Zen Space-Patio-Huge Heated Pool",
    link: "https://www.airbnb.com/rooms/26992730?source_impression_id=p3_1567696816_JlJlQGY1Z9dh7mo7",
    beds: 2,
    baths: 2,
    title: "Maya Condos #5",
    occupants: ["Kevin", "Bryan"]
  },
  {
    imageUrl: "https://a0.muscache.com/im/pictures/0ace9089-fbad-4f9e-a01e-e276febdfd9b.jpg?aki_policy=xx_large",
    imageAlt: "OLD TOWN SCOTTSDALE-Entertainment Dist",
    link: "https://www.airbnb.com/rooms/29421548?source_impression_id=p3_1567696793_UWbX9QI7ki0W5WzG",
    beds: 2,
    baths: 2,
    title: "Maya Condos #6",
    occupants: ["Joe W", "Jeff C"]
  },
  {
    imageUrl: "https://a0.muscache.com/im/pictures/7efdb98d-0194-4c7b-9ce3-d8ce1a836ddf.jpg?aki_policy=xx_large",
    imageAlt: "Boho Chic-Huge Pool-Private Patio",
    link: "https://www.airbnb.com/rooms/29260958?source_impression_id=p3_1567696761_VteATa%2BFrUQ7bFI%2B",
    beds: 2,
    baths: 2,
    title: "Maya Condos #7",
    occupants: ["Jamie", "Terry"]
  },
  {
    imageUrl: "https://a0.muscache.com/im/pictures/f6b7b1c9-116e-4434-8b66-68031996c581.jpg?aki_policy=xx_large",
    imageAlt: "Walk to Old Town. Salt water pool ground",
    link: "https://www.airbnb.com/rooms/11871260",
    beds: 2,
    baths: 2,
    title: "Maya Condos #8",
    occupants: ["Brandon", "Chandler"]
  },
  {
    imageUrl: "https://a0.muscache.com/im/pictures/3fbe45ff-264c-496d-9bb6-f68e267907d6.jpg?aki_policy=xx_large",
    imageAlt: "The Executive at the Maya",
    link: "https://www.airbnb.com/rooms/31149138",
    beds: 2,
    baths: 2,
    title: "Maya Condos #9",
    occupants: ["Gregg", "Travis"]
  },
  {
    imageUrl: "https://a0.muscache.com/im/pictures/6dbd8b54-96e7-409e-83b1-f8de2a81db94.jpg?aki_policy=xx_large",
    imageAlt: "❤️ of OldTown☕️Heated Pool☕️",
    link: "https://www.airbnb.com/rooms/31060626",
    beds: 2,
    baths: 2,
    title: "Maya Condos #10",
    occupants: ["Omar", "Joe W"]
  },
  {
    imageUrl: "https://a0.muscache.com/im/pictures/d67b5a3f-8239-48e5-b6a9-72062b490c53.jpg?aki_policy=xx_large",
    imageAlt: "Posh 2BR Condo in the Heart of Old Town",
    link: "https://www.airbnb.com/rooms/36323835",
    beds: 2,
    baths: 2,
    title: "Maya Condos #11",
    occupants: ["Chris", "Philip"]
  }
]

export default function Houses () {
  return (
  <>
    <Text fontSize="3xl">House Info</Text>
    <Grid templateColumns="repeat(3, 1fr)" gap={2}>
      { properties.map((property) => (
      <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
        <a href={property.link}>
          <Image src={property.imageUrl} alt={property.imageAlt} />
        </a>

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {property.beds} beds &bull; {property.baths} baths
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {property.title}
          </Box>

          <Box>
            <Grid templateColumns="repeat(3, 1fr)" gap={2}>
              {property.occupants.map((occupant) => (
                <Badge variantColor="green" variant="subtle">{occupant}</Badge>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    ))}
    </Grid>
  </>
)}
